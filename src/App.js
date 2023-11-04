import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Sidebar from './features/sidebar/Sidebar';
import Tabs from './features/Tabs';
import Form from './components/Form';
const store = configureStore();


function App() {
  return (
    <Provider store={store}>
      <div className='grid grid-cols-4 h-screen'>
        <div className='bg-sky-950 h-full col-span-1'>
          <Sidebar/>
        </div>
        <div className='bg-slate-300 col-span-3'>
          <div className='grid grid-rows-7 h-screen'>
              <div className='grid row-span-1'></div>
              <div className='grid row-span-6'>
                <div className='flex-row'>
                  <Tabs />
                  <Form />
                </div>
              </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
