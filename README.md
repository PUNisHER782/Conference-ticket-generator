# 🔥 Solo Sparks – Personal Growth Quest System

Solo Sparks is a full-stack self-development application that generates personalized quests based on user personality traits and tracks their reflections to boost emotional intelligence, self-awareness, and reward-driven motivation.

---

## 🌟 Features

- ✅ Personality profiling through a psychology-based quiz
- ✅ AI-driven quest generation tailored to user traits
- ✅ Reflection journaling with optional multimedia uploads (video/audio/text)
- ✅ Spark points economy & reward redemption system
- ✅ Analytics dashboard to view growth and engagement

---

## 🛠 Tech Stack

| Layer        | Technology                     |
|-------------|---------------------------------|
| Frontend     | React.js, Tailwind CSS         |
| Backend      | Node.js, Express.js            |
| Database     | MongoDB (Mongoose)             |
| File Uploads | Cloudinary                     |
| Auth (Optional) | JWT                          |

---

## 📁 Folder Structure

solo-sparks/
├── solo-sparks-frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ ├── index.css
│ │ └── index.js
│ ├── tailwind.config.js
│ ├── postcss.config.js
│ └── package.json
│
├── solo-sparks-backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── middlewares/
│ ├── utils/
│ ├── .env
│ ├── app.js
│ └── server.js


---

## 🚀 Getting Started

### 🧩 Prerequisites

- Node.js + npm
- MongoDB
- Cloudinary Account (for multimedia upload)

---

### 🔧 Setup Instructions

#### Backend

####bash
cd solo-sparks-backend
npm install
# Create a .env file with:
# PORT=5000
# MONGO_URI=your_mongodb_uri
# JWT_SECRET=your_jwt_secret (optional)
node server.js
Frontend

cd solo-sparks-frontend
npm install
npm start
🔐 Environment Variables
Backend .env

PORT=5000
MONGO_URI=mongodb://localhost:27017/solosparks
JWT_SECRET=your_jwt_secret

Frontend .env (if required)

REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name

📊 API Endpoints
Method	Endpoint	Description
POST	/personality/submit-personality	Submit user traits
GET	/quests/get-quests	Get daily quests
POST	/reflection/submit	Submit quest reflection
GET	/analytics/summary/:userId	Fetch user analytics
POST	/rewards/redeem	Redeem user reward
✨ Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
