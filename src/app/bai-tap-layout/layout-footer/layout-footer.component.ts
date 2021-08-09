import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout-footer',
    template: `
        <div class="footer">
            layout footer
        </div>
    `,
    styles:[`
        .footer{
            background-color:black;
        }
    `]
})

export class LayoutFooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}