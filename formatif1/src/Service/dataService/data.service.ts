import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Resultat } from 'src/app/resultat';
import { AmiidoService } from '../amiido.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  resultat:Resultat = new Resultat("","","");
  empty:boolean=true;
constructor(public service:AmiidoService) {
  console.log(`SERVICE CONSTRUCTOR`);

 }


async getAmiido(nom:string){

  await  lastValueFrom( this.service.getAmiido(nom)).then(res=>{



    this.resultat = res;
    console.log(this.resultat);

  })}



  isEmpty(){

    if(this.resultat === null )
    {
  this.empty=true;

    }

    else{this.empty=false;}}
}
