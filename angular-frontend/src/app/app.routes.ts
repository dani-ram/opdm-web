import { Routes } from '@angular/router';
import { Landing } from './modules/landing/landing';
import { Galeriaprogramas } from './modules/landing/components/programas/galeriaprogramas/galeriaprogramas';
import { Biografia } from './modules/landing/components/navbar/biografia/biografia'; 
import { Mensaje } from './modules/landing/components/navbar/mensaje/mensaje'; 
import { Noticias } from './modules/landing/components/navbar/noticias/noticias'; 

export const routes: Routes = [
    {
        path: '',
        component: Landing,
    },
    {
        path: 'galeriaprogramas',
        component: Galeriaprogramas
    },
    {
        path: 'biografia',
        component: Biografia
    },
    {
        path: 'mensaje',
        component: Mensaje
    },
    {
        path: 'noticias',
        component: Noticias
    },
    {
        path: '',
        redirectTo:'',
        pathMatch: 'full',
    },
 
];

