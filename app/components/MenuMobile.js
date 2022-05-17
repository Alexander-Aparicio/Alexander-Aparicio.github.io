import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const MenuMobile = ()=>{

    const d = document
    const $main = d.getElementById('root')
    const $nav = d.getElementById('idMenu')
    
    const containerHamburguer = d.createElement('div')
    containerHamburguer.setAttribute('class','boxHamburguer boxShadowStrong')
    
    const openMobile = d.createElement('img')
    openMobile.setAttribute('src','app/assets/svg/open-hamburger.svg')
    openMobile.setAttribute('class','btnHamburguer openHamburguer')

    const closeMobile = d.createElement('img')
    closeMobile.setAttribute('src','app/assets/svg/close-hamburguer.svg')
    closeMobile.setAttribute('class','btnHamburguer none closeHamburguer')

    containerHamburguer.appendChild(openMobile)
    containerHamburguer.appendChild(closeMobile)
    $main.appendChild(containerHamburguer)

    d.addEventListener('click', (e)=>{

        const $btnOpen = d.querySelector('.openHamburguer')
        const $btnClose = d.querySelector('.closeHamburguer')
        const $boxBtns = d.querySelector('.boxHamburguer')

        if(e.target === $btnOpen ){

            $nav.style.setProperty('display','grid')
            addClass($btnOpen,'opacity-off-btn')
            addClass($nav,'transition')
            addClass($boxBtns,'box-border')

            setTimeout(()=>{

                addClass($btnOpen,'none')
                removeClass($btnOpen,'opacity-off-btn')
                
                removeClass($nav,'transtion')

                removeClass($btnClose,'none')
                addClass($btnClose,'opacity-on-btn')
            },400)

        }

        if(e.target === $btnClose ){

            addClass($btnClose,'opacity-off-btn')
            addClass($nav,'transtion-off')
            removeClass($boxBtns,'box-border')
            setTimeout(()=>{

                
                addClass($btnClose,'none')
                removeClass($btnClose,'opacity-off-btn')

                $nav.style.setProperty('display','none')
                removeClass($nav,'transtion-off')

                removeClass($btnOpen,'none')
                addClass($btnOpen,'opacity-on-btn')

            },400)

        }
    })
}

export { MenuMobile }