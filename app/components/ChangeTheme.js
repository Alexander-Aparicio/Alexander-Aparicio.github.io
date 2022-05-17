import { addClass, removeClass } from "./helpers/AddRemoveClass.js"

const ChangeTheme = ()=>{

    const ls = localStorage
    const d = document
    // FAC863
    const darkTheme = ()=>{
        const d = document
        const ls = localStorage

        d.documentElement.style.setProperty('--body','#282C34')
        d.documentElement.style.setProperty('--main','#20232A')
        d.documentElement.style.setProperty('--banner','#282C34')
        d.documentElement.style.setProperty('--white','#ECECEC')
        d.documentElement.style.setProperty('--bannerTitle','#FAC863')
        d.documentElement.style.setProperty('--bannerText','#F5534E')
        d.documentElement.style.setProperty('--title','#61DAFB')
        d.documentElement.style.setProperty('--text','#ECECEC')
        d.documentElement.style.setProperty('--sect','#282C34')
        d.documentElement.style.setProperty('--sectTitle','#61DAFB')
        d.documentElement.style.setProperty('--sectText','#ECECEC')
        d.documentElement.style.setProperty('--card','#0003')
        d.documentElement.style.setProperty('--nameCard','#20232A')
        d.documentElement.style.setProperty('--yellow','#FAC863')
        d.documentElement.style.setProperty('--selectPage','#FAC863')

        ls.setItem("theme","dark")  
    }

    const pinkTheme = ()=>{
        const ls = localStorage
        const d = document

        d.documentElement.style.setProperty('--body','#F7F9F9')
        d.documentElement.style.setProperty('--main','#FFAEBD')
        d.documentElement.style.setProperty('--banner','#FFE0E6')
        d.documentElement.style.setProperty('--white','#FFF')
        d.documentElement.style.setProperty('--bannerTitle','#FFAEBD')
        d.documentElement.style.setProperty('--bannerText','#F5534E')
        d.documentElement.style.setProperty('--title','#FFAEBD')
        d.documentElement.style.setProperty('--text','#615e60')
        d.documentElement.style.setProperty('--sect','#FFE0E6')
        d.documentElement.style.setProperty('--sectTitle','#FFAEBD')
        d.documentElement.style.setProperty('--sectText','#515151')
        d.documentElement.style.setProperty('--card','#FFAEBD')
        d.documentElement.style.setProperty('--nameCard','#f4f4f4')
        d.documentElement.style.setProperty('--yellow','#FFAB40')
        d.documentElement.style.setProperty('--selectPage','#515151')

        ls.setItem("theme","pink")  
    }

    const lightTheme = ()=>{
        const ls = localStorage
        const d = document

        d.documentElement.style.setProperty('--body','#F7F9F9')
        d.documentElement.style.setProperty('--main','#1D9BF0')
        d.documentElement.style.setProperty('--banner','#278BCE')
        d.documentElement.style.setProperty('--white','#F4F4F4')
        d.documentElement.style.setProperty('--bannerTitle','#FFFFFF')
        d.documentElement.style.setProperty('--bannerText','#FFDE5D')
        d.documentElement.style.setProperty('--title','#1D9BF0')
        d.documentElement.style.setProperty('--text','#615e60')
        d.documentElement.style.setProperty('--sect','#1D9BF0')
        d.documentElement.style.setProperty('--sectTitle','#FFFFFF')
        d.documentElement.style.setProperty('--sectText','#FFFFFF')
        d.documentElement.style.setProperty('--card','#1D9BF0')
        d.documentElement.style.setProperty('--yellow','#FFDE5D')
        d.documentElement.style.setProperty('--selectPage','#FFDE5D')

        ls.setItem("theme","light")  
    }

    d.addEventListener('click', (e)=>{

        const $sun = d.querySelector('.sun')
        const $moon = d.querySelector('.moon')
        const $boxThemes = d.querySelector('.boxThemes')
        const $themeP = d.getElementById('pink')
        const $themeL = d.getElementById('light')
        const $themeD = d.getElementById('dark')

        if(e.target === $sun){

            addClass($sun,'none')
            removeClass($moon,'none')

            removeClass($boxThemes,'none')
            addClass($boxThemes,'transition')
            removeClass($boxThemes,'transitionOff')
        }
        if(e.target === $moon){

            addClass($moon,'none')
            removeClass($sun,'none')
            
            addClass($boxThemes,'transitionOff')
            setTimeout(()=>{
                addClass($boxThemes,'none')
                removeClass($boxThemes,'transition')
                
            },390)
        }
        if(e.target === $themeP){

            addClass($boxThemes,'none')
            addClass($moon,'none')
            removeClass($sun,'none')

            pinkTheme() 

        }
        if(e.target === $themeL){

            addClass($boxThemes,'none')
            addClass($moon,'none')
            removeClass($sun,'none')

            lightTheme() 

        }
        if(e.target === $themeD){

            addClass($boxThemes,'none')
            addClass($moon,'none')
            removeClass($sun,'none')

            darkTheme()

        }

    })

    document.addEventListener('DOMContentLoaded', ()=>{
        console.log('ESTOY EN CHANHE THEME')
        if(ls.getItem("theme") === null) ls.setItem("theme","dark")
        if(ls.getItem("theme") === "dark") darkTheme()
        if(ls.getItem("theme") === "pink") pinkTheme()
        if(ls.getItem("theme") === "light") lightTheme()

    })

}

export { ChangeTheme }