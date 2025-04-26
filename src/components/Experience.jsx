import React from 'react'

export default function Experience() {
  const items = [
    {
      title: 'Front-End Developer',
      company: 'NTT DATA',
      city: 'Philadelphia, PA',
      date: 'Jan 2024 – Current',
      points: [
        'Built interactive features with modern JavaScript (ES6+), enhancing application interactivity and reducing load times.',
        'Developed dynamic user interfaces using React and TypeScript, improving user engagement by 30%.',
        'Implemented responsive designs with Tailwind CSS, Bootstrap, and CSS3, ensuring mobile-first performance across all platforms.',
        'Managed application state using Redux, streamlining data flow and simplifying component logic across large-scale projects.',
        'Integrated third-party and internal APIs using JSON to display real-time data, improving user experience with up-to-date content.',
        'Configured and maintained Git source control using GitHub, facilitating team-based development and code reviews.',
        'Debugged and resolved front-end issues across browsers and devices, ensuring consistent UI/UX performance.',
        'Collaborated with cross-functional teams in Agile/Scrum environments, leveraging Jira for task tracking and sprint planning.',
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'Zulily',
      city: 'Arlington, VA',
      date: 'Feb 2022 - Nov 2023',
      points: [
        'Engineered scalable front-end applications using React and Redux, streamlining component architecture and improving data consistency.',
        'Utilized JavaScript and TypeScript to build modular, high-performance features, reducing code redundancy across projects.',
        'Styled modern UIs with Tailwind CSS, Bootstrap, HTML5/CSS3, enhancing cross-browser compatibility and visual consistency.',
        'Consumed RESTful API with Salesforce and parsed JSON responses to render dynamic data and improve app responsiveness.',
        'Optimized legacy codebases by migrating to modular React components, increasing maintainability and scalability.',
        'Contributed to Agile sprints and ceremonies in Scrum environments, ensuring efficient delivery cycles through Jira tracking.',
        'Maintained version control and collaborative workflows using Git, reducing deployment errors by 20%.',
      ],
    },
    {
      title: 'Salesforce Developer',
      company: 'Lumen Technologies',
      city: 'Cinninati, OH',
      date: 'Sep 2019 – Dec 2021',
      points: [
        'Embed Tableau reports into Salesforce CRM solutions to enhance data visualization and analytics capabilities.',
        'Developed Asynchronous Batch Apex such as Queueable Apex, Schedulable Apex for working on massive data records.',
        'Customization on webpages and Visualforce pages by using JavaScript, LWC and Aura components for enhancing user interface and functionality.',
        'Developed Salesforce customization initiatives, leveraging JSON and XML for data manipulation and API integration, resulting in streamlined business processes and enhanced data accuracy.',
        'Engineered REST API integrations to connect Salesforce with Tableau, enabling real-time data synchronization and empowering stakeholders with comprehensive insights.',
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
