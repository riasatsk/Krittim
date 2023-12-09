<script>
	import { goto } from '$app/navigation';
	let show = false;
	let email = admin@demo.com;
	let password = 12345678;
	async function handleLogin() {
		show = true;
		const response = await fetch('https://krittim-backend.onrender.com/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: email, password: password })
		});
		const token = await response.json();
		localStorage.setItem('jwt-Token', token.token);
		goto('/');
	}
</script>

<div class="main" data-theme="corporate">
	<div class="loginBox">
		<div class="text-4xl font-bold">Log In</div>
		<input
			bind:value={email}
			type="text"
			placeholder="Email"
			class="input input-bordered w-full max-w-xs rounded-md"
		/>
		<input
			bind:value={password}
			type="password"
			placeholder="Password"
			class="input input-bordered w-full max-w-xs rounded-md"
		/>
		<button class="btn btn-active btn-wide m-0 p-0 btn-primary rounded-md" on:click={handleLogin}
			>Login{#if show}<span class="loading loading-spinner loading-md" />{/if}
		</button>
		<div class="buttom flex gap-2">
			<a class="add" href="/add-school">New School</a> |
			<a class="forgot" href="/login">Forgot Password</a>
		</div>
	</div>
</div>

<style>
	.main {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loginBox {
		height: 45vh;
		width: 42vw;
		border-radius: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
	}
	.buttom .add:hover {
		color: dodgerblue;
		padding-left: 2px;
		padding-right: 2px;
		outline: 1px solid dodgerblue;
	}
	.buttom .forgot:hover {
		color: tomato;
		padding-left: 2px;
		padding-right: 2px;
		outline: 1px solid tomato;
	}
</style>
