import React from 'react';
import './Sidebar.css'

export function Sidebar(){
    return(<>
        <section className='ncc__sidebar'>
            <ul className='ncc__sidebar--navbar'>
                <li><a href=''>Home</a></li>
                <li><a href=''>Services</a></li>
                <li><a href=''>News</a></li>
                <li><a href=''>Blog</a></li>
                <li><a href=''>Contact</a></li>
            </ul>
        </section>
    </>);
}