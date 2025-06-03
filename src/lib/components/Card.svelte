<script lang="ts">
    interface CardProps {
        category: string;
    }

    const { category = 'Default Category' }: CardProps =  $props();
</script>

<div class="card">
    <p class="category">{category}</p>
</div>

<style>
    .card {
        border: 1px solid red;
        color: white;
    }
</style>