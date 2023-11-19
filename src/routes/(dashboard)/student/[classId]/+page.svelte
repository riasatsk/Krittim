<script>
	import StudentList from '../../../../lib/StudentList.svelte';
	export let data;
</script>

<StudentList students={data.students} />
