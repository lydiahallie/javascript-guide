import React from 'react';
import './styles.css';

const METHODS = [
  {
    id: 1,
    name: ".charAt()",
    description: "Returns the character at the specified index (position)",
    goal: "Find",
    dataType: "string",
    image: "https://image.ibb.co/mF8pBv/Screen_Shot_2017_09_07_at_20_41_28.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
    hash: "ZXzymb",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.charAt()</code> method returns the character at the index that is equal to the value of your argument. The argument is the number that is passed inbetween the parenthesees. If we want to have the character that is positioned at index 4, we would write:</p>
        <div className="code-example">
          <p id="code"><code><span id="red">.charAt</span>(<span id="pink">4</span>)</code></p>
          <p><code id="red">.charAt()</code> = The method we use in order to find the right index.</p>
          <p><code id="pink">4</code> = The index of the character we want to have returned.</p>
        </div>

      </div>
    )
  },
  {
    id: 2,
    name: ".concat()",
    description: "Joins two or more strings, and returns a new joined strings",
    goal: "join",
    dataType: "array",
    image: "https://image.ibb.co/gKoajF/Screen_Shot_2017_09_08_at_12_55_09.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b",
    hash: "MEgEVq"
  },
  {
    id: 3,
    name: ".every()",
    description: "checks if every element in an array pass a test",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/jsk0jF/Screen_Shot_2017_09_07_at_20_33_44.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
    hash: "wrwqrv"
  },
  {
    id: 4,
    name: ".fill()",
    description: "Fill the elements in an array with a static value.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/khzPda/Screen_Shot_2017_09_07_at_20_37_18.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
    hash: "YrKrBW"
  },
  {
    id: 5,
    name: ".filter()",
    description: "Creates a new array with every element in an array that pass a test.",
    goal: "find",
    dataType: "array",
    image: "https://image.ibb.co/dpaA1v/Screen_Shot_2017_09_08_at_11_04_42.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    hash: "yzBzrQ"
  },
  {
    id: 6,
    name: ".find()",
    description: "Returns the value of the first element in an array that pass a test.",
    goal: "find",
    dataType: "array",
    image: "https://image.ibb.co/grK3Mv/Screen_Shot_2017_09_08_at_11_07_55.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    hash: "MEgOKR"
  },
  {
    id: 7,
    name: ".findIndex()",
    description: "Returns the index of the first element in an array that pass a test.",
    goal: "find",
    dataType: "array",
    image:"https://image.ibb.co/hDs9Ta/Screen_Shot_2017_09_08_at_11_22_03.png",
    URL:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    hash: "pWzdeB"
  },
  {
    id: 8,
    name: ".forEach()",
    description: "Calls a function for each array element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/ngoYoa/Screen_Shot_2017_09_08_at_11_27_24.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    hash: "eGOeRO"
  },
  {
    id: 9,
    name: ".indexOf()",
    description: "Search the array for an element and returns its position.",
    goal: "find",
    dataType: "array",
    image: "https://image.ibb.co/ifQ2gv/Screen_Shot_2017_09_08_at_11_46_54.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    hash: "WZeXZL"
  },
  {
    id: 10,
    name: ".isArray()",
    description: "checks whether an object is an array.",
    goal: "check",
    dataType: "other",
    image:"https://image.ibb.co/ekOEda/Screen_Shot_2017_09_08_at_12_03_08.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
    hash: "MEgQxz"
  },
  {
    id: 11,
    name: ".join()",
    description: "joins all elements of an array into a string.",
    goal: "join",
    dataType: "array",
    image: "https://image.ibb.co/fH0Kda/Screen_Shot_2017_09_08_at_13_59_38.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    hash: "QqLQXx"
  },
  {
    id: 12,
    name: ".lastIndexOf()",
    description: "Search the array for an element, starting at the end, and returns its position",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/ju3WTa/Screen_Shot_2017_09_10_at_13_54_24.png",
    URL:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
    hash: "PJYQMK"
  },
  {
    id: 13,
    name: ".map()",
    description: "Creates a new array with the result of calling a function for each array element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/dd9xjF/Screen_Shot_2017_09_10_at_14_00_02.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    hash: "VMZXwK"
  },
  {
    id: 14,
    name: ".pop()",
    description: "Removes the last element of an array, and returns that element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/c0MtPF/Screen_Shot_2017_09_10_at_14_01_59.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    hash: "gGYeaG"
  },
  {
    id: 15,
    name: ".push()",
    description: "Adds new elements to the end of an array, and returns the new length.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/gVNHjF/Screen_Shot_2017_09_10_at_14_12_01.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=b",
    hash: "xXKWVw"
  },
  {
    id: 16,
    name: ".reduce()",
    description: "Reduce the values of an array to a single value (going left-to-right).",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/gVNHjF/Screen_Shot_2017_09_10_at_14_12_01.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b",
    hash: ""
  },
  {
    id: 17,
    name: ".reverse()",
    description: "Reverses the order of the elements in an array.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/mLgwBv/Screen_Shot_2017_09_10_at_15_55_47.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    hash: "eGOMzw"
  },
  {
    id: 18,
    name: ".shift()",
    description: "Removes the first element of an array, and returns that element.",
    goal: "",
    dataType: "array",
    image: "https://image.ibb.co/ck4f4F/Screen_Shot_2017_09_10_at_16_13_53.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    hash: "PJYRpQ"
  },
  {
    id: 19,
    name: ".slice()",
    description: "Selects a part of an array, and returns the new array",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/n5dPgv/Screen_Shot_2017_09_10_at_17_44_02.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    hash: "pWzLPB"
  },
  {
    id: 20,
    name: ".some()",
    description: "Checks if any of the elements in an array pass a test.",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/c9ZV4F/Screen_Shot_2017_09_10_at_16_32_11.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    hash: "veBRZJ"
  },
  {
    id: 21,
    name: ".sort()",
    description: "Sorts the elements of an array.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/ft1UWv/Screen_Shot_2017_09_10_at_16_37_50.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    hash: "aLoYyd"
  },
  {
    id: 22,
    name: ".splice()",
    description: "Adds/Removes elements from an array",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/msvLMv/Screen_Shot_2017_09_10_at_17_03_14.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    hash: "yzBKzd"
  },
  {
    id: 23,
    name: ".toString()",
    description: "Converts an array to a string, and returns the result.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/khprTa/Screen_Shot_2017_09_10_at_17_11_47.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
    hash: "jGNzzR"
  },
  {
    id: 24,
    name: ".unshift()",
    description: "Adds new elements to the beginning of an array.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/nBk1uF/Screen_Shot_2017_09_10_at_17_15_18.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    hash: "NaKYzo"
  },
  {
    id: 25,
    name: ".concat()",
    description: "Joins two or more strings, and returns a new joined strings",
    goal: "join",
    dataType: "string",
    image: "https://image.ibb.co/kPt71v/Screen_Shot_2017_09_10_at_18_06_36.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",
    hash: "dVbmqz"
  },
  {
    id: 26,
    name: ".endsWith()",
    description: "Checks whether a string ends with specified string/characters",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/bUuVMv/Screen_Shot_2017_09_10_at_18_22_27.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",
    hash: "NaKYOJ"
  },
  {
    id: 27,
    name: ".includes()",
    description: "Checks whether a string contains the specified string/characters",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/gftMuF/Screen_Shot_2017_09_10_at_18_42_37.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",
    hash: "bobMNy"
  },
  {
    id: 27,
    name: ".indexOf()",
    description: "Returns the position of the first found occurrence of a specified value in a string.",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/cO4Y8a/Screen_Shot_2017_09_10_at_18_49_28.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
    hash: "qPWYdV"
  },
  {
    id: 28,
    name: ".repeat()",
    description: "Returns a new string with a specified number of copies of an existing string.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/hnp5Mv/Screen_Shot_2017_09_10_at_18_51_41.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",
    hash: "jGNxbE"
  },
  {
    id: 29,
    name: ".replace()",
    description: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/nrpY8a/Screen_Shot_2017_09_10_at_20_27_49.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
    hash: "XerqXp"
  },
  {
    id: 30,
    name: ".slice()",
    description: "Extracts a part of a string and returns a new string.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/mb8X1v/Screen_Shot_2017_09_10_at_20_31_19.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
    hash: "QqLrEw"
  },
  {
    id: 31,
    name: ".split()",
    description: "Splits a string into an array of substrings",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/gJWfoa/Screen_Shot_2017_09_10_at_20_33_04.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
    hash: "veBjKz"
  },
  {
    id: 32,
    name: ".startsWith()",
    description: "Checks whether a string begins with specified characters.",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/mUUa4F/Screen_Shot_2017_09_10_at_20_37_45.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith",
    hash: "YrKLpO"
  },
  {
    id: 33,
    name: ".substr()",
    description: "Extracts the characters from a string, beginning at a specified start position, and through the specified number of character.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/fD6irv/Screen_Shot_2017_09_10_at_20_41_08.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr",
    hash: "WZeJpb"
  },
  {
    id: 34,
    name: ".substring()",
    description: "Extracts the characters from a string, between two specified indices.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/dFqKgv/Screen_Shot_2017_09_11_at_08_51_42.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring",
    hash: "aLoGJL"
  },
  {
    id: 35,
    name: ".toLowerCase()",
    description: "Converts a string to lowercase letters.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/n73mBv/Screen_Shot_2017_09_11_at_08_58_46.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
    hash: "OxLZpY"
  },
  {
    id: 36,
    name: ".toUpperCase()",
    description: "Converts a string to uppercase letters.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/hv021v/Screen_Shot_2017_09_11_at_08_56_18.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",
    hash: "yzBjbJ"
  },
  {
    id: 37,
    name: ".trim()",
    description: "Removes whitespace from both ends of a string.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/by6jya/Screen_Shot_2017_09_11_at_09_06_06.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",
    hash: "zEOjwd"
  }
];

export default METHODS;
