import { artic, button, div, enlace, figc, figure, image, parrafo } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages, TitleOfPages } from "../components/helpers/Titles.js"

const Webs = ()=>{

    const d = document

    const design = d.createElement('article')

    design.setAttribute('class','webs')

// -------------------BANNER-----------------------

    const banner = div('banner-design boxOne')
    const title = TitleOfPages('TU PÁGINA WEB','h1 title')
    const description = parrafo('description p text','')

    const contentDescription = `
    Diseñado pensando en quién es tu cliente.<br><br>
    Construimos sitios web optimizados para los buscadores como Google.<span>&#160;</span> <br><br>
    Te regalamos una estrategía para posicionarte. 
    `
    description.innerHTML = contentDescription

    const imageBanner = image('diseño web','app/assets/style-webs/mentor.png', 'img')

    banner.appendChild(title)
    banner.appendChild(description)
    banner.appendChild(imageBanner)

    // --------------------POST ONE-------------------------

    const postOne = div('boxOne')

    const postOneSubtitleOne = SubTitlesOfPages('¿Qué tipos de diseños te ofrecemos?','h2 title')

    const postOneTextOne = parrafo('p text','')

    const postOneText1 = `
    Te ofrecemos diseños que están orientados al SEO es decir ayudarán  
    para que tu página web pueda competir por los primeros lugares cuando alguién busca 
    en Google algo relacionado a tus servicios o productos.
    <br> Nos interesa que los diseños sean bonitos pero no buscamos competir en 
    ello sino en que logren el objetivo más preciado por nuestros clientes, que 
    sean utiles para generar ganancias.
    `
    postOneTextOne.innerHTML = postOneText1

    const imgPostOne = image('diseño web','app/assets/my-design.png','img')

    const postOneTextTwo = parrafo(
        'p nota text',
        ''
    )
    const textText = `
    <strong class="bold">NOTA:</strong> “Las páginas web con mayor cantidad de visitas no son las más bonitas sino las más útiles“.
    `

    postOneTextTwo.innerHTML = textText

    postOne.appendChild(postOneSubtitleOne)
    postOne.appendChild(postOneTextOne)
    postOne.appendChild(imgPostOne)
    postOne.appendChild(postOneTextTwo)


    // --------------------POST TWO-------------------------------

    const postTwo = div('boxGallery')

    const postTwoSubtitleOne = SubTitlesOfPages('¿Qué tipos de páginas web te ofrecemos?','h2 title')

    const postTwoTextOne = parrafo('p','')

    const postTwotext1 = `
    Blogs -
    Catálogos -
    Tiendas -
    Aplicaciones web.
    `
    const galleryWebs = div('gallery')

    const cards = [
        {img:'app/assets/style-webs/app.png', alt:'página web estilo app', styleC:'card-design', id:'designApp', nick:'Estilo App'},
        {img:'app/assets/style-webs/cafe.png', alt:'página web estilo negocios', styleC:'card-design', id:'designNegocios', nick:'Estilo Negocio Local'},
        {img:'app/assets/style-webs/creative.png', alt:'página web estilo juvenil', styleC:'card-design', id:'designJuvenil', nick:'Estilo Creativo'},
        {img:'app/assets/style-webs/catalogo.png', alt:'página web Catálogo', styleC:'card-design', id:'designCatalogo', nick:'Catálogo'},
        {img:'app/assets/style-webs/mentor.png', alt:'página web estilo portafolio de profesionale', styleC:'card-design', id:'designPortafolio', nick:'Estilo Profesionales'},
        {img:'app/assets/style-webs/ong.png', alt:'página web estilo organizaciones', styleC:'card-design', id:'designOng', nick:'Estilo Organización'},
        {img:'app/assets/style-webs/educacion.png', alt:'página web para institución educativa', styleC:'card-design', id:'designEducacion', nick:'Educación'},
        {img:'app/assets/style-webs/prime.png', alt:'página web estilo Ecommerce', styleC:'card-design', id:'designEcommerce', nick:'Estilo Eccomerce'},
        {img:'app/assets/style-webs/salud.png', alt:'página web para salud', styleC:'card-design', id:'designSalud', nick:'Salud'},
        {img:'app/assets/style-webs/seller.png', alt:'página web estilo Tienda-catalogo', styleC:'card-design', id:'designTienda', nick:'Estilo Tienda'},
        {img:'app/assets/style-webs/blog.png', alt:'página web para blog', styleC:'card-design', id:'designBlog', nick:'Blog'},
        {img:'app/assets/style-webs/personal.png', alt:'página web profesional independiente', styleC:'card-design', id:'designPersonal', nick:'Personal'},
        {img:'app/assets/style-webs/stream.png', alt:'página web estilo tecnologíco', styleC:'card-design', id:'designStream', nick:'Estilo Stream'},
        {img:'app/assets/style-webs/music.png', alt:'página web músicos', styleC:'card-design', id:'designMusic', nick:'Music'},
        {img:'app/assets/style-webs/crypto.png', alt:'página web estilo finanzas-economía', styleC:'card-design', id:'designFinanzas', nick:'Finanzas'},
        {img:'app/assets/style-webs/tematico.png', alt:'página web temático', styleC:'card-design', id:'desigTematico', nick:'Temático'}
    ]

    const gallery = d.createDocumentFragment()

    cards.forEach((el)=>{

        const card = figure(`${el.styleC} boxShadowStrong card`)

        const img = image(`${el.alt}`,`${el.img}`,'img','','name',`${el.id}`)

        const nameCard = figc(`${el.nick}`,'figcaption',`${el.id}`)
        
        card.appendChild(img)
        card.appendChild(nameCard)

        gallery.appendChild(card)

    })

    galleryWebs.appendChild(gallery)

    postTwoTextOne.innerHTML = postTwotext1

    postTwo.appendChild(postTwoSubtitleOne)
    postTwo.appendChild(postTwoTextOne)
    postTwo.appendChild(galleryWebs)

    // -------------------POST THREE-------------------------------

    const postThree = div('boxInfo')

    const postThreeSubtitleOne = SubTitlesOfPages('¿Cómo trabajamos?','h2 title head')

    const postThreeTextOne = parrafo('p text headText','')

    const postThreeText1 = `
    Comenzamos con una reunión virtual o presencial en el cuál 
    indentificaremos el perfil de tus clientes y las palabras claves 
    o keywords para tu sitio web, luego el cliente escoje la metodología 
    para la creación y proseguimos según lo escogido.
    `
    postThreeTextOne.innerHTML = postThreeText1

    // ---
    const boxOnePostThree = artic('webWordPress boxTwo')

    const postThreeSubtitleTwo = SubTitlesOfPages('Con WordPress','h2 title')

    const postThreeTextTwo = parrafo('p text')

    const postThreeText2 = `
    Se te presentará modelos de páginas web de la plantilla GeneratePress del cuál deberás escoger uno.
    <br><br>Editamos la plantilla para personalizarla con tu marca.
    <br><br>Se introduce el contenido (Fotos de productos, banners, contenido de texto, video).
    <br><br>Se te presentá el sitio web completo sin indexar a Google.
    <br><br>Compruebas que todo este bien y luego se  indexa a Google con toda la configuración SEO.
    `
    postThreeTextTwo.innerHTML = postThreeText2

    const imgWordpress = image('dashboard','app/assets/style-webs/theme.png','img')


    boxOnePostThree.appendChild(postThreeSubtitleTwo)
    boxOnePostThree.appendChild(postThreeTextTwo)
    boxOnePostThree.appendChild(imgWordpress)
    // ---

    const boxTwoPostThree = artic('webAmedida boxTwo')

    const postThreeSubtitleThree = SubTitlesOfPages('Con React & firebase','title h2')

    const postThreeTextThree = parrafo('p text')

    const postThreeText3 = `
    Segunda reunión para consolidar una propuesta de arquitectura y funcionalidad del sitio web. 
    <br><br>Pasado unos días se te hace la presentación visual del diseño completo de todo el sitio web, para que lo apruebes.
    <br><br>Aprobado el diseño empezamos a construir con las tecnologías ya mencionadas.
    <br><br>Pasado entre 1 a 4 semanas se te entrega el sitio web.
    `

    postThreeTextThree.innerHTML = postThreeText3

    const imgReact = image('logo','app/assets/svg/react-fondo.svg','img App-logo')

    boxTwoPostThree.appendChild(postThreeSubtitleThree)
    boxTwoPostThree.appendChild(postThreeTextThree)
    boxTwoPostThree.appendChild(imgReact)
    // ---- 

    postThree.appendChild(postThreeSubtitleOne)
    postThree.appendChild(postThreeTextOne)
    postThree.appendChild(boxOnePostThree)
    postThree.appendChild(boxTwoPostThree)


    // ----------------------------POST FOUR-------------------------

    const postFour = artic('boxTech')

    const boxPostFour = div('postFour-box boxOne')
    
    const postFourSubtitleTwo = SubTitlesOfPages('¿Qué tecnologías usamos?','h2 title')
    const postFourTextTwo = parrafo('p text','')
    const postFourText2 = `
    Si necesitas una página web de bajo precio pero muy útil :
    <br>Usamos plantillas GeneratePress con WordPress.
    <br><br>Si necesitas una página web o aplicación web hecha a medida :
    <br>Usamos:
    <br>En el diseño: Figma.
    <br>En el desarrollo: TypeScript, React, Firebase.
    `
    const imgPostFour = image('Tecnologías de uso','app/assets/techs.png','img techDesign')

    postFourTextTwo.innerHTML = postFourText2

    boxPostFour.appendChild(postFourSubtitleTwo)
    boxPostFour.appendChild(postFourTextTwo)
    boxPostFour.appendChild(imgPostFour)

    postFour.appendChild(boxPostFour)

// ------------------------------------------------------------------------------

    design.appendChild(banner)
    design.appendChild(postOne)
    design.appendChild(postTwo)
    design.appendChild(postThree)
    design.appendChild(postFour)

    return design

}

export { Webs }