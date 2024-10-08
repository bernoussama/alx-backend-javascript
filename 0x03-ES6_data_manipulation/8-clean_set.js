export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  return [...set].filter((el) => el.startsWith(startString)).map((el) => (el.slice(startString.length) !== el ? el.slice(startString.length) : {})).join('-');
}
