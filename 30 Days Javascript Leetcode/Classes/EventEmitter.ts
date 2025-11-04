// Question Link: https://leetcode.com/problems/event-emitter
// 2694. Event Emitter

class EventEmitter {
    eventMap = {}; // event -> Set()
    subscribe(eventName, callback) {
        if(!this.eventMap.hasOwnProperty(eventName)) {
            this.eventMap[eventName] = new Set();
        }
        this.eventMap[eventName].add(callback);

        return {
            unsubscribe: () => {
                this.eventMap[eventName].delete(callback);        
            }
        };
    }
    emit(eventName, args = []) {
        let res = [];
        this.eventMap[eventName]?.forEach((callback) => res.push(callback(...args)));
        return res;
    }
}
