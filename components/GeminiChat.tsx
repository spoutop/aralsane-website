import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { GlassCard } from './ui/GlassCard';

interface Message {
  role: 'user' | 'model';
  text: string;
}

// Minimal markdown-to-HTML (bold/italic/code/links) with escaping to avoid HTML injection.
const markdownToHtml = (text: string) => {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 bg-white\\/10 rounded">$1</code>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-cyan-300 underline" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n/g, '<br/>');
};

export const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am the ARSG virtual assistant. Ask me about our history, sectors, or leadership.' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const apiKeyRef = useRef<string | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const resolveApiKey = async () => {
    // Priority 1: Vite env (set VITE_GEMINI_API_KEY in .env when building)
    if (import.meta.env.VITE_GEMINI_API_KEY) {
      apiKeyRef.current = import.meta.env.VITE_GEMINI_API_KEY;
      return apiKeyRef.current;
    }

    // Priority 2: global set in a file (e.g., add <script>window.__GEMINI_API_KEY__='key'</script> or ship public/gemini-key.js)
    const maybeWindowKey = (window as any).__GEMINI_API_KEY__ as string | undefined;
    if (maybeWindowKey) {
      apiKeyRef.current = maybeWindowKey;
      return apiKeyRef.current;
    }

    // Priority 3: optional text file placed at /gemini-key.txt with just the key
    try {
      const res = await fetch('/gemini-key.txt', { cache: 'no-store' });
      if (res.ok) {
        const text = (await res.text()).trim();
        if (text) {
          apiKeyRef.current = text;
          return apiKeyRef.current;
        }
      }
    } catch {
      // ignore fetch errors; we'll surface a friendly message below
    }

    return null;
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInputText('');
    setIsLoading(true);

    try {
      const apiKey = apiKeyRef.current ?? await resolveApiKey();
      if (!apiKey) {
        throw new Error("API Key not found. Please set VITE_GEMINI_API_KEY or provide /gemini-key.txt or window.__GEMINI_API_KEY__.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // System context for the bot about ARSG (formatted for clarity)
      const systemContext = `
You are a helpful assistant for Abdul Razzaq Al-Sane & Sons Group (ARSG).

Key facts:
- Founded: 1948 by the Late Abdul Razzaq Al-Sane
- Leadership: Chairman & CEO — Mr. Jameel Abdul Razzaq Al-Sane
- Sectors: Real Estate, Water & Beverages (Abraj Water), Education, Hospitality
- Values: Excellence · Legacy · Sustainability

Guidelines:
- Keep responses concise, professional, and relevant to ARSG.
- If unsure or out of scope, ask for clarification or direct to official channels.
      `.trim();

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-lite-preview-09-2025',
        contents: [
            { role: 'user', parts: [{ text: systemContext + "\nUser Question: " + userMessage }] }
        ],
      });

      const text = response.text || "I apologize, I couldn't process that request right now.";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently offline. Please contact us via email." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <GlassCard className="w-[350px] h-[500px] mb-4 flex flex-col p-0 overflow-hidden border-cyan-500/30 animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="text-white" size={20} />
              <span className="text-white font-medium">ARSG Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-dark/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' ? (
                  <div
                    className={`
                      max-w-[80%] rounded-2xl p-3 text-sm
                      bg-white/10 text-gray-200 rounded-tl-none border border-white/5
                    `}
                    dangerouslySetInnerHTML={{ __html: markdownToHtml(msg.text) }}
                  />
                ) : (
                  <div 
                    className={`
                      max-w-[80%] rounded-2xl p-3 text-sm
                      bg-cyan-600 text-white rounded-tr-none
                    `}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 rounded-2xl p-3 rounded-tl-none">
                  <Loader2 className="animate-spin text-cyan-400" size={16} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-brand-primary border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="w-full bg-brand-dark border border-white/20 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-500 hover:text-cyan-400 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 group"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} className="fill-current" />}
        
        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-brand-dark px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with us
          </span>
        )}
      </button>
    </div>
  );
};
