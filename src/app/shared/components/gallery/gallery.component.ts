import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

comics: any = [];

  constructor(private comicsService: ComicsService) { }


  ngOnInit(): void {
    this.comicsService.getcomics().subscribe((res:any) => {
     console.log(res)
      this.comics = res;

    })
  }

}
