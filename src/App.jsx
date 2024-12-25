import './App.css';
import play from './assets/images/playbtn.svg';
import logos from './assets/images/logos.svg';
import idea from './assets/images/idea.svg';
import print from './assets/images/print.svg';
import pen from './assets/images/pen.svg';
function App() {
  return (
    <div>
      <div className="container">
        <header>
          <div className='comname'><h3>ShapeVoice</h3></div>
          <div>
            <div className="select">
              <select>
                <option value="product">Product</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <select>
                <option value="template">Template</option>
                <option value="template1">Template 1</option>
                <option value="template2">Template 2</option>
                <option value="template3">Template 3</option>
              </select>
              <a>Blog</a>
              <a>Pricing</a>
            </div>
          </div>
          <div>
            <div className="signin">
              <button className='sign'>Sign In</button>
              <button className='start'>Start Free</button>
            </div>
          </div>
        </header>
        <div>
          <div className="hero">
            <div className="left">
              <h1>Managing business payments has never been easier</h1>
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything.</p>
              <div className="btns">
                <button className='our'>Our Process</button>
                <div className="left_btn2">
                  <button><img src={play} alt="" /></button>
                  <a href="">See How It Works</a>
                </div>
              </div>
            </div>
            <div className="right">
              <h3>Get Started for Free</h3>
              <input type="text" placeholder='Email Address' />
              <input type="text" placeholder='Password' />
              <button>Get Started</button>
            </div>
          </div>
        </div>
        <div>
          <div className="logoes">
            <h4>Trusted By Over 100+ Startups and freelance business</h4>
            <div className="logoimg">
              <a href=""><img src={logos} alt="" /></a>
            </div>
          </div>
        </div>
        <div>
          <div className="middle">
            <div className="middle_inside">
              <h4>Believing neglected so so allowance</h4>
              <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
              <button>We so opinion friends me message as delight.</button>
            </div>
          </div>
        </div>
        <div>
          <div className="comments">
            <div className="commentsinside">
              <img src={idea} alt="" />
              <h5>Led Ask Possible Mistress</h5>
              <p>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="commentsinside">
              <img src={pen} alt="" />
              <h5>Led Ask Possible Mistress</h5>
              <p>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            <div className="commentsinside">
              <img src={print} alt="" />
              <h5>Led Ask Possible Mistress</h5>
              <p>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
          </div>
        </div>
        <div  className='check'>
          <div className="checkout">
            <h2>Track your crytpo portfolio on the best way possible</h2>
            <a >Check It Out</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App