import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  /** משתנה שיכיל את הטופס */
  public bookForm: FormGroup  =  {} as FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: BookServiceService
    ) {

   }

  ngOnInit(): void {
    this.init();
  }

  public saveBook() : void {
    this.service.addBook(this.bookForm?.value).subscribe( result => {
      alert("New book added with ID : " + result);
    })
  }


  private init(): void {
    this.bookForm = this.formBuilder.group({
      title: [],
      description: []
    })
  }

}
