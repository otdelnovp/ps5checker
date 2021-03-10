# ps5checker

Проверка наличия PS5 в магазинах
И отправка уведомлений в tg бот

Для создание бота написать боту BotFather

Ссылка для получения кода бота
https://api.telegram.org/bot{КОД_БОТА}/getUpdates

Описание .env файла

BOT_TOKEN - token fot bot
CHAT_ID - chat id to send message to
UPDATE_TIME - interval in minutes to define how often bot should check availability
SITE\_{n} sites urls and button selector seprated with ";". F.E. SITE_1=https://www.amazon.co.uk/PlayStation-9395003-5-Console/dp/B08H95Y452;#add-to-cart-button
