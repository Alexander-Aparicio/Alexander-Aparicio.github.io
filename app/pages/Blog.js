import { div, figc, figure, image } from "../components/helpers/Boxes.js"
import { TitleOfPages } from "../components/helpers/Titles.js"

const Blog = ()=>{

    const d = document
    const contacto = d.createElement('article')
    contacto.setAttribute('class','contactoPage')
// -------------------------------------------------------

    const title = TitleOfPages('Registrate y comunícate con nosotros')

    contacto.appendChild(title)

// -------------------------------------------------------

    const boxContent = div('boxContacto')

    boxContent.innerHTML = `
<iframe height='500px' width='100%' frameborder='0' allowTransparency='true' scrolling='auto' src='https://creatorapp.zohopublic.com/revolutionsports/academia/form-embed/Inscripciones_Taller_de_Verano/NRxauHWe4Wp1F32akyfMxTKpsE41uyX3J49b4Dh11s2qpOTOAgQObuBw9t4GebMxdDeVgGmxYPsHSUnWEHhmJCPUHjCW9gNaE9H2'></iframe>
    `


{/* <iframe height='1000px' width='100%' frameborder='0' allowTransparency='true' scrolling='auto' src='https://creatorapp.zohopublic.com/revolutionsports/academia/page-embed/Inscripci_n_Taller_de_Verano_2025/sC7yE2sFBskJvm7MmnRSH2NTwxDwT1AWMkgYhSBh1zDBB1QCfKUC9uUCpNRmhaJp1XShGvVWyzXBP73vv6hr3wA2CKhnuUbhO8VP'></iframe> */}
    // ----------------------------------

    const form = d.createElement('form')
    form.setAttribute('class','contact-form')

    const formContent =`
    <select name="consulta" id="tema" class="desplegable-section6"  title="Por favor escoja un tema" required>
        <option value="">Escoge el tema</option>
        <option value="Web PYME">Página web para PYME</option>
        <option value="Web Profesionales">Página web para profesionales</option>
        <option value="Web Emprendimiento">Página web para emprendimiento</option>
        <option value="Web Tienda">Página para tienda</option>
        <option value="Web Catálogo">Página catálogo</option>
        <option value="Web Blog">Página web para blog</option>
        <option value="SEO">Seo para mi página web</option>
        <option value="Refacciones web">Modificaciones para mi web</option>
        <option value="Otro">Otro</option>
    </select>
    <input type="text" name="name" id="nameInput" placeholder="Ingresa tu nombre"
        title="Nombre sólo acepta letras y espacios en blanco" required>
    <input type="email" id="emailInput" name="email" placeholder="Ingresa tu correo" title="Email incorrecto" required>
    <textarea name="comments" id="textareaInput" cols="50" rows="10" placeholder="Déjame tus consultas" title="Tu comentario no debe exceder los 255 caracteres" required></textarea>
    <div class="div-enviar">
        <div class="msj-envio none">
        <a href="https://www.gifsanimados.org/cat-pandas-345.htm">
        <img src="https://www.gifsanimados.org/data/media/345/panda-imagen-animada-0112.gif" border="0" alt="panda-imagen-animada-0112" />
        </a>¡Envío exitoso!
        </div>
        <div class="loader none">
        <svg version="1.1" id="L1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
        <circle fill="none" stroke="#387780" stroke-width="6" stroke-miterlimit="15" stroke-dasharray="14.2472,14.2472" cx="50" cy="50" r="47" >
        <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            dur="2s" 
            from="0 50 50"
            to="360 50 50" 
            repeatCount="indefinite" />
    </circle>
    <circle fill="none" stroke="#387780" stroke-width="1" stroke-miterlimit="10" stroke-dasharray="10,10" cx="50" cy="50" r="39">
        <animateTransform 
            attributeName="transform" 
            attributeType="XML" 
            type="rotate"
            dur="5s" 
            from="0 50 50"
            to="-360 50 50" 
            repeatCount="indefinite" />
    </circle>
    <g fill="#387780">
    <rect x="30" y="35" width="5" height="30">
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 5 ; 0 -5; 0 5" 
        repeatCount="indefinite" 
        begin="0.1"/>
    </rect>
    <rect x="40" y="35" width="5" height="30" >
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 5 ; 0 -5; 0 5" 
        repeatCount="indefinite" 
        begin="0.2"/>
    </rect>
    <rect x="50" y="35" width="5" height="30" >
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 5 ; 0 -5; 0 5" 
        repeatCount="indefinite" 
        begin="0.3"/>
    </rect>
    <rect x="60" y="35" width="5" height="30" >
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 5 ; 0 -5; 0 5"  
        repeatCount="indefinite" 
        begin="0.4"/>
    </rect>
    <rect x="70" y="35" width="5" height="30" >
        <animateTransform 
        attributeName="transform" 
        dur="1s" 
        type="translate" 
        values="0 5 ; 0 -5; 0 5" 
        repeatCount="indefinite" 
        begin="0.5"/>
    </rect>
    </g>
        </svg>
        </div>
        <input id="btn-enviar" class="btn-section6" type="submit" value="ENVIAR">
    </div>
    <p class="msj-error"></p>
    `

    form.innerHTML = formContent

    // ----------------------------------
    //boxContent.appendChild(form)

// -------------------------------------------------------

    const boxInfo = d.createElement('ul')

    const items = [
        {
            campo:'Cel.',
            icon:'app/assets/svg/mobile.svg',
            text:'924998093'
        },
        {
            campo:'Residencia',
            icon:'app/assets/svg/locate.svg',
            text:'Lima, Perú'
        },
        {
            campo:'Telegram',
            icon:'app/assets/svg/telegram.svg',
            text:'@roke_web'
        },
        {
            campo:'WhatsApp',
            icon:'app/assets/svg/whatsapp2.svg',
            text:'924 998 093'
        },
        {
            campo:'Gmail',
            icon:'app/assets/svg/gmail-email.svg',
            text:'rokewebperu@gmail.com' 
        }
    ]

    const fragment = d.createDocumentFragment()

    items.forEach((el)=>{

        const i = d.createElement('i')
        i.setAttribute('class','itemContact')

        const card = figure('campo')

        const img = image(`${el.campo}`,`${el.icon}`,'iconContact')

        const figcaption = figc(`${el.text}`,'nameItem')

        card.appendChild(img)
        card.appendChild(figcaption)

        i.appendChild(card)

        fragment.appendChild(i)
    })

    boxInfo.appendChild(fragment)

// --------------------------------------------------------------

    contacto.appendChild(boxContent)
    //contacto.appendChild(boxInfo)

    return contacto
}

export { Blog }