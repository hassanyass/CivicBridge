// CivicBridge - Malaysian Government Service Web App
// Shared JavaScript functionality

// Dummy data for the application
const dummyData = {
  users: [
    {
      id: 1,
      name: "Ahmad Faiz Bin Abdullah",
      email: "ahmad.faiz@email.com",
      idNumber: "901215-10-1234",
      phone: "+60 12-345-6789",
      address: "123 Jalan Merdeka, Kuala Lumpur, Malaysia 50000",
      role: "citizen"
    },
    {
      id: 2,
      name: "Nur Aisyah Binti Ismail",
      email: "nur.aisyah@email.com",
      idNumber: "880520-08-5678",
      phone: "+60 13-456-7890",
      address: "456 Jalan Tun Razak, Petaling Jaya, Malaysia 46000",
      role: "citizen"
    },
    {
      id: 3,
      name: "Lim Wei Jian",
      email: "lim.weijian@email.com",
      idNumber: "920310-05-9012",
      phone: "+60 14-567-8901",
      address: "789 Jalan Ampang, Ampang, Malaysia 68000",
      role: "citizen"
    },
    {
      id: 4,
      name: "Priya Devi",
      email: "priya.devi@email.com",
      idNumber: "870625-12-3456",
      phone: "+60 15-678-9012",
      address: "321 Jalan Bukit Bintang, Kuala Lumpur, Malaysia 50200",
      role: "citizen"
    },
    {
      id: 5,
      name: "Farhan Hasnul",
      email: "farhan.hasnul@email.com",
      idNumber: "910815-03-7890",
      phone: "+60 16-789-0123",
      address: "654 Jalan Sultan Ismail, Kuala Lumpur, Malaysia 50250",
      role: "citizen"
    },
    {
      id: 6,
      name: "Admin User",
      email: "admin@civicbridge.gov.my",
      idNumber: "800101-01-0001",
      phone: "+60 17-000-0001",
      address: "Government Building, Putrajaya, Malaysia 62000",
      role: "admin"
    }
  ],
  
  documents: [
    {
      id: 1,
      userId: 1,
      name: "Driver's License",
      type: "license",
      number: "DL123456789",
      status: "valid",
      expiryDate: "2026-12-15",
      issueDate: "2021-12-15"
    },
    {
      id: 2,
      userId: 1,
      name: "Passport",
      type: "passport",
      number: "PP987654321",
      status: "expiring",
      expiryDate: "2025-11-20",
      issueDate: "2020-11-20"
    },
    {
      id: 3,
      userId: 1,
      name: "National ID",
      type: "id",
      number: "ID456789123",
      status: "valid",
      expiryDate: "2030-08-10",
      issueDate: "2020-08-10"
    },
    {
      id: 4,
      userId: 1,
      name: "Road Tax",
      type: "roadtax",
      number: "RT789123456",
      status: "expiring",
      expiryDate: "2025-10-15",
      issueDate: "2024-10-15"
    },
    {
      id: 5,
      userId: 1,
      name: "Vehicle Registration",
      type: "vehicle",
      number: "VR456789123",
      status: "valid",
      expiryDate: "2026-03-20",
      issueDate: "2021-03-20"
    },
    {
      id: 6,
      userId: 1,
      name: "Insurance Status",
      type: "insurance",
      number: "INS123456789",
      status: "expired",
      expiryDate: "2025-08-30",
      issueDate: "2024-08-30"
    },
    {
      id: 7,
      userId: 1,
      name: "Business Permit",
      type: "business",
      number: "BP789456123",
      status: "valid",
      expiryDate: "2026-06-15",
      issueDate: "2021-06-15"
    },
    {
      id: 8,
      userId: 1,
      name: "Professional License",
      type: "professional",
      number: "PL456123789",
      status: "expiring",
      expiryDate: "2025-12-31",
      issueDate: "2020-12-31"
    }
  ],
  
  requests: [
    {
      id: 1,
      userId: 1,
      type: "license_renewal",
      title: "Driver's License Renewal",
      description: "Request for driver's license renewal",
      status: "pending",
      submittedDate: "2025-09-18",
      priority: "medium"
    },
    {
      id: 2,
      userId: 1,
      type: "passport_renewal",
      title: "Passport Renewal",
      description: "Request for passport renewal",
      status: "approved",
      submittedDate: "2025-09-15",
      approvedDate: "2025-09-17",
      priority: "high"
    },
    {
      id: 3,
      userId: 1,
      type: "id_replacement",
      title: "National ID Replacement",
      description: "Request for lost ID replacement",
      status: "rejected",
      submittedDate: "2025-09-10",
      rejectedDate: "2025-09-12",
      rejectionReason: "Incomplete documentation",
      priority: "high"
    },
    {
      id: 4,
      userId: 1,
      type: "business_license",
      title: "Business License Application",
      description: "Application for new business license",
      status: "pending",
      submittedDate: "2025-09-20",
      priority: "high"
    },
    {
      id: 5,
      userId: 1,
      type: "tax_payment",
      title: "Road Tax Payment",
      description: "Payment for annual road tax",
      status: "completed",
      submittedDate: "2025-09-01",
      completedDate: "2025-09-01",
      priority: "medium"
    }
  ],
  
  notifications: [
    {
      id: 1,
      userId: 1,
      title: "License Renewal Approved",
      message: "Your driver's license renewal has been approved. Please collect your new license from the nearest JPJ office.",
      type: "success",
      date: "2025-09-18",
      read: false
    },
    {
      id: 2,
      userId: 1,
      title: "Passport Expiring Soon",
      message: "Your passport will expire on November 20, 2025. Please renew it soon to avoid any inconvenience.",
      type: "warning",
      date: "2025-09-15",
      read: false
    },
    {
      id: 3,
      userId: 1,
      title: "ID Card Ready for Pickup",
      message: "Your new National ID card is ready for collection at the nearest registration office.",
      type: "success",
      date: "2025-09-22",
      read: false
    },
    {
      id: 4,
      userId: 1,
      title: "Payment Confirmed",
      message: "Your road tax payment has been processed successfully. Receipt has been sent to your email.",
      type: "success",
      date: "2025-09-01",
      read: true
    },
    {
      id: 5,
      userId: 1,
      title: "Document Expiry Reminder",
      message: "Your Professional License will expire on December 31, 2025. Consider renewing it soon.",
      type: "warning",
      date: "2025-09-20",
      read: false
    }
  ]
};

