import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {
  public url_api = 'https://miles.app.br/rjcarbono/';
  constructor(
    public http:HttpClient
  ) { } 
  get(dados:any){
    return this.http.get(this.url_api,{
       params:dados
       });
     }
     
     post(formData:any){
      const httpOptions = {
         headers: new HttpHeaders({
          'Access-Control-Allow-Origin' : '*'
        })
      };
       return this.http.post(this.url_api,formData,httpOptions);
     }
}
