<script context="module">
	const elements = new Set();
</script>

<script lang='ts'>
    import { onMount } from 'svelte';
    let btcPrice;
    let ethPrice;
    let solPrice;
    let dogePrice; 

    onMount(async () => {
        const btcResponse = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy');
        const btcCharacter = await btcResponse.json();
        btcPrice = btcCharacter.data.amount;

        const ethResponse = await fetch('https://api.coinbase.com/v2/prices/ETH-USD/buy');
        const ethCharacter = await ethResponse.json();
        ethPrice = ethCharacter.data.amount;

        const solResponse = await fetch('https://api.coinbase.com/v2/prices/SOL-USD/buy');
        const solCharacter = await solResponse.json();
        solPrice = solCharacter.data.amount;

        const dogeResponse = await fetch('https://api.coinbase.com/v2/prices/DOGE-USD/buy');
        const dogeCharacter = await dogeResponse.json();
        dogePrice = dogeCharacter.data.amount;
    })

</script>

<div class='border-4 rounded-lg m-4'>
    <p class='text-center font-bold underline py-4'>Crypto Prices</p>
    <p>Bitcoin: {btcPrice ? btcPrice : 'loading...'}</p>
    <p>Ethereum: {ethPrice ? ethPrice : 'loading...'}</p>
    <p>Solana: {solPrice ? solPrice : 'loading...'}</p>
    <p>Dogecoin: {dogePrice ? dogePrice : 'loading...'}</p>
</div>