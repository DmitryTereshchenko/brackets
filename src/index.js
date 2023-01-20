module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const mapper = bracketsConfig.reduce((acc, bracketPair) => {
    acc[bracketPair[1]] = bracketPair[0];
    return acc;
  }, {});

  for (bracket of str) {
    if (mapper[bracket] === bracket && !stack.includes(bracket)) {
      stack.push(bracket);
    }else if (Object.values(mapper).includes(bracket) && bracket !== mapper[bracket]) {
      stack.push(bracket);
    } else {
      if(stack[stack.length - 1] === mapper[bracket]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}
