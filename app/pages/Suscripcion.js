import { artic, button, div, enlace, figc, figure, image, parrafo } from "../components/helpers/Boxes.js"
import { SubTitlesOfPages, TitleOfPages } from "../components/helpers/Titles.js"

const Suscripcion = ()=>{

    const d = document

    const design = d.createElement('article')

    design.setAttribute('class','webs')

// -------------------BANNER-----------------------

    const banner = div('banner-design boxOne')
    const title = TitleOfPages('SUBCRIPCIONES','h1 title')
    const description = parrafo('description p text','')

    const contentDescription = `
    Si estás comenzando te regalamos una clase de muestra y si ya tienes experiencia una sesión de entrenamiento, para ello realizas una pre-inscripción llenando un formulario y luego de recibir tu clase o sesión de entrenamiento decides si tu inscripción. 
    `
    description.innerHTML = contentDescription

    const imageBanner = image('diseño web','app/assets/style-webs/8_academia.jpg', 'img')

    banner.appendChild(title)
    banner.appendChild(description)
    banner.appendChild(imageBanner)

    // --------------------POST ONE-------------------------

    const postOne = div('boxOneTaller')

    const postOneSubtitleOne = SubTitlesOfPages('Subcripciones para Taller de Verano','h2 title')

    const postOneTextOne = parrafo('p text','')

    const postOneText1 = `
    Nuestro taller de verano está dirigido para niños y adolescentes que desean conocer y aprender los aspectos técnicos básicos del tenis de mesa de una manera divertida.
    <br><br>
    `
    postOneTextOne.innerHTML = postOneText1

    const postOneText2 = `
    Modalidad 2 veces por semana:<br><br>
    ☀ INICIO : 7 de enero<br>
    🏁 FIN : 27 de febrero<br>
    🏓 16 Clases (Enero y Febrero)<br>
    ✅ Clases de 1 hora.<br>
    ✅ Se prestan raquetas.<br>
    👉 Costo por todo el taller:<br>
    💥 S/ 260.00 <br>
    `
    const postOneTextTwo = parrafo('p text','')
    postOneTextTwo.innerHTML = postOneText2

    const postOneText3 = `
    Modalidad 3 veces por semana:<br><br>
    ☀ INICIO : 6 de enero<br>
    🏁 FIN : 28 de febrero<br>
    🏓 24 Clases (Enero y Febrero)<br>
    ✅ Clases de 1 hora.<br>
    ✅ Se prestan raquetas.<br>
    👉 Costo por todo el taller:<br>
    💥 S/ 300.00 <br>
    `
    const postOneTextThree = parrafo('p text','')
    postOneTextThree.innerHTML = postOneText3


    const imgPostOne = image('diseño web','app/assets/style-webs/42_academia.jpg','img')
    const postOneTextFour = parrafo('p text nota','')
    const textText = `
    <br><strong class="bold">NOTA:</strong> “🔥 Obtén el 10% de descuento si se inscribe hasta el 31 de diciembre“.
    `
    const postForm = div('formulario')
    postOneTextFour.innerHTML = textText

    postForm.innerHTML = `
    <iframe height='500px' width='100%' frameborder='0' allowTransparency='true' scrolling='auto' src='https://creatorapp.zohopublic.com/revolutionsports/academia/form-embed/Inscripciones_Taller_de_Verano/NgnMVwmsT1gA74KhyQrX8F0WeqH8WCsFkEu26e0yfJaM2r4h5DvHDpfOUnE69R9KXQJjW9eguEEenvukdaqvAC1wyfRQ8CHuV0Ct'></iframe>
    `

    postOne.appendChild(postOneSubtitleOne)
    postOne.appendChild(postOneTextOne)
    postOne.appendChild(imgPostOne)
    postOne.appendChild(postOneTextTwo)
    postOne.appendChild(postOneTextThree)
    postOne.appendChild(postOneTextFour)
    //postOne.appendChild(postForm)

    // --------------------POST TWO-------------------------------

    const postTwo = div('boxOneTaller')

    const postTwoSubtitleOne = SubTitlesOfPages('Subcripciones Academia','h2 title')

    const postTwoTextOne = parrafo('p','')

    const postTwotext1 = `
    La academia está orientado al aprendizaje técnico para aquellas personas que están empezando en el tenis de mesa y para los que ya cuentan con experiencia y una base técnica nos centramos en mejorar su juego perfeccionando sus habilidades. Nos preocupamos por brindar un buen ambiente para que te sientas cómodo y la pases genial con nosotros. 
    <br><br>
    `
    postTwoTextOne.innerHTML = postTwotext1

    const postTwoTextTwo = parrafo('p','')
    const postTwotext2 = `
    🏓<strong class="bold">SUSCRIPCIÓN BÁSICA</strong><br>
    📣Características:<br>
    ✅No hay recuperación de clases por inasistencia.<br>
    ✅Ranking con costo de 5 soles.<br>
    👉Precios mensuales:<br>
    💥4 clases S/125<br>
    💥8 clases S/185<br>
    💥12 clases S/245<br>
    💥16 clases S/285<br>
    `
    postTwoTextTwo.innerHTML = postTwotext2

    const postTwoTextThree = parrafo('p','')
    const postTwotext3 = `
    🏓<strong class="bold">SUSCRIPCIÓN PREMIUM</strong><br>
    📣Características:<br>
    ✅Puedes extender 1 semana el período de suscripción.<br>
    ✅Puedes recuperar clases por inasistencia.<br>
    ✅Ranking gratuito.<br>
    👉Precios mensuales:<br>
    💥4 clases S/140<br>
    💥8 clases S/200<br>
    💥12 clases S/260<br>
    💥16 clases S/300<br>
    `
    postTwoTextThree.innerHTML = postTwotext3

    const postTwoTextFour = parrafo('p nota','')
    const postTwotext4 = `
    La suscripción es por una cantidad de clases que debes consumir en un período mensual, tú defines tu horario pero puedes consumir todas tus clases antes de terminar el período de 30 días previa coordinación con el profesor.<br><br>
    <strong class="bold">NOTA:</strong> Aceptamos pago por Yape, Plin, transferencia y tarjeta de crédito.
    `
    postTwoTextFour.innerHTML = postTwotext4

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

    

    postTwo.appendChild(postTwoSubtitleOne)
    postTwo.appendChild(postTwoTextOne)
    postTwo.appendChild(postTwoTextThree)
    postTwo.appendChild(postTwoTextTwo)
    postTwo.appendChild(postTwoTextFour)

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


    //boxOnePostThree.appendChild(postThreeSubtitleTwo)
    //boxOnePostThree.appendChild(postThreeTextTwo)
    //boxOnePostThree.appendChild(imgWordpress)
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

    //boxTwoPostThree.appendChild(postThreeSubtitleThree)
    //boxTwoPostThree.appendChild(postThreeTextThree)
    //boxTwoPostThree.appendChild(imgReact)
    // ---- 

    //postThree.appendChild(postThreeSubtitleOne)
    //postThree.appendChild(postThreeTextOne)
    //postThree.appendChild(boxOnePostThree)
    //postThree.appendChild(boxTwoPostThree)


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
    //design.appendChild(postFour)

    return design

}

export { Suscripcion }