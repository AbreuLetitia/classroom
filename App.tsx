import {Provider} from 'react-redux';
import {width} from './src/constants/responsive';
import {store} from './src/redux';
import {Login} from './src/views/Login';

function App() {
  console.log(width(4.62));
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
