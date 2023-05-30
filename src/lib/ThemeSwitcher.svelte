<script>
    import Icon from '@iconify/svelte';
    import {getTheme, startThemeManager, toggleTheme} from './themeManager.js'

    export let theme = 'light'

	startThemeManager()
    theme = getTheme()

    function handleToggleTheme(){
        toggleTheme()
        theme = getTheme()
    }
</script>

<div on:click={handleToggleTheme} class="p-2 rounded-full dark:text-white dark:hover:bg-neutral-700 dark:bg-neutral-800 text-xl cursor-pointer opacity-50 hover:opacity-100 text-neutral-800 bg-neutral-200">
    {#if theme == 'light'}
        <Icon icon="ph:moon-bold"/>
    {:else}
        <Icon icon="ph:sun-bold"/>
    {/if}
</div>