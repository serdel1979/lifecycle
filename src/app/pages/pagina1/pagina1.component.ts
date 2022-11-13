import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: []
})
export class Pagina1Component 
implements OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('constructor')
  }


  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }


  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewChecked');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOninit')
  }

}
