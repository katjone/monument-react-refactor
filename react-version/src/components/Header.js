import React from 'react'

const Header = (props) => 
    <>
        <header className="vertical-center" style={{backgroundImage:`url(${props.headshot})`}}>
        <div>
            <h1><a href="index.html">Monument</a></h1>
            {props.h2 ? <h2>A Lifestyle Magazine</h2> : ''}
        </div>
        </header>
    </>


export default Header;