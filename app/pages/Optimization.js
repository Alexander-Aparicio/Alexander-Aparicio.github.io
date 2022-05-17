import { addClass } from "../components/helpers/AddRemoveClass.js"
import { artic, button, div, image, parrafo } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages, TitleOfPages } from "../components/helpers/Titles.js"
const Optimization = ()=>{

    const d = document
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
    const page = artic('optimization webs')

// -------------------BANNER-----------------------

    const banner = div('banner-design boxOne')
    const title = TitleOfPages('OPTIMIZANDO TU SITIO WEB','h1 title')
    const description = parrafo('description p text','')

    const contentDescription = `
    Corrección de los errores SEO<br>
    Corrección de componentes de UI<br>
    Eliminación de funcionalidades que te estorban<br>
    Creación de componentes para obtener potenciales clientes
    `
    description.innerHTML = contentDescription

    const imageBanner = image('programación','app/assets/optimization.png','img imgBannerOp')

    banner.appendChild(title)
    banner.appendChild(description)
    banner.appendChild(imageBanner)

// --------------------POST ONE-------------------------

    const postOne = div('postOne boxOne')

    const postOneSubtitleOne = SubTitlesOfPages('Optimización SEO','h2 title')

    const postOneTextOne = parrafo('p text','')

    const postOneText1 = `
    Hacemos auditoría SEO para encontrar los errores.<br><br>
    Realizamos las pruebas de velocidad recomendadas por Google y otras más.<br><br>
    Analizamos a las webs de tus competidores y las palabras clave por la cuál compiten.<br><br>
    Hacemos las correcciones y elaboramos una o más estrategías para empezar a posicionar<br>tu sitio web en los navegadores.<br><br>
    `
    postOneTextOne.innerHTML = postOneText1

    const imgPostOne = image('Seo para navegadores','app/assets/img-seo.jpg','img')


    postOne.appendChild(postOneSubtitleOne)
    postOne.appendChild(postOneTextOne)
    postOne.appendChild(imgPostOne)
   
// -------------------POST TWO----------------------------------------

    const postTwo = div('postOne boxTwo')

    const postTwoSubtitleOne = SubTitlesOfPages('Tipos de problemas con los que podemos ayudarte  ','h2 title')

    const postTwoTextOne = parrafo('p text','')

    const postTwoText1 = `
    La página web no se ve completa o se ve a medias en pantallas de celualr o tablets.<br><br>
    Quiero ocultar cierta información y no se como hacerlo.<br><br>
    Compré un dominio y quiero trasladar mi sitio web.<br><br>
    Quiero cambiar la apariencia de mi sitio web.<br><br>
    Quiero agregar un componente nuevo a mi sitio web.<br><br>
    `
    postTwoTextOne.innerHTML = postTwoText1

    const imgPostTwo = image('Seo para navegadores','app/assets/reparaciones.png','img')


    postTwo.appendChild(postTwoSubtitleOne)
    postTwo.appendChild(postTwoTextOne)
    postTwo.appendChild(imgPostTwo)

// --------------------------------------------------

    page.appendChild(banner)
    page.appendChild(postOne)
    page.appendChild(postTwo)

// ------------------------------------------------------------------

    return page

}

export { Optimization }
