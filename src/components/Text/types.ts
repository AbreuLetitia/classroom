import {ReactNode} from 'react';
import {typographyDictionary} from '../../constants/typography/types';
import {ColorsDictionary} from '../../themes/types';

export interface TextProps {
  textSize: typographyDictionary;
  textColor?: ColorsDictionary;
  children: ReactNode;
}
