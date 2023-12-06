import { Dimensions, Platform, StatusBar } from 'react-native';

const STATUSBAR_DEFAULT_HEIGHT = 20;
const STATUSBAR_SE_HEIGHT = 50;
const STATUSBAR_8_HEIGHT = 50;
const STATUSBAR_X_HEIGHT = 44;
const STATUSBAR_IP12_HEIGHT = 47;
const STATUSBAR_IP12MAX_HEIGHT = 47;
const STATUSBAR_IP14_HEIGHT = 54;
const STATUSBAR_IP14PRO_HEIGHT = 54;
const STATUSBAR_IP14PLUS_HEIGHT = 47;
const STATUSBAR_IP14PROMAX_HEIGHT = 47;

const SE_WIDTH = 320;
const SE_HEIGHT = 568;

const IP8_WIDTH = 375;
const IP8_HEIGHT = 667;

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const IP12_WIDTH = 390;
const IP12_HEIGHT = 844;

const IP12MAX_WIDTH = 428;
const IP12MAX_HEIGHT = 926;

const IP14_WIDTH = 390;
const IP14_HEIGHT = 844;

const IP14PRO_WIDTH = 393;
const IP14PRO_HEIGHT = 852;

const IP14PLUS_WIDTH = 428;
const IP14PLUS_HEIGHT = 926;

const IP14PROMAX_WIDTH = 430;
const IP14PROMAX_HEIGHT = 932;

const { height: W_HEIGHT, width: W_WIDTH } = Dimensions.get('window');

let statusBarHeight = STATUSBAR_DEFAULT_HEIGHT;
let isIPhoneSE_v = false;
let isIPhone8_v = false;
let isIPhoneX_v = false;
let isIPhoneXMax_v = false;
let isIPhone12_v = false;
let isIPhone12Max_v = false;
let isIPhone14_v = false;
let isIPhone14Pro_v = false;
let isIPhone14Plus_v = false;
let isIPhone14ProMax_v = false;
let isIPhoneWithMonobrow_v = false;

if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS) {
    if(W_WIDTH === SE_WIDTH && W_HEIGHT === SE_HEIGHT) {
        isIPhoneSE_v = true;
        statusBarHeight = STATUSBAR_SE_HEIGHT;
    } else if (W_WIDTH === IP8_WIDTH && W_HEIGHT === IP8_HEIGHT) {
        isIPhone8_v = true;
        statusBarHeight = STATUSBAR_8_HEIGHT;
    } else if (W_WIDTH === X_WIDTH && W_HEIGHT === X_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneX_v = true;
        statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === XSMAX_WIDTH && W_HEIGHT === XSMAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhoneXMax_v = true;
        statusBarHeight = STATUSBAR_X_HEIGHT;
    } else if (W_WIDTH === IP12_WIDTH && W_HEIGHT === IP12_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone12_v = true;
        statusBarHeight = STATUSBAR_IP12_HEIGHT;
    } else if (W_WIDTH === IP12MAX_WIDTH && W_HEIGHT === IP12MAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone12Max_v = true;
        statusBarHeight = STATUSBAR_IP12MAX_HEIGHT
    } else if (W_WIDTH === IP14_WIDTH && W_HEIGHT === IP14_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone14_v = true;
        statusBarHeight = STATUSBAR_IP14_HEIGHT;
    }
    else if (W_WIDTH === IP14PLUS_WIDTH && W_HEIGHT === IP14PLUS_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone14Plus_v = true;
        statusBarHeight = STATUSBAR_IP14PLUS_HEIGHT;
    }
    else if (W_WIDTH === IP14PRO_WIDTH && W_HEIGHT === IP14PRO_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone14Pro_v = true;
        statusBarHeight = STATUSBAR_IP14PRO_HEIGHT;
    }
    else if (W_WIDTH === IP14PROMAX_WIDTH && W_HEIGHT === IP14PROMAX_HEIGHT) {
        isIPhoneWithMonobrow_v = true;
        isIPhone14ProMax_v = true;
        statusBarHeight = STATUSBAR_IP14PROMAX_HEIGHT;
    }
}

export const isIPhoneX = () =>  isIPhoneX_v;
export const isIPhoneXMax = () =>  isIPhoneXMax_v;
export const isIPhone12 = () =>  isIPhone12_v;
export const isIPhone12Max = () =>  isIPhone12Max_v;
export const isIPhone14 = () =>  isIPhone14_v;
export const isIPhone14Pro = () =>  isIPhone14Pro_v;
export const isIPhone14PlusMax = () =>  isIPhone14Plus_v;
export const isIPhone14ProMax = () =>  isIPhone14ProMax_v;
export const isIPhoneWithMonobrow = () => isIPhoneWithMonobrow_v;

const getExpoRoot = () => global.Expo || global.__expo || global.__exponent;

export const isExpo = () => getExpoRoot() !== undefined;

export function getStatusBarHeight(skipAndroid) {
    return Platform.select({
        ios: statusBarHeight,
        android: skipAndroid ? 0 : StatusBar.currentHeight + 20,
        default: 0
    })
}
