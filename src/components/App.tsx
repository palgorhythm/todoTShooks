import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions/index';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: true };
  }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  render() {
    const curTodos = this.props.todos.map((todo: Todo) => (
      <button
        key={todo.id}
        style={{ border: '1px solid black' }}
        onClick={() => this.props.deleteTodo(todo.id)}>
        {todo.title}
      </button>
    ));
    console.log(curTodos);
    return (
      <div>
        <button
          onClick={() => {
            this.props.fetchTodos();
          }}>
          fethhhh
        </button>
        {this.state.fetching ? 'LOADING' : null}
        {curTodos}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(
  // avoid export default bc simple export requires name to be exact
  // a more typescript-y way of doing things.
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
