import React,{useState} from 'react'

function ContactCard({contact}) {
const[moreDetails, setMoreDetails] = useState(false)
  return (
    <div>
            <h4>{contact.name.first + " " + contact.name.last}</h4>
            <img src={contact.picture.large} alt={contact.name.first}/>
            <button onClick={() => setMoreDetails(!moreDetails)}>
              More Info
            </button>
            {moreDetails && (
              <div>
                <ul style={{listStyleType: "none"}}>
                  <li>
                    {contact.phone}
                  </li>
                  <li>
                    {contact.location.city} , {contact.location.state}
                  </li>
                </ul>
              </div>
            )}
          </div>
  )
}

export default ContactCard