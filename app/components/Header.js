import { button, div, enlace, figc, figure, image } from "./helpers/Boxes.js"
import { Menu } from "./Menu.js"

const Header = ()=>{

    const d = document
    const $header = d.getElementById('header')
 //--------------------------------------------
   
   const branding = enlace(
      '#',
      'brandingHeader',
      'branding',
      'no-follow',
   )

   const card = figure('boxBranding')

   const img = image('logo','app/assets/logo-tenis-de-mesa-revolution-grande.png')

   const nameWeb = figc('Academia Revolution','nameWeb')

   card.appendChild(img)
   card.appendChild(nameWeb)
   branding.appendChild(card)
   // ----------------------------------------------------

  // BOX TOP MENU
  
  const boxTopMenu = div('menuTop')

   // BOTÓN DE CAMBIO DE COLOR
   const colorChangeButton = div('themeChange boxShadowStrong')
   const sun = image('sol','app/assets/svg/sun.svg','sun')
   const moon = image('luna','app/assets/svg/moon.svg','moon none')

   colorChangeButton.appendChild(sun)
   colorChangeButton.appendChild(moon)

   const boxThemes = div('boxThemes none')
   const btnThemeDark = button('theme','D','dark')
   const btnThemePink = button('theme','P','pink')
   const btnThemeLight = button('theme','L','light')

   boxThemes.appendChild(btnThemePink)
   boxThemes.appendChild(btnThemeLight)
   boxThemes.appendChild(btnThemeDark)

    // -------

   boxTopMenu.appendChild(colorChangeButton)

 // -------------------------------------------
   
 //-------------------------------------------- 

   $header.appendChild(branding)
   
    boxTopMenu.appendChild(Menu())

   $header.appendChild(boxTopMenu)
   $header.appendChild(boxThemes)

}

export { Header }