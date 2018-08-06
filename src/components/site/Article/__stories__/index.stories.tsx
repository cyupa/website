import image from "!file-loader!./1.jpg";
import logo from "!file-loader!./logo.png";
import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { Article } from "../";

storiesOf(Article.name, module).add("Example", () => (
  <Article
    image={image}
    insetImage={logo}
    location={{ internal: true, path: "/customers/ftw" }}
    title={
      <>
        <b>For the Win</b> helps startups nail employee onboarding
      </>
    }
  />
));
