import './careers.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

function Careers() {
    return(
        <div className='careers'>
            <Navbar></Navbar>
            <div className='career-img'>
            <div className='image'>
                <img src='https://media.licdn.com/dms/image/C5112AQG87VUgljNNSQ/article-cover_image-shrink_600_2000/0/1553661830399?e=2147483647&v=beta&t=RSHfGLbHjU_LDDrYeoVVHDvcYGCwKRVNBz2-TdfvzqQ'></img>
                <div className='career-title'>
                    Grow with us!
                </div>
            </div>
            </div>
            <div className='career-details'>
                <div className='heading'>
                    Inclusion is the key to Success!
                    <p> Here at JS Engineers blah blah blah</p>
                </div>
                {/* add image here */}
                <img src='#' id='image'></img>
                <div className='heading'>
                    Working with us
                    <p> Here at JS Engineers blah blah blah</p>
                    {/* add any video or iframe, if exists and needed */}
                </div>
                <div className='form'>
                <div className='formhead'>
                    APPLY ONLINE
                </div>
                <div className="form-container">
      <section className="section">
        <div className="section-header">01 YOUR CONTACT INFORMATION</div>
        <div className="form-group">
          <select className="input-field">
            <option>Area of Expertise</option>
          </select>
          <input type="text" placeholder="First Name" className="input-field" />
          <input type="text" placeholder="Last Name" className="input-field" />
        </div>
        <div className="form-group">
          <input type="email" placeholder="E-Mail" className="input-field" />
          <input type="text" placeholder="Contact No" className="input-field" />
        </div>
      </section>
      <section className="section">
        <div className="section-header">02 EDUCATIONAL / PROFESSIONAL DETAILS</div>
        <div className="form-group">
          <input type="text" placeholder="Highest Qualification" className="input-field" />
          <select className="input-field">
            <option>Year</option>
          </select>
          <select className="input-field">
            <option>Month</option>
          </select>
          <input type="text" placeholder="Current Organization" className="input-field" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Current Annual Salary" className="input-field" />
          <input type="text" placeholder="Expected Salary" className="input-field" />
          <input type="text" placeholder="Notice Period" className="input-field" />
        </div>
        <div className="form-group">
          <button className="resume-btn">BROWSE RESUME</button>
          <p className="note">* Only doc, docx and pdf of max-size 1Mb</p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">03 CAPTCHA FOR SECURITY</div>
        <div className="form-group captcha-group">
          <span className="captcha-text">MjEzMD</span>
          <button className="refresh-btn">⟳</button>
          <input type="text" placeholder="Enter Captcha" className="input-field" />
          <button className="submit-btn">Submit →</button>
        </div>
      </section>
    </div>
                </div>
            </div>
            <div className='heading'>
                LIFE @JS ENGINEERING
                {/* add images ka grid */}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Careers;