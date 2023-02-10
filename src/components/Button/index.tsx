import {TouchableHighlight} from 'react-native';
import {useSelector} from 'react-redux';
import {Store} from '../../redux/types';
import {themes} from '../../themes';
import {Text} from '../Text';
import {ButtonProps} from './types';

export const Button = ({
  title,
  backgroundColor = 'secondary1',
  textColor = 'primary1',
  ...rest
}: ButtonProps) => {
  const theme = useSelector((store: Store) => {
    return store.themes;
  });

  return (
    <TouchableHighlight
      style={{
        backgroundColor: themes[theme.selectedTheme][backgroundColor],
      }}
      {...rest}>
      <Text textColor={textColor}>{title}</Text>
    </TouchableHighlight>
  );
};
