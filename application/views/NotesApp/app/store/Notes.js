Ext.define('NotesApp.store.Notes', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage'],
	config: {
		model: 'NotesApp.model.Note',
		// data: [{
		// 	title: 'Note 1',
		// 	narrative: 'narrative 1'
		// }, {
		// 	title: 'Note 2',
		// 	narrative: 'narrative 2'
		// }],
		// autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'notes-app-store'
		},
		sorters: [{
			property: 'dateCreated',
			direction: 'DESC'
		}],
		grouper: {
			sortProperty: 'dateCreated',
			direction: 'DESC',
			groupFn: function (record) {
				if (record && record.data.dateCreated) {
					return record.data.dateCreated.toDateString();
				} else {
					return '';
				}
			}
		}
	}
});