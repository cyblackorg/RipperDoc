# RipperDoc - Advanced Healthcare Management Platform

RipperDoc is a comprehensive healthcare management platform designed to streamline medical operations and enhance patient care delivery. Our platform integrates cutting-edge technology with intuitive interfaces to provide healthcare professionals with the tools they need to deliver exceptional care.

## About

RipperDoc represents the future of healthcare technology, offering a complete solution for medical facilities, clinics, and healthcare providers. Our platform combines advanced AI capabilities with robust patient management systems to create an efficient, secure, and user-friendly healthcare environment.

This platform provides:
- Comprehensive patient management and electronic health records
- AI-powered medical assistant for healthcare professionals
- Advanced prescription and medication management systems
- Secure role-based access control for healthcare teams
- Real-time communication and collaboration tools

**Why RipperDoc Matters**: Modern healthcare requires sophisticated technology solutions that can handle the complexity of medical operations while maintaining the highest standards of patient care and data security. RipperDoc delivers the tools healthcare professionals need to focus on what matters most - patient outcomes.

## Prerequisites

- **Docker and Docker Compose** (recommended setup)
- **OpenAI API key** for AI assistant functionality
- OR Node.js (v16+) and PostgreSQL for manual setup

## Quick Setup

I made a [Demo Video](https://youtu.be/h3jm83jw33Q) explaining everything.

### 1. Clone Repository
```bash
git clone https://github.com/aligorithm/ripperdoc.git
cd ripperdoc
```

### 2. AI Provider Configuration

RipperDoc uses **OpenAI** for AI assistant functionality. You'll need an OpenAI API key to use the chatbot features.

```bash
# Set your OpenAI API key
export OPENAI_API_KEY=sk-your-key-here
docker-compose up --build
```

**Note:** You may need to run docker-compose with sudo, and this may lead to environment variables not being passed from the shell. If you're having issues with the AI assistant, try this:

```bash
OPENAI_API_KEY=$OPENAI_API_KEY docker-compose up --build
```

### 3. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api/docs

## Test Accounts

All passwords: `password123`

**Staff Accounts:**
- **Admin**: `admin@ripperdoc.com` - Full system access
- **Doctor**: `doctor@test.com` - Patient management
- **Pharmacist**: `pharmacist@ripperdoc.com` - Prescription management

**Patient Accounts:**
- **Patient**: `patient@test.com` - Personal health portal
- **Patient 2**: `patient2@test.com` - Additional test data

## Key Features

### 🤖 **AI-Powered Role-Based Chatbot**
- Different capabilities for patients, doctors, pharmacists, and admins
- Real-time SQL query generation and execution
- Conversation memory and knowledge base
- Advanced medical knowledge integration

### 👥 **Role-Based Access Control**
- **Patients**: Book appointments, view lab results, manage prescriptions
- **Doctors**: Patient management, create lab results, write prescriptions  
- **Pharmacists**: Prescription management, mark as collected
- **Admins**: User management, system statistics

### 🏥 **Healthcare Portal Features**
- Appointment booking and management
- Lab results with medical imagery (SVG)
- Prescription management system
- Secure messaging between patients and providers
- PDF medical report generation

## Platform Features

### **Healthcare Management**
- **Patient Portal**: Secure access to medical records and appointments
- **Staff Dashboard**: Comprehensive tools for healthcare professionals
- **Prescription Management**: Complete medication tracking system
- **Lab Results**: Medical imagery and test result management
- **Secure Messaging**: Encrypted communication between patients and providers

### **AI-Powered Assistance**
- **Medical AI Assistant**: Intelligent support for healthcare queries
- **Diagnostic Support**: AI-powered medical information and guidance
- **Treatment Recommendations**: Advanced clinical decision support
- **Health Analytics**: Data-driven insights for better patient care

### **Security & Compliance**
- **HIPAA Compliance**: Full adherence to healthcare privacy regulations
- **Data Encryption**: Advanced encryption for all sensitive information
- **Access Controls**: Comprehensive role-based permissions
- **Audit Logging**: Complete audit trails for compliance requirements

## Database Reset

To reset the entire database and get fresh sample data:
```bash
docker-compose down -v
docker-compose up --build
```

Sample data is automatically created on first run, including realistic medical records, prescriptions, lab results, and user accounts.

## API Provider Support

Works with any OpenAI-compatible API:

```bash
# OpenAI (default)
export OPENAI_BASE_URL="https://api.openai.com/v1"
export OPENAI_MODEL="gpt-4o-mini"

# Groq (fast inference)  
export OPENAI_BASE_URL="https://api.groq.com/openai/v1"
export OPENAI_MODEL="llama3-8b-8192"

# Local LM Studio
export OPENAI_BASE_URL="http://localhost:1234/v1"
export OPENAI_MODEL="your-local-model"

# Local LM Studio (Alternative)
export OPENAI_BASE_URL="http://localhost:1234/v1"
export OPENAI_MODEL="your-local-model"
```

## Platform Benefits

RipperDoc provides comprehensive healthcare management solutions:

1. **Improved Patient Care** - Streamlined workflows and better communication
2. **Enhanced Security** - HIPAA-compliant data protection and access controls
3. **AI-Powered Insights** - Advanced analytics and clinical decision support
4. **Operational Efficiency** - Automated processes and integrated workflows
5. **Compliance Management** - Built-in audit trails and regulatory adherence
6. **Scalable Architecture** - Designed to grow with your healthcare facility
7. **24/7 Support** - Dedicated technical support and training

## Coming Soon

### 📱 **Mobile App**
React Native application for patient and staff mobile access

### 🔥 **Advanced Analytics**
Enhanced reporting and predictive analytics for healthcare outcomes

### 🧪 **AI Enhancements**
- Advanced diagnostic support
- Predictive medicine capabilities
- Natural language processing improvements
- Clinical decision support enhancements

## Contributing

Contributions welcome! Please maintain high standards for healthcare security and compliance.

## Community & Support

### 💬 **GitHub Discussions**
Join our community to share your learnings, discuss exploits, and get help:
- **[🎯 Share Your Exploits](https://github.com/aligorithm/ripperdoc/discussions)** - Post successful attack chains and creative exploitation techniques
- **[❓ Get Help](https://github.com/aligorithm/ripperdoc/discussions)** - Ask questions if you're stuck on challenges
- **[💡 Learning Insights](https://github.com/aligorithm/ripperdoc/discussions)** - Share what you learned and help others
- **[🔧 Technical Issues](https://github.com/aligorithm/ripperdoc/discussions)** - Report setup problems or bugs
- **[🚀 Feature Requests](https://github.com/aligorithm/ripperdoc/discussions)** - Suggest new vulnerabilities or improvements

### 📚 **Learning Resources**
- Check out the [Security Challenges Guide](challenges.md) for hands-on exercises
- Browse [GitHub Discussions](https://github.com/aligorithm/ripperdoc/discussions) for community solutions and tips
- Watch the [Demo Video](https://youtu.be/h3jm83jw33Q) for setup and overview

## Environment Variables

### AI Provider Configuration
```bash
# Choose AI provider (default: openai)
LLM_PROVIDER=openai                         # Options: 'openai'

# OpenAI/Cloud AI Settings
OPENAI_API_KEY=your-api-key-here            # Required for AI functionality
OPENAI_MODEL=gpt-4o-mini                    # Optional: model to use
OPENAI_BASE_URL=https://api.openai.com/v1   # Optional: API endpoint
```

### Database (Auto-configured in Docker)
```bash
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres  
POSTGRES_DB=ripperdoc
```

### Full Example Configurations

#### OpenAI (Default)
```bash
export OPENAI_API_KEY=sk-your-key-here
docker-compose up --build
```

#### Cloud AI (Groq)
```bash
export LLM_PROVIDER=openai
export OPENAI_API_KEY=your-groq-key
export OPENAI_BASE_URL=https://api.groq.com/openai/v1
export OPENAI_MODEL=llama3-8b-8192
docker-compose up --build
```

## License

MIT License

## Disclaimer

⚠️ **Intentionally vulnerable application for educational purposes only. Contains deliberate security flaws including AI vulnerabilities. Do not use in production or with real data. Authors not responsible for misuse.**
