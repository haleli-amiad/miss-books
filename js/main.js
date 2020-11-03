import { myRouter } from './routes.js'
import appHeader from '../js/cmps/app-header.cmp.js'


const options = {
    el: '#app',
  router: myRouter,
    template: `
     <section>
        <app-header></app-header>
        <div class="logo-area">
            <img class="logo-img" src="img/logo-img.svg">
            <h1> Miss Books </h1> 
        </div>
         <router-view></router-view>
    </section>
    `,
    components: {
        appHeader
    }
}


const app = new Vue(options);