import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   public record = [{"Name":"Sarah","Hair":"blonde","Height":"average","Weight":"light","Lotion":"no","Result":"sunburned"},
                  {"Name":"Dana","Hair":"blonde","Height":"tall","Weight":"average","Lotion":"yes","Result":"none"},
                  {"Name":"Alex","Hair":"brown","Height":"short","Weight":"average","Lotion":"yes","Result":"none"},
                  {"Name":"Annie","Hair":"blonde","Height":"short","Weight":"average","Lotion":"no","Result":"sunburned"},
                  {"Name":"Emily","Hair":"red","Height":"average","Weight":"heavy","Lotion":"no","Result":"sunburned"},
                  {"Name":"Pete","Hair":"brown","Height":"tall","Weight":"heavy","Lotion":"no","Result":"none"},
                  {"Name":"John","Hair":"brown","Height":"average","Weight":"heavy","Lotion":"no","Result":"none"},
                  {"Name":"Katie","Hair":"blonde","Height":"short","Weight":"light","Lotion":"yes","Result":"none"}
                ]
    public a:any;

  constructor() { }

  ngOnInit() {
  }

  onse(){
    console.log("1234");
  }
}
