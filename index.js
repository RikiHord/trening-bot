const TelegramBot = require('node-telegram-bot-api');
var token = TOKEN;

const bot = new TelegramBot(token, {polling: true, filepath: true});

bot.on('message', function(msg){
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "Анонимный чат: ---===Ссылка===---");
})