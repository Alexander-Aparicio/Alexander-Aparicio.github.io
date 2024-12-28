import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const Navigation = ()=>{

    const d = document

    d.addEventListener('click',(e)=>{

        const $Seo = d.getElementById('horarios')
        const $Disenoydesarrollo = d.getElementById('suscripcion')
        const $home = d.getElementById('inicio')
        const $Contact = d.getElementById('blog')

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

        window.location.hash = '#/horarios'
        addClass($Seo,'selectPage')
        removeClass($Contact,'selectPage')
        removeClass($Disenoydesarrollo,'selectPage')
        removeClass($home,'selectPage')
        closeMenuMobile()

       }
       if(e.target === $Disenoydesarrollo){

        window.location.hash = '#/suscripcion'
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

        window.location.hash = '#/blog'
        addClass($Contact,'selectPage')
        removeClass($Seo,'selectPage')
        removeClass($Disenoydesarrollo,'selectPage')
        removeClass($home,'selectPage')
        closeMenuMobile()
        
       }

    })


}

export { Navigation }