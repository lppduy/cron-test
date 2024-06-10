"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_schedule_1 = __importDefault(require("node-schedule"));
// Tạo ứng dụng Express
const app = (0, express_1.default)();
const port = 3000;
// Hàm giả lập gửi SMS
const sendSMS = (message, phoneNumber) => {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
};
// Hàm giả lập gửi Email qua ActiveCampaign
const sendEmailActiveCampaign = (email, automationId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Subscribing ${email} to ActiveCampaign automation ID ${automationId}`);
    // Thực hiện API call tới ActiveCampaign (giả lập)
    // await axios.post('https://your-activecampaign-url/api/3/contact/sync', {
    //   // Data cấu hình
    // });
});
// Hàm giả lập mở khóa video tiếp theo
const unlockNextVideo = (userId) => {
    console.log(`Unlocking next video for user ID ${userId}`);
};
// Hàm giả lập gửi Email qua Postmark API
const sendEmailPostmark = (email, subject, body) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Sending Email via Postmark to ${email} with subject "${subject}"`);
    // Thực hiện API call tới Postmark (giả lập)
    // await axios.post('https://api.postmarkapp.com/email', {
    //   // Data cấu hình
    // });
});
// Công việc lúc 8 AM
node_schedule_1.default.scheduleJob('0 8 * * *', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const phoneNumber = '1234567890';
        const email = 'user@example.com';
        const automationId = 123;
        sendSMS('Good morning! Here is your daily update.', phoneNumber);
        yield sendEmailActiveCampaign(email, automationId);
        console.log('Job at 8 AM completed.');
    });
});
// Công việc lúc 5 PM
node_schedule_1.default.scheduleJob('0 17 * * *', function () {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = 'user123';
        const email = 'user@example.com';
        const subject = 'Your next video is unlocked!';
        const body = 'Click here to watch your next video.';
        unlockNextVideo(userId);
        yield sendEmailPostmark(email, subject, body);
        sendSMS('Your next video is unlocked! Check your email for more details.', '1234567890');
        console.log('Job at 5 PM completed.');
    });
});
// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
