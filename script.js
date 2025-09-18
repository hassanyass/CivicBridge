// Civic - Government Digital Assistant
// Shared JavaScript functionality for all pages

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize application based on current page
function initializeApp() {
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'profile':
            initializeProfile();
            break;
        case 'chat':
            initializeChat();
            break;
        case 'dashboard':
            initializeDashboard();
            break;
        default:
            // Home page - no special initialization needed
            break;
    }
}

// Get current page name from URL
function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0];
    return page === '' ? 'index' : page;
}

// Profile Page Functions
function initializeProfile() {
    loadProfileData();
    loadDocuments();
}

function loadProfileData() {
    // Load profile data from localStorage or use defaults
    const profileData = JSON.parse(localStorage.getItem('civicProfile')) || {
        name: 'Ahmad Faiz Bin Abdullah',
        id: 'ID123456789',
        dob: 'January 15, 1985',
        email: 'ahmad.faiz@email.com',
        address: '123 Jalan Merdeka, Kuala Lumpur, Malaysia 50000',
        phone: '+60 12-345-6789'
    };
    
    // Update profile display
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-id').textContent = profileData.id;
    document.getElementById('profile-dob').textContent = profileData.dob;
    document.getElementById('profile-email').textContent = profileData.email;
    document.getElementById('profile-address').textContent = profileData.address;
    document.getElementById('profile-phone').textContent = profileData.phone;
}

function loadDocuments() {
    const documents = JSON.parse(localStorage.getItem('civicDocuments')) || [
        {
            name: 'Driver\'s License',
            type: 'license',
            status: 'valid',
            expiryDate: '2026-12-15',
            documentNumber: 'DL123456789'
        },
        {
            name: 'Passport',
            type: 'passport',
            status: 'expiring',
            expiryDate: '2025-11-20',
            documentNumber: 'PP987654321'
        },
        {
            name: 'National ID',
            type: 'id',
            status: 'valid',
            expiryDate: '2030-08-10',
            documentNumber: 'ID456789123'
        },
        {
            name: 'Road Tax',
            type: 'roadtax',
            status: 'expiring',
            expiryDate: '2025-10-15',
            documentNumber: 'RT789123456'
        },
        {
            name: 'Vehicle Registration',
            type: 'vehicle',
            status: 'valid',
            expiryDate: '2026-03-20',
            documentNumber: 'VR456789123'
        },
        {
            name: 'Insurance Status',
            type: 'insurance',
            status: 'expired',
            expiryDate: '2025-08-30',
            documentNumber: 'INS123456789'
        }
    ];
    
    const documentsList = document.getElementById('documents-list');
    documentsList.innerHTML = '';
    
    documents.forEach(doc => {
        const documentItem = createDocumentItem(doc);
        documentsList.appendChild(documentItem);
    });
}

function createDocumentItem(doc) {
    const div = document.createElement('div');
    div.className = 'document-item';
    
    const statusClass = `status-${doc.status}`;
    const statusText = doc.status === 'valid' ? 'Valid' : 
                      doc.status === 'expiring' ? 'Expiring Soon' : 'Expired';
    
    const statusIcon = doc.status === 'valid' ? '✓' : 
                      doc.status === 'expiring' ? '⚠' : '✗';
    
    const documentIcon = getDocumentIcon(doc.type);
    
    div.innerHTML = `
        <div class="document-info">
            <div class="document-icon ${doc.type}">${documentIcon}</div>
            <div class="document-details">
                <div class="document-name">${doc.name}</div>
                <div class="document-number">#${doc.documentNumber}</div>
                <div class="document-expiry">📅 Expires: ${formatDate(doc.expiryDate)}</div>
            </div>
        </div>
        <div class="document-status">
            <div class="status-badge ${statusClass}">
                <span class="status-icon">${statusIcon}</span>
                ${statusText}
            </div>
        </div>
    `;
    
    return div;
}

function getDocumentIcon(type) {
    const icons = {
        'license': '🚗',
        'passport': '📘',
        'id': '🆔',
        'roadtax': '🛣️',
        'vehicle': '🚙',
        'insurance': '🛡️'
    };
    return icons[type] || '📄';
}

function editProfile() {
    alert('Profile editing feature will be available in the full version. For now, this is a demo.');
}

// Chat Page Functions
function initializeChat() {
    // Add event listener for Enter key in chat input
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Initialize payment form
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', handlePayment);
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessage(response.text, 'ai');
        
        // If response includes payment action, show payment modal
        if (response.action === 'payment') {
            setTimeout(() => {
                showPaymentModal(response.paymentData);
            }, 1000);
        }
    }, 1000);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (message.includes('license') || message.includes('renew')) {
        return {
            text: "I can help you renew your driver's license. I see your license expires on December 15, 2026. Would you like to start the renewal process?",
            action: 'payment',
            paymentData: {
                title: 'License Renewal',
                amount: 'RM25.00',
                description: 'Driver\'s License Renewal Fee'
            }
        };
    } else if (message.includes('passport')) {
        return {
            text: "I notice your passport is expiring soon (November 20, 2025). Would you like to renew it? The fee is RM200 for a new passport.",
            action: 'payment',
            paymentData: {
                title: 'Passport Renewal',
                amount: 'RM200.00',
                description: 'Passport Renewal Fee'
            }
        };
    } else if (message.includes('status') || message.includes('check')) {
        return {
            text: "Here's your current document status:\n• Driver's License: Valid (expires Dec 15, 2026)\n• Passport: Expiring Soon (expires Nov 20, 2025)\n• National ID: Valid (expires Aug 10, 2030)\n• Road Tax: Expiring Soon (expires Oct 15, 2025)\n• Vehicle Registration: Valid (expires Mar 20, 2026)\n• Insurance: Expired (expired Aug 30, 2025)\n\nWould you like to renew any of these documents?",
            action: null
        };
    } else if (message.includes('help')) {
        return {
            text: "I can help you with:\n• Check document status\n• Renew licenses and passports\n• Process payments\n• Answer questions about government services\n\nWhat would you like to do?",
            action: null
        };
    } else {
        return {
            text: "I understand you're looking for help with government services. I can assist with document renewals, status checks, and payments. What specific service do you need?",
            action: null
        };
    }
}

