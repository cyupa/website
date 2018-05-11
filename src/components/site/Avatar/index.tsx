import { COLORS } from "@heydovetail/ui-components";
import React from "react";
import { styled } from "typestyle-react";

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
          <Image styled={{ borderColor }} height={size} src={url} width={size} />
        ) : (
          <PlaceholderImage styled={{ size }} />
        )}
      </AvatarWrapper>
    );
  }
}

const AvatarWrapper = styled("span", {
  display: "inline-block",
  position: "relative"
});

const Image = styled("img", ({ borderColor }: { borderColor?: string }) => ({
  alignItems: "center",
  boxShadow: borderColor !== undefined ? `0 0 0 2px ${borderColor}` : undefined,
  borderRadius: "100%",
  color: COLORS.i60,
  display: "flex"
}));

const PlaceholderImage = styled("span", ({ size }: { size?: number }) => ({
  alignItems: "center",
  backgroundColor: COLORS.i08,
  borderRadius: "100%",
  display: "flex",
  height: `${size}px`,
  width: `${size}px`
}));

const Presence = styled("span", {
  borderRadius: "100%",
  bottom: "0",
  display: "block",
  height: "8px",
  position: "absolute",
  right: "0",
  width: "8px"
});
