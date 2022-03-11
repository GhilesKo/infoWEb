import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Resultat } from 'src/app/resultat';
import { AmiidoService } from 'src/Service/amiido.service';
import { DataService } from 'src/Service/dataService/data.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  empty:boolean=true;
resultat:Resultat = this.data.resultat;

  constructor(public service:AmiidoService, public data : DataService) {
 this.resultat = this.data.resultat;

 console.log(`INFORMATION CONSTRUCTOR`);

console.log(`information constructor resultat`,this.resultat);

   }



  ngOnInit() {

  }








}
