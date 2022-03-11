import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Resultat } from 'src/app/resultat';

@Injectable({
  providedIn: 'root'
})
export class AmiidoService {

constructor(public http:HttpClient) { }


getAmiido(amiido:string) : Observable<Resultat>{


   return this.http.get<any>(`https://www.amiiboapi.com/api/amiibo/?name=${amiido}`).pipe(
      map(res=>{



        let resultat:Resultat;

        resultat = new Resultat(res.amiibo[0].name, res.amiibo[0].release.na, res.amiibo[0].gameSeries)


        return resultat;




      })

    )

}


}
