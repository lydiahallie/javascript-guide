import React from 'react';
import './styles.css';

const METHODS = [
  {
    id: 1,
    name: ".charAt()",
    description: "Returns the character at the specified index (position)",
    goal: "find",
    dataType: "string",
    image: "https://image.ibb.co/mF8pBv/Screen_Shot_2017_09_07_at_20_41_28.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
    hash: "ZXzymb",
    explanation: (
      <div className="explanation">
        <p>The <code>.charAt()</code> method returns the character at the index that is equal to the value of your argument. The argument is the number that is passed inbetween the parentheses.</p>
         <div className="code-example">
          <div id="code">
            <code>
              <span id="orange">"Hello World"</span><span id="red">.charAt</span>(<span id="pink">4</span>)
            </code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">"Hello World"</code></th>
                <td>The string we want to check.</td>
              </tr>
              <tr>
                <th><code id="red">.charAt()</code></th>
                <td> The method we use in order to find the right index.</td>
              </tr>
              <tr>
                <th><code id="pink">4</code></th>
                <td>The index of the character we want to have returned.</td>
              </tr>
            </table>
          </div>
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
    hash: "MEgEVq",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">
          The <code>.concat()</code> method concatenates two arrays. It returns a new array, it doesn't modify the original arrays.
        </p>
        <div className="code-example">
            <p><code>let <span id="orange">arr1</span> = [<span id="pink">'Hello'</span>];</code></p>
            <p><code>let <span id="lightpurple">arr2</span> = [<span id="pink">'World'</span>];</code></p>
            <p><code><span id="orange">arr1</span><span id="red">.concat(<span id="lightpurple">arr2</span>)</span> = <span id="green">['Hello', 'World']</span>;</code></p>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="red">.concat()</code></th>
                <td>The method we use in order to concatenate our arrays.</td>
              </tr>
              <tr>
                <th><code id="orange">arr1</code></th>
                <td>Our first array, the value of this array will be the first value of our new array with the concatenated values.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">arr2</code></th>
                <td>Our second array, the value of this array will be the second value of our new array with the concatenated values.</td>
              </tr>
              <tr>
                <th><code id="green">['Hello', 'World']</code></th>
                <td>Our new array which contains the values of the arrays we concatenated.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    name: ".every()",
    description: "checks if every element in an array passes a test",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/f44y3k/Screen_Shot_2017_09_20_at_17_35_08_1.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
    hash: "wrwqrv",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">
          The <code>.every()</code> method checks if every element in an array passes a test. The test is a function that you create yourself.
        </p>
        <div className="code-example">
          <div id="code">
            <p><code>const <span id="orange">testValue</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[2, 4, 9, 10, 20]</span><span id="red">.every</span>(<span id="orange">testValue</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">testValue</code></th>
                <td>The name of the function that contains the "test".</td>
              </tr>
              <tr>
                <th><code id="pink">(x = x >= 10)</code></th>
                <td>This is our "test". The x stands for every single item in the array. You can call x anything you want, but both the first and the second x in our function need to have the same name. This basically says: check every single item, if every single item is (in this case) bigger or equal to 10, then return true.</td>
              </tr>
              <tr>
                <th><code id="green">[2, 4, 9, 10, 20]</code></th>
                <td>The array we want to have checked.</td>
              </tr>
              <tr>
                <th><code id="red">.every()</code></th>
                <td>The method we use in order to check whether every single item in the array returned true, thus passed our test.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    name: ".fill()",
    description: "Fill the elements in an array with a static value.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/f95MOk/Screen_Shot_2017_09_20_at_17_38_52.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
    hash: "YrKrBW",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.every()</code> method checks if every element in an array passes a test. The test is a function that you create yourself.</p>
        <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3]</span>;</code></p>
            <p><code><span id="orange">numbers</span><span id="red">.fill</span>(<span id="lightpurple">3</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">numbers</code></th>
                <td>The name of our array that we want to change.</td>
              </tr>
              <tr>
                <th><code id="pink">[1, 2, 3]</code></th>
                <td>The array that we want to change</td>
              </tr>
              <tr>
                <th><code id="red">.fill()</code></th>
                <td>The method we use in order to fill every value in the array with the value that we pass as argument.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">3</code></th>
                <td>The value that we want every single item in the array to have.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    name: ".filter()",
    description: "Creates a new array with every element in an array that pass a test.",
    goal: "find",
    dataType: "array",
    image: "https://image.ibb.co/j2e4b5/Screen_Shot_2017_09_20_at_17_40_08.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    hash: "yzBzrQ",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.filter()</code> method checks if an element passes a test, and adds that item to a new array.</p>
        <div className="code-example">
          <div id="code">
            <p><code>const <span id="orange">isBigEnough</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[1, 4, 19, -1, 14]</span><span id="red">.filter</span>(<span id="orange">isBigEnough</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">isBigEnough</code></th>
                <td>The name of the function that contains the "test".</td>
              </tr>
              <tr>
                <th><code id="pink">(x = x >= 10)</code></th>
                <td>This is our "test". The x stands for every single item in the array. You can call x anything you want, but both the first and the second x in our function need to have the same name. This basically says: check every single item, if an item is (in this case) bigger or equal to 10, then the item has passed the test</td>
              </tr>
              <tr>
                <th><code id="green">[1, 4, 19, -1, 14]</code></th>
                <td>The array we want to filter through.</td>
              </tr>
              <tr>
                <th><code id="red">.filter()</code></th>
                <td>The method we use in order to add the items that passed our "test" to a new array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    name: ".find()",
    description: "Returns the value of the first element in an array that pass a test.",
    goal: "find",
    dataType: "array",
    image: "https://image.ibb.co/b97FG5/Screen_Shot_2017_09_20_at_17_40_51.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    hash: "MEgOKR",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.find()</code> method checks if an element passes a test, and returns the value of the first item that passed the test.</p>
        <div className="code-example">
          <div id="code">
            <p><code>const <span id="orange">isBigEnough</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[1, 4, 19, -1, 14]</span><span id="red">.find</span>(<span id="orange">isBigEnough</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">isBigEnough</code></th>
                <td>The name of the function that contains the "test".</td>
              </tr>
              <tr>
                <th><code id="pink">(x = x >= 10)</code></th>
                <td>This is our "test". The x stands for every single item in the array. You can call x anything you want, but both the first and the second x in our function need to have the same name. If an item is (in this case) bigger or equal to 10, then that item has passed the test. The <code>.find()</code> method returns only the first value it finds.</td>
              </tr>
              <tr>
                <th><code id="green">[1, 4, 19, -1, 14]</code></th>
                <td>The array we want to check.</td>
              </tr>
              <tr>
                <th><code id="red">.find()</code></th>
                <td>The method we use in order to get the value of the first item in the array that passed the test.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    name: ".findIndex()",
    description: "Returns the index of the first element in an array that pass a test.",
    goal: "check",
    dataType: "array",
    image:"https://image.ibb.co/da02w5/Screen_Shot_2017_09_20_at_17_59_14.png",
    URL:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    hash: "pWzdeB",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.findIndex()</code> method returns the index of the first element in an array that pass a test.</p>
        <div className="code-example">
          <div id="code">
            <p><code>const <span id="orange">isBigEnough</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[1, 4, 19, -1, 14]</span><span id="red">.findIndex</span>(<span id="orange">isBigEnough</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">isBigEnough</code></th>
                <td>The name of the function that contains the "test".</td>
              </tr>
              <tr>
                <th><code id="pink">(x = x >= 10)</code></th>
                <td>This is our "test". The x stands for every single item in the array. You can call x anything you want, but both the first and the second x in our function need to have the same name. If an item is (in this case) bigger or equal to 10, then that item has passed the test. The <code>.find()</code> method returns only the first value it finds.</td>
              </tr>
              <tr>
                <th><code id="green">[1, 4, 19, -1, 14]</code></th>
                <td>The array we want to check.</td>
              </tr>
              <tr>
                <th><code id="red">.findIndex()</code></th>
                <td>The method we use in order to get the value of the first item in the array that passed the test.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    name: ".forEach()",
    description: "Calls a function for each array element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/eET5G5/Screen_Shot_2017_09_20_at_18_02_05.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    hash: "eGOeRO",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.forEach()</code> calls a function for every item in the array.</p>
        <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">arr</span> = [<span id="pink">'Hello', 'World'</span>];</code></p>
            <p><code><span id="orange">arr</span><span id="red">.forEach</span>(<span id="orange">x => console.log(x)</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">arr</code></th>
                <td>The name of the array we want to iterate (loop) over.</td>
              </tr>
              <tr>
                <th><code id="pink">['Hello', 'World']</code></th>
                <td>This is our "test". The x stands for every single item in the array. You can call x anything you want, but both the first and the second x in our function need to have the same name. If an item is (in this case) bigger or equal to 10, then that item has passed the test. The <code>.find()</code> method returns only the first value it finds.</td>
              </tr>
              <tr>
                <th><code id="green">[1, 4, 19, -1, 14]</code></th>
                <td>The array we want to check.</td>
              </tr>
              <tr>
                <th><code id="red">.findIndex()</code></th>
                <td>The method we use in order to get the value of the first item in the array that passed the test.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    name: ".indexOf()",
    description: "Search the array for an element and returns its position.",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/hmBsw5/Screen_Shot_2017_09_20_at_18_05_04.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    hash: "WZeXZL",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.indexOf()</code> method returns the index of the character given as argument.</p>
        <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">arr</span> = [<span id="pink">'Green', 'Blue', 'Yellow', 'Orange'</span>];</code></p>
            <p><code><span id="orange">arr</span><span id="red">.indexOf</span>(<span id="lightpurple">'Blue'</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">arr</code></th>
                <td>The name of the array we want to get a value from.</td>
              </tr>
              <tr>
                <th><code id="pink">['Green', 'Blue', 'Yellow', 'Orange']</code></th>
                <td>The array we want to get a value from.</td>
              </tr>
              <tr>
                <th><code id="red">.indexOf()</code></th>
                <td>The method we use in order to get the index of the given value.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">'Blue'</code></th>
                <td>The value from which we want to have the index returned.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    name: ".isArray()",
    description: "checks whether an object is an array.",
    goal: "check",
    dataType: "other",
    image:"https://image.ibb.co/ekOEda/Screen_Shot_2017_09_08_at_12_03_08.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray",
    hash: "MEgQxz",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.isArray()</code> checks whether its argument is an array.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">Array</span>.<span id="red">isArray</span>(<span id="pink">[1]</span>)</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">Array</code></th>
                <td>The standard syntax, always type Array. before the method.</td>
              </tr>
              <tr>
                <th><code id="red">.isArray()</code></th>
                <td>The method we use in order to check whether its argument is an array.</td>
              </tr>
              <tr>
                <th><code id="pink">[1]</code></th>
                <td>The argument that's passed </td>
              </tr>
              <tr>
                <th><code id="lightpurple">'Blue'</code></th>
                <td>The value from which we want to have the index returned.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    name: ".join()",
    description: "joins all elements of an array into a string.",
    goal: "join",
    dataType: "array",
    image: "https://image.ibb.co/fH0Kda/Screen_Shot_2017_09_08_at_13_59_38.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join",
    hash: "QqLQXx",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.join()</code> joins all elements of an array in a string.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">['Dog', 'Fox', 'Ocelot']</span>.<span id="red">join</span>(<span id="pink">' '</span>)</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">['Dog', 'Fox', 'Ocelot']</code></th>
                <td>The array from which we want the values to be joined in a string.</td>
              </tr>
              <tr>
                <th><code id="red">.join()</code></th>
                <td>The method we use in order to join the values.</td>
              </tr>
              <tr>
                <th><code id="pink">(' ')</code></th>
                <td>The default seperator, so when you write .join() is a comma. However, if you want a space instead, you'd write (' '). Same goes for any other character.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 12,
    name: ".lastIndexOf()",
    description: "Search the array for an element, starting at the end, and returns its position",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/ju3WTa/Screen_Shot_2017_09_10_at_13_54_24.png",
    URL:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf",
    hash: "PJYQMK",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.join()</code> joins all elements of an array in a string.</p>
        <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[7, 2, 3, 2]</span>;</code></p>
            <p><code><span id="orange">numbers</span><span id="red">.lastIndexOf</span><span id="lightpurple">(2)</span></code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">numbers</code></th>
                <td>The name of the array</td>
              </tr>
              <tr>
                <th><code id="pink">[7, 2, 3, 2]</code></th>
                <td>The array with values from which we want to check the index.</td>
              </tr>
              <tr>
                <th><code id="red">.lastIndexOf()</code></th>
                <td>The method we use in order to find the index of the last value that's equal to the value in the argument.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">(2)</code></th>
                <td>The value from which we want to get the last index returned.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 13,
    name: ".map()",
    description: "Creates a new array with the result of calling a function for each array element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/iqqKb5/Screen_Shot_2017_09_20_at_18_07_42.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    hash: "VMZXwK",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.map()</code> method creates a new array with the result of calling a function for each array element.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">[1, 2, 3]</span>.<span id="red">map</span><span id="pink">(number =>(number*2))</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">[1, 2, 3]</code></th>
                <td>The array we want to map over</td>
              </tr>
              <tr>
                <th><code id="red">.map()</code></th>
                <td>The method we use in order to create a new array after a function has been called for every item in the array.</td>
              </tr>
              <tr>
                <th><code id="pink">(number => (number*2))</code></th>
                <td>The function that will be executed for each single item in the array. Each item is now called "number", so we say: get "number", then return number * 2, and push that result in a new array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 14,
    name: ".pop()",
    description: "Removes the last element of an array, and returns that element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/c0MtPF/Screen_Shot_2017_09_10_at_14_01_59.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
    hash: "gGYeaG",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.pop()</code> method removes the last element of the array, and returns that element.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">[4, 5, 6, 7, 5]</span>.<span id="red">pop()</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">[4, 5, 6, 7, 5]</code></th>
                <td>The array from which we want the last item.</td>
              </tr>
              <tr>
                <th><code id="red">.pop()</code></th>
                <td>The method we use in order to remove the last element and return this.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 15,
    name: ".push()",
    description: "Adds new elements to the end of an array, and returns the new length.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/gVNHjF/Screen_Shot_2017_09_10_at_14_12_01.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=b",
    hash: "xXKWVw",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.push()</code> adds new elements to the end of an array, and returns the new length. If you add console.log(), it will return the new array.</p>
        <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3]</span>;</code></p>
            <p><code><span id="orange">numbers</span>.<span id="red">push</span>(<span id="lightpurple">4</span>);</code></p>
            <p><code>console.log(<span id="orange">numbers</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">[1, 2, 3]</code></th>
                <td>The array we want to add an element to.</td>
              </tr>
              <tr>
                <th><code id="red">.push()</code></th>
                <td>The method we use in order to add an element to the array.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">4</code></th>
                <td>The element we want to add to the array.</td>
              </tr>
              <tr>
                <th><code>console.log(numbers)</code></th>
                <td>The console.log(numbers) will return the array, without console.log(numbers) it will return the length.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 16,
    name: ".reduce()",
    description: "Reduce the values of an array to a single value (going left-to-right).",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/inVgpQ/Screen_Shot_2017_09_19_at_17_26_01.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b",
    hash: "LzNWgV",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.reduce()</code> method reduces the values of an array to a single value (going left-to-right).</p>
        <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3]</span>;</code></p>
            <p><code><span id="orange">numbers</span>.<span id="red">reduce((previous, current)</span> => <span id="lightpurple">(previous + current)</span><span id="red">)</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">[1, 2, 3]</code></th>
                <td>The array with the values we want to have reduced.</td>
              </tr>
              <tr>
                <th><code id="red">.reduce()</code></th>
                <td>The method we use in order to reduce the elemnts to a single value</td>
              </tr>
              <tr>
                <th><code id="lightpurple">(previous + current)</code></th>
                <td>This means that for every item in the array, it will grab that item and adds the value of the next item to that. After that has happened, it will go to the next item and do the exact same.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 17,
    name: ".reverse()",
    description: "Reverses the order of the elements in an array.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/d4XCUQ/Screen_Shot_2017_09_20_at_17_32_32.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    hash: "eGOMzw",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.reverse()</code> method returns the array reversed</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">['USA', 'Canada', 'France', 'Germany']</span>.<span id="red">reverse()</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">['USA', 'Canada', 'France', 'Germany']</code></th>
                <td>The array that we want to have reversed.</td>
              </tr>
              <tr>
                <th><code id="red">.reverse()</code></th>
                <td>The method we use in order to reverse the array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 18,
    name: ".shift()",
    description: "Removes the first element of an array, and returns that element.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/ck4f4F/Screen_Shot_2017_09_10_at_16_13_53.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift",
    hash: "PJYRpQ",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.shift()</code> method returns the first element of the array.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">[1, 2, 3, 4]</span>.<span id="red">shift()</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">[1, 2, 3, 4]</code></th>
                <td>The array from which we want the first item.</td>
              </tr>
              <tr>
                <th><code id="red">.shift()</code></th>
                <td>The method we use in order to get the first element and return this.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 19,
    name: ".slice()",
    description: "Selects a part of an array, and returns the new array",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/g3OBpQ/Screen_Shot_2017_09_20_at_17_31_13.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    hash: "pWzLPB",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.slice()</code> method selects a part of an array, and returns this part as new array.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">['apple', 'banana', 'mango', 'lemon']</span>.<span id="red">slice</span>(<span id="green">0, 2</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">['apple', 'banana', 'mango', 'lemon']</code></th>
                <td>The array we want to have a part of.</td>
              </tr>
              <tr>
                <th><code id="red">.slice()</code></th>
                <td>The method we use in order to get a certain part of the array.</td>
              </tr>
              <tr>
                <th><code id="green">(0, 2)</code></th>
                <td>The 0 stands for the first index where the "cut" should begin, the 2 is the end index, which is not included.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 20,
    name: ".some()",
    description: "Checks if any of the elements in an array pass a test.",
    goal: "check",
    dataType: "array",
    image: "https://image.ibb.co/c9ZV4F/Screen_Shot_2017_09_10_at_16_32_11.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
    hash: "veBRZJ",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.some()</code> checks if any of the elements in an array passes a test.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">[10, 30, 45, 20, 40]</span>.<span id="red">some</span>(<span id="lightpurple">x => x > 50</span>);</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">[10, 30, 45, 20, 40]</code></th>
                <td>The array we want to have checked.</td>
              </tr>
              <tr>
                <th><code id="red">.some()</code></th>
                <td>The method we use in order to check if any of the values in the array passes the test</td>
              </tr>
              <tr>
                <th><code id="lightpurple">(x => x > 50)</code></th>
                <td>This is our "test". This basically says: check every single item in the array(x), and is this item's value more than 50? Then return true.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 21,
    name: ".sort()",
    description: "Sorts the elements of an array.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/ft1UWv/Screen_Shot_2017_09_10_at_16_37_50.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort",
    hash: "aLoYyd",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.sort()</code> method sorts the array alphabetically and numerically.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">[10, 30, 45, 20, 40]</span>.<span id="red">sort()</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">[10, 30, 45, 20, 40]</code></th>
                <td>The array we want to sort.</td>
              </tr>
              <tr>
                <th><code id="red">.sort()</code></th>
                <td>The method we use in order to sort the array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 22,
    name: ".splice()",
    description: "Adds/Removes elements from an array",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/msvLMv/Screen_Shot_2017_09_10_at_17_03_14.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice",
    hash: "yzBKzd",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.splice()</code> adds and/or removes elements frmo an array.</p>
        <div className="code-example">
          <div id="code">
            <p><code><span id="orange">[10, 30, 45, 20, 40]</span>.<span id="red">sort()</span>;</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">[10, 30, 45, 20, 40]</code></th>
                <td>The array we want to sort.</td>
              </tr>
              <tr>
                <th><code id="red">.sort()</code></th>
                <td>The method we use in order to sort the array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 23,
    name: ".toString()",
    description: "Converts an array to a string, and returns the result.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/khprTa/Screen_Shot_2017_09_10_at_17_11_47.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString",
    hash: "jGNzzR",
    explanation: (
      <div className="explanation">
        <p>The <code>.toString()</code> method converts an array into a string.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">['Hello',  'World']</span><span id="red">.toString();</span></code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">['Hello', 'World]</code></th>
                <td>The array we want to have converted to a string.</td>
              </tr>
              <tr>
                <th><code id="red">.toString()</code></th>
                <td> The method we use in order to convert an array into a string.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 24,
    name: ".unshift()",
    description: "Adds new elements to the beginning of an array.",
    goal: "change",
    dataType: "array",
    image: "https://image.ibb.co/nBk1uF/Screen_Shot_2017_09_10_at_17_15_18.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift",
    hash: "NaKYzo",
    explanation: (
      <div className="explanation">
        <p>The <code>.unshift()</code> method adds a new element to the beginning of the array. It's the opposite of the <code>.shift()</code> method</p>
         <div className="code-example">
          <div id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3, 4, 5]</span>;</code></p>
            <p><code><span id="orange">numbers</span>.<span id="red">unshift(<span id="lightpurple">9</span>)</span>;</code></p>
            <p><code>console.log(<span id="orange">numbers</span>)</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">numbers</code></th>
                <td>The name of the array we want to add a value to.</td>
              </tr>
              <tr>
                <th><code id="pink">[1, 2, 3, 4, 5]</code></th>
                <td> The array we want to add a value to.</td>
              </tr>
              <tr>
                <th><code id="red">.unshift()</code></th>
                <td> The method we use in order to add its arguments value to the beginning of the array.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">9</code></th>
                <td>The value we want to add to the array.</td>
              </tr>
              <tr>
                <th><code>console.log(<span id="orange">numbers</span>)</code></th>
                <td>If you don't console log the array, it will return the new length of the array instead of the actual array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 25,
    name: ".concat()",
    description: "Joins two or more strings, and returns a new joined strings",
    goal: "join",
    dataType: "string",
    image: "https://image.ibb.co/n88VYk/Screen_Shot_2017_09_20_at_18_17_30.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat",
    hash: "dVbmqz",
    explanation: (
      <div className="explanation">
        <p>The <code>.concat()</code> joins two or more strings, and returns the new string.</p>
         <div className="code-example">
          <div id="code">
            <p><code><span id="orange">'Hello'</span>.<span id="red">concat</span>('<span id="pink">World</span>')</code></p>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="orange">'Hello'</code></th>
                <td>The array we already have, and want to add a value to.</td>
              </tr>
              <tr>
                <th><code id="red">.concat()</code></th>
                <td> The method we use in order to concatenate both strings.</td>
              </tr>
              <tr>
                <th><code id="pink">'World'</code></th>
                <td>The string we want to concatenate to our original string. By default, there is no space inbetween the words. If you want to have a space, or any other character, you have to add that to the string in the method's argument.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 26,
    name: ".endsWith()",
    description: "Checks whether a string ends with specified string/characters",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/jzraG5/Screen_Shot_2017_09_20_at_18_10_24.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",
    hash: "NaKYOJ",
    explanation: (
      <div className="explanation">
        <p>The <code>.endsWith()</code> method checks whether a string ends with the word or characters given in its argument.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Dogs are cute"</span>.<span id="red">endsWith(<span id="orange">"cute"</span>)</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Dogs are cute"</code></th>
                <td>The string we want to have checked.</td>
              </tr>
              <tr>
                <th><code id="red">.endsWith()</code></th>
                <td> The method we use in order to check whether a string ends with the given argument.</td>
              </tr>
              <tr>
                <th><code id="orange">"cute"</code></th>
                <td> Our given argument, if the string ends with this word, it will return true, otherwise it will return false.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 27,
    name: ".includes()",
    description: "Checks whether a string contains the specified string/characters",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/gftMuF/Screen_Shot_2017_09_10_at_18_42_37.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes",
    hash: "bobMNy",
    explanation: (
      <div className="explanation">
        <p>The <code>.includes()</code> method checks whether a string includes the word or characters given in its argument.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Dogs are cute"</span>.<span id="red">includes(<span id="orange">"cute"</span>)</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Dogs are cute"</code></th>
                <td>The string we want to have checked.</td>
              </tr>
              <tr>
                <th><code id="red">.includes()</code></th>
                <td> The method we use in order to check whether a string includes the given argument.</td>
              </tr>
              <tr>
                <th><code id="orange">"cute"</code></th>
                <td> Our given argument, if the string contains with this word, it will return true, otherwise it will return false.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 28,
    name: ".repeat()",
    description: "Returns a new string with a specified number of copies of an existing string.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/h6Rjtk/Screen_Shot_2017_09_20_at_18_12_46.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",
    hash: "jGNxbE",
    explanation: (
      <div className="explanation">
        <p>The <code>.repeat()</code> method checks repeats a string the amount of times that's specified in its argument</p>
         <div className="code-example">
          <div id="code">
            <code>"<span id="pink">Hello</span>".<span id="red">repeat(<span id="orange">2</span>)</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">Hello</code></th>
                <td>The value we want to have repeated.</td>
              </tr>
              <tr>
                <th><code id="red">.repeat()</code></th>
                <td> The method we use in order to repeat a value.</td>
              </tr>
              <tr>
                <th><code id="orange">2</code></th>
                <td>The amount of times we want to repeat the value.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 29,
    name: ".replace()",
    description: "Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/g7LNeQ/Screen_Shot_2017_09_20_at_18_15_36.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
    hash: "XerqXp",
    explanation: (
      <div className="explanation">
        <p>The <code>.replace()</code> method replaces specified value in the string, and returns a new string where the specified value is replaced.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Dogs are cute"</span>.<span id="red">replace</span>(<span id="orange">"cute"</span>, <span id="green">"adorable"</span>);</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Dogs are cute"</code></th>
                <td>The string in which we want to replace a certain value.</td>
              </tr>
              <tr>
                <th><code id="red">.replace()</code></th>
                <td> The method we use in order to replace a value</td>
              </tr>
              <tr>
                <th><code id="orange">"cute"</code></th>
                <td>The original value that we want to replace in the string.</td>
              </tr>
              <tr>
                <th><code id="green">"adorable"</code></th>
                <td>The value we want to replace the original value with.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 30,
    name: ".slice()",
    description: "Extracts a part of a string and returns a new string.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/mb8X1v/Screen_Shot_2017_09_10_at_20_31_19.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice",
    hash: "QqLrEw",
    explanation: (
      <div className="explanation">
        <p>The <code>.slice()</code> method extracts a part of a string and returns a new string.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Hello World"</span>.<span id="red">slice</span>(<span id="orange">1</span>, <span id="green">5</span>);</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Hello World"</code></th>
                <td>The string we want to extract a certain part from.</td>
              </tr>
              <tr>
                <th><code id="red">.slice()</code></th>
                <td> The method we use in order to extract a certain part of the string.</td>
              </tr>
              <tr>
                <th><code id="orange">1</code></th>
                <td>The begin index of the extracted part</td>
              </tr>
              <tr>
                <th><code id="green">5</code></th>
                <td>The end index of the extracted part WHICH IS NOT INCLUDED.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 31,
    name: ".split()",
    description: "Splits a string into an array of substrings",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/gJWfoa/Screen_Shot_2017_09_10_at_20_33_04.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
    hash: "veBjKz",
    explanation: (
      <div className="explanation">
        <p>The <code>.split()</code> method splits a string into an array or substring.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">'Hello World'</span>.<span id="red">split(' ')</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">'Hello World'</code></th>
                <td>The string we want to have converted to an array.</td>
              </tr>
              <tr>
                <th><code id="red">.split(' ')</code></th>
                <td> The method we use in order to split a string into an array.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 32,
    name: ".startsWith()",
    description: "Checks whether a string begins with specified characters.",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/mUUa4F/Screen_Shot_2017_09_10_at_20_37_45.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith",
    hash: "YrKLpO",
    explanation: (
      <div className="explanation">
        <p>The <code>.startsWith()</code> method checks whether a string begins with the word or characters given in its argument.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Dogs are cute"</span>.<span id="red">startsWith(<span id="orange">"Dogs"</span>)</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Dogs are cute"</code></th>
                <td>The string we want to have checked.</td>
              </tr>
              <tr>
                <th><code id="red">.startsWith()</code></th>
                <td> The method we use in order to check whether a string starts with the given argument.</td>
              </tr>
              <tr>
                <th><code id="orange">"Dogs"</code></th>
                <td> Our given argument, if the string starts with this word (and the uppercase D), it will return true, otherwise it will return false.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 33,
    name: ".substr()",
    description: "Extracts the characters from a string, beginning at a specified start position, and has a specified length.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/fD6irv/Screen_Shot_2017_09_10_at_20_41_08.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr",
    hash: "WZeJpb",
    explanation: (
      <div className="explanation">
        <p>The <code>.substr()</code> returns the characters from a string, beginning at a specified start position, and has a specified length</p>
         <div className="code-example">
           <div id="code">
             <code><span id="pink">"Hello World"</span>.<span id="red">substr</span>(<span id="orange">1</span>, <span id="green">4</span>);</code>
           </div>
           <div className="code-explanation">
             <table>
               <tr>
                 <th><code id="pink">"Hello World"</code></th>
                 <td>The string we want to extract a certain part from.</td>
               </tr>
               <tr>
                 <th><code id="red">.substr()</code></th>
                 <td> The method we use in order to extract a certain part of the string.</td>
               </tr>
               <tr>
                 <th><code id="orange">1</code></th>
                 <td>The begin index of the extracted part</td>
               </tr>
               <tr>
                 <th><code id="green">4</code></th>
                 <td>The length of our extracted part</td>
               </tr>
             </table>
           </div>
         </div>
       </div>
    )
  },
  {
    id: 34,
    name: ".substring()",
    description: "Extracts the characters from a string, between two specified indices.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/dFqKgv/Screen_Shot_2017_09_11_at_08_51_42.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring",
    hash: "aLoGJL",
    explanation: (
      <div className="explanation">
        <p>The <code>.substring()</code> returns the characters from a string between two specified indices.</p>
         <div className="code-example">
           <div id="code">
             <code><span id="pink">"Hello World"</span>.<span id="red">substring</span>(<span id="orange">1</span>, <span id="green">4</span>);</code>
           </div>
           <div className="code-explanation">
             <table>
               <tr>
                 <th><code id="pink">"Hello World"</code></th>
                 <td>The string we want to extract a certain part from.</td>
               </tr>
               <tr>
                 <th><code id="red">.substr()</code></th>
                 <td> The method we use in order to extract a certain part of the string.</td>
               </tr>
               <tr>
                 <th><code id="orange">1</code></th>
                 <td>The begin index of the extracted part</td>
               </tr>
               <tr>
                 <th><code id="green">4</code></th>
                 <td>The end index of the extracted part</td>
               </tr>
             </table>
           </div>
         </div>
       </div>
    )
  },
  {
    id: 35,
    name: ".toLowerCase()",
    description: "Converts a string to lowercase letters.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/n73mBv/Screen_Shot_2017_09_11_at_08_58_46.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase",
    hash: "OxLZpY",
    explanation: (
      <div className="explanation">
        <p>The <code>.toLowerCase()</code> method converts a string to lowercase letters.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Hello World"</span>.<span id="red">.toLowerCase();</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Hello World"</code></th>
                <td>The string we want to convert to all lowercase letters.</td>
              </tr>
              <tr>
                <th><code id="red">.toLowerCase()</code></th>
                <td> The method we use in order to convert a string to lowercase.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 36,
    name: ".toUpperCase()",
    description: "Converts a string to uppercase letters.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/hv021v/Screen_Shot_2017_09_11_at_08_56_18.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase",
    hash: "yzBjbJ",
    explanation: (
      <div className="explanation">
        <p>The <code>.toUpperCase()</code> method converts a string to uppercase letters.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">"Hello World"</span>.<span id="red">.toUpperCase();</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">"Hello World"</code></th>
                <td>The string we want to convert to all uppercase letters.</td>
              </tr>
              <tr>
                <th><code id="red">.toLowerCase()</code></th>
                <td> The method we use in order to convert a string to uppercase.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 37,
    name: ".trim()",
    description: "Removes whitespace from both ends of a string.",
    goal: "change",
    dataType: "string",
    image: "https://image.ibb.co/kf9LYk/Screen_Shot_2017_09_20_at_18_21_19.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",
    hash: "zEOjwd",
    explanation: (
      <div className="explanation">
        <p>The <code>.trim()</code> method removes whitespace from both ends of  a string.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">'       Hello World      '</span>.<span id="red">trim()</span>;</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">'Hello World'</code></th>
                <td>The string we want to have the white space removed from.</td>
              </tr>
              <tr>
                <th><code id="red">.trim()</code></th>
                <td> The method we use in order to remove the white space.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 38,
    name: ".indexOf()",
    description: "Returns the position of the first found occurrence of a specified value in a string.",
    goal: "check",
    dataType: "string",
    image: "https://image.ibb.co/cO4Y8a/Screen_Shot_2017_09_10_at_18_49_28.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf",
    hash: "qPWYdV",
    explanation: (
      <div className="explanation">
        <p>The <code>.indexOf()</code> method method returns the position of the first found occurrence of a specific character in a string.</p>
         <div className="code-example">
          <div id="code">
            <code><span id="pink">'Hello World'</span>.<span id="red">indexOf(</span>'<span id="lightpurple">Hello</span>')';</code>
          </div>
          <div className="code-explanation">
            <table>
              <tr>
                <th><code id="pink">'Hello World'</code></th>
                <td>The string we want check.</td>
              </tr>
              <tr>
                <th><code id="red">.indexOf()</code></th>
                <td>The method we use in order to find the index of a specific character or word, given in its argument.</td>
              </tr>
              <tr>
                <th><code id="lightpurple">.indexOf()</code></th>
                <td>The word we want to get the index returned of.</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  },
];

export default METHODS;
