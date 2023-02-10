import {Text as RnText} from 'react-native';
import {useSelector} from 'react-redux';
import {typography} from '../../constants/typography';
import {Store} from '../../redux/types';
import {themes} from '../../themes';
import {TextProps} from './types';

export const Text = ({
  children,
  textSize = 'body',
  textColor = 'secondary1',
}: TextProps) => {
  const theme = useSelector((store: Store) => {
    return store.themes;
  });

  return (
    <RnText
      style={{
        color: themes[theme.selectedTheme][textColor],
        fontSize: typography[textSize],
      }}>
      {children}
    </RnText>
  );
};
