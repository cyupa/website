import { COLORS } from "@heydovetail/website/constants";
import { styled, styledViaProps } from "@heydovetail/website/util/styled";
import * as React from "react";

interface Props {
  borderColor?: string;
  url: string | null;
  presenceColor?: string;
  size?: number;
}

export class Avatar extends React.PureComponent<Props> {
  public render() {
    const { borderColor, url, presenceColor, size = 24 } = this.props;

    return (
      <AvatarWrapper>
        {presenceColor !== undefined ? (
          <Presence
            style={{
              background: presenceColor,
              boxShadow: `0 0 0 2px ${borderColor !== undefined ? borderColor : COLORS.white}`
            }}
          />
        ) : null}
        {url !== null ? (
          <Image borderColor={borderColor} inner={{ height: size, src: url, width: size }} />
        ) : (
          <PlaceholderImage size={size} />
        )}
      </AvatarWrapper>
    );
  }
}

const AvatarWrapper = styled("span", {
  display: "inline-block",
  position: "relative"
});

const Image = styledViaProps(
  "img",
  ({ borderColor }) => `${borderColor}`,
  (props: { borderColor?: string }) => ({
    alignItems: "center",
    boxShadow: props.borderColor !== undefined ? `0 0 0 2px ${props.borderColor}` : undefined,
    borderRadius: "100%",
    color: COLORS.i60,
    display: "flex"
  })
);

const PlaceholderImage = styledViaProps(
  "span",
  ({ size }) => `${size}`,
  (props: { size?: number }) => ({
    alignItems: "center",
    backgroundColor: COLORS.i08,
    borderRadius: "100%",
    display: "flex",
    height: `${props.size}px`,
    width: `${props.size}px`
  })
);

const Presence = styled("span", {
  borderRadius: "100%",
  bottom: "0",
  display: "block",
  height: "8px",
  position: "absolute",
  right: "0",
  width: "8px"
});
