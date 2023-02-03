import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {Text} from './src/components/Text';
import {store} from './src/redux';

function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <Text />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
