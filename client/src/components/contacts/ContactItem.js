import React ,{useContext} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext'

 const ContactItem = ({contact}) => {

     const contactContext=useContext(ContactContext);

     const { _id, name, email, phone,age,allergies,bloodGroup,recent_injury,
        date,
        medication,
        hospital_name } = contact;

     const {deleteContact ,setCurrent, clearCurrent} = contactContext;

     const onDelete = () =>{
        deleteContact(_id);
        clearCurrent();
     };

    return (
        
        <div className='card bg-light'>
            
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

                    {recent_injury && (<li>
                        <i class="fas fa-user-injured"></i>{' Recent-Injury: '}
                        {recent_injury}
                    </li>)}

                    {date && (<li>
                        <i class="fas fa-calendar-week"></i>{' Date: '}
                        {date}
                    </li>)}

                    {medication && (<li>
                        <i class="fas fa-pills"></i>{' Medication: '}
                        {medication}
                    </li>)}

                    {hospital_name && (<li>
                        <i class="fas fa-hospital"></i>{' Hospital_name: '}
                        {hospital_name}
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
ContactItem.propTypes={
    
    contact:PropTypes.object.isRequired
}

export default ContactItem;
