import { Component, OnInit } from '@angular/core';
import {SunatService}from 'src/app/services/api/sunat.service';
@Component({
  selector: 'app-sunat',
  templateUrl: './sunat.component.html',
  styleUrls: ['./sunat.component.scss']
})
export class SunatComponent implements OnInit {

  imfo:any[]=[];
  constructor(private sunatServicio:SunatService) { }

  ngOnInit(): void {
    this.findall()

  }
  findall(){
    this.sunatServicio.findall().subscribe((res:any)=>{
      console.log(res)
      //this.imfo=res
    })
  }
}
