import { Component } from '@angular/core';

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent {
  nomes: Array<string> = ['Ryan','Henrique','Marcos','Lívia','Jorge','Ronaldo','Kauê'];
}
