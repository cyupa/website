import * as React from "react";
import { Center } from "../../components/layout/Center";
import { Flex } from "../../components/layout/Flex";
import { Grid } from "../../components/layout/Grid";
import { Item } from "../../components/layout/Item";
import { Testimonial } from "../../components/site/Testimonial";
import { MediaToggle } from "../../components/util/MediaToggle";
import { BREAKPOINT_TABLET, TYPICAL_VERTICAL_GAP } from "../../constants";
import { Customers } from "../Customers";

export class SocialProof extends React.PureComponent {
  public render() {
    return (
      <Flex gap={TYPICAL_VERTICAL_GAP} layout="column">
        <Item>
          <Center>
            <h2>Trusted by product managers, designers, and researchers around the globe.</h2>
          </Center>
        </Item>
        <Item>
          <MediaToggle
            breakpoint={BREAKPOINT_TABLET}
            narrow={<Grid gap={32} gridTemplateColumns="1fr" />}
            wide={<Grid gap={32} gridTemplateColumns="1fr 1fr" />}
          >
            <Testimonial
              company="MacMillan Learning"
              image="https://s3.amazonaws.com/dovetail-dev/users/photos/ac37696c-66bf-11e7-bcc5-22000b774824/medium.jpg"
              name="Tina"
              quote="I have to say I am really loving Dovetail and the potential it has in gathering and sharing qualitative data and insights!"
              role="UX Designer"
            />
            <Testimonial
              company="Freshworks"
              image="https://s3.amazonaws.com/dovetail-dev/users/photos/ac37696c-66bf-11e7-bcc5-22000b774824/medium.jpg"
              name="Abhilash"
              quote="My team has started using Dovetail even more and the amount of productivity increase we are witnessing is amazing. Your app is simply too good!"
              role="Senior Researcher"
            />
          </MediaToggle>
        </Item>
        <Item>
          <Customers />
        </Item>
      </Flex>
    );
  }
}
