import React from 'react'

const Suggestions = (props) => {
  let filteredContacts = props.results.filter( (contact) => {
    return contact.attributes.business_name.toLowerCase().indexOf(props.query) !== -1;
    
  })  
  const options = filteredContacts.map(r => (
    <li key={r.id}>
      {r.attributes.business_name}
    </li>
  ))
  console.log(filteredContacts)
  return <ul>{options}</ul> 
}

export default Suggestions