import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { GameLobbyComponent } from './pages/game-lobby/game-lobby.component';
import { AiScriptEditorComponent } from './pages/ai-script-editor/ai-script-editor.component';
import { ScriptEditorComponent } from './components/script-editor/script-editor.component';
import { AiDropdownsComponent } from './components/ai-dropdowns/ai-dropdowns.component';
import { MapCarouselComponent } from './components/map-carousel/map-carousel.component';
import { IvyCarouselModule} from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameLobbyComponent,
    AiScriptEditorComponent,
    ScriptEditorComponent,
    AiDropdownsComponent,
    MapCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
