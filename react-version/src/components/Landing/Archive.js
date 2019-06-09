import React from 'react';

const Archive = ({articles}) =>
  <section>
		<h2>From the Archive</h2>
		<div class="grid-wrapper articles">
			{articles.map((article,key)=>
				<article class="col-third" key={key}>
					<img src={article.img} alt="" />
					<div>
						<h3>{article.title}</h3>
						<p>{article.text}</p>
						<button>Read More</button>
					</div>
				</article>
				)}
			</div>
	</section>

export default Archive;