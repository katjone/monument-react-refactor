import React from 'react';
import Gallery from './Gallery'
import Archive from './Archive'
import About from './About';
import Header from '../Header';
import Contact from './Contact';
import art1 from './assets/article_1.jpg';
import art2 from './assets/article_2.jpg';
import art3 from './assets/article_3.jpg';
import gallery1 from './assets/gallery_1.jpg';
import gallery2 from './assets/gallery_2.jpg';
import gallery3 from './assets/gallery_3.jpg';
import gallery4 from './assets/gallery_4.jpg';
import gallery5 from './assets/gallery_5.jpg';
import gallery6 from './assets/gallery_6.jpg';
import headshot from './assets/home_header_bg.jpg';
import './Landing.css'

const Landing = () => {
    const articles = [
        {title:"Issue Twenty - The Southwest", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel voluptate eos nisi necessitatibus aperiam dolorem ut eveniet quae dolores quisquam nulla, cumque tenetur blanditiis modi tempora excepturi error veniam suscipit dicta praesentium reiciendis illo obcaecati odit inventore minima. Pariatur facilis, excepturi! Facilis cumque dicta reiciendis nam accusantium cum pariatur sunt accusamus voluptas eaque sapiente totam dolorum nulla eligendi molestiae, quidem odit repellat temporibus quae ipsa aut placeat modi sint doloribus. Ipsum nisi veritatis, facere doloribus. Nihil veritatis corporis eaque odio.", img:art1}, 
        {title:"Issue Nineteen - Camping", text:"Maiores qui doloremque suscipit molestias. Saepe omnis dolore, ipsum voluptatem quisquam eveniet repellat! Eius in vero, cum dolorem ad earum, dignissimos quasi qui obcaecati, minima, esse aliquid beatae. Placeat, adipisci temporibus suscipit neque assumenda earum perferendis autem voluptatem nostrum ipsa porro, voluptas cumque ullam et reiciendis deserunt eos aspernatur esse laudantium cum natus cupiditate nesciunt. Nostrum doloremque odio maiores, quis architecto vero unde error, obcaecati ullam esse soluta et incidunt. Totam quaerat unde doloribus inventore sapiente molestiae, rem? Dolor, est.", img:art2}, 
        {title:"Issue Eighteen - Food", text:"Dolore asperiores, ad nam, molestiae, fugiat numquam ut dolorum est unde eum cupiditate! Totam optio ullam enim sed ipsum molestias quod fugiat, placeat, fugit nemo saepe quidem ex asperiores excepturi rerum! Earum obcaecati non dignissimos voluptate repellendus voluptatibus ratione sit totam architecto, pariatur, amet ea. Officia nulla repellat, eius voluptatibus provident repellendus sint dolorum veniam? Amet rerum alias quas aut ratione illum voluptatem excepturi, ea saepe illo quis maxime repudiandae minus praesentium nihil quaerat ducimus reprehenderit consequatur qui?", img:art3}
    ]
    const gallery = [ gallery1, gallery2, gallery3, gallery4, gallery5, gallery6 ]
    return (
        <div>
            <Header headshot={headshot} h2={true} style={{height: "100vh"}}/>
            <Archive articles={articles}/>
            <About />
            <Gallery gallery={gallery}/>
            <Contact />
        </div>
    )
}

export default Landing;