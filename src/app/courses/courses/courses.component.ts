import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {
      _id: '1',
      name: 'Angular: CLI',
      category: 'Angular'
    },
    {
      _id: '2',
      name: 'Angular: Forms',
      category: 'Angular'
    },
    {
      _id: '3',
      name: 'Angular: HTTP',
      category: 'Angular'
    },
    {
      _id: '4',
      name: 'Angular: Router',
      category: 'Angular'
    }
  ];

  displayedColumns: string[] = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
