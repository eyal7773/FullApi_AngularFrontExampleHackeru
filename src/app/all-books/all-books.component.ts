import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  
  books: any;

  constructor(private bookService:BookServiceService) {

   }

  ngOnInit(): void {
    this.getBooks();

  }

  private getBooks(): void {
    this.bookService.getBooks().subscribe( result => {
      this.books = result;
    })
  }



}
