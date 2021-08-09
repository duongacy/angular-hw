import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout-content',
    template: `
        <div class="content">
            layout content
        </div>
    `,
    styles:[`
        .content{
            height: 500px;
            background-color: green;
        }
    `]
})

export class LayoutContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}