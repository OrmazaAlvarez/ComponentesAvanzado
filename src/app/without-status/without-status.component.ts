import { Product } from './../interfaces/product';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-without-status',
  templateUrl: './without-status.component.html',
  styleUrls: ['./without-status.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithoutStatusComponent implements OnInit {
  @Input() Product?:Product;
  @Output() selectProduct: EventEmitter<Product> = new EventEmitter();
  @Output() unSelectProduct: EventEmitter<Product> = new EventEmitter();

  private disabled:boolean;
  public actionBuy:string = "";
  public visibleMenu:boolean;

  constructor() {
    this.disabled = false;
    this.visibleMenu = false;
   }

  ngOnInit(): void {
    this.actionBuy = `BUY FOR $${this.Product?.price}`;
  }

  selectItem(){
    this.disabled = true;
    this.actionBuy = "ADDED TO CART";
    this.selectProduct.emit(this.Product);
  }

  unSelectItem(){
    this.disabled = false;
    this.actionBuy = `BUY FOR $${this.Product?.price}`;
    this.unSelectProduct.emit(this.Product);
  }

  isItemDisabled(){
    return !!this.disabled;
  }

  onRegularClick(){
    this.visibleMenu = false;
  }

  onRightClick() {
    this.visibleMenu = true;
    return false;
  }

}
