import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'accordion-component',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less']
})
export class AccordionComponent implements OnInit {
  data: any;
  constructor(private http: HttpClient) {}
  
  getData(){
    this.http.get('assets/data/faqs.json').subscribe(data => {
      // console.log(data);
      this.data = data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  // Toggle active class on HTML5 & Bootstrap versions
  toggle(tab: any){
    tab.target.classList.toggle('active');
  }

  // Toggle accordion on HTML version
  toggleAccordion(event: { target: any; }, index: string | number) {
    const element = event.target;
    element.classList.toggle("active");
    if (this.data[index].isActive) {
        this.data[index].isActive = false;
    } else {
        this.data[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.paddingTop = null;
        panel.style.paddingBottom = null;
        panel.style.overflow = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.paddingTop = "20px";
        panel.style.paddingBottom = "55px";
        panel.style.transition = "300ms ease all";
        panel.style.overflow = "auto";
    }
  }
}
