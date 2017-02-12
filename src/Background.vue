<template>
  <div class="backdrop"></div>
</template>

<style scoped>
.backdrop{
    position: fixed;
	top: 0px;
	left: 0px;
	margin: 0px;
	height: 100%;
	width: 100%;
	color: #beefed;
	background-image: -webkit-linear-gradient(188deg, #bedead, #beefed);
	-webkit-background-clip: background-color;
	-webkit-text-fill-color: transparent;
	-webkit-animation: hue 60s infinite linear;
	-moz-background-clip: background-color;
	-moz-text-fill-color: transparent;
	-moz-animation: hue 60s infinite linear;
	z-index: -10;
}
</style>