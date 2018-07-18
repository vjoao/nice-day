export function inRange (value, min, max) {
  const less = value < min
  const more = value > max
  return !less && !more
}
