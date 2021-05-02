import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.scss";
//import store
import UserStore from "./store/UserStore";
import DeviceStore from './store/DeviceStore';

//podkluczajem store czerez hook useContext
export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);



