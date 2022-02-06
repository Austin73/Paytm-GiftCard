import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import { useMediaQuery } from 'react-responsive';
import Main from './components/Main';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store=createStore(allReducers)
function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 300px)' })
  return (
    <Provider store={store}>
    <div className="App">
      {
        isTabletOrMobile && <Heading />

      }
      {
        isTabletOrMobile && <Main />
      }

    </div>
    </Provider>
  );
}

export default App;
