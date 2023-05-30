<script>
    import Icon from '@iconify/svelte';
    import {createEventDispatcher} from 'svelte'
    import ThemeSwitcher from "./ThemeSwitcher.svelte"

    let query = '';
    let inputElement

    let showClearInput = false

    const dispatch = createEventDispatcher()

    function handleSearch(e){
        dispatch('search', e.target.value)
    }

    function handleClearInput(){
        inputElement.value = ''
        // inputElement.focus()
        dispatch('search', '')
    }
</script>

<div class="flex items-center shadow-md border dark:border-neutral-800 border-b-neutral-300 gap-2 p-2 sticky top-0 left-0 w-full bg-white dark:bg-neutral-900">
    <div class="relative flex justify-center items-center border dark:focus-within:border-neutral-700 border-neutral-300 focus-withi:border-neutral-400 dark:border-neutral-800 rounded overflow-hidden w-full">
        <div on:click={handleClearInput} class="dark:bg-neutral-800 h-9 pl-2 pr-2 bg-neutral-100 {showClearInput ? "cursor-pointer" : ""}">
            {#if !showClearInput}
                <Icon icon="material-symbols:search" class="text-3xl text-neutral-500 dark:text-neutral-600 h-full"/>
            {:else}
                <Icon icon="iconamoon:close" class="pointer-events-none cursor-pointer text-3xl text-neutral-500 dark:text-neutral-600 h-full"/>
            {/if}
        </div>
        <input bind:this={inputElement} on:blur={() => {showClearInput = false}} on:focus={() => {showClearInput = true}} on:input={handleSearch} type="text" placeholder="Search note..." spellcheck="false" autocomplete="off" class="bg-transparent dark:placeholder:text-neutral-800 focus:outline-none placeholder:italic dark:text-white text-neutral-800 text-xl w-full pl-2 p-1">
    </div>
    <ThemeSwitcher></ThemeSwitcher>
</div>