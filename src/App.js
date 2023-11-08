import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Sidebar from './features/sidebar/Sidebar';
import Tabs from './features/Tabs';
import NotFound from './features/NotFound';
import ProgressNotes from './components/ProgressNote';
import { addDocDoc } from './store/docSlice';
import { addPtDoc } from './store/ptSlice';
import Table from './components/Table';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='grid grid-cols-5 h-screen'>
        <div className='bg-sky-950 h-full col-span-1'>
          <Sidebar/>
        </div>
        <div className='bg-slate-300 col-span-2'>
          <Table />
        </div>
        <div className='bg-slate-300 col-span-2'>
          <div className='grid grid-rows-7 h-screen'>
              <div className='grid row-span-1'></div>
              <div className='grid row-span-6'>
                <div className='flex-row'>
                  <Tabs />
                  <Routes>
                    <Route path="/newDoc">
                      <Route path="doc" element={<ProgressNotes slice={addDocDoc}/>}/>
                      <Route path="pt" element={<ProgressNotes slice={addPtDoc}/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                  </Routes>
                </div>
              </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
