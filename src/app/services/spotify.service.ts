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
      Authorization:'Bearer BQAJTgndi7Sf3K67C0cAuJQHeb7nhCp1EeW3ippRcOpeba--GRYLPz-E1CZs3n41XvaqFruIaulWbLQXz0a83BGIZ8HZxcJPTUzqiGwChRBe7n4Q6_U' 
     });
    return  this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
          .pipe( map (data => {
              return data['albums'].items;
          }));
  }

  getArtista(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQAJTgndi7Sf3K67C0cAuJQHeb7nhCp1EeW3ippRcOpeba--GRYLPz-E1CZs3n41XvaqFruIaulWbLQXz0a83BGIZ8HZxcJPTUzqiGwChRBe7n4Q6_U' 
     });
    return  this.http.get('https://api.spotify.com/v1/artists/'+ id,{headers});
           
  }

  getArtists(termino:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQAJTgndi7Sf3K67C0cAuJQHeb7nhCp1EeW3ippRcOpeba--GRYLPz-E1CZs3n41XvaqFruIaulWbLQXz0a83BGIZ8HZxcJPTUzqiGwChRBe7n4Q6_U' 
     });
    return  this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
            .pipe( map (data =>{
                return data['artists'].items;
    }));
  }
  getTopTracks(id:string){
    let headers=new HttpHeaders({
      Authorization:'Bearer BQAJTgndi7Sf3K67C0cAuJQHeb7nhCp1EeW3ippRcOpeba--GRYLPz-E1CZs3n41XvaqFruIaulWbLQXz0a83BGIZ8HZxcJPTUzqiGwChRBe7n4Q6_U' 
     });
    return  this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`,{headers})
         .pipe( map (data =>{
              return data['tracks']}));
  }
}
