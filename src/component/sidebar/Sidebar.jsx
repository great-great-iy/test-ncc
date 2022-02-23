import React from 'react';

export function Sidebar(){
    return(<>
        <section className='ncc__sidebar'>
            <ul className='ncc__sidebar--navbar'>
                <li>Home</li>
                <li>Services</li>
                <li>News</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </section>
    </>);
}