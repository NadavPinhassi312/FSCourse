import { Component, OnDestroy, OnInit, ViewChild, viewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;
  @ViewChild('postForm') postForm: NgForm;
  constructor(private http: HttpClient, private postsService: PostsService) { }


  displayFetchedData() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.displayFetchedData();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    this.displayFetchedData();
    this.postForm.reset();
  }

  onFetchPosts() {
    this.displayFetchedData();
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(
      () => {
        this.loadedPosts = [];
      }
    );
  }

  onHandleError() {
    this.error = null;
  }




  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
