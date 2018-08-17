import { Flex, Item } from "@heydovetail/ui-components";
import illustrationFilesLarge from "@heydovetail/website/components/illustrations/files-large.svg";
import { Center } from "@heydovetail/website/components/layout/Center";
import { DarkContainer } from "@heydovetail/website/components/layout/DarkContainer";
import { PageLayout } from "@heydovetail/website/components/layout/PageLayout";
import { Features } from "@heydovetail/website/components/site/Features";
import { Hero } from "@heydovetail/website/components/site/Hero";
import { Image } from "@heydovetail/website/components/util/Image";
import { HALF_GAP } from "@heydovetail/website/constants";
import { CenteredSignUp } from "@heydovetail/website/sections/CenteredSignUp";
import React from "react";
import { Helmet } from "react-helmet";

export default class extends React.PureComponent {
  public render() {
    return (
      <PageLayout dark>
        <Helmet>
          <title>Images and Files – Dovetail</title>
          <meta property="og:title" content="Images and Files – Dovetail" />
          <meta
            property="og:description"
            content="Drag and drop images, recordings, videos, presentations, and more into notes and insights."
          />
          <meta
            name="description"
            content="Drag and drop images, recordings, videos, presentations, and more into notes and insights."
          />
        </Helmet>
        <DarkContainer>
          <Center>
            <Flex styled={{ gap: HALF_GAP / 2, layout: "column" }}>
              <Item>
                <Hero
                  title="Keep your files in context."
                  text="Drag and drop images, recordings, videos, presentations, and more into notes and insights."
                />
              </Item>
              <Item>
                <Image src={illustrationFilesLarge} />
              </Item>
            </Flex>
          </Center>
          <Features
            features={[
              {
                text:
                  "Insert images of all shapes and sizes. Dovetail generates device-specific previews and handles SVGs and retina images.",
                title: "Images"
              },
              {
                text:
                  "Drag and drop any file type into notes, tags, or insights. Keep audio and video recordings with transcripts or reference PDFs and slide decks.",
                title: "Files"
              },
              {
                text:
                  "Drag and drop multiple files at once and Dovetail will upload them seamlessly in the background so you can keep working without interruption.",
                title: "Bulk upload"
              },
              {
                text:
                  "All files are encrpyted in the database. Image and file URLs are dynamically generated with a 15 minute access window for extra security.",
                title: "Secure access"
              }
            ]}
            large
          />
          <CenteredSignUp dark />
        </DarkContainer>
      </PageLayout>
    );
  }
}
