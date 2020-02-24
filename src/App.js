import React from 'react';
import './App.scss';
import Todo from './components/Todo'
import { Provider } from 'react-redux'
import { store } from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
