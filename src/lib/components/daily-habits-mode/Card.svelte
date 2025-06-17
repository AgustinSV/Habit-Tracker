<script>
    const { category = 'Default Category' } = $props();
</script>

<div class="card">
    <p class="category">{category}</p>
</div>

<style>
    .card {
        border: 1px solid red;
        color: white;
    }

    .category {
        /* Add some styling for category if needed */
    }
</style>