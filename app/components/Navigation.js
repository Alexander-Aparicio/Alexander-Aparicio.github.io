import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const Navigation = ()=>{

    const d = document

    d.addEventListener('click',(e)=>{

        const $Seo = d.getElementById('optimization')
        const $Disenoydesarrollo = d.getElementById('design')
        const $home = d.getElementById('inicio')
        const $Contact = d.getElementById('contact')

        const closeMenuMobile = ()=>{

            let mediaQuery = window.matchMedia("(max-width: 959px)")
            
            if(mediaQuery.matches){

                const $menuMobile = d.querySelector('.menu')
                const $btnOpen = d.querySelector('.openHamburguer')
                const $btnClose = d.querySelector('.closeHamburguer')
                const $boxBtns = d.querySelector('.boxHamburguer')
        
                addClass($btnClose,'opacity-off-btn')
                addClass($menuMobile,'transtion-off')
                removeClass($boxBtns,'box-border')
                setTimeout(()=>{
        
                    addClass($btnClose,'none')
                    removeClass($btnClose,'opacity-off-btn')
        
                    $menuMobile.style.setProperty('display','none')
                    removeClass($menuMobile,'transtion-off')
        
                    removeClass($btnOpen,'none')
                    addClass($btnOpen,'opacity-on-btn')
        
                },400)

            }
        }

       if(e.target === $Seo){

        window.location.hash = '#/Optimizacion'
        addClass($Seo,'selectPage')
        removeClass($Contact,'selectPage')
        removeClass($Disenoydesarrollo,'selectPage')
        removeClass($home,'selectPage')
        closeMenuMobile()

       }
       if(e.target === $Disenoydesarrollo){

        window.location.hash = '#/Diseno-y-desarrollo'
        addClass($Disenoydesarrollo,'selectPage')
        removeClass($Contact,'selectPage')
        removeClass($Seo,'selectPage')
        removeClass($home,'selectPage')
        closeMenuMobile()

       }
       if(e.target === $home){

        window.location.hash = '#/Inicio'
        addClass($home,'selectPage')
        removeClass($Contact,'selectPage')
        removeClass($Disenoydesarrollo,'selectPage')
        removeClass($Seo,'selectPage')
        closeMenuMobile()

       }
       if(e.target === $Contact){

        window.location.hash = '#/Contacto'
        addClass($Contact,'selectPage')
        removeClass($Seo,'selectPage')
        removeClass($Disenoydesarrollo,'selectPage')
        removeClass($home,'selectPage')
        closeMenuMobile()
        
       }

    })


}

export { Navigation }