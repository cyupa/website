// import { Container } from "@heydovetail/website/components/layout/Container";
// import { Flex } from "@heydovetail/website/components/layout/Flex";
// import { Item } from "@heydovetail/website/components/layout/Item";
// import { Breadcrumbs } from "@heydovetail/website/components/site/Breadcrumbs";
// import { Date } from "@heydovetail/website/components/site/Date";
// import { HeroText } from "@heydovetail/website/components/site/HeroText";
// import { PageContent } from "@heydovetail/website/components/site/PageContent";
// import { COLORS, HALF_GAP, PADDING, WIDTH } from "@heydovetail/website/constants";
// import { IntegrationByPathQuery } from "@heydovetail/website/graphql/types";
// import { internal } from "@heydovetail/website/routing/locations";
// import { graphql } from "@heydovetail/website/util/graphql";
// import React from "react";
// import { styled } from "typestyle-react";

// interface Props {
//   data: IntegrationByPathQuery;
//   pathContext: { breadcrumb: Array<{ path: string | null; title: string | null }> };
// }

// export default function IntegrationTemplate({ data, pathContext }: Props) {
//   const { integrationsJson } = data;
//   const { date, description, title } = integrationsJson!;

//   return (
//     <Container styled={{ maxWidth: WIDTH, padding: { x: PADDING, y: HALF_GAP } }}>
//       <div style={{ maxWidth: WIDTH * 0.75 }}>
//         {/* <Breadcrumbs
//           crumbs={pathContext.breadcrumb.map(breadcrumb => ({
//             location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
//             text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
//           }))}
//         /> */}
//         <Flex styled={{ gap: 16, layout: "column" }}>
//           <Item>
//             <HeroText center={false} title={title!} />
//           </Item>
//           <Item>
//             <Date>Last updated {date!}</Date>
//           </Item>
//           <Item>
//             <PageContent html={description!} />
//           </Item>
//           <HorizontalRule />
//           <Item>
//             {/* <Breadcrumbs
//               crumbs={pathContext.breadcrumb.map(breadcrumb => ({
//                 location: breadcrumb.path !== null ? internal(breadcrumb.path) : undefined,
//                 text: breadcrumb.title !== null ? breadcrumb.title : "Untitled article"
//               }))}
//             /> */}
//           </Item>
//         </Flex>
//       </div>
//     </Container>
//   );
// }

// const HorizontalRule = styled("hr", {
//   backgroundColor: COLORS.i04,
//   border: 0,
//   margin: "32px 0",
//   height: "2px"
// });

// export const integrationQuery = graphql`
//   query IntegrationByPath($path: String!) {
//     integrationsJson(path: { eq: $path }) {
//       app
//       createUrl
//       date(formatString: "MMMM DD, YYYY")
//       description
//       title
//     }
//   }
// `;
