const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Conectado!');
});

client.on('message_create', async (message) => {
	if (message.body === '!sergio') {
		await message.reply('mané');
	}
});

client.initialize();