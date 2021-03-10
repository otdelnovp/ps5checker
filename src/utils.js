const fetch = require("node-fetch");
const moment = require("moment");

const CHAT_ID = process.env.CHAT_ID;
const BOT_TOKEN = process.env.BOT_TOKEN;
const URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

if (!CHAT_ID || !BOT_TOKEN) {
    throw new Error("Token or chat ID is missing: " + CHAT_ID + " " + BOT_TOKEN);
}

const sendUpdate = (data) => {
    data.chat_id = CHAT_ID;
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => res.json());
};

const getTimeStr = (dateTime = moment()) => {
    return dateTime.format('DD.MM.YYYY HH:mm').toString();
};

module.exports = {
    sendUpdate,
    getTimeStr,
};
