import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { MoviesPage } from '../movies/movies';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movies',
        children: [
          {
            path: '',
            component: MoviesPage,
          },
          {
            path: 'details/:id',
            loadChildren: () => import('../movie-details/movie-details.module').then(m => m.MovieDetailsPageModule)
          }
        ]
      },
      {
        path: 'actors',
        children: [
          {
            path: '',
            loadChildren: () => import('../actors/actors.module').then(m => m.ActorsModule)
          },
          {
            path: 'details/:id',
            loadChildren: () => import('../actor-detail/actor-detail.module').then(m => m.ActorDetailModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/movies',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

