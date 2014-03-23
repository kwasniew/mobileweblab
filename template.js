function addContactItem(contact) {
  var container = $('#contacts ul'),
      itemTemplate = $('#templates .contact');

      var newItem = itemTemplate.clone().appendTo(container);
      newItem.find('.name').text(contact.name);
      newItem.find('.tel').text(contact.tel);
}

function setContacts(contacts) {
  $('#contacts ul').empty();
  contacts.forEach(addContactItem);
}
