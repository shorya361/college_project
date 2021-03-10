import React,{Fragment,useContext}  from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

 const Navbar = ({title,icon}) => {
     const authContext = useContext(AuthContext);

     const contactContext = useContext(ContactContext);
      
     const {isAuthenticated, logout, user} = authContext;

     const {clearContacts} = contactContext;

     const onLogout=()=>{
         logout();
         clearContacts();
     }

    const authLinks=(
        <Fragment>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                Hello { user && user.name}
            </li>
            <li>
                <Link to='/info'>Info</Link>
            </li>
            {/* <li>
                <Link to='/personal-info'>Personal Info</Link>
            </li> */}
 <li>
                <Link to='/hospital'>Hospital list</Link>
            </li>
            <li>
                <Link to='/medicine'>Medicine list</Link>
            </li>
            <li>
                <a onClick={onLogout} href="#!"><i className='fas fa-sign-out-alt' />{' '}
                <span className='hide-sm'></span>Logout</a>
             </li>
        </Fragment>
    )

     const guestLinks=(
        <Fragment>
            <li>
             <Link to='/home_content'>Home</Link>
             </li>
             <li>
             <Link to='/about'>About</Link>
             </li>
             <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    )

    return (
        <div className="navbar bg-primary">
            <h1><Link to='/home_content_auth'>
            <i class="fab fa-connectdevelop"></i>{title}</Link>
            </h1>
            <ul>
                {isAuthenticated? authLinks:guestLinks}
            </ul>  
        </div> 
    ) 
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.string
}

Navbar.defaultProps={
    title:'Inter-Connected Health Care',
    icon:'fas fa-id-card-alt'
} 

export default Navbar;
