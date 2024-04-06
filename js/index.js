// Function to fetch contacts data
function getContacts() {
  fetch('public/data/contacts.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(contacts => {
          renderContacts(contacts);
      })
      .catch(error => {
          console.error('Error fetching contacts data:', error);
      });
}

// Function to render contacts data
function renderContacts(contacts) {
    
  // Selecting the element with id "contacts"
  const contactsDiv = document.getElementById('contacts');

  // Clearing previous content
  contactsDiv.innerHTML = '';

  // Looping through each contact
  contacts.forEach(contact => {

      // Constructing the HTML for each contact
      const contactHTML = `
          <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">${contact.name}</h5>
              </div>
              <small>${contact.email}</small>
          </div>
      `;

      // Appending the contact HTML to the contacts container
      contactsDiv.innerHTML += contactHTML;
  });
}

// Calling getContacts function to load the JSON data, this also renders out the data, assuming it exists.
getContacts();
