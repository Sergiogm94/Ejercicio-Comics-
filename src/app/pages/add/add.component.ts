import { ComicsService } from './../../shared/services/comics.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {


  formulario!: FormGroup;
  isSubmit : boolean = false;
  newComic: any = {}
  comics: any = []

  constructor(private formBuilder: FormBuilder, private comicsService: ComicsService) { }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        id: [Number,[Validators.required]],
        title: ["",[Validators.required]],
        cover: ["",[Validators.required]],
        company: ["",[Validators.required]],
        author: ["",[Validators.required]]

    })
  }

  submit() {
    this.isSubmit = true;
    console.log(this.formulario);
    console.log(this.formulario.value);
    this.comicsService.addComic(this.formulario.value).subscribe(comic => this.comics.push(comic))

    this.formulario.reset();
    this.isSubmit = false;
  }

}
