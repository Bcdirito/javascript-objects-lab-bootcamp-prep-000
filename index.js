var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyandValue(object, key, value) {
  var obj = {prop: 1};
  return Object.assign({}, obj, 'prop2', '2');
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
  var newObj = Object.assign({}, recipes);
 
  return newObj;
}