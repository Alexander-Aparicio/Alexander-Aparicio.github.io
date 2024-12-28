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

    const SubtitleOne = SubTitlesOfPages('¿Quiénes somos?','title h2')

    const pOne = parrafo(
        'p text',
        ''
    ) 
    
    const textPostOne = `
    Una academia de Tenis de mesa en Lima Norte.
    <br><br>
    Más que una simple academia, somos un espacio donde convergen jugadores de todos los niveles para disfrutar, aprender y compartir la emoción de este deporte. Nos enfocamos en crear un ambiente cálido y acogedor, donde la buena vibra y la camaradería son tan importantes como el entrenamiento. Con música que acompaña cada práctica y una decoración inspirada en los grandes del Tenis de mesa, buscamos ofrecer una experiencia única que te motive a dar lo mejor de ti en cada entrenamiento. Si eres un joven adulto, universitario o profesional que busca reconectar con su pasión por el tenis de mesa, ¡este es tu lugar!
    `
    pOne.innerHTML = textPostOne

    const imgPost1 = image('desarrollo-web','app/assets/style-webs/20_academia.jpg','img')

    articleOne.appendChild(SubtitleOne)
    articleOne.appendChild(pOne)
    articleOne.appendChild(imgPost1)

// ------------------------------------------------------------------------------------

    const articleTwo = artic('boxTwo')
    const SubtitleTwo = SubTitlesOfPages('¿Qué ofrecemos?','title h2')

    const pPostTwo = parrafo('p text')
    
    const textPostTwo = `
    🎸Disfrutar de un ambiente único: Entrena con música que te motiva (Pop-Rock), en un espacio decorado que rinde homenaje a los grandes del tenis de mesa, creando una experiencia única y estimulante.
    <br><br>
    😁Desconectar y divertirte: Olvídate del estrés diario y sumérgete en la emoción del juego, disfrutando de un espacio diseñado para el disfrute y la sana competencia.
    <br><br>
    🙆‍♀️Conectar con otros apasionados: Conoce a personas con tus mismos intereses, comparte tu amor por el tenis de mesa y crea nuevas amistades en un ambiente cálido y acogedor.
    <br><br>
    💪Progresión constante: Aprende y mejora de forma continua, con programas de entrenamiento adaptados a todos los niveles, desde principiantes hasta jugadores avanzados.
    `

    pPostTwo.innerHTML = textPostTwo

    const imgPost2 = image('megafono','app/assets/style-webs/22_academia.jpg','img')
    

    articleTwo.appendChild(SubtitleTwo)
    articleTwo.appendChild(pPostTwo)
    articleTwo.appendChild(imgPost2)

// -------------------------------------------

// ------------------------------------------------------------------------------------

    const articleTwoN = artic('boxTwo')
    const SubtitleTwoN = SubTitlesOfPages('Suscripción y formas de Pago','title h2')

    const pPostTwoN = parrafo('p text')

    const textPostTwoN = `
    La suscripción es mensual y ofrecemos dos tipos:
    <br><br>
    <strong>Básico:</strong> Cantidad definida de sesiones de entrenamiento dentro de un período de 30 días.
    <br>
    <strong>Premium:</strong> Lo básico con la capacidad de recuperar sesiones de entrenamientos hasta una semana cumplido el período de suscripción. 
    <br><br>
    Formas de pago aceptados: Tarjeta de Crédito, débito, transferencia, Yape y Plin.
    <br><br>
    Ingresa aquí para cotizar tu sucripción.
    `
    pPostTwoN.innerHTML = textPostTwoN

    const imgPost2N = image('megafono','app/assets/svg/megafono.svg','img')


    articleTwoN.appendChild(SubtitleTwoN)
    articleTwoN.appendChild(pPostTwoN)
    articleTwoN.appendChild(imgPost2N)

// -------------------------------------------

// -------------------SECCIÓN CLIENTES------------------------

    const sectClientes = div('boxThree marginTop')

    const h2 = SubTitlesOfPages('Entrenadores :','h2 title')

    const boxLogos = div('boxCards')

    const logos = [
        { logo:'app/assets/style-webs/alex.jpg', empresa:'Alexander Aparicio' },
        { logo:'app/assets/style-webs/Joel-Larico.png', empresa:'Joel Larico' },
        { logo:'app/assets/style-webs/Miguel-Novoa.png', empresa:'Miguel Novoa' }
        // { logo:'app/assets/distinto-pe-logo.png', empresa:'Mijael Llontop' }
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
    home.appendChild(sectClientes)
    home.appendChild(BlogContent())
    home.appendChild(articleTwoN)
    
// -------------------------------------------

    return home
    
}

export {Inicio}