import { Component, OnInit } from '@angular/core';
import{SpotifyService} from '../../services/spotify.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-home-spo',
  templateUrl: './home-spo.component.html',
  styleUrls: ['./home-spo.component.css']
})
export class HomeSpoComponent implements OnInit {
 nuevasCanciones:any[]=[];
  constructor(private spotify:SpotifyService,
              private router:Router) 
  { }

  ngOnInit() {
    this.getReleases();
  }

  getReleases(){
    this.spotify.getReleases().subscribe((data:any)=>{
        console.log(data.albums.items);
        this.nuevasCanciones=data.albums.items;
      })
  }
  getArtista(cancion:any){
    let artistaId;
    if(cancion.type === 'artists'){
      artistaId=cancion.id;
      console.log("aca");
    }
    else{
      artistaId=cancion.artists[0].id;
    
    }
    this.router.navigate(['/artista',artistaId]);
  }
}
