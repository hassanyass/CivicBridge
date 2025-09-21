// Global state management using localStorage
class CivicApp {
  constructor() {
    this.initializeData()
    this.bindEvents()
    this.loadProfile()
    this.loadDocuments()
    this.loadDashboard()
  }

  initializeData() {
    // Initialize default data if not exists
    if (!localStorage.getItem("civicProfile")) {
      const defaultProfile = {
        name: "John Doe",
        id: "ID123456789",
        email: "john.doe@email.com",
        address: "123 Main St, City, State 12345",
        phone: "+1 (555) 123-4567",
      }
      localStorage.setItem("civicProfile", JSON.stringify(defaultProfile))
    }

    if (!localStorage.getItem("civicDocuments")) {
      const defaultDocuments = [
        { name: "Driving License", status: "valid", expiry: "2026-12-31", statusText: "Valid until 2026" },
        { name: "Passport", status: "warning", expiry: "2024-06-15", statusText: "Expiring Soon" },
        { name: "Vehicle Registration", status: "valid", expiry: "2025-08-20", statusText: "Valid until 2025" },
        { name: "Business License", status: "expired", expiry: "2023-12-01", statusText: "Expired" },
      ]
      localStorage.setItem("civicDocuments", JSON.stringify(defaultDocuments))
    }

    if (!localStorage.getItem("civicRequests")) {
      const defaultRequests = {
        ongoing: [],
        history: [
          { title: "License Renewal", status: "Completed", date: "2024-01-15", receipt: "#123456" },
          { title: "Vehicle Registration", status: "Completed", date: "2024-02-20", receipt: "#789012" },
        ],
      }
      localStorage.setItem("civicRequests", JSON.stringify(defaultRequests))
    }

    if (!localStorage.getItem("civicChatHistory")) {
      localStorage.setItem("civicChatHistory", JSON.stringify([]))
    }
  }

