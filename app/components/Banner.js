import { artic, parrafo, div, button, figure, image, figc } from "./helpers/Boxes.js"
import { TitleOfPages } from "./helpers/Titles.js"

const Banner = ()=>{

    const d = document

    const banner = artic('banner')

// --------------------------------------------
    const h1 = TitleOfPages('¡VAMOS A JUGAR 🏓!','banner-h1')

    const textBanner = div('banner-p')

    const p1 = parrafo('p',`❤️¡Vive el tenis de mesa!`)

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

        {img:'app/assets/style-webs/12_academia.jpg', name:'Amistosos'},
        {img:'app/assets/style-webs/11_academia.jpg', name:'Entrenamientos'},
        {img:'app/assets/style-webs/42_academia.jpg', name:'Horario de niños'},
        {img:'app/assets/style-webs/21_academia.jpg', name:'Juego de Dobles'},
        {img:'app/assets/style-webs/15_academia.jpg', name:'Rankings'},
        {img:'app/assets/style-webs/30_academia.jpg', name:'Competencias externas'},
        {img:'app/assets/style-webs/43_academia.jpg', name:'Momentos de compartir'},
        {img:'app/assets/style-webs/46_academia.jpg', name:'Participación en torneos'},
        {img:'app/assets/style-webs/4_academia.jpg', name:'Celebraciones'},
        {img:'app/assets/style-webs/38_academia.jpg', name:'Aniversario'}
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