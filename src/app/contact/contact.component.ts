import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  contactlist  = [
    {id: 1, name: 'MY NUMBER', email: 'chariebell.horcagii@evsu.edu.ph',number: '09148265512'},
  ]

}