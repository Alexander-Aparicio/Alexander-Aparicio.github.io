const Menu = ()=>{

    const d = document

    const nav = d.createElement('nav')
    nav.setAttribute('class','menu')
    nav.setAttribute('id','idMenu')

    const menu = [
        {page:'Inicio', id:'inicio',clasStyle:'optionMenu'},
        {page:'Horarios', id:'horarios',clasStyle:'optionMenu'},
        {page:'Suscripción', id:'suscripcion',clasStyle:'optionMenu'},
        {page:'Blog', id:'blog',clasStyle:'optionMenu'}
    ]

    const menuFragment = d.createDocumentFragment()

    menu.forEach((el)=>{

        const option = d.createElement('p')
        option.setAttribute('class', `${el.clasStyle}`)
        option.setAttribute('id',`${el.id}`)
        option.textContent = `${el.page}`

        menuFragment.appendChild(option)

    })
    
// -------------------------------------------
    nav.appendChild(menuFragment)

    return nav

}

export { Menu }