import React from 'react'

export default function Certificates() {
  const items = [
    'Salesforce JavaScript Developer Certification',
    'Salesforce Platform Developer 1 Certification',
    'Salesforce Marketing Cloud Developer Certification',
    'Salesforce Marketing Cloud  Email Specialist Certification',
    'Salesforce Administrator Certification',
  ]

  return (
    <>
      <ul className='list-disc list-inside'>
        {items.map((item, index) => (
          <li key={index} className='text-base'>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
