// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false },
    { id: -2, description: 'second todo', done: true },
    { id: -1, description: 'third todo', done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var descreptionNode= document.createElement('span');
    // descreptionNode.addEventListener('onafterprint',function(event){
      var newstate = descreptionNode.textContent = todo.description;
      descreptionNode.classList.add('description-span');
      if(todo.done){ descreptionNode.classList.add('task-is-done'); }

    // });
    todoNode.appendChild(descreptionNode);
    // // you will need to use addEventListener
    //
    // var newSpan = document.createElement('span');
    // newSpan.classList.add('description-span');
    // newSpan.textContent = todo.description;
    // add span holding description

    // this adds the delete button

 	   var deleteButtonNode = document.createElement('button');
    deleteButtonNode.id = 'deleteButton';
    deleteButtonNode.classList.add('detele-button');
    deleteButtonNode.textContent =" ✘ ";
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);


    // add markTodo button
 if(!todo.done){
        var markTodoButtonNode = document.createElement('button');
        markTodoButtonNode.id = 'markButton';
        markTodoButtonNode.classList.add('marktodo-button');
        markTodoButtonNode.textContent = ' ✔ ';
        markTodoButtonNode.addEventListener('click', (e)=>{
          var newState = todoFunctions.markTodo(state, todo.id);
          update(newState);
        });
        todoNode.appendChild(markTodoButtonNode);
    }else{
      var markTodoButtonNode = document.createElement('button');
      markTodoButtonNode.id = 'markButton';
      markTodoButtonNode.classList.add('marktodo-button');
      markTodoButtonNode.textContent = ' ✔ ';
      markTodoButtonNode.addEventListener('click', (e)=> {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      });
      todoNode.appendChild(markTodoButtonNode);

    }

    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit

      // what does event.preventDefault do?
      // what is inside event.target?
      var newtodo={};
      var description = document.getElementById("description"); // event.target ....
      newtodo.description = description.value;
      description.value = description.defaultValue;
      console.log(newtodo.description);
      event.preventDefault();
      // hint: todoFunctions.addTodo

      var newState = todoFunctions.addTodo(state,newtodo); // ?? change this!

      update(newState);

    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
