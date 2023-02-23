import {TouchableHighlight} from 'react-native';
import {Text} from '../Text';
import {ButtonProps, ButtonTheme} from './types';
import {useStyles} from './styles';
import {ColorsDictionary} from '../../themes/types';

export const Button = ({
  title,
  buttonTheme = 'primary',
  textWeight = 'medium',
  textSize = 'body',
  ...rest
}: ButtonProps) => {
  const styles = useStyles();

  const helper: {[arg in ButtonTheme]: ColorsDictionary} = {
    primary: 'secondary1',
    warning: 'warning1',
    disabled: 'disabled',
  };

  return (
    <TouchableHighlight style={styles[buttonTheme]} {...rest}>
      <Text
        textSize={textSize}
        textWeight={textWeight}
        textColor={helper[buttonTheme]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};
