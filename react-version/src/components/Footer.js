import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Footer = () => 
  <footer>
		<div className="wrap">
			<div className="social-links">
        <SocialIcon url="http://instagram.com" />
				<SocialIcon url="http://twitter.com" />
				<SocialIcon url="http://facebook.com" />
      </div>
      <div className="footerdiv">
			  <input type="text" placeholder="Email Address"/>
			  <button type="submit">Keep in Touch</button>
      </div>
		</div>
		<p className="copyright">"©2019 Zack and Katie (via Sarah Holden whomever that might be ¯\_(ツ)_/¯)"</p>
	</footer>

export default Footer;