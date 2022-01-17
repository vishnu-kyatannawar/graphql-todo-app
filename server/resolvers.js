import  { todos } from './db.js';

const Query = {  
  todos: () => todos.list(),
};

const Mutation = {
  create: (root, {description}) => {
     const todoID = todos.create({description});
     return todos.get(todoID);
  }  
};

export { Query, Mutation };
