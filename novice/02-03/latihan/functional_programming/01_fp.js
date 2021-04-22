// Functional Programming

// functional programming follows declarative pattern :
var books = [
  { name: "JavaScript", pages: 450 },
  { name: "Angular", pages: 902 },
  { name: "Node", pages: 732 },
];

// Imperative pattern
for (var i = 0; i < books.length; i++) {
  books[i].lastRead = new Date();
}

// Declarative pattern
books.map((book) => {
  book.lastReadBy = me;
  return book;
});

console.log(books);


/*
  
  1. In the above code snippet, we have added new attributes to each book(element) of books array and it has implemented in two different approaches.
  2. First approach is with help of for loop, iterating over the array based on its length, then checking array index counter against array length and incrementing the index counter on each iteration. So, this is more like program/code is focusing or describing on how to operate for the desired output.
  3. Second approach is with help of native JavaScript array method map() which takes function as argument and that function gets each element. So in this case code is not describing about how to operate but talking about what to accomplish and map() method behind the scene takes care of actual operation.


*/