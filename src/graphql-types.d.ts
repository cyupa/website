/* tslint:disable */

/* A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any;

/* The &#x60;JSON&#x60; scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
export type JSON = any;
/* An object with an id, parent, and children */
export interface Node {
  id: string /* The id of the node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
}

export interface RootQueryType {
  allSitePage?: SitePageConnection | null /* Connection to all SitePage nodes */;
  allSitePlugin?: SitePluginConnection | null /* Connection to all SitePlugin nodes */;
  allDirectory?: DirectoryConnection | null /* Connection to all Directory nodes */;
  allFile?: FileConnection | null /* Connection to all File nodes */;
  allMarkdownRemark?: MarkdownRemarkConnection | null /* Connection to all MarkdownRemark nodes */;
  sitePage?: SitePage | null;
  sitePlugin?: SitePlugin | null;
  site?: Site | null;
  directory?: Directory | null;
  file?: File | null;
  markdownRemark?: MarkdownRemark | null;
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SitePageEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sitePageGroupConnectionConnection[] | null;
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean /* When paginating, are there more items? */;
}
/* An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage | null /* The item at the end of the edge */;
  next?: SitePage | null /* The next edge in the connection */;
  previous?: SitePage | null /* The previous edge in the connection */;
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  layout?: string | null;
  jsonName?: string | null;
  internalComponentName?: string | null;
  path?: string | null;
  component?: string | null;
  componentChunkName?: string | null;
  pluginCreator?: SitePlugin | null;
  pluginCreatorId?: string | null;
  componentPath?: string | null;
  internal?: internal_7 | null;
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  resolve?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_3 | null;
  nodeAPIs?: string[] | null;
  ssrAPIs?: string[] | null;
  pluginFilepath?: string | null;
  packageJson?: packageJson_2 | null;
  internal?: internal_8 | null;
}

export interface pluginOptions_3 {
  plugins?: plugins_2[] | null;
  logo?: string | null;
  injectHTML?: boolean | null;
  icons?: icons_2 | null;
  path?: string | null;
  name?: string | null;
  maxWidth?: number | null;
}

export interface plugins_2 {
  resolve?: string | null;
  id?: string | null;
  name?: string | null;
  version?: string | null;
  pluginOptions?: pluginOptions_4 | null;
  pluginFilepath?: string | null;
}

export interface pluginOptions_4 {
  maxWidth?: number | null;
}

export interface icons_2 {
  android?: boolean | null;
  appleIcon?: boolean | null;
  appleStartup?: boolean | null;
  coast?: boolean | null;
  favicons?: boolean | null;
  firefox?: boolean | null;
  twitter?: boolean | null;
  yandex?: boolean | null;
  windows?: boolean | null;
}

export interface packageJson_2 {
  name?: string | null;
  description?: string | null;
  version?: string | null;
  main?: string | null;
  author?: string | null;
  license?: string | null;
  dependencies?: dependencies_2[] | null;
  devDependencies?: devDependencies_2[] | null;
  peerDependencies?: peerDependencies_2[] | null;
  keywords?: string[] | null;
}

export interface dependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface devDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface peerDependencies_2 {
  name?: string | null;
  version?: string | null;
}

export interface internal_8 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface internal_7 {
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sitePageGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage | null /* The item at the end of the edge */;
  next?: SitePage | null /* The next edge in the connection */;
  previous?: SitePage | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: SitePluginEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: sitePluginGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin | null /* The item at the end of the edge */;
  next?: SitePlugin | null /* The next edge in the connection */;
  previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: sitePluginGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin | null /* The item at the end of the edge */;
  next?: SitePlugin | null /* The next edge in the connection */;
  previous?: SitePlugin | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface DirectoryConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: DirectoryEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: directoryGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface DirectoryEdge {
  node?: Directory | null /* The item at the end of the edge */;
  next?: Directory | null /* The next edge in the connection */;
  previous?: Directory | null /* The previous edge in the connection */;
}
/* Node of type Directory */
export interface Directory extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  internal?: internal_9 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
  root?: string | null;
  dir?: string | null;
  base?: string | null;
  ext?: string | null;
  name?: string | null;
  relativeDirectory?: string | null;
  dev?: number | null;
  mode?: number | null;
  nlink?: number | null;
  uid?: number | null;
  gid?: number | null;
  rdev?: number | null;
  blksize?: number | null;
  ino?: number | null;
  blocks?: number | null;
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
}

export interface internal_9 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface directoryGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: directoryGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface directoryGroupConnectionEdge {
  node?: Directory | null /* The item at the end of the edge */;
  next?: Directory | null /* The next edge in the connection */;
  previous?: Directory | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: FileEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: fileGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface FileEdge {
  node?: File | null /* The item at the end of the edge */;
  next?: File | null /* The next edge in the connection */;
  previous?: File | null /* The previous edge in the connection */;
}
/* Node of type File */
export interface File extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  childMarkdownRemark?: MarkdownRemark | null /* The child of this node of type markdownRemark */;
  internal?: internal_10 | null;
  sourceInstanceName?: string | null;
  absolutePath?: string | null;
  relativePath?: string | null;
  extension?: string | null;
  size?: number | null;
  prettySize?: string | null;
  modifiedTime?: Date | null;
  accessTime?: Date | null;
  changeTime?: Date | null;
  birthTime?: Date | null;
  root?: string | null;
  dir?: string | null;
  base?: string | null;
  ext?: string | null;
  name?: string | null;
  relativeDirectory?: string | null;
  dev?: number | null;
  mode?: number | null;
  nlink?: number | null;
  uid?: number | null;
  gid?: number | null;
  rdev?: number | null;
  blksize?: number | null;
  ino?: number | null;
  blocks?: number | null;
  atimeMs?: number | null;
  mtimeMs?: number | null;
  ctimeMs?: number | null;
  birthtimeMs?: number | null;
  atime?: Date | null;
  mtime?: Date | null;
  ctime?: Date | null;
  birthtime?: Date | null;
  publicURL?: string | null /* Copy file to static directory and return public url to it */;
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  internal?: internal_11 | null;
  frontmatter?: frontmatter_2 | null;
  excerpt?: string | null;
  fileAbsolutePath?: string | null;
  html?: string | null;
  htmlAst?: JSON | null;
  headings?: MarkdownHeading[] | null;
  timeToRead?: number | null;
  tableOfContents?: string | null;
  wordCount?: wordCount | null;
}

