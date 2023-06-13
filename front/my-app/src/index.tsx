import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createContext} from "vm"
import Store from './Store/Store'

interface State {

    store: Store,
}

const store = new Store()

// @ts-ignore
export const Context = createContext<State>({

    store

})


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <Context.Provider
                    value={{
                        store
                    }}
    >

        <App/>

    </Context.Provider>
)

