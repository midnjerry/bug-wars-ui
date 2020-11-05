import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { GameLobbyComponent } from './pages/game-lobby/game-lobby.component';
import { AiScriptEditorComponent } from './pages/ai-script-editor/ai-script-editor.component';
import { AboutComponent } from './pages/about/about.component';
import { AiListComponent } from './pages/ai-list/ai-list.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component:MainMenuComponent},
  {path: 'lobby', component:GameLobbyComponent},
  {path: 'ai-editor', component:AiScriptEditorComponent},
  {path: 'about', component:AboutComponent},
  {path: 'ai-list', component:AiListComponent},
  {path: 'ai-editor/:id', component:AiScriptEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
