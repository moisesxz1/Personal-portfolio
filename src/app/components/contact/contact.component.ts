import { Component, OnInit, ViewChild } from '@angular/core';
declare var $: any; // importando jquery

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  //@ViewChild('textos') textos; // recoje el div desde la plantilla 

  constructor() {
    this.captions = false;
   }

  ngOnInit() {
    //console.log(this.textos);
    //var opcion_clasica = document.querySelector("texto").innerHTML;
  }
  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = null;
  }

  getAutor(event){//Event: Json desde el comp. hijo
    this.autor = event;
  }

}

//imputs: permiten pasar valores desde un componente padre a un componente hijo que se este invocando dentro de ese componente padre, de esa manera se puede pasar datos desde
//el padre al hijo

//outputs: permiten compartir informacion de un componente hijo a uno padre
