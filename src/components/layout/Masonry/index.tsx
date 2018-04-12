import { zeroes } from "@heydovetail/website/util/array";
import * as React from "react";
import ReactResizeDetector from "react-resize-detector";

export interface MasonryItem {
  id: string;
  node: React.ReactNode;
}

interface Props {
  gap?: number;
  items: MasonryItem[];
  minColumnWidth: number;
}

interface State {
  containerWidth?: number;
}

export class Masonry extends React.PureComponent<Props, State> {
  public readonly state: State = {};
  private container: HTMLDivElement | null = null;

  public componentDidMount() {
    this.applyMasonryLayout();
  }

  public componentDidUpdate() {
    this.applyMasonryLayout();
  }

  public render() {
    const { items } = this.props;
    const spec = this.columnSpec();
    return (
      <div
        ref={div => {
          this.container = div;
        }}
        style={{ minHeight: 1 }}
      >
        {spec !== null
          ? items.map(item => (
              <div data-masonary-item key={item.id} style={{ position: "absolute", width: spec.width }}>
                {item.node}
              </div>
            ))
          : null}
        {process.env.NODE_ENV === "test" ? null : (
          <ReactResizeDetector
            handleWidth
            onResize={width => {
              this.setState({ containerWidth: width });
            }}
          />
        )}
      </div>
    );
  }

  private readonly columnSpec = () => {
    const { containerWidth } = this.state;
    if (containerWidth !== undefined) {
      let count = 1;
      let width = containerWidth;
      const { gap = 16 } = this.props;
      while (true) {
        const candidateCount = count + 1;
        const candidateWidth = (containerWidth - (candidateCount - 1) * gap) / candidateCount;
        if (candidateWidth > this.props.minColumnWidth) {
          count = candidateCount;
          width = candidateWidth;
        } else {
          break;
        }
      }
      return { count, gap, width };
    }
    return null;
  };

  private readonly applyMasonryLayout = () => {
    if (this.container !== null) {
      const spec = this.columnSpec();
      if (spec !== null) {
        const { count: columnCount, gap, width: columnWidth } = spec;
        const columnHeights = zeroes(columnCount);

        Array.from(this.container.children).forEach(element => {
          if (element instanceof HTMLElement && element.getAttribute("data-masonary-item") !== null) {
            // Index of the column that the item should be placed in.
            const columnTarget = columnHeights.indexOf(Math.min(...columnHeights));

            element.style.top = `${columnHeights[columnTarget]}px`;
            element.style.left = `${columnTarget * (columnWidth + gap)}px`;

            columnHeights[columnTarget] += element.clientHeight + gap;
          }
        });

        const maxColumnHeight = Math.max(...columnHeights);

        this.container.style.height = `${maxColumnHeight - gap}px`;
      }
    }
  };
}
