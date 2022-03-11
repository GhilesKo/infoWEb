import { Component, OnInit, Output } from '@angular/core';
import { isEmpty, lastValueFrom } from 'rxjs';
import { AmiidoService } from 'src/Service/amiido.service';
import { Character } from './character';
import { Resultat } from './resultat';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  valeurInput:string="";
  clickedname:string="";
   resultat:Resultat = new Resultat("","","");
  empty:boolean=true;



     constructor(public service:AmiidoService){}

     ngOnInit(): void {


     }





     isEmpty(){




    }



}
