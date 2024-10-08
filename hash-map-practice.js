class HashMap {
    constructor(initialSize = 16, initialLoadFactor = 0.75) {
        this.buckets = new Array(initialSize)
        this.loadFactor = initialLoadFactor
        this.size = this.buckets.length
    }

    // Takes a key and produces a hash code
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.size;
    }
}