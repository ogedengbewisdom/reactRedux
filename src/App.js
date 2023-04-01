import { Fragment } from 'react';
import Counter from './components/Counter';
import Headers from "./components/Header"
import Auth from "./components/Auth"
import UserProfile from './components/UserProfile';
import { useSelector } from 'react-redux';


function App() {
  const show = useSelector(state => state.auth.authentication)
  
  return (
    <Fragment>
      <Headers />
      {show && <UserProfile />}
      {!show && <Auth />}
       {show && <Counter />}
    </Fragment>
  );
}

export default App;
