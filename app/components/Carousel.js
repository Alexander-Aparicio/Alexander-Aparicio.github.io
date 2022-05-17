export function Carousel(){

    const d = document
    console.log('hoaaa')
    const $carousel = d.querySelector('.carousel-automatic') 
    const $boxCarousel = d.querySelector('.box-carousel') 

    let movement = 'left'

    const maxScroll = $carousel.scrollWidth - $carousel.clientWidth
    console.log(maxScroll)
    let carouselMotor = null
    let step = 1

    const start = ()=>{
        console.log('estoy dentro de la func strat')
        
        carouselMotor = setInterval(()=>{
            
            $carousel.scrollLeft = $carousel.scrollLeft + step
           
            if($carousel.scrollLeft === maxScroll){
                console.log($carousel.scrollLeft)
                console.log(maxScroll)

                step = step* -1

            }else if($carousel.scrollLeft === 0){
        
                step = step* -1
            }
    
        },20)

    }

    const stop = ()=>{
        clearInterval(carouselMotor)
    }

    $boxCarousel.addEventListener('mouseover',()=>{
        stop();
    })

    $boxCarousel.addEventListener('mouseout',()=>{
        start();
    })


    start()

}