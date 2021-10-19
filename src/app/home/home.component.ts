import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  buttons: Array<any> = [];
  constructor() { }

  ngOnInit(): void {

    for(let i= 0; i < 100; i++) {
      this.buttons.push({text: '', value: i, odd: this.isOdd(i) })
      console.log({ text: '',value: i, odd: this.isOdd(i)});


    }
  }

toggle(button: any) {
  console.log('from toggle', button);
  if(button.text =='') {
    button.text= 'X'
  }else {
    button.text = ''
  }
}

isOdd(value: number): boolean {

  if(value % 2 === 1) {
    return true;
  }
  return false;
}

}
