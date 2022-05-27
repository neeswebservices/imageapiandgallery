<script>
	export let name;

    async function getrandimage(loadingnumber) {
		for(let i = 0; i < loadingnumber; i++) {
			let response = await fetch('https://neesimage.herokuapp.com/randimage')
			let data = await response.json();
			const img = new Image();
			img.src = `data:image/jpeg;base64, ${data.img}`;
			img.alt = "";
			img.width = "500";
			img.style.margin = "10px";
			img.style.objectFit = "cover";
			img.className = "img-nees";
			document.getElementById("images").appendChild(img)
		}
	}
	getrandimage(10);

	window.onscroll = function(ev) {
		if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 200) {
		getrandimage(10);
		}
	};
</script>

<main>
	<h1> {name}</h1>
	<a href="/randimage" target="_blank">Api</a>
	<div id="images" class="images">
	</div>
	<img loading="lazy" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2018%2F11%2Fpixel-loading-gif-6.gif&f=1&nofb=1"
	 alt="Loading...">
</main>

<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		font-size: 3em;
		margin: 0 10px;
		font-weight: 100;
		color: orangered
	}



	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>