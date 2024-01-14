import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit{
 constructor(){}
 ngOnInit(): void {
     
 }
 course = [
      {'id':1 , 'name':'Learn Angular' , 'descriptions':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' , 'image':'https://media.licdn.com/dms/image/C5612AQEii70n4jr0Iw/article-cover_image-shrink_600_2000/0/1574758828214?e=2147483647&v=beta&t=1sJfpwh1msQJotl5PhZiuyhs5yvQs3IYf8xoNOQS93c'},
      {'id':2 , 'name':'Learn Typescript' , 'descriptions':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' , 'image':'https://branditechture.agency/brand-logos/wp-content/uploads/wpdm-cache/Typescript-02-900x0.png'},
      {'id':3 , 'name':'Learn Node.js' , 'descriptions':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' , 'image':'https://colorlib.com/cdn-cgi/image/width=1600,height=948,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/nodejs-frameworks.png'},
      {'id':4 , 'name':'Learn JavaScript' , 'descriptions':'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book' , 'image':'https://static.wikia.nocookie.net/coding-help/images/6/69/JavaScript.png/revision/latest?cb=20230517123229'},
 ]
}
