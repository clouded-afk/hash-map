class HashMap {
    constructor(size = 16) {
        this.buckets = new Array(size)
        this.size = size
    }

    // takes a key and produces a hash code
    hash(key) {
        let hashCode = 0

        const primeNumber = 31
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i)
        }

        return hashCode % this.size
    }

    // takes 2 arguments, first is the key, second is the value assigned to that key. If the key already exist, it shouuld update the key's value with the new value.
    set(key, value) {
        let index = this.hash(key)

        if (!this.buckets[index]) {
            this.buckets[index] = []
        }
        this.buckets[index].push(key, value)

        if (this.buckets[index][0] === key) {
            this.buckets[index][1] = value
        }
    }

    // takes one argument as a kay and returns the value that is assigned to this key, if key is not found, return null
    get(key) {
        let index = this.hash(key)

        if (!this.buckets[index]) {
            return null
        }

        for (let i = 0; i < this.buckets[index].length; i++) {
            if (this.buckets[index][0] === key) {
                return this.buckets[index][1]
            }
        }
    }

    // takes a key as an argument and returns TRUE or FALSE based on whether or not the key is in the hash map
    has(key) {

    }

    // takes a key as an arguemnt. If the fiven key is in the hash map, it should remove the tentry with that key and return TRUE. If the key isnt in the hash map it should return FALSE
    remove(key) {

    }

    // return the number of keys stored in the hash map
    length() {

    }

    // reomves all entries from the hash map
    clear() {

    }

    // returns an array containing all the keys inside the hash map
    keys() {

    }

    // returns an array containing all the values
    values() {

    }

    // returns an array that contains each key, value pair. Example : [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {

    }
}

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('apple', 'green')

