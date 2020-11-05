import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { GameLobbyComponent } from './pages/game-lobby/game-lobby.component';
import { AiScriptEditorComponent } from './pages/ai-script-editor/ai-script-editor.component';
import { ScriptEditorComponent } from './components/script-editor/script-editor.component';
import { AiDropdownsComponent } from './components/ai-dropdowns/ai-dropdowns.component';
import { MapCarouselComponent } from './components/map-carousel/map-carousel.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './pages/about/about.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AiListComponent } from './pages/ai-list/ai-list.component';
import { AllScriptsListComponent } from './components/all-scripts-list/all-scripts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    GameLobbyComponent,
    AiScriptEditorComponent,
    ScriptEditorComponent,
    AiDropdownsComponent,
    MapCarouselComponent,
    NavbarComponent,
    AboutComponent,
    AiListComponent,
    AllScriptsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CodemirrorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
