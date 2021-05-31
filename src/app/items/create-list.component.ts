import { Component, VERSION, OnInit, ViewChild, HostListener  } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Grocery } from '../data/grocery';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {
  categories = [
    'Fruits',
    'Vegetables',
    'Dairy',
    'Other food items',
    'Cleaning & hygiene',
    'Clothing'
  ];
  @ViewChild('slist') form: NgForm;

  constructor(private route: ActivatedRoute, private router: Router) { }

  get diagnostic() {
    return JSON.stringify(this.itemsModel);
  }
  itemsModel: Grocery = new Grocery('', '', undefined, undefined, '');

  ngOnInit() {}
  
@HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler($event: any) {
    if (this.form.pristine || (this.form.dirty && !this.form.submitted)) {
      $event.returnValue = 'Are you sure?';
    }
  }
  submitForm() {
    if (this.form.valid) window.alert('form submitted');
    this.form.reset();
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.form.dirty) {
      return window.confirm('Are you sure');
    }
    return true;
  }

  cancelForm() {
    this.router.navigate(['../list',{}], {relativeTo: this.route});
  }
}
