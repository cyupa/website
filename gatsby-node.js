import * as path from "path";

export async function onCreatePage({ page, boundActionCreators }) {
  const { createPage } = boundActionCreators;

  if (page.path.match(/\/404/) || page.path.match(/product\/security/)) {
    page.layout = "dark";

    createPage(page);
  }
}

export async function createPages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;
  const template = path.resolve(`src/templates/document.tsx`);

  const result = await graphql(`
    query CreatePages {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: template,
      context: {}
    });
  });
}

export function modifyWebpackConfig({ config, env }) {
  config.merge({
    resolve: {
      alias: {
        "@heydovetail/website": path.resolve(__dirname, "./src")
      }
    }
  });

  return config;
}
