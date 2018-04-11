/**
 * A helper that can be used to assert exhaustion.
 *
 * Example:
 *
 *     const myVar: "a" | "b";
 *     switch (myVar) {
 *       case "a":
 *         // do something for "a"
 *         break;
 *       case "b";
 *         // do something for "b"
 *         break;
 *       default:
 *         throw assertExhausted(myVar):
 *     }
 *
 */
export function assertExhausted(_: never): never {
  throw new Error("Unexpected control flow.");
}
