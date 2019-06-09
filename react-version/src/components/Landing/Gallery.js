import React from 'react';

const Gallery = ({gallery}) =>
  <section id="gallery">
		<div class="wrap">
			<h2>Issue Twenty</h2>
			<h3>A visual guide to the Southwest</h3>
			<div class="masonry">
			{gallery.map((photo,key)=>
				<img key={key} src={photo} />	
			)}
			</div>
		</div>
	</section>

export default Gallery;