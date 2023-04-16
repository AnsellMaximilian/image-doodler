<script>
	import '../app.css';

	import { onMount } from 'svelte';

	let canvas;
	let ctx;

	onMount(() => {
		ctx = canvas.getContext('2d');
		canvas.width = 500;
		canvas.height = 500;
		ctx.strokeStyle = '#000000';
		ctx.lineWidth = 5;
	});

	function startDrawing(e) {
		ctx.beginPath();
		ctx.moveTo(e.clientX, e.clientY);
		canvas.addEventListener('mousemove', draw);
	}

	function stopDrawing() {
		canvas.removeEventListener('mousemove', draw);
	}

	function draw(e) {
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
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

<div>
	<div on:drop={handleDrop} on:dragover={handleDragOver}>Drop image here</div>
	<canvas
		class="border-2 border-black"
		bind:this={canvas}
		on:mousedown={startDrawing}
		on:mouseup={stopDrawing}
		on:mouseleave={stopDrawing}
	/>
</div>