export interface internal_11 {
  content?: string | null;
  type?: string | null;
  contentDigest?: string | null;
  owner?: string | null;
}

export interface frontmatter_2 {
  title?: string | null;
  category?: string | null;
  path?: string | null;
  date?: Date | null;
  _PARENT?: string | null;
  parent?: string | null;
}

export interface MarkdownHeading {
  value?: string | null;
  depth?: number | null;
}

export interface wordCount {
  paragraphs?: number | null;
  sentences?: number | null;
  words?: number | null;
}

export interface internal_10 {
  contentDigest?: string | null;
  mediaType?: string | null;
  type?: string | null;
  owner?: string | null;
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: fileGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File | null /* The item at the end of the edge */;
  next?: File | null /* The next edge in the connection */;
  previous?: File | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: MarkdownRemarkEdge[] | null /* A list of edges. */;
  totalCount?: number | null;
  distinct?: string[] | null;
  group?: markdownRemarkGroupConnectionConnection[] | null;
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
  node?: MarkdownRemark | null /* The item at the end of the edge */;
  next?: MarkdownRemark | null /* The next edge in the connection */;
  previous?: MarkdownRemark | null /* The previous edge in the connection */;
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo /* Information to aid in pagination. */;
  edges?: markdownRemarkGroupConnectionEdge[] | null /* A list of edges. */;
  field?: string | null;
  fieldValue?: string | null;
  totalCount?: number | null;
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node?: MarkdownRemark | null /* The item at the end of the edge */;
  next?: MarkdownRemark | null /* The next edge in the connection */;
  previous?: MarkdownRemark | null /* The previous edge in the connection */;
}
/* Node of type Site */
export interface Site extends Node {
  id: string /* The id of this node. */;
  parent?: Node | null /* The parent of this node. */;
  children?: Node[] | null /* The children of this node. */;
  siteMetadata?: siteMetadata_2 | null;
  port?: Date | null;
  host?: string | null;
  pathPrefix?: string | null;
  polyfill?: boolean | null;
  buildTime?: Date | null;
  internal?: internal_12 | null;
}

export interface siteMetadata_2 {
  siteName?: string | null;
}

export interface internal_12 {
  contentDigest?: string | null;
  type?: string | null;
  owner?: string | null;
}

export interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[];
  order?: sitePageConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSitePage {
  layout?: sitePageConnectionLayoutQueryString | null;
  jsonName?: sitePageConnectionJsonNameQueryString | null;
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString | null;
  path?: sitePageConnectionPathQueryString_2 | null;
  component?: sitePageConnectionComponentQueryString | null;
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString | null;
  pluginCreator?: sitePageConnectionPluginCreatorInputObject | null;
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageConnectionComponentPathQueryString | null;
  id?: sitePageConnectionIdQueryString_2 | null;
  internal?: sitePageConnectionInternalInputObject_2 | null;
}

export interface sitePageConnectionLayoutQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInputObject {
  resolve?: sitePageConnectionPluginCreatorResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorIdQueryString | null;
  name?: sitePageConnectionPluginCreatorNameQueryString | null;
  version?: sitePageConnectionPluginCreatorVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePageConnectionPluginCreatorNodeApIsQueryList | null;
  ssrAPIs?: sitePageConnectionPluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePageConnectionPluginCreatorPackageJsonInputObject | null;
  parent?: sitePageConnectionPluginCreatorParentQueryString | null;
  internal?: sitePageConnectionPluginCreatorInternalInputObject | null;
}

