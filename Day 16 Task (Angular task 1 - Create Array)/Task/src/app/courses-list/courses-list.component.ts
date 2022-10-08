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
      City:"Cairo"
    },
    {
      title:"Ahmed",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Alex"
    },
    {
      title:"Mostafa",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Ismalia"
    },
    {
      title:"Mohamed",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Tanta"
    },
    {
      title:"Yousef",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Mansura"
    },
    {
      title:"Karim",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Matroh"
    },
    {
      title:"Khaled",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_man3.png",
      country:"Egypt",
      City:"Luxur"
    },
    {
      title:"Laila",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Cairo"
    },
    {
      title:"Alaa",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Cairo"
    },
    {
      title:"Mariam",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Alex"
    },
    {
      title:"Nada",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Cairo"
    },
    {
      title:"Alaa",
      imgUrl:"https://www.thearoralawfirm.com/wp-content/uploads/2021/01/testimonials_woman3.png",
      country:"Egypt",
      City:"Matrooh"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
