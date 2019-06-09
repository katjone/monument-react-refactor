import React from 'react';
import About from './About';
import Header from '../Header';
import Contact from './Contact';
import Aside from './Aside';
import blog1 from './assets/blog_1.jpg';
import blog2 from './assets/blog_2.jpg';
import headshot from './assets/blog_header_bg.jpg';
import './Blog.css'
const recentIssues = ["Issue Nineteen - Camping",
"Issue Eighteen - Food",
"Issue Seventeen - Signs",
"Issue Sixteen - Friends",
"Issue Fifteen - Carnivals",
"Issue Fourteen - Gatherings"]

const Blog = () => 
    <>
        <Header headshot={headshot} style={{height: 350}}/>
        <section className="blog-flex">
            <About blogs={[blog1, blog2]}/>
            <Aside recentIssues={recentIssues}/>
        </section>
        <Contact />
    </>

export default Blog;