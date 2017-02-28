function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback){
  cars = ["ferrari", "mercedes", "hooptie"];
  cars.forEach(callback);
  return cars;
}

function doToArray(array, callback){
  array.forEach(callback);
}
