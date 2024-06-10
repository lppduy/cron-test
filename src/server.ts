import express from 'express';
import schedule from 'node-schedule';
import axios from 'axios';

// Tạo ứng dụng Express
const app = express();
const port = 3000;

// Hàm giả lập gửi SMS
const sendSMS = (message: string, phoneNumber: string) => {
  console.log(`Sending SMS to ${phoneNumber}: ${message}`);
};

// Hàm giả lập gửi Email qua ActiveCampaign
const sendEmailActiveCampaign = async (email: string, automationId: number) => {
  console.log(`Subscribing ${email} to ActiveCampaign automation ID ${automationId}`);
  // Thực hiện API call tới ActiveCampaign (giả lập)
  // await axios.post('https://your-activecampaign-url/api/3/contact/sync', {
  //   // Data cấu hình
  // });
};

// Hàm giả lập mở khóa video tiếp theo
const unlockNextVideo = (userId: string) => {
  console.log(`Unlocking next video for user ID ${userId}`);
};

// Hàm giả lập gửi Email qua Postmark API
const sendEmailPostmark = async (email: string, subject: string, body: string) => {
  console.log(`Sending Email via Postmark to ${email} with subject "${subject}"`);
  // Thực hiện API call tới Postmark (giả lập)
  // await axios.post('https://api.postmarkapp.com/email', {
  //   // Data cấu hình
  // });
};

// Công việc lúc 8 AM
schedule.scheduleJob('0 8 * * *', async function() {
  const phoneNumber = '1234567890';
  const email = 'user@example.com';
  const automationId = 123;

  sendSMS('Good morning! Here is your daily update.', phoneNumber);
  await sendEmailActiveCampaign(email, automationId);
  console.log('Job at 8 AM completed.');
});

// Công việc lúc 5 PM
schedule.scheduleJob('0 17 * * *', async function() {
  const userId = 'user123';
  const email = 'user@example.com';
  const subject = 'Your next video is unlocked!';
  const body = 'Click here to watch your next video.';

  unlockNextVideo(userId);
  await sendEmailPostmark(email, subject, body);
  sendSMS('Your next video is unlocked! Check your email for more details.', '1234567890');
  console.log('Job at 5 PM completed.');
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
