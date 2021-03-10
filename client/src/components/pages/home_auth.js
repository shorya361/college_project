import React, { Component } from 'react';
import Footer from './Footer';
import classes from './Home.module.css';
import images3 from '../../assest/images/images3.jpg'
import images2 from '../../assest/images/images2.jpg';
import image4 from '../../assest/images/image4.jpeg';
import map from '../../assest/images/map.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCapsules, faProcedures ,faMapMarked} from '@fortawesome/free-solid-svg-icons'
import { faAllergies } from '@fortawesome/free-solid-svg-icons'

class Home extends Component{
    render(){
        return(
            <div>
                <div className={classes.Home_Section}>
                    <div className={classes.heading}>
                    <h1 className={classes.h1}>
                        Inter-Connected Health Care
                    </h1>
                    <h2 className={classes.h2}>
                        We care for you
                    </h2>
                </div>
            </div>
                <section className={classes.Section_Services}>
                    <h1 className={classes.heading1}>Your data is safe with us</h1>
                    <div className={classes.Section_Service}>
                        <div className={classes.images}>
                    <img src={images3} className={classes.img1} alt='' />
                    <img src={images2} className={classes.img2} alt='' />
                    </div>
                    <p className={classes.p1}>
                    Inter-Connected health system is a comprehensive record-keeping app for your personal medical information. It's the perfect replacement for unreliable paper records or various electronic systems that hold bits and pieces of your medical history. With this app, any and all information that is important to you is kept together in one place. 
                    </p>
                    </div>
                </section>
                <section className={classes.Section_Accesses}>
                    <div className={classes.bgvideo}>
                    <video autoPlay="autoPlay" muted="muted" loop className={classes.bgContent}>
                        <source src={map} type='video/mp4'></source>
                        
                        your browser is not supported!
                    </video>
                </div>
                <h1 className={classes.heading2 }>Connect with us anytime anywhere</h1>
                    <div className={classes.Section_Access}>
                        
                    <p className={classes.p2}>
                    Enabling people to be connected anytime, anywhere.<br />
We are at the very heart of our customer’s connected life. We are passionate about offering secure, reliable and future-proof networks and services, enabling people to be connected anytime, anywhere, whilst at the same time creating a more prosperous and cleaner world. </p>
                    <div className={classes.images}>
                    <img src={image4} className={classes.img3} alt='' />
                    <FontAwesomeIcon icon={faMapMarked}  className={classes.svg2} size="10x"/>
                    </div>
                    </div>
                </section>
                <section className={classes.Section_Offer}>
        
                    <h1 className={classes.heading2}>Keep your records at one place</h1>
                    <div className={classes.Section_Offers}>
                    
                    <h3 style={{color:'white'}}>
                    No need to visit your doctor to access medical records. Maintain medical history . Keep all your medical records in one location for easy recall.
                         </h3>
                    <div className={classes.img}>
                    <div className={classes.img4} >
                    <FontAwesomeIcon icon={faCapsules} className={classes.svg1} />
                        Save your prescribed medicines with details.</div>
                    <div className={classes.img5} >
                    <FontAwesomeIcon icon={faAllergies} className={classes.svg1} />
                    Save your details of allergies.It can help you in the time of emergency. </div>
                    <div className={classes.img6} >
                    <FontAwesomeIcon icon={faProcedures} className={classes.svg1} />Save your past procedures. </div>
                    </div>
                    </div>
                </section>

                
                <Footer />
                
                </div>
        )
    }
}

export default Home;
