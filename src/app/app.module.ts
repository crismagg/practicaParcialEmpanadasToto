import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FinalizarPedidoComponent } from './finalizar-pedido/finalizar-pedido.component';
import { AppRoutingModule, routingComponents } from './routing/routing.module';
import { RouterModule } from '@angular/router';
import { IniciarPedidoComponent } from './iniciar-pedido/iniciar-pedido.component';
import { FiltroGusto } from './filtro-gusto.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FinalizarPedidoComponent,
    IniciarPedidoComponent,
    FiltroGusto
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }