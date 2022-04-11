import { Provider } from 'react-redux';
import store from './store';
import { AppBar } from './components';
import { ShoppingList } from './features';

function App() {
  return (
    <Provider store={store}>
      <AppBar title="Shopping List" />
      <ShoppingList />
    </Provider>
  );
}

export default App;
