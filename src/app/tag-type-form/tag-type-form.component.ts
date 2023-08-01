import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-type-form',
  templateUrl: './tag-type-form.component.html',
  styleUrls: ['./tag-type-form.component.css']
})
export class TagTypeFormComponent {

  changeDetails(eve : any){
    console.log(eve)
    if(eve.target.value === 'email'){
      document.getElementById('emailInfo')?.classList.remove('d-none');
      document.getElementById('phoneInfo')?.classList.add('d-none');
    }else if(eve.target.value === 'phone'){
      document.getElementById('phoneInfo')?.classList.remove('d-none');
      document.getElementById('emailInfo')?.classList.add('d-none');
    }else{
      document.getElementById('phoneInfo')?.classList.add('d-none');
      document.getElementById('emailInfo')?.classList.add('d-none');
    }
  }
}
