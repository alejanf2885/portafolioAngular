import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavigationComponent } from './components/navigation-component/navigation-component';
import { LucideAngularModule, Linkedin , Sun, Moon, Github, Mail , Link } from 'lucide-angular';
import { InicioComponent } from './components/inicio-component/inicio-component';
import { ProyectosComponent } from './components/proyectos-component/proyectos-component';
import { ProyectoComponent } from './components/card/proyecto-component/proyecto-component';



@NgModule({
  declarations: [
    App,
    NavigationComponent,
    InicioComponent,
    ProyectosComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({Linkedin , Sun, Moon, Github, Mail , Link})

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
