import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $: any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() anchura: number; // recojer la variable del componente padre
  @Input ('etiquetas') captions: boolean; //cambiarle el nombre en los parentesis a la propiedad que recibimos
  @Output() conseguirAutor = new EventEmitter(); // 
  public autor: any;

  constructor() {
    
    this.autor = {
      nombre: 'Moises Santanita',
      website: 'vienealgo.com',
      youtube: "larealmasa@gmai.com"
    }
  }

  ngOnInit() {
    $("#logo").click(function (e) {

      e.preventDefault();

      $("header").css("background", "green")
        .css("height", "50px");

    });

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

    //Lanzar evento
    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event){
    this.conseguirAutor.emit(this.autor); // mandarle el json al componente padre 
  }

}

//EventEmmiter: se usa para crear nuevos eventos
//.emit : se usa para emitir un dato a otro componente