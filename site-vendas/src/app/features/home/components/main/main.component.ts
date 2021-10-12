import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  tituloPg = 'Aula de DataBiding no e-commerce';
  fulano = 'Fulano, seja bem vindo ao seu portal de compras.';
  productsListPamonhas: Array<Product> = [
    { nome: 'Pamonha Fresquinha', 
    preco: 589,
    img: './assets/img/pamonha.jpg' },
    { nome: 'Pamonha nem tão fresca', preco: 1, img: './assets/img/pamonha.jpg' },
    { nome: 'Pamonha molenga', preco: 215, img: './assets/img/pamonha.jpg' }
  ];

  productsListDogao: Array<Product> = [
    { nome: 'Dogão Quente', preco: 758, img: './assets/img/cachorroquente.jpg' },
    { nome: 'Dogão nem tão quente', preco: 1, img: './assets/img/cachorroquente.jpg' },
    { nome: 'Dogão Frio', preco: 0, img: './assets/img/cachorroquente.jpg' }
  ];
  
  topProduct: Product = { nome: 'Cuzcuz com ovo', preco: 876, img: './assets/img/cuscuz.jpg' }

  constructor() { }

  ngOnInit(): void {
  }

  exibeAlerta(){
    
  }

}
