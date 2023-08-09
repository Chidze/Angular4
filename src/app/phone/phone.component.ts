import { Component} from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent {
  public find !: string;
  public i !: number;
  public index !: number;
  public length !: number;
  public number!: number;
  public correct = false;
  public firstName: string = '';
  public lastName: string = '';
  public phoneNumber!: number;
  public isEdit = false;
  public show: boolean = false;
  public triangleF !: boolean;
  public triangleL !: boolean;
  public triangleN !: boolean;
  public sortF = true;
  public sortL = true;
  public sortN = true;
  public type = 'asc';
  public name !: keyof Contacts;
  public xMark = false;
  
 
  public editStyle = {
    height: '30px',
    width: '45px',
    fontFamily: 'sans-serif',
    backgroundColor: 'rgb(243, 194, 17)',
    border: 'none',
    borderRadius: '2px'
  }
  public deleteStyle = {
    height: '30px',
    width: '55px',
    fontFamily: 'sans-serif',
    backgroundColor: 'rgb(243, 66, 66)',
    color: 'white',
    border: 'none',
    borderRadius: '2px'
  }
  public contact : Contacts[] = []

  constructor() { }
  mark(){
    if(this.find==''){
      this.xMark = false;
    }
    else{
      this.xMark = true;

    }
  }
  create(): void {
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = this.number;
    this.show = true;
    this.isEdit = false;
  }
  delete(ind: number): void {
    let a = this.contact.splice(ind, 1);
  }
 
  edit(ind: number): void {
    this.isEdit = true;
    this.show = true;
    this.firstName = this.contact[ind].first;
    this.lastName = this.contact[ind].second;;
    this.phoneNumber = this.contact[ind].number;
    this.index = ind;
  }
  read(){
  let regFirst = /^[a-zA-Z]{3,15}$/;
  let regLast = /^[a-zA-Z]{3,15}$/;
  let regNumber = /^[0-9]{9,13}$/;
  let first = false;
  let second = false;
  let number = false;

  let stringNumber = `${this.phoneNumber}`;
  first = regFirst.test(this.firstName);
  second = regLast.test(this.lastName);
  number = regNumber.test(stringNumber);
  if(first&&second&&number){
    this.correct = true;
  }
  else{
    this.correct = false;
  }
 }
 save() : void{
  if(this.isEdit){
    let ind = this.index; 
    this.contact[ind].first = this.firstName;
    this.contact[ind].second = this.lastName;
    this.contact[ind].number = this.phoneNumber;
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = this.number;
    this.show= false;
    this.isEdit = false;
  }
  else{
  this.contact.push(
    {
    first : this.firstName,
    second : this.lastName,
    number: this.phoneNumber
  }) 
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = this.number;
    this.show = false;

  }
 }
 close() : void {
  this.show = false;
 }
 sortFirst(name:keyof Contacts,type:string)  {
  this.type = type; 
  this.name = name;
  if(!this.sortF){
    this.sortF = true;
    this.triangleF = true;
  }
  else{
  this.triangleF = false;
  this.sortF = false;
  }
 }
 sortLast(name:keyof Contacts,type:string){
  this.type = type;
  this.name = name; 
  if(!this.sortL){
    this.sortL = true;
    this.triangleL = true; 
  }
  else{
    this.sortL = false;
    this.triangleL = false;
  }
 }
 sortNumber(name:keyof Contacts,type:string){
  this.type = type; 
  this.name = name;
  if(!this.sortN){
    this.sortN = true;
    this.triangleN = true;
  }
  else{
    this.sortN = false;
    this.triangleN = false;
  }
 }
}
 
export interface Contacts  {
  first: string,
  second: string,
  number: number
};
export type objFields = keyof Contacts;
