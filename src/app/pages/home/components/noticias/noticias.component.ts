import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias: any = [
    {
      titulo:'Primeira Noticia',
      autor:'Ryan',
      noticia:'Lorem ipsum sksjsjkasssasajlslasskkaklsakls'
    },
    {
      titulo:'Segunda Noticia',
      autor:'Kauê',
      noticia:'Lorem ipsum 124791cuqpt32anxworppx,wew'
    },
    {
      titulo:'Terceira Noticia',
      autor:'Gabriel',
      noticia:'Lorem ipsum 120r69729axowhoybfeij'
    },
    {
      titulo:'Quarta Noticia',
      autor:'Henrique',
      noticia:'Lorem ipsum awh3utg2oy3g3r023gn323tu8'
    }
  ]
}
