import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { RxCrossCircled } from "react-icons/rx";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse(null);
    try {
      const res = await axios.post('http://127.0.0.1:5000/', { comment });
      setResponse(res.data.sentiment === 1 ? 'positive' : 'negative');
    } catch (err) {
      console.error('Error:', err);
      setResponse('error');
    } finally {
      setLoading(false);
    }
  };

  const resultFeedback = {
    positive: {
      emoji: '😊',
      message: 'This is a Positive Comment!',
      bg: 'bg-green-100 text-green-700 border-green-300',
    },
    negative: {
      emoji: '😠',
      message: 'This is a Negative Comment!',
      bg: 'bg-red-100 text-red-700 border-red-300',
    },
    error: {
      emoji: '⚠️',
      message: 'Error analyzing comment. Try again.',
      bg: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 ">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className=" h-[400px] w-[600px] bg-white shadow-2xl rounded-2xl p-4 border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-bold text-gray-800">Sentiment Bot</h2>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-red-500 text-3xl"><RxCrossCircled/></button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-black">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="p-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="3"
                placeholder="Type your comment here..."
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex justify-center items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Analyzing...
                  </>
                ) : (
                  'Analyze'
                )}
              </button>
            </form>

            {response && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg border text-center font-medium ${
                  resultFeedback[response]?.bg || ''
                }`}
              >
                <div className="text-2xl mb-1">{resultFeedback[response]?.emoji}</div>
                {resultFeedback[response]?.message}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="text-3xl bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          💬
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
