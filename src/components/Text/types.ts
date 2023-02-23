import {ReactNode} from 'react';
import {
  textSizeTypographyDictionary,
  textWeightTypographyDictionary,
} from '../../constants/typography/types';
import {ColorsDictionary} from '../../themes/types';

export interface TextProps {
  textWeight?: textWeightTypographyDictionary;
  textSize?: textSizeTypographyDictionary;
  textColor?: ColorsDictionary;
  children: ReactNode;
  textFamily?: 'SF Pro Rounded' | 'SF Pro Text';
}
