import React,{Fragment,useContext,useEffect} from 'react';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import ContactContext from '../../context/contact/contactContext';
import Personal_item from './Personal_item';
import Spinner from '../layout/Spinner';
const Personal_file = () => {

    const contactContext=useContext(ContactContext);
    
    const {contacts,filtered,getContacts,loading}=contactContext;
    
    useEffect(()=>{
        getContacts();
        //eslint-disable-next-line
    },[]);
    if(contacts!==null && contacts.length===0 &&!loading){
        return <h4>Please add information</h4>
    }
    return (
        <div>
           <Fragment>
               {contacts !==null && !loading ?(
                    <TransitionGroup>
                        {filtered!==null ? filtered.map(contact=>(
                        <CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <Personal_item  key={contact}
                            contact={contact} /> 
                        </CSSTransition> )) : 
                        contacts.map(contact=> (
                        <CSSTransition key={contact._id} timeout={500} classNames='item'>
                            <Personal_item  key={contact.id} contact={contact} />
                    
                        </CSSTransition> )
                      )}
                     </TransitionGroup>
               ) :<Spinner />}  
           </Fragment>
        </div>
    );
};

export default Personal_file;
