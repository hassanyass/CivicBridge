# CivicBridge - Malaysian Government Service Portal

A comprehensive frontend-only web application for Malaysian government services, built with HTML, CSS, and JavaScript. CivicBridge provides a digital platform for citizens to access government services, submit requests, and interact with government departments.

## 🌟 Features

### For Citizens
- **Dashboard Overview**: Quick access to all services and status updates
- **Document Management**: View and track government documents (licenses, passports, IDs, etc.)
- **Service Requests**: Submit and track license renewals, passport applications, and other services
- **Tax Payments**: Pay road tax, property tax, and other government fees
- **Complaints & Feedback**: Submit complaints and track their resolution
- **Appointment Booking**: Schedule appointments with government offices
- **AI Chat Support**: Get instant help with government services
- **Profile Management**: Manage personal information and account settings

### For Administrators
- **Request Management**: Review, approve, or reject citizen requests
- **Analytics Dashboard**: View statistics and generate reports
- **User Management**: Manage citizen accounts and permissions
- **System Settings**: Configure platform settings and preferences

## 🎨 Design Features

- **Malaysian Theme**: Colors inspired by the Malaysian flag (blue, yellow, red, white)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional interface with intuitive navigation
- **Status Indicators**: Visual badges and icons for document and request status
- **Interactive Elements**: Modals, notifications, and smooth transitions

## 📁 Project Structure

```
civicbridge-app/
├── index.html              # Landing page
├── login.html              # Login page
├── signup.html             # Registration page
├── user_dashboard.html     # Citizen dashboard
├── admin_dashboard.html    # Admin dashboard
├── chat.html               # AI chat support
├── profile.html            # User profile page
├── style.css               # Shared stylesheet
├── script.js               # Shared JavaScript functionality
├── assets/                 # Images and icons
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. Start exploring the application!

### Demo Accounts
The application includes demo accounts for testing:

**Citizen Account:**
- Email: `ahmad.faiz@email.com`
- Password: (any password)

**Admin Account:**
- Email: `admin@civicbridge.gov.my`
- Password: (any password)

## 🎯 Key Pages

### Landing Page (`index.html`)
- Hero section with call-to-action
- Service overview and features
- Customer testimonials
- Contact information

### Authentication (`login.html`, `signup.html`)
- Secure login and registration forms
- Role-based access (Citizen/Admin)
- Form validation and error handling

### User Dashboard (`user_dashboard.html`)
- Personal dashboard with quick stats
- Document management with status indicators
- Service request forms and tracking
- Quick action buttons for common services

### Admin Dashboard (`admin_dashboard.html`)
- Request management and approval system
- Analytics and reporting tools
- User management interface
- System configuration options

### Chat Support (`chat.html`)
- AI-powered chat interface
- Quick action buttons
- FAQ section
- Contact information

### Profile Page (`profile.html`)
- Personal information management
- Account settings and preferences
- Security and privacy controls
- Notification preferences

## 🛠️ Technical Implementation

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks or dependencies
- **Local Storage**: Data persistence across sessions

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Component-Based**: Reusable CSS classes and JavaScript functions
- **State Management**: Local storage for user sessions and data
- **Form Handling**: Client-side validation and submission
- **Modal System**: Reusable modal dialogs for forms and confirmations
- **Notification System**: Toast notifications for user feedback

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adapted layout with collapsible navigation
- **Mobile**: Touch-friendly interface with stacked layouts

## 🎨 Color Scheme

- **Primary Blue**: `#1E3A8A` - Main brand color
- **Accent Green**: `#16A34A` - Success states and CTAs
- **Neutral Background**: `#F5F7FA` - Page backgrounds
- **Success Green**: `#22C55E` - Valid status indicators
- **Warning Yellow**: `#FBBF24` - Expiring status indicators
- **Error Red**: `#EF4444` - Expired status indicators

## 🔧 Customization

### Adding New Services
1. Add service data to the `dummyData` object in `script.js`
2. Create corresponding UI components
3. Update navigation and routing as needed

### Modifying Styles
- Edit `style.css` for visual changes
- CSS variables are defined at the top for easy color customization
- Responsive breakpoints can be adjusted in the media queries

### Adding New Pages
1. Create new HTML file
2. Include shared `style.css` and `script.js`
3. Add navigation links
4. Implement page-specific JavaScript functions

## 📊 Dummy Data

The application includes comprehensive dummy data with:
- **5 Citizen Users**: Malaysian names and addresses
- **6 Document Types**: Driver's license, passport, national ID, road tax, vehicle registration, insurance
- **3 Service Requests**: Various statuses (pending, approved, rejected)
- **2 Notifications**: Success and warning messages

## 🔮 Future Enhancements

This frontend-only implementation can be extended with:
- **Backend Integration**: Connect to real APIs and databases
- **User Authentication**: Implement secure login with JWT tokens
- **Real-time Updates**: WebSocket connections for live notifications
- **File Upload**: Document upload and management
- **Payment Processing**: Integration with payment gateways
- **Mobile App**: React Native or Flutter mobile application
- **Advanced Analytics**: Charts and reporting tools

## 📄 License

This project is created as a demonstration and is not affiliated with any government agency. The code is provided for educational and portfolio purposes.

## 🤝 Contributing

This is a demo project, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support regarding this demo:
- Email: info@civicbridge.gov.my (demo)
- Phone: +60 3-8000 8000 (demo)

---

**CivicBridge** - Connecting Citizens and Government through Digital Innovation 🇲🇾