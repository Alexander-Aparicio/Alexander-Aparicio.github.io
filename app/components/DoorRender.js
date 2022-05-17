import { removeClass } from "./helpers/AddRemoveClass.js"

const DoorRender = ()=>{

    const d = document

    const webOne = `
    <h3 class="h3 h31 opacityTransition">
        Tienda virtual
    </h3>
    <p class="p opacityTransition">
        Básicamente, es un e-commerce o Comercio Electrónico En Línea. 
        <br>
        Posee al menos uno de los varios métodos de pago vía transferencia, 
        ya sea, con tarjeta de crédito, débito o apps bancarias (PayPal, Mercado
        Pago, entre otras).
    </p>
    
        <img src="app/assets/amazon.jpg" alt="e-commerce" class="img-door1 opacityTransition">
   
    <h3 class="h3 opacityTransition">
        ¿Cómo obtengo una tienda virtual?
    </h3>
    <p class="p pu opacityTransition">
        La forma económica y práctica es usando un CMS porque permite 
        construir y administrar un sitio web sin saber de códigos.
        <br><br>
        Si estás comenzando de cero, eres hábil con la computadora y 
        tienes tiempo libre podrías usar tutoriales para crear tu sitio web con un CMS
        como WordPress o Shopify,
        pero y bien tengas la posibilidad contrata a una persona que ya tenga 
        experiencia y de esa manera podrás mejorar la calidad de tu sitio web.
        <br><br>
        Ahora si no estamos conformes con la funcionalidades que me puede
        brindar un sitio web hecho con un CMS, hay que contratar a un
        desarrollador web para que la construya desde cero y con todos los detalles
        que queramos, obviamente la inversión será  mayor y en función al tamaño de 
        la tienda, pero, dando como resultado, un sitio web ligero y personalizado al 100%.
        
        <br><br>
        <strong>Beneficios:</strong>
        <br><br>
        ✔️Vender productos sin poseer un local físico. 
        <br><br>
        ✔️El costo de construirla puede ser pequeño si se usa un CMS como WordPress. 
        <br><br>
        <strong>Inconvenientes:</strong> 
        <br><br>
        ✔️Responsabilidad legal en operaciones y transacciones, como tienda debemos 
        contratar un servicio de pasarela de pago o una aplicación similar para recibir
        el dinero de las ventas, en ocasiones se pueden dar problemas en las operaciones
        que realizan los clientes.  
        <br><br>
        ✔️A medida que crezca el sitio web será más costosa aplicar SEO y administrar el contenido. 
    </p>
    `

    const webTwo = `
    <h3 class="h3 h31 opacityTransition">
    Sitio Web de afiliación
    </h3>
    <p class="p opacityTransition">
        Es una web de promoción, es decir, es un sistema 
        mediante el cual se colocan enlaces a productos o servicios que mostramos
        en nuesro sitio web pero que pertenecen a un e-commerce, estos enlaces llevan
        al usuario al sitio web dueño del producto y si realizan la compra
        nosotros recibimos una comisión que está determinada por la ecommerce.
    </p>
    
        <img src="app/assets/web-afiliacion.jpg" alt="e-commerce" class="img-door2">
    
    <h3 class="h3 opacityTransition">
        ¿Cómo obtengo un Sitio Web de afiliación?
    </h3>
    <p class="p pu opacityTransition">
        Se puede crear con un CMS como WordPress solo que deberás hacerlo bien
        ya que estos sitios webs logran tener éxito solo si están optimizadas 
        constantemente y pueden aprecer entre los primeros resultados a las búsquedas
        que se hacen en google u otro búscador.
        <br><br>
        Para afiliarte a este tipo de ecommerce se necesita cumplir con algunos requisitos 
        que estos sitios web solicitan. Ecommerce a los cuales te puedes afiliar son: Amazon, eBay, Linio, etc. 
        <br><br>
        <strong>Beneficios:</strong>
        <br><br>
        ✔️Ganar dinero sin comprar ni fabricar productos o servicios, solo tienes que promocionarlos.
        <br><br>
        ✔️Alejado de toda responsabilidad legal con los usuarios que realicen una compra.
        <br><br>
        ✔️No hay problemas con transacciones o pagos comerciales. 
        <br><br>
        <strong>Inconvenientes:</strong> 
        <br><br>
        ✔️Trabajo constante de optimización, este es el costo o dificultad para 
        este tipo de sitio web pues tienes que tener un buen contenido, copywriting, UX-UI y SEO.  
    </p>
    `
    
    const webThree = `
    <h3 class="h3 h31 opacityTransition">
        Sitio Web de entretenimiento
    </h3>
    <p class="p opacityTransition">
        Son sitios web o espacios dedicados al entretenimiento y diversión del 
        usuario, ya sea, para leer, escuchar música, jugar online, ver 
        películas, videos, apuestas, etc. Estos sitios web son de gran tráfico
        por ende su fuente de ingresos suele ser la publicidad.
    </p>
    
        <img src="app/assets/web-entretenimiento.jpg" alt="e-commerce" class="img-door3">
   
    <h3 class="h3 opacityTransition">
        ¿Cómo obtengo un Sitio Web de entretenimiento?
    </h3>
    <p class="p pu opacityTransition">
        Se puede crear mediante el uso de un CMS o contratando 
        a un desarrollador web, si se trata de un blog entonces WordPress
        sería lo más adecuado si buscas ahorrar dinero, ahora si se trata de 
        un sitio web donde se podrá esuchar música, ver una gran cantidad 
        de videos y personalizar contenido por usuario lo más conveniente 
        es usar un CMS como Joomla o Drupal que estan orientas a la creación 
        de sitios web mas complejos, por ende necesariamente
        deberás contratar a un especialista para crear tu sitio web con uno de estos 
        CMS o  que lo desarrolle desde cero a código.
        <br><br>
        <strong>Beneficios:</strong>
        <br><br>
        ✔️Ganar dinero por publicidad de Google.
        <br><br>
        ✔️Ganar dinero alquilando espacios de publicidad a otras webs.
        <br><br>
        ✔️Dependiendo de la temática se podría ganar dinero aplicando afiliación a productos o servicios. 
        <br><br>
        <strong>Inconvenientes:</strong> 
        <br><br>
        ✔️Trabajo constante en SEO y Branding.
        <br><br>
        ✔️Obtener los permisos necesarios para mostrar contenido con derecho de autor.
        <br><br>
        ✔️Trabajo de reclamos y asistencia al usuario ante malas experiencias.
        <br><br>
        ✔️Mejorar constantemente la UX/UI del sitio web.
    </p>
    `
    
    const webFour = `
    <h3 class="h3 h31 opacityTransition">
        Sitio Web informativa de servicios
    </h3>

    <p class="p opacityTransition">
        Son las más utilizadas por profesionales y empresas porque se 
        especializan en conseguir clientes de los usuarios de Google, 
        además, sirven como plataforma “imán” hacia las redes sociales.
        En este tipo de sitio web el Branding es crucial en combiación con el SEO. 
    </p>

    
        <img src="app/assets/web-servicios.jpg" alt="e-commerce" class="img-door4 opacityTransition">
   

    <h3 class="h3 opacityTransition">
        ¿Cómo obtengo un sitio web informativa de servicios?
    </h3>

    <p class="p pu opacityTransition">
        Se puede crear mediante CMS como WordPress y de hecho es el indicado para este tipo 
        de sitios siempre y cuando sean de enfoque informativo.

        <br><br>
        <strong>Beneficios:</strong>
        <br><br>
        ✔️Atraer clientes.
        <br><br>
        ✔️Promulgar confianza y seguridad a los potenciales clientes. 
        <br><br>
        ✔️Posibilidad de impleentar un blog para aplicar marketing de contenidos.
        <br><br>
        <strong>Inconvenientes:</strong> 
        <br><br>
        ✔️Trabajo constante en Branding y SEO.
        <br><br>
    </p>
    ` 

// ----------------------------

    const $boxBtns = d.querySelector('.boxBoxBtns')

    $boxBtns.addEventListener('click', (e)=>{

        if(e.target && e.target.tagName === 'BUTTON' && e.target.classList.contains('btn-door-open')){

            e.target.classList.add('none')
            const $btnClose = d.getElementById(e.target.dataset.off)
            $btnClose.classList.remove('none')
            document.querySelector('.image-codigo').classList.add('none')

            const imgDefault = document.querySelector('.image-codigo')
            removeClass(imgDefault,'opacityTransition')
            // ---------------------------------------------------
            if(`${e.target.dataset.door}` ==='webEcommerce'){

                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                console.log($boxArticle)
                $boxArticle.innerHTML = webOne
            }

            if(`${e.target.dataset.door}` ==='webAfiliados'){
                
                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = webTwo
            }

            if(`${e.target.dataset.door}` ==='webEntretenimiento'){
                
                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = webThree
            }

            if(`${e.target.dataset.door}` ==='webServicios'){
                
                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = webFour
            }

        }

        if(e.target && e.target.tagName === 'BUTTON' && e.target.classList.contains('btn-door-close')){

            e.target.classList.add('none')
            const $btnOpen = d.getElementById(e.target.dataset.on)
            $btnOpen.classList.remove('none')

            const botones = d.querySelectorAll('.btn-door-close')

            let state = 0
            botones.forEach((el)=>{

                if(el.classList.contains('none')){
                    state += 1
                }else{
                    state += 0
                }

            })

            if(state === 4){
                document.querySelector('.image-codigo').classList.remove('none')
                document.querySelector('.image-codigo').classList.add('opacityTransition')
            }

            // ---------------------------------------------
            
            if(`${e.target.dataset.door}` ==='webEcommerce'){

                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = ''
            }

            if(`${e.target.dataset.door}` ==='webAfiliados'){
                
                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = ''
            }

            if(`${e.target.dataset.door}` ==='webEntretenimiento'){
                
                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = ''
            }

            if(`${e.target.dataset.door}` ==='webServicios'){
                
                const $boxArticle = d.querySelector(`.box${e.target.dataset.door}`)
                $boxArticle.innerHTML = ''
            }
            
        }

    })

}

export { DoorRender }