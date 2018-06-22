var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyandValue (object, key, value) {
  return Object.assign({}, recipes, { []: value }, { [key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
function deleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  
 
  return obj
}