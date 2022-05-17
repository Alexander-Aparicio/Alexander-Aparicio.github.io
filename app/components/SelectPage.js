import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const SelectPage = ()=>{

    const d = document
    const {hash} = location
    const $Seo = d.getElementById('optimization')
    const $Disenoydesarrollo = d.getElementById('design')
    const $home = d.getElementById('inicio')
    const $Contact = d.getElementById('contact')

    
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

        case `#/Diseno-y-desarrollo`:
            addClass($Disenoydesarrollo,'selectPage')
            removeClass($Contact,'selectPage')
            removeClass($Seo,'selectPage')
            removeClass($home,'selectPage')
            break;

        case `#/Optimizacion`:
            window.location.hash = '#/Optimizacion'
            addClass($Seo,'selectPage')
            removeClass($Contact,'selectPage')
            removeClass($Disenoydesarrollo,'selectPage')
            removeClass($home,'selectPage')
            break;

            case `#/Contacto`:
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