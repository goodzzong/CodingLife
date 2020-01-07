import LinkedListNode from './LinkedListNode';
import Comparator from '../comparator/Comparator';

class LinkedList {
	constructor(comparatorFunction) {
		this.head = null;
		this.tail = null;

		this.compare = new Comparator(comparatorFunction);
	}

	append(value) {
		const newNode = new LinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}
		this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}

	prepend(value) {
		const newNode = new LinkedListNode(value, this.head);
		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	delete(value) {
		if (!this.head) {
			return null;
		}

		let deleteNode = null;

		while (this.head && this.compare.equal(this.head.value, value)) {
			deleteNode = this.head;
			this.head = deleteNode.next;
		}

		let currentNode = this.head;

		if (currentNode !== null) {
			while (currentNode.next) {
				if (this.compare.equal(currentNode.next.value, value)) {
					deleteNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		if (this.compare.equal(this.tail.value, value)) {
			this.tail = currentNode;
		}

		return deleteNode;
	}

	deleteTail() {
		const deleteNode = this.tail;
		let currentNode = this.head;

		if (this.head === this.tail) {
			this.head = null;
			this.tail = null;

			return deleteNode;
		}

		while (currentNode.next) {
			if (!currentNode.next.next) {
				currentNode.next = null;
			} else {
				currentNode = currentNode.next;
			}
		}

		this.tail = currentNode;

		return deleteNode;
	}

	deleteHead() {
		if (!this.head) {
			return null;
		}
		const deletedNode = this.head;
		if (this.head.next) {
			this.head = this.head.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return deletedNode;
	}

	find({ value = undefined, callback = undefined }) {
		if (!this.head) {
			return null;
		}

		let currentNode = this.head;

		while (currentNode) {
			if (callback && callback(currentNode.value)) {
				return currentNode;
			}

			if (value !== undefined && this.compare.equal(currentNode.value, value)) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}

		return null;
	}

	fromArray(values) {
		values.forEach(value => this.append(value));

		return this;
	}

	reverse() {
		let currNode = this.head;
		let prevNode = null;
		let nextNode = null;

		while (currNode) {
			nextNode = currNode.next;

			currNode.next = prevNode;

			prevNode = currNode;
			currNode = nextNode;
		}

		this.tail = this.head;
		this.head = prevNode;

		return this;
	}

	toArray() {
		const nodes = [];
		let currentNode = this.head;

		while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}

		return nodes;
	}

	toString(callback) {
		const result = this.toArray()
			.map(node => node.toString(callback)).toString();

		return result;
	}
}


export default LinkedList;