export interface sitePageConnectionPluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInputObject {
  plugins?: sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList | null;
  logo?: sitePageConnectionPluginCreatorPluginOptionsLogoQueryString | null;
  injectHTML?: sitePageConnectionPluginCreatorPluginOptionsInjectHtmlQueryBoolean | null;
  icons?: sitePageConnectionPluginCreatorPluginOptionsIconsInputObject | null;
  path?: sitePageConnectionPluginCreatorPluginOptionsPathQueryString | null;
  name?: sitePageConnectionPluginCreatorPluginOptionsNameQueryString | null;
  maxWidth?: sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsQueryList {
  in?: sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject[] | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id?: sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString | null;
  name?: sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  pluginFilepath?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsLogoQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsInjectHtmlQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsInputObject {
  android?: sitePageConnectionPluginCreatorPluginOptionsIconsAndroidQueryBoolean | null;
  appleIcon?: sitePageConnectionPluginCreatorPluginOptionsIconsAppleIconQueryBoolean | null;
  appleStartup?: sitePageConnectionPluginCreatorPluginOptionsIconsAppleStartupQueryBoolean | null;
  coast?: sitePageConnectionPluginCreatorPluginOptionsIconsCoastQueryBoolean | null;
  favicons?: sitePageConnectionPluginCreatorPluginOptionsIconsFaviconsQueryBoolean | null;
  firefox?: sitePageConnectionPluginCreatorPluginOptionsIconsFirefoxQueryBoolean | null;
  twitter?: sitePageConnectionPluginCreatorPluginOptionsIconsTwitterQueryBoolean | null;
  yandex?: sitePageConnectionPluginCreatorPluginOptionsIconsYandexQueryBoolean | null;
  windows?: sitePageConnectionPluginCreatorPluginOptionsIconsWindowsQueryBoolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsAndroidQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsAppleIconQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsAppleStartupQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsCoastQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsFaviconsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsFirefoxQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsTwitterQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsYandexQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsIconsWindowsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonNameQueryString | null;
  description?: sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePageConnectionPluginCreatorPackageJsonMainQueryString | null;
  author?: sitePageConnectionPluginCreatorPackageJsonAuthorQueryString | null;
  license?: sitePageConnectionPluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  in?: sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  in?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  in?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject[] | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePageConnectionPluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: sitePageConnectionPluginCreatorInternalContentDigestQueryString | null;
  type?: sitePageConnectionPluginCreatorInternalTypeQueryString | null;
  owner?: sitePageConnectionPluginCreatorInternalOwnerQueryString | null;
}

export interface sitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2 | null;
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2 | null;
  owner?: sitePageConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[];
  order?: sitePluginConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2 | null;
  id?: sitePluginConnectionIdQueryString_2 | null;
  name?: sitePluginConnectionNameQueryString_2 | null;
  version?: sitePluginConnectionVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2 | null;
  ssrAPIs?: sitePluginConnectionSsrApIsQueryList_2 | null;
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginConnectionPackageJsonInputObject_2 | null;
  internal?: sitePluginConnectionInternalInputObject_2 | null;
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins?: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null;
  logo?: sitePluginConnectionPluginOptionsLogoQueryString_2 | null;
  injectHTML?: sitePluginConnectionPluginOptionsInjectHtmlQueryBoolean_2 | null;
  icons?: sitePluginConnectionPluginOptionsIconsInputObject_2 | null;
  path?: sitePluginConnectionPluginOptionsPathQueryString_2 | null;
  name?: sitePluginConnectionPluginOptionsNameQueryString_2 | null;
  maxWidth?: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in?: sitePluginConnectionPluginOptionsPluginsInputObject_2[] | null;
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null;
  id?: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null;
  name?: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null;
  version?: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions?: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath?: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsLogoQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsInjectHtmlQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsInputObject_2 {
  android?: sitePluginConnectionPluginOptionsIconsAndroidQueryBoolean_2 | null;
  appleIcon?: sitePluginConnectionPluginOptionsIconsAppleIconQueryBoolean_2 | null;
  appleStartup?: sitePluginConnectionPluginOptionsIconsAppleStartupQueryBoolean_2 | null;
  coast?: sitePluginConnectionPluginOptionsIconsCoastQueryBoolean_2 | null;
  favicons?: sitePluginConnectionPluginOptionsIconsFaviconsQueryBoolean_2 | null;
  firefox?: sitePluginConnectionPluginOptionsIconsFirefoxQueryBoolean_2 | null;
  twitter?: sitePluginConnectionPluginOptionsIconsTwitterQueryBoolean_2 | null;
  yandex?: sitePluginConnectionPluginOptionsIconsYandexQueryBoolean_2 | null;
  windows?: sitePluginConnectionPluginOptionsIconsWindowsQueryBoolean_2 | null;
}

export interface sitePluginConnectionPluginOptionsIconsAndroidQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsAppleIconQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsAppleStartupQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsCoastQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsFaviconsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsFirefoxQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsTwitterQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsYandexQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsIconsWindowsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2 | null;
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonVersionQueryString_2 | null;
  main?: sitePluginConnectionPackageJsonMainQueryString_2 | null;
  author?: sitePluginConnectionPackageJsonAuthorQueryString_2 | null;
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonPeerDependenciesInputObject_2[] | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2 | null;
  type?: sitePluginConnectionInternalTypeQueryString_2 | null;
  owner?: sitePluginConnectionInternalOwnerQueryString_2 | null;
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSort {
  fields: DirectoryConnectionSortByFieldsEnum[];
  order?: directoryConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterDirectory {
  id?: directoryConnectionIdQueryString_2 | null;
  internal?: directoryConnectionInternalInputObject_2 | null;
  sourceInstanceName?: directoryConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath?: directoryConnectionAbsolutePathQueryString_2 | null;
  relativePath?: directoryConnectionRelativePathQueryString_2 | null;
  extension?: directoryConnectionExtensionQueryString_2 | null;
  size?: directoryConnectionSizeQueryInteger_2 | null;
  prettySize?: directoryConnectionPrettySizeQueryString_2 | null;
  modifiedTime?: directoryConnectionModifiedTimeQueryString_2 | null;
  accessTime?: directoryConnectionAccessTimeQueryString_2 | null;
  changeTime?: directoryConnectionChangeTimeQueryString_2 | null;
  birthTime?: directoryConnectionBirthTimeQueryString_2 | null;
  root?: directoryConnectionRootQueryString_2 | null;
  dir?: directoryConnectionDirQueryString_2 | null;
  base?: directoryConnectionBaseQueryString_2 | null;
  ext?: directoryConnectionExtQueryString_2 | null;
  name?: directoryConnectionNameQueryString_2 | null;
  relativeDirectory?: directoryConnectionRelativeDirectoryQueryString_2 | null;
  dev?: directoryConnectionDevQueryInteger_2 | null;
  mode?: directoryConnectionModeQueryInteger_2 | null;
  nlink?: directoryConnectionNlinkQueryInteger_2 | null;
  uid?: directoryConnectionUidQueryInteger_2 | null;
  gid?: directoryConnectionGidQueryInteger_2 | null;
  rdev?: directoryConnectionRdevQueryInteger_2 | null;
  blksize?: directoryConnectionBlksizeQueryInteger_2 | null;
  ino?: directoryConnectionInoQueryInteger_2 | null;
  blocks?: directoryConnectionBlocksQueryInteger_2 | null;
  atimeMs?: directoryConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryConnectionBirthtimeMsQueryFloat_2 | null;
  atime?: directoryConnectionAtimeQueryString_2 | null;
  mtime?: directoryConnectionMtimeQueryString_2 | null;
  ctime?: directoryConnectionCtimeQueryString_2 | null;
  birthtime?: directoryConnectionBirthtimeQueryString_2 | null;
}

export interface directoryConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalInputObject_2 {
  contentDigest?: directoryConnectionInternalContentDigestQueryString_2 | null;
  type?: directoryConnectionInternalTypeQueryString_2 | null;
  owner?: directoryConnectionInternalOwnerQueryString_2 | null;
}

export interface directoryConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryConnectionAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryConnectionBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[];
  order?: fileConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2 | null;
  internal?: fileConnectionInternalInputObject_2 | null;
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2 | null;
  absolutePath?: fileConnectionAbsolutePathQueryString_2 | null;
  relativePath?: fileConnectionRelativePathQueryString_2 | null;
  extension?: fileConnectionExtensionQueryString_2 | null;
  size?: fileConnectionSizeQueryInteger_2 | null;
  prettySize?: fileConnectionPrettySizeQueryString_2 | null;
  modifiedTime?: fileConnectionModifiedTimeQueryString_2 | null;
  accessTime?: fileConnectionAccessTimeQueryString_2 | null;
  changeTime?: fileConnectionChangeTimeQueryString_2 | null;
  birthTime?: fileConnectionBirthTimeQueryString_2 | null;
  root?: fileConnectionRootQueryString_2 | null;
  dir?: fileConnectionDirQueryString_2 | null;
  base?: fileConnectionBaseQueryString_2 | null;
  ext?: fileConnectionExtQueryString_2 | null;
  name?: fileConnectionNameQueryString_2 | null;
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2 | null;
  dev?: fileConnectionDevQueryInteger_2 | null;
  mode?: fileConnectionModeQueryInteger_2 | null;
  nlink?: fileConnectionNlinkQueryInteger_2 | null;
  uid?: fileConnectionUidQueryInteger_2 | null;
  gid?: fileConnectionGidQueryInteger_2 | null;
  rdev?: fileConnectionRdevQueryInteger_2 | null;
  blksize?: fileConnectionBlksizeQueryInteger_2 | null;
  ino?: fileConnectionInoQueryInteger_2 | null;
  blocks?: fileConnectionBlocksQueryInteger_2 | null;
  atimeMs?: fileConnectionAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileConnectionMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileConnectionCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2 | null;
  atime?: fileConnectionAtimeQueryString_2 | null;
  mtime?: fileConnectionMtimeQueryString_2 | null;
  ctime?: fileConnectionCtimeQueryString_2 | null;
  birthtime?: fileConnectionBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_4 | null;
}

export interface fileConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2 | null;
  mediaType?: fileConnectionInternalMediaTypeQueryString_2 | null;
  type?: fileConnectionInternalTypeQueryString_2 | null;
  owner?: fileConnectionInternalOwnerQueryString_2 | null;
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface publicUrlQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionSort {
  fields: MarkdownRemarkConnectionSortByFieldsEnum[];
  order?: markdownRemarkConnectionSortOrderValues | null;
}
/* Filter connection on its fields */
export interface filterMarkdownRemark {
  id?: markdownRemarkConnectionIdQueryString_2 | null;
  internal?: markdownRemarkConnectionInternalInputObject_2 | null;
  frontmatter?: markdownRemarkConnectionFrontmatterInputObject_2 | null;
  excerpt?: excerptQueryString_4 | null;
  fileAbsolutePath?: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null;
  html?: htmlQueryString_4 | null;
  headings?: headingsQueryList_4 | null;
  timeToRead?: timeToReadQueryInt_4 | null;
  tableOfContents?: tableOfContentsQueryString_4 | null;
  wordCount?: wordCountTypeName_4 | null;
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content?: markdownRemarkConnectionInternalContentQueryString_2 | null;
  type?: markdownRemarkConnectionInternalTypeQueryString_2 | null;
  contentDigest?: markdownRemarkConnectionInternalContentDigestQueryString_2 | null;
  owner?: markdownRemarkConnectionInternalOwnerQueryString_2 | null;
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title?: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null;
  category?: markdownRemarkConnectionFrontmatterCategoryQueryString_2 | null;
  path?: markdownRemarkConnectionFrontmatterPathQueryString_2 | null;
  date?: markdownRemarkConnectionFrontmatterDateQueryString_2 | null;
  _PARENT?: markdownRemarkConnectionFrontmatterParentQueryString_3 | null;
  parent?: markdownRemarkConnectionFrontmatterParentQueryString_4 | null;
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterCategoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface excerptQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface htmlQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsQueryList_4 {
  value?: headingsListElemValueQueryString_4 | null;
  depth?: headingsListElemDepthQueryInt_4 | null;
  in?: markdownHeadingInputObject_4[] | null;
}

export interface headingsListElemValueQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsListElemDepthQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface markdownHeadingInputObject_4 {
  value?: string | null;
  depth?: number | null;
}

export interface timeToReadQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface tableOfContentsQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface wordCountTypeName_4 {
  paragraphs?: wordCountParagraphsQueryInt_4 | null;
  sentences?: wordCountSentencesQueryInt_4 | null;
  words?: wordCountWordsQueryInt_4 | null;
}

export interface wordCountParagraphsQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface wordCountSentencesQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface wordCountWordsQueryInt_4 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePageLayoutQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInputObject {
  resolve?: sitePagePluginCreatorResolveQueryString | null;
  id?: sitePagePluginCreatorIdQueryString | null;
  name?: sitePagePluginCreatorNameQueryString | null;
  version?: sitePagePluginCreatorVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsInputObject | null;
  nodeAPIs?: sitePagePluginCreatorNodeApIsQueryList | null;
  ssrAPIs?: sitePagePluginCreatorSsrApIsQueryList | null;
  pluginFilepath?: sitePagePluginCreatorPluginFilepathQueryString | null;
  packageJson?: sitePagePluginCreatorPackageJsonInputObject | null;
  parent?: sitePagePluginCreatorParentQueryString | null;
  internal?: sitePagePluginCreatorInternalInputObject | null;
}

export interface sitePagePluginCreatorResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInputObject {
  plugins?: sitePagePluginCreatorPluginOptionsPluginsQueryList | null;
  logo?: sitePagePluginCreatorPluginOptionsLogoQueryString | null;
  injectHTML?: sitePagePluginCreatorPluginOptionsInjectHtmlQueryBoolean | null;
  icons?: sitePagePluginCreatorPluginOptionsIconsInputObject | null;
  path?: sitePagePluginCreatorPluginOptionsPathQueryString | null;
  name?: sitePagePluginCreatorPluginOptionsNameQueryString | null;
  maxWidth?: sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsQueryList {
  in?: sitePagePluginCreatorPluginOptionsPluginsInputObject[] | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsInputObject {
  resolve?: sitePagePluginCreatorPluginOptionsPluginsResolveQueryString | null;
  id?: sitePagePluginCreatorPluginOptionsPluginsIdQueryString | null;
  name?: sitePagePluginCreatorPluginOptionsPluginsNameQueryString | null;
  version?: sitePagePluginCreatorPluginOptionsPluginsVersionQueryString | null;
  pluginOptions?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject | null;
  pluginFilepath?: sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsResolveQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsIdQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsInputObject {
  maxWidth?: sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePagePluginCreatorPluginOptionsPluginsPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsLogoQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsInjectHtmlQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsInputObject {
  android?: sitePagePluginCreatorPluginOptionsIconsAndroidQueryBoolean | null;
  appleIcon?: sitePagePluginCreatorPluginOptionsIconsAppleIconQueryBoolean | null;
  appleStartup?: sitePagePluginCreatorPluginOptionsIconsAppleStartupQueryBoolean | null;
  coast?: sitePagePluginCreatorPluginOptionsIconsCoastQueryBoolean | null;
  favicons?: sitePagePluginCreatorPluginOptionsIconsFaviconsQueryBoolean | null;
  firefox?: sitePagePluginCreatorPluginOptionsIconsFirefoxQueryBoolean | null;
  twitter?: sitePagePluginCreatorPluginOptionsIconsTwitterQueryBoolean | null;
  yandex?: sitePagePluginCreatorPluginOptionsIconsYandexQueryBoolean | null;
  windows?: sitePagePluginCreatorPluginOptionsIconsWindowsQueryBoolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsAndroidQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsAppleIconQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsAppleStartupQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsCoastQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsFaviconsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsFirefoxQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsTwitterQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsYandexQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsIconsWindowsQueryBoolean {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPluginOptionsMaxWidthQueryInteger {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePagePluginCreatorNodeApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorSsrApIsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorPluginFilepathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonInputObject {
  name?: sitePagePluginCreatorPackageJsonNameQueryString | null;
  description?: sitePagePluginCreatorPackageJsonDescriptionQueryString | null;
  version?: sitePagePluginCreatorPackageJsonVersionQueryString | null;
  main?: sitePagePluginCreatorPackageJsonMainQueryString | null;
  author?: sitePagePluginCreatorPackageJsonAuthorQueryString | null;
  license?: sitePagePluginCreatorPackageJsonLicenseQueryString | null;
  dependencies?: sitePagePluginCreatorPackageJsonDependenciesQueryList | null;
  devDependencies?: sitePagePluginCreatorPackageJsonDevDependenciesQueryList | null;
  peerDependencies?: sitePagePluginCreatorPackageJsonPeerDependenciesQueryList | null;
  keywords?: sitePagePluginCreatorPackageJsonKeywordsQueryList | null;
}

export interface sitePagePluginCreatorPackageJsonNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonMainQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonDevDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  in?: sitePagePluginCreatorPackageJsonPeerDependenciesInputObject[] | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString | null;
  version?: sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePagePluginCreatorParentQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalInputObject {
  contentDigest?: sitePagePluginCreatorInternalContentDigestQueryString | null;
  type?: sitePagePluginCreatorInternalTypeQueryString | null;
  owner?: sitePagePluginCreatorInternalOwnerQueryString | null;
}

export interface sitePagePluginCreatorInternalContentDigestQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalTypeQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorInternalOwnerQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePagePluginCreatorIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageComponentPathQueryString {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2 | null;
  contentDigest?: sitePageInternalContentDigestQueryString_2 | null;
  owner?: sitePageInternalOwnerQueryString_2 | null;
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins?: sitePluginPluginOptionsPluginsQueryList_2 | null;
  logo?: sitePluginPluginOptionsLogoQueryString_2 | null;
  injectHTML?: sitePluginPluginOptionsInjectHtmlQueryBoolean_2 | null;
  icons?: sitePluginPluginOptionsIconsInputObject_2 | null;
  path?: sitePluginPluginOptionsPathQueryString_2 | null;
  name?: sitePluginPluginOptionsNameQueryString_2 | null;
  maxWidth?: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null;
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in?: sitePluginPluginOptionsPluginsInputObject_2[] | null;
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve?: sitePluginPluginOptionsPluginsResolveQueryString_2 | null;
  id?: sitePluginPluginOptionsPluginsIdQueryString_2 | null;
  name?: sitePluginPluginOptionsPluginsNameQueryString_2 | null;
  version?: sitePluginPluginOptionsPluginsVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null;
  pluginFilepath?: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null;
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth?: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null;
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsLogoQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsInjectHtmlQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsInputObject_2 {
  android?: sitePluginPluginOptionsIconsAndroidQueryBoolean_2 | null;
  appleIcon?: sitePluginPluginOptionsIconsAppleIconQueryBoolean_2 | null;
  appleStartup?: sitePluginPluginOptionsIconsAppleStartupQueryBoolean_2 | null;
  coast?: sitePluginPluginOptionsIconsCoastQueryBoolean_2 | null;
  favicons?: sitePluginPluginOptionsIconsFaviconsQueryBoolean_2 | null;
  firefox?: sitePluginPluginOptionsIconsFirefoxQueryBoolean_2 | null;
  twitter?: sitePluginPluginOptionsIconsTwitterQueryBoolean_2 | null;
  yandex?: sitePluginPluginOptionsIconsYandexQueryBoolean_2 | null;
  windows?: sitePluginPluginOptionsIconsWindowsQueryBoolean_2 | null;
}

export interface sitePluginPluginOptionsIconsAndroidQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsAppleIconQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsAppleStartupQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsCoastQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsFaviconsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsFirefoxQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsTwitterQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsYandexQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsIconsWindowsQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginSsrApIsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2 | null;
  description?: sitePluginPackageJsonDescriptionQueryString_2 | null;
  version?: sitePluginPackageJsonVersionQueryString_2 | null;
  main?: sitePluginPackageJsonMainQueryString_2 | null;
  author?: sitePluginPackageJsonAuthorQueryString_2 | null;
  license?: sitePluginPackageJsonLicenseQueryString_2 | null;
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2 | null;
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2 | null;
  peerDependencies?: sitePluginPackageJsonPeerDependenciesQueryList_2 | null;
  keywords?: sitePluginPackageJsonKeywordsQueryList_2 | null;
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonAuthorQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDevDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesQueryList_2 {
  in?: sitePluginPackageJsonPeerDependenciesInputObject_2[] | null;
}

export interface sitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: sitePluginPackageJsonPeerDependenciesNameQueryString_2 | null;
  version?: sitePluginPackageJsonPeerDependenciesVersionQueryString_2 | null;
}

export interface sitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
  in?: string[] | null;
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2 | null;
  type?: sitePluginInternalTypeQueryString_2 | null;
  owner?: sitePluginInternalOwnerQueryString_2 | null;
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteSiteMetadataInputObject_2 {
  siteName?: siteSiteMetadataSiteNameQueryString_2 | null;
}

export interface siteSiteMetadataSiteNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePortQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteHostQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePathPrefixQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean | null;
  ne?: boolean | null;
}

export interface siteBuildTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2 | null;
  type?: siteInternalTypeQueryString_2 | null;
  owner?: siteInternalOwnerQueryString_2 | null;
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalInputObject_2 {
  contentDigest?: directoryInternalContentDigestQueryString_2 | null;
  type?: directoryInternalTypeQueryString_2 | null;
  owner?: directoryInternalOwnerQueryString_2 | null;
}

export interface directoryInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directorySourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directorySizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryPrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface directoryAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface directoryBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2 | null;
  mediaType?: fileInternalMediaTypeQueryString_2 | null;
  type?: fileInternalTypeQueryString_2 | null;
  owner?: fileInternalOwnerQueryString_2 | null;
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRelativePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileExtensionQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileSizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface filePrettySizeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileAccessTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileChangeTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBirthTimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRootQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileDirQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBaseQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileExtQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileNameQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileDevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileModeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileNlinkQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileUidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileGidQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileRdevQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileBlksizeQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileInoQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileBlocksQueryInteger_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileAtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileMtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileCtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq?: number | null;
  ne?: number | null;
}

export interface fileAtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileMtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileCtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface fileBirthtimeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface publicUrlQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkIdQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalInputObject_2 {
  content?: markdownRemarkInternalContentQueryString_2 | null;
  type?: markdownRemarkInternalTypeQueryString_2 | null;
  contentDigest?: markdownRemarkInternalContentDigestQueryString_2 | null;
  owner?: markdownRemarkInternalOwnerQueryString_2 | null;
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title?: markdownRemarkFrontmatterTitleQueryString_2 | null;
  category?: markdownRemarkFrontmatterCategoryQueryString_2 | null;
  path?: markdownRemarkFrontmatterPathQueryString_2 | null;
  date?: markdownRemarkFrontmatterDateQueryString_2 | null;
  _PARENT?: markdownRemarkFrontmatterParentQueryString_3 | null;
  parent?: markdownRemarkFrontmatterParentQueryString_4 | null;
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterCategoryQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterPathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterDateQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFrontmatterParentQueryString_4 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface excerptQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface htmlQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsQueryList_3 {
  value?: headingsListElemValueQueryString_3 | null;
  depth?: headingsListElemDepthQueryInt_3 | null;
  in?: markdownHeadingInputObject_3[] | null;
}

export interface headingsListElemValueQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface headingsListElemDepthQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface markdownHeadingInputObject_3 {
  value?: string | null;
  depth?: number | null;
}

export interface timeToReadQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface tableOfContentsQueryString_3 {
  eq?: string | null;
  ne?: string | null;
  regex?: string | null;
  glob?: string | null;
}

export interface wordCountTypeName_3 {
  paragraphs?: wordCountParagraphsQueryInt_3 | null;
  sentences?: wordCountSentencesQueryInt_3 | null;
  words?: wordCountWordsQueryInt_3 | null;
}

export interface wordCountParagraphsQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface wordCountSentencesQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}

export interface wordCountWordsQueryInt_3 {
  eq?: number | null;
  ne?: number | null;
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePageConnectionSort | null;
  filter?: filterSitePage | null;
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: sitePluginConnectionSort | null;
  filter?: filterSitePlugin | null;
}
export interface AllDirectoryRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: directoryConnectionSort | null;
  filter?: filterDirectory | null;
}
export interface AllFileRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: fileConnectionSort | null;
  filter?: filterFile | null;
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip?: number | null;
  limit?: number | null;
  sort?: markdownRemarkConnectionSort | null;
  filter?: filterMarkdownRemark | null;
}
export interface SitePageRootQueryTypeArgs {
  layout?: sitePageLayoutQueryString | null;
  jsonName?: sitePageJsonNameQueryString | null;
  internalComponentName?: sitePageInternalComponentNameQueryString | null;
  path?: sitePagePathQueryString_2 | null;
  component?: sitePageComponentQueryString | null;
  componentChunkName?: sitePageComponentChunkNameQueryString | null;
  pluginCreator?: sitePagePluginCreatorInputObject | null;
  pluginCreatorId?: sitePagePluginCreatorIdQueryString_2 | null;
  componentPath?: sitePageComponentPathQueryString | null;
  id?: sitePageIdQueryString_2 | null;
  internal?: sitePageInternalInputObject_2 | null;
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2 | null;
  id?: sitePluginIdQueryString_2 | null;
  name?: sitePluginNameQueryString_2 | null;
  version?: sitePluginVersionQueryString_2 | null;
  pluginOptions?: sitePluginPluginOptionsInputObject_2 | null;
  nodeAPIs?: sitePluginNodeApIsQueryList_2 | null;
  ssrAPIs?: sitePluginSsrApIsQueryList_2 | null;
  pluginFilepath?: sitePluginPluginFilepathQueryString_2 | null;
  packageJson?: sitePluginPackageJsonInputObject_2 | null;
  internal?: sitePluginInternalInputObject_2 | null;
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2 | null;
  port?: sitePortQueryString_2 | null;
  host?: siteHostQueryString_2 | null;
  pathPrefix?: sitePathPrefixQueryString_2 | null;
  polyfill?: sitePolyfillQueryBoolean_2 | null;
  buildTime?: siteBuildTimeQueryString_2 | null;
  id?: siteIdQueryString_2 | null;
  internal?: siteInternalInputObject_2 | null;
}
export interface DirectoryRootQueryTypeArgs {
  id?: directoryIdQueryString_2 | null;
  internal?: directoryInternalInputObject_2 | null;
  sourceInstanceName?: directorySourceInstanceNameQueryString_2 | null;
  absolutePath?: directoryAbsolutePathQueryString_2 | null;
  relativePath?: directoryRelativePathQueryString_2 | null;
  extension?: directoryExtensionQueryString_2 | null;
  size?: directorySizeQueryInteger_2 | null;
  prettySize?: directoryPrettySizeQueryString_2 | null;
  modifiedTime?: directoryModifiedTimeQueryString_2 | null;
  accessTime?: directoryAccessTimeQueryString_2 | null;
  changeTime?: directoryChangeTimeQueryString_2 | null;
  birthTime?: directoryBirthTimeQueryString_2 | null;
  root?: directoryRootQueryString_2 | null;
  dir?: directoryDirQueryString_2 | null;
  base?: directoryBaseQueryString_2 | null;
  ext?: directoryExtQueryString_2 | null;
  name?: directoryNameQueryString_2 | null;
  relativeDirectory?: directoryRelativeDirectoryQueryString_2 | null;
  dev?: directoryDevQueryInteger_2 | null;
  mode?: directoryModeQueryInteger_2 | null;
  nlink?: directoryNlinkQueryInteger_2 | null;
  uid?: directoryUidQueryInteger_2 | null;
  gid?: directoryGidQueryInteger_2 | null;
  rdev?: directoryRdevQueryInteger_2 | null;
  blksize?: directoryBlksizeQueryInteger_2 | null;
  ino?: directoryInoQueryInteger_2 | null;
  blocks?: directoryBlocksQueryInteger_2 | null;
  atimeMs?: directoryAtimeMsQueryFloat_2 | null;
  mtimeMs?: directoryMtimeMsQueryFloat_2 | null;
  ctimeMs?: directoryCtimeMsQueryFloat_2 | null;
  birthtimeMs?: directoryBirthtimeMsQueryFloat_2 | null;
  atime?: directoryAtimeQueryString_2 | null;
  mtime?: directoryMtimeQueryString_2 | null;
  ctime?: directoryCtimeQueryString_2 | null;
  birthtime?: directoryBirthtimeQueryString_2 | null;
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2 | null;
  internal?: fileInternalInputObject_2 | null;
  sourceInstanceName?: fileSourceInstanceNameQueryString_2 | null;
  absolutePath?: fileAbsolutePathQueryString_2 | null;
  relativePath?: fileRelativePathQueryString_2 | null;
  extension?: fileExtensionQueryString_2 | null;
  size?: fileSizeQueryInteger_2 | null;
  prettySize?: filePrettySizeQueryString_2 | null;
  modifiedTime?: fileModifiedTimeQueryString_2 | null;
  accessTime?: fileAccessTimeQueryString_2 | null;
  changeTime?: fileChangeTimeQueryString_2 | null;
  birthTime?: fileBirthTimeQueryString_2 | null;
  root?: fileRootQueryString_2 | null;
  dir?: fileDirQueryString_2 | null;
  base?: fileBaseQueryString_2 | null;
  ext?: fileExtQueryString_2 | null;
  name?: fileNameQueryString_2 | null;
  relativeDirectory?: fileRelativeDirectoryQueryString_2 | null;
  dev?: fileDevQueryInteger_2 | null;
  mode?: fileModeQueryInteger_2 | null;
  nlink?: fileNlinkQueryInteger_2 | null;
  uid?: fileUidQueryInteger_2 | null;
  gid?: fileGidQueryInteger_2 | null;
  rdev?: fileRdevQueryInteger_2 | null;
  blksize?: fileBlksizeQueryInteger_2 | null;
  ino?: fileInoQueryInteger_2 | null;
  blocks?: fileBlocksQueryInteger_2 | null;
  atimeMs?: fileAtimeMsQueryFloat_2 | null;
  mtimeMs?: fileMtimeMsQueryFloat_2 | null;
  ctimeMs?: fileCtimeMsQueryFloat_2 | null;
  birthtimeMs?: fileBirthtimeMsQueryFloat_2 | null;
  atime?: fileAtimeQueryString_2 | null;
  mtime?: fileMtimeQueryString_2 | null;
  ctime?: fileCtimeQueryString_2 | null;
  birthtime?: fileBirthtimeQueryString_2 | null;
  publicURL?: publicUrlQueryString_3 | null;
}
export interface MarkdownRemarkRootQueryTypeArgs {
  id?: markdownRemarkIdQueryString_2 | null;
  internal?: markdownRemarkInternalInputObject_2 | null;
  frontmatter?: markdownRemarkFrontmatterInputObject_2 | null;
  excerpt?: excerptQueryString_3 | null;
  fileAbsolutePath?: markdownRemarkFileAbsolutePathQueryString_2 | null;
  html?: htmlQueryString_3 | null;
  headings?: headingsQueryList_3 | null;
  timeToRead?: timeToReadQueryInt_3 | null;
  tableOfContents?: tableOfContentsQueryString_3 | null;
  wordCount?: wordCountTypeName_3 | null;
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum | null;
}
export interface GroupSitePageConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePageGroupEnum | null;
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum | null;
}
export interface GroupSitePluginConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: sitePluginGroupEnum | null;
}
export interface DistinctDirectoryConnectionArgs {
  field?: directoryDistinctEnum | null;
}
export interface GroupDirectoryConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: directoryGroupEnum | null;
}
export interface ModifiedTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeDirectoryArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum | null;
}
export interface GroupFileConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: fileGroupEnum | null;
}
export interface ModifiedTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AccessTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ChangeTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthTimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface AtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface MtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface CtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BirthtimeFileArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength?: number | null;
}
export interface HeadingsMarkdownRemarkArgs {
  depth?: HeadingLevels | null;
}
export interface DateFrontmatter_2Args {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field?: markdownRemarkDistinctEnum | null;
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip?: number | null;
  limit?: number | null;
  field?: markdownRemarkGroupEnum | null;
}
export interface PortSiteArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}
export interface BuildTimeSiteArgs {
  formatString?:
    | string
    | null /* Format the date using Moment.js&#x27; date tokens e.g. &quot;date(formatString: &quot;YYYY MMMM DD)&quot; See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */;
  fromNow?: boolean | null /* Returns a string generated with Moment.js&#x27; fromNow function */;
  difference?:
    | string
    | null /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */;
  locale?: string | null /* Configures the locale Moment.js will use to format the date. */;
}

