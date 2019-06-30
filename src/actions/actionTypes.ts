import { DeleteTodoAction, FetchTodosAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
// this along with the enum
//sets up an implicit type guard in the reducer
