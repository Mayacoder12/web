import './homepage.css';
import Button from '../../components/button';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';

function Homepage() {
    return(
        <div className="homepage">
          <Navbar></Navbar>
        {/* Carousel ithe: design task */}
        <div className='careers'>
            <div className='career-img'>
            <div className='image'>
                <img src='https://allmakes.com/wp-content/uploads/2017/10/office-space-planning.jpg'></img>
                <div className='career-title'>
                    JS Engineering: At Your Service!
                </div>
            </div>
            </div>
        </div>
        <div className='supplycap'>
        <div className='heading'>
            WE - THE JS ENGINEERING
            <div className='supplycaprow'>
            <p> JS Engineering is established with an objective to provide complete turnkey solutions from Industrial Design, Mechanical Integration, Automation,
              Special Purpose Machines, Fixture Dies and Tools with quality maintenance services at all the time. Using effective and efficient combination of PLC, DCS, SCADA, HMI, VFD and other industrial 
              automation products, we offer a wide range of services and solutions for various industries.
              We have been designing special solutions as per customer and product packaging requirement. <b>DESIGN </b> being our core competency, we are able to provide customised solution for complex product
              and process. With a strong design ability, JS Engineering always try to build an <b> INNOVATIVE </b> and <b> APPROPRIATE </b> mechanisms that will give satisfactory results,
              someimes more than satisfactory. Combination of both these features always lead us to create appropriate machines which are fit to purpose and innovation. This makes value added benefits for our customers.
              Whether it is modification in old system or installation of new system, JS Engineering provides seamless support from designing, product selection to commissioning and post commissioning services.</p>
<img src='https://th.bing.com/th/id/R.02e8ecfc81a7e3a5c7b3554ff0f47a80?rik=P3KuN8d4OoGFaQ&riu=http%3a%2f%2fuiconstock.com%2fwp-content%2fuploads%2f2014%2f11%2fengineering-pictures-121.jpg&ehk=z4dE8EpAHbWthjL7q83o%2bl9tcy8pj7Rfmtaignm3CEU%3d&risl=&pid=ImgRaw&r=0'></img>
{/* Add image here */}
        </div>
        </div>
    </div>
          {/* chairman/director photo and info */}
          <div className='heading'>
            Forging Excellence, as always
            <p> with excellence in this</p>
          </div>
          <div className="team-container">
      <div className="team-row">
        <div className="team-details">
          <h3 className="team-name">Mr. Name</h3>
          <p className="team-role">Chairman & Managing Director</p>
          <p className="team-desc">
          After hunting for several hours, we finally saw a large seal sunning itself on a flat rock. I took one of the wooden clubs while Larry took the longer one. We slowly snuck up behind the seal until we were close enough to club it over its head. The seal slumped over and died. This seal would help us survive. We could eat the meat and fat
          </p>
        </div>
        <div className="team-img-box">
          <img
            src="https://thumbs.dreamstime.com/b/vertical-breathtaking-scenery-sun-rays-shining-clouds-against-mounts-vertical-breathtaking-scenery-256732839.jpg"
            alt="Chairman"
            className="team-img"
          />
        </div>
      </div>

      <div className="team-row-reverse">
        <div className="team-details">
          <h3 className="team-name">Mr. Name 2</h3>
          <p className="team-role">Vice-Chairman & Joint Managing Director</p>
          <p className="team-desc">
          Sleeping in his car was never the plan but sometimes things don't work out as planned. This had been his life for the last three months and he was just beginning to get used to it. He didn't actually enjoy it, but he had accepted it and come to terms with it. Or at least he thought he had. All that changed when he put the key into the ignition, turned it and the engine didn't make a sound.
          </p>
        </div>
        <div className="team-img-box">
          <img
            src="https://thumbs.dreamstime.com/b/vertical-shot-natural-scenery-lake-frame-trees-256737491.jpg"
            alt="VC"
            className="team-img"
          />
        </div>
      </div>
    </div>
          {/* your trusted partner, aaj udya */}
          <div className='trusted-partner'>
            <div className='details'>
            <div className='title'>
              Your trusted partner, today and tomorrow
            </div>
            <div className='description'>
            I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.
            </div>
            <Button text="Explore Now ->"></Button>
            </div>
            <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' title='Youtube Video' id='iframe1'></iframe>
          </div>
          {/* facilities */}
          <div className='heading'>
            Facilities
          </div>
          <div className='facilities'>
            <div className='facility'>
              <img src='https://th.bing.com/th/id/OIP.U5Q--dTcTu5G4zE97CoVpwHaNK?rs=1&pid=ImgDetMain'></img>
              <Link to="/facility"><div className='fac-text'>Facility 1</div></Link></div>
            <div className='facility'><img src='https://wallpapercave.com/wp/wp5620954.jpg'></img><div className='fac-text'>Facility 2</div></div>
            <div className='facility'><img src='https://th.bing.com/th/id/OIP.U5Q--dTcTu5G4zE97CoVpwHaNK?rs=1&pid=ImgDetMain'></img><div className='fac-text'>Facility 3</div></div>
            <div className='facility'><img src='https://wallpapercave.com/wp/wp5620954.jpg'></img><div className='fac-text'>Facility 4</div></div>
          </div>
          {/* news and media; links; linkedin news(?) */}
          <div className='news-media'>
            <div className='details'>
            <div className='title'>
              Latest Updates and Insights!
              <p>News and Media at your fingertips</p>
            </div>
            <div className='description'>
            Welcome to your source for industry trends and innovations. Stay informed about impactful stories across diverse sectors from Automotive to Defence. Explore concise and informative content on our business and global developments.
            </div>
            <Button text="Explore Now ->"/*social media link here*/><a href='www.linkedin.com'></a></Button>
            </div>
            {/* ithe linkedin cha iframe taaka */}
            <iframe src='https://www.linkedin.com/in/embed/pratik-limbekar-ab508b290/' title='Youtube Video'></iframe>
          </div>
          {/* information hub */}
          <div className='heading'>
            Forging the Fortune
            <p> Welcome to our dedicated information hub, where you will find comprehensive financial updates and key details that provide a deeper understanding of our performance and future direction.</p>
          </div>
          <div className='infohub'>
            <div className='row1'>
            <div className='stock'>Stock</div>
            <div className='financeres'>Financial Results
              <Button text='Quaterly Results: Dec 2023'></Button>
            </div>
            </div>
            <div className='row2'>
            <div className='investor-hub'>Investor
            <Button text='Explore Now ->'></Button>
            </div>
            <div className='media'>Media
              <Button text='Explore Now ->'></Button>
            </div>
            </div>
          </div>
          <Footer></Footer>
          </div>
    );
}

export default Homepage;