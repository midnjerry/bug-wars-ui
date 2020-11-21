import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxBootstrapIconsModule, BugFill } from 'ngx-bootstrap-icons';

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
import { ScriptNotFoundComponent } from './pages/script-not-found/script-not-found.component';
import { BugDropdownComponent } from './components/bug-dropdown/bug-dropdown.component';
import { MapComponent } from './components/map/map.component';

const icons = {
  BugFill,
};

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
    ScriptNotFoundComponent,
    BugDropdownComponent,
    MapComponent
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
    NgxBootstrapIconsModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
