import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  users:string[] = ['Ryan', 'lyon', 'leonardo','bruce', 'jhon'];

  sayHello(){

    alert('Hello');
  }

  deleteUser(user){
    for(let i = 0; i<this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }

  addUser(newUser){
    this.users.push(newUser.value);
    console.log(newUser.value);
    alert(newUser.value);
    newUser.value='';
    newUser.focus();
    return false;
  }

  


}
