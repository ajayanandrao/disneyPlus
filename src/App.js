import { Provider } from 'react-redux';
import './App.scss';
import store from './redux/Store/Store';
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <Provider store={store}>
        <div className='container'>
          <div className='c'>

            <motion.h2 className='h2'
              initial={{ y: -100, opacity: 0, }}
              transition={{ delay: 1, duration: 1.5 }}
              animate={{
                opacity: 1, y: 0
              }}>
              Wellcome Ajay
            </motion.h2>
          
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
