import { Component, EventEmitter, Input, Output} from '@angular/core';
       
@Component({
    selector: 'child-comp',
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
     
})
export class ChildComponent{ 
     
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased) {
        this.onChanged.emit(increased);
    }
}