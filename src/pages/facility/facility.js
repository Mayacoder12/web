import './facility.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Facility({text, imglink, description, link}) {
    return(
        <div className='facilitypage'>
            <Navbar></Navbar>
            <div className='image'>
                <img src={imglink}></img>
                <div className='facility-title'>
                    {text}
                </div>
            </div>
            <div className='fac-details'>
            <div className='fac-title'>
                {text}
            </div>
            <div className='fac-desc'>
                {description}
            </div>
            </div>
            <div className='iframe1'>
                <iframe src={link}>
                </iframe>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Facility;