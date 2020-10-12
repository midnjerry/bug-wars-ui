import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { GameLobbyComponent } from './pages/game-lobby/game-lobby.component';
import { AiScriptEditorComponent } from './pages/ai-script-editor/ai-script-editor.component';
import { ScriptEditorComponent } from './components/script-editor/script-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameLobbyComponent,
    AiScriptEditorComponent,
    ScriptEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
