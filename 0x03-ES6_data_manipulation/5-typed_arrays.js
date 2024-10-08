export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);
  try {
    array[position] = value;
  } catch (_) {
    throw new Error('Position outside range');
  }
  return buffer;
}
