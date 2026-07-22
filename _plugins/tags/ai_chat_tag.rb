# _plugins/tags/ai_chat_tag.rb
module Axomiya
  class AIChatTag < Liquid::Tag
    def initialize(tag_name, args, options)
      super
      @args = args.strip
    end
    
    def render(context)
      @context = context
      @site = context.registers[:site]
      @config = @site.config['ai_chat'] || {}
      
      generate_chat_html
    end
    
    private
    
    def generate_chat_html
      <<~HTML
      <div class="ai-chat-widget" data-api-key="#{@config['api_key']}" data-model="#{@config['model'] || 'gemini-pro'}">
        <div class="chat-header">
          <h4>🤖 Axomiya AI Assistant</h4>
        </div>
        
        <div class="chat-messages" id="chatMessages">
          <div class="message system">
            <p>#{@config['welcome_message'] || 'Welcome! How can I help you today?'}</p>
          </div>
        </div>
        
        <div class="chat-input-container">
          <div class="quick-actions">
            <button onclick="quickQuestion('community')">Community</button>
            <button onclick="quickQuestion('projects')">Projects</button>
            <button onclick="quickQuestion('contributing')">Contributing</button>
          </div>
          <div class="input-group">
            <textarea id="chatInput" rows="2" placeholder="Ask about Axomiya IT Labs..."></textarea>
            <button onclick="sendMessage()" id="sendBtn">Send</button>
          </div>
        </div>
        
        <script>
          const CHAT_CONFIG = {
            apiKey: '#{@config['api_key'] || ''}',
            model: '#{@config['model'] || 'gemini-pro'}',
            apiUrl: '#{@config['api_url'] || '/api/chat'}',
            context: {
              community: #{@config['community_context'].to_json || '{}'},
              projects: #{@config['projects_context'].to_json || '{}'}
            }
          };
          
          const RESPONSES = {
            welcome: "Welcome to Axomiya IT Labs! I am your AI assistant for open-source projects.",
            community: "Our community has 245+ members, 12 projects, and 89 active contributors.",
            projects: "We have several projects including open-source AI tools and developer frameworks.",
            contributing: "You can contribute by joining our GitHub, participating in events, or submitting pull requests!"
          };
          
          function quickQuestion(topic) {
            const input = document.getElementById('chatInput');
            const questions = {
              community: 'Tell me about the community',
              projects: 'What projects are you working on?',
              contributing: 'How can I contribute?'
            };
            input.value = questions[topic] || questions.community;
            sendMessage();
          }
          
          async function sendMessage() {
            const input = document.getElementById('chatInput');
            const messages = document.getElementById('chatMessages');
            const userMessage = input.value.trim();
            
            if (!userMessage) return;
            
            messages.innerHTML += `
              <div class="message user">
                <p>${escapeHtml(userMessage)}</p>
              </div>
            `;
            input.value = '';
            scrollToBottom();
            
            messages.innerHTML += `
              <div class="message system typing" id="typingIndicator">
                <p>Typing...</p>
              </div>
            `;
            scrollToBottom();
            
            try {
              let response = await getAIResponse(userMessage);
              const indicator = document.getElementById('typingIndicator');
              if (indicator) indicator.remove();
              
              messages.innerHTML += `
                <div class="message system">
                  <p>${escapeHtml(response)}</p>
                </div>
              `;
              scrollToBottom();
            } catch (error) {
              const indicator = document.getElementById('typingIndicator');
              if (indicator) indicator.remove();
              const fallbackResponse = getFallbackResponse(userMessage);
              messages.innerHTML += `
                <div class="message system">
                  <p>${escapeHtml(fallbackResponse)}</p>
                </div>
              `;
              scrollToBottom();
            }
          }
          
          async function getAIResponse(message) {
            const response = await fetch(CHAT_CONFIG.apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHAT_CONFIG.apiKey}`
              },
              body: JSON.stringify({
                message: message,
                context: CHAT_CONFIG.context
              })
            });
            
            if (!response.ok) {
              throw new Error('API request failed');
            }
            
            const data = await response.json();
            return data.response || data.reply || data.message || "I couldn't process that request.";
          }
          
          function getFallbackResponse(message) {
            const lowerMsg = message.toLowerCase();
            if (lowerMsg.includes('community')) {
              return RESPONSES.community;
            } else if (lowerMsg.includes('project')) {
              return RESPONSES.projects;
            } else if (lowerMsg.includes('contribut')) {
              return RESPONSES.contributing;
            } else {
              return RESPONSES.welcome;
            }
          }
          
          function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
          }
          
          function scrollToBottom() {
            const messages = document.getElementById('chatMessages');
            if (messages) messages.scrollTop = messages.scrollHeight;
          }
          
          const chatInput = document.getElementById('chatInput');
          if (chatInput) {
            chatInput.addEventListener('keypress', function(e) {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            });
          }
        </script>
      </div>
      HTML
    end
  end
end

Liquid::Template.register_tag('ai_chat', Axomiya::AIChatTag)