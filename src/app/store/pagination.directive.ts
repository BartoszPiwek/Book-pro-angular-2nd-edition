import { Directive, ViewContainerRef, TemplateRef, OnChanges, Input } from '@angular/core';

class PaginationDirectiveContext {
  constructor(public $implicit: any) { }
}

@Directive({
  selector: '[appPaginationOf]'
})
export class PaginationDirective implements OnChanges {
  @Input('appPaginationOf') public pagination: number;

  constructor(private container: ViewContainerRef, private template: TemplateRef<object>) { }

  ngOnChanges(): void {
    this.container.clear();
    for (let index = 0; index < this.pagination; index++) {
      this.container.createEmbeddedView(this.template, new PaginationDirectiveContext(index + 1));
    }
  }
}
