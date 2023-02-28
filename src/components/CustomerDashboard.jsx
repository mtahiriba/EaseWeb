import React, {useState} from 'react'
import DashboardNavbar from '../components/DashboardNavbar'
import UserProfile from '../components/UserProfile'
import CustomerDashboardDetails from '../components/CustomerDashboardDetails'

const CustomerDashboard = ({setUser, user}) => {
  const [option, setOption] = useState("dashboard")
  return (
    <div className='h-screen bg-gray-100 transaction-height duration-75 ease-out'>
        <DashboardNavbar setUser={setUser} setOption={setOption}/>
        <div className='pb-2 flex-1'>
            {option === "dashboard" ? <CustomerDashboardDetails user={user}/> : <UserProfile/>}
        </div>
    </div>
  )
}

export default CustomerDashboard