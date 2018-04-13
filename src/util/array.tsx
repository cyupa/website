export type Comparator<T> = (a: Readonly<T>, b: Readonly<T>) => -1 | 0 | 1;
export type ComparatorKey<T> = (item: Readonly<T>) => string | number;

export const empty = [] as ReadonlyArray<never>;

export function omitNull<T>(array: Array<T>): Array<NonNullable<T>> {
  return array.filter(x => x !== null) as Array<NonNullable<T>>;
}

/**
 * Build a sort comparator suitable for use with arrays of objects.
 *
 * @param key return the sortable value for an object.
 */
export function sortComparatorDesc<T>(key: ComparatorKey<T>): Comparator<T> {
  return (a, b) => {
    const aKey = key(a);
    const bKey = key(b);
    return aKey < bKey ? 1 : aKey > bKey ? -1 : 0;
  };
}

/**
 * Build a sort comparator suitable for use with arrays of objects.
 *
 * @param key return the sortable value for an object.
 */
export function sortComparatorAsc<T>(key: ComparatorKey<T>): Comparator<T> {
  return (a, b) => {
    const aKey = key(a);
    const bKey = key(b);
    return aKey > bKey ? 1 : aKey < bKey ? -1 : 0;
  };
}

export function sorted<T>(array: ReadonlyArray<T>, key: ComparatorKey<T>, makeComparator = sortComparatorDesc): T[] {
  return [...array].sort(makeComparator(key));
}

export function omitIndex<T>(array: ReadonlyArray<T>, index: number): Array<T> {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function omitOne<T>(array: ReadonlyArray<T>, predicate: (item: T) => boolean): ReadonlyArray<T> {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return omitIndex(array, i);
    }
  }
  return array;
}

/**
 * Returns an array with an item appended, if it is not already the last item in the array.
 */
export function appendedIfNotAlready<T>(array: ReadonlyArray<T>, item: T): ReadonlyArray<T> {
  return array[array.length - 1] !== item ? [...array, item] : array;
}

/**
 * Build a filter function that filters an array of items based on a property of
 * each item.
 *
 * Example:
 *
 *     const items = [
 *       { id: 'a', value: 'foo' },
 *       { id: 'a', value: 'bar' },
 *       { id: 'b', value: 'baz' },
 *     ];
 *     items.filter(filterUnique(item => item.id))
 *     // returns [{ id: 'a', value: 'foo' }, { id: 'b', value: 'baz' }]
 */
export function filterUnique<Item, Prop>(key: (item: Readonly<Item>) => Prop) {
  const seen = new Set<Prop>();
  return (item: Item) => {
    const itemKey = key(item);
    if (seen.has(itemKey)) {
      return false;
    }
    seen.add(itemKey);
    return true;
  };
}

/**
 * Return an array of keys, given an object.
 */
export function keys<T>(hash: Readonly<T>) {
  return Object.keys(hash) as (keyof T)[];
}

function compare<T>(a: T, b: T, comparators: ReadonlyArray<Comparator<T>>): -1 | 0 | 1 {
  for (const comparator of comparators) {
    switch (comparator(a, b)) {
      case 0:
        continue;
      case -1:
        return -1;
      case 1:
        return 1;
    }
  }
  return 0;
}

export function sortedIndex<T>(
  array: ReadonlyArray<T>,
  element: Readonly<T>,
  comparators: ReadonlyArray<Comparator<T>>,
  start: number = 0,
  end: number = array.length
): number {
  if (array.length === 0) return 0;

  const pivot = (start + end) >> 1; // should be faster than dividing by 2

  const c = compare(element, array[pivot], comparators);
  if (end - start <= 1) return c == -1 ? pivot : pivot + 1;

  switch (c) {
    case -1:
      return sortedIndex(array, element, comparators, start, pivot);
    case 0:
      return pivot;
    case 1:
      return sortedIndex(array, element, comparators, pivot, end);
  }
}

export function sortedInsert<T>(
  sortedArray: ReadonlyArray<T>,
  item: Readonly<T>,
  comparators: ReadonlyArray<Comparator<T>>
): ReadonlyArray<T> {
  const index = sortedIndex(sortedArray, item, comparators);
  return [...sortedArray.slice(0, index), item, ...sortedArray.slice(index)];
}

export function get<T>(array: ReadonlyArray<T>, index: number, outOfBoundsValue: T): T {
  return index >= array.length ? outOfBoundsValue : array[index];
}

export function zeroes(n: number) {
  return Array(...Array(n)).map(() => 0);
}
