export const weakMap = new WeakMap();
const MAX = 5;
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);
  if (weakMap.get(endpoint) >= MAX) throw new Error('Endpoint load is high');

  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}
