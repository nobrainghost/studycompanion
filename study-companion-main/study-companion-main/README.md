# study-companion
An AI Powered study Companion

## **Phase 1: Initial Setup & File Upload System**

### 1.1 Frontend Setup
- [X] Set up the project using **React**
- [ ] Create a homepage where users can upload course materials.
- [ ] Build a file upload form with input validation (accept **PDF**, **DOCX**, and **TXT** only).
- [ ] Implement error handling for invalid file formats and sizes.

### **1.2 Backend Setup**
- [ ] Set up a **Flask/Django** backend.
  - Initialize the server and ensure it listens for file uploads.
- [ ] Create an API endpoint to handle file uploads.
- [ ] Install libraries for parsing files:
- [ ] Set up CORS to allow requests between frontend and backend.

### **1.3 Testing and Integration**
- [ ] Test file uploads from the frontend to the backend.
- [ ] Verify that the backend is correctly receiving files.
  
---

## **Phase 2: Text Extraction & Natural Language Processing (NLP)**

### **2.1 File Parsing**
- [ ] Parse PDFs using **PyMuPDF** and DOCX using **python-docx**.
  - Extract plain text from uploaded documents.
- [ ] Store the extracted text temporarily or in a database for later use.

### **2.2 Implement NLP**
- [ ] Install NLP libraries
- [ ] Process the extracted text:
  - **Tokenization**: Split the text into sentences/words.
  - **Keyword Extraction**: Use NLP techniques to identify key concepts and terms.
  
### **2.3 Save Processed Data**
- [ ] Store the extracted keywords and key phrases in a database ( **SQLite**, **PostgreSQL**).
  
---

## **Phase 3: Flashcard & Quiz Generation**

### **3.1 Flashcard Creation**
- [ ] Develop a flashcard component in **React**.
  - Front of the card: A key concept or question.
  - Back of the card: The definition or explanation.
- [ ] Allow users to shuffle flashcards or mark them for revision.

### **3.2 Quiz Generation**
- [ ] Write Python scripts to automatically generate **multiple-choice questions**, **fill-in-the-blank**, and **true/false** questions.
  - Use extracted keywords and definitions to form questions.
- [ ] Set up a quiz interface in **React** to display generated questions.
  - Track the user's correct and incorrect answers.

### **3.3 Save Quiz Results**
- [ ] Create endpoints to store quiz results in the database.
  - POST route to submit quiz results: `/quiz-results`.

---

## **Phase 4: Progress Tracking & Adaptive Learning**

### **4.1 Performance Tracking**
- [ ] Set up user profiles 
  - Store user progress (correct/incorrect answers, completed flashcards).
- [ ] Implement a **Progress Dashboard** in **React** to display user statistics.
  - Show performance trends, strengths, and weak areas.

### **4.2 Adaptive Learning**
- [ ] Write algorithms to recommend flashcards or quiz questions based on user performance.
  - Focus on weak areas (questions answered incorrectly).
  - Recycle flashcards that were marked for revision.

### **4.3 Store Data**
- [ ] Store all user progress data in a database (e.g., **SQLite**, **Firebase**).

---

## **Phase 5: User Authentication & Personalization**

### **5.1 Authentication**
- [ ] Add user authentication to the platform.
  - Implement **Firebase Authentication** or **Django Auth**.
  - Users should be able to sign up, log in, and log out.
  
### **5.2 Personalization**
- [ ] Allow users to customize their study sessions:
  - Save study preferences (time of study, number of flashcards per session).
  - Allow users to mark topics they want to prioritize.

### **5.3 Data Security**
- [ ] Implement **JWT tokens** for authentication (if using a custom backend).
- [ ] Secure user data with proper authentication and authorization mechanisms.
  
---

## **Phase 6: Study Suggestions and Analytics**

### **6.1 Analytics Dashboard**
- [ ] Build visual representations of user progress.
  - Use **Chart.js** or **D3.js** to display performance charts and graphs.
- [ ] Show metrics like:
  - Total study time.
  - Areas of improvement.
  - Topics mastered vs. topics needing more review.

### **6.2 Study Suggestions**
- [ ] Based on the user's performance, suggest next steps:
  - Recommend specific flashcards and quizzes based on their weakest topics.
  - Provide additional resources like textbook sections, video tutorials, or past papers.

### **6.3 Backend Analysis**
- [ ] Write Python scripts to process user performance data and suggest study improvements.
- [ ] Make suggestions visible on the dashboard for the user to follow.

---

## **Phase 7: Integration of Past Papers and External Resources**

### **7.1 Past Paper Uploads**
- [ ] Allow users to upload past exam papers (PDF or DOCX).
- [ ] Parse past papers using the same techniques from **Phase 2**.
  
### **7.2 Past Paper Question Extraction**
- [ ] Write scripts to extract questions from the past papers.
  - Identify relevant questions for the user's weak areas.
- [ ] Integrate past paper questions into the flashcard and quiz system.
  
### **7.3 External Resources**
- [ ] Link to online textbooks, video tutorials, and other resources.
- [ ] Use web scraping libraries to automatically fetch resources if needed (optional).

---

## **Phase 8: Hosting & Deployment**

### **8.1 Frontend Hosting**
- [ ] Deploy the frontend
- [ ] Ensure the app is mobile-responsive and works across devices.

### **8.2 Backend Hosting**
- [ ] Deploy the backend on 
- [ ] Set up a **PostgreSQL** or **Firebase** database for production.

### **8.3 CI/CD Setup**
- [ ] Implement a **CI/CD pipeline** using **GitHub Actions**
  - Automate testing, deployment, and updates to ensure smooth project scaling.

---

## **Phase 9: (Optional) AI Integration for Advanced Recommendations**

### **9.1 AI Study Schedules**
- [ ] Implement basic AI algorithms to suggest **personalized study schedules**.
  - Train the model on user performance data
  
### **9.2 Deep Content Analysis**
- [ ] Use **Transformers** from **Hugging Face** to analyze course material deeply.
  - Summarize content, identify high-level concepts, and make study recommendations.

### **9.3 AI-Based Flashcards**
- [ ] Experiment with more advanced techniques like **GPT** models for generating flashcards based on a deeper understanding of the course content.

---


