<script>
	let yearData = [
		{ month: 'Jan', earning: 5000, expense: 4500 },
		{ month: 'Feb', earning: 5500, expense: 4600 },
		{ month: 'Mar', earning: 4200, expense: 5300 },
		{ month: 'Apr', earning: 5800, expense: 4800 },
		{ month: 'May', earning: 6000, expense: 6900 },
		{ month: 'Jun', earning: 5500, expense: 4700 }
	];
</script>

<h1 class="text-3xl font-bold ml-3">Last six month data :</h1>
<div class="main flex gap-10">
	{#each yearData as month}
		<div class="flex flex-col">
			<div class="flex gap-2 bar">
				<div class="earning" style="height: {month.earning / 28}px;   " />
				<div class="expense" style="height: {month.expense / 28}px;" />
			</div>
			<div class="text-xl text-center">{month.month}</div>
		</div>
	{/each}
</div>

<style>
	.earning {
		background-color: greenyellow;
		width: 25px;
		transition: transform 1s;
	}
	.earning:hover {
		outline: 2px solid greenyellow;
		transform: scale(1.2);
	}
	.expense {
		background-color: tomato;
		width: 25px;
		transition: transform 1s;
	}
	.expense:hover {
		outline: 2px solid red;
		transform: scale(1.2);
	}
	.bar {
		align-items: baseline;
	}
	.main {
		align-items: baseline;
		padding: 2rem;
		width: 80%;
	}
</style>
