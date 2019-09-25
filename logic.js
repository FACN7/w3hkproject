// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.

  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original
  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function(todos, idToDelete) {

    // var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    // const result = words.filter(word => word.length > 6);
    


  
    
    // console.log(result);



    // var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];





    var newTodo = todos.filter(task => task.id != idToDelete);

    console.log("----------------------newTodo----------------------");
    console.log(newTodo);
    console.log("----------------------newTodo----------------------");





return newTodo;



    // expected output: Array ["exuberant", "destruction", "present"]
    

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
  },
  markTodo: function(todos, idToMark) {
    console.log("---------------------------------------before-------")
    console.log(todos[0].done);
    todos[0].done=true;
    console.log("---------------------------------------aftter-------")
    
    console.log(todos[0].done);
    console.log("---------------------------------------------------")




    var map1 = todos.map(function(task){
      if(task.id == idToMark)
        task.done = true;

      return task;  
   
      });
   





    // var map1 = todos.map(task => {
    //   if(task.id == idToMark){
    //     task.done = true;
    //   }});


      // map1 =this.cloneArrayOfObjects(map1);
// console.log("----------------------------------------")
console.log("---------------------map-------------------");

console.log(map1);

console.log("---------------------map-------------------");
    return map1;
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
  },
  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  },
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
