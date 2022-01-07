<script context="module">
	const elements = new Set();
</script>

<script lang='ts'>
    import { onMount } from 'svelte';
    import { format, fromUnixTime } from 'date-fns';
    let weather;
    let sunriseDisplay;
    let sunsetDisplay;

    onMount(async () => {
        fetch('/api/weather')
            .then(response => response.json())
            .then(data => {
                weather = data;
                sunriseDisplay = format(fromUnixTime(data.sunrise), 'h:mm a');
                sunsetDisplay = format(fromUnixTime(data.sunset), 'h:mm a')
            });
    })

</script>


<div class='border-4 rounded-lg m-4'>
    <p class='text-center font-bold'>Weather</p>
    <p>Forecast: {weather ? weather.forecast : 'loading…'}</p>
    <p>Temperature: {weather ? weather.temperature : 'sloading…'}</p>
    <p>Sunrise: {sunriseDisplay ? sunriseDisplay : 'loading…'}</p>
    <p>Sunset: {sunsetDisplay ? sunsetDisplay  : 'loading…'}</p>
</div>