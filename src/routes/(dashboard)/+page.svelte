<script>
	import Greet from '../../lib/Greet.svelte';
	import Stat from '../../lib/Stat.svelte';
	export let data;
</script>
<Greet />
<Stat />
<br>
<h1 class="hidden">{JSON.stringify(data)}</h1>