// Current user session
let currentUser = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Check if user is logged in
  const savedUser = localStorage.getItem('civicBridgeUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
  }
  
  // Initialize page-specific functionality
  const currentPage = getCurrentPage();
  
  switch(currentPage) {
    case 'index':
      initializeLandingPage();
      break;
    case 'login':
      initializeLoginPage();
      break;
    case 'signup':
      initializeSignupPage();
      break;
    case 'user_dashboard':
      initializeUserDashboard();
      break;
    case 'admin_dashboard':
      initializeAdminDashboard();
      break;
    case 'chat':
      initializeChatPage();
      break;
    case 'profile':
      initializeProfilePage();
      break;
  }
  
  // Update navigation based on login status
  updateNavigation();
}

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split('/').pop().split('.')[0];
  return page === '' ? 'index' : page;
}

function updateNavigation() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  
  if (currentUser) {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="user_dashboard.html" class="${getCurrentPage() === 'user_dashboard' ? 'active' : ''}">Dashboard</a>
      <a href="chat.html" class="${getCurrentPage() === 'chat' ? 'active' : ''}">Chat</a>
      <a href="profile.html" class="${getCurrentPage() === 'profile' ? 'active' : ''}">Profile</a>
      ${currentUser.role === 'admin' ? '<a href="admin_dashboard.html" class="' + (getCurrentPage() === 'admin_dashboard' ? 'active' : '') + '">Admin</a>' : ''}
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {
    nav.innerHTML = `
      <a href="index.html" class="${getCurrentPage() === 'index' ? 'active' : ''}">Home</a>
      <a href="login.html" class="${getCurrentPage() === 'login' ? 'active' : ''}">Login</a>
      <a href="signup.html" class="${getCurrentPage() === 'signup' ? 'active' : ''}">Sign Up</a>
    `;
  }
}

