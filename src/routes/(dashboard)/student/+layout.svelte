<script>
	import StudentNav from '../../../lib/StudentNav.svelte';
  export let data;
</script>
<StudentNav classes={data.classes} />
<slot/>
