//1)
function howManyKeys() {
  return Object.keys(this).length;
}

Object.prototype.howManyKeys = howManyKeys;
