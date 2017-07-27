const {dialog, app, nativeImage} = require('electron');
const fs=require('fs');
const path = require('path');

module.exports={showMessage};

function showMessage(browserWindow){
	dialog.showMessageBox(browserWindow,{
		type: 'info',
		message: 'Hello',
		detail: 'Just a friendly meow.',
		buttons: ['Meow','Close'],
		defaultId: 0
	},(clickedIndex)=>{
		console.log(clickedIndex);
	});
}