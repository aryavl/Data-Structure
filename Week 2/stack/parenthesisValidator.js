function isValidParenthesis(s) {
    const stack = [];
    const openParentheses = ['(', '[', '{'];
    const closeParentheses = [')', ']', '}'];
  
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (openParentheses.includes(char)) {
        stack.push(char);
      } else if (closeParentheses.includes(char)) {
        const lastOpen = stack.pop();
        if (!lastOpen || openParentheses.indexOf(lastOpen) !== closeParentheses.indexOf(char)) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
console.log(isValidParenthesis("({[]})"));  