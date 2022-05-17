const parrafo = (clas,text,id)=>{

    const p = document.createElement('p')
    p.setAttribute('class',`${clas}`)
    p.textContent = text
    if(id){p.setAttribute('id',`${id}`)}

    return p
    
}

const image = (alt,url,clas,id,data,datav)=>{

    const img = document.createElement('img')
    img.setAttribute('alt',alt)
    img.setAttribute('src', url)
    if(clas){img.setAttribute('class', `${clas}`)}
    if(id){img.setAttribute('id',`${id}`)}
    if(id) img.setAttribute('id',`${id}`)
    if(data) img.setAttribute(`data-${data}`,`${datav}`)
    
    return img

}

const button = (clas,text,id,data1,data1v,data2,data2v)=>{

    const button = document.createElement('button')
    if(id){button.setAttribute('id',id)}
    button.setAttribute('class',clas)
    button.textContent = text 
    if(data1 && data1v){button.setAttribute(`data-${data1}`,`${data1v}`)}
    if(data2 && data2v){button.setAttribute(`data-${data2}`,`${data2v}`)}

    return button

}

const div = (clas,id)=>{

    const box = document.createElement('div')
    box.setAttribute('class',clas)
    if(id){box.setAttribute('id',id)}

    return box
}

const sec = (clas,id)=>{

    const box = document.createElement('div')
    box.setAttribute('class',clas)
    if(id){box.setAttribute('id',id)}

    return box
}

const artic = (clas,id)=>{

    const box = document.createElement('article')
    box.setAttribute('class',clas)
    if(id){box.setAttribute('id',id)}

    return box
}

const enlace = (url,styleClass,id,rel,text,target)=>{

    const a = document.createElement('a')
    a.setAttribute('href',`${url}`)
    if(styleClass) a.setAttribute('class',`${styleClass}`)
    if(id) a.setAttribute('id',`${id}`)
    if(target) a.setAttribute('target',`${target}`)
    if(rel) a.setAttribute('rel',`${rel}`)
    if(text) a.textContent = text

    return a
    
}

const figc = (text, styleClass, id)=>{

    const figcaption = document.createElement('figcaption')
    figcaption.textContent = text
    if(styleClass) figcaption.setAttribute('class',`${styleClass}`)
    if(id) figcaption.setAttribute('id',`${id}`)
    
    return figcaption

}

const figure = (styleClass, id, data, datav)=>{

    const figure = document.createElement('figure')
    if(styleClass) figure.setAttribute('class',`${styleClass}`)
    if(id) figure.setAttribute('id',`${id}`)
    if(data) figure.setAttribute(`data-${data}`,`${datav}`)
    
    return figure

}

export { parrafo, image, button, div, enlace, figc, figure, artic, sec }