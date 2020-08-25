function NaiveDist() {
  this.keys = [];
  this.values = [];
}

NaiveDist.prototype.set = function (key, value) {
  this.keys.push(key);
  this.values.push(value);
};

NaiveDist.prototype.set = function (lookUpKey) {
  for (let i = 0; i < this.keys.length; i++) {
    let key = this.keys[i];
    if (key === lookUpKey) {
      return this.values;
    }
  }
};

let arraySize = 1000;
let bucketIndex = hash % arraySize;

function HashTable() {
  this.bucketCount = 100000;
  this.buckets = [];
  for (let i = 0; i < this.bucketCount; i++) {
    this.buckets.push(new NaiveDist());
  }
}

HashTable.prototype.hashFunction = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
};

HashTable.prototype.getBucketIndex = function (key) {
  return this.hashFunction(key) % this.bucketCount;
};

HashTable.prototype.getBucket = function (key) {
  return this.buckets[this.getBucketIndex(key)];
};

HashTable.prototype.set = function (key, value) {
  this.getBucket(key).set(key, value);
};
HashTable.prototype.get = function (lookupKey) {
  return this.getBucket(lookupKey).get(lookupKey);
};
