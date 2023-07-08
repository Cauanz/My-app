/* eslint-disable react/prop-types */
/* import './App.css' */
import './Header.css'

function Header(props) {   
  return (
    <>
      <div className='Header'>
        <h1>{props.title}</h1>
      </div>
    </>
  )
}

export default Header
