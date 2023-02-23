import {SafeAreaView, View} from 'react-native';
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
      <View style={{paddingHorizontal: 12}}>
        <View style={{alignItems: 'center', paddingTop: 20}}>
          <Text textSize="title1">Login</Text>
          <View style={{height: 20}} />
        </View>

        <Input placeholder="email" />
        <View style={{height: 10}} />

        <Input placeholder="password" />
        <View style={{height: 20}} />
        <View style={{alignItems: 'center'}}>
          <Button title="Submit" />
          <View style={{height: 20}} />
        </View>
      </View>
    </SafeAreaView>
  );
};
