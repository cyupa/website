import { COLORS, ToggleSwitch } from "@heydovetail/ui-components";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  onToggle: () => void;
  yearly: boolean;
}

export class IntervalToggle extends React.PureComponent<Props> {
  public render() {
    const { onToggle, yearly } = this.props;

    return (
      <Wrapper>
        <Label styled={{ yearly: !yearly }}>Pay monthly</Label>
        <ToggleSwitch alwaysPurple on={yearly} onToggle={onToggle} />
        <Label styled={{ yearly }}>Pay yearly (save 50%)</Label>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  alignItems: "center",
  display: "flex",
  justifyContent: "center"
});

const Label = styled("div", ({ yearly }: { yearly: boolean }) => ({
  color: yearly ? COLORS.purple : COLORS.i60,
  fontSize: 12,
  fontWeight: 600,
  margin: "0 12px"
}));
