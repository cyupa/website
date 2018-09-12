import { BREAKPOINT_PHONE, COLORS, ToggleSwitch } from "@heydovetail/ui-components";
import React from "react";
import { media } from "typestyle";
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
        <Label styled={{ yearly: !yearly }} style={{ textAlign: "right" }}>
          Pay monthly
        </Label>
        <ToggleSwitch alwaysPurple on={yearly} onToggle={onToggle} />
        <Label styled={{ yearly }}>Pay yearly (save 50%)</Label>
      </Wrapper>
    );
  }
}

const Wrapper = styled(
  "div",
  {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  media(
    { maxWidth: BREAKPOINT_PHONE },
    {
      justifyContent: "flex-start"
    }
  )
);

const Label = styled(
  "div",
  ({ yearly }: { yearly: boolean }) => ({
    color: yearly ? COLORS.purple : COLORS.i60,
    flex: "1 1 33%",
    fontSize: 12,
    fontWeight: 600,
    margin: "0 12px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  media(
    { maxWidth: BREAKPOINT_PHONE },
    {
      flex: "0 0 auto"
    }
  )
);
