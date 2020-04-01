import React from 'react'

export default function LGNav() {
    let menuIsOpen = false

    const closeMenu = (evt) => {
        evt.target.previousSibling.className = evt.target.previousSibling.className.replace('left-0', 'left-100')
        evt.target.innerHTML = 'Menu'
        menuIsOpen = false
    }

    const openMenu = (evt) => {
        evt.target.previousSibling.className = evt.target.previousSibling.className.replace('left-100', 'left-0')
        evt.target.innerHTML = 'Close'
        menuIsOpen = true
    }

    const onclick = (evt) => {
        console.log(evt.target)

        if (menuIsOpen) closeMenu(evt)
        else openMenu(evt)
    }

    return (
        <nav className="navigation dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
            <div className="dtc dn-ns w-third"></div>
            
            <div id="menu" className="bg-white static-ns absolute  mt4 mt0-ns left-100 db dtc-ns v-mid w-100 w-100-ns w-75-ns h-80 tr pa3">
                <a className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns" href="#header" title="Home">Home</a>
                <a className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns" href="#product-list" title="About">Produse</a>
                <a className="link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr0-ns" href="#" title="Contact">Contact</a>
            </div>
            
            <a href="#." id="menu-btn" onClick={onclick} className="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim dark-gray">
                Menu
            </a>
            </nav>
    )
}
