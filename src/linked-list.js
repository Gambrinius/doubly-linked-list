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
        let i = 0;
        let currentNode = this._head;  // can start from tail of list
        while(i < this.length){
            if (i === index){
                return currentNode.data;
            }
            currentNode = currentNode.next;
            i++;
        }
        return null;
    }

    // should insert data by index
    insertAt(index, data) {
        let i = 0;
        let currentNode = this._head;
        while (i < this.length){
            if( i === index) { // search node with suitable index
                break;
            }
            currentNode = currentNode.next;
            ++i;
        }

       if (index == this.length){ // insert to tail
            let newNode = new Node(data, this._tail, null); // prev = this._tail, next = null
            this._tail.next = newNode;
            this._tail = newNode;
            this.length ++;
       } else if (currentNode.prev == null){ // insert to head
            let newNode = new Node(data, null, this._head); // prev = null, next = this._head
            this._head.prev = newNode;
            this._head = newNode;
            this.length ++;
       } else { // insert to nth index
            let newNode = new Node(data, currentNode.prev, currentNode); // prev = currentNode.pre, next = currentNode
            currentNode.prev.next = newNode; // prevNode.next pointer to newNode
            currentNode.prev = newNode;
            this.length ++;
       }
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
        let i = 0;
        let currentNode = this._head;
        while (i < this.length){ // search node with suitable index
            if( i === index) {
                let prevNode = currentNode.prev;
                let nextNode = currentNode.next;

                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                break;
            }
            currentNode = currentNode.next;
            ++i;
        }
        this.length --;
    }

    // should reverse the list
    reverse() {

    }

    // should return index of element if data is found, otherwise -1
    indexOf(data) {
        let index = this.length - 1;
        let currentNode = this._tail;  // can start from head of list
        while(index !== -1){
            if (currentNode.data === data){
                return index;
            }
            currentNode = currentNode.prev;
            index--;
        }
        return -1;
    }
}

module.exports = LinkedList;
