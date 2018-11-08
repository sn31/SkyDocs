import { ModuleWithProviders, Component }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditorComponent} from './editor/editor.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './authguard.service';


const appRoutes: Routes = [
    {
        path: 'editor',
        component: EditorComponent,
        canActivate: [AuthGuard]
    },
    {
      path: 'editor/:id',
      component: EditorComponent,
      canActivate: [AuthGuard]
    },
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'dash',
        component: DashComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);