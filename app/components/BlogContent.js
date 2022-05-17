import { div, artic, parrafo, image, enlace, sec, button, figure } from "./helpers/Boxes.js"
import { SubTitlesOfPages } from "./helpers/Titles.js"

const BlogContent = ()=>{

    const boxBlog = div('blog')

    const boxOne = artic('boxFour')

    const h2One = SubTitlesOfPages('Dato Cultural','h2 title')

    const img = image('avatar','app/assets/avatar-alex1.png','img')
 
    const text1 = `
    En 1990, se creó el primer sitio web por Tim Berners- Lee quien, a partir de esto, estableció las
    bases para el desarrollo y estudio progresivo de dichas plataformas virtuales por empresas de
    tecnología.
    <br><br>
    En la actualidad existen diversos modos de crear un sitio web porque nuevas tecnologías surgieron
    ante las necesidades del mercado, incluso no hace falta saber de programación para crear un sitio web, pero
    no te confundas, todo lo que hay en la web es código y programación, lo que sucede es que se crearon
    programas informáticos como los CMS (Sistemas de Gestión de Contenidos) que permite crear sitios web 
    con plantillas ya creadas por desarrolladores de esta manera no tienes que escribir código sino solo 
    introducir el contenido (texto, imágenes, videos) que quieres que vea tu audiencia.
    `

    const textOne = parrafo('p text','')

    textOne.innerHTML = text1

    // -----------------------------------------------

    // ------------------INDICE-------------------------

    const boxTwo = artic('boxFive')

    const indice = div('grid')

    const h2Two = SubTitlesOfPages('Preguntas frecuentes','h2 title')
    // ----------------------
    indice.appendChild(h2Two)
    // ----------------------

    const list = document.createDocumentFragment()

    const questions = [
        { question:'¿Qué es la web, sitio web y página web?', id:'q1'},
        { question:'¿Qué es lo más importante hoy en día?', id:'q2'},
        { question:'¿Cómo potenciar mi sitio web?', id:'q3'},
        { question:'¿Qué tipos de sitios web existen?', id:'q4'},
        { question:'¿Cuánto cuesta un sitio web en Perú?', id:'q5'},
        { question:'¿Qué debo saber antes adquirir un sitio web?', id:'q6'},
        
    ]
    // { question:'¿Qué es un desarrollador web?', href:''}

    questions.forEach((el)=>{

        const theme = parrafo('text ancla p',`${el.question}`,`${el.id}`)

        list.appendChild(theme)

    })
    // ------------------------
    indice.appendChild(list)
    // ------------------------

    const imgIndice = image('figura de robot informático','app/assets/svg/robot-laptop.svg','img')

    // ------------------------
    indice.appendChild(imgIndice)
    // ------------------------

    boxTwo.appendChild(indice)

    // -----------------------------------------------

    // ------------------THEME ONE-----------------------------

    const boxThemeOne = artic('themeOne blogPost','1')

    const contentThemeOne = `
    <h3 class="h3" id="">
    ¿Qué es la web, sitio web y página web?
    </h3>

    <p class="p">
        <strong class="strong-main">La web :</strong> significa Red de Informática 
        Mundial o World Wide Web (www), es decir, es un sistema de documentos 
        de hipertexto o hipermedia interconectados y accesibles a través de Internet. 
        Al igual que una telaraña todo está conectado con todo. 

        <br><br>
        <strong class="strong-main">Sitio web :</strong> es un conjunto de documentos 
        electrónicos (hipertexto) relacionados con una dirección IP, de manera más simple
        se puede definir como un conjunto de páginas web conectados a un dominio único y 
        particular en la web.
        
        <br><br>
        <strong class="strong-main">Página web :</strong> o página electrónica, página 
        digital o ciber-página, es un documento electrónico que puede contener texto, imágenes, sonidos, 
        videos, enlaces y muchas otras cosas, por lo general en formato HTML
        o XHTML. Se puede tener acceso a ella desde un dispositivo físico (computadoras, celulares, table,
        etc), una intranet (red informática interna) o internet.
    </p>

    <div class="container-cards">

    <img src="app/assets/web.png" alt="ilustración-web" class="">

    <img src="app/assets/pagina-web.png" alt="ilustración-sitio-web" class="">
                    
    <img src="app/assets/sitio-web.png" alt="ilustración-página-web" class="">

    </div>

    <p class="p">
        Es común el mal uso de estos términos, por ejemplo, se suele confundir página
        web o web para referirse a un sitio web.
    </p>
    `
    boxThemeOne.innerHTML = contentThemeOne

    
    // -------------------THEME TWO-------------

    const boxThemeTwo = artic('themeTwo blogPost','2')

    const contentThemeTwo = `
    <h3 class="h3" id="p2">
    Hoy ¿qué es lo más importante?
    </h3>

    <p class="p">
        La optimización, utilidad, inmediatez y la conexión emocional con el visitante del sitio web, 
        al cumplir estos requisitos podemos lograr el éxito.
        <br><br>   
        <strong>La optimización:</strong> al tratarse de sitios web a los cuales tenemos acceso a través 
        de internet utilizando navegadores o buscadores como Google, Bing y FireFox, tenemos
        que optimizar nuestro sitio web para que estos búscadores lo encuentren fácilmente, lo entiendan
        y lo muestren entre las primeras opciones de respuesta a los usuarios de nuestro interés. Esta
        optimización es llamada SEO (Search Engine Optimization).
        <br><br> 
        <strong>La utilidad e inmediatez:</strong> los creadores tienen muy en cuenta estas
        dos palabras porque, la primera, utilidad, hace referencia al beneficio que puede aprovechar el usuario al  
        consumir el contenido de un sitio web; la segunda, inmediatez, es una respuesta
        rápida a la solución que está buscando el usuario. Aplicando ambas obtenemos buena calidad en el contenido y funcionalidad del sitio web,
        estas caracteristicas se encuentran dentro del UX-UI (User Experience-User Interface).
        <br><br>
        <strong>La conexión emocional:</strong> la logramos a través de un mensaje con una redacción, colores e imágenes 
        que conecten con el visitante de nuestro sitio web, esto nos sirve para influenciar a realizar 
        determinadas acciones, que pueden ser suscribirse a un boletín, hacer una compra, inscribirse a un webinar, etc. 
        Todo esto se estudia en el copywriting que viene a ser un conjunto de técnicas en combinación con creatividad 
        para producir textos persuasivos en beneficio al Marketing y a las Ventas.
    </p>

    <figure class="imgThemeTwo">
        <img src="app/assets/designer.png" alt="ilustración-desarrollador-web">
    </figure>

    <h3 class="h3">
        Entonces, si mi web fue creada con SEO, UI-UX y Copywriting … ¿Tendrá éxito sobre las demás?
    </h3>

    <p class="p">
        La respuesta es Sí. El éxito se crea si la optimización es constante y la 
        calidad de contenido es buena para que los consumidores ingresen a tu sitio web. 
        <br><br>
        Para ganar posicionamiento en las keywords (palabras clave que buscan los usuarios) 
        de nuestro interés se debe aplicar el SEO On Page y Off Page, el primero hace  
        referencia al cumplimiento de las recomendaciones que nos da Google para la construcción
        de un sitio web, entonces el SEO On page son acciones que podemos realizar internamente en nuestro
        sitio web con el objetivo de ser más visibles e importantes para el buscador, el segundo
        hace referencia a las acciones externas que brindan un impacto positivo 
        hacia nuestro sitio web, estas acciones externas tienen relación con la autoridad que tenemos en el
        sector y se manifiesta cuando se hace una mención a nuestro sitio web desde otra.
        <br><br>
        Aplicando UI-UX y Copywriting ya estamos entrando fuertemente a estrategias del marketing 
        digital ¿Cuál es el beneficio? SER MEJORES QUE LOS DEMÁS. 
    </p>
    `
    boxThemeTwo.innerHTML = contentThemeTwo

    // -------------------THEME THREE-----------------------------------

    const boxThemeThree = artic('themeThree blogPost','3')

    const contentThemeThree = `
    <h3 class="h3">
    ¿Cómo enriquecer mi sitio web?
    </h3>

    <p class="p">

        Si quieres alcanzar el éxito, vas a tener que adaptarte al cambio 
        y construir dinámicas que persuadan y atraigan al consumidor. 
        Para ello debes aprender necesariamente:
        <br><br>
        ✔️El uso de SEO para ganar tráfico orgánico.<br><br>
        ✔️El Pixel Facebook para hacer remarketing.<br><br>
        ✔️El uso de MailChimp o plataforma similar para la automatización de envíos de correos electrónicos.<br><br>
        ✔️El uso de Google Analytics para control de la entrada y salida de lectores de la web. <br><br>
        ✔️El uso de Google Adwords para campañas de publicidad.<br><br>
        ✔️El uso de Google Search Console para detectar errores internos en el sitio web.<br><br>
        ✔️El uso de Semrush o plataforma similar para hacer estudio de keywords.<br><br>
    </p>   

    <figure class="imgThemeThree">

        <img src="app/assets/svg/developer.svg" alt="ilustración-developer">

    </figure>
            
    <p class="p">  
        <br><br>
        Si tu sitio web está en WordPress, hay herramientas adicionales que te ayudarán
        en tu crecimiento. Aquí te dejo sus nombres y son gratuitas: 

        <br><br>
        ✔️Pluging Smush: para optimizar imágenes y hacer más rápido la carga de tu sitio web. 
        <br><br>
        ✔️Pluging All in One Schema Rich Snippets: sirve para crear rich snippets que llamen la atención en los resultados de búsqueda.
        <br><br>
        ✔️Pluging Yoast Seo: un complemento de optimización de motores de búsqueda (versión gratuita).
        <br><br>
        ✔️Pluging Contact Form 7: formularios de contacto. 
    </p>

    <h3 class="h3 h31">
        Herramientas indispensables
    </h3>

    <!-- CLASTER-02 -->
    <div class="boxCardsThemeThree">

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/ads-logo.png" alt="logos-de-google-adwords" class="box-shadow">
                <div class="card-description"><p>Campañas de publicidad</p></div>
            </figure>
        </div>

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/analytics-logo.png" alt="logo-analytics" class="box-shadow">                 
                <div class="card-description"><p>Conducta de los usuarios de tu web</p></div>
            </figure>
        </div>

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/search-console-logo.png" alt="logo-search-console" class="box-shadow">
                <div class="card-description"><p>Decirle a Google que existes</p></div>
            </figure>
        </div>

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/pixel-logo.png" alt="image-pixel-de-facebook" class="box-shadow">
                <div class="card-description"><p>Remarketing</p></div>
            </figure>
        </div>

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/semrush-logo.png" alt="semrush-logo" class="box-shadow">
                <div class="card-description"><p>Herramienta de investigación SEO</p></div>
            </figure>
        </div>

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/yoast-logo.png" alt="yoast-logo" class="box-shadow">   
                <div class="card-description"><p>Herramienta para desarrollar SEO con CMS</p></div>
            </figure>
        </div>

        <div class="boxCard">
            <figure class="cardThemeThree">
                <img src="app/assets/contact-logo.png" alt="contact-form7-logo" class="box-shadow">   
                <div class="card-description"><p>Formularios personalizados y automáticos</p></div>
            </figure>
        </div>

    </div>       
    `
    boxThemeThree.innerHTML = contentThemeThree


    // ---------------------THEME FOUR-----------------------

    const boxThemeFour = artic('themeFour blogPost','4') 

    const h3ThemeFour = document.createElement('h3')
    h3ThemeFour.setAttribute('class','title h3')
    h3ThemeFour.textContent = '¿Qué tipos de sitios web existen?'
    //------------------------------------------ 
    const intro = parrafo('p','')

    const TextIntro = `
    Existen varias formas de clasificar a los sitios web, en esta ocasión 
    te describo 4 tipos de sitios web en función a su forma de generar ingresos.  
    <br><br> 
    Haz click para que muestre el contenido.
    ` 
    intro.innerHTML = TextIntro
// ----------------------------------------------

    const boxWebs = sec('boxWebs sectionDoors')

    const containerBoxBtns = div('boxBoxBtns boxDoors')
    
    const boxBtns = [
        {name:'Ecommerce o Tienda', on:'onEco',off:'offEco', door:'webEcommerce'},
        {name:'Tienda de Afiliados', on:'onAfi', off:'offAfi', door:'webAfiliados'},
        {name:'Entretenimiento', on:'onEnt', off:'offEnt', door:'webEntretenimiento'},
        {name:'Servicios Profesionales', on:'onSer', off:'offSer', door:'webServicios'}
    ]

    const fragmentThemeFour = document.createDocumentFragment()

    boxBtns.forEach((el)=>{

        const boxBtn = div('boxBtn')

        const BtnOn = button(
            `btn-door btn-door-open boxShadowStrong`,
            `${el.name}`,
            `${el.on}`,
            `off`,
            `${el.off}`,
            `door`,
            `${el.door}`
        )

        const BtnOff = button(
            `btn-door btn-door-close none`,
            `${el.name}`,
            `${el.off}`,
            `on`,
            `${el.on}`,
            `door`,
            `${el.door}`
        )

        boxBtn.appendChild(BtnOn)
        boxBtn.appendChild(BtnOff)

        const boxArticle = artic(`box${el.door} postThemeFour`)

        fragmentThemeFour.appendChild(boxBtn)
        fragmentThemeFour.appendChild(boxArticle)

    })

    const boxImg = `
    <img src="app/assets/svg/codigo-web.svg" class="myClassImgDoors opacityTransition" alt="símbolo-código-de-web">
    `
    const cardDoors = figure('image-codigo cardDoor')
    cardDoors.innerHTML = boxImg

    containerBoxBtns.appendChild(fragmentThemeFour)
    boxWebs.appendChild(containerBoxBtns)
    boxWebs.appendChild(cardDoors)

    boxThemeFour.appendChild(h3ThemeFour)
    boxThemeFour.appendChild(intro)
    boxThemeFour.appendChild(boxWebs)

    // -------------------THEME FIVE-------------------------

    const boxThemeFive = artic('themeFive blogPost','5') 
    const contentThemeFive = `
    <h3 class="h3">
    ¿Cuál es el precio de un sitio web en Perú?
    </h3>

    <div class="boxThemeFive">
        <figure class="cardThemeFive"><img src="app/assets/pay_cash.png" alt="ilustración-transacción"></figure>
        <p class="p">
            Los precios pueden ir desde los 300 soles ($77 aprox.) hasta más de 10 mil soles 
            (más de $2500 aprox). Esto depende de el tamaño del sitio web y las especificaciones
            que se soliciten (funcionalidades, animaciones, implementación de SEO, etc). 
            <br><br>
            Estos precios fluctúan según la demanda e incluso el tipo de cambio del dólar dado que los servicios de hosting
            o la nube se dan en dólares.
        </p>
    </div>
    `

    boxThemeFive.innerHTML = contentThemeFive


    // ------------------------THEME SIX--------------------

    const boxThemeSix = artic('themeSix blogPost','6')
    const contentThemeSix = `
    <h3 class="h3">
    ¿Qué debo saber antes de adquirir un sitio web?
    </h3>

    <p class="p">
        Para que tu sitio web esté en internet necesitas de tres cosas, un dominio 
        (ejm: www.blogueroweb.com), un hosting (donde se alojará tu sitio web) u otro servidor y 
        las páginas web (documentos electrónicos que estarán relacionadas por un dominio).
        <br><br>
        Respecto al costo,  el precio del dominio y hosting dependerá de donde se
        contrate el servicio pues hay diversas empresas que la ofrecen.
        El precio por la creación de las páginas web tiene que ser acorde a la metodología 
        de producción que se utilizará.
        <br><br>
        A continuación te explico sobre las metodologias que se suelen usar para crear sitios 
        web, y así puedas evaluar mejor donde mandar hacer tu sitio web.
    </p>

    <div class="boxBoxThemeSix">

        <div class="boxCardThemeSix ex">
            <figure class="cardThemeSix">
                <img src="app/assets/domain.png" alt="ilustración-dominio" class="">
                <figcaption class="flex-center">Dominio</figcaption>
            </figure>
        </div>

        <div class="boxCardThemeSix ex">
            <figure class="cardThemeSix">
                <img src="app/assets/iconfinder-websiteunderconstruction.png" alt="ilustración-sitio-web" class="">
                <figcaption class="flex-center">Sitio Web</figcaption>                 
            </figure>
        </div>

        <div class="boxCardThemeSix ex">
            <figure class="cardThemeSix">
                <img src="app/assets/data-servers.png" alt="ilustración-servidor" class="">
                <figcaption class="flex-center">Servidor o Hosting</figcaption>
            </figure>
        </div>

    </div>

    <h3 class="h3">
        Metodología de producción de un sitio web
    </h3>

    <p class="p">
        <strong class="bold">Con una plantilla.</strong>
        <br><br>
        El desarrollador se basa en el uso de una plantilla o sitio web 
        prediseñada o template para el diseño y funcionalidades del sitio 
        web deseado por el comprador. A partir de modificaciones, uso de 
        códigos para inhabilitar o implementar estilos y diseños va 
        construyendo la misma.
        <br><br>
        Es importante que se use una plantilla de buena calidad para el buen 
        funcionamiento del sitio web.  
        <br><br>
        Las mejores plantillas y con mejor puntuación son:
        <br><br>
        ✔️Divi (es una mega plantilla en WordPress que permite crear cualquier diseño). 
        <br><br>
        ✔️Generatepress (es una plantilla ligera y perfecta para personas que manejan un poco de código). 
        <br><br>
    </p>

    <p class="p"><strong>CMS con los que se trabaja con plantillas</strong></p>

    <div class="boxBoxThemeSix">

        <div class="boxCardThemeSix">
            <figure class="cardThemeSix">
                <img src="app/assets/wordpress.png" alt="logo-wordpress" class="">
            </figure>
        </div>

        <div class="boxCardThemeSix">
            <figure class="cardThemeSix">
                <img src="app/assets/drupal.png" alt="logo-drupal" class="">                 
            </figure>
        </div>

        <div class="boxCardThemeSix">
            <figure class="cardThemeSix">
                <img src="app/assets/joomla.png" alt="logo-joomla" class="">
            </figure>
        </div>

        <div class="boxCardThemeSix">
            <figure class="cardThemeSix">
                <img src="app/assets/moodle.png" alt="logo-moodle" class="moodle">     
            </figure>
        </div>
    </div>

    <p class="p">
        <br><br>
        <strong class="bold">Full código, sin usar plantillas</strong>
        <br><br>
        El desarrollador inicia con un borrador sobre el diseño visual del sitio web 
        del cliente para que este pueda apreciarlo. Luego de las observaciones e 
        indicaciones estimadas por el comprador, se realizan los cambios y el 
        desarrollo del sitio web.            
    </p>

    <div class="boxBoxThemeSix">

        <div class="boxCardThemeSix ex">
            <figure class="cardThemeSix">
                <img src="app/assets/checklist.png" alt="logo-checklist" class="">
                <figcaption class="flex-center">Especificaciones</figcaption>
            </figure>
        </div>

        <div class="boxCardThemeSix ex">
            <figure class="cardThemeSix">
                <img src="app/assets/ui_ux_web.png" alt="logo-ui_ux" class="">
                <figcaption class="flex-center">Diseño</figcaption>                 
            </figure>
        </div>

        <div class="boxCardThemeSix ex">
            <figure class="cardThemeSix">
                <img src="app/assets/codinghtml.png" alt="logo-codinghtml" class="">
                <figcaption class="flex-center">Desarrollo</figcaption>
            </figure>
        </div>

    </div>

    <h3 class="h3">
        Características de un hosting
    </h3>

    <p class="p">
        <strong>Espacio SSD.</strong>
        <br><br>
        SSD es el acrónimo de Solid State Drive o Unidad en Estado Sólido. 
        El hosting SSD es un servicio de alojamiento de información de 
        páginas web que utiliza dispositivos de almacenamiento de información 
        en estado sólido.
        <br>
        Al depender del tamaño del sitio web se necesita mayor o menos espacio. 
        Por ejemplo, un blog personal no ocupa gran cantidad de almacenamiento, 
        pero, una tienda virtual requiere mucha mayor.
        <br><br>
        <strong>Certificado SSL.</strong>
        <br><br>
        SSl quiere decir Secure Sockets Layer o Certificado Digital, es decir, 
        es un protocolo de seguridad que se encarga de autenticar la identidad 
        del sitio web y cifra la información transmitida, para crear un canal 
        seguro entre el navegador, el usuario y el servidor del sitio web.
        <br>
        Es importante tener este Certificado porque el servidor de Google lo 
        requiere, además, es parte de la optimización SEO, si el 
        hosting lo brinda automáticamente valdrá más.
        <br><br>
        <strong>Reputación en el mercado.</strong>
        <br><br>
        Es importante evaluar las opiniones e impresiones positivas y negativas 
        de las personas que ya usaron estos servicos de alojamiento en hosting.
    </p>

    <div class="hostings">
        <section class="hosting-list">
            <ul><strong class="bold">Hosting más populares</strong></ul>
            <li>Webempresa</li>
            <li>Hostgator</li>
            <li>iPage</li>
            <li>GoDaddy</li>
            <li>SiteGround</li>
            <li>Hostinger</li>
            <li>Arsys</li>
        </section>
        <figure class="img-hosting">
            <img src="app/assets/hosting.png" alt="hosting">
        </figure>
    </div>    
    `
    boxThemeSix.innerHTML = contentThemeSix

    // --------------------------------------------

    boxOne.appendChild(h2One)
    boxOne.appendChild(img)
    boxOne.appendChild(textOne)
    boxBlog.appendChild(boxOne)
    boxBlog.appendChild(boxTwo) 
    boxBlog.appendChild(boxThemeOne)
    boxBlog.appendChild(boxThemeTwo)
    boxBlog.appendChild(boxThemeThree)
    boxBlog.appendChild(boxThemeFour)
    boxBlog.appendChild(boxThemeFive)
    boxBlog.appendChild(boxThemeSix)

    // -----------------------------------------------

    return boxBlog

}

export { BlogContent }