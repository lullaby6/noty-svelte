<script>	
	import Header from "./lib/Header.svelte"
	import NewNote from "./lib/NewNote.svelte"
	import Note from "./lib/Note.svelte"

	let allNotes = []
	if(localStorage.hasOwnProperty('notes')) allNotes = JSON.parse(localStorage.notes)
	let notes = [...allNotes]

	let search = false

	function newNote({detail}){
		const note = detail

		allNotes = [note, ...allNotes]
		notes = [...allNotes]
		localStorage.notes = JSON.stringify(allNotes)
    }

	function removeNote({detail}){
		const noteId = detail
		const updatedNotes = allNotes.filter(note => note.id !== noteId)

		allNotes = [...updatedNotes]
		notes = [...allNotes]
		localStorage.notes = JSON.stringify(allNotes)
    }

	function updateNote({detail}){
		const note = detail
		const index = allNotes.findIndex(n => n.id == note.id)

		allNotes[index] = note
		notes = [...allNotes]
		localStorage.notes = JSON.stringify(allNotes)
	}

	function handleSearch({detail}){
		const q = detail.trim()
		if(q == ''){
			notes = [...allNotes]
			search = false
			return false
		}
		
		notes = allNotes.filter(note => {
			const title = note.title.toLowerCase()
			const text = note.text.toLowerCase()

			return title.indexOf(q) > -1 || text.indexOf(q) > -1
		})
		search = true
	}

	import ModalNote from "./lib/ModalNote.svelte"
	let showModal = false
	let modalID
	let modalTitle
	let modalText

	function openModal({detail}){
		modalID = detail.id
		modalTitle = detail.title
		modalText = detail.text
		showModal = true
	}
</script>

<main class="bg-white dark:bg-neutral-900 min-h-screen flex flex-col">
	<Header on:search={handleSearch}/>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 max-h-screen overflow-y-scroll scrollbar-thin dark:scrollbar-thumb-neutral-600 scrollbar-thumb-neutral-300 scrollbar-track-transparent">
		{#if !search}
			<NewNote on:new={newNote}/>
		{/if}
		{#each notes as {id, title, text, scrollHeight}}
			<Note on:modal={openModal} on:update={updateNote} on:remove={removeNote} {id} {title} {text} {scrollHeight}/>
		{/each}
	</div>
	<ModalNote on:update={updateNote} bind:showModal {modalID} {modalTitle} {modalText} on:close={() => {showModal = false}}></ModalNote>
</main>