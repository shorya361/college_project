import React ,{useContext} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext'

 const Personal_item = ({contact}) => {

     const contactContext=useContext(ContactContext);

     const { _id,  email, phone,age,allergies,bloodGroup } = contact;

     const {deleteContact ,setCurrent, clearCurrent} = contactContext;

     const onDelete = () =>{
        deleteContact(_id);
        clearCurrent();
     };

    return (
        
        <div className='card bg-light'>
            <h2>{name}</h2>
            <ul className='list'>
                {email && (<li>
                    <i className='fas fa-envelope-open'></i>{' Email: '}
                        {email}
                    </li>)}
                {phone && (<li>
                    <i className='fas fa-phone'></i>{' Phone No: '}
                        {phone}
                    </li>)}
                    {age && (<li>
                        <i class="fas fa-calendar-week"></i>{' Age: '}
                        {age}
                    </li>)}
                    {allergies && (<li>
                        <i class="fas fa-allergies"></i>{' Allergies: '}
                        {allergies}
                    </li>)}
                    {bloodGroup && (<li>
                        <i class="fas fa-tint"></i>{' BloodGroup: '}
                        {bloodGroup}
                    </li>)}

                
                    
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={()=>setCurrent(contact)}>
                    Edit
                </button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>
                    Delete
                </button>   
            </p>
        </div>
    )
};
Personal_item.propTypes={
    
    contact:PropTypes.object.isRequired
}

export default Personal_item;
