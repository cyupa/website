import * as React from "react";
import { forceRenderStyles, style, types } from "typestyle";

class CacheComputed<Input, Value = string> {
  private readonly cache: { [key: string]: Value } = {};

  constructor(private readonly computeKey: (input: Input) => string, private readonly computeValue: (input: Input) => Value) {}

  public get(input: Readonly<Input>): Readonly<Value> {
    const key = this.computeKey(input);
    if (key in this.cache === false) {
      const value = this.computeValue(input);
      this.cache[key] = value;
      return value;
    }
    return this.cache[key];
  }
}

type StyleDescriptor = false | types.NestedCSSProperties | null | undefined;

/**
 * A collection of component class builders based on TypeStyle style
 * definitions. Inspired by styled-components.
 *
 * The goal is to remove the boilerplate of storing the output of `style` as a
 * `className` variable, and then have something like `<div
 * className={className}>` in the JSX.
 */

/**
 * Build a component based on styling an instrisic element (i.e. HTML tag).
 *
 * The styling is frozen, meaning it can't be changed after the component is
 * built. If dynamic styling (based on props) is required, see `dynamic` below.
 *
 * Components built with `frozen` allow props to be passed through directly to
 * the wrapped instrinic element.
 *
 * Example:
 *
 *     import { styled } from "dovetail/util/styled";
 *     const RedDiv = styled('div', { color: 'red' });
 *     export const RedBlurb = () => <RedDiv id="foo">some red text</RedDiv>
 *
 * Components are given a unique class name (via `.class`) which can be used for
 * nested styling, e.g.
 *
 *     import { styled } from "dovetail/util/styled";
 *     const Button = styled('button');
 *     const Container = styled('div', {
 *       $nest: {
 *         [`&:hover ${Button.class}`]: {
 *           background: 'red'
 *         }
 *       }
 *     });
 *     export const Example = () => (
 *       <Container><Button /></Container>
 *     );
 */
export function styled<T extends keyof DOMElementTypes>(
  tag: T,
  ...descriptors: StyleDescriptor[]
): React.ComponentClass<
  JSX.IntrinsicElements[T] & {
    innerRef?: (node: DOMElementTypes[T] | null) => void;
  }
> & { class: string } {
  const styleClassName = style(...descriptors);

  type Props = JSX.IntrinsicElements[T] & {
    innerRef?: (node: DOMElementTypes[T] | null) => void;
  };

  return class FrozenStyled extends React.PureComponent<Props> {
    public static displayName = `FrozenStyled(${tag})`;
    public static class = `FrozenStyled_${uniqueFrozenClassIdCounter++}`;

    public render() {
      // 'as any' — https://github.com/Microsoft/TypeScript/issues/10727
      // tslint:disable-next-line:no-any
      const { children, className = "", innerRef, ...props } = this.props as any;

      return React.createElement(
        tag,
        {
          ...props,
          ref: innerRef,
          className: `${styleClassName} ${FrozenStyled.class} ${className}`
        },
        children
      );
    }
  };
}
let uniqueFrozenClassIdCounter = 0;

/**
 * Build a styled component, where the styles are determined by props passed to
 * the component.
 *
 * Unlike `styled`, props are not passed through to the underlying element.
 *
 * Example:
 *
 *     import { styledViaProps } from "dovetail/util/styled";
 *     const Button = styledViaProps('button',
 *       ({ primary }) => `${primary}`,
 *       ({ primary }: { primary: boolean }) => ({
 *         backgroundColor: primary ? 'blue' : 'grey'
 *       })
 *     );
 *     const primaryButton = <Button primary>
 *
 */
export function styledViaProps<T extends keyof DOMElementTypes, StyleProps>(
  tag: T,
  computeCacheKey: (props: Readonly<StyleProps>) => string,
  computeStyles: (props: Readonly<StyleProps>) => StyleDescriptor
) {
  type InnerProps = JSX.IntrinsicElements[T];
  type Props = StyleProps & {
    inner?: InnerProps;
  };

  const cache = new CacheComputed(computeCacheKey, props => {
    const className = style(computeStyles(props));
    forceRenderStyles();
    return className;
  });

  return class DynamicStyled extends React.PureComponent<Props, { className: string }> {
    public static displayName = `DynamicStyled(${tag})`;
    public static class = `DynamicStyled_${uniqueDynamicClassIdCounter++}`;
    public state = { className: cache.get(this.props) };

    public componentWillReceiveProps(nextProps: Readonly<Props>) {
      this.setState({
        className: cache.get(nextProps)
      });
    }

    public render() {
      // HACK: without explicit casting TypeScript 2.6 complains.
      const inner: InnerProps | undefined = this.props.inner;

      const innerClassName = inner !== undefined && inner.className !== undefined ? inner.className : "";
      // HACK: `as object` permits object spread to be used below.
      const innerProps = inner !== undefined ? (inner as object) : {};

      return React.createElement(
        tag,
        {
          // Avoids 'spread can only be created from object types'.
          ...innerProps,
          className: `${innerClassName} ${DynamicStyled.class} ${this.state.className}`
        },
        this.props.children
      );
    }
  };
}
let uniqueDynamicClassIdCounter = 0;

