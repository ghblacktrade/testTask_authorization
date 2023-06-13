import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createContext} from "vm";
import Store from './Store/Store'

interface State {

    state: Store,
}

const store = new Store()

export const Context = createContext<State>({

    store,

})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
