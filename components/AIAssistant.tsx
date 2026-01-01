
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am your Modern Treasury Spec assistant. Ask me how to create a payment order, or to explain a specific API schema.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setLoading(true);

    try {
      const response = await gemini.chat(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response || 'Sorry, I encountered an error.' }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error connecting to Gemini API. Please check your configuration.' }]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "How do I create an ACH payment?",
    "Explain the 'account_detail' schema.",
    "Generate a Wire payment payload.",
    "What is a Counterparty?"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <i className="fas fa-robot text-white text-xs"></i>
          </div>
          <span className="font-semibold text-slate-800">Spec Intelligence</span>
        </div>
        <span className="text-xs text-slate-400">Powered by Gemini 3.0</span>
      </div>

      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none prose prose-slate'
            }`}>
              {msg.content.split('\n').map((line, j) => (
                <p key={j} className={j > 0 ? 'mt-2' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-100 rounded-2xl px-4 py-3 rounded-tl-none">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-2 w-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-50 border-t border-slate-200">
        <div className="flex flex-wrap gap-2 mb-4">
          {quickPrompts.map((p, i) => (
            <button 
              key={i}
              onClick={() => { setInput(p); }}
              className="text-xs bg-white border border-slate-200 px-3 py-1.5 rounded-full text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about the treasury spec..."
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
          />
          <button 
            onClick={handleSend}
            disabled={loading}
            className="absolute right-2 top-1.5 bg-blue-600 text-white h-9 w-9 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
