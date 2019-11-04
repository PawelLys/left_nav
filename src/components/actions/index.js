import { rigthSettingBtn, leftBurgerBtn } from './types';

export const setSettingBtnActive = bool => {
    return {
        type: rigthSettingBtn,
        payload: bool
    };
};

export const setBurgerBtnActive = bool => {
    return {
        type: leftBurgerBtn,
        payload: bool
    }
}