import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer.component'
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer.component';
import IceCreamContainer from './components/IceCreamContainer.component';
import NewCakeContainer from './components/NewCakeContainer.component';
import ItemContainer from './components/ItemContainer.component';
import UserContainerComponent from './components/UserContainer.component';
import AddUser from './components/AddUser.component';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/*  
    <ItemContainer cake/>
      <ItemContainer/>
    <CakeContainer/>
    <IceCreamContainer/>
    <HooksCakeContainer/>
    <NewCakeContainer/>
    <UserContainerComponent/>
    */}
    <AddUser/>
    </div>
    </Provider>
  );
}

export default App;
