import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `<h2>{{"Title:" + title}}</h2>
                <h3>{{getAnotherTitle()}}</h3>
               <ul>
                    <li *ngFor='let course of getCourseList()'>{{course}}</li>
               </ul>
               <div (click)="onDivClick();">
                    <button class="btn btn-primary" [class.Active]="isActive" [disabled]="!isActive"
                    [style.background-color]="isActive ? 'Red' : 'Blue'"
                    (click)="onClick($event)">Save</button>
               </div>
    `
})

export class CoursesComponent {
    title = 'List of courses';
    anotherTitle = 'Course';
    // courses = ['course1', 'course2', 'course3'];

    isActive = true;

    courses: string[];
    service: CoursesService;
    constructor(service: CoursesService) {
        // this.courses = service.getCourseList();
        this.service = service;
    }

    getAnotherTitle(): string {
        return this.anotherTitle;
    }

    getCourseList(): string[] {
        return this.service.getCourseList();
    }

    onClick($event: any) {
        $event.stopPropagation();
        console.log('Button was clicked');
        console.log($event);
    }

    onDivClick($event: any) {
        console.log('Div was clicked');
    }
}