import { omitNull, sortComparatorAsc } from "@heydovetail/website/util/array";
import { dirname, relative } from "path";

interface ChildPage {
  title: string;
  path: string;
}

interface ParentPage {
  title: string;
  children: ChildPage[];
}

const weightComparator = sortComparatorAsc<{ weight: number }>(item => item.weight);

export function createPageHierarchy(
  allMarkdownRemark: {
    edges: Array<{
      node: {
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          title: string | null;
          path: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null,
  absoluteFilePathPrefix: string
): ParentPage[] {
  // TODO: I think this code should exist in the GraphQL API, rather than be
  // exposed front-end.
  const safeNodes: Array<{
    path: string | null;
    fileRelPath: string;
    title: string;
    isParent: boolean;
    weight: number;
  }> = [];

  if (allMarkdownRemark !== null && allMarkdownRemark.edges !== null) {
    const nodes = omitNull(omitNull(allMarkdownRemark.edges).map(edge => edge.node));
    for (const { fileAbsolutePath, frontmatter } of nodes) {
      if (fileAbsolutePath !== null && frontmatter !== null) {
        let fileRelPath = relative(absoluteFilePathPrefix, dirname(fileAbsolutePath));

        // The line above returns different things depending on whether Gatsby is building static pages
        // during server build, or whether it's running when JS loads in the browser.
        //
        // During server build it looks like this:
        // fileRelPath:  terms/customer-terms
        //
        // But when run in the browser, it looks like this:
        // fileRelPath:  ../../../Users/humphreybc/Code/dovetail-website/src/pages/legal/terms/customer-terms
        //
        // I'm not sure if this is a bug in Gatsby v2 or not.
        // For now, this is the workaround:

        if (fileRelPath.includes("pages")) {
          fileRelPath = fileRelPath.split(absoluteFilePathPrefix)[1].replace(/^\/+/g, "");
        }

        const { path, title, weight } = frontmatter;

        if (title === null) {
          throw new Error(`Missing title frontmatter in ${fileAbsolutePath}`);
        }

        if (fileRelPath !== "") {
          safeNodes.push({
            path,
            fileRelPath,
            title,
            weight: weight !== null ? weight : 0,
            isParent: fileRelPath.match(/\//) === null
          });
        }
      }
    }
  }

  return safeNodes
    .filter(node => node.isParent)
    .map(parent => ({
      title: parent.title,
      weight: parent.weight,
      children: safeNodes
        .filter(node => node.fileRelPath.lastIndexOf(`${parent.fileRelPath}/`, 0) === 0)
        .map(node => ({ title: node.title, path: node.path!, weight: node.weight }))
        .sort(weightComparator)
    }))
    .sort(weightComparator);
}
