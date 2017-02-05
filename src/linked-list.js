const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    // should add new data to the end of list
    append(data) {
        if (this.length === 0){ // empty list, add node to head of list.
            let node = new Node(data); // prev = null, next = null

            this._tail = node;
            this._head = node;
            this.length ++;
        } else { // list has elements
            let node = new Node(data, this._tail, null); // prev = this._tail, next = null

            this._tail.next = node; // add next pointer to previous node
            this._tail = node;
            this.length ++;
        }

    }

    // should return data from the this.head
    head() {
        if (this._head === null){
            return this._head;
        }else {
            return this._head.data;
        }
    }

    // should return data from the this.tail
    tail() {
        if (this._tail === null){
            return this._tail;
        }else {
            return this._tail.data;
        }
    }

    // should return Node.data by index
    at(index) {

    }

    // should insert data by index
    insertAt(index, data) {

    }

    // should return true if list is empty
    isEmpty() {
        return this.length === 0;
    }

    // should clear the list
    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    // should delete element by index
    deleteAt(index) {

    }

    // should reverse the list
    reverse() {

    }

    // should return index of element if data is found, otherwise -1
    indexOf(data) {

    }
}

module.exports = LinkedList;
