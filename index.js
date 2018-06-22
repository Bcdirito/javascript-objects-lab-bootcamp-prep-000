var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyAndValue(obj, key, value) {
 return Object.assign({}, recipes, { ['prop']: 1}, { ['prop2']: 2});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, recipes, 'prop');
  delete newObj.prop;
}