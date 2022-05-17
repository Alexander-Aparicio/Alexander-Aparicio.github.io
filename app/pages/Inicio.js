import { Banner } from "../components/Banner.js"
import { BlogContent } from "../components/BlogContent.js"
import { artic, div, figc, figure, image, parrafo } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages } from "../components/helpers/Titles.js"
import { Menu } from "../components/Menu.js"

const Inicio = ()=>{

    const d = document

    const home = div('home')

// --------------------------------------------

    const articleOne = artic('boxOne')

    const SubtitleOne = SubTitlesOfPages('¿Necesitas una página web?','title h2')

    const pOne = parrafo(
        'p text',
        ''
    ) 
    
    const textPostOne = `
    Conmigo podrás obtener eso y más...
    <br><br>
    Es sencillo no solo nos interesa construir correctamente sitios web 
    eso lo hace todo buen desarrollador, nosotros vamos más allá aplicando SEO 
    y marketing en la creación de tu sitio web. Nos interesa que logres obtener éxito
    para así presumir que contribuimos a ello.
    `
    pOne.innerHTML = textPostOne

    const imgPost1 = image('desarrollo-web','app/assets/svg/tienda.svg','img')

    articleOne.appendChild(SubtitleOne)
    articleOne.appendChild(pOne)
    articleOne.appendChild(imgPost1)

// ------------------------------------------------------------------------------------

    const articleTwo = artic('boxTwo')
    const SubtitleTwo = SubTitlesOfPages('¿Qué genera nuestro SEO y marketing en tu web?','title h2')

    const pPostTwo = parrafo('p text')
    
    const textPostTwo = `
    Hace que tu página web pueda posicionarse más rápidamente que las webs de tu competencia 
    en búscadores como Google, Firefox y Bing. Te ayudará a vender más y a fidelizar a tus clientes.
    <br><br>
    Todo esto se lográ si partes con una estrategía desde el incio y por ello nosotros estamos para orientarte. 
    `

    pPostTwo.innerHTML = textPostTwo

    const imgPost2 = image('megafono','app/assets/svg/megafono.svg','img')
    

    articleTwo.appendChild(SubtitleTwo)
    articleTwo.appendChild(pPostTwo)
    articleTwo.appendChild(imgPost2)

// -------------------------------------------

// ------------------------------------------------------------------------------------

    const articleTwoN = artic('boxTwo')
    const SubtitleTwoN = SubTitlesOfPages('¿Te conviene trabajar con nosotros?','title h2')

    const pPostTwoN = parrafo('p text')

    const textPostTwoN = `
    Si eres un profesional independiente, alguién está emprendiendo un negocio o una PYME sin duda somos la mejor opción que podrás encontrar.
    Nuestro principal objetivo es que logres tus primeros éxitos como empresa o profesional independiente.
    <br><br>
    Si ya eres un gran empresario tus necesidades son distintas y nosotros no nos estamos enfocamos en ello por ahora.
    `
    pPostTwoN.innerHTML = textPostTwoN

    const imgPost2N = image('megafono','app/assets/svg/equipo.svg','img')


    articleTwoN.appendChild(SubtitleTwoN)
    articleTwoN.appendChild(pPostTwoN)
    articleTwoN.appendChild(imgPost2N)

// -------------------------------------------

// -------------------SECCIÓN CLIENTES------------------------

    const sectClientes = div('boxThree marginTop')

    const h2 = SubTitlesOfPages('Ya estamos colaborando con:','h2 title')

    const boxLogos = div('boxCards')

    const logos = [
        { logo:'app/assets/talleres-online-peru-logo.png', empresa:'talleresonlineperu' },
        { logo:'app/assets/dioses-de-la-humanidad-logo.png', empresa:'diosesdelahumanidad' },
        { logo:'app/assets/distinto-pe-logo.png', empresa:'distinto' }
    ]

    const fragmentLogos = document.createDocumentFragment()

    logos.forEach((el)=>{

        const card = figure('card')

        const img = image(`${el.empresa}`,`${el.logo}`,'img')

        const name = figc(`${el.empresa}`,'figcaption p')

        card.appendChild(img)
        card.appendChild(name)

        fragmentLogos.appendChild(card)
    })

    boxLogos.appendChild(fragmentLogos)
    sectClientes.appendChild(h2)
    sectClientes.appendChild(boxLogos)

// -------------------------------------------

// -------------------------------------------
    home.appendChild(Banner())
    home.appendChild(articleOne)
    home.appendChild(articleTwo)
    home.appendChild(articleTwoN)
    home.appendChild(sectClientes)
    home.appendChild(BlogContent())
// -------------------------------------------

    return home
    
}

export {Inicio}