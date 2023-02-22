import React, {useState} from 'react'
import CustomerDashboard from '../components/CustomerDashboard'
import HomeDetails from '../components/HomeDetails'

const Home = () => {

  const [user, setUser] = useState(localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear())

  return (
    <div>
        {user ? (
            <CustomerDashboard setUser={setUser} user={user}/>
          ): (
            <HomeDetails/>
          )}
    </div>
  )
}

export default Home