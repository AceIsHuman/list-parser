function parseList(listString) {
  const splitString = listString.match(/\d*\..*/g);
  return splitString;
}
