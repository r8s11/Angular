import { Component, OnInit } from '@angular/core';
import { AuthorsServices } from './authors.services';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})


export class AuthorsComponent implements OnInit {
  title = '3 of Authors';
  authors;
  constructor(service: AuthorsServices) {
    this.authors = service.getCourse();
  }

  ngOnInit(): void {
  }

}
