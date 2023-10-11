import './App.css';
import { store} from './store/store';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
        <Outlet></Outlet>
    </div>
    </Provider>
  );
}

export default App;