const HoverCard = ()=>{

    const $gallery = document.querySelector('.gallery')

    $gallery.addEventListener('mouseover', (e)=>{
        
        if(e.target && e.target.tagName === 'IMG'){

            const idName = e.target.dataset.name
           
            document.getElementById(`${idName}`).classList.add('hover')
         
        }

    })

    $gallery.addEventListener('mouseout', (e)=>{


        if(e.target && e.target.tagName === 'IMG'){
          
            const idName = e.target.dataset.name
            setTimeout(()=>{
                document.getElementById(`${idName}`).classList.remove('hover')
            },10)
            

        }

    })

}

export { HoverCard }