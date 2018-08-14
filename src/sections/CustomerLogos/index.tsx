import { FlexWrap, Item, LocationLink } from "@heydovetail/ui-components";
import { Customer } from "@heydovetail/website/components/icons/customers";
import React from "react";
import { style } from "typestyle-react";

interface Props {
  customers: ReadonlyArray<Customer>;
}

export class CustomerLogos extends React.PureComponent<Props> {
  public render() {
    const { customers } = this.props;
    return (
      <FlexWrap styled={{ gap: 64, justifyContent: "center" }}>
        {customers.map((c, i) => (
          <Item key={i}>
            <LocationLink className={linkClassName} location={{ internal: false, url: c.url, openInNewTab: true }}>
              <img alt={c.url} src={c.logo} title={c.url} width="100%" />
            </LocationLink>
          </Item>
        ))}
      </FlexWrap>
    );
  }
}

const linkClassName = style({
  display: "block",
  opacity: 1,

  $nest: {
    "&:hover, &:focus": {
      opacity: 0.9
    }
  }
});
