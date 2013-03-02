Ext.define('NotesApp.view.PublicNotesBook', {
    extend: 'Ext.Panel',
    xtype:'publicnotesbook',
    config:{
        title:'public Notes Book',
        html:['<p>here goes public notes book.</p>'],
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