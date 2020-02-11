const fs = require("fs");

function get_line(filename, callback) {
  var data = fs.readFileSync(filename, "ASCII");
  var lines = data.split("\n");

  // read the first and second line
  const firstLine = lines[0].split(" ");
  const secondLine = lines[1].split(" ");

  // get the maximum number of slices from the file
  const maxSlices = firstLine[0];
  var valCount = firstLine[1];

  var numbers = [];
  // console.log(`index ${i} is ${secondLine[i]}`);
  for (var i = 0; i <= valCount - 1; i++) {
    numbers.push(parseInt(secondLine[i]));
  }

  function getCombinations(chars) {
    let combinations = [];
    let word = "";
    for (var i = 0; i < chars.length; i++) {
      let char = chars[i];
      buildWord(word + char, [i], chars, combinations, chars);
    }
    console.log(`The closest value is ${sum_arr}`);
    // console.log(`${sum_arr} ${"\r\n"} ${newUsedIndexesArray}`);
  }

  function getSum(total, num) {
    return total + num;
  }

  var sum_arr = 0;
  var g_sum = [];

  function buildWord(word, usedIndexes, chars, combinations, c_chars) {
    for (var i = 0; i < chars.length; i++) {
      combinations.push(word);
      let char = chars[i];
      if (usedIndexes.indexOf(i) === -1) {
        let newUsedIndexesArray = Array.from(usedIndexes);
        var combo = [];
        var c_sum = 0;
        console.log(newUsedIndexesArray);
        newUsedIndexesArray.map(x => {
          combo.push(c_chars[x]);
          c_sum = combo.reduce(getSum, 0);
        });
        console.log(c_sum);
        if (c_sum < maxSlices) {
          newUsedIndexesArray.push(i);
          if (sum_arr < c_sum) {
            sum_arr = c_sum;
          }
          buildWord(
            word + char,
            newUsedIndexesArray,
            chars,
            combinations,
            c_chars
          );
        } else if (c_sum == maxSlices) {
          console.log("SUM FOUND...");
          console.log(`${c_sum} ${"\r\n"} ${newUsedIndexesArray}`);
          throw new Error("Value Found");
        } else {
          g_sum.push(c_sum);

          var l = g_sum.length;

          // increase the runtime here
          if (c_chars.length > 50) {
            l = maxSlices;
          } else {
            l = 20000;
          }

          if (g_sum.length > l) {
            console.log(`${sum_arr} ${"\r\n"} ${newUsedIndexesArray}`);
            throw new Error("Value Exceeded");
          }
        }
      }
    }
  }

  getCombinations(numbers);
}

// get_line("d_quite_big.in", function(err, res) {
//   // console.log(res);
// });

// get_line("a_example.in", function(err, line) {
//   // console.log(res);
// });

// get_line("b_small.in", function(err, res) {
//   // console.log(res);
// });

get_line("c_medium.in", function(err, res) {
  // console.log(res);
});

// get_line("e_also_big.in", function(err, res) {
//   console.log(res);
// });