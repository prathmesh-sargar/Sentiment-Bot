# 🛍️ Sentiment Analysis Chatbot – Flask + React

A powerful yet lightweight **Sentiment Analysis Chatbot** designed to mimic a real-world e-commerce assistant. Built using **Flask (Python)** for the backend and **React + Vite + Tailwind CSS** for the frontend, this bot analyzes user comments and detects whether they are **positive** 😊 or **negative** 😠 — all in real-time.

---

## ✨ Features

- 🔍 **Real-Time Sentiment Analysis** using a trained ML model
- 🧠 **Preprocessing with NLTK** (stopwords removal, stemming, cleaning)
- 💬 **Interactive Chatbot UI** positioned like support bots on e-commerce sites
- 🎨 **Responsive Frontend** built with React + Tailwind CSS
- ⚡ **Fast Performance** powered by Vite
- 🚀 **Modular & Scalable Codebase** (ideal for extending to product reviews, feedback systems, etc.)

---

## 📷 Preview

![image](https://github.com/user-attachments/assets/c4c00342-22f1-4f8d-a77e-dedc8bee7bf6)

![image](https://github.com/user-attachments/assets/73486ad8-3856-40d2-a362-4329aefa1b54)
> *Chatbot UI in the corner — lightweight and clean.*

---

## 🧰 Tech Stack

### 🔗 Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) – API handling

### 🧠 Backend
- [Flask](https://flask.palletsprojects.com/)
- [Pickle](https://docs.python.org/3/library/pickle.html) – to load the trained model
- [NLTK](https://www.nltk.org/) – for text preprocessing
- [scikit-learn](https://scikit-learn.org/) – model training (offline)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
https://github.com/prathmesh-sargar/Sentiment-Bot.git
cd sentiment-chatbot

```

### Bacend setup : 
```
pip install Flask Flask-Cors nltk scikit-learn
````


### After installing, don’t forget to download NLTK stopwords:

python Shell run this 
```
import nltk
nltk.download('stopwords')  
```
📌 This is required to perform text preprocessing like removing common stopwords (e.g., "is", "the", "and").




