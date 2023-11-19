<script>
	import AddSubject from './AddSubject.svelte';
	import { invalidate } from '$app/navigation';

	function handleComplete() {
		invalidate('on:subject');
	}
</script>

<div class="flex">
	<div>
		<AddSubject name="বাংলা " />
		<AddSubject name="English" />
		<AddSubject name="গণিত" />
		<AddSubject name="বিজ্ঞান" />
		<AddSubject name="ভূগোল" />
		<AddSubject name="ইতিহাস" />
	</div>
	<div>
		<AddSubject name="G.K" />
		<AddSubject name="আরবি" />
		<AddSubject name="সংস্কৃত" />
		<AddSubject name="শরীরচর্চা" />
		<AddSubject name="অঙ্কন" />
		<AddSubject name="কম্পিউটার" />
	</div>
	<div class="flex flex-col justify-end gap-5 mb-5 ml-5">
		<div class="flex w-48 gap-3 items-center bg-orange-200 p-2 text-black rounded-md info">
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
					d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
				/>
			</svg>

			You can add other subject after this step
		</div>
		<button class="btn btn-success rounded-md btn-wide" on:click={handleComplete}>Complete</button>
	</div>
</div>

<style>
	.info {
		cursor: pointer;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		transition: background-color 0.3s, transform 0.3s;
	}

	.info:hover {
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	}
</style>
