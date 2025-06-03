<script lang="ts">
    import { supabase } from '$lib/supabaseClient.ts';
    import Card from '$lib/components/Card.svelte';
    import '../app.css';
    
    interface SavedItem {
        id: number;
        category: string;
    }

    const savedItems: SavedItem[] = [
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
        <Card category={item.category} /> {/each}
</div>

<style>
    .card-container {
        border: 1px solid yellow;
    }
</style>