// This interface maps from element names to DOM types, for use with the
// `innerRef` prop.
interface DOMElementTypes {
  a: HTMLAnchorElement;
  abbr: HTMLElement;
  address: HTMLElement;
  area: HTMLAreaElement;
  article: HTMLElement;
  aside: HTMLElement;
  audio: HTMLAudioElement;
  b: HTMLElement;
  base: HTMLBaseElement;
  bdi: HTMLElement;
  bdo: HTMLElement;
  big: HTMLElement;
  blockquote: HTMLElement;
  body: HTMLBodyElement;
  br: HTMLBRElement;
  button: HTMLButtonElement;
  canvas: HTMLCanvasElement;
  caption: HTMLElement;
  cite: HTMLElement;
  code: HTMLElement;
  col: HTMLTableColElement;
  colgroup: HTMLTableColElement;
  data: HTMLElement;
  datalist: HTMLDataListElement;
  dd: HTMLElement;
  del: HTMLElement;
  details: HTMLElement;
  dfn: HTMLElement;
  dialog: HTMLElement;
  div: HTMLDivElement;
  dl: HTMLDListElement;
  dt: HTMLElement;
  em: HTMLElement;
  embed: HTMLEmbedElement;
  fieldset: HTMLFieldSetElement;
  figcaption: HTMLElement;
  figure: HTMLElement;
  footer: HTMLElement;
  form: HTMLFormElement;
  h1: HTMLHeadingElement;
  h2: HTMLHeadingElement;
  h3: HTMLHeadingElement;
  h4: HTMLHeadingElement;
  h5: HTMLHeadingElement;
  h6: HTMLHeadingElement;
  head: HTMLHeadElement;
  header: HTMLElement;
  hgroup: HTMLElement;
  hr: HTMLHRElement;
  html: HTMLHtmlElement;
  i: HTMLElement;
  iframe: HTMLIFrameElement;
  img: HTMLImageElement;
  input: HTMLInputElement;
  ins: HTMLModElement;
  kbd: HTMLElement;
  keygen: HTMLElement;
  label: HTMLLabelElement;
  legend: HTMLLegendElement;
  li: HTMLLIElement;
  link: HTMLLinkElement;
  main: HTMLElement;
  map: HTMLMapElement;
  mark: HTMLElement;
  menu: HTMLElement;
  menuitem: HTMLElement;
  meta: HTMLMetaElement;
  meter: HTMLElement;
  nav: HTMLElement;
  noscript: HTMLElement;
  object: HTMLObjectElement;
  ol: HTMLOListElement;
  optgroup: HTMLOptGroupElement;
  option: HTMLOptionElement;
  output: HTMLElement;
  p: HTMLParagraphElement;
  param: HTMLParamElement;
  picture: HTMLElement;
  pre: HTMLPreElement;
  progress: HTMLProgressElement;
  q: HTMLQuoteElement;
  rp: HTMLElement;
  rt: HTMLElement;
  ruby: HTMLElement;
  s: HTMLElement;
  samp: HTMLElement;
  script: HTMLScriptElement;
  section: HTMLElement;
  select: HTMLSelectElement;
  small: HTMLElement;
  source: HTMLSourceElement;
  span: HTMLSpanElement;
  strong: HTMLElement;
  style: HTMLStyleElement;
  sub: HTMLElement;
  summary: HTMLElement;
  sup: HTMLElement;
  table: HTMLTableElement;
  tbody: HTMLTableSectionElement;
  td: HTMLTableDataCellElement;
  textarea: HTMLTextAreaElement;
  tfoot: HTMLTableSectionElement;
  th: HTMLTableHeaderCellElement;
  thead: HTMLTableSectionElement;
  time: HTMLElement;
  title: HTMLTitleElement;
  tr: HTMLTableRowElement;
  track: HTMLTrackElement;
  u: HTMLElement;
  ul: HTMLUListElement;
  var: HTMLElement;
  video: HTMLVideoElement;
  wbr: HTMLElement;
}
