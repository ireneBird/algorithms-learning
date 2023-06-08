// last recently used cache

class LRUCache {
  cache = new Map();

  constructor(capacity) {
    this.capacity = capacity;
    this.keys = [];
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.set(key, value);

      const index = this.keys.indexOf(key);
      this.keys.splice(index, 1);
      this.keys.unshift(key);

      return;
    }

    this.cache.set(key, value);

    if (this.keys.length >= this.capacity) {
      const dropKey = this.keys.pop();
      this.cache.delete(dropKey);
    }

    this.keys.unshift(key);
  }

  get(key) {
    if (this.cache.has(key)) {
      const index = this.keys.indexOf(key);
      this.keys.splice(index, 1);
      this.keys.unshift(key);

      return this.cache.get(key);
    }

    return -1;
  }
}
