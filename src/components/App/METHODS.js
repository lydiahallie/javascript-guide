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
        <p>The <code>.charAt()</code> method returns the character at the index that is equal to the value of your argument. The argument is the number that is passed inbetween the parentheses.</p>
         <div className="code-example">
          <p id="code"><code><span id="red">.charAt</span>(<span id="pink">4</span>)</code></p>
          <div className="code-explanation">
            <table>
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
        <p id="explanation-text">The <code>.concat()</code> method concatenates two arrays. It returns a new array, it doesn't modify the original arrays.</p>
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
    image: "https://image.ibb.co/jsk0jF/Screen_Shot_2017_09_07_at_20_33_44.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
    hash: "wrwqrv",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.every()</code> method checks if every element in an array passes a test. The test is a function that you create yourself.</p>
        <div className="code-example">
          <p id="code">
            <p><code>const <span id="orange">testValue</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[2, 4, 9, 10, 20]</span><span id="red">.every</span>(<span id="orange">testValue</span>);</code></p>
          </p>
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
    image: "https://image.ibb.co/khzPda/Screen_Shot_2017_09_07_at_20_37_18.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill",
    hash: "YrKrBW",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.every()</code> method checks if every element in an array passes a test. The test is a function that you create yourself.</p>
        <div className="code-example">
          <p id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3]</span>;</code></p>
            <p><code><span id="orange">numbers</span><span id="red">.fill</span>(<span id="lightpurple">3</span>);</code></p>
          </p>
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
    image: "https://image.ibb.co/dpaA1v/Screen_Shot_2017_09_08_at_11_04_42.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
    hash: "yzBzrQ",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.filter()</code> method checks if an element passes a test, and adds that item to a new array.</p>
        <div className="code-example">
          <p id="code">
            <p><code>const <span id="orange">isBigEnough</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[1, 4, 19, -1, 14]</span><span id="red">.filter</span>(<span id="orange">isBigEnough</span>);</code></p>
          </p>
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
    image: "https://image.ibb.co/grK3Mv/Screen_Shot_2017_09_08_at_11_07_55.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
    hash: "MEgOKR",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.find()</code> method checks if an element passes a test, and returns the value of the first item that passed the test.</p>
        <div className="code-example">
          <p id="code">
            <p><code>const <span id="orange">isBigEnough</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[1, 4, 19, -1, 14]</span><span id="red">.find</span>(<span id="orange">isBigEnough</span>);</code></p>
          </p>
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
    image:"https://image.ibb.co/hDs9Ta/Screen_Shot_2017_09_08_at_11_22_03.png",
    URL:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",
    hash: "pWzdeB",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.findIndex()</code> method returns the index of the first element in an array that pass a test.</p>
        <div className="code-example">
          <p id="code">
            <p><code>const <span id="orange">isBigEnough</span> = (<span id="pink">x => x >= 10</span>);</code></p>
            <p><code><span id="green">[1, 4, 19, -1, 14]</span><span id="red">.findIndex</span>(<span id="orange">isBigEnough</span>);</code></p>
          </p>
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
    image: "https://image.ibb.co/ngoYoa/Screen_Shot_2017_09_08_at_11_27_24.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
    hash: "eGOeRO",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.forEach()</code> calls a function for every item in the array.</p>
        <div className="code-example">
          <p id="code">
            <p><code>let <span id="orange">arr</span> = [<span id="pink">'Hello', 'World'</span>];</code></p>
            <p><code><span id="orange">arr</span><span id="red">.forEach</span>(<span id="orange">x => console.log(x)</span>);</code></p>
          </p>
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
    image: "https://image.ibb.co/ifQ2gv/Screen_Shot_2017_09_08_at_11_46_54.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
    hash: "WZeXZL",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.indexOf()</code> method returns the index of the character given as argument.</p>
        <div className="code-example">
          <p id="code">
            <p><code>let <span id="orange">arr</span> = [<span id="pink">'Green', 'Blue', 'Yellow', 'Orange'</span>];</code></p>
            <p><code><span id="orange">arr</span><span id="red">.indexOf</span>(<span id="lightpurple">'Blue'</span>);</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">Array</span>.<span id="red">isArray</span>(<span id="pink">[1]</span>)</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">['Dog', 'Fox', 'Ocelot']</span>.<span id="red">join</span>(<span id="pink">' '</span>)</code></p>
          </p>
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
          <p id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[7, 2, 3, 2]</span>;</code></p>
            <p><code><span id="orange">numbers</span><span id="red">.lastIndexOf</span><span id="lightpurple">(2)</span></code></p>
          </p>
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
    image: "https://image.ibb.co/dd9xjF/Screen_Shot_2017_09_10_at_14_00_02.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
    hash: "VMZXwK",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.map()</code> method creates a new array with the result of calling a function for each array element.</p>
        <div className="code-example">
          <p id="code">
            <p><code><span id="orange">[1, 2, 3]</span>.<span id="red">map</span><span id="pink">(number =>(number*2))</span>;</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">[4, 5, 6, 7, 5]</span>.<span id="red">pop()</span>;</code></p>
          </p>
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
          <p id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3]</span>;</code></p>
            <p><code><span id="orange">numbers</span>.<span id="red">push</span>(<span id="lightpurple">4</span>);</code></p>
            <p><code>console.log(<span id="orange">numbers</span>);</code></p>
          </p>
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
          <p id="code">
            <p><code>let <span id="orange">numbers</span> = <span id="pink">[1, 2, 3]</span>;</code></p>
            <p><code><span id="orange">numbers</span>.<span id="red">reduce((previous, current)</span> => <span id="lightpurple">(previous + current)</span><span id="red">)</span>;</code></p>
          </p>
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
    image: "https://image.ibb.co/mLgwBv/Screen_Shot_2017_09_10_at_15_55_47.png",
    URL: "https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse",
    hash: "eGOMzw",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.reverse()</code> method returns the array reversed</p>
        <div className="code-example">
          <p id="code">
            <p><code><span id="orange">['USA', 'Canada', 'France', 'Germany']</span>.<span id="red">reverse()</span>;</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">[1, 2, 3, 4]</span>.<span id="red">shift()</span>;</code></p>
          </p>
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
    image: "https://image.ibb.co/n5dPgv/Screen_Shot_2017_09_10_at_17_44_02.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice",
    hash: "pWzLPB",
    explanation: (
      <div className="explanation">
        <p id="explanation-text">The <code>.slice()</code> method selects a part of an array, and returns this part as new array.</p>
        <div className="code-example">
          <p id="code">
            <p><code><span id="orange">['apple', 'banana', 'mango', 'lemon']</span>.<span id="red">slice</span>(<span id="green">0, 2</span>);</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">[10, 30, 45, 20, 40]</span>.<span id="red">some</span>(<span id="lightpurple">x => x > 50</span>);</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">[10, 30, 45, 20, 40]</span>.<span id="red">sort()</span>;</code></p>
          </p>
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
          <p id="code">
            <p><code><span id="orange">[10, 30, 45, 20, 40]</span>.<span id="red">sort()</span>;</code></p>
          </p>
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
    hash: "OxLZpY",
    explanation: (
      <div className="explanation">
        <p>The <code>.toLowerCase()</code> method converts a string to lowercase letters.</p>
         <div className="code-example">
          <p id="code">
            <code><span id="pink">"Hello World"</span>.<span id="red">.toLowerCase();</span>;</code></p>
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
          <p id="code">
            <code><span id="pink">"Hello World"</span>.<span id="red">.toUpperCase();</span>;</code></p>
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
    image: "https://image.ibb.co/by6jya/Screen_Shot_2017_09_11_at_09_06_06.png",
    URL: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",
    hash: "zEOjwd",
    explanation: (
      <div className="explanation">
        <p>The <code>.trim()</code> method removes whitespace from both ends of  a string.</p>
         <div className="code-example">
          <p id="code">
            <code><span id="pink">'       Hello World      '</span>.<span id="red">trim()</span>;</code></p>
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
    hash: "qPWYdV"
  },
];

export default METHODS;
