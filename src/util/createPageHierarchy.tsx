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
        const fileRelPath = relative(absoluteFilePathPrefix, dirname(fileAbsolutePath));
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
        .filter(node => node.fileRelPath.startsWith(`${parent.fileRelPath}/`))
        .map(node => ({ title: node.title, path: node.path!, weight: node.weight }))
        .sort(weightComparator)
    }))
    .sort(weightComparator);
}
