// Contact object
function Contact(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
Contact.prototype.describe= function() {
        var description = "Last Name : " + this.lastName +", "+"first Name :" + this.firstName;
        return description;
    }


var qOne = prompt("Would you like to start a Contacts Manager web app? y/n" );
contactList = [];
// Initial contacts
var firstContact = new Contact("John","Smith");
    contactList.push(firstContact);
var secondContact = new Contact("Jane","Doe");
    contactList.push(secondContact);
action = "";

// Action function
function contactApp() {
    console.log("1: List contacts \n2: Add a contact\n0: Quit")
    action = prompt('Please insert 1 to view contact,  2 to add contact and 0 to quit');
    return action;
  }

// add contant function

function addContact() {
    var firstname = prompt('What is the first name of your new contact?');
    var lastName = prompt("what is the last name of your new contact?");
    
    // Contact Prototype
    var newContact = new Contact(firstname,lastName);
    contactList.push(newContact);
    console.log("Contact Added");
    alert("Your contact has been added")
    contactApp();
  }

// display function
function viewContact() {
    console.log("Here is the List of all your contacts");
    
    contactList.forEach(function(Contact) {
        console.log(Contact.describe())
    });
    contactApp();
}

if (qOne == "y") {
    console.log("Welcome to your contacts manager!");
    contactApp()

      while (!(action == 0)) {
        if (action == 1) {
          viewContact();
        }else if (action == 2) {
          addContact();
        }else {
          break
        }
  }


}
var finalMessage = alert('Thanks for using the Contact Manager web app. Please refresh to try again')
