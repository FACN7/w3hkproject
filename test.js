var test = require("tape");
var logic = require("./logic");

test("Example test", function(t) {
  t.pass();
  t.end();
});

test("Testing generateId", function(t) {
  var todoo = logic.generateId();
  t.equal("number", typeof todoo, "todoo is of type number");
  t.equal(1, todoo, "first id in the list should be 1");
  t.end();
});

test("addTodo Testing", function(t) {
  var todos = [];
  var newTodo = {description: "make smoothie out of things that should really be cooked"};
  var newTodo2 = {
    description: "make fakhfakhena with lots of Ice Cream"
  };
  var expected = [{id: 0, description: 'make smoothie out of things that should really be cooked', done: false}];
  var expected2 = [{id: 0, description: 'make smoothie out of things that should really be cooked', done: false},{id: 1, description: 'make fakhfakhena with lots of Ice Cream', done: false}];
  var updatedTodos = logic.addTodo(todos, newTodo);

 // console.log(typeof(updatedTodos));
 //  console.log(updatedTodos);

  // t.equal("number", typof todoo, "todoo is of type number");
  // t.equal(1, todoo, "first id in the list should be 1");
  t.deepEqual([],logic.cloneArrayOfObjects([]),"an empty array sould return an empty array");

  t.equal(updatedTodos,expected ,'this is the updated todos test');

  // console.log(typeof(expected2));
  // console.log(expected2);

  var updatedTodos2 = logic.addTodo(updatedTodos, newTodo2);
  t.deepEqual(updatedTodos2, expected2, 'this is the updated todos2 test');
  t.end();
});



test('testing mark to do', function(t) {
  var todos = [
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make eggs', done: true},
  ];

  //todoFunctions.markTodo(todos, 0);
  // [
  //   {id: 0, description: 'make tea', done: true},
  //   {id: 1, description: 'make eggs', done: true},
  // ]
 
 // todoFunctions.markTodo(todos, 1);
  // [
  //   {id: 0, description: 'make tea', done: false},
  //   {id: 1, description: 'make eggs', done: false},
  // ]



  
  var actual =  logic.markTodo(todos, 0)[0].done;
  var expected =true;

  console.log("---------actual--------");
  console.log(actual);
  console.log("---------actual-------");

  t.equal(actual,expected,"the task marked ");


  t.end();
});










test('testing idToDelete', function(t) {
  var todos = [
    {id: 0, description: 'make tea', done: false},
    {id: 1, description: 'make eggs', done: true},
  ];

  //todoFunctions.markTodo(todos, 0);
  // [
  //   {id: 0, description: 'make tea', done: true},
  //   {id: 1, description: 'make eggs', done: true},
  // ]
 
 // todoFunctions.markTodo(todos, 1);
  // [
  //   {id: 0, description: 'make tea', done: false},
  //   {id: 1, description: 'make eggs', done: false},
  // ]



  
  var actual =  logic.deleteTodo(todos, 0);
  var expected =1;

  console.log("---------actual--------");
  console.log(actual[0].description);
  console.log("---------actual-------");

  t.equal(actual[0].id,expected,"the task deleted ");


  t.end();
});