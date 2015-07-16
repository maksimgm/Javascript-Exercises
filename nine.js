var str = ["cricket", "basketball", "hockey", "swimming", "soccer"]

var longestWord = " ";

for(i = 0; i < str.length; i++) {
  if (longestWord.length < str[i].length); {
    longestWord = str[i];
  }
  console.log(longestWord);
}
