import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.component.html',
  styles: []
})
export class Pagina1Component 
implements OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {


  nombre: string="Sergio";

  segundos: number = 0;

  timerSubscription!: Subscription;


  constructor() {
    console.log('constructor')
  }

  
  ngOnInit(): void {
    console.log('ngOninit');

    this.timerSubscription = interval(1000).subscribe(
      i=> this.segundos = i
    )
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

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.timerSubscription.unsubscribe();
  }



  guardar(){

  }


}
