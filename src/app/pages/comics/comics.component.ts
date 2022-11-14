import { ComicsService } from './../../shared/services/comics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comic?: any = []

  constructor(private comicsService: ComicsService) {

  }

  edit(id: string){
    this.comicsService.getcomicsbyId(id).subscribe((res: any) => {
      this.comicsService.comics = res;
    })
  }

  out(id: any){
    this.comicsService.deleteComic(id).subscribe();
  }
  ngOnInit(): void {
    this.comicsService.getcomics().subscribe((res: any) => {
      this.comic = res;
    })
  }



}
