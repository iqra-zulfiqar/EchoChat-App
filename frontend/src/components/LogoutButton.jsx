import {BiLogOut} from 'react-icons/bi';
import useLogout from '../hooks/useLogout.js';

const LogoutButton = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-auto'>
    {!loading ? (<div className="mt-auto">
      <BiLogOut className="w-6 h-6 text-white cursor-pointer"
      onClick={logout}/>
  </div>) : ( 
    <span className='loading loading-spinner'></span>
    )}
    </div>
  )
}

export default LogoutButton