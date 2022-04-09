import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myForEQS]'
})
export class ForDirective implements OnInit {
  @Input('myForEQSEm') numbers: number[] = [];
  @Input('myForEQSUsando')  texto: string = '';

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}
  
  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template,
        { $implicit: number, texto: this.texto });
    }
  }
}