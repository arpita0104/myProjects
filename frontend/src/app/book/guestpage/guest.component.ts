import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GuestBook} from '../guestbook';
import {GuestBookService} from '../guestbook.service';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html'
})
export class GuestComponent {
    guestbook: GuestBook = new GuestBook();
    constructor(private guestBookService: GuestBookService) { }
    public files: any[];

contructor() { this.files = []; }

    onFileUpload(event){
        this.files = event.target.files;
        console.log(this.files);
        }

        onUpload() {
            const formData = new FormData();
            for (const file of this.files) {
                formData.append(name, file, file.name);
            }
            this.guestBookService.uploadImage(formData)
          .subscribe(data => console.log(data), error => console.log(error));
        }

    register(userId,firstName,lastName,contactNo){
        console.log('In register:'+userId+firstName+lastName+contactNo);
        this.save();
    }

    save() {
        console.log('In save:'+this.guestbook);
        this.guestBookService.saveGuestData(this.guestbook)
          .subscribe(data => console.log(data), error => console.log(error));
        this.guestbook = new GuestBook();
    }

    //public username;
    //constructor( private route: ActivatedRoute) {}
    // ngOnInit() {
    //     this.route.params.subscribe(params => {
    //         this.username= params['queryParams'];
            
    //       });
    //       console.log(this.username);
    // }
}