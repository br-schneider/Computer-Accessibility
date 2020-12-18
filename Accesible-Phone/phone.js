$(document).ready(function() { // do this when the document is loaded
	$("#keypad_content").show(); // show the element with ID "element"
	$("#contacts_content").hide(); // hide the element with ID "otherElement"
	$("#add_contact_content").hide();

});

$("#contacts").click(function() { // when "button_id" is clicked
	$("#contacts_content").show(); // show element
	$("#keypad_content").hide();	// hide other element
	$("#add_contact_content").hide();
});

$("#keypad").click(function() { // when "button_id" is clicked
	$("#keypad_content").show(); // show element
	$("#contacts_content").hide();	// hide other element
	$("#add_contact_content").hide();
});

$("#add_contact").click(function() { // when "button_id" is clicked
	$("#add_contact_content").show(); // show element
	$("#contacts_content").hide();	// hide other element
	$("#keypad_content").hide();
});

