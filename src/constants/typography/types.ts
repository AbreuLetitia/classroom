export type textSizeTypographyDictionary =
  | 'largeTitle'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'headline'
  | 'body'
  | 'callout'
  | 'subhead'
  | 'footnote'
  | 'caption1'
  | 'caption2';

export type textWeightTypographyDictionary =
  | 'ultraLight'
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'heavy'
  | 'black';

export interface textWeightTypographyValues {
  ultraLight: '100';
  thin: '200';
  light: '300';
  regular: '400';
  medium: '500';
  semiBold: '600';
  bold: '700';
  heavy: '800';
  black: '900';
}

export interface textFamilyTypography {
  textFamily?: 'SF Pro Rounded' | 'SF Pro Text';
}
