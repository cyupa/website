import { Flex } from "@heydovetail/website/components/layout/Flex";
import { Item } from "@heydovetail/website/components/layout/Item";
import { Modal } from "@heydovetail/website/components/layout/Modal";
import { UseCases } from "@heydovetail/website/sections/UseCases";
import * as React from "react";

interface Props {
  onDismiss: () => void;
}

export class MobileNav extends React.PureComponent<Props> {
  public render() {
    return (
      <Modal onDismiss={this.props.onDismiss}>
        <Flex gap={24} layout="column">
          <Item>
            <h2>Use cases</h2>
          </Item>
          <Item>
            <UseCases />
          </Item>
        </Flex>
      </Modal>
    );
  }
}
