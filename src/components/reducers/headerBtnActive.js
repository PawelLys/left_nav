import { rigthSettingBtn, leftBurgerBtn } from '../actions/types';

const INIT_STATE = {
    settingBtn: false,
    burgerBtn: false
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case rigthSettingBtn: 
            return {...state, settingBtn: action.payload, burgerBtn: false};
        case leftBurgerBtn: 
            return {...state, burgerBtn: action.payload, settingBtn: false};
        default: return state;
    }
};