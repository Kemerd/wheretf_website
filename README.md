# **mixmate.ai**

## **Overview**
mixmate.ai is an AI-powered personal and business inventory tracker that helps users quickly locate misplaced objects using voice, text, and image search. The app leverages natural language processing (NLP), vector search, and AI-based predictions to retrieve stored item locations efficiently.

## **Features**
- 🔍 **AI-powered search**: Use natural language or voice commands like "Where'd that frickin’ socket set go?" to find items instantly.
- 📸 **Image-based tracking**: Snap a photo to classify and store objects.
- 📍 **Location hierarchy**: Track storage in nested structures (rooms, shelves, drawers).
- 🔄 **Behavioral tracking**: AI predicts likely locations based on past object movements.
- 🔗 **Supabase Integration**: Secure, scalable backend with vector search support.
- ⚡ **Edge Functions for Fast Lookups**: Runs AI-powered search on Supabase Edge Functions to minimize latency.

## **Tech Stack**
### **Frontend:**
- **Flutter (Dart)** – Cross-platform mobile UI
- **Supabase Auth** – User authentication and access control

### **Backend & AI:**
- **Supabase Edge Functions** – Executes AI-driven object search
- **PostgreSQL + pgvector** – Stores structured & vector-based embeddings for search
- **OpenAI GPT-4 & CLIP** – AI-powered natural language processing & image embeddings
- **Supabase Storage** – Stores user-uploaded object images

## **Installation & Setup**
### **Prerequisites:**
- Node.js & npm installed
- Supabase account & project set up
- OpenAI API key (for embeddings & AI search)

### **1. Clone the Repository**
```sh
git clone https://github.com/yourrepo/mixmate-ai.git
cd mixmate-ai
```

### **2. Install Dependencies**
```sh
npm install
```

### **3. Set Up Environment Variables**
Create a `.env` file and add your API keys:
```
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_key
```

### **4. Deploy Supabase Edge Functions**
```sh
supabase functions deploy find_object
supabase functions deploy classify_image
```

### **5. Run the Application**
```sh
flutter run
```

## **API Endpoints**
### **1. Search for an Object (Text-Based Search)**
```http
POST /functions/v1/find_object
```
#### **Request Body:**
```json
{
  "query": "Where is my 3/8 socket set?"
}
```
#### **Response:**
```json
{
  "item": "Socket Set",
  "location": "Red Toolbox - Bottom Drawer"
}
```

### **2. Classify an Image (Image-Based Search)**
```http
POST /functions/v1/classify_image
```
#### **Request Body:**
```json
{
  "image_url": "https://your-cdn.com/image.jpg"
}
```
#### **Response:**
```json
{
  "match": true,
  "item_id": "1234",
  "location": "Toolbox - Top Drawer"
}
```

## **Future Enhancements**
- 🔄 **Autofill & autocomplete for object searches**
- 📡 **QR/NFC tag integration for instant item scanning**
- 🗣 **Voice-based search with Whisper AI**
- 🤖 **AI-driven location suggestions based on user behavior**

## **Contributing**
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## **License**
All Rights Reserved.

## **Contact**
For support or inquiries, email **support@mixmate.ai** or open an issue on GitHub.
