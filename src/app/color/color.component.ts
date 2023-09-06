import { Component, OnInit } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colorName: string = 'loading..';
  buttonColor: string='grey';
  constructor(private colorService:ColorService) {}

  ngOnInit(): void {
    this.colorService.getRandomColor().subscribe((color)=>{
      this.colorName=color.name;
      this.buttonColor=color.name;
      console.log(this.colorName)
    })
  }

}