// Authentication functions
function login(email, password) {
  const user = dummyData.users.find(u => u.email === email);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('civicBridgeUser', JSON.stringify(user));
    showNotification('Login successful!', 'success');
    
    // Redirect based on role
    setTimeout(() => {
      if (user.role === 'admin') {
        window.location.href = 'admin_dashboard.html';
      } else {
        window.location.href = 'user_dashboard.html';
      }
    }, 1000);
    
    return true;
  } else {
    showNotification('Invalid email or password', 'error');
    return false;
  }
}

function signup(userData) {
  const newUser = {
    id: dummyData.users.length + 1,
    ...userData,
    role: 'citizen'
  };
  
  dummyData.users.push(newUser);
  currentUser = newUser;
  localStorage.setItem('civicBridgeUser', JSON.stringify(newUser));
  
  showNotification('Account created successfully!', 'success');
  
  setTimeout(() => {
    window.location.href = 'user_dashboard.html';
  }, 1000);
}

function logout() {
  currentUser = null;
  localStorage.removeItem('civicBridgeUser');
  showNotification('Logged out successfully', 'success');
  
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}

// Page-specific initialization functions
function initializeLandingPage() {
  // Add any landing page specific functionality
}

function initializeLoginPage() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      login(email, password);
    });
  }
}

function initializeSignupPage() {
  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(signupForm);
      const userData = {
        name: formData.get('name'),
        email: formData.get('email'),
        idNumber: formData.get('idNumber'),
        phone: formData.get('phone'),
        address: formData.get('address')
      };
      signup(userData);
    });
  }
}

function initializeUserDashboard() {
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  // Set up sidebar navigation
  setupSidebarNavigation();
  
  // Load initial content
  loadUserDocuments();
  loadUserRequests();
  loadNotifications();
  
  // Set user name
  const userNameElement = document.getElementById('userName');
  if (userNameElement) {
    userNameElement.textContent = currentUser.name;
  }
}

function initializeAdminDashboard() {
  if (!currentUser || currentUser.role !== 'admin') {
    window.location.href = 'login.html';
    return;
  }
  
  loadPendingRequests();
  loadAllRequests();
  loadAnalytics();
}

function initializeChatPage() {
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendButton');
  
  if (chatInput && sendButton) {
    sendButton.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  }
}

function initializeProfilePage() {
  if (!currentUser) {
    window.location.href = 'login.html';
    return;
  }
  
  loadUserProfile();
}

// Sidebar navigation setup
function setupSidebarNavigation() {
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
  
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Remove active class from all links
      sidebarLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link
      this.classList.add('active');
      
      // Get section ID from href
      const sectionId = this.getAttribute('href').substring(1);
      
      // Switch to the section
      switchSection(sectionId);
    });
  });
}

