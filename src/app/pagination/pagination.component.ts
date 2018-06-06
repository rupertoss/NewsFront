import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  private page: number = 1;
  
  @Input()
  private totalPages: number = 0;
  
  @Output()
  private changePage: EventEmitter<number> = new EventEmitter<number>();
    
  private array(n: number): any[] {
    return Array(n);
  }
  
  constructor() { }
  
  next() {
    this.changePage.emit(this.page + 1);
  }
  
  previous() {
    this.changePage.emit(this.page - 1);
  }
  
  goToPage(n: number) {
    this.changePage.emit(n);
  }
  
  ngOnInit() {
  }

}
