const LinkedList = require('./linkedlist')

const ll = LinkedList.fromValues(10, 20, 30, 40)

ll.print()
ll.removeAtIndex(2)
ll.print()