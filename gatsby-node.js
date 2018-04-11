exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    if (page.path.match(/^\/404/)) {
      page.layout = "error";

      createPage(page);
    }

    resolve();
  });
};
