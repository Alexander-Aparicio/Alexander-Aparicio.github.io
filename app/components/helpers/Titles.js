const TitleOfPages = (title,clas,id)=>{

    const $title = document.createElement('h1')
    $title.setAttribute('class','h1 title')
    if(clas){$title.setAttribute('class',clas)}
    if(id){$title.setAttribute('id',id)}
    $title.textContent = title 
    return $title
}

const SubTitlesOfPages = (title,clas,id)=>{

    const $title = document.createElement('h2')
    $title.setAttribute('class','h3 title')
    if(clas){$title.setAttribute('class',clas)}
    if(id){$title.setAttribute('id',id)}
    $title.textContent = title 
    return $title

}

export {TitleOfPages, SubTitlesOfPages}