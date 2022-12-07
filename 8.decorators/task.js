function cachingDecoratorNew(func) {
  // Ваш код
    let cache = [];
  
    function wrapper(...args) {
      const hash = args.join(','); 
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) { 
          console.log("Из кэша: " + objectInCache.value); 
          return "Из кэша: " + objectInCache.value;
      }
  
      let result = func(...args);
      let value = result;
      cache.push({hash, value});
      if (cache.length > 5) { 
        cache.shift() 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;
}


function debounceDecoratorNew(func, delay) {
  // Ваш код
  let timeoutId = null;
  function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
      wrapper.allCount++
    }
    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}