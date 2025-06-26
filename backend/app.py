
from flask import Flask, request,jsonify
from flask_cors import CORS
import pickle
import nltk
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
import re

nltk.download('stopwords')
ps = PorterStemmer()

app = Flask(__name__)
# Allow requests from your frontend's domain
CORS(app, origins=["https://sentiment-bot-swart.vercel.app"])


# Load your model and vectorizer
model = pickle.load(open('clf.pkl', 'rb'))
vectorizer = pickle.load(open('tfidf.pkl', 'rb'))

def preprocess_text(text):
    review = re.sub('[^a-zA-Z]', ' ', text)
    review = review.lower().split()
    review = [ps.stem(word) for word in review if word not in stopwords.words('english')]
    return ' '.join(review)

# @app.route('/', methods=['GET', 'POST'])
# def analyze_sentiment():
#     if request.method == 'POST':
#         comment = request.form['comment']
#         cleaned = preprocess_text(comment)
#         vector = vectorizer.transform([cleaned])
#         prediction = model.predict(vector)[0]
#         print(prediction)
#         return render_template('index.html', sentiment=prediction)
#     return render_template('index.html')

@app.route('/', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    comment = data.get('comment', '')
    cleaned = preprocess_text(comment)
    vector = vectorizer.transform([cleaned])
    prediction = model.predict(vector)[0]
    return jsonify({'sentiment': int(prediction)})

import os
port = int(os.environ.get("PORT", 5000))

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=port)
