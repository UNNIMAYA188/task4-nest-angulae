import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  department=[
    {
      id:1,
      Title:"aerospace and defence",
      Image:"https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-20-1.jpg",
      description:"NeST Digital partners with prime Global Aerospace OEMs bringing unmatched value to its customers and contributing to evolving modernization of aviation technologies."
    },
    {
      id:2,
      Title:"banking & financial service(BFS)",
      Image:"https://nestdigital.com/wp-content/uploads/2023/08/Rectangle-20.jpg",
      description:"Accelerating the cashless economy efficiently by adopting global standards & local priorities"
    },
  {
    id:3,
    Title:"healthcare",
    Image:"https://nestdigital.com/wp-content/uploads/2023/06/Rectangle-20.jpg",
    description:"Healthcare software development is vital for modern healthcare systems. With advancing technology, providers rely on software solutions to streamline operations, improve patient care, and boost outcomes. NeST Digital offers a range of healthcare software solutions, from patient monitoring to virtual reality simulations for medical training."
  },
  {
    id:4,
    Title:"insurance",
    Image:"https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-20-3.jpg",
    description:"Leveraging our rich technical & domain expertise and competitive cost advantages, NeST works with Insurance solution platform providers and technology companies."
  },
  {
  id:5,
    Title:"locomotive",
    Image:"https://nestdigital.com/wp-content/uploads/2023/07/Rectangle-20-2.jpg",
    description:"At NeST Digital, we are committed to delivering high-quality solutions that drive innovation in the locomotive sector."
  },
  {
    id:6,
    Title:"industrial",
    Image:"https://nestdigital.com/wp-content/uploads/2023/05/Rectangle-20.png",
    description:"Our knowledge of plant/equipment operational challenges (including OT and IT layer) and expertise in digital technologies is a unique combination, helping us to be a the most valued partner to our customers. We operate in Hi-Tech Factory Automation, Building Automation, Power & Smart Grid, O&G, Water and Equipment & Tools sub-verticals.",
  
  },
    {
      id:7,
    Title:"mobility",
    Image:"https://nestdigital.com/wp-content/uploads/2023/04/Rectangle-20.jpg",
    description:"Providing better solutions for overcoming the challenges of the technology curve, competition and increasing customer expectations."
    }
  ]
}
