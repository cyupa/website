import * as path from "path";

export async function onCreatePage({ page, boundActionCreators }) {
  const { createPage } = boundActionCreators;

  if (page.path.match(/^\/(features\/|product\/security)/)) {
    page.layout = "dark";
    createPage(page);
  }
}

export async function createPages({ boundActionCreators, graphql }) {
  const { createPage } = boundActionCreators;
  await createDocumentPages(createPage, graphql);
  await createIntegrationPages(createPage, graphql);
}

// Create the pages for /help, /legal, /guides
async function createDocumentPages(createPage, graphql) {
  const template = path.resolve(`src/templates/document.tsx`);
  const documents = await graphql(`
    query CreateDocumentPages {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              path
              title
              weight
              breadcrumbOnly
            }
          }
        }
      }
    }
  `);

  if (documents.errors) {
    throw new Error(documents.errors);
  }

  // Build a mapping of breadcrumbs (paths) to titles:
  //
  //     {
  //       "help/billing-and-payments": "Billing and payments",
  //       "help/billing-and-payments/billing": "Add or update your billing details",
  //       "help/billing-and-payments/cancel": "Cancel your subscription"
  //     }
  //
  const relPathDirInfo = {};
  for (const { node } of documents.data.allMarkdownRemark.edges) {
    const relPath = path.relative("src/pages", node.fileAbsolutePath);
    const relPathDir = path.dirname(relPath);
    relPathDirInfo[relPathDir] = {
      title: node.frontmatter.title,
      path: node.frontmatter.path
    };
  }

  function getBreadcrumb(relPath) {
    const result = [];

    while (relPath !== ".") {
      if (relPath in relPathDirInfo) {
        result.splice(0, 0, relPathDirInfo[relPath]);
      }
      relPath = path.dirname(relPath);
    }

    // Skip the last component of the breadcrumb, as this is the page itself and
    // would be shown in a page title instead of breadcrumb.
    result.pop();

    return result;
  }

  documents.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path && node.frontmatter.breadcrumbOnly !== true) {
      const breadcrumb = getBreadcrumb(path.relative("src/pages", node.fileAbsolutePath));

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {
          breadcrumb
        }
      });
    }
  });
}

// Create the pages for /integrations
async function createIntegrationPages(createPage, graphql) {
  const template = path.resolve(`src/templates/integration.tsx`);
  const integrations = await graphql(`
    query CreateIntegrationPages {
      allIntegrationsJson {
        edges {
          node {
            path
          }
        }
      }
    }
  `);

  if (integrations.errors) {
    throw new Error(integrations.errors);
  }

  integrations.data.allIntegrationsJson.edges.forEach(({ node }) => {
    if (node.path) {
      createPage({
        path: node.path,
        component: template
      });
    }
  });
}

export function modifyWebpackConfig({ config, stage }) {
  const timestamp = Date.now();

  if (stage === "build-javascript") {
    config.merge({
      output: {
        filename: `[name]-${timestamp}-[chunkhash].js`,
        chunkFilename: `[name]-${timestamp}-[chunkhash].js`
      }
    });
  }

  config
    .merge({
      resolve: {
        alias: {
          "@heydovetail/website": path.resolve(__dirname, "./src")
        }
      }
    })
    .loader("url-loader", {
      query: { limit: 1 }
    });

  return config;
}