  bindEvents() {
    // Chat input enter key
    const chatInput = document.getElementById("chat-input")
    if (chatInput) {
      chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.sendMessage()
        }
      })
    }

    // Payment form submission
    const paymentForm = document.getElementById("payment-form")
    if (paymentForm) {
      paymentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        this.processPayment()
      })
    }
  }

  loadProfile() {
    const profile = JSON.parse(localStorage.getItem("civicProfile"))
    if (profile) {
      document.getElementById("profile-name").textContent = profile.name
      document.getElementById("profile-id").textContent = profile.id
      document.getElementById("profile-email").textContent = profile.email
      document.getElementById("profile-address").textContent = profile.address
      document.getElementById("profile-phone").textContent = profile.phone
    }
  }

  loadDocuments() {
    const documents = JSON.parse(localStorage.getItem("civicDocuments"))
    const documentsList = document.getElementById("documents-list")

    if (documents && documentsList) {
      documentsList.innerHTML = ""
      documents.forEach((doc) => {
        const docElement = document.createElement("div")
        docElement.className = "document-item"
        docElement.innerHTML = `
                    <span>${doc.name}</span>
                    <div class="document-status status-${doc.status}">
                        ${this.getStatusIcon(doc.status)} ${doc.statusText}
                    </div>
                `
        documentsList.appendChild(docElement)
      })
    }
  }

  getStatusIcon(status) {
    switch (status) {
      case "valid":
        return "✅"
      case "warning":
        return "⚠️"
      case "expired":
        return "❌"
      default:
        return "📄"
    }
  }

  loadDashboard() {
    const requests = JSON.parse(localStorage.getItem("civicRequests"))

    // Load ongoing requests
    const ongoingContainer = document.getElementById("ongoing-requests")
    if (ongoingContainer && requests.ongoing) {
      ongoingContainer.innerHTML = ""
      if (requests.ongoing.length === 0) {
        ongoingContainer.innerHTML = '<p style="color: #64748b; text-align: center;">No ongoing requests</p>'
      } else {
        requests.ongoing.forEach((request) => {
          const requestElement = document.createElement("div")
          requestElement.className = "request-item"
          requestElement.innerHTML = `
                        <div class="request-title">${request.title}</div>
                        <div class="request-status">${request.status}</div>
                        <div class="request-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${request.progress}%"></div>
                            </div>
                        </div>
                    `
          ongoingContainer.appendChild(requestElement)
        })
      }
    }

    // Load history
    const historyContainer = document.getElementById("request-history")
    if (historyContainer && requests.history) {
      historyContainer.innerHTML = ""
      requests.history.forEach((request) => {
        const requestElement = document.createElement("div")
        requestElement.className = "request-item"
        requestElement.innerHTML = `
                    <div class="request-title">${request.title}</div>
                    <div class="request-status">${request.status} - ${request.date}</div>
                    ${request.receipt ? `<div style="font-size: 0.8rem; color: #64748b;">Receipt: ${request.receipt}</div>` : ""}
                `
        historyContainer.appendChild(requestElement)
      })
    }
  }

  sendMessage() {
    const input = document.getElementById("chat-input")
    const message = input.value.trim()

    if (!message) return

    // Add user message
    this.addMessage(message, "user")
    input.value = ""

    // Simulate AI response
    setTimeout(() => {
      this.generateAIResponse(message)
    }, 1000)
  }

  addMessage(content, sender) {
    const messagesContainer = document.getElementById("chat-messages")
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${sender}-message`

    const messageContent = document.createElement("div")
    messageContent.className = "message-content"
    messageContent.innerHTML = content

    messageDiv.appendChild(messageContent)
    messagesContainer.appendChild(messageDiv)
    messagesContainer.scrollTop = messagesContainer.scrollHeight

    // Save to chat history
    const chatHistory = JSON.parse(localStorage.getItem("civicChatHistory"))
    chatHistory.push({ content, sender, timestamp: new Date().toISOString() })
    localStorage.setItem("civicChatHistory", JSON.stringify(chatHistory))
  }

  generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase()
    let response = ""
    let hasActions = false

    if (lowerMessage.includes("license") || lowerMessage.includes("renew")) {
      response = `I can help you with license renewal. Your driving license expires in 2026, but I can help you renew it early if needed.`
      hasActions = true
    } else if (lowerMessage.includes("passport")) {
      response = `I see your passport is expiring soon (June 2024). Would you like me to help you renew it?`
      hasActions = true
    } else if (lowerMessage.includes("pay") || lowerMessage.includes("fine") || lowerMessage.includes("summons")) {
      response = `I can help you pay any outstanding fines or summons. Let me check your account for any pending payments.`
      hasActions = true
    } else if (lowerMessage.includes("document") || lowerMessage.includes("status")) {
      response = `Here's your document status overview. I can help you renew any expiring documents.`
    } else {
      response = `I understand you're asking about "${userMessage}". I can help you with license renewals, passport applications, paying fines, checking document status, and more government services. What would you like to do?`
    }

    // Add action buttons if relevant
    if (hasActions) {
      response += `<div class="action-buttons">
                <button class="action-btn" onclick="app.openPaymentModal('License Renewal', 75)">Renew License ($75)</button>
                <button class="action-btn" onclick="app.openPaymentModal('Passport Renewal', 130)">Renew Passport ($130)</button>
                <button class="action-btn" onclick="app.openPaymentModal('Pay Summons', 150)">Pay Summons ($150)</button>
            </div>`
    }

    this.addMessage(response, "ai")
  }

  openPaymentModal(service, amount) {
    const modal = document.getElementById("payment-modal")
    const title = document.getElementById("payment-title")

    title.textContent = `${service} - $${amount}`
    modal.classList.add("active")

    // Store current payment info
    this.currentPayment = { service, amount }
  }

  closePaymentModal() {
    const modal = document.getElementById("payment-modal")
    modal.classList.remove("active")

    // Clear form
    document.getElementById("payment-form").reset()
  }

  processPayment() {
    if (!this.currentPayment) return

    const receiptNumber = "#" + Math.random().toString(36).substr(2, 6).toUpperCase()

    // Add to ongoing requests
    const requests = JSON.parse(localStorage.getItem("civicRequests"))
    requests.ongoing.push({
      title: this.currentPayment.service,
      status: "Processing Payment",
      progress: 25,
    })

    // Simulate processing stages
    setTimeout(() => {
      // Update to verified
      const updatedRequests = JSON.parse(localStorage.getItem("civicRequests"))
      const ongoingRequest = updatedRequests.ongoing.find((r) => r.title === this.currentPayment.service)
      if (ongoingRequest) {
        ongoingRequest.status = "Payment Verified"
        ongoingRequest.progress = 75
        localStorage.setItem("civicRequests", JSON.stringify(updatedRequests))
        this.loadDashboard()
      }
    }, 2000)

    setTimeout(() => {
      // Complete and move to history
      const finalRequests = JSON.parse(localStorage.getItem("civicRequests"))
      finalRequests.ongoing = finalRequests.ongoing.filter((r) => r.title !== this.currentPayment.service)
      finalRequests.history.unshift({
        title: this.currentPayment.service,
        status: "Completed",
        date: new Date().toISOString().split("T")[0],
        receipt: receiptNumber,
      })
      localStorage.setItem("civicRequests", JSON.stringify(finalRequests))
      this.loadDashboard()

      // Add success message to chat
      this.addMessage(
        `Payment Successful! ${this.currentPayment.service} has been processed. Receipt: ${receiptNumber}`,
        "ai",
      )
    }, 4000)

    localStorage.setItem("civicRequests", JSON.stringify(requests))
    this.loadDashboard()

    // Show success message
    this.addMessage(
      `<div class="status-card">
            <h4>Payment Processing</h4>
            <p>${this.currentPayment.service} - $${this.currentPayment.amount}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: 25%"></div>
            </div>
        </div>`,
      "ai",
    )

    this.closePaymentModal()
  }
}

// Navigation functions
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page")
  pages.forEach((page) => page.classList.remove("active"))

  // Show selected page
  const targetPage = document.getElementById(pageId + "-page")
  if (targetPage) {
    targetPage.classList.add("active")
  }

  // Update navigation
  const navLinks = document.querySelectorAll(".nav-link")
  navLinks.forEach((link) => link.classList.remove("active"))

  const activeLink = document.querySelector(`[onclick="showPage('${pageId}')"]`)
  if (activeLink) {
    activeLink.classList.add("active")
  }
}

// Initialize app when DOM is loaded
let app
document.addEventListener("DOMContentLoaded", () => {
  app = new CivicApp()
})

// Global functions for HTML onclick handlers
function sendMessage() {
  app.sendMessage()
}

function closePaymentModal() {
  app.closePaymentModal()
}
