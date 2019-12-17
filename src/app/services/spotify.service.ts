import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
   }
   getReleases(){
     let headers=new HttpHeaders({
      Authorization:'Bearer BQD_rplKeF_J3CPSUdBbT0bDehuHaRXM711ByE2NXzhAUKzTMe9nZ3MTv6UfaDekbYeVqLo9JnMvBDijecM' 
     });
    return  this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
          .pipe( map (data => {
              return data['albums'].items;
          }));
  }

  getArtista(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQD_rplKeF_J3CPSUdBbT0bDehuHaRXM711ByE2NXzhAUKzTMe9nZ3MTv6UfaDekbYeVqLo9JnMvBDijecM' 
     });
    return  this.http.get('https://api.spotify.com/v1/artists/'+ id,{headers});
           
  }

  getArtists(termino:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQD_rplKeF_J3CPSUdBbT0bDehuHaRXM711ByE2NXzhAUKzTMe9nZ3MTv6UfaDekbYeVqLo9JnMvBDijecM' 
     });
    return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
            .pipe( map (data =>{
                return data['artists'].items;
    }));
  }
  getTopTracks(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQD_rplKeF_J3CPSUdBbT0bDehuHaRXM711ByE2NXzhAUKzTMe9nZ3MTv6UfaDekbYeVqLo9JnMvBDijecM' 
     });
    return  this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,{headers})
         .pipe( map (data =>{
              return data['tracks']}));
  }
}
