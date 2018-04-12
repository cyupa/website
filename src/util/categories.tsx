import { MasonryItem } from "@heydovetail/website/components/layout/Masonry";
import { PageGroup } from "@heydovetail/website/components/site/PageGroup";
import { sortComparatorAsc } from "@heydovetail/website/util/array";
import { groupBy } from "lodash";
import React = require("react");

export const helpCategories = {
  start: "Get started",
  import: "Import your data",
  account: "Manage your account",
  team: "Manage your team",
  export: "Export your data",
  billing: "Billing and payments",
  misc: "Miscellaneous"
};

export const legalCategories = {
  terms: "Terms",
  policies: "Policies"
};

const helpCategoriesOrder = ["start", "import", "team", "billing", "account", "export", "misc"];
const legalCategoriesOrder = ["terms", "policies"];

export function generateDocumentCategoryGroups(edges: {}, section: "help" | "legal"): MasonryItem[] {
  const categories = groupBy(edges, edge => edge.node.frontmatter.category);
  return Object.keys(categories)
    .map((category, i) => ({
      id: `${i}`,
      node: (
        <PageGroup
          pages={categories[category]
            .map(edge => ({
              title: edge.node.frontmatter.title,
              path: edge.node.frontmatter.path
            }))
            .sort(sortComparatorAsc(article => article.title))}
          title={section === "help" ? helpCategories[category] : legalCategories[category]}
        />
      ),
      sortKey: section === "help" ? helpCategoriesOrder.indexOf(category) : legalCategoriesOrder.indexOf(category)
    }))
    .sort(sortComparatorAsc(card => card.sortKey));
}
