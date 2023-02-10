import {Dimensions} from 'react-native';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');
export const height = (size: number) => windowHeight * (size / 100);
export const width = (size: number) => windowWidth * (size / 100);
