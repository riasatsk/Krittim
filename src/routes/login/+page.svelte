<script>
	import { goto } from '$app/navigation';
	let show = false;
	let email;
	let password;
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
	let copy1 = false;
	let copy2 = false;
	function copyToClipboard(text) {
		// Create a temporary textarea element
		const textarea = document.createElement('textarea');

		// Set the value of the textarea to the text you want to copy
		textarea.value = text;

		// Append the textarea to the DOM
		document.body.appendChild(textarea);

		// Select the text inside the textarea
		textarea.select();

		// Copy the selected text to the clipboard
		document.execCommand('copy');

		// Remove the temporary textarea from the DOM
		document.body.removeChild(textarea);
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
		<div class="logincred flex gap-4">
			<div class="flex gap-1 items-center">
				<div class="font-mono">Email: riasatsk@email.com</div>
				<button
					style="height: 20px; width: 20px;"
					on:click={() => {
						copyToClipboard('riasatsk@email.com');
						copy1 = true;
					}}
					>{#if copy1}
						<img src="/tick.svg" alt="Tick SVG" />
					{:else}
						<img src="/copy.svg" alt="Copy SVG" />
					{/if}</button
				>
			</div>
			<div class="flex gap-1 items-center">
				<div class="font-mono">Password: 123456</div>
				<button
					style="height: 20px; width: 20px;"
					on:click={() => {
						copyToClipboard('123456');
						copy2 = true;
					}}
					>{#if copy2}
						<img src="/tick.svg" alt="Tick SVG" />
					{:else}
						<img src="/copy.svg" alt="Copy SVG" />
					{/if}</button
				>
			</div>
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
