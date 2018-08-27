// Workaround for https://github.com/gatsbyjs/gatsby/issues/7454
exports.shouldUpdateScroll = () => {
  if (window.navigatingToLink === true) {
    return [0, 0];
  }
  return true;
};

exports.onRouteUpdate = () => {
  window.navigatingToLink = false;
};
