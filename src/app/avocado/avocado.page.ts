import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Slides } from '@ionic/angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-avocado',
  templateUrl: './avocado.page.html',
  styleUrls: ['./avocado.page.scss'],
})

export class AvocadoPage implements OnInit {
   @ViewChild(Slides) slides: Slides;

  constructor() { }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);

  }

  pervSlide(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);

  }

  ngOnInit() {
  this.slides.lockSwipes(true);
  }

}
