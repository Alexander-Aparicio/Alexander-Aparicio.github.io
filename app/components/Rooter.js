import { Blog } from "../pages/Blog.js"
import { Inicio } from "../pages/Inicio.js"
import { Suscripcion } from "../pages/Suscripcion.js"
import { Horarios } from "../pages/Horarios.js"
import { Carousel } from "./Carousel.js"
import { ChangeTheme } from "./ChangeTheme.js"
//import { DoorRender } from "./DoorRender.js"
import { Form } from "./FormContact.js"
import { IndiceScroll } from "./IndiceScroll.js"
import { Navigation } from "./Navigation.js"
import { OnSocialMedia, SocialMedia } from "./SocialMedia.js"
import { MenuMobile } from "./MenuMobile.js"
import { HoverCard } from "./HoverGallery.js"

const Rooter = ()=>{

    const w = window
    const $main = document.getElementById('root')
    const regExp = /^./

    let { hash } = location
    let mediaQuery = window.matchMedia("(min-width: 960px)")
    const mediaQueryM = window.matchMedia("(max-width: 959px)")
    const Handler = async()=>{
        
        switch (hash) {

            case `#/Inicio`: 

            $main.innerHTML = ''
            $main.appendChild(Inicio())
            if(mediaQuery.matches){$main.appendChild(SocialMedia());OnSocialMedia()}
            if(mediaQueryM.matches){MenuMobile()} 
            ChangeTheme()
            Carousel()
            //DoorRender()
            IndiceScroll()
            Navigation()
 
            break;

            case '': 

                $main.innerHTML = ''
                $main.appendChild(Inicio())
                if(mediaQuery.matches){$main.appendChild(SocialMedia());OnSocialMedia()}
                if(mediaQueryM.matches){MenuMobile()} 
                ChangeTheme()
                Carousel()
                //DoorRender()
                IndiceScroll()
                Navigation()
     
            break;

            case `#/suscripcion`: 

                $main.innerHTML = ''
                $main.appendChild(Suscripcion())
                if(mediaQuery.matches){$main.appendChild(SocialMedia());OnSocialMedia()}
                if(mediaQueryM.matches){MenuMobile()} 
                Navigation()
                HoverCard()
     
                break;
    
            case `#/horarios`:

                $main.innerHTML = ''
                $main.appendChild(Horarios())
                if(mediaQuery.matches){$main.appendChild(SocialMedia());OnSocialMedia()}
                if(mediaQueryM.matches){MenuMobile()} 
                Navigation()
         
                break;

            case `#/blog`:

                $main.innerHTML = ''
                    
                $main.appendChild(Blog())
                if(mediaQuery.matches){$main.appendChild(SocialMedia());OnSocialMedia()}
                if(mediaQueryM.matches){MenuMobile()} 
                Navigation()
                Form()
             
                break;
        
            default: 
                
                break;
                
        }
    }
    Handler()
}

export { Rooter }