Ext.define('NotesApp.view.Login', {
	extend: 'Ext.form.Panel',
	alias: 'widget.loginview',
	requires: ['Ext.util.DelayedTask','Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
	config: {
		title: 'Login',
		items: [{
			xtype: 'image',
			src: Ext.Viewport.getOrientation() == 'portrait' ? '/NotesApp/img/NoteAppLogo.png' : '/NotesApp/img/NoteAppLogo.png',
			style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:100px;height:100px;margin:auto' : 'width:50px;height:50px;margin:auto'
		}, {
			xtype: 'label',
			html: 'Login failed. Please enter the correct credentials.',
			itemId: 'signInFailedLabel',
			hidden: true,
			hideAnimation: 'fadeOut',
			showAnimation: 'fadeIn',
			style: 'color:#990000;margin:5px 0px;'
		}, {
			xtype: 'fieldset',
			title: 'Welcome to Crazy Note',
			items: [{
				xtype: 'textfield',
				placeHolder: 'Username',
				itemId: 'userNameTextField',
				name: 'userNameTextField',
				required: true
			}, {
				xtype: 'passwordfield',
				placeHolder: 'Password',
				itemId: 'passwordTextField',
				name: 'passwordTextField',
				required: true
			}]
		}, {
			xtype: 'button',
			itemId: 'logInButton',
			ui: 'action',
			padding: '10px',
			text: 'Log In'
		}],
		listeners: [{
			delegate: '#logInButton',
			event: 'tap',
			fn: 'onLogInButtonTap'
		}],



	},
	onLogInButtonTap: function() {

		var usernameField = this.down('#userNameTextField'),
			passwordField = this.down('#passwordTextField'),
			label = this.down('#signInFailedLabel');

		label.hide();

		var username = usernameField.getValue(),
			password = passwordField.getValue();

		// Using a delayed task in order to give the hide animation above
		// time to finish before executing the next steps.
		that = this;
		var task = Ext.create('Ext.util.DelayedTask', function() {

			label.setHtml('');

			that.fireEvent('signInCommand', that, username, password);

			usernameField.setValue('');
			passwordField.setValue('');
		});

		task.delay(500);
	},
	showSignInFailedMessage: function(message) {
		var label = this.down('#signInFailedLabel');
		label.setHtml(message);
		label.show();
	},
});