import React from 'react'

export default function Certificates() {
  const items = [
    'Salesforce JavaScript Developer Certification',
    'Salesforce Platform I Developer Certification'
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
