import { DataStore } from 'notarealdb';

const store = new DataStore('./data');
export const todos = store.collection('todos');