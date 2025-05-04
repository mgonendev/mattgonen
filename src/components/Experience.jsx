import React from 'react'

export default function Experience() {
  const items = [
    {
      title: 'Salesforce Developer',
      company: 'NTT DATA',
      city: 'Marlton, NJ',
      date: 'Jun 2023 – May 2025',
      points: [
        'Developed various Apex classes and Apex Triggers on Sales Cloud and Service Cloud for various functional needs',
        'Integrated external systems with SFMC using REST/SOAP API, leveraging Marketing Cloud Connect for synchronization.',
        'Developed various Asynchronous Apex Classes such as Batchable Apex, Schedulable Apex for required jobs ',
        'Created custom LWC and Aura components using HTML/CSS and JavaScript for user interface and functionality.',
        'Implemented personalized email campaigns on Salesforce Marketing Cloud (SFMC) using AMPscript and Server Side JavaScript (SSJS) to enhance customer engagement and drive conversion rates.',
        'Utilized Data Extensions and SQL Query Activities for data manipulation and segmentation, enhancing personalization and segmentation strategies.',
        'Integrated Einstein AI into Marketing Cloud Engagement to optimize interactions, 15% increase on campaign effectiveness.'
      ]
    },
    {
      title: 'Salesforce Developer',
      company: 'Zulily',
      city: 'Arlington, VA',
      date: 'Feb 2022 - Nov 2023',
      points: [
        'Embed Tableau reports into Salesforce CRM solutions to enhance data visualization and analytics capabilities.',
        'Successfully addressed complex business requirements by developing Apex Web services, Apex Classes, Triggers, Controllers, and Test Classes collaborating directly with cross-functional Agile teams, using Scrum methodology and SDLC .',
        'Developed Asynchronous Batch Apex such as Queueable Apex, Schedulable Apex for working on massive data records.',
        'Customization on webpages and Visualforce pages by using JavaScript, LWC and Aura components for enhancing user interface and functionality.',
        'Developed Salesforce customization initiatives, leveraging JSON and XML for data manipulation and API integration, resulting in streamlined business processes and enhanced data accuracy.',
        'Engineered REST API integrations to connect Salesforce with Tableau, enabling real-time data synchronization and empowering stakeholders with comprehensive insights.',
        '',
      ],
    },
    {
      title: 'SAP Developer',
      company: 'Itelligence',
      city: 'Istanbul, Turkiye',
      date: 'Nov 2017 – Apr 2020',
      points: [
        'Integrated REST APIs into Node.js backend services, facilitating seamless communication between client-side applications and server-side systems, ensuring efficient data exchange and enhancing application functionality.',
        'Applied MVC architecture principles in JavaScript development projects, to ensure code maintainability, scalability, and separation of concerns, resulting in streamlined development processes by 20% improvement and high code quality.',
        'Developed user-friendly SAP Fiori and UI5 pages using JavaScript, HTML5/CSS3, and React to enhance user experience.',
        'Utilized ABAP RESTful Programming to extend SAP capabilities, enabling custom business logic implementation and integration with external systems, thus optimizing business processes.'
      ],
    },
  ]
  return (
    <>
      {items.map((item, index) => (
        <div className='pt-4' key={index}>
          <header className='text-lg text-gray-900 font-semibold'>
            {item.title} == {item.company} == {item.city} || {item.date}
          </header>
          <ul className='list-disc list-inside'>
            {item.points.map((point, index) => (
              <li key={index} className='text-sm'>
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
