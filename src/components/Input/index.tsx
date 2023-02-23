import {TextInput, TextInputProps} from 'react-native';
import {useSelector} from 'react-redux';
import {
  textSizeTypography,
  textWeightTypography,
} from '../../constants/typography';
import {textWeightTypographyDictionary} from '../../constants/typography/types';
import {Store} from '../../redux/types';
import {themes} from '../../themes';
import {ColorsDictionary} from '../../themes/types';
import {styles} from './styles';

export interface InputProps extends TextInputProps {
  backgroundColor?: ColorsDictionary;
  textColor?: ColorsDictionary;
  placeholderColor?: ColorsDictionary;
  textFamily?: 'SF Pro Rounded' | 'SF Pro Text';
  textWeight?: textWeightTypographyDictionary;
}

export const Input = ({
  backgroundColor = 'primary2',
  textColor = 'secondary1',
  placeholderColor = 'secondary2',
  textFamily = 'SF Pro Text',
  textWeight = 'regular',
  ...rest
}: InputProps) => {
  const themeSelector = useSelector((store: Store) => {
    return store.themes;
  });

  return (
    <TextInput
      style={[
        {
          fontSize: textSizeTypography.body,
          backgroundColor: themes[themeSelector.selectedTheme][backgroundColor],
          color: themes[themeSelector.selectedTheme][textColor],
          fontFamily: textFamily,
          fontWeight: textWeightTypography[textWeight],
        },
        styles.input,
      ]}
      placeholderTextColor={
        themes[themeSelector.selectedTheme][placeholderColor]
      }
      {...rest}
    />
  );
};
