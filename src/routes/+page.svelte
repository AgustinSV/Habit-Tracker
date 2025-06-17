<script>
    import { supabase } from '../lib/supabaseClient';
    import Card from '$lib/components/daily-habits-mode/Card.svelte';
    import '../app.css';

    // No interface needed without TypeScript
    const savedItems = [
        {
            id: 1,
            category: 'Intellect'
        },
        {
            id: 2,
            category: 'Physical'
        }
    ];
</script>

<div class="card-container">
    {#each savedItems as item (item.id)}
        <Card category={item.category} />
    {/each}
</div>

<style>
    .card-container {
        border: 1px solid yellow;
    }
</style>