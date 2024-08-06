export default function appendToEachArrayValue(array, appendString) {
  const my_array = [];
  for (const item of array) {
    my_array.push(appendString + item);
  }

  return my_array;
}
