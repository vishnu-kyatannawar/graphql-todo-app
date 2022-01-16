import  { todos } from './db.js';

const Query = {
  todos: () => todos.list(),
};

export { Query };
