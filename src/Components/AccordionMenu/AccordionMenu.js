import React, { useEffect, useState } from "react";

function AccordionMenu() {
  const faqData = [
    {
      id: 1,
      header: "Climate change causes?",
      text: `Human activities, greenhouse gases, global warming.`,
    },
    {
      id: 2,
      header: "Tech impact on education?",
      text: `Revolutionized learning, benefits, drawbacks`,
    },
    {
      id: 3,
      header: "AI role in job market?",
      text: `Automation, opportunities, challenges.`,
    },
    {
      id: 4,
      header: "Globalization impact on culture?",
      text: `Homogenization, preserving identities measures.`,
    },
    {
      id: 5,
      header: " Social media effects on mental health?",
      text: `Altered dynamics, maintaining balance measures.`,
    },
  ];

  
   
 
  return (
    <div className="Place h-screen bg-[#c0b1b9] flex flex-col gap-[50px] justify-center items-center">
      <div className="PlaceH  ">
        <h1>Accordion Menu</h1>
      </div>
      <div className="PlaceList">
        <ul>
          <li>{faqData[0].header}</li>
          <p>{faqData[0].text}</p>
          <li>{faqData[1].header}</li>
          <p>{faqData[1].text}</p>
          <li>{faqData[2].header}</li>
          <p>{faqData[2].text}</p>
          <li>{faqData[3].header}</li>
          <p>{faqData[3].text}</p>
          <li>{faqData[4].header}</li>
          <p>{faqData[4].text}</p>
          
          
        </ul>
      </div>
      <div>
      </div>
    </div>
  );
}

export default AccordionMenu;
