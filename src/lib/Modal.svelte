<script>
    import {fade} from 'svelte/transition'
    export let showModal
</script>

<div transition:fade={{duration: 250}} on:keydown={e => {if(e.key == 'Escape') showModal = false}} on:click={e => {showModal = false}} class='bg-neutral-950 bg-opacity-50 flex justify-center items-center fixed top-0 left-0 h-screen w-screen z-50'>
    <slot></slot>
</div>