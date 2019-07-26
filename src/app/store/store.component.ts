import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  public selectedCategory: string;
  public selectedPage: number = 1;
  public paginationSize: number = 4;

  constructor(private repository: ProductRepository) { }

  changeSelectedCategory(newSelectedCategory?: string) {
    this.selectedPage = 1;
    this.selectedCategory = newSelectedCategory;
  }

  changeSelectedPage(newSelectedPage: number) {
    this.selectedPage = newSelectedPage;
  }

  changePaginationSize(size: number) {
    this.paginationSize = Number(size);
    this.changeSelectedPage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil( this.repository.getProducts(this.selectedCategory).length / this.paginationSize )).fill(0).map((x,i) => i + 1);
  }

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.paginationSize;
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.paginationSize);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

}
