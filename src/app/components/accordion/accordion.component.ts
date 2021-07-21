import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'accordion-component',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less']
})
export class AccordionComponent {
  data: any = [
    {
        "id": "1",
        "question": "What vehicles are covered?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": "2",
        "question": "Can anyone drive a vehicle covered by a business policy?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": "3",
        "question": "You say you don't charge for specialist equipment, what does that mean?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": "4",
        "question": "Can I change my cover level and add/remove vehicles?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        "id": "5",
        "question": "What happens if my vehicle needs repairing and it's outside of business hours?",
        "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

// data: any = [{
//   "parentName": "Parent One",
//   "childProperties":
//     [
//       { "propertyName": "Property One" },
//       { "propertyName": "Property Two" }
//     ]
// }, {
//   "parentName": "Parent Two",
//   "childProperties":
//     [
//       { "propertyName": "Property Three" },
//       { "propertyName": "Property Four" },
//       { "propertyName": "Property Five" },
//     ]
// }, {
//   "parentName": "Parent Three",
//   "childProperties":
//     [
//       { "propertyName": "Property Six" },
//       { "propertyName": "Property Seven" },
//       { "propertyName": "Property Eight" },
//     ]
// }];

  // toggleAccordian(event: { target: any; }, index: string | number) {
  //   const element = event.target;
  //   element.classList.toggle("active");
  //   if (this.data[index].isActive) {
  //     this.data[index].isActive = false;
  //   } else {
  //     this.data[index].isActive = true;
  //   }
  //   const panel = element.nextElementSibling;
  //   if (panel.style.maxHeight) {
  //     panel.style.maxHeight = null;
  //   } else {
  //     panel.style.maxHeight = panel.scrollHeight + "px";
  //   }
  // }

}
