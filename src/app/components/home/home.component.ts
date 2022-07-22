import { Component, Renderer2, ElementRef, OnInit, ViewChild, HostListener , ContentChild } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public isVisited = false;

  @ViewChild("myDiv1") divView1: ElementRef;
  @ViewChild("myDivImg") divViewImg: ElementRef;
  @ViewChild("myDiv2") divView2: ElementRef;
  @ViewChild("myDiv3") divView3: ElementRef;
  @ViewChild("myDiv4") divView4: ElementRef;
  @ViewChild("myDiv5") divView5: ElementRef;
  @ViewChild("myDiv6") divView6: ElementRef;

  @ViewChild('especialistas1') especialistas1: ElementRef;
  @ViewChild('especialistas2') especialistas2: ElementRef;
  @ViewChild('especialistas3') especialistas3: ElementRef;
  
  private image1: any;
  private cargarImagen = () => { console.log('Ejecutado!'); 
};
  /*private observador = new IntersectionObserver(this.cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
  });*/

  @HostListener('window:load')
  onLoad() {
    this.image1 = this.especialistas1.nativeElement;
  }

  constructor(
    private elementRef: ElementRef, 
    private renderer: Renderer2, 
    private scroller: ViewportScroller) {

  }

  ngOnInit(): void {
    Aos.init();
  }

  mouseover1(){
    this.renderer.removeClass(this.divView1.nativeElement, 'd-none');
    this.renderer.addClass(this.divView1.nativeElement, 'img_grid_punto');
    
  }

  mouseout1(){
    this.renderer.removeClass(this.divView1.nativeElement, 'img_grid_punto');
    this.renderer.addClass(this.divView1.nativeElement, 'd-none');
  }

  mouseover2(){
    this.renderer.removeClass(this.divView2.nativeElement, 'd-none');
    this.renderer.addClass(this.divView2.nativeElement, 'img_grid_punto');
  }

  mouseout2(){
    this.renderer.removeClass(this.divView2.nativeElement, 'img_grid_punto');
    this.renderer.addClass(this.divView2.nativeElement, 'd-none');
  }

  mouseover3(){
    this.renderer.removeClass(this.divView3.nativeElement, 'd-none');
    this.renderer.addClass(this.divView3.nativeElement, 'img_grid_punto');
  }

  mouseout3(){
    this.renderer.removeClass(this.divView3.nativeElement, 'img_grid_punto');
    this.renderer.addClass(this.divView3.nativeElement, 'd-none');
  }

  mouseover4(){
    this.renderer.removeClass(this.divView4.nativeElement, 'd-none');
    this.renderer.addClass(this.divView4.nativeElement, 'img_grid_punto');
  }

  mouseout4(){
    this.renderer.removeClass(this.divView4.nativeElement, 'img_grid_punto');
    this.renderer.addClass(this.divView4.nativeElement, 'd-none');
  }

  mouseover5(){
    this.renderer.removeClass(this.divView5.nativeElement, 'd-none');
    this.renderer.addClass(this.divView5.nativeElement, 'img_grid_punto');
  }

  mouseout5(){
    this.renderer.removeClass(this.divView5.nativeElement, 'img_grid_punto');
    this.renderer.addClass(this.divView5.nativeElement, 'd-none');
  }

  mouseover6(){
    this.renderer.removeClass(this.divView6.nativeElement, 'd-none');
    this.renderer.addClass(this.divView6.nativeElement, 'img_grid_punto');
  }

  mouseout6(){
    this.renderer.removeClass(this.divView6.nativeElement, 'img_grid_punto');
    this.renderer.addClass(this.divView6.nativeElement, 'd-none');
  }

  /*onClick(){
    this.renderer.addClass(this.divViewImg.nativeElement, 'consult_grid');
    console.log(this.divViewImg.nativeElement);
  }*/


  checkVisited(){
    this.isVisited = !this.isVisited;
  }



}

function scrolling() {
  throw new Error('Function not implemented.');
}

