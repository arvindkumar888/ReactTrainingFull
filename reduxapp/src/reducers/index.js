import {combineReducers} from 'redux';
import TrainerReducer from './reducers-trainers';
import ActiveTrainerReducer from './reducer-active-trainer';

const allReducers = combineReducers({
    trainers: TrainerReducer,
    activeTrainer:ActiveTrainerReducer
});
export default allReducers