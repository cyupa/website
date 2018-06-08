/**
 * Parse a URL query string into an object of key/value.
 *
 * Duplicate keys are handled using a last-wins algorithm.
 *
 * @param qstr the querystring component of a URL
 */
export function parseQuery(qstr: string) {
  const query: { [field: string]: string | undefined } = {};
  const a = (qstr[0] === "?" ? qstr.substr(1) : qstr).split("&");
  for (let i = 0; i < a.length; i++) {
    const [key, value = ""] = a[i].split("=");
    query[decodeURIComponent(key)] = decodeURIComponent(value);
  }
  return query;
}

/**
 * Construct a URL query string using the builder pattern.
 */
class QueryBuilder<Params> {
  constructor(private readonly params: string[]) {}

  public append<K extends Extract<keyof Params, string>>(name: K, value: Params[K]): QueryBuilder<Params> {
    return new QueryBuilder(this.params.concat(`${encodeURIComponent(name)}=${encodeURIComponent(`${value}`)}`));
  }

  public toString(): string {
    return this.params.length > 0 ? `?${this.params.join("&")}` : "";
  }
}

export function queryBuilder<T>() {
  return new QueryBuilder<T>([]);
}
