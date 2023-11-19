<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<dialog id="logoutModal" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg flex items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 inline-block"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
				/>
			</svg>

			Logout Confirmation
		</h3>
		<p class="py-4">Are you sure you want to log out?</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn rounded-md">Cancel</button>
				<button class="btn btn-error rounded-md text-slate-50" on:click={() => dispatch('logout')}
					>Log Out</button
				>
			</form>
		</div>
	</div>
</dialog>
