# Dovetail website

This project powers Dovetail's public marketing website at [dovetailapp.com](https://dovetailapp.com). It includes the marketing pages, help articles, terms and policies, and more.

## Local development

This project is based on [Gatsby](https://www.gatsbyjs.org/). To get started, run:

```sh
yarn install
yarn start
```

Note: You must use [Yarn](https://yarnpkg.com/en/) at the moment due to NPM bugs.

Some React components have stories. To run storybook:

```sh
yarn run storybook
```

## GraphQL ↔ TypeScript

TypeScript interfaces for queries can be generated via:

```sh
yarn generate:types
```

When to run:

* After modifying GraphQL queries.
* After adding/removing frontmatter (this also requires restarting Gatsby).

Requirements:

* Gatsby actively serving http://localhost:8000/___graphql.
* GraphQL queries must be named.
* GraphQL queries must use the `graphql` tagged template literal tag.

The types are placed in the `@heydovetail/website/graphql/types` module.

## Build

The build can be configured using the following environment variables:

* `GATSBY_BASE_URL`
* `PREVENT_CRAWLING`
* `SENTRY_DSN`
* `SENTRY_ENVIRONMENT`
* `SENTRY_RELEASE`

These are configured automatically during CI deployment, however, `GATSBY_BASE_URL` is accessed in React TypeScript, so needs to be included in a `.env.development` file in the root.

## License / Copyright

[choosealicense.com/no-permission](https://choosealicense.com/no-permission/)

We have published our marketing website on GitHub as a helpful resource for those building projects with Gatsby, however, we have intentionally included no license in this repository. This website, branding, wording, and images are © Copyright Dovetail Research Pty Ltd and may not be used for commercial use.
