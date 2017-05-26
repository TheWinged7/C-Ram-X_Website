
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"	"http://www.w3.org/TR/html4/strict.dtd">

<html>

	<head>
		<meta http-equiv="Content-Type" content="text/html;" charset="uft-8" width="device-width" >
		<Title>
			Vertical AIO tech demo
		</Title>

 		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
	<!--	<script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script> -->
		<script type="text/javascript" src="vertDemo.js">
		</script>

		<link rel="stylesheet" href="vertDemo.css" type="text/css"/>
	</head>

	<body>

		<div  class="menubar">
			<button class="testButton" id="prevPanel" onClick="prevButton()" >Previous </button>
			<button class="testButton" id="nextPanel" onClick="nextButton()">Next </button>
			<input type="image" class="navButton" id="homeButton" onclick="homeButton()"
				src="./img/temp_home.png">
		</div>

		<div class="contentBox" id = "content">


			<div class="slider" id = "slider">
				<div class="panel" >
					<!--	<img src="http://lorempixel.com/output/business-q-c-1000-500-10.jpg" /> -->

				</div>

				<div class="panel" >
					<?php
						include_once "./fontTest.php";
					?>

				</div>

				<div class="panel" >
					<img src="http://lorempixel.com/output/technics-q-c-1000-500-7.jpg" />
				</div>


			</div>
		</div>


	</body>

	</html>
