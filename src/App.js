import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/Store/Store';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Disney from './Pages/Disney/Disney';
import Marval from './Pages/Marval/Marval';
import ScrollToTop from './ScrollTop';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router basename='/disney'>
        <ScrollToTop/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path="pageD" element={<Disney/>}/>
            <Route path="marval" element={<Marval/>}/>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
