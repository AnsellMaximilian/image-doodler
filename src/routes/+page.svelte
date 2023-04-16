<script>
	import '../app.css';

	import { onMount } from 'svelte';

	let canvas;
	let ctx;

	onMount(() => {
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth - 300;
		canvas.height = 500;
		ctx.strokeStyle = '#000000';
		ctx.lineWidth = 3;
	});

	function startDrawing(e) {
		ctx.beginPath();
		ctx.moveTo(e.offsetX, e.offsetY);
		canvas.addEventListener('mousemove', draw);
	}

	function stopDrawing() {
		canvas.removeEventListener('mousemove', draw);
	}

	function draw(e) {
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.stroke();
		console.log('drawing');
	}

	async function handleDrop(event) {
		event.preventDefault();

		const file = event.dataTransfer.files[0];
		var reader = new FileReader();
		reader.onload = function (event) {
			console.log('dropped');
			const imageObj = new Image();

			imageObj.onload = function () {
				const hRatio = canvas.width / imageObj.width;
				const vRatio = canvas.height / imageObj.height;
				const ratio = Math.min(hRatio, vRatio);
				const centerShift_x = (canvas.width - imageObj.width * ratio) / 2;
				const centerShift_y = (canvas.height - imageObj.height * ratio) / 2;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(
					imageObj,
					0,
					0,
					imageObj.width,
					imageObj.height,
					centerShift_x,
					centerShift_y,
					imageObj.width * ratio,
					imageObj.height * ratio
				);
			};
			imageObj.src = event.target.result;
		};
		reader.readAsDataURL(file);
	}

	function handleDragOver(event) {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'copy';
	}
</script>

<main>
	<header class="bg-blue-900 h-12">
		<nav class="h-full py-2 px-8 flex items-center text-white">
			<h1>Image Doodler</h1>
		</nav>
	</header>
	<div class="p-8 flex gap-2">
		<div
			on:drop={handleDrop}
			on:dragover={handleDragOver}
			class="border-2 border-gray-600 bg-gray-500 text-white p-4"
		>
			Drop image here
		</div>
		<canvas
			class="border-2 border-gray-600 bg-white"
			bind:this={canvas}
			on:mousedown={startDrawing}
			on:mouseup={stopDrawing}
			on:mouseleave={stopDrawing}
		/>
	</div>
</main>
