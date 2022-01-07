<script>
    import QuickLinks from '../components/QuickLinks.svelte'
    import Crypto from '../components/Crypto.svelte';
    import WalletAuth from '../components/WalletAuth.svelte';
    import Navigation from '../components/Navigation.svelte';
    import UserHeader from '../components/UserHeader.svelte';
    import Weather from '../components/Weather.svelte';
    import { format } from 'date-fns';

    const time = new Date();
</script>

<div class='w-screen h-screen bg-blue-200'>
    <UserHeader />
    <p class='py-4 text-4xl text-center'>Welcome</p>
    <p class='py-8 text-2xl text-center'>{format(time, 'h:mm a')}</p>
    <Navigation />
    <div class='grid grid-cols-3'>
        <Weather />
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>Search</p>
        </div>
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>Music</p>
        </div>
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>Stocks</p>
        </div>
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>US Covid Numbers</p>
        </div>
        <Crypto />
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>Bloomberg Headlines</p>
        </div>
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>Wikipedia Headlines</p>
        </div>
        <div class='h-12 border-4 rounded-lg m-4'>
            <p class='text-center font-bold'>NYTimes Headlines</p>
        </div>
        <QuickLinks />
        <WalletAuth />
    </div>
    
</div>