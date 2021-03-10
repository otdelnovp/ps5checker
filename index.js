require("dotenv").config();
const schedule = require("node-schedule");

const utils = require("./src/utils");
const availabilityCheck = require("./src/checkAvailability");
const stats = {
    totalRuns: 0,
    lastRun: "never",
};

console.log("Запускаем проверку наличия консоли: " + utils.getTimeStr());
utils.sendUpdate({ text: "+++ Запускаем проверку наличия консоли +++" });
schedule.scheduleJob(`*/${process.env.UPDATE_TIME || 5} * * * *`, function () {
    const time = utils.getTimeStr();
    console.log("Очередная проверка: " + time);
    stats.totalRuns++;
    stats.lastRun = time;
    availabilityCheck.runAvailabilityCheck();
});

schedule.scheduleJob("0 9 * * *", function () {
    utils.sendUpdate({
        text: `Общее число проверок: ${stats.totalRuns}\nВремя последней проверки: ${stats.lastRun}`,
    });
});
