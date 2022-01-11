import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  list:any[]=[];

  addTask(item:string){
    if (item!=="") {
      this.list.push({id:this.list.length, name:item});
    console.warn(this.list);
    } else {
      alert("Please enter your task");
    }
  }
  deleteTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item => item.id!==id);
  }
  clearTasks(){
    this.list.length=0;
  }

}
