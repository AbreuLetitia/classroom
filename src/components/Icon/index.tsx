import {createElement} from 'react';
import * as IconLib from 'tabler-icons-react-native';
import {IconProps} from './types';

export const Icon = ({iconName, ...rest}: IconProps) => {
  return createElement(IconLib[iconName], rest);
};
