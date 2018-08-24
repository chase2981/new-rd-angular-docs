import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'rd-logoff',
    template: ''
})
export class LogoffComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        this.router.navigateByUrl('/auth/login');
    }

}