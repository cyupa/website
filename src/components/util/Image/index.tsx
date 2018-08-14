import React from "react";

interface Props {
  height?: string | number;
  text?: string;
  rounded?: boolean;
  src: string;
  width?: string | number;
}

export class Image extends React.PureComponent<Props> {
  public render() {
    const { height, text = "An image", rounded = false, src, width = "100%" } = this.props;

    return (
      <img
        alt={text}
        height={height}
        title={text}
        src={src}
        style={{ borderRadius: rounded ? "100%" : undefined }}
        width={width}
      />
    );
  }
}
