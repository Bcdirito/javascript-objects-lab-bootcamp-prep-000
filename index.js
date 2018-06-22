var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyandValue (object, key, value) {
  return Object.assign(recipes, {[`prop`]: 1}, {[`prop2`]: 2});
}
function destructivelyUpdateObjectWithKeyandValue(object, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  
}