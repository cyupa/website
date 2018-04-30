import { Container } from "@heydovetail/website/components/layout/Container";
import { WIDTH } from "@heydovetail/website/constants";
import * as React from "react";

interface State {
  error: boolean;
}

interface Props {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<Props, State> {
  public state: Readonly<State> = {
    error: false
  };

  public componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    this.setState({ error: true });
    // tslint:disable-next-line:no-typeof-undefined
    if (typeof Raven !== "undefined") {
      Raven.captureException(error, { extra: errorInfo });
    }
  }

  public render() {
    if (this.state.error) {
      return (
        <Container maxWidth={WIDTH} padding={{ x: 24, y: 128 }}>
          <p>
            Something has gone wrong. Please try each of the steps below to see if your problem is resolved, and if you’re still
            having issues, contact us at <b>hello@dovetailapp.com</b>.
          </p>
          <ul>
            <li>
              <p>Refresh the current page</p>
            </li>
            <li>
              <p>Go back to the previous page</p>
            </li>
            <li>
              <p>Try another browser or device</p>
            </li>
          </ul>
        </Container>
      );
    } else {
      return this.props.children;
    }
  }
}
