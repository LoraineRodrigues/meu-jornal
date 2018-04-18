import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  
  noticias: string[] = ["Notícia 1", "Notícia 2", "Notícia 3", "Notícia 4"];
  
  mostrarNoticia: boolean = true;  
  
  constructor() { }

  ngOnInit() {
  }
 public esconderNoticia() {
   this.mostrarNoticia = false;
 }
  public voltarNoticia () {
    this.mostrarNoticia = true;

 }

}
