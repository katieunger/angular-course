import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // Binding to property 'appUnless' - the condition we are evaluating (opposite of 'if')
  // Whenever this condition changes (whenever some input parameter changes),
  // We want to execute a method
  // Implementing a setter with the 'set' keyword
  // This turns this into a method - though technically this still is a property -
  // It's just a setter of the property, which is a method which gets executed whenever the property changes
  // The property changes outside of this directive - whenever the condition we pass, or some parameter of this condition, changes

  // Property must share the name of the directive - the name of the selector, appUnless -->
  @Input() set appUnless(condition: boolean){
    // This is the case in which we want to display something
    // We can get access to the template and the place in the document where we will be rendering the template
    if (!condition){
      // Calling createEmbeddedView method which creates a view in this view container
      // The view simply is the templateRef
      this.vcRef.createEmbeddedView(this.templateRef)
    } else {
      this.vcRef.clear();
    }
  }

  // The template can be injected using TemplateRef
  // Just like ElementRef gives us access to the element the directive is on
  // TemplateRef can give us access to the template the directive is on
  // Type is any
  // Also need access to ViewContainer (where the template is rendered in document)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
