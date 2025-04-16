import { isPromise } from "es-toolkit";

export function getLazy<T>(
  getter: () => T,
): T extends PromiseLike<any> ? () => Promise<Awaited<T>> : () => T {
  let value: Awaited<T> | undefined;
  // @ts-expect-error
  return () => {
    if (value !== undefined) return value;

    const mayBePromise = getter();
    if (!isPromise(mayBePromise)) return mayBePromise;
    return Promise.resolve(mayBePromise).then((resolved) => {
      value = resolved;
      return resolved;
    });
  };
}
