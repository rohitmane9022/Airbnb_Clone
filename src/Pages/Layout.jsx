
import { Outlet } from 'react-router'
import Headers from '../components/Headers'

function Layout() {
  return (
    <div >
      <Headers/>
      <Outlet/>
    </div>
  )
}

export default Layout