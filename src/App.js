import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/Store/Store';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router basename='/disney'>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
