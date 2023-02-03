import {Text as RnText} from 'react-native';
import {useSelector} from 'react-redux';
import {Store} from '../../redux/types';
import {themes} from '../../themes';
import {TextProps} from './types';

export const Text = ({color = 'secondary'}: TextProps) => {
  const theme = useSelector((store: Store) => {
    return store.themes;
  });

  return <RnText style={{color: themes[theme.selectedTheme][color]}} />;
};
