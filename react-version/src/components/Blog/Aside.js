import React from 'react';
import campfire from './assets/about.jpg';

const Aside = ({recentIssues}) =>
    <aside>
			<h3>About Us</h3>   
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum fugiat illo sunt quasi incidunt veniam cumque minus totam rem ea vel ut eius, accusamus, doloribus dolore at ipsum quaerat molestias.</p>
			<p>Explicabo consectetur tempora perferendis voluptas itaque, corporis at ipsum quisquam eveniet, facilis perspiciatis. Eum ad adipisci, earum fugit perspiciatis deserunt veniam eos? Impedit expedita assumenda, saepe excepturi ad voluptatibus. Eveniet.</p>
			<img src={campfire} alt="" />
      <h3>Recent Issues</h3>
        <ul>
					{recentIssues.map((issue,key)=>
						<li className="rec-iss" key={key}><a href="">{issue}</a></li>	
						)}
				</ul>
		</aside>

export default Aside;