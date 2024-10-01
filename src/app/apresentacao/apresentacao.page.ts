import { Component, OnInit,  } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.page.html',
  styleUrls: ['./apresentacao.page.scss'],
})
export class ApresentacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
