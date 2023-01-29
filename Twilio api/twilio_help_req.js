import {sendTextMessage} from 'backend/twilio.jsw';
import wixData from 'wix-data';


export function sendBut_click(event) {
	let sendmess = $w('#messTosend').value
	wixData.get("contact02","54f9ac32-094a-4b09-9ecd-ea35cece9fed").then((item)=>{
		sendTextMessage(item.phone, sendmess);
	});
}
