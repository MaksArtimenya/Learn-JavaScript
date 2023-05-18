function delay(f, ms) {

    return function(...args) {
      let savedThis = this; // сохраняем this в промежуточную переменную
      setTimeout(function() {
        f.apply(savedThis, args); // используем её
      }, ms);
    };
  
  }