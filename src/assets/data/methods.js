const METHODS = [
  {
    id: 1,
    "name": ".charAt()",
    "description": "Returns the character at the specified index (position)",
    "goal": "Find",
    "dataType": "string",
    "image": "https://image.ibb.co/mF8pBv/Screen_Shot_2017_09_07_at_20_41_28.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"
  },
  {
    id: 2,
    "name": ".concat()",
    "description": "Joins two or more strings, and returns a new joined strings",
    "goal": "join",
    "dataType": "array",
    "image": "https://image.ibb.co/gKoajF/Screen_Shot_2017_09_08_at_12_55_09.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b"
  },
  {
    id: 3,
    "name": ".every()",
    "description": "checks if every element in an array pass a test",
    "explanation":"The every method executes the provided callback function once for each element present in the array until it finds one where callback returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callback returns a truthy value for all elements, every returns true. callback is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Callback is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed. If a thisArg parameter is provided to every, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value.  The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function. Every does not mutate the array on which it is called. The range of elements processed by every is set before the first invocation of callback. Elements which are appended to the array after the call to every begins will not be visited by callback. If existing elements of the array are changed, their value as passed to callback will be the value at the time every visits them; elements that are deleted are not visited. Every acts like the 'for all' quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)",
    "goal": "check",
    "dataType": "array",
    "image": "https://image.ibb.co/jsk0jF/Screen_Shot_2017_09_07_at_20_33_44.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every"
  },
  {
    id: 4,
    "name": ".fill()",
    "description": "Fill the elements in an array with a static value.",
    "goal": "change",
    "dataType": "array",
    "image": "https://image.ibb.co/khzPda/Screen_Shot_2017_09_07_at_20_37_18.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"
  },
  {
    id: 5,
    "name": ".filter()",
    "description": "Creates a new array with every element in an array that pass a test.",
    "goal": "find",
    "dataType": "array",
    "image": "https://image.ibb.co/dpaA1v/Screen_Shot_2017_09_08_at_11_04_42.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"
  },
  {
    id: 6,
    "name": ".find()",
    "description": "Returns the value of the first element in an array that pass a test.",
    "goal": "find",
    "dataType": "array",
    "image": "https://image.ibb.co/grK3Mv/Screen_Shot_2017_09_08_at_11_07_55.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"
  },
  {
    id: 7,
    "name": ".findIndex()",
    "description": "Returns the index of the first element in an array that pass a test.",
    "goal": "find",
    "dataType": "array",
    "image":"https://image.ibb.co/hDs9Ta/Screen_Shot_2017_09_08_at_11_22_03.png",
    "URL":"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"
  },
  {
    id: 8,
    "name": ".forEach()",
    "description": "Calls a function for each array element.",
    "goal": "find",
    "dataType": "array",
    "image": "https://image.ibb.co/ngoYoa/Screen_Shot_2017_09_08_at_11_27_24.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
  },
  {
    id: 9,
    "name": ".indexOf()",
    "description": "Search the array for an element and returns its position.",
    "goal": "find",
    "dataType": "array",
    "image": "https://image.ibb.co/ifQ2gv/Screen_Shot_2017_09_08_at_11_46_54.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf"
  },
  {
    id: 10,
    "name": ".isArray()",
    "description": "checks whether an object is an array.",
    "goal": "check",
    "dataType": "other",
    "image":"https://image.ibb.co/ekOEda/Screen_Shot_2017_09_08_at_12_03_08.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray"
  },
  {
    id: 11,
    "name": ".join()",
    "description": "joins all elements of an array into a string.",
    "goal": "join",
    "dataType": "array",
    "image": "https://image.ibb.co/fH0Kda/Screen_Shot_2017_09_08_at_13_59_38.png",
    "URL": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
  },
  {
    id: 12,
    "name": ".lastIndexOf()",
    "description": "Search the array for an element, starting at the end, and returns its position",
    "goal": "check",
    "dataType": "array",
    "image": ""
  },
  {
    id: 13,
    "name": ".map()",
    "description": "Creates a new array with the result of calling a function for each array element.",
    "goal": "change",
    "dataType": "array",
    "image": ""
  },
  {
    id: 14,
    "name": ".pop()",
    "description": "Removes the last element of an array, and returns that element.",
    "goal": "change",
    "dataType": "array",
    "image": ""
  },
  {
    id: 15,
    "name": ".push()",
    "description": "Adds new elements to the end of an array, and returns the new length.",
    "goal": "change",
    "dataType": "array",
    "image": ""
  },
  {
    id: 16,
    "name": ".reduce()",
    "description": "Reduce the values of an array to a single value (going left-to-right).",
    "goal": "change",
    "dataType": "array",
    "image": ""
  },
  {
    id: 17,
    "name": ".reverse()",
    "description": "Reverses the order of the elements in an array.",
    "goal": "change",
    "dataType": "array",
    "image": ""
  },
  {
    id: 18,
    "name": ".shift()",
    "description": "Removes the first element of an array, and returns that element.",
    "goal": "",
    "dataType": "array",
    "image": ""
  }
];

export default METHODS;
