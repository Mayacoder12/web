import './contactus.css';
import Button from '../../components/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Contact(){
    return(
        <div><Navbar></Navbar>
        <div className='contactus'>
            <div className='careers'>
            <div className='career-img'>
            <div className='image'>
                <img src='https://allmakes.com/wp-content/uploads/2017/10/office-space-planning.jpg'></img>
                <div className='career-title'>
                    Your Questions, Our Answers
                </div>
            </div>
            </div>
        </div>
        <div className='connect1'>
            GET IN TOUCH WITH US
            <div className='connect1-row'>
                <div className='cn1-desc'>
                    <p id='headquarters'>Headquarters</p>
                    <p id='address'>Address</p>
                    <p id='contact'>Contact: 1234567890</p>
                    <p id='email'>Email: email@email.com</p>
                </div>
                <div className='cn1-img'>
                    <img src='https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg'></img>
                </div>
            </div>
        </div>
        <div className='buisnesses'>
            BUISNESSES
            <div className='bsnsrow'>
                <div className='bn1'>
                    <p>Buisness 1</p>
                    <Button id = 'button' text='Get in touch with us ->'></Button>
                </div>
                <div className='bn2'>
                    <p>Buisness 2</p>
                    <Button text='Get in touch with us ->'></Button>
                </div>
            </div>
        </div>
        <div className='google-map'>
        <iframe
        title="google map"
        src="https://www.google.com/maps/search/J+S+Engineering+Pune/@18.4437736,73.820564,1813m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
</div>
<Footer></Footer>
</div>
    );
}

export default Contact;