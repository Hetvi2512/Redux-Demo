import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer.component'
import './App.css';
import HooksCakeContainer from './components/HooksCakeContainer.component';
import IceCreamContainer from './components/IceCreamContainer.component';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <CakeContainer/>
    <IceCreamContainer/>
    <HooksCakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
