<script context="module">
	const elements = new Set();
</script>

<script lang='ts'>
    import { onMount } from 'svelte';
    let temperature;

    onMount(async () => {
        fetch('/api/weather')
            .then(response => response.json())
            .then(data => temperature = data.temperature);
    })

</script>


<div class='border-4 rounded-lg m-4'>
    <p class='text-center font-bold'>Weather</p>
    <p>Forcast: </p>
    <p>Temperature: {temperature ? temperature : 'loading…'}</p>
    <p>Sunrise: </p>
    <p>Sunset: </p>
</div>