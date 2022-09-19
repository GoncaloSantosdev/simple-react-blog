import React from 'react'

const Navbar = ({ user }) => {
  return (
    <header className='app__header'>
      <h2>Simple Blog</h2>
    <div>
      {user && (
        <img src={user.url} alt="Profile Pictue" height="70px" width="70px" />
      )}
    </div>
  </header>
  )
}

export default Navbar