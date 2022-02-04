function filter(arrayObj, propName, propValue){
  let result = [];

  for( let item of arrayObj ) {
      if(item[propName] === propValue) {
          result.push(item);
      }
  }

  return result;

}

export default filter;

