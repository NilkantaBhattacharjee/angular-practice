import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'app-courses',
    template: `<h2>{{"Title:" + title}}</h2>
                <h3>{{getAnotherTitle()}}</h3>
               <ul>
                    <li *ngFor='let course of getCourseList()'>{{course}}</li>
               </ul>
    `
})

export class CoursesComponent {
    title = 'List of courses';
    anotherTitle = 'Course';
    // courses = ['course1', 'course2', 'course3'];
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
}