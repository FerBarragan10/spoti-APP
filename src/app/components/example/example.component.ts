import { Component, OnInit } from '@angular/core';
import {ExamserviceService} from '../../services/examservice.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OpenpopupComponent } from '../openpopup/openpopup.component';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  ind:number;
  paises:any=[]=[];
  constructor(
    private service:ExamserviceService,
    private modalService:NgbModal
  ) { }

  ngOnInit() {
    this.obtenerPaises();
  }

  obtenerPaises(){
    this.service.getPaises().subscribe(data => {
      console.log(data);
      this.paises=data;
    });
  }
  abrirPopUp(i:number){
  this.ind=i;
    const modalRef = this.modalService.open(OpenpopupComponent, {windowClass: 'modal-holder', centered: true});
    modalRef.componentInstance.paise = this.paises;
    modalRef.componentInstance.id = this.ind;

  }
  

}
