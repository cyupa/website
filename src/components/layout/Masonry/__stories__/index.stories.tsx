import { storiesOf } from "@dovetailapp/website/util/stories";
import * as React from "react";
import { Masonry, MasonryItem } from "../";
import { BORDER_RADIUS, COLORS } from "../../../../constants";
import { styledViaProps } from "../../../../util/styled";

storiesOf("Layout/Masonry", module)
  .add("default", () => {
    class Example extends React.PureComponent {
      public render() {
        const items: MasonryItem[] = [];
        let step: number;

        for (step = 0; step < 50; step++) {
          items.push({
            id: `${step}`,
            node: <Box height={Math.random() * (500 - 100) + 100} />
          });
        }

        return <Masonry minColumnWidth={200} items={items} />;
      }
    }

    return <Example />;
  })
  .add("resizable", () => {
    const items: MasonryItem[] = [];

    for (let i = 0; i < 50; i++) {
      items.push({
        id: `${i}`,
        node: <Box height={Math.random() * (500 - 100) + 100} />
      });
    }

    class Example extends React.PureComponent {
      public render() {
        return (
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Masonry minColumnWidth={200} items={items} />
          </div>
        );
      }
    }

    return <Example />;
  });

const Box = styledViaProps(
  "div",
  ({ height }: { height: number }) => JSON.stringify({ height }),
  ({ height }) => ({
    backgroundColor: COLORS.i60,
    borderRadius: BORDER_RADIUS,
    height: `${height}px`,
    width: "100%"
  })
);
