import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-openpopup',
  templateUrl: './openpopup.component.html',
  styleUrls: ['./openpopup.component.css']
})
export class OpenpopupComponent implements OnInit {
  @Input() paise: any[]=[];
  @Input() id:number;
  country:string;
  constructor( private activeModal: NgbActiveModal) {
   }

  ngOnInit() {
   console.log(this.id);
  }

  cancelar(){
    this.activeModal.close(false);
  }

}
