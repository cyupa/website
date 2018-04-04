import * as React from "react";
import { UseCases } from "../../../sections/UseCases";
import { Flex } from "../../layout/Flex";
import { Item } from "../../layout/Item";
import { Modal } from "../../layout/Modal";

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
