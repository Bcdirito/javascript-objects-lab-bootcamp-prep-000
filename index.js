var recipes = {
  meat: 'chicken',
  sauce: 'tomato',
  cheese: 'mozzarella'
};
function updateObjectWithKeyandValue (object, key, value) {
  return Object.assign(recipes, {[prop]: 1}, {[prop2]: 2});
}
