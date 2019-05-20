import { Component } from '@angular/core'
import {GuestBook} from '../guestbook';
import {GuestBookService} from '../guestbook.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})
export class AdminComponent {

    guestlist: Observable<GuestBook[]>;
    constructor(private guestBookService: GuestBookService) { }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.guestlist = this.guestBookService.getGuestList();
    }

    reject(userId){
        this.guestBookService.rejectEntry(userId)
      .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log('ERROR: ' ));
}
    }

