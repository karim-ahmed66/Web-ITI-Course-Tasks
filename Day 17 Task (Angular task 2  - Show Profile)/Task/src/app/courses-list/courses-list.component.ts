import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  customersArr=[
    {
      title:"Karim",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Cairo",
      price:10
    },
    {
      title:"Ahmed",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Alex",
      price:40
    },
    {
      title:"Mostafa",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Ismalia",
      price:50
    },
    {
      title:"Mohamed",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Tanta",
      price:100
    },
    {
      title:"Yousef",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Mansura",
      price:15
    },
    {
      title:"Karim",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Matroh",
      price:1100
    },
    {
      title:"Khaled",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Luxur",
      price:90
    },
    {
      title:"Laila",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Cairo",
      price:660
    },
    {
      title:"Alaa",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Cairo",
      price:120
    },
    {
      title:"Mariam",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Alex",
      price:186
    },
    {
      title:"Nada",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Cairo",
      price:1450
    },
    {
      title:"Alaa",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Matrooh",
      price:102
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
