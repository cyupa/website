/**
 * A HTML form element factory.
 */
export function form(opts: { action: string; method?: string; fields?: { [name: string]: string } }): HTMLFormElement {
  const { action, method = "post", fields = {} } = opts;
  const element = document.createElement("form");
  element.action = action;
  element.method = method;

  for (const name in fields) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = fields[name];
    element.appendChild(input);
  }

  return element;
}

/**
 * A helper for reading values from <META> tags. If the tag is unavailable (e.g.
 * in storybooks, tests, or other environments) `null` is returned.
 */
export function readMeta(name: string): string | null {
  const meta = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  return meta !== null ? meta.getAttribute("content") : null;
}

export function readMetaOrThrow(name: string): string {
  const value = readMeta(name);
  if (value === null) {
    throw new Error(`Unable to read meta tag value. Name: ${name}`);
  }
  return value;
}
