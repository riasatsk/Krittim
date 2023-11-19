<div class="main flex">
	<div class="box bg-blue-100">
		<div class="flex flex-col gap-4">
			<div class="info">
				<h1 class="text-2xl font-bold">100</h1>
				<h1 class="rounded-xl bg-green-400 text-xl pl-3 pr-3">25%</h1>
			</div>
			<h1 class="text-2xl font-semibold">Total Student</h1>
		</div>
		<img width="100px" src="/student.svg" alt="Student SVG" />
	</div>
	<div class="box bg-lime-400">
		<div class="flex flex-col gap-2">
			<div class="info">
				<h1 class="text-2xl font-bold flex gap-1 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					24,500
				</h1>
				<h1 class="rounded-xl bg-green-400 text-xl pl-2 pr-2">25%</h1>
			</div>
			<div class="flex gap-4 justify-evenly items-end">
				<h1 class="text-2xl font-semibold w-min">Fees Collection</h1>
				<img width="70px" src="/earning.png" alt="Money" />
			</div>
		</div>
	</div>
	<div class="box bg-red-300">
		<div class="flex flex-col gap-2">
			<div class="info">
				<h1 class="text-2xl font-bold flex gap-1 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					18,000
				</h1>
				<!-- <h1 class="rounded-xl bg-green-400 text-xl pl-2 pr-2">25%</h1> -->
			</div>
			<div class="flex gap-4 justify-evenly items-end">
				<h1 class="text-2xl font-semibold w-min">Expenses</h1>
				<img width="70px" src="/expense.png" alt="Money" />
			</div>
		</div>
	</div>
</div>

<style>
	.box {
		width: 250px;
		height: 150px;
		border-radius: 6px;
		display: flex;
		margin: 1rem;
		padding: 1rem;
		color: black;
	}
	.info {
		display: flex;
		gap: 1rem;
	}
</style>
