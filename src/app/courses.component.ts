import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                {{ course }}
                </li>
                    
            </ul>
            <button class="btn btn-primary" (click)="onSave($event)" >Save</button>

            
            `
})

export class CoursesComponent {
    title = 'List of courses';
    courses;
    isActive = true;
    // tslint:disable-next-line: typedef
    onSave($event) {
        console.log('Button was clicked', $event)
    }

    constructor(service: CoursesService){
        this.courses = service.getCourse();
    }

}
