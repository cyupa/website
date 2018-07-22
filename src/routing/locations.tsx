import { queryBuilder } from "@heydovetail/website/util/url";

/**
 * Represents an internal URL (i.e. one within the Dovetail application).
 *
 * Internal URLs are navigated to using the browser's history API (push state).
 * This is done via react-router.
 */
interface InternalLocationDescriptor {
  internal: true;
  /**
   * The path component of the URL, should start with a leading `/`.
   *
   * The path is stored separately from the other URL components to facilitate
   * usage with react-router's path mapping feature (it does not expect
   * querystring or hash fragments to be part of the pattern).
   */
  path: string;
  /**
   * An object of key-value parameters for the query string.
   *
   * By accepting an object, it avoids application code from being concerned
   * with the intricacies of URL encoding.
   */
  query?: { [name: string]: string } | null;
  /**
   * A hash fragment (excluding leading `#`).
   */
  hash?: string | null;
}

/**
 * Represents an external URL (i.e. one outside the Dovetail application).
 *
 * External URLs are treated differently from internal locations, as push-state
 * is not used.
 */
interface ExternalLocationDescriptor {
  internal: false;
  /**
   * An absolute URL.
   */
  url: string;
  /**
   * If true, indicates that the URL should be opened in a new window.
   */
  openInNewTab?: boolean;
}

export type LocationDescriptor = InternalLocationDescriptor | ExternalLocationDescriptor;

/**
 * Render a location to a URL.
 *
 * @param absolute If true, attempts to make the URL absolute (only applies to
 * internal locations).
 */
export function url(location: LocationDescriptor, absolute = false): string {
  if (location.internal) {
    const { hash, path, query } = location;
    let url = path;
    if (query != null) {
      let builder = queryBuilder<typeof query>();
      for (const key of Object.keys(query)) {
        builder = builder.append(key, query[key]);
      }
      url += builder.toString();
    }
    if (hash != null) {
      url += `#${hash}`;
    }
    return absolute == true ? `${window.location.protocol}//${window.location.host}${url}` : url;
  } else {
    return location.url;
  }
}

export function isLocationDescriptor(x: object | undefined): x is LocationDescriptor {
  return (
    typeof x === "object" &&
    ((x as Partial<LocationDescriptor>).internal === true
      ? typeof (x as Partial<InternalLocationDescriptor>).path === "string"
      : typeof (x as Partial<ExternalLocationDescriptor>).url === "string")
  );
}

export function internal(
  path: string,
  opts?: { query?: InternalLocationDescriptor["query"]; hash?: InternalLocationDescriptor["hash"] } | null
): InternalLocationDescriptor {
  return {
    path: path,
    query: opts != null ? opts.query : null,
    hash: opts != null ? opts.hash : null,
    internal: true
  };
}

function external(url: string, options: { openInNewTab?: boolean } = {}): ExternalLocationDescriptor {
  const { openInNewTab = false } = options;
  return {
    url: url,
    internal: false,
    openInNewTab: openInNewTab
  };
}

/**
 * This object provides URL generation features, so that URLs can be centralised
 * in a single place.
 */
export const locations = {
  about: () => internal("/company/about"),
  blog: () => external("https://dovetail.blog", { openInNewTab: true }),
  capterra: () => external("https://www.capterra.com/p/174077/Dovetail/", { openInNewTab: true }),
  customers: () => internal("/customers"),
  demo: () => external("https://calendly.com/benjaminhumphrey/demo/", { openInNewTab: true }),
  email: () => external("mailto:hello@dovetailapp.com", { openInNewTab: true }),
  features: () => internal("/features"),
  featuresCharts: () => internal("/features/charts"),
  featuresFiles: () => internal("/features/files"),
  featuresHighlights: () => internal("/features/highlights"),
  featuresProjects: () => internal("/features/projects"),
  featuresSearch: () => internal("/features/search"),
  feedbackManagement: () => internal("/product/customer-feedback"),
  github: () => external("https://github.com/heydovetail", { openInNewTab: true }),
  guides: () => internal("/guides"),
  help: () => internal("/help"),
  home: () => internal("/"),
  integrations: () => internal("/integrations"),
  inProductIntegrations: () => external("/account/integrations", { openInNewTab: true }),
  legal: () => internal("/legal"),
  logIn: () => external("/users/sign_in"),
  press: () => internal("/company/press"),
  pricing: () => internal("/pricing"),
  projects: () => external("/projects"),
  privacy: () => internal("/legal/privacy"),
  qualitativeDataAnalysis: () => internal("/product/qda"),
  researchRepository: () => internal("/product/research-repository"),
  resendConfirmation: () => external("/users/confirmation/new"),
  security: () => internal("/product/security"),
  signUp: () => external("/users/sign_up"),
  slack: () => external("https://slack.dovetailapp.com", { openInNewTab: true }),
  termsCustomer: () => internal("/legal/customer-terms"),
  termsUser: () => internal("/legal/user-terms"),
  twitter: () => external("//twitter.com/hidovetail", { openInNewTab: true }),
  userResearch: () => internal("/product/user-research"),
  websitePrivacy: () => internal("/legal/website-privacy")
};
