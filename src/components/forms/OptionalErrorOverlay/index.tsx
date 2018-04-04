import * as React from "react";
import { styled } from "../../../util/styled";
import * as styles from "./styles";

interface Props {
  error?: string;
}

/**
 * Render an error overlay on top of an input or select.
 *
 * For convenience, if no error is provided, no overlay is rendered.
 *
 * Example:
 *
 *     <OptionalErrorOverlay error="Value required">
 *       <input type="text" />
 *     </OptionalErrorOverlay>
 */
export class OptionalErrorOverlay extends React.Component<Props> {
  public render() {
    const { children, error } = this.props;
    return error !== undefined ? (
      <Container>
        {children}
        <Error>{error}</Error>
      </Container>
    ) : (
      children
    );
  }
}

const Container = styled("span", styles.container);
const Error = styled("span", styles.error);
