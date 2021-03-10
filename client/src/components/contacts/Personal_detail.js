import React ,{useState,useContext,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const Personal_detail=()=>{
    const contactContext=useContext(ContactContext);
    const {addContact,clearCurrent,current,updateContact}=contactContext;

    useEffect(()=>{
        if(current!==null){
            setContact(current);
        }
        else{
            setContact({
                name:'',
                email:'',
                phone:'',
                age :'',
                allergies:'',
                blood_group:'',
            });

        }
    },[contactContext,current]);  

    const [contact,setContact]=useState({
        name:'',
        email:'',
        phone:'',
        age:'',
        allergies:'',
        bloodGroup:'',
        recent_injury:'',
        date:'',
        medication:'',
        hospital_name:''

    });  

    const {name,email,phone,age,allergies,bloodGroup,recent_injury,
    date,
    medication,
    hospital_name} = contact;

    const onChange=e=> setContact({ ...contact,[e.target.name]:e.target.value});
    const onSubmit=e=>
        {
        e.preventDefault();
        if(current===null  ){
        addContact(contact);}
        else{
        updateContact(contact);
        }
        clearAll();
    };

    const clearAll=()=>{
        clearCurrent();
    }
        
    return (
        <form onSubmit={onSubmit}>
           < h2 className='text-primary'> {current ? 'Edit Information':'Add Information'} </h2>
               <input type='text' 
               placeholder='name' 
               name='name' value={name} 
               onChange={onChange} />

               <input type='email' 
               placeholder='Email' 
               name='email' value={email} 
               onChange={onChange} />

               <input type='text' 
               placeholder='Phrrone' 
               name='phone' value={phone} 
               onChange={onChange} />
              
               <input type='text' 
               placeholder='Age' 
               name='age' value={age} 
               onChange={onChange} />
               <input type='text' 
               placeholder='Allergies' 
               name='allergies' value={allergies} 
               onChange={onChange} />

                 <input type='text' 
               placeholder='Blood-Group' 
               name='bloodGroup' value={bloodGroup} 
               onChange={onChange} />

             
              
                <div>
                 <input type='submit' value={current ? 'Update Information' : 'Add Information'} 
                 className='btn btn-primary btn-block' />  
                </div>
                {current && <div>
                    <button className='btn btn-light btn-block' onClick={clearAll}>
                        Clear</button></div>}
        </form>
    )
}

export default Personal_detail;
