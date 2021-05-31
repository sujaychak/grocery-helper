import { Observable, of } from 'rxjs';
import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

export interface DirtyComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
    
@Injectable({ providedIn: 'root' })
export class DirtyCheckGuard implements CanDeactivate<DirtyComponent> {
  
  canDeactivate( component: DirtyComponent ) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}