// Data loading functions
function loadUserDocuments() {
  if (!currentUser) return;

    const container = document.getElementById("documents-list");
    if (!container) return;

    container.innerHTML = "";

  // Filter documents for current user
  const userDocs = dummyData.documents.filter(doc => doc.userId === currentUser.id);

    if (userDocs.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">📄</div>
        <p>No saved documents found.</p>
        <small>Your documents will appear here once you upload them.</small>
      </div>
    `;
        return;
    }

  // Display documents using the existing createDocumentCard function
    userDocs.forEach(doc => {
    const docCard = document.createElement('div');
    docCard.innerHTML = createDocumentCard(doc);
    container.appendChild(docCard);
    });
}

function switchSection(sectionId) {
  // Hide all sections
    document.querySelectorAll(".main-content > div").forEach(div => {
        div.style.display = "none";
    });
  
  // Show the selected section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.style.display = "block";
    
    // Load content based on section
    switch(sectionId) {
      case "documents":
        loadUserDocuments();
        break;
      case "requests":
        loadUserRequests();
        break;
      case "notifications":
        loadNotifications();
        break;
      case "overview":
        // Overview is already loaded, no need to reload
        break;
    }
    }
}


function loadUserRequests() {
  const requestsContainer = document.getElementById('requestsContainer');
  if (!requestsContainer) return;
  
  const userRequests = dummyData.requests.filter(req => req.userId === currentUser.id);
  
  if (userRequests.length === 0) {
    requestsContainer.innerHTML = `
      <div class="empty-state">
        <div class="icon">📝</div>
        <p>No requests found.</p>
        <small>Your service requests will appear here once you submit them.</small>
      </div>
    `;
    return;
  }
  
  requestsContainer.innerHTML = userRequests.map(req => createRequestCard(req)).join('');
}

function loadNotifications() {
  const notificationsContainer = document.getElementById('notificationsContainer');
  if (!notificationsContainer) return;
  
  const userNotifications = dummyData.notifications.filter(notif => notif.userId === currentUser.id);
  
  if (userNotifications.length === 0) {
    notificationsContainer.innerHTML = `
      <div class="empty-state">
        <div class="icon">🔔</div>
        <p>No notifications found.</p>
        <small>You'll receive notifications about your requests and documents here.</small>
      </div>
    `;
    return;
  }
  
  notificationsContainer.innerHTML = userNotifications.map(notif => createNotificationCard(notif)).join('');
}

function loadPendingRequests() {
  const pendingContainer = document.getElementById('pendingRequestsContainer');
  if (!pendingContainer) return;
  
  const pendingRequests = dummyData.requests.filter(req => req.status === 'pending');
  
  pendingContainer.innerHTML = pendingRequests.map(req => createAdminRequestCard(req)).join('');
}

function loadAllRequests() {
  const allRequestsContainer = document.getElementById('allRequestsContainer');
  if (!allRequestsContainer) return;
  
  allRequestsContainer.innerHTML = dummyData.requests.map(req => createAdminRequestCard(req)).join('');
}

function loadAnalytics() {
  const analyticsContainer = document.getElementById('analyticsContainer');
  if (!analyticsContainer) return;
  
  const totalRequests = dummyData.requests.length;
  const pendingRequests = dummyData.requests.filter(req => req.status === 'pending').length;
  const approvedRequests = dummyData.requests.filter(req => req.status === 'approved').length;
  const rejectedRequests = dummyData.requests.filter(req => req.status === 'rejected').length;
  
  analyticsContainer.innerHTML = `
    <div class="card">
      <h3>Request Statistics</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
        <div style="text-align: center; padding: 1rem; background: var(--neutral-bg); border-radius: 8px;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--primary-blue);">${totalRequests}</div>
          <div>Total Requests</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--neutral-bg); border-radius: 8px;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--warning-yellow);">${pendingRequests}</div>
          <div>Pending</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--neutral-bg); border-radius: 8px;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--success-green);">${approvedRequests}</div>
          <div>Approved</div>
        </div>
        <div style="text-align: center; padding: 1rem; background: var(--neutral-bg); border-radius: 8px;">
          <div style="font-size: 2rem; font-weight: bold; color: var(--error-red);">${rejectedRequests}</div>
          <div>Rejected</div>
        </div>
      </div>
    </div>
  `;
}

function loadUserProfile() {
  if (!currentUser) return;
  
  document.getElementById('profileName').textContent = currentUser.name;
  document.getElementById('profileEmail').textContent = currentUser.email;
  document.getElementById('profileId').textContent = currentUser.idNumber;
  document.getElementById('profilePhone').textContent = currentUser.phone;
  document.getElementById('profileAddress').textContent = currentUser.address;
}

// Card creation functions
function createDocumentCard(doc) {
  const statusIcon = doc.status === 'valid' ? '✅' : doc.status === 'expiring' ? '⚠️' : '❌';
  const statusClass = `status-${doc.status}`;
  
  return `
    <div class="document-card">
      <div class="document-icon ${doc.type}">${getDocumentIcon(doc.type)}</div>
      <div class="document-info">
        <div class="document-name">${doc.name}</div>
        <div class="document-number">#${doc.number}</div>
        <div class="document-expiry">Expires: ${formatDate(doc.expiryDate)}</div>
      </div>
      <div class="status-badge ${statusClass}">
        ${statusIcon} ${doc.status.toUpperCase()}
      </div>
    </div>
  `;
}

function createRequestCard(req) {
  const statusClass = `status-${req.status}`;
  let statusIcon = '⏳';
  
  switch(req.status) {
    case 'approved':
      statusIcon = '✅';
      break;
    case 'rejected':
      statusIcon = '❌';
      break;
    case 'completed':
      statusIcon = '✅';
      break;
    case 'pending':
    default:
      statusIcon = '⏳';
      break;
  }
  
  return `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h4>${req.title}</h4>
          <p style="color: var(--text-gray); margin: 0.5rem 0;">${req.description}</p>
          <small style="color: var(--text-gray);">Submitted: ${formatDate(req.submittedDate)}</small>
          ${req.completedDate ? `<br><small style="color: var(--success-green);">Completed: ${formatDate(req.completedDate)}</small>` : ''}
          ${req.rejectionReason ? `<br><small style="color: var(--error-red);">Reason: ${req.rejectionReason}</small>` : ''}
        </div>
        <div class="status-badge ${statusClass}">
          ${statusIcon} ${req.status.toUpperCase()}
        </div>
      </div>
    </div>
  `;
}

function createNotificationCard(notif) {
  const icon = notif.type === 'success' ? '✅' : notif.type === 'warning' ? '⚠️' : '❌';
  
  return `
    <div class="card" style="border-left: 4px solid ${notif.type === 'success' ? 'var(--success-green)' : notif.type === 'warning' ? 'var(--warning-yellow)' : 'var(--error-red)'};">
      <div style="display: flex; align-items: center; gap: 1rem;">
        <div style="font-size: 1.5rem;">${icon}</div>
        <div>
          <h4>${notif.title}</h4>
          <p style="color: var(--text-gray); margin: 0.5rem 0;">${notif.message}</p>
          <small style="color: var(--text-gray);">${formatDate(notif.date)}</small>
        </div>
      </div>
    </div>
  `;
}

function createAdminRequestCard(req) {
  const user = dummyData.users.find(u => u.id === req.userId);
  const statusClass = `status-${req.status}`;
  const statusIcon = req.status === 'approved' ? '✅' : req.status === 'rejected' ? '❌' : '⏳';
  
  return `
    <div class="card">
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h4>${req.title}</h4>
          <p style="color: var(--text-gray); margin: 0.5rem 0;">${req.description}</p>
          <p style="color: var(--text-gray); font-size: 0.9rem;">Requested by: ${user ? user.name : 'Unknown User'}</p>
          <small style="color: var(--text-gray);">Submitted: ${formatDate(req.submittedDate)}</small>
        </div>
        <div style="display: flex; align-items: center; gap: 1rem;">
          <div class="status-badge ${statusClass}">
            ${statusIcon} ${req.status.toUpperCase()}
          </div>
          ${req.status === 'pending' ? `
            <button class="btn btn-success btn-sm" onclick="approveRequest(${req.id})">Approve</button>
            <button class="btn btn-danger btn-sm" onclick="rejectRequest(${req.id})">Reject</button>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Utility functions
function getDocumentIcon(type) {
  const icons = {
    'license': '🚗',
    'passport': '📘',
    'id': '🆔',
    'roadtax': '🛣️',
    'vehicle': '🚙',
    'insurance': '🛡️',
    'business': '🏢',
    'professional': '👨‍💼'
  };
  return icons[type] || '📄';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Request management functions
function approveRequest(requestId) {
  const request = dummyData.requests.find(req => req.id === requestId);
  if (request) {
    request.status = 'approved';
    request.approvedDate = new Date().toISOString().split('T')[0];
    
    // Add notification
    dummyData.notifications.push({
      id: dummyData.notifications.length + 1,
      userId: request.userId,
      title: 'Request Approved',
      message: `Your ${request.title} has been approved.`,
      type: 'success',
      date: new Date().toISOString().split('T')[0],
      read: false
    });
    
    showNotification('Request approved successfully', 'success');
    loadPendingRequests();
    loadAllRequests();
  }
}

function rejectRequest(requestId) {
  const reason = prompt('Please provide a reason for rejection:');
  if (reason) {
    const request = dummyData.requests.find(req => req.id === requestId);
    if (request) {
      request.status = 'rejected';
      request.rejectedDate = new Date().toISOString().split('T')[0];
      request.rejectionReason = reason;
      
      // Add notification
      dummyData.notifications.push({
        id: dummyData.notifications.length + 1,
        userId: request.userId,
        title: 'Request Rejected',
        message: `Your ${request.title} has been rejected. Reason: ${reason}`,
        type: 'error',
        date: new Date().toISOString().split('T')[0],
        read: false
      });
      
      showNotification('Request rejected', 'success');
      loadPendingRequests();
      loadAllRequests();
    }
  }
}

// Chat functionality
let currentChatFlow = null;
let licenseRenewalData = {};

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');
  
  if (!chatInput || !chatMessages) return;
  
  const message = chatInput.value.trim();
  if (!message) return;
  
  // Add user message
  addMessage(message, 'user');
  chatInput.value = '';
  
  // Handle chat flow
  setTimeout(() => {
    handleChatFlow(message);
  }, 1000);
}

function addMessage(text, sender, options = {}) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  const contentDiv = document.createElement('div');
  contentDiv.className = 'message-content';
  
  if (options.html) {
    contentDiv.innerHTML = text;
  } else {
  contentDiv.textContent = text;
  }
  
  messageDiv.appendChild(contentDiv);
  chatMessages.appendChild(messageDiv);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleChatFlow(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Check if user wants to start license renewal
  if ((message.includes("license") || message.includes("renew")) && !currentChatFlow) {
    startLicenseRenewalFlow();
  } else if (currentChatFlow === 'license_renewal') {
    handleLicenseRenewalStep(userMessage);
  } else if (message.includes("passport")) {
    addMessage("For passport renewal, please visit the Immigration Department or submit an online application. You'll need your current passport and recent photos.", 'ai');
  } else if (message.includes("status") || message.includes("check")) {
    addMessage("You can check the status of your requests in your dashboard. All pending, approved, and rejected requests are displayed there.", 'ai');
  } else if (message.includes("help")) {
    addMessage("I can help you with government services like license renewal, passport applications, tax payments, and more. What specific service do you need help with?", 'ai');
  } else {
    addMessage("Thank you for your message. I'm here to help you with government services. Please let me know what you need assistance with.", 'ai');
  }
}

function startLicenseRenewalFlow() {
  currentChatFlow = 'license_renewal';
  licenseRenewalData = {};
  
  const message = `
    <div class="step-indicator">
      <div class="step-number">1</div>
      <div class="step-text">License Type Selection</div>
    </div>
    <span class="status-icon">🚗</span>Sure, I can help you renew your driving license! 
    <br><br>Can you confirm the license type you want to renew?
    <div class="quick-reply-container">
      <button class="quick-reply-btn" onclick="selectLicenseType('driving')">🚗 Driving License</button>
      <button class="quick-reply-btn" onclick="selectLicenseType('business')">🏢 Business License</button>
      <button class="quick-reply-btn" onclick="selectLicenseType('other')">📄 Other</button>
    </div>
  `;
  
  addMessage(message, 'ai', { html: true });
}

function selectLicenseType(type) {
  licenseRenewalData.type = type;
  
  // Add user selection as message
  const typeText = type === 'driving' ? 'Driving License' : type === 'business' ? 'Business License' : 'Other';
  addMessage(`I want to renew my ${typeText}`, 'user');
  
  // Show current license info
  setTimeout(() => {
    showCurrentLicenseInfo();
  }, 1000);
}

function showCurrentLicenseInfo() {
  if (!currentUser) return;
  
  // Get user's current license from dummy data
  const userLicense = dummyData.documents.find(doc => 
    doc.userId === currentUser.id && 
    (doc.type === 'license' || (licenseRenewalData.type === 'business' && doc.type === 'business'))
  );
  
  const message = `
    <div class="step-indicator">
      <div class="step-number">2</div>
      <div class="step-text">Current License Information</div>
    </div>
    <span class="status-icon">📋</span>Here are your current license details:
    <div class="license-info-card">
      <h4>${userLicense ? userLicense.name : 'License Information'}</h4>
      <div class="license-details">
        <div class="license-detail"><strong>License Number:</strong> ${userLicense ? userLicense.number : 'N/A'}</div>
        <div class="license-detail"><strong>Status:</strong> ${userLicense ? userLicense.status : 'N/A'}</div>
        <div class="license-detail"><strong>Expiry Date:</strong> ${userLicense ? formatDate(userLicense.expiryDate) : 'N/A'}</div>
        <div class="license-detail"><strong>Issue Date:</strong> ${userLicense ? formatDate(userLicense.issueDate) : 'N/A'}</div>
      </div>
    </div>
    <br>How long would you like to renew your license for?
    <div class="quick-reply-container">
      <button class="quick-reply-btn" onclick="selectRenewalPeriod('1')">1 Year</button>
      <button class="quick-reply-btn" onclick="selectRenewalPeriod('3')">3 Years</button>
      <button class="quick-reply-btn" onclick="selectRenewalPeriod('5')">5 Years</button>
    </div>
  `;
  
  addMessage(message, 'ai', { html: true });
}

function selectRenewalPeriod(years) {
  licenseRenewalData.renewalPeriod = years;
  
  // Add user selection as message
  addMessage(`I want to renew for ${years} year${years > 1 ? 's' : ''}`, 'user');
  
  // Show payment step
  setTimeout(() => {
    showPaymentStep();
  }, 1000);
}

function showPaymentStep() {
  const renewalFee = licenseRenewalData.renewalPeriod === '1' ? 'RM 20' : 
                     licenseRenewalData.renewalPeriod === '3' ? 'RM 50' : 'RM 80';
  
  const message = `
    <div class="step-indicator">
      <div class="step-number">3</div>
      <div class="step-text">Payment Processing</div>
    </div>
    <span class="status-icon">💳</span>Perfect! Your ${licenseRenewalData.renewalPeriod}-year renewal will cost <strong>${renewalFee}</strong>.
    <br><br>Let me process your payment now...
    <div class="quick-reply-container">
      <button class="quick-reply-btn" onclick="processPayment()">💳 Process Payment</button>
    </div>
  `;
  
  addMessage(message, 'ai', { html: true });
}

function processPayment() {
  addMessage('Processing payment...', 'user');
  
  // Show progress indicator
  const progressMessage = `
    <div class="progress-indicator">
      <div class="progress-dots">
        <div class="progress-dot"></div>
        <div class="progress-dot"></div>
        <div class="progress-dot"></div>
      </div>
      <span>Processing your payment...</span>
    </div>
  `;
  
  addMessage(progressMessage, 'ai', { html: true });
  
  // Simulate payment processing
  setTimeout(() => {
    showPaymentSuccess();
  }, 3000);
}

function showPaymentSuccess() {
  const message = `
    <div class="payment-simulation">
      <div class="icon">✅</div>
      <h4>Payment Successful!</h4>
      <p>Your payment has been processed successfully.</p>
    </div>
    <br>Now submitting your renewal request...
  `;
  
  addMessage(message, 'ai', { html: true });
  
  // Show final processing
  setTimeout(() => {
    completeLicenseRenewal();
  }, 2000);
}

function completeLicenseRenewal() {
  // Create new request in dummy data
  const newRequest = {
    id: dummyData.requests.length + 1,
    userId: currentUser.id,
    type: "license_renewal",
    title: `${licenseRenewalData.type === 'driving' ? 'Driving' : 'Business'} License Renewal (${licenseRenewalData.renewalPeriod} years)`,
    description: `Request for ${licenseRenewalData.type} license renewal for ${licenseRenewalData.renewalPeriod} year${licenseRenewalData.renewalPeriod > 1 ? 's' : ''}`,
    status: "pending",
    submittedDate: new Date().toISOString().split('T')[0],
    priority: "medium"
  };
  
  dummyData.requests.push(newRequest);
  
  // Add notification
  dummyData.notifications.push({
    id: dummyData.notifications.length + 1,
    userId: currentUser.id,
    title: 'License Renewal Submitted',
    message: `Your ${licenseRenewalData.type} license renewal request has been submitted successfully.`,
    type: 'success',
    date: new Date().toISOString().split('T')[0],
    read: false
  });
  
  const message = `
    <div class="step-indicator">
      <div class="step-number">4</div>
      <div class="step-text">Request Submitted</div>
    </div>
    <span class="status-icon">✅</span><strong>Your ${licenseRenewalData.type === 'driving' ? 'Driving' : 'Business'} License renewal has been submitted successfully!</strong>
    <br><br>📋 <strong>Request Details:</strong>
    <br>• License Type: ${licenseRenewalData.type === 'driving' ? 'Driving License' : 'Business License'}
    <br>• Renewal Period: ${licenseRenewalData.renewalPeriod} year${licenseRenewalData.renewalPeriod > 1 ? 's' : ''}
    <br>• Status: Pending Approval
    <br>• Estimated Processing: 3-5 business days
    <br><br>You can track this request in your Dashboard under <strong>'My Requests'</strong>.
    <br><br>Is there anything else I can help you with?
    <div class="quick-reply-container">
      <button class="quick-reply-btn" onclick="resetChatFlow()">🔄 New Request</button>
      <button class="quick-reply-btn" onclick="checkStatus()">📊 Check Status</button>
    </div>
  `;
  
  addMessage(message, 'ai', { html: true });
  
  // Reset flow
  currentChatFlow = null;
  licenseRenewalData = {};
}

function resetChatFlow() {
  currentChatFlow = null;
  licenseRenewalData = {};
  addMessage('How can I help you today?', 'ai');
}

function checkStatus() {
  addMessage('Check my request status', 'user');
  addMessage("You can check the status of your requests in your dashboard under 'My Requests'. All pending, approved, and rejected requests are displayed there.", 'ai');
}


// Modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
  }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal')) {
    e.target.classList.remove('active');
  }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      activeModal.classList.remove('active');
    }
  }
});

function submitRenewalRequest(event) {
    event.preventDefault(); // يمنع إعادة تحميل الصفحة
    closeModal('licenseModal');

    // Alert زي الـ old version
    alert("✅ License renewal submitted successfully!\n\nYour request will be processed within 2-3 business days.");

    // رسالة AI في الشات
    addMessage("Your driver's license renewal request has been submitted and is being processed.", "ai");
}

