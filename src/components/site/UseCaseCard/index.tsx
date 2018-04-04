import * as React from "react";
import { COLORS } from "../../../constants";
import { styled } from "../../../util/styled";

interface Props {
  image: React.ReactNode;
  location: string;
  title: string;
}

export class UseCaseCard extends React.PureComponent<Props> {
  public render() {
    return <Link />;
  }
}

const Link = styled("a", {
  backgroundColor: COLORS.p04,
  padding: "24px"
});
