import { Component, Input, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Character } from 'src/app/character';
import { Resultat } from 'src/app/resultat';
import { AmiidoService } from 'src/Service/amiido.service';
import { DataService } from 'src/Service/dataService/data.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  clickedname:string="";
  characters : Character[] =
  [new Character("Mario", "../assets/images/mario.png"),
   new Character("Luigi", "../assets/images/luigi.png"),
   new Character("Link", "../assets/images/link.png"),
   new Character("Peach", "../assets/images/peach.png")];

   resultat:Resultat = new Resultat("","","")

  constructor(public service:AmiidoService,public data:DataService) {
  console.log(`ACCEUIL CONSTRUCTOR`);

  }

  ngOnInit() {
  }



  clicked(nom:string):string{

    this.clickedname = nom;
    return this.clickedname;

 }
 async getAmiido(){

await this.data.getAmiido(this.clickedname);

 }
}
