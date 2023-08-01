import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-type-form',
  templateUrl: './radio-type-form.component.html',
  styleUrls: ['./radio-type-form.component.css']
})
export class RadioTypeFormComponent {

  changeRadioDetails(eve : any){
    console.log(eve)
    if(eve.target.value === 'email'){
      document.getElementById('emailInfoForRadio')?.classList.remove('d-none');
      document.getElementById('phoneInfoForRadio')?.classList.add('d-none');
    }else if(eve.target.value === 'phone'){
      document.getElementById('phoneInfoForRadio')?.classList.remove('d-none');
      document.getElementById('emailInfoForRadio')?.classList.add('d-none');
    }
  }
}
