import './aboutus.css';
import React, { useState } from 'react';
import Button from '../../components/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function AboutUs() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: 'https://wonderfulengineering.com/wp-content/uploads/2014/03/engineering-images-4.jpg', alt: '1st image description', text: 'Image 1' },
    { src: 'https://th.bing.com/th/id/R.61136503549482bff78c2e648da0699a?rik=HPE3gzRk17p0vA&riu=http%3a%2f%2fengineersnetwork.org%2fwp-content%2fuploads%2f2019%2f02%2fWhat-is-the-field-of-Mechanical-Engineering-2.jpg&ehk=0z9y%2bmQtETAwog7naFrtTeiJ%2fCA%2bkaE8cs7chST0stU%3d&risl=&pid=ImgRaw&r=0', alt: '2nd image description', text: 'Image 2' },
    { src: 'https://cdn.mos.cms.futurecdn.net/PFxP5HX8oNsLtufFRMumpc-1200-80.jpg', alt: '3rd image description', text: 'Image 3' },
    { src: 'https://www.collegenp.com/uploads/2023/06/Mechatronics-Engineering.jpg', alt: '4th image description', text: 'Image 4' },
    { src: 'https://th.bing.com/th/id/R.005579cac5c829577bf5ddd1e6b07cd8?rik=7GlKkjHjURJFhw&riu=http%3a%2f%2fiimtu.edu.in%2fblog%2fwp-content%2fuploads%2f2023%2f05%2fCE-Featured1.jpg&ehk=03seF8SQgi3G2zVBrZzk4I3aCcbJLryip%2fgEXFuVK6A%3d&risl=&pid=ImgRaw&r=0', alt: '5th image description', text: 'Image 5' },
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

    return(
        <div className='aboutus'>
          <Navbar></Navbar>
    <div className='whatweare'>
      <div className="container">
        <div className="whatweare_section">
        <div className='heading'>
            What We Are
          </div>
          <div className="carousel">
            <div className="carousel-item">
              <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="heritage_img" />
              <div className="carousel-text">{images[currentIndex].text}</div>
            </div>
          </div>
          <div className="carousel-nav">
            <button onClick={goToPrev} className="prev-button">Prev</button>
            <button onClick={goToNext} className="next-button">Next</button>
          </div>
        </div>
      </div>
    </div>
    <div className='leadindia'>
    <div className='supplycap'>
        <div className='heading'>
        INDUSTRIAL DESIGN
            <div className='supplycaprow'>
            <p> Designing is an important aspect of any machine or machine component. Designing helps to understand the function and visualisation of machine component before the manufacturing. Designing is to fit and function. It is to optimise machines to create the best possible user experience. </p>
<img src='https://th.bing.com/th/id/R.02e8ecfc81a7e3a5c7b3554ff0f47a80?rik=P3KuN8d4OoGFaQ&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2014%2f11%2fengineering-pictures-121.jpg&ehk=z4dE8EpAHbWthjL7q83o%2bl9tcy8pj7Rfmtaignm3CEU%3d&risl=&pid=ImgRaw&r=0'></img>
{/* Add image here */}
        </div>
        </div>
    </div>
        <div className='leadindiagrid'>
        <div className='gridcontainer'><div className='text'><img src='#'></img>Aerospace</div><Button text='Explore'></Button></div>
        <div className='gridcontainer'><div className='text'><img src='#'></img>E-mobile</div><Button text='Explore'></Button></div>
        <div className='gridcontainer'><div className='text'><img src='#'></img>Space</div><Button text='Explore'></Button></div>
        <div className='gridcontainer'><div className='text'><img src='#'></img>Engineering</div><Button text='Explore'></Button></div>
    </div>
    </div>
    <div className='supplycap'>
        <div className='heading'>
            SPECIAL PURPOSE OF MACHINE
            <div className='supplycaprow'>
            <p> Machines and automatic machines are designed to operate continuously for 24 hours a day with minimum supervision.
              Special purposes of machines are generally product specific and they are required to be designed and developed for each specific requirement.
              At JS Engineering, we the team of expert and experience engineers design the optimised and durable special purpose machines for industries considering the customer requirements. </p>
<img src='https://th.bing.com/th/id/R.02e8ecfc81a7e3a5c7b3554ff0f47a80?rik=P3KuN8d4OoGFaQ&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2014%2f11%2fengineering-pictures-121.jpg&ehk=z4dE8EpAHbWthjL7q83o%2bl9tcy8pj7Rfmtaignm3CEU%3d&risl=&pid=ImgRaw&r=0'></img>
{/* Add image here */}
        </div>
        </div>
    </div>
    <div className='vision-grid'>
        <div className='vision'>
            VISION
            <p>Being the preferred automation solution provided in India.</p>
        </div>
        <div className='mission'>
            MISSION
            <p>Enhancing customer productivity by the way of automation.</p>
        </div>
    </div>
        <div className='value'>
            VALUE
            <p> <ul>
              <li>Customer Centric </li>
              <li>Accountability</li>   
              <li>Collaboration</li>           
              <li>Excellence</li>
              </ul></p>
        </div>
        <div className='manpower'>
            OUR MANPOWER
            <p> <ul>
              <li>Skilled: 08 </li>
              <li>Semiskilled: 04</li>   
              <li>Helper: 02</li>           
              <li>Supervisor: 01</li>
              <li>Sales and Marketing: 01</li>
              <li>Quality Engineer: 01</li>
              </ul></p>
        </div>
    <div className='address'>
        <div className='heading2'>OUR PRESENCE</div>
        <div className='addrow'>
            <div className='add-img'>
            <img src="https://www.twi-global.com/image-library/hero/engineering-design-process.jpg"></img>
            </div>
            <div className='details'>
                JS Engineering
                <p>Address: Sr No 27/1 Malhari Bhosale Industrial Estate, Narhe-Ambegaon Road, Narhe, Pune-41</p>
                <p>GSTIN Number: 27AFPPJ1232H1ZJ</p>
            </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
    );
}

export default AboutUs;