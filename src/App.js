import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Sidebar from './features/sidebar/Sidebar';
import Tabs from './features/Tabs';
import CurrentView from './features/CurrentView';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='grid grid-cols-5 h-screen'>
        <div className='bg-sky-950 h-full col-span-1'>
          <Sidebar/>
        </div>
        <div className='bg-slate-300 col-span-4 p-4'>
          <Tabs />
          <Routes>
            <Route path="/doc" element={<CurrentView props={"doc"}/>}></Route>
            <Route path="/pt" element={<CurrentView props={"pt"} />}></Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