export enum SitePageConnectionSortByFieldsEnum {
  layout = "layout",
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  matchPath = "matchPath",
  component = "component",
  componentChunkName = "componentChunkName",
  context = "context",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  children = "children",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum sitePageConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum sitePageDistinctEnum {
  layout = "layout",
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  context = "context",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum sitePageGroupEnum {
  layout = "layout",
  jsonName = "jsonName",
  internalComponentName = "internalComponentName",
  path = "path",
  component = "component",
  componentChunkName = "componentChunkName",
  context = "context",
  pluginCreator___NODE = "pluginCreator___NODE",
  pluginCreatorId = "pluginCreatorId",
  componentPath = "componentPath",
  id = "id",
  parent = "parent",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner"
}

export enum SitePluginConnectionSortByFieldsEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___plugins = "pluginOptions___plugins",
  pluginOptions___logo = "pluginOptions___logo",
  pluginOptions___injectHTML = "pluginOptions___injectHTML",
  pluginOptions___icons___android = "pluginOptions___icons___android",
  pluginOptions___icons___appleIcon = "pluginOptions___icons___appleIcon",
  pluginOptions___icons___appleStartup = "pluginOptions___icons___appleStartup",
  pluginOptions___icons___coast = "pluginOptions___icons___coast",
  pluginOptions___icons___favicons = "pluginOptions___icons___favicons",
  pluginOptions___icons___firefox = "pluginOptions___icons___firefox",
  pluginOptions___icons___twitter = "pluginOptions___icons___twitter",
  pluginOptions___icons___yandex = "pluginOptions___icons___yandex",
  pluginOptions___icons___windows = "pluginOptions___icons___windows",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___maxWidth = "pluginOptions___maxWidth",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___optionalDependecies = "packageJson___optionalDependecies",
  packageJson___bundledDependecies = "packageJson___bundledDependecies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  children = "children",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum sitePluginConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum sitePluginDistinctEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___plugins = "pluginOptions___plugins",
  pluginOptions___logo = "pluginOptions___logo",
  pluginOptions___injectHTML = "pluginOptions___injectHTML",
  pluginOptions___icons___android = "pluginOptions___icons___android",
  pluginOptions___icons___appleIcon = "pluginOptions___icons___appleIcon",
  pluginOptions___icons___appleStartup = "pluginOptions___icons___appleStartup",
  pluginOptions___icons___coast = "pluginOptions___icons___coast",
  pluginOptions___icons___favicons = "pluginOptions___icons___favicons",
  pluginOptions___icons___firefox = "pluginOptions___icons___firefox",
  pluginOptions___icons___twitter = "pluginOptions___icons___twitter",
  pluginOptions___icons___yandex = "pluginOptions___icons___yandex",
  pluginOptions___icons___windows = "pluginOptions___icons___windows",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___maxWidth = "pluginOptions___maxWidth",
  nodeAPIs = "nodeAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum sitePluginGroupEnum {
  resolve = "resolve",
  id = "id",
  name = "name",
  version = "version",
  pluginOptions___plugins = "pluginOptions___plugins",
  pluginOptions___logo = "pluginOptions___logo",
  pluginOptions___injectHTML = "pluginOptions___injectHTML",
  pluginOptions___icons___android = "pluginOptions___icons___android",
  pluginOptions___icons___appleIcon = "pluginOptions___icons___appleIcon",
  pluginOptions___icons___appleStartup = "pluginOptions___icons___appleStartup",
  pluginOptions___icons___coast = "pluginOptions___icons___coast",
  pluginOptions___icons___favicons = "pluginOptions___icons___favicons",
  pluginOptions___icons___firefox = "pluginOptions___icons___firefox",
  pluginOptions___icons___twitter = "pluginOptions___icons___twitter",
  pluginOptions___icons___yandex = "pluginOptions___icons___yandex",
  pluginOptions___icons___windows = "pluginOptions___icons___windows",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___maxWidth = "pluginOptions___maxWidth",
  nodeAPIs = "nodeAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___keywords = "packageJson___keywords",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner"
}

export enum DirectoryConnectionSortByFieldsEnum {
  id = "id",
  children = "children",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner",
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  blksize = "blksize",
  ino = "ino",
  blocks = "blocks",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  birthtimeMs = "birthtimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime"
}

export enum directoryConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum directoryDistinctEnum {
  id = "id",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner",
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  blksize = "blksize",
  ino = "ino",
  blocks = "blocks",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  birthtimeMs = "birthtimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime"
}

export enum directoryGroupEnum {
  id = "id",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___type = "internal___type",
  internal___owner = "internal___owner",
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  blksize = "blksize",
  ino = "ino",
  blocks = "blocks",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  birthtimeMs = "birthtimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime"
}

export enum FileConnectionSortByFieldsEnum {
  id = "id",
  children = "children",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___mediaType = "internal___mediaType",
  internal___type = "internal___type",
  internal___owner = "internal___owner",
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  blksize = "blksize",
  ino = "ino",
  blocks = "blocks",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  birthtimeMs = "birthtimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  publicURL = "publicURL"
}

export enum fileConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum HeadingLevels {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6"
}

export enum fileDistinctEnum {
  id = "id",
  children = "children",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___mediaType = "internal___mediaType",
  internal___type = "internal___type",
  internal___owner = "internal___owner",
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  blksize = "blksize",
  ino = "ino",
  blocks = "blocks",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  birthtimeMs = "birthtimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime"
}

export enum fileGroupEnum {
  id = "id",
  children = "children",
  parent = "parent",
  internal___contentDigest = "internal___contentDigest",
  internal___mediaType = "internal___mediaType",
  internal___type = "internal___type",
  internal___owner = "internal___owner",
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  blksize = "blksize",
  ino = "ino",
  blocks = "blocks",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  birthtimeMs = "birthtimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime"
}

export enum MarkdownRemarkConnectionSortByFieldsEnum {
  id = "id",
  children = "children",
  parent = "parent",
  internal___content = "internal___content",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  frontmatter___title = "frontmatter___title",
  frontmatter___category = "frontmatter___category",
  frontmatter___path = "frontmatter___path",
  frontmatter___date = "frontmatter___date",
  frontmatter____PARENT = "frontmatter____PARENT",
  frontmatter___parent = "frontmatter___parent",
  excerpt = "excerpt",
  fileAbsolutePath = "fileAbsolutePath",
  html = "html",
  headings = "headings",
  timeToRead = "timeToRead",
  tableOfContents = "tableOfContents",
  wordCount___paragraphs = "wordCount___paragraphs",
  wordCount___sentences = "wordCount___sentences",
  wordCount___words = "wordCount___words"
}

export enum markdownRemarkConnectionSortOrderValues {
  ASC = "ASC",
  DESC = "DESC"
}

export enum markdownRemarkDistinctEnum {
  id = "id",
  parent = "parent",
  internal___content = "internal___content",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  frontmatter___title = "frontmatter___title",
  frontmatter___category = "frontmatter___category",
  frontmatter___path = "frontmatter___path",
  frontmatter___date = "frontmatter___date",
  frontmatter____PARENT = "frontmatter____PARENT",
  frontmatter___parent = "frontmatter___parent",
  excerpt = "excerpt",
  fileAbsolutePath = "fileAbsolutePath"
}

export enum markdownRemarkGroupEnum {
  id = "id",
  parent = "parent",
  internal___content = "internal___content",
  internal___type = "internal___type",
  internal___contentDigest = "internal___contentDigest",
  internal___owner = "internal___owner",
  frontmatter___title = "frontmatter___title",
  frontmatter___category = "frontmatter___category",
  frontmatter___path = "frontmatter___path",
  frontmatter___date = "frontmatter___date",
  frontmatter____PARENT = "frontmatter____PARENT",
  frontmatter___parent = "frontmatter___parent",
  excerpt = "excerpt",
  fileAbsolutePath = "fileAbsolutePath"
}
