import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  title: string,
  text: string,
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isVisible = true
  search = ''
  searchField = "title"

  date:Observable<Date> = new Observable(obs =>{ setInterval(() =>{
    obs.next(new Date())
  },1000)})

  posts: Post[] = [
    {title: 'Develop App', text: 'lorem1 ipsum', id: 1},
    {title: 'Test Components', text: 'lorem2 ipsum', id: 2},
    {title: 'Production', text: 'lorem3 ipsum', id: 3},
    {title: 'Deploy App', text: 'lorem4 ipsum', id: 4},
  ]

  updatePosts(post: Post){
    this.posts.unshift(post)
    // console.log("Post", post)
  }

  removePost(id:number){
    this.posts = this.posts.filter(item => item.id !== id )
    console.log("Post id", id)
  }

  addPost(){
    this.posts.unshift({
      title:'New Post',
      text:'Add new post to Posts'
    })
  }
}
