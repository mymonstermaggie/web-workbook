$(document).ready(function() {
  var bob = {
      firstName: "Bob",
      lastName: "Jones",
      phoneNumber: "(650) 777-7777",
      email: "bob.jones@example.com"
  };

  var mary = {
      firstName: "Mary",
      lastName: "Johnson",
      phoneNumber: "(650) 888-8888",
      email: "mary.johnson@example.com"
  };

  var contacts = [bob, mary];

  function printPerson(person) {
      console.log(person.firstName + " " + person.lastName);
  }

  function list() {
  	var contactsLength = contacts.length;
  	for (var i = 0; i < contactsLength; i++) {
  		printPerson(contacts[i]);
  	}
  }

  /*Create a search function
  then call it passing "Jones"*/
  function search(lastName) {
      var searchLength = contacts.length;
      for (var i = 0; i < searchLength; i++) {
          if (lastName === contacts[i].lastName) {
              printPerson(contacts[i]);
          }
      }
  }

  search("Jones")

  function add(firstName, lastName, email, phoneNumber) {
      contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
     }
  }

  add("maggie", "rose", "maggie@example.com", "512-555-0123");

  list()
}
