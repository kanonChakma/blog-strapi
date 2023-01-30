import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUsers } from './usersSlice'

const UserList = () => {
    //const users = useSelector(selectAllUsers)
    const users = useSelector(state => selectAllUsers(state))

    const renderUser = users.map((user) => (
        <li key={user.id}>
           <Link to={`/user/${user.id}`}>
            {user.name}
           </Link>
        </li>
    ))
    return (
    <section>
       <h2>All User List</h2>
        <ul>
          {
              renderUser
          }
        </ul>
    </section>
  )
}

export default UserList