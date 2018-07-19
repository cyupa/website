import { COLORS, FlexWrap, Item } from "@heydovetail/ui-components";
import { Customer } from "@heydovetail/website/components/icons/customers";
import React from "react";
import { styled } from "typestyle-react";

interface Props {
  color?: string;
  customers: ReadonlyArray<Customer>;
}

export class CustomerLogos extends React.PureComponent<Props> {
  public render() {
    const { color = COLORS.i60, customers } = this.props;
    return (
      <div style={{ color: color }}>
        <FlexWrap styled={{ gap: 64, justifyContent: "center" }}>
          {customers.map((c, i) => (
            <Item key={i}>
              <Link href={c.url} target="_blank">
                {c.logo}
              </Link>
            </Item>
          ))}
        </FlexWrap>
      </div>
    );
  }
}

const Link = styled("a", {
  color: "inherit !important",
  display: "block",
  transition: "250ms transform cubic-bezier(.2, .45, 0, 1)",

  $nest: {
    "&:hover, &:focus": {
      transform: "scale(1.2)"
    }
  }
});
