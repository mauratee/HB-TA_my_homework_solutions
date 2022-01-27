function submitProfile(evt) {
  evt.preventDefault();

  // Use JS to assign HTML salary options collection to salary variable
  // MDN Docs: HTML Select Element - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
  const salary = document.querySelector('#salary').options;
  console.log(salary);
  const selected = salary.selectedIndex
  // HTML DOM Select Object: https://www.w3schools.com/jsref/dom_obj_select.asp
  console.log(salary[selected].value);

  const data = {
    name: document.querySelector('#name-field').value,
    age: document.querySelector('#age-field').value,
    occupation: document.querySelector('#occupation-field').value,
    // Add salary to data object
    salary: salary[selected].value,
  };

  console.log(data);

  fetch('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .then(jsonData => {
      document
        .querySelector('#profiles')
        .insertAdjacentHTML(
          'beforeend',
          ` <li>${jsonData.fullname} the ${jsonData.occupation} is ${jsonData.age} and their salary is ${jsonData.salary}</li>`
        );
    });
}

document.querySelector('#profile-form').addEventListener('submit', submitProfile);
