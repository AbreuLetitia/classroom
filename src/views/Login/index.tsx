import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {Text} from '../../components/Text';
import {Store} from '../../redux/types';
import {themes} from '../../themes';

export const Login = () => {
  const theme = useSelector((store: Store) => {
    return store.themes;
  });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themes[theme.selectedTheme].primary1,
      }}>
      <Text>Login</Text>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Button title="Submit" />
    </SafeAreaView>
  );
};
