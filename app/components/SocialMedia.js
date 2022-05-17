const SocialMedia = ()=>{

    const d = document
    
    const container = d.createElement('div')
    container.setAttribute('class','boxShadowStrong')
    container.setAttribute('id','barSocialMedia')
    console.log('esta aplicando social media')

    const socialNetworks = [

        {redSocial:'Facebook', id:'https://www.facebook.com/rokeweb/'},
        {redSocial:'Instagram', id:'https://www.instagram.com/rokeweb_peru/'},
        {redSocial:'Whatsapp', id:'https://api.whatsapp.com/send?phone=51924998093'}

    ]

    const socialFragment = d.createDocumentFragment()

    socialNetworks.forEach((el)=>{

        const enlace = d.createElement('a')
        enlace.setAttribute('href', `${el.id}`)
        enlace.setAttribute('rel', 'nofollow')
        enlace.setAttribute('target', '_blank')
        
        const card = d.createElement('figure')
        card.setAttribute('class','cardSocial card')

        const img = d.createElement('img')
        img.setAttribute('class','imgSocial imgW')
        img.setAttribute('src',`app/assets/svg/${el.redSocial}.svg`)

        const name = d.createElement('figcaption')
        name.setAttribute('class','figc')
        name.textContent = `${el.redSocial}`

        card.appendChild(img)
        card.appendChild(name)

        enlace.appendChild(card)
        socialFragment.appendChild(enlace)

    })

    container.appendChild(socialFragment)

    return container

}

const OnSocialMedia = ()=>{

   const w = window
   console.log('esta aplicando ON social media')
    let mediaQuery = window.matchMedia("(min-width: 960px)")

    function render (x){
        const d = document

        if(x.matches){

            d.getElementById('barSocialMedia').classList.add('socialMedia')

        }
    }

    render(mediaQuery)

}

export { SocialMedia, OnSocialMedia }