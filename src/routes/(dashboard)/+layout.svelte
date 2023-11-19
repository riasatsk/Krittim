<script>
	import { goto } from '$app/navigation';
	import Logout from '../../lib/Dialog/Logout.svelte';
	import SidebarNav from '../../lib/layout/SidebarNav.svelte';
	let currentTheme = localStorage.getItem('theme') || 'forest';

	function handleLogout() {
		localStorage.removeItem('jwt-Token');
		goto('/login');
	}
</script>

<div class="main" data-theme={currentTheme}>
	<div class="sidebar" style="background-color: {currentTheme==='corporate' ? 'azure':''}">
		<div class=" logo text-4xl font-bold ml-12 mt-5 mb-5 cursor-pointer selection:bg-transparent"> Krittim </div>

	<SidebarNav/>
		<button class="logout-btn" onclick="logoutModal.showModal()">
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
					d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
				/>
			</svg>
			Logout
		</button>
	</div>

	<div class="content">
		<div class="navbar bg-base-100">
			<div class="flex-none gap-2">
				<div class="form-control">
					<input
						type="text"
						placeholder="Search"
						class="input input-bordered w-24 md:w-auto rounded-md"
					/>
				</div>
				<div class="dropdown dropdown-end">
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label tabindex="0" class="btn btn-ghost btn-circle avatar">
						<div class="w-10 rounded-full">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
							/>
						</div>
					</label>
					<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
					<ul
						tabindex="0"
						class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
					>
						<li>
							<a class="justify-between" href="/profile"> Profile </a>
						</li>
						<li><button on:click={handleLogout}>Logout</button></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="slot h-full overflow-scroll">
			<Logout on:logout={handleLogout} />
			<slot />
		</div>
	</div>
</div>

<style>
	.main {
		display: flex;
	}
	.navbar {
		justify-content: end;
	}
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100vh;
	}

	.sidebar {
		height: 100vh;
		width: 20rem;
		display: flex;
		flex-direction: column;
	}

	.logout-btn {
		display: flex;
		gap: 1rem;
		background-color: black;
		color: white;
		font-size: larger;
		align-items: center;
		margin-left: 1rem;
		position: absolute;
		top: 90vh;
		border: 1.5px solid rgb(8, 8, 8);
		padding: 1rem 4rem;
		border-radius: 6px;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		transition: background-color 0.3s ease, color 0.3s ease;
	}

	.logout-btn:hover {
		background-color: tomato;
		color: black;
	}

	::-webkit-scrollbar {
		display: none;
	}
</style>
