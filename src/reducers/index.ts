import { combineReducers } from 'redux';
import { todosReducer } from './todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
});
