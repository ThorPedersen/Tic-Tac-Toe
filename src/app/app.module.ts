import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { SymbolToPlayer } from '../pipes/SymbolToPlayer';
import { NameChangePipe } from '../pipes/NameChangePipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    SymbolToPlayer,
    NameChangePipe
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
