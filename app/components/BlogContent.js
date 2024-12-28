import { div, artic, parrafo, image, enlace, sec, button, figure } from "./helpers/Boxes.js"
import { SubTitlesOfPages } from "./helpers/Titles.js"

const BlogContent = ()=>{

    const boxBlog = div('blog')

    const boxOne = artic('boxFour')

    const h2One = SubTitlesOfPages('Sobre nuestros entrenadores','h2 title')

    const img = image('avatar','app/assets/style-webs/16_academia.jpg','img')
 
    const text1 = `
    <strong>Alexander Aparicio:</strong> Cofundador y entrenador certificado ITTF. Ex-entrenador en la Asoc. Monica Liyau y actual entrenador en Colegio Claretiano.
    <br><br>
    <strong>Miguel Novoa:</strong> Cofundador y entrenador certificado FPDTM. Ex-entrenador de Colegio Altair y actual entrenador en la Asoc. Monica Liyau.
    <br><br>
    <strong>Joel Larico:</strong> Cofundador, entrenador y juez certificado ITTF. Ex-entrenador de Colegio Margarita y actual juez activo para Latino américa.
    `

    const textOne = parrafo('p text','')

    textOne.innerHTML = text1

    // -----------------------------------------------

    // ------------------INDICE-------------------------

    // const boxTwo = artic('boxFive')

    // const indice = div('grid')

    // const h2Two = SubTitlesOfPages('Preguntas frecuentes','h2 title')
    // // ----------------------
    // indice.appendChild(h2Two)
    // // ----------------------

    // boxTwo.appendChild(indice)

    // -----------------------------------------------

    // ------------------THEME ONE-----------------------------

    const boxThemeOne = artic('themeOne blogPost','1')

    const contentThemeOne = `
    <h2 class="h2 title" id="">
    Preguntas frecuentes
    </h2>
    <h3 class="h3" id="">
    ¿Realizan competencias?
    </h3>

    <p class="p">
        Sí, en la academia realizamos competencias internas y también se realizan amistosos con otras academias o clubes.
    </p>

    <div class="container-cards">

    <img src="app/assets/style-webs/15_academia.jpg" class="">

    <img src="app/assets/style-webs/1_academia.jpg" alt="ilustración-sitio-web" class="">
                    
    <img src="app/assets/style-webs/7_academia.jpg" alt="ilustración-página-web" class="">

    </div>

    <p class="p">
        Organizamos rankings abiertos todas las semanas y compentencias internas una vez al mes.
    </p>

    <h3 class="h3" id="p2">
    ¿Cuántos alumnos por sesión de entrenamiento hay?
    </h3>

    <p class="p">
        La cantidad es variable con un máximo de 11 alumnos.
    </p>

    <h3 class="h3">
        ¿Realizan talleres de verano?
    </h3>

    <p class="p">
        Sí, los talleres de verano se dictan solo en enero y febrero.
    </p>
    
    <h3 class="h3">
    ¿Puedo ir con acompañante?
    </h3>

    <p class="p">
        Por supuesto, puedes venir con un acompañante, tenemos un espacio para ellos y contamos con Wifi.
    </p>  
    `
    boxThemeOne.innerHTML = contentThemeOne


    // --------------------------------------------

    boxOne.appendChild(h2One)
    boxOne.appendChild(img)
    boxOne.appendChild(textOne)
    boxBlog.appendChild(boxOne)
    //boxBlog.appendChild(boxTwo) 
    boxBlog.appendChild(boxThemeOne)
    //boxBlog.appendChild(boxThemeTwo)
    //boxBlog.appendChild(boxThemeThree)
    //boxBlog.appendChild(boxThemeFour)
    //boxBlog.appendChild(boxThemeFive)
    //boxBlog.appendChild(boxThemeSix)

    // -----------------------------------------------

    return boxBlog

}

export { BlogContent }