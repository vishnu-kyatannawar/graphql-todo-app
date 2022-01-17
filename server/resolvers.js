import  { todos } from './db.js';

const Query = {  
  todos: () => todos.list(),
};

const Mutation = {
  create: (root, {description}) => {
     const todoID = todos.create({description});
     return todos.get(todoID);
  },
  delete: (root, {id}) => {
    const todo = todos.get(id);
    if (todo) {
      todos.delete(id);
      return true;
    }
    return false;
  }
};

export { Query, Mutation };
