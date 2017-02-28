<html>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script type="text/javascript" src="request.js"></script>
<script type="text/javascript" src="misc.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<title>Eliza</title>
</head>

<body>

<div class="container-fluid">
	<div class="page-header">
		<div class="row">
			<div class="col-md-12">
				<h1>Welcome to your Eliza Therapy Session  <small>Meet local Elizas who want to talk to you</small></h1>
			</div>
		</div>
	</div>
	<div class="form-horizontal">
		<div class="col-md-4 form-group form-inline">
			<form action="index.php" method="post">
				<input class="form-control" type="text" name="name" placeholder="Enter your name">
				<input class="btn btn-default" type="submit">
			</form>
			<?php 
				if (isset($_POST["name"])) {
					echo "Hello " . $_POST["name"] . ", " . date('l, F jS; s \s\e\c\o\n\d\s'); 
				}
			?>
		</div>

		<div class="col-md-5 form-group form-inline">
			<form action="javascript:void(0)" onsubmit="talk();return false">
				<input class="form-control" type="text" id="human" placeholder="Talk to Eliza">
				<input class="btn btn-default" type="submit" value="Talk">
			</form>
			<p id="eliza"></p>
		</div>

		<div class="col-md-3 form-group">
			<form action="javascript:void(0)" onsubmit="addtip();return false">
				<div class="input-group">
					<div class="input-group-addon">$</div>
					<input type="text" class="form-control" id="tip" placeholder="Please tip Eliza for her services">
					<div class="input-group-addon" id="total-tip">.00</div>
				</div>
				<button type="submit" class="btn btn-primary">Transfer cash</button>
				<p id="thankyou"></p>
			</form>
		</div>
	</div>
</div>

</body>
</html>
