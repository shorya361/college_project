import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import classes from'./Login.module.css';
const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className={classes.login}>
      <h1 className={classes.h1}>
        Account <span className='text-primary'>Login</span>
      </h1>
      <form className = {classes.form} onSubmit={onSubmit}>
          <input className={classes.input}
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
          <label className={classes.label}htmlFor='email'>Email Address</label>
        
         
          <input className={classes.input}
            id='password' 
            type='password'
            name='password' 
            value={password} 
            onChange={onChange}
            required
          />
          <label className={classes.label}htmlFor='password'>Password</label>
         
        <input className={classes.button}
          type='submit'
          value='Login'
        />

      </form>
    </div>
  );
};

export default Login;
