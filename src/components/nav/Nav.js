import React from 'react'
import { Link } from 'react-router-dom'

import './nav.styles.scss'

export default function Nav({pageChange}) {
    let menuIsOpen = false

    const closeMenu = (evt) => {
        evt.target.previousSibling.className = evt.target.previousSibling.className.replace('left-0 nav-bg', 'left-100')
        evt.target.innerHTML = 'Menu'
        menuIsOpen = false
    }

    const openMenu = (evt) => {
        evt.target.previousSibling.className = evt.target.previousSibling.className.replace('left-100', 'left-0 nav-bg')
        evt.target.innerHTML = 'Close'
        menuIsOpen = true
    }

    const onclick = (evt) => {
        console.log(evt.target)

        if (menuIsOpen) closeMenu(evt)
        else openMenu(evt)
    }

    return (
        <nav className="navigation nav-bg dt dt--fixed w-100 border-box pa3 pa0-ns ph5-ns">
            <div className="dtc dn-ns w-third"></div>
            
            <div id="menu" className="static-ns absolute  mt4 mt0-ns left-100 db dtc-ns v-mid w-100 w-100-ns w-75-ns h-80 tr pa3">
                <Link className="link dim white tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns" to='/'>Home</Link>
                <Link className="link dim white tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns" to='/products'>Produse</Link>
                <a onClick={pageChange} className="link dim white tr tl-ns f3 f5-ns db dib-ns mr3 mr0-ns" href="#" title="contact">Contact</a>
            </div>
            
            <a href="#." id="menu-btn" onClick={onclick} className="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim white">
                Menu
            </a>
        </nav>
    )
}