---
layout: default
title: ???
---
<html lang="{{ site.lang | default: "en-US" }}">
  <head>
	  <title>You've Found An Easter Egg</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
	<link rel="stylesheet" href="{{ site.baseurl }}/swatter/swatter.css">
  </head>
  <body>
    <a onclick="alert('You swatted a fly.')" id="flyFrame">
	<div id="wrapCloseFly">
		<div id="closeFly">
			x
		</div>
	</div>
	<img src="swatter.png" alt="swatter" id="swatter">
	<span id="flyLink">
		<img src="fly.png" alt="fly" id="fly">
	</span>
	<em id="gplink">
		Swat?
	</em>
</a>
    </body>
