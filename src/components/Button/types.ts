import {TouchableHighlightProps} from 'react-native/types';
import {ColorsDictionary} from '../../themes/types';

export interface ButtonProps extends TouchableHighlightProps {
  title: string;
  textColor?: ColorsDictionary;
  backgroundColor?: ColorsDictionary;
}
