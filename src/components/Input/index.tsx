import {TextInput, TextInputProps} from 'react-native';
import {useSelector} from 'react-redux';
import {typography} from '../../constants/typography';
import {Store} from '../../redux/types';
import {themes} from '../../themes';
import {ColorsDictionary} from '../../themes/types';

export interface InputProps extends TextInputProps {
  backgroundColor?: ColorsDictionary;
  textColor?: ColorsDictionary;
  placeholderColor?: ColorsDictionary;
}

export const Input = ({
  backgroundColor = 'primary2',
  textColor = 'secondary1',
  placeholderColor = 'secondary2',
  ...rest
}: InputProps) => {
  const themeSelector = useSelector((store: Store) => {
    return store.themes;
  });

  return (
    <TextInput
      style={{
        fontSize: typography.body,
        backgroundColor: themes[themeSelector.selectedTheme][backgroundColor],
        color: themes[themeSelector.selectedTheme][textColor],
      }}
      placeholderTextColor={
        themes[themeSelector.selectedTheme][placeholderColor]
      }
      {...rest}
    />
  );
};
