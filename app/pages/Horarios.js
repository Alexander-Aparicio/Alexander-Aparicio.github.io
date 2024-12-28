import { addClass } from "../components/helpers/AddRemoveClass.js"
import { artic, button, div, image, parrafo } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages, TitleOfPages } from "../components/helpers/Titles.js"
const Horarios = ()=>{

    const d = document
// ---------------------------------------------------------------------

// ---------------------------------------------------------------------
    const page = artic('optimization webs')

// -------------------BANNER-----------------------

    const banner = div('banner-design')
    const title = TitleOfPages('HORARIOS','h1 title')
    const description = div('description','')

    const contentDescription = `
    <div class="container-horario">
        <h2 class="h2 title">TALLER DE VERANO 2025</h2>
        <div class="container-grid">
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños<br>3 Veces por semana</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days p text">Lunes, Miércoles y Viernes</p>
                    </div>
                    <div>
                        <p class="hora p text">10:00 am - 11:00 am</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes<br>3 Veces por semana</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days p text">Lunes, Miércoles y Viernes</p>
                    </div>
                    <div>
                        <p class="hora p text">11:15 am - 12:15 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños<br>2 Veces por semana</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days p text">Martes y Jueves</p>
                    </div>
                    <div>
                        <p class="hora p text">10:00 am - 11:00 am</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes<br>2 Veces por semana</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days p text">Martes y Jueves</p>
                    </div>
                    <div>
                        <p class="hora p text">11:15 am - 12:15 pm</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    description.innerHTML = contentDescription

    const imageBanner = image('programación','app/assets/optimization.png','img imgBannerOp')

    banner.appendChild(title)
    banner.appendChild(description)
    //banner.appendChild(imageBanner)

// --------------------POST ONE-------------------------

    const postOne = div('postOne banner-design')

    const postOneSubtitleOne = SubTitlesOfPages('ACADEMIA','h2 title')

    const postOneTextOne = div('description','')

    const postOneText1 = `
          <div class="container-grid">
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños & adolescentes</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Martes</p>
                    </div>
                    <div>
                        <p class="hora p text">5:00 pm - 6:30 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños & adolescentes</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Jueves</p>
                    </div>
                    <div>
                        <p class="hora p text">5:00 pm - 6:30 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños & adolescentes</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Viernes</p>
                    </div>
                    <div>
                        <p class="hora p text">5:00 pm - 6:30 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños & adolescentes</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Sábados</p>
                    </div>
                    <div>
                        <p class="hora p text">3:30 pm - 5:00 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Niños & adolescentes</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Domingos</p>
                    </div>
                    <div>
                        <p class="hora p text">9:00 am - 10:30 am</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes & Adultos</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Martes</p>
                    </div>
                    <div>
                        <p class="hora p text">7:00 pm - 8:30 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes & Adultos</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Jueves</p>
                    </div>
                    <div>
                        <p class="hora p text">7:00 pm - 8:30 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes & Adultos</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Viernes</p>
                    </div>
                    <div>
                        <p class="hora p text">7:00 pm - 8:30 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes & Adultos</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Sábados</p>
                    </div>
                    <div>
                        <p class="hora p text">5:00 pm - 6:30 pm</p>
                        <p class="hora p text">6:45 pm - 8:15 pm</p>
                    </div>
                </div>
            </div>
            <div class="horario">
                <div class="category">
                    <h4 class="h3">Adolescentes & Adultos</h4>
                </div>
                <div class="container">
                    <div>
                        <p class="days text">Domingos</p>
                    </div>
                    <div>
                        <p class="hora p text">10:30 am - 12:00 am</p>
                    </div>
                </div>
            </div>
        </div>
    `
    postOneTextOne.innerHTML = postOneText1

    const imgPostOne = image('Seo para navegadores','app/assets/img-seo.jpg','img')


    postOne.appendChild(postOneSubtitleOne)
    postOne.appendChild(postOneTextOne)
    //postOne.appendChild(imgPostOne)
   
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


    //postTwo.appendChild(postTwoSubtitleOne)
    //postTwo.appendChild(postTwoTextOne)
    //postTwo.appendChild(imgPostTwo)

// --------------------------------------------------

    page.appendChild(banner)
    page.appendChild(postOne)
    //page.appendChild(postTwo)

// ------------------------------------------------------------------

    return page

}

export { Horarios }
