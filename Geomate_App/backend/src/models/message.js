export default User;

class MessageChannel {
    constructor() {
    this.subscribers = {};
}

subscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
        this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(callback);
}

unsubscribe(eventType, callback) {
    if (!this.subscribers[eventType]) {
        return;
    }
    const index = this.subscribers[eventType].indexOf(callback);
    if (index > -1) {
        this.subscribers[eventType].splice(index, 1);
    }
}

publish(eventType, data) {
    if (!this.subscribers[eventType]) {
        return;
    }
    this.subscribers[eventType].forEach(callback => {
        callback(data);
    });
}
}


// To use this class, you can create a new instance and call its methods as needed
subscribe(eventType, callback) /* adds a new subscriber to the channel for a specific event type. The subscriber will receive any messages published to that event type.*/
unsubscribe(eventType, callback)/* removes a subscriber from the channel for a specific event type.*/
publish(eventType, data) /* sends a message to all subscribers of a specific event type, passing along any data provided.*/

// To use this class, you can create a new instance and call its methods as needed:


const channel = new MessageChannel();

function handleData(data) {
    console.log($,{data});
}

channel.subscribe('data', handleData);
channel.publish('data', 'Hello, world!');
// Output: "Received data: Hello, world!"

channel.unsubscribe('data', handleData);
channel.publish('data', 'This message will not be received');
