// Hooks/useChat.js
import { useState } from 'react';
import axios from 'axios';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const generateCode = async (prompt) => {
    setErrorMessage(''); // Clear any previous error
    setMessages([...messages, { type: 'user', content: prompt }]); // Add user message to the chat

    // Show skeleton loader for AI response
    setMessages((prevMessages) => [...prevMessages, { type: 'ai', content: 'loading' }]);
    setLoading(true);

    try {
      const response = await axios.post(`http://127.0.0.1:8000/generate-code`, { prompt });
      const data = response.data;
      const cleanedCode = data.generated_code.replace(/^```(jsx|javascript|typescript|mdx|md)|```$/g, '');

      // Replace the loading message with the actual AI response
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1 ? { type: 'ai', content: cleanedCode } : msg
        )
      );
    } catch (error) {
      console.error('Error generating code:', error);
      setMessages((prevMessages) =>
        prevMessages.map((msg, index) =>
          index === prevMessages.length - 1 ? { type: 'ai', content: 'Error generating code' } : msg
        )
      );
      setErrorMessage('Error generating code');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyClick = (generated_code) => {
    navigator.clipboard.writeText(generated_code || '')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Revert back after 2 seconds
      })
      .catch((error) => {
        console.error('Error copying code to clipboard:', error);
      });
  };

  return { messages, loading, errorMessage,setErrorMessage, copied, generateCode, handleCopyClick };
};

export { useChat };