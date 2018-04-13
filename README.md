# Dovetail website

This project powers Dovetail's public website at https://dovetailapp.com.

# Local development

This project is based on Gatsby, to get started run: (must use [Yarn](https://yarnpkg.com/en/) due to NPM bugs)

```sh
yarn install
yarn start
```

## GraphQL ↔ TypeScript

TypeScript interfaces for queries can be generated via:

```sh
yarn generate:types
```

When to run:

* after modifying GraphQL queries
* after adding/removing frontmatter

Requirements:

* Gatsby actively serving http://localhost:8000/___graphql
* GraphQL queries must be named
* GraphQL queries must use the `graphql` tagged template literal tag

The types are placed in the `@heydovetail/website/graphql/types` module.
