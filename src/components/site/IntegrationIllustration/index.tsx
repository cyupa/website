import React from "react";

interface Props {
  color: string;
  icon: string;
}

export class IntegrationIllustration extends React.PureComponent<Props> {
  public render() {
    const { color, icon } = this.props;
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 400">
        <g fill="none" fillRule="evenodd">
          <rect fill={color} opacity={0.4} transform="rotate(45 104 168)" x={72} y={96} width={64} height={144} rx={3} />
          <rect fill={color} opacity={0.4} transform="rotate(45 296 232)" x={264} y={160} width={64} height={144} rx={3} />
          <rect fill={color} transform="rotate(45 200 200)" x={168} width={64} height={400} rx={3} />
          <rect fill={color} opacity={0.6} transform="rotate(45 256 208)" x={224} y={72} width={64} height={272} rx={3} />
          <rect fill={color} opacity={0.6} transform="rotate(45 144 192)" x={112} y={56} width={64} height={272} rx={3} />
          <rect fill="#FFF" x={168} y={168} width={64} height={64} rx={3} />
          <image xlinkHref={icon} x="184" y="184" height="32px" width="32px" />
        </g>
      </svg>
    );
  }
}
