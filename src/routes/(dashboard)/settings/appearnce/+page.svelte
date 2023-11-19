<script>
	let currentTheme = localStorage.getItem('theme') || 'forest';
	function handleThemeChange() {
		localStorage.setItem('theme', currentTheme);
		window.location.reload();
	}
</script>

<div class="flex justify-center">
<div class="flex gap-4 items-center p-5 m-5 box rounded-md ">
	<div class="font-semibold">Select Theme</div>
	<select
		class="select select-bordered w-full max-w-xs rounded-md"
		bind:value={currentTheme}
		on:change={handleThemeChange}
	>
		<option disabled selected>Select Theme</option>

		<option value="corporate">Light</option>
		<option value="forest">Dark</option>
	</select>
</div>
</div>
<style>
	.box{
		width: 600px;
	}
</style>
