/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface GuideIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          date: string | null;
          path: string | null;
          title: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface HelpIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          date: string | null;
          path: string | null;
          title: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface LegalIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        fileAbsolutePath: string | null;
        frontmatter: {
          breadcrumbOnly: boolean | null;
          date: string | null;
          path: string | null;
          title: string | null;
          weight: number | null;
        } | null;
      } | null;
    } | null> | null;
  } | null;
}

export interface DocumentByPathQueryVariables {
  path: string;
}

export interface DocumentByPathQuery {
  markdownRemark: {
    excerpt: string | null;
    html: string | null;
    frontmatter: {
      date: string | null;
      path: string | null;
      title: string | null;
    } | null;
  } | null;
}
