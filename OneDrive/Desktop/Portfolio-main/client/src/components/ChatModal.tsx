import { useState } from "react";

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);

  const chatOptions = [
    "💼 Tell me about your services",
    "🚀 I have a project idea",
    "📱 Let's schedule a call",
  ];

  const handleOptionClick = (option: string) => {
    // For now, just show an alert. In a real app, this would integrate with a chat service
    alert(
      `Thanks for your interest! Please email me directly for now: ${option}`
    );
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-electric to-neon rounded-full flex items-center justify-center shadow-lg hover:scale-110 transform transition-all duration-300 z-50"
      >
        <i className="fas fa-comments text-black dark:text-white text-xl"></i>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-8 w-80 bg-white dark:bg-dark-card rounded-2xl shadow-2xl z-50 overflow-hidden">
          <div className="bg-gradient-to-r from-electric to-neon p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-black dark:text-white font-semibold">
                Chat with Vishal
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <i className="fas fa-times text-black dark:text-white"></i>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 dark:bg-dark-border p-3 rounded-lg">
                <p className="text-sm text-black">
                  Hi! I'm Vishal. Thanks for checking out my portfolio! 👋
                </p>
              </div>
              <div className="bg-gray-100 dark:bg-dark-border p-3 rounded-lg">
                <p className="text-sm text-black dark:text-black">
                  How can I help you today?
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {chatOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="w-full text-left p-3 rounded-lg bg-gray-50 dark:bg-dark-border text-black dark:text-black hover:bg-electric hover:text-white transition-colors text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
