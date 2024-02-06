import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Pagina Inicial'
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Detalhes'
    }
  ];
  
  export default routeConfig;