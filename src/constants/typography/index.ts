import {width} from '../responsive';
import {textWeightTypographyValues} from './types';

export const textSizeTypography = {
  largeTitle: width(8.72), //34
  title1: width(7.18), //28
  title2: width(5.646), //22
  title3: width(5.13), //20
  headline: width(4.62), //17? 18
  body: width(4.36), //17
  callout: width(4.106), //16
  subhead: width(3.85), //15
  footnote: width(3.35), //13
  caption1: width(3.1), //12
  caption2: width(2.83), //11
};

export const textWeightTypography: textWeightTypographyValues = {
  ultraLight: '100',
  thin: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};
