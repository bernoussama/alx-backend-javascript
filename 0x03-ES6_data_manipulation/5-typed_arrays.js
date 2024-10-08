export default function createInt8TypedArray(length, position, value) {
  const array = new Int8Array(length);
  array.fill(value, position);
  return array;
}
