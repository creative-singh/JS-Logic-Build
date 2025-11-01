// Question Link: https://leetcode.com/problems/cache-with-time-limit
// 2622. Cache With Time Limit

class TimeLimitedCache {
    constructor() {
        this.map = new Map();
    }

    set(key, value, duration) {
        const hasKey = this.map.has(key);

        if(hasKey) {
            clearTimeout(this.map.get(key).timeoutId);
        }

        const timeoutId = setTimeout(() => {
            this.map.delete(key)
        }, duration);

        this.map.set(key, { value, timeoutId })

        return hasKey;
    }

    get(key) {
        return this.map.has(key) ? this.map.get(key).value : -1;
    }

    count() {
        return this.map.size
    }
};
