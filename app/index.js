import { App } from "./App.js"
import { ChangeTheme } from "./components/ChangeTheme.js"
import { Footer } from "./components/Footer.js"
import { Header } from "./components/Header.js"
import { SelectPage } from "./components/SelectPage.js"

document.addEventListener('DOMContentLoaded', ()=>{
    Header() 
    SelectPage()
    App()
    Footer()
})
window.addEventListener('hashchange', App)
ChangeTheme()
