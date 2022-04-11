import { Provider } from 'react-redux';
import store from './store';

function App() {
  return <Provider store={store}>wrapped w/ store</Provider>;
}

export default App;
