import wide from "!file-loader!./wide.svg";
import {
  BORDER_RADIUS,
  BOX_SHADOW_FOCUS,
  BOX_SHADOW_SITTING,
  COLORS,
  Flex,
  Item,
  Justify,
  SmallText
} from "@heydovetail/ui-components";
import * as React from "react";
import { styled } from "typestyle-react";

interface Props {
  defaultValue?: number;
  max: number;
  maxLabel: string;
  min: number;
  minLabel: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Slider extends React.PureComponent<Props> {
  public render() {
    const { defaultValue = 25, max, maxLabel, min, minLabel, onChange } = this.props;
    return (
      <Flex styled={{ layout: "column" }}>
        <Item>
          <Range type="range" defaultValue={`${defaultValue}`} max={max} min={min} onChange={onChange} />
        </Item>
        <Item>
          <Justify>
            <Item>
              <SmallText>{minLabel}</SmallText>
            </Item>
            <Item>
              <SmallText>{maxLabel}</SmallText>
            </Item>
          </Justify>
        </Item>
      </Flex>
    );
  }
}

const track = {
  $unique: true,
  background: COLORS.p12,
  borderRadius: BORDER_RADIUS,
  cursor: "pointer",
  height: "8px",
  margin: "16px 0",
  width: "100%"
};

const trackHover = {
  $unique: true,
  background: COLORS.p20
};

const thumb = {
  $unique: true,
  "-webkit-appearance": "none",
  backgroundColor: COLORS.purple,
  background: `url(${wide})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50% 50%",
  borderRadius: "100%",
  border: 0,
  boxShadow: BOX_SHADOW_SITTING,
  cursor: "move",
  height: "40px",
  marginTop: "-16px",
  width: "40px"
};

const thumbFocus = {
  boxShadow: BOX_SHADOW_FOCUS,
  $unique: true
};

const Range = styled("input", {
  background: "transparent",
  "-webkit-appearance": "none",
  margin: "0",
  width: "100%",

  $nest: {
    "&:focus": {
      outline: "none",
      $unique: true
    },
    "&::-webkit-slider-runnable-track": track,
    "&::-moz-range-track": track,
    "&::-ms-track": track,
    "&:hover::-webkit-slider-runnable-track": trackHover,
    "&:hover::-moz-range-track": trackHover,
    "&:hover::-ms-track": trackHover,
    "&::-webkit-slider-thumb": thumb,
    "&::-moz-range-thumb": thumb,
    "&::-ms-thumb": thumb,
    "&:focus::-webkit-slider-thumb": thumbFocus,
    "&:focus::-moz-range-thumb": thumbFocus,
    "&:focus::-ms-thumb": thumbFocus
  }
});
