import React, { Component } from 'react';
import classes from './About.module.css';

class About extends Component{
    render(){
        return(
            <div >
                <h1 className={classes.About} >
                   A Bit About Us
                </h1>
                <div className={classes.paragraph}>
                    <p className={classes.paragraph_content}>
                        The Inter-connected Healthcare System is designed to allow easy and protected access to the patient's medical record to provide the doctor the entire information at one place when making a diagnosis and plan of treatment.</p>
                    <p className={classes.paragraph_content}>
                         Using this system, the medical records can be updated with ease as and when any new information is collected by either the patient or the health care provider.</p>
                    <p className={classes.paragraph_content}>
                        This record of medical history can then be made available without any difficulty when it is required. 
                    </p>
                    <p className={classes.paragraph_content}>
                        In this way, a network of healthcare is established that allows rapid examination of the patient and preliminary evaluation of needs using several data sources that are effectively made available at one place.</p>
                    <p className={classes.paragraph_content}>
                        It would be easier for the doctors in charge to start the appropriate treatment if they know the patient’s medical history for instance information about any previous medications or surgeries, past injuries, allergies etc.</p>
                    <p className={classes.paragraph_content}> 
                        Even primary details like blood group, most recent report of tests like Complete Blood Count, X-ray, MRI etc. can prove to be abundantly useful and prevent any unnecessary repetitions of such medical tests.</p>
                    <p className={classes.paragraph_content}> 
                        Therefore, a system is required which can encompass the complete medical history of an individual at a single space and which can be retrieved when needed from any location.
                    </p>
                </div>
            </div>  
        )
    }
}

export default About;
