const { Component, PureComponent, html, Element, store } = znix;

const FILTERS = { all: 0, active: 1, completed: 2 };

const initialState = { input: '', todos: [], filter: FILTERS.all, uuid: 0 };

const actions = {
  input: ({ state, payload }) => ({ input: payload }),
  save: ({ state, payload }) => {
    const todos = state.todos;
    todos.push({
      id: state.uuid++,
      description: payload,
      done: false
    });
    return { input: '', todos };
  },
  done: ({ state, payload }) => {
    const todos = state.todos;
    todos.map(todo => {
      if (todo.id === payload) {
        todo.done = !todo.done;
      }
    });
    return { todos };
  },
  delete: ({ state, payload }) => {
    const todos = state.todos.filter(todo => todo.id !== payload);
    return { todos };
  },
  clear: ({ state, payload }) => {
    const todos = state.todos.filter(todo => !todo.done);
    return { todos };
  },
  filter: ({ state, payload }) => ({ filter: payload }),
  fetch: ({ state, payload }) => {
    const storage = JSON.parse(localStorage.getItem('znix-state') || '{}');
    return storage;
  }
};

store.register(initialState, actions);
store.dispatch('fetch');
store.on((state, action) => localStorage.setItem('znix-state', JSON.stringify(state)));

class TodoInput extends Component {
  handleInput(event) {
    if (event.keyCode !== 13) {
      store.dispatch('input', event.target.value);
    } else {
      store.dispatch('save', event.target.value);
    }
  }
  render({ state, dispatch }) {
    return html`
      <style>
        :host input {
          width: calc(100% - 47px);
          position: absolute;
          top: 0;
          left: 0;
          height: 40px;
          font-size: 24px;
          font-weight: 300;
          margin-left: 45px;
          border: none;
        }
        :host input {
          outline: none;
        }
      </style>
      <input placeholder="What needs to be done ?" .value="${state.input}" @keyup="${this.handleInput}" autofocus />
    `;
  }
}
Element('todo-input', TodoInput);
class TodoList extends Component {
  render({ state, dispatch }) {
    return html`
      <style>
        :host ul {
          padding-left: 0;
          padding-top: 46px;
        }
      </style>
      <ul>
        ${
          state.todos
            .filter(todo =>
              state.filter === FILTERS.active ? !todo.done : state.filter === FILTERS.completed ? todo.done : todo
            )
            .map(
              todo =>
                html`
                  <todo-item .todo="${todo}"></todo-item>
                `
            )
        }
      </ul>
    `;
  }
}
Element('todo-list', TodoList);
class TodoItem extends Component {
  render({ state, dispatch }) {
    return html`
      <style>
        :host li {
          padding: 2px 0;
          list-style: none;
          line-height: 1.2em;
          font-size: 24px;
          position: relative;
        }
        :host span {
          padding-left: 45px;
          padding-right: 40px;
          display: block;
          background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
          background-repeat: no-repeat;
          min-height: 35px;
          background-position: center left;
        }
        :host span.checked {
          background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
        }
        :host input {
          width: 20px;
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 40px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          opacity: 0;
        }
        :host button {
          border: none;
          width: 40px;
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          background-color: #fff;
        }
        :host button {
          outline: none;
        }
        :host button:hover {
          color: #2080cd;
        }
      </style>
      <li>
        <input type="checkbox" .checked="${this.todo.done}" @click="${e => dispatch('done', this.todo.id)}" />
        <span class="${this.todo.done ? 'checked' : ''}">${this.todo.description}</span>
        <button @click="${e => dispatch('delete', this.todo.id)}">X</button>
      </li>
    `;
  }
}
Element('todo-item', TodoItem);
class TodoFilter extends Component {
  render({ state, dispatch }) {
    const done = state.todos.filter(todo => !todo.done);
    return html`
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 5px;
          margin: 0 5px;
        }
        :host button {
          border: 1px solid #fff;
          background-color: #fff;
          border-radius: 0;
          font-size: 14px;
        }
        :host button {
          outline: none;
        }
        :host button:hover {
          border-bottom: 1px solid rgba(175, 47, 47, 0.2);
        }
        :host button.active {
          border: 1px solid rgba(175, 47, 47, 0.2);
        }
        :host .hidden {
          visibility: hidden;
        }
      </style>
      <div>${done.length} items left.</div>
      <div>
        <button
          class="${state.filter === FILTERS.all ? 'active' : ''}"
          @click="${e => dispatch('filter', FILTERS.all)}"
        >
          All
        </button>
        <button
          class="${state.filter === FILTERS.active ? 'active' : ''}"
          @click="${e => dispatch('filter', FILTERS.active)}"
        >
          Active
        </button>
        <button
          class="${state.filter === FILTERS.completed ? 'active' : ''}"
          @click="${e => dispatch('filter', FILTERS.completed)}"
        >
          Completed
        </button>
      </div>
      <div>
        <button class="${done.length === state.todos.length ? 'hidden' : ''}" @click="${e => dispatch('clear')}">
          Clear Completed
        </button>
      </div>
    `;
  }
}
Element('todo-filter', TodoFilter);
class TodoFooter extends Component {
  render({ state, dispatch }) {
    return html`
      <style>
        :host {
          display: block;
          text-align: center;
          margin-top: 50px;
          color: rgba(175, 47, 47, 0.15);
        }
        :host a {
          text-decoration: none;
        }
      </style>
      Created with ❤️ by <a href="https://github.com/osdevisnot">osdevisnot</a>
    `;
  }
}
Element('todo-footer', TodoFooter);

class ZnixApp extends PureComponent {
  render({ state, dispatch }) {
    return html`
      <style>
        :host {
          display: block;
        }
        :host h1 {
          font-size: 100px;
          font-weight: 100;
          text-align: center;
          color: rgba(175, 47, 47, 0.15);
        }
        :host .container {
          max-width: 75%;
          margin-left: auto;
          margin-right: auto;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
          position: relative;
        }
      </style>
      <h1>todos</h1>
      <div class="container">
        <todo-input></todo-input>
        <todo-list></todo-list>
        <todo-filter></todo-filter>
      </div>
      <todo-footer></todo-footer>
    `;
  }
}
Element('znix-app', ZnixApp);
