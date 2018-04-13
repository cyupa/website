/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface HelpIndexQuery {
  // Connection to all MarkdownRemark nodes
  allMarkdownRemark: {
    // A list of edges.
    edges: Array<{
      // The item at the end of the edge
      node: {
        // The id of this node.
        id: string;
        frontmatter: {
          category: string | null;
          date: string | null;
          path: string | null;
          title: string | null;
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
        frontmatter: {
          category: string | null;
          date: string | null;
          path: string | null;
          title: string | null;
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
    html: string | null;
    frontmatter: {
      category: string | null;
      date: string | null;
      path: string | null;
      title: string | null;
    } | null;
  } | null;
}
