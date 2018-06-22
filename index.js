var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyandValue (object, key, value) {
  return Object.assign({}, obj, { [key]: value })
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