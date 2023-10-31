import Form from './features/Form';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Preview from './features/Preview';
import Subjective from './features/Subjective';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Form />
      <Subjective />
      <Preview />
    </Provider>
  );
}

export default App;
