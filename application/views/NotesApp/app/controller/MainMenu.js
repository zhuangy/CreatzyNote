Ext.define('NotesApp.controller.MainMenu', {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			mainMenuView: 'mainmenuview',
			myNotesBookView:'mynotesbook',
			publicNotesBookView:'publicnotesbook',
			notesListView:'noteslistview'
		},
		control: {
			myNotesBookView: {
				// The commands fired by the notes list.
				showNotesBook: 'onShowNotesBookCommand'
			},
			publicNotesBookView: {
				// The commands fired by the notes list.
				showNotesBook: 'onShowNotesBookCommand'
			},
		}
	},
	onShowNotesBookCommand:function(){
		console.log("go to notes list");
		notesListView = this.getNotesListView();
		Ext.Viewport.animateActiveItem(notesListView, this.getSlideLeftTransition());
	},
	getSlideLeftTransition: function() {
		return {
			type: 'slide',
			direction: 'left'
		};
	}
});