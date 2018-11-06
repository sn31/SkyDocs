import { ModuleWithProviders, Component }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditorComponent} from './editor/editor.component';



const appRoutes: Routes = [
    {
        path: 'editor',
        component: EditorComponent
    },
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'dash',
        component: DashComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);