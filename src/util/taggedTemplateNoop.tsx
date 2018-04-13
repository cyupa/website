// This module provides a work-around for https://github.com/lleaff/tagged-template-noop/issues/3.
export function taggedTemplateNoop(strings: TemplateStringsArray, ...keys: Array<string>) {
  const lastIndex = strings.length - 1;
  return strings.slice(0, lastIndex).reduce((p, s, i) => p + s + keys[i], "") + strings[lastIndex];
}
