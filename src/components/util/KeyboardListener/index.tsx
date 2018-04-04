import * as React from "react";

type EventType = "keydown" | "keypress" | "keyup";
// See https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values for values
type EventKey = "Escape" | "Enter" | "Tab";

interface Props {
  eventType: EventType;
  eventKey: EventKey;
  onEvent: (e: KeyboardEvent) => void;
  preventDefault?: boolean;
}

export class KeyboardListener extends React.Component<Props> {
  public shouldComponentUpdate(): boolean {
    return false;
  }

  public componentDidMount(): void {
    this.bind();
  }

  public componentWillReceiveProps(nextProps: Props): void {
    if (this.props.eventType !== nextProps.eventType) {
      this.unbind();
      this.bind(nextProps);
    }
  }

  public componentWillUnmount(): void {
    this.unbind();
  }

  public render() {
    return null;
  }

  private readonly handleEvent = (e: KeyboardEvent) => {
    if (e.key === this.props.eventKey) {
      if (this.props.preventDefault === true) {
        e.preventDefault();
      }
      this.props.onEvent(e);
    }
  };

  private readonly bind = (props: Props = this.props): void => {
    document.addEventListener(props.eventType, this.handleEvent);
  };

  private readonly unbind = (props: Props = this.props): void => {
    document.removeEventListener(props.eventType, this.handleEvent);
  };
}
