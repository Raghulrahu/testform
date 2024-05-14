var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;

	if (name && email && message) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", form.action, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				alert("Thank you for contacting us!");
				form.reset();
			} else {
				alert("Oops, something went wrong. Please try again later.");
			}
		};
		xhr.send("name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&message=" + encodeURIComponent(message));
	} else {
		alert("Please fill in all fields.");
	}
});
