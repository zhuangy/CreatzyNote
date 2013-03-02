Ext.define('NotesApp.view.MyNotesBook', {
	extend: 'Ext.Panel',
	xtype: 'mynotesbook',
	config: {
		title: 'My Notes Book',
		html: ['<p>here goes my notes book.</p>'],
		items: [{
			xtype: 'image',
			src: '/NotesApp/img/NoteAppLogo.png',
			style: 'width:100px;height:100px',
			itemId: 'notesBook',
		}],
		listeners: [{
			delegate: '#notesBook',
			event: 'tap',
			fn: 'onNotesBookTap'
		}],
	},
	onNotesBookTap:function(){
		this.fireEvent('showNotesBook', this);
	}
});