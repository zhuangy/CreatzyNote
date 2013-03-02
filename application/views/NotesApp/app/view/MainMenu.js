Ext.define('NotesApp.view.MainMenu', {
    extend: 'Ext.tab.Panel',
    require:['Ext.TitleBar'],
    alias: 'widget.mainmenuview',
    config:{
        tabBarPosition:'top',
        styleHtmlContent:true,
        items:[
            {
                xtype:'mynotesbook'
            },
            {
                xtype:'publicnotesbook'
            }
        ]
    }
});