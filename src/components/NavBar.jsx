import React from 'react'

export default function NavBar() {
    return (
        <div class="page-wrapper">
            <div class="nav-wrapper">
                <div class="grad-bar"></div>
                <nav class="navbar">
                    <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="nav no-search">
                        <li class="nav-item"><a href="#">Home</a></li>
                        <li class="nav-item"><a href="#about">About</a></li>
                        <li class="nav-item"><a href="#contact">Contact</a></li>

                    </ul>
                </nav>
            </div>


        </div>
    )
}
