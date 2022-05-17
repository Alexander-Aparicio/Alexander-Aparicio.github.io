import { artic, parrafo, div, button, figure, image, figc } from "./helpers/Boxes.js"
import { TitleOfPages } from "./helpers/Titles.js"

const Banner = ()=>{

    const d = document

    const banner = artic('banner')

// --------------------------------------------
    const h1 = TitleOfPages('CREAMOS TU PÁGINA WEB','banner-h1')

    const textBanner = div('banner-p')

    const p1 = parrafo('p',`100% ¡Optimizado!`)

    textBanner.appendChild(p1)
// -------------------------------------------

    const boxBtn = div('banner-btn')

    const cta = button('banner-cta','Contactar')

    boxBtn.appendChild(cta)

// -------------------------------------------
// -------------------------------------------

    const carousel = div('carousel-automatic')

    const boxCards = div('box-carousel')

    const cards = [

        {img:'app/assets/style-webs/app.png', name:'Tecnología'},
        {img:'app/assets/style-webs/cafe.png', name:'Negocios'},
        {img:'app/assets/style-webs/creative.png', name:'Juvenil'},
        {img:'app/assets/style-webs/crypto.png', name:'Finanzas'},
        {img:'app/assets/style-webs/mentor.png', name:'Profesionales'},
        {img:'app/assets/style-webs/ong.png', name:'ONG'},
        {img:'app/assets/style-webs/prime.png', name:'Ecommerce'},
        {img:'app/assets/style-webs/seller.png', name:'Tienda'},
        {img:'app/assets/style-webs/stream.png', name:'Stream'}

    ]

    const fragment = d.createDocumentFragment()

    cards.forEach((el)=>{

        const card = figure('card-carousel boxShadowStrong')

        const img = image(`${el.name}`,`${el.img}`,`img-carousel`)

        const name = figc(`${el.name}`,'name-card')

        card.appendChild(img)
        card.appendChild(name)

        fragment.appendChild(card)

    })

    boxCards.appendChild(fragment)

    carousel.appendChild(boxCards)

// -------------------------------------------


    banner.appendChild(h1)
    banner.appendChild(textBanner)
    banner.appendChild(carousel)

    // banner.appendChild(boxBtn)


// -------------------------------------------

    return banner

}

export { Banner }