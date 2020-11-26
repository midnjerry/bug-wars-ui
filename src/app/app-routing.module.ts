import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { GameLobbyComponent } from './pages/game-lobby/game-lobby.component';
import { AiScriptEditorComponent } from './pages/ai-script-editor/ai-script-editor.component';
import { AboutComponent } from './pages/about/about.component';
import { AiListComponent } from './pages/ai-list/ai-list.component';
import { ScriptNotFoundComponent } from './pages/script-not-found/script-not-found.component';
import { MapComponent } from './components/map/map.component';
import { GamePlayScreenComponent } from './pages/game-play-screen/game-play-screen.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component:MainMenuComponent},
  {path: 'lobby', component:GameLobbyComponent},
  {path: 'ai-editor', component:AiScriptEditorComponent},
  {path: 'about', component:AboutComponent},
  {path: 'ai-list', component:AiListComponent},
  {path: 'ai-editor/:id', component:AiScriptEditorComponent},
  {path: 'script-not-found', component:ScriptNotFoundComponent},
  { path: 'map', component: MapComponent },
  { path: 'game-play-screen', component: GamePlayScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
