import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  url = "http://localhost:3000/comics";

comics = {
  id:"",
  title:"",
  cover:"",
  company:"",
  author:""

}


  constructor(private http: HttpClient) { }

  getcomics(){
    console.log(this.url);
    return this.http.get(this.url)
  }

  getcomicsbyId(id: string){
    return this.http.get(this.url + "/" + id)
  }

  addComic(comic:any){
    return this.http.post(this.url, comic)
  }

  deleteComic(id:number){
      console.log(id);
    return this.http.delete(this.url + "/" + id)
  }

  putComic(comic: any){
   return this.http.put(this.url + "/" + comic.id, comic)
  }
}
