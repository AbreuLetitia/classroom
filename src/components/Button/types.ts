import {TouchableHighlightProps} from 'react-native';
import {TextProps} from '../Text/types';

export type ButtonTheme = 'disabled' | 'warning' | 'primary';
export interface ButtonProps
  extends Omit<TouchableHighlightProps, 'disabled'>,
    Omit<TextProps, 'children'> {
  title: string;
  buttonTheme?: ButtonTheme;
}
