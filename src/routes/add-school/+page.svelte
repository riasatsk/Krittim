<script>
	import { goto } from '$app/navigation';
	let clicked = false;
	let schoolName;
	let userName;
	let email;
	let password;
	let phone;
	async function handleCreateSchool() {
		clicked = true;
		const response = await fetch('https://krittim-backend.onrender.com/add-school', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				schoolName: schoolName,
				userName: userName,
				email: email,
				password: password,
				phone: phone
			})
		});

		const user = await response.json();
		console.log('Success');
                goto('/login');
	}
</script>

<div class="main" data-theme="corporate">
	<div class="text-5xl font-bold text-green-400 mt-4">Manage New School</div>

	<div class="schoolInfo">
		<label class=" text-xl mr-1" for="school-name">Name of The School: </label>
		<input
			bind:value={schoolName}
			type="text"
			placeholder="school name"
			class="input input-bordered w-full max-w-xs text-xl"
		/>
	</div>
	<div class="text-3xl font-bold">Admin Details</div>
	<div class=" flex w-screen justify-center items-center gap-2 mt-5">
		<label class="text-xl mr-1" for="school-name">Name: </label>
		<input
			bind:value={userName}
			type="text"
			placeholder="Riasat"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>

	<div class="flex w-screen justify-center items-center gap-2 mt-5">
		<label class="text-xl mr-1" for="school-name">Phone: </label>
		<input
			bind:value={phone}
			type="text"
			placeholder="+91 1234567890"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>

	<div class="flex w-screen justify-center items-center gap-2 mt-5">
		<label class="text-xl mr-1" for="email">Email: </label>
		<input
			bind:value={email}
			type="email"
			placeholder="admin@email.com"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>

	<div class="flex w-screen justify-center gap-1 mt-5 password">
		<label class="text-xl mr-1" for="email">Password: </label>
		<input bind:value={password} type="password" class="input input-bordered w-full max-w-xs" />
	</div>

	<div class="flex w-screen justify-center gap-1 mt-5 confirm">
		<label class="text-xl mr-1" for="email">Confirm Password: </label>
		<input type="password" class="input input-bordered w-full max-w-xs" />
	</div>
	<button on:click={handleCreateSchool} class="btn btn-wide mt-5 create-btn"
		>Create School
		{#if clicked}<span class="loading loading-spinner loading-md" />{/if}
	</button>
</div>
<div class="bottom" data-theme="corporate">
	<a class="btn btn-wide ml-7" href="/login">Go Back To Login Screen</a>
</div>

<style>
	.main {
		height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100vw;
	}
	.schoolInfo {
		/* background-color: azure; */
		width: 100vw;
		height: 15vh;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	.password {
		position: relative;
		right: 15px;
	}
	.confirm {
		position: relative;
		right: 50px;
	}
	.bottom {
		height: 10vh;
		/* background-color: azure; */
	}
</style>
