import React from 'react';
import './Bookv.css';
import pic1 from '../images/pic3.png';
import pic2 from '../images/pic4.png';
import pic3 from '../images/pic5.png';
import pic4 from '../images/pic6.png';
import pic5 from '../images/pic7.png';
import pic6 from '../images/pic8.png';
import pic7 from '../images/pic9.png';
import pic8 from '../images/pic10.png';
import pic9 from '../images/wh.png';

const Bookv = () => {
  return (
    <div className='book'>
      <h1>at 18 Candelriggs we make it happen</h1>
      <h1 className='ti'>Events are the name of the game</h1>
      <div>
        <img src={pic1} className="im1" />
        <img src={pic2} className="im2" />
      </div>

      <h3>Book Venue</h3>
      <img src={pic3} className="im3" />

      <div className='gallery'>
        <img src={pic3} className="im10" />
        <img src={pic3} className="im10" />
        <img src={pic3} className="im10" />
      </div>

      <div className='about'>

        <div className='images'>
          <div>
            <img src={pic4} className="im4" />
            <img src={pic5} className="im5" />
          </div>
          <div>
            <img src={pic6} className="im6" />
            <img src={pic7} className="im7" />
          </div>
          <div>
            <img src={pic8} className="im8" />
          </div>
        </div>
        <div className='det'>
          <span>A one-stop cabaret lounge in the heart of Merchant City, 18 Candleriggs (formerly known as Wild Cabaret) knows no bounds when it comes to unique dabbles, daring nights and dashing shows.</span>
          <br />
          <br/>
          <span>Echoing its eccentric entertainment, the decor is markedly Art Deco. Gilded in gold, with a bar boasting its name up in Hollywood-style lights, these two spaces epitomize showbiz and glistening sass. Sashay down to a table of baroque seats and let the show commence.</span>
          <br />
          <br/>
          <span>Events are the name of the game at 18 Candelriggs, where live music and cabaret reign supreme. From burlesque shows and circus troupes to comedy nights and luxe shows, it's at the top of its game when it comes to providing guests with a wholly unique drinking and dining experience in the city. Top hats? Sparkles? And feather boas? These all come as standard.</span>
        </div>

      </div>

      <div className='contact'>
        <img src={pic9} className="logo1" />
        <br/>
        <span className='chat'>Chat with us</span>
      </div>
    </div>
  )
}

export default Bookv