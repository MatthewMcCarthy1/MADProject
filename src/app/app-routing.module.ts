import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, //Redirect to login page
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'create-decks',
    loadChildren: () => import('./create-decks/create-decks.module').then( m => m.CreateDecksPageModule)
  },
  {
    path: 'smart-camera',
    loadChildren: () => import('./smart-camera/smart-camera.module').then( m => m.SmartCameraPageModule)
  },
  {
    path: 'quizzes',
    loadChildren: () => import('./quizzes/quizzes.module').then( m => m.QuizzesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