// Payment Modal Functions
function showPaymentModal(paymentData) {
    const modal = document.getElementById('payment-modal');
    const title = document.getElementById('payment-title');
    
    if (modal && title) {
        title.textContent = paymentData.title;
        modal.classList.add('active');
        
        // Store payment data for form submission
        modal.dataset.paymentAmount = paymentData.amount;
        modal.dataset.paymentDescription = paymentData.description;
    }
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.classList.remove('active');
        // Reset form
        const form = document.getElementById('payment-form');
        if (form) {
            form.reset();
        }
    }
}

function handlePayment(e) {
    e.preventDefault();
    
    // Simulate payment processing
    const modal = document.getElementById('payment-modal');
    const amount = modal.dataset.paymentAmount;
    const description = modal.dataset.paymentDescription;
    
    // Show success message
    alert(`Payment successful!\n\n${description}\nAmount: ${amount}\n\nYour request has been submitted and will be processed within 2-3 business days.`);
    
    // Close modal
    closePaymentModal();
    
    // Add success message to chat
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        setTimeout(() => {
            addMessage(`Payment completed for ${description}. Your request is now being processed.`, 'ai');
        }, 500);
    }
    
    // Update dashboard data
    updateDashboardData(description);
}

// Dashboard Page Functions
function initializeDashboard() {
    loadOngoingRequests();
    loadRequestHistory();
}

function loadOngoingRequests() {
    const ongoingRequests = JSON.parse(localStorage.getItem('civicOngoingRequests')) || [
        {
            id: 'REQ001',
            title: 'Driver\'s License Renewal',
            status: 'In Progress',
            progress: 60,
            submittedDate: '2025-09-15'
        },
        {
            id: 'REQ002',
            title: 'Passport Renewal',
            status: 'Under Review',
            progress: 30,
            submittedDate: '2025-09-18'
        }
    ];
    
    const container = document.getElementById('ongoing-requests');
    if (container) {
        container.innerHTML = '';
        ongoingRequests.forEach(request => {
            const requestItem = createRequestItem(request, true);
            container.appendChild(requestItem);
        });
    }
}

function loadRequestHistory() {
    const requestHistory = JSON.parse(localStorage.getItem('civicRequestHistory')) || [
        {
            id: 'REQ003',
            title: 'National ID Renewal',
            status: 'Completed',
            completedDate: '2025-09-10'
        },
        {
            id: 'REQ004',
            title: 'Vehicle Registration',
            status: 'Completed',
            completedDate: '2025-08-15'
        }
    ];
    
    const container = document.getElementById('request-history');
    if (container) {
        container.innerHTML = '';
        requestHistory.forEach(request => {
            const requestItem = createRequestItem(request, false);
            container.appendChild(requestItem);
        });
    }
}

function createRequestItem(request, isOngoing) {
    const div = document.createElement('div');
    div.className = 'request-item';
    
    const statusClass = request.status === 'Completed' ? 'status-valid' : 
                       request.status === 'In Progress' ? 'status-warning' : 'status-expired';
    
    let progressHtml = '';
    if (isOngoing && request.progress) {
        progressHtml = `
            <div class="request-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${request.progress}%"></div>
                </div>
                <span>${request.progress}% Complete</span>
            </div>
        `;
    }
    
    div.innerHTML = `
        <div class="request-title">${request.title}</div>
        <div class="request-status">
            <span class="${statusClass}">${request.status}</span>
            <span class="request-date">${isOngoing ? 'Submitted' : 'Completed'}: ${isOngoing ? request.submittedDate : request.completedDate}</span>
        </div>
        ${progressHtml}
    `;
    
    return div;
}

function updateDashboardData(description) {
    // Add new ongoing request
    const ongoingRequests = JSON.parse(localStorage.getItem('civicOngoingRequests')) || [];
    const newRequest = {
        id: 'REQ' + Date.now().toString().slice(-3),
        title: description,
        status: 'Submitted',
        progress: 10,
        submittedDate: new Date().toISOString().split('T')[0]
    };
    
    ongoingRequests.unshift(newRequest);
    localStorage.setItem('civicOngoingRequests', JSON.stringify(ongoingRequests));
    
    // If this is the dashboard page, refresh the display
    if (getCurrentPage() === 'dashboard') {
        loadOngoingRequests();
    }
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('payment-modal');
    if (e.target === modal) {
        closePaymentModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePaymentModal();
    }
});
