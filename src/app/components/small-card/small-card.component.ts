import { Component, OnInit, Input } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  photoCover:string = ""
  cardTitle:string = ""
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id)
  }  

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id.toString() == id)[0]
    this.photoCover = result.photoCover
    this.cardTitle = result.title
  }
  
}
