import { Component, OnInit, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover:string = ""
  cardTitle:string = ""
  cardDescription:string = ""
  @Input()
  Id:string = "0"  

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }  

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    
    this.cardTitle = result.title
    this.photoCover = result.photoCover
    this.cardDescription = result.description

  }

}
