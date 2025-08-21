import { Provider } from 'react-redux';
import Login from './Login';
import Profile from './Profile';
import { store } from './store';
import ChangeColor from './ChangeColor';


export default function Redux() {
  return (
    <Provider store={store}>
      <div>
        <ChangeColor />
      </div>
      <div className='grid grid-cols-2 *:border *:border-black/40 gap-4 p-4'>
        <div className='p-4'>
          <Login />
        </div>
        <div className='p-4'>
          <Profile />
        </div>
      </div>
    </Provider>
  );
}
