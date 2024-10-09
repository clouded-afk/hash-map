class HashMap {
    constructor(size = 16) {
        this.buckets = new Array(size).fill(null)
        this.size = size
        this.numOfEntries = 0
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
            this.buckets[index] = [[key, value]]
            this.numOfEntries++
        } else {
            const sameKeyItem = this.buckets[index].find(item => item[0] === key)
            if (sameKeyItem) {
                sameKeyItem[1] = value
            } else {
                this.buckets[index].push([key, value])
                this.numOfEntries++
            }
        }
    }

    // takes one argument as a kay and returns the value that is assigned to this key, if key is not found, return null
    get(key) {
        let index = this.hash(key)

        if (this.buckets[index]) {
            const sameKeyItem = this.buckets[index].find(item => item[0] === key)
            if (sameKeyItem) {
                return sameKeyItem[1]
            }
        }
        return null
    }

    // takes a key as an argument and returns TRUE or FALSE based on whether or not the key is in the hash map
    has(key) {
        let index = this.hash(key)

        for (let i = 0; i < this.buckets[index].length; i++) {
            const sameKeyItem = this.buckets[index].find(item => item[0] === key)
            if (sameKeyItem) {
                return true
            }
            return false
        }
    }

    // takes a key as an arguemnt. If the given key is in the hash map, it should remove the entry with that key and return TRUE. If the key isnt in the hash map it should return FALSE
    remove(key) {
        let index = this.hash(key)

        if (this.buckets[index]) {
            const sameKeyItem = this.buckets[index].find(item => item[0] === key)
            if (sameKeyItem) {
                this.buckets[index].splice(this.buckets[index].indexOf(sameKeyItem), 1)
                return true
            }
        }
        return false
    }

    // return the number of keys stored in the hash map
    length() {
        return this.numOfEntries
    }

    // reomves all entries from the hash map
    clear() {
        for (let i = 0; i < this.size; i++) {
            if (this.buckets[i] !== null) {
                this.buckets[i] = null
                this.numOfEntries = 0
            }
        }
    }

    // returns an array containing all the keys inside the hash map
    keys() {
        let keys = []
        this.buckets.forEach(bucket => {
            if (bucket) {
                bucket.forEach(item => {
                    keys.push(item[0])
                })
            }
        })
        return keys
    }

    // returns an array containing all the values
    values() {
        let values = []
        this.buckets.forEach(bucket => {
            if (bucket) {
                bucket.forEach(item => {
                    values.push(item[1])
                })
            }
        })
        return values
    }


    // returns an array that contains each key, value pair. Example : [[firstKey, firstValue], [secondKey, secondValue]]
    entries() {
        let entries = []

        this.buckets.forEach((bucket) => {
            entries.push(bucket)
        })
        return entries
    }
}

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('apple', 'green')

console.log(test.get('hat'))
console.log(test.has('lion'))

console.log(JSON.stringify(test.entries()))

console.log(`Total Number Of Entries: ${test.length()}`)
console.log(`Hash Map Size: ${test.size}`)
console.log(`Load Factor: ${test.numOfEntries/test.size}`)
console.log(`Keys: ${JSON.stringify(test.keys())}`)
console.log(`Values: ${JSON.stringify(test.values())}`)


console.log('')
console.log('----- Testing Clear Function to ensure the hash map is empty-----')
test.clear()
console.log(JSON.stringify(test.entries()))

console.log(`Total Number Of Entries: ${test.length()}`)
console.log(`Hash Map Size: ${test.size}`)
console.log(`Load Factor: ${test.numOfEntries/test.size}`)