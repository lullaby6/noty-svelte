<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from '@iconify/svelte';

    const dispatch = createEventDispatcher()

	import Modal from "./Modal.svelte"

    export let showModal = false
    export let modalID = 0
    export let modalTitle = ''
    export let modalText = ''

    function updateNote(e){
        dispatch('update', {
            id: modalID,
            title: modalTitle,
            text: modalText,
            textt: modalText,
        })
    }
</script>

<div>
    {#if showModal}
        <Modal bind:showModal>
            <div on:click|stopPropagation class="relative shadow-md dark:bg-neutral-900 bg-white w-3/4 sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col gap-2 p-4 rounded overflow-hidden">
                <input bind:value={modalTitle} on:input={updateNote} type="text" placeholder="Title..." spellcheck="false" autocomplete="off" class="bg-transparent dark:text-white dark:placeholder:text-neutral-800 placeholder:italic text-2xl text-neutral-800 focus:outline-none font-semibold">
                <textarea bind:value={modalText} on:input={updateNote} rows="15" placeholder="Text..." spellcheck="false" autocomplete="off" class="bg-transparent dark:text-white dark:placeholder:text-neutral-800 placeholder:italic text-xl text-neutral-800 focus:outline-none resize-none"></textarea>
                <div on:click={e => {showModal = false}} class="absolute top-0 right-0 m-2">
                    <Icon class="text-4xl dark:text-white text-neutral-800 dark:opacity-10 dark:hover:opacity-100 opacity-50 dark:opacity-10 hover:opacity-100 cursor-pointer" icon="iconamoon:close" />
                </div>
            </div>
        </Modal>
    {/if}
</div>
