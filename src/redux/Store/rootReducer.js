import counterReducer from '../Services/Action';
import counterReducerNew from '../Services/CouterAction';


const rootReducer ={

    card : counterReducer, 
    counter: counterReducerNew,
    

}
export default rootReducer;