<script>
    import Icon from '@iconify/svelte';
    import {createEventDispatcher} from 'svelte'
    import {fade} from 'svelte/transition'

    export let title = '';
    export let text = '';
    let textareaElement;

    const dispatch = createEventDispatcher()

    function newNote(e){
        dispatch('new', {
            id: crypto.randomUUID(),
            title,
            text
        })
        title = ''
        text = ''
    }
</script>

<div transition:fade={{duration: 250}} class="shadow-md flex flex-col border dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus-within:border-neutral-700 border-neutral-300 p-2 rounded focus-within:border-neutral-400 hover:border-neutral-400 ">
    <input type="text" placeholder="Title..." spellcheck="false" autocomplete="off" class="bg-transparent dark:placeholder:text-neutral-800 dark:text-white placeholder:italic text-xl text-neutral-800 focus:outline-none font-semibold" bind:value={title}>
    <textarea bind:this={textareaElement} rows="7" placeholder="Text..." spellcheck="false" autocomplete="off" class="bg-transparent dark:placeholder:text-neutral-800 dark:text-white placeholder:italic text-lg text-neutral-800 focus:outline-none resize-none scrollbar-thin dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-400 scrollbar-track-transparent" bind:value={text}></textarea>
    <div class="flex justify-end">
        <div on:click={newNote}>
            <Icon icon="tabler:arrow-up" rotate={2} class="text-2xl dark:text-white text-neutral-800 dark:opacity-10 dark:hover:opacity-100 opacity-50 hover:opacity-100 cursor-pointer"/>
        </div>
    </div>
</div>