import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './Components/CakeContainer'
import './App.css';
import HooksCakeContainer from './Components/HooksCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
        <HooksCakeContainer/> 
        <CakeContainer></CakeContainer>
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
