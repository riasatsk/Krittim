<script>
	const token = window.localStorage.getItem('jwt-Token');
	export let data;
	let firstName = '';
	let middleName = '';
	let lastName = '';
	let dob;
	let year;
	let gender;
	let address1;
	let address2;
	let city;
	let pin;
	let district;
	let classId;
	let rollNo;
	let mode;
	let parentOrGurdainName;
	let phone;
	async function handleAdd() {
		const response = await fetch('/api/add-student', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				firstName: firstName,
				middleName: middleName,
				lastName: lastName,
				dateOfBirth: dob,
				gender: gender,
				classId: classId,
				year: year,
				roll: rollNo,
				mode: mode,
				parentName: parentOrGurdainName,
				phone: phone,
				address: address1 + ',' + address2 + ',' + city + ',' + district + ',' + pin
			})
		});
		if (!response.status === 201) {
			return console.log('Failed');
		}
		console.log(await response.json());
	}
</script>

<div class="flex flex-col gap-3 ml-10">
	<div class="text-2xl font-sans font-bold">Personal Information</div>
	<div class="flex gap-4">
		<div class="form-control w-full max-w-xs">
			<label class="label" for="first Name">
				<span class="label-text">First Name</span>
			</label>
			<input
				bind:value={firstName}
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Middle Name">
				<span class="label-text">Middle Name</span>
			</label>
			<input
				bind:value={middleName}
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label" for="last name">
				<span class="label-text">Last Name</span>
			</label>
			<input
				bind:value={lastName}
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
	</div>
	<div class="flex gap-8">
		<div class="flex items-center gap-4">
			<div>Date Of Birth</div>
			<input
				bind:value={dob}
				type="date"
				name="dateOfBirth"
				id="dobfield"
				class="bg-transparent rounded-md cursor-pointer"
			/>
		</div>
		<div class="flex items-center gap-4">
			<div>Gender</div>
			<select class="select select-bordered w-full max-w-xs rounded-md" bind:value={gender}>
				<option disabled selected>Select Gender</option>
				<option>Make</option>
				<option>Female</option>
				<option>Other</option>
			</select>
		</div>
		<div class="flex items-center gap-6">
			<div class="w-28">Student Photo</div>
			<input type="file" class="file-input file-input-bordered w-full max-w-xs rounded-md" />
		</div>
	</div>

	<div class="font-bold text-2xl">Address Details</div>

	<div class="flex gap-4">
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">Address 1</span>
			</label>
			<input
				bind:value={address1}
				type="text"
				placeholder="Village/Ward.."
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">Address 2</span>
			</label>
			<input
				bind:value={address2}
				type="text"
				placeholder="PO / PS"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">City</span>
			</label>
			<input
				bind:value={city}
				type="text"
				placeholder="City"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
	</div>

	<div class="flex gap-4">
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">District</span>
			</label>
			<input
				bind:value={district}
				type="text"
				placeholder="District"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">PIN Code</span>
			</label>
			<input
				bind:value={pin}
				type="text"
				placeholder="PIN"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
	</div>
	<div />
	<div class="font-bold text-2xl">Academic Details</div>
	<div class="flex gap-4">
		<div class="flex items-center gap-4">
			<div>Class</div>
			<select class="select select-bordered w-full max-w-xs rounded-md" bind:value={classId}>
				<option disabled selected>Select Class</option>
				{#each data.classes as className}
					<option value={className._id}>{className.name}</option>
				{/each}
			</select>
		</div>
		<div class="flex items-center gap-4">
			<div>Roll</div>
			<input
				type="text"
				placeholder="11"
				class="input input-bordered w-28 max-w-xs rounded-md"
				bind:value={rollNo}
			/>
		</div>
		<div class="flex items-center gap-4">
			<div>Year</div>
			<input
				bind:value={year}
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
			<button class="btn btn-neutral rounded-md" on:click={() => (year = new Date().getFullYear())}
				>This Year</button
			>
		</div>
		<div class="flex items-center gap-4">
			<div>Mode</div>
			<select class="select select-bordered w-full max-w-xs rounded-md" bind:value={mode}>
				<option disabled selected>Select Mode</option>
				<option>Day Scholar</option>
				<option>Hosteller</option>
			</select>
		</div>
	</div>
	<div class="font-bold text-2xl">Parent Details</div>

	<div class="flex gap-4">
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">Parent / Gurdain Name :</span>
			</label>
			<input
				bind:value={parentOrGurdainName}
				type="text"
				placeholder="Type here"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label" for="Address">
				<span class="label-text">Phone</span>
			</label>
			<input
				bind:value={phone}
				type="text"
				placeholder="Phone Number"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>
	</div>
</div>
<!-- Footer Control -->
<div class="flex gap-4 justify-end mr-8 footer-control">
	<a class="btn btn-error rounded-md" href="/student">Cancel</a>
	<button class="btn btn-success rounded-md" on:click={handleAdd}>Save</button>
</div>

<style>
	.footer-control {
		position: absolute;
		top: 90%;
		left: 85%;
	}
</style>
