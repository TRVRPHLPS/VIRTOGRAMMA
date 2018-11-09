import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'niko-bar', loadChildren: './niko-bar/niko-bar.module#NikoBarPageModule' },
  { path: 'suluguni', loadChildren: './suluguni/suluguni.module#SuluguniPageModule' },
  { path: 'dolma', loadChildren: './dolma/dolma.module#DolmaPageModule' },
  { path: 'samogon-fish-bar', loadChildren: './samogon-fish-bar/samogon-fish-bar.module#SamogonFishBarPageModule' },
  { path: 'we-restaurant', loadChildren: './we-restaurant/we-restaurant.module#WeRestaurantPageModule' },
  { path: 'lemongrass-cafe', loadChildren: './lemongrass-cafe/lemongrass-cafe.module#LemongrassCafePageModule' },
  { path: 'indigo', loadChildren: './indigo/indigo.module#IndigoPageModule' },
  { path: 'nam', loadChildren: './nam/nam.module#NamPageModule' },
  { path: 'inside', loadChildren: './inside/inside.module#InsidePageModule' },
  { path: 'avocado', loadChildren: './avocado/avocado.module#AvocadoPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
