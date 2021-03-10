import React,{useState,useContext,useEffect} from 'react';
import AlertContext  from '../../context/alert/alertContext';
import AuthContext  from '../../context/auth/authContext';
import classes from './Register.module.css';
 const Register = (props) => {
    const alertContext = useContext( AlertContext ); 

    const authContext=useContext(AuthContext); 

    const {setAlert} = alertContext;

    const {register,error,clearErrors,isAuthenticated} = authContext;

    useEffect(() => {
        if(isAuthenticated){
            props.history.push('/');
        }
        if(error==='User already exists'){
            setAlert(error,'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    },[error,isAuthenticated,props.history]);

    const [user,setUser]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    }); 

    const {name,email,password,password2}=user;

    const onChange=e=>setUser({ ...user,[e.target.name]:e.target.value});

    const  onSubmit=e=>{
        e.preventDefault();
        if(name === '' || email === '' || password === ''){
            setAlert('Please enter all fields','danger') 
        } else if (password!==password2){
            setAlert('Password do not match','danger') 
        }
        else {
        register({
            name,
            email,
            password
            });
        }
    };
    return (  
        <div className={classes.register}>
            <h1 className={classes.h1}>Account 
                <span className='text-primary'> Register</span>
            </h1>
            <form onSubmit={onSubmit} className={classes.form}>
                
                   
                    <input className={classes.input}type='text' name='name' value={name} onChange={onChange}
                    required    />
                <label htmlFor='name' className={classes.label}>Name</label>
               
                    <input className={classes.input}type='email' name='email' value={email} onChange={onChange} required  />
                    <label htmlFor='email' className={classes.label}>Email Address</label>
               
                    
                    <input className={classes.input}type='password' name='password' value={password} onChange={onChange}
                    required 
                    minLength='6'     />
                    <label htmlFor='password' className={classes.label}>Password</label>
                
                   
                    <input type='password' name='password2' value={password2} onChange={onChange} 
                    required  className={classes.input}
                    minLength='6' />
                     <label htmlFor='password2' className={classes.label}>Confirm Password</label>
               
                <input type='submit' value='Register' className={classes.button} />
                <div className='container'  >
                <a href='/login' >Already an existing user? Login</a>
                </div>  
            </form>
        </div>
    )
}

export default Register;