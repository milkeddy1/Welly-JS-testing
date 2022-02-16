
// Question 1
const fibonacci = (position) => {
    const init = [0, 1, 1]
    for (let i = 3; i <= position; i++) {
        const ans = init[i - 1] + init[i - 2]
        init.push(ans)
    }
    console.log(init[position]);
}

fibonacci(0)
fibonacci(1)
fibonacci(2)
fibonacci(3)
fibonacci(4)

// Qusetion 2 
// Linked List 實作 Stack 包含 push(), pop(), size()


class Node {
    constructor(element) {
        this.node = element
        this.next = null
    }
}

class Stack {
    constructor() {
        this.head = null
        this.length = 0
    }

    push(element) {
        let node = new Node(element)
        if (this.head === null) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    pop() {
        let popItem = this.head
        if (this.length != 0) {
            this.head = this.head.next
            this.length--
        }
        console.log(popItem.node);
        return popItem.node
    }

    size() {
        console.log(this.length);
        return this.length
    }
}


let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.size()

// Question 3 資料整合
const userIds = ['U01', 'U02', 'U03']
const userData = { 'U01': 'Tom', 'U02': 'Sam', 'U03': 'John' }
const userOrders = [
    { userId: 'U01', orderIds: ['T01', 'T02'] },
    { userId: 'U02', orderIds: [] },
    { userId: 'U03', orderIds: ['T03'] },
]


const orderIds = ['T01', 'T02', 'T03', 'T04']
const orderData = {
    T01: { name: 'A', price: 499 },
    T02: { name: 'B', price: 599 },
    T03: { name: 'C', price: 699 },
    T04: { name: 'D', price: 799 }
}
// output
const result = [
    {
        user: { id: 'U01', name: 'Tom' },
        orders: [
            { id: 'T01', name: 'A', price: 499 },
            { id: 'T02', name: 'B', price: 599 },
        ],
    },
    {
        user: { id: 'U02', name: 'Sam' },
        orders: []
    },
    {
        user: { id: 'U03', name: 'John' },
        orders: [
            { id: 'T03', name: 'C', price: 699 }
        ]
    }

]
