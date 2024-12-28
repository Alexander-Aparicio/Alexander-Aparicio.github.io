import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const SelectPage = ()=>{

    const d = document
    const {hash} = location
    const $Seo = d.getElementById('horarios')
    const $Disenoydesarrollo = d.getElementById('suscripcion')
    const $home = d.getElementById('inicio')
    const $Contact = d.getElementById('blog')

    console.log(hash)
    switch (hash) {

        case ``:
            addClass($home,'selectPage')
            removeClass($Contact,'selectPage')
            removeClass($Disenoydesarrollo,'selectPage')
            removeClass($Seo,'selectPage')
            break;

        case `#/Inicio`:
            addClass($home,'selectPage')
            removeClass($Contact,'selectPage')
            removeClass($Disenoydesarrollo,'selectPage')
            removeClass($Seo,'selectPage')
            break;

        case `#/suscripcion`:
            addClass($Disenoydesarrollo,'selectPage')
            removeClass($Contact,'selectPage')
            removeClass($Seo,'selectPage')
            removeClass($home,'selectPage')
            break;

        case `#/horarios`:
            window.location.hash = '#/horarios'
            addClass($Seo,'selectPage')
            removeClass($Contact,'selectPage')
            removeClass($Disenoydesarrollo,'selectPage')
            removeClass($home,'selectPage')
            break;

            case `#/blog`:
                addClass($Contact,'selectPage')
                removeClass($Seo,'selectPage')
                removeClass($Disenoydesarrollo,'selectPage')
                removeClass($home,'selectPage')
            break;
    
        default:
            break;
    }

}

export { SelectPage }