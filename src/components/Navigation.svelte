<script context="module">
	const elements = new Set();
</script>


<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  let onDashboardPage = false
  let onTrackerPage = false
  let onJournalPage = false
  
  onMount(async () => {
    const url = String($page.url)

    if (url.includes('/tracker')) {
      onTrackerPage = true
    } else if (url.includes('/journal')) {
      onJournalPage = true
    } else {
      onDashboardPage = true
    }

  })
</script>

<div class='flex justify-center'>
    <a href='/' class='{onDashboardPage ? 'underline' : null}'>Dashboard</a>
    <a href='/tracker' class='mx-32 {onTrackerPage ? 'underline' : null}'>Tracker</a>
    <a href='/journal' class='{onJournalPage ? 'underline' : null}'>Journal</a>
</div>