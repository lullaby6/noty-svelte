    <script>
        import Icon from '@iconify/svelte';
        import {createEventDispatcher} from 'svelte'
        import {fade} from 'svelte/transition'

        export let id;
        export let title = '';
        export let text = '';
        export let scrollHeight = 0;
        let textareaElement;

        function textareaLoad(e){
            textareaElement.scrollHeight = scrollHeight;
        }

        const dispatch = createEventDispatcher()

        function handleRemove(e){
            dispatch('remove', id)
        }

        function handleUpdate(e){
            dispatch('update', {
                id,
                title,
                text,
                scrollHeight: textareaElement.scrollHeight
            })
        }

        function openModal(e){
            dispatch('modal', {
                id,
                title,
                text
            })
        }
    </script>

<div transition:fade={{duration: 250}} class="shadow-md flex flex-col border dark:hover:border-neutral-700 dark:focus-within:border-neutral-700 border-neutral-300 p-2 rounded focus-within:border-neutral-400 hover:border-neutral-400 dark:border-neutral-800 overflow-hidden">
    <input bind:value={title} on:input={handleUpdate} type="text" placeholder="Title..." spellcheck="false" autocomplete="off" class="bg-transparent dark:placeholder:text-neutral-800 placeholder:italic text-xl text-neutral-800 dark:text-white focus:outline-none font-semibold">
    <textarea bind:value={text} on:input={handleUpdate} bind:this={textareaElement} on:load={textareaLoad} rows="7" placeholder="Text..." spellcheck="false" autocomplete="off" class="bg-transparent dark:placeholder:text-neutral-800 placeholder:italic text-lg text-neutral-800 dark:text-white focus:outline-none resize-none scrollbar-thin dark:scrollbar-thumb-neutral-700 scrollbar-thumb-neutral-400 scrollbar-track-transparent"></textarea>
    <div class="flex justify-end gap-2">
        <!-- <div>
            <Icon class="text-2xl dark:text-white text-neutral-800 dark:opacity-10 dark:hover:opacity-100 opacity-50 hover:opacity-100 cursor-pointer" icon="material-symbols:content-copy-outline" />
        </div>
        <div>
            <Icon class="text-2xl dark:text-white text-neutral-800 dark:opacity-10 dark:hover:opacity-100 opacity-50 hover:opacity-100 cursor-pointer" icon="mdi:palette-outline" />
        </div> -->
        <div on:click={handleRemove}>
            <Icon class="text-2xl dark:text-white text-neutral-800 dark:opacity-10 dark:hover:opacity-100 opacity-50 hover:opacity-100 cursor-pointer" icon="material-symbols:delete-outline" />
        </div>
        <div on:click={openModal}>
            <Icon class="text-2xl dark:text-white text-neutral-800 dark:opacity-10 dark:hover:opacity-100 opacity-50 hover:opacity-100 cursor-pointer" icon="material-symbols:fullscreen" />
        </div>
    </div>
</div>