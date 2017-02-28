function addtip() {
	$('#total-tip').html((Number($('#total-tip').html()) + Number($('#tip').val())).toFixed(2));
	$('#thankyou').html("<small>Oh thank you!</small>");
}
