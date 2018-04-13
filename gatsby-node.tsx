import * as path from "path";
import { graphql } from "./src/util/graphql";

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/\/404/) || page.path.match(/product\/security/)) {
      page.layout = "dark";

      createPage(page);
    }

    resolve();
  });
};

exports.createPages = ({ boundActionCreators, graphql: query }) => {
  const { createPage } = boundActionCreators;
  const template = path.resolve(`src/templates/document.tsx`);

  return query(graphql`
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
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}
      });
    });
  });
};

exports.modifyWebpackConfig = ({ config, env }) => {
  config.merge({
    resolve: {
      alias: {
        "@heydovetail/website": path.resolve(__dirname, "./src")
      }
    }
  });

  return config;
};
