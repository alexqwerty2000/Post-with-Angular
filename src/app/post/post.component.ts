import { Component, OnInit, Input, ContentChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static:true}) infoRef:ElementRef
 

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }
 
  removePost(){
    this.onRemove.emit(this.post.id)
  }
}
