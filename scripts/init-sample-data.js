const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Database configuration
const pool = new Pool({
  user: process.env.POSTGRES_USER || 'postgres',
  host: process.env.POSTGRES_HOST || 'db',
  database: process.env.POSTGRES_DB || 'ripperdoc',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  port: process.env.POSTGRES_PORT || 5432,
});

// Check if specific data exists
async function hasSpecificData(tableName, condition = '') {
  try {
    let query = `SELECT COUNT(*) FROM ${tableName}`;
    if (condition) query += ` WHERE ${condition}`;
    
    const result = await pool.query(query);
    return parseInt(result.rows[0].count) > 0;
  } catch (error) {
    console.log(`❌ Error checking for ${tableName} data:`, error.message);
    return false;
  }
}

// Check if tables exist
async function tablesExist() {
  try {
    const result = await pool.query(`
      SELECT COUNT(*) FROM information_schema.tables 
      WHERE table_schema = 'public' AND table_name = 'users'
    `);
    return parseInt(result.rows[0].count) > 0;
  } catch (error) {
    console.log('❌ Error checking for tables:', error.message);
    return false;
  }
}

// Initialize database schema
async function initializeSchema() {
  try {
    const schemaPath = path.join(__dirname, '../database/init.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    await pool.query(schema);
    return true;
  } catch (error) {
    console.log('❌ Error initializing schema:', error.message);
    return false;
  }
}

// Create sample images function
async function createSampleImages() {
  try {
    // Ensure uploads directory exists
    const uploadsDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    // Blood test SVG
    const bloodTestSvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f8f9fa" stroke="#dee2e6" stroke-width="2"/>
  <rect x="20" y="20" width="360" height="50" fill="#e3f2fd" stroke="#2196f3" stroke-width="1"/>
  <text x="200" y="50" font-family="Arial" font-size="20" fill="#1976d2" text-anchor="middle" font-weight="bold">Blood Test Results</text>
  <text x="40" y="90" font-family="Arial" font-size="14" fill="#333">Complete Blood Count (CBC)</text>
  <text x="40" y="120" font-family="Arial" font-size="12" fill="#666">WBC: 7.2 K/μL (Normal: 4.5-11.0)</text>
  <text x="40" y="140" font-family="Arial" font-size="12" fill="#666">RBC: 4.5 M/μL (Normal: 4.5-5.9)</text>
  <text x="40" y="160" font-family="Arial" font-size="12" fill="#666">Hemoglobin: 14.2 g/dL (Normal: 14.0-18.0)</text>
  <text x="40" y="180" font-family="Arial" font-size="12" fill="#666">Hematocrit: 42.1% (Normal: 42-52)</text>
  <text x="40" y="200" font-family="Arial" font-size="12" fill="#666">Platelets: 285 K/μL (Normal: 150-450)</text>
  <rect x="300" y="220" width="80" height="25" fill="#4caf50" rx="4"/>
  <text x="340" y="238" font-family="Arial" font-size="12" fill="white" text-anchor="middle" font-weight="bold">NORMAL</text>
</svg>`;

    // X-ray SVG
    const xraySvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#2c2c2c" stroke="#666" stroke-width="2"/>
  <rect x="20" y="20" width="360" height="40" fill="#333" stroke="#666" stroke-width="1"/>
  <text x="200" y="45" font-family="Arial" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">Chest X-Ray</text>
  <ellipse cx="200" cy="160" rx="80" ry="60" fill="#444" stroke="#888" stroke-width="2"/>
  <ellipse cx="200" cy="160" rx="60" ry="45" fill="#555" stroke="#999" stroke-width="1"/>
  <circle cx="180" cy="140" r="15" fill="#666" stroke="#aaa" stroke-width="1"/>
  <circle cx="220" cy="140" r="15" fill="#666" stroke="#aaa" stroke-width="1"/>
  <rect x="190" y="180" width="20" height="30" fill="#777" stroke="#aaa" stroke-width="1"/>
  <text x="200" y="250" font-family="Arial" font-size="14" fill="#ccc" text-anchor="middle">Clear lungs - No abnormalities</text>
  <rect x="300" y="260" width="80" height="25" fill="#4caf50" rx="4"/>
  <text x="340" y="278" font-family="Arial" font-size="12" fill="white" text-anchor="middle" font-weight="bold">NORMAL</text>
</svg>`;

    // MRI SVG
    const mriSvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#1a1a1a" stroke="#444" stroke-width="2"/>
  <rect x="20" y="20" width="360" height="40" fill="#000" stroke="#666" stroke-width="1"/>
  <text x="200" y="45" font-family="Arial" font-size="18" fill="#fff" text-anchor="middle" font-weight="bold">Brain MRI Scan</text>
  <circle cx="200" cy="160" r="70" fill="#333" stroke="#666" stroke-width="2"/>
  <circle cx="200" cy="160" r="50" fill="#444" stroke="#777" stroke-width="1"/>
  <ellipse cx="200" cy="140" rx="30" ry="20" fill="#555" stroke="#888" stroke-width="1"/>
  <ellipse cx="200" cy="180" rx="25" ry="15" fill="#666" stroke="#999" stroke-width="1"/>
  <circle cx="185" cy="130" r="5" fill="#777"/>
  <circle cx="215" cy="130" r="5" fill="#777"/>
  <path d="M 180 190 Q 200 200 220 190" stroke="#aaa" stroke-width="2" fill="none"/>
  <text x="200" y="250" font-family="Arial" font-size="14" fill="#ccc" text-anchor="middle">Normal brain structure</text>
  <rect x="300" y="260" width="80" height="25" fill="#4caf50" rx="4"/>
  <text x="340" y="278" font-family="Arial" font-size="12" fill="white" text-anchor="middle" font-weight="bold">NORMAL</text>
</svg>`;

    // Write the files
    fs.writeFileSync(path.join(uploadsDir, 'sample-blood-1.svg'), bloodTestSvg);
    fs.writeFileSync(path.join(uploadsDir, 'sample-xray-1.svg'), xraySvg);
    fs.writeFileSync(path.join(uploadsDir, 'sample-mri-1.svg'), mriSvg);

    console.log('✅ Sample images created successfully!');
    return true;
  } catch (error) {
    console.log('⚠️ Failed to create sample images:', error.message);
    return false;
  }
}

// Main initialization function
async function initializeSampleData() {
  const startTime = Date.now();
  console.log('🚀 Starting sample data initialization...');
  
  try {
    // Step 1: Check and initialize schema if needed
    console.log('📋 Step 1: Checking database schema...');
    if (!(await tablesExist())) {
      console.log('🔧 Database tables not found, initializing schema...');
      await initializeSchema();
      console.log('✅ Database schema initialized successfully!');
    } else {
      console.log('✅ Database schema already exists');
    }
    
    // Step 1.5: Create sample images
    console.log('\n🖼️ Step 1.5: Creating sample images...');
    await createSampleImages();
    
    // Step 2: Check and create users
    console.log('\n👥 Step 2: Checking users...');
    if (!(await hasSpecificData('users', "email = 'patient@test.com'"))) {
      console.log('📝 Creating sample users...');
      const hashedPassword = await bcrypt.hash('password123', 5);
      
      // Add admin user
      await pool.query(
        `INSERT INTO users (first_name, last_name, email, password, role, phone) 
         VALUES ($1, $2, $3, $4, $5, $6) 
         ON CONFLICT (email) DO UPDATE SET password = $4, first_name = $1, last_name = $2, role = $5, phone = $6`,
        ['Admin', 'User', 'admin@ripperdoc.com', hashedPassword, 'admin', '+1-555-0001']
      );
      
      // Add test patient
      await pool.query(
        `INSERT INTO users (first_name, last_name, email, password, role, date_of_birth, phone) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) 
         ON CONFLICT (email) DO UPDATE SET password = $4, first_name = $1, last_name = $2, role = $5, date_of_birth = $6, phone = $7`,
        ['Samuel', 'L Jackson', 'patient@test.com', hashedPassword, 'patient', '1985-06-15', '+1-555-0123']
      );
      
      // Add additional test patient
      await pool.query(
        `INSERT INTO users (first_name, last_name, email, password, role, date_of_birth, phone) 
         VALUES ($1, $2, $3, $4, $5, $6, $7) 
         ON CONFLICT (email) DO UPDATE SET password = $4, first_name = $1, last_name = $2, role = $5, date_of_birth = $6, phone = $7`,
        ['Alice', 'Johnson', 'patient2@test.com', hashedPassword, 'patient', '1990-03-20', '+1-555-0124']
      );
      
      // Add test doctor
      await pool.query(
        `INSERT INTO users (first_name, last_name, email, password, role, phone) 
         VALUES ($1, $2, $3, $4, $5, $6) 
         ON CONFLICT (email) DO UPDATE SET password = $4, first_name = $1, last_name = $2, role = $5, phone = $6`,
        ['Dr. Kendrick', 'Lawal', 'doctor@test.com', hashedPassword, 'doctor', '+1-555-0456']
      );
      
      // Add additional doctors
      const doctors = [
        ['Dr. Marshall D.', 'Teach', 'dr.teach@ripperdoc.com'],
['Dr. Erwin', 'Smith', 'dr.smith@ripperdoc.com'],
['Dr. Tinu', 'Buhari', 'dr.buhari@ripperdoc.com'],
['Dr. Acule', 'Mihawk', 'dr.mihawk@ripperdoc.com']
      ];
      
      for (const [firstName, lastName, email] of doctors) {
        await pool.query(
          `INSERT INTO users (first_name, last_name, email, password, role, phone) 
           VALUES ($1, $2, $3, $4, $5, $6) 
           ON CONFLICT (email) DO UPDATE SET password = $4, first_name = $1, last_name = $2, role = $5, phone = $6`,
          [firstName, lastName, email, hashedPassword, 'doctor', '+1-555-0999']
        );
      }
      
      // Add pharmacist accounts  
      const pharmacists = [
        ['Ugo C', 'Shege', 'ugocshege@ripperdoc.com', 'PH12345'],
['Pablo', 'Escrowbar', 'escrowbar@ripperdoc.com', 'PH67890']
      ];
      
      for (const [firstName, lastName, email, licenseNumber] of pharmacists) {
        await pool.query(
          `INSERT INTO users (first_name, last_name, email, password, role, phone, license_number) 
           VALUES ($1, $2, $3, $4, $5, $6, $7) 
           ON CONFLICT (email) DO UPDATE SET password = $4, first_name = $1, last_name = $2, role = $5, phone = $6, license_number = $7`,
          [firstName, lastName, email, hashedPassword, 'pharmacist', '+1-555-0888', licenseNumber]
        );
      }
      
      console.log('✅ Sample users created successfully!');
    } else {
      console.log('✅ Sample users already exist');
    }
    
    // Step 3: Check and create medical records
    console.log('\n📋 Step 3: Checking medical records...');
    if (!(await hasSpecificData('medical_records'))) {
      console.log('📝 Creating sample medical records...');
      
      // Get user IDs
      const patientResult = await pool.query('SELECT id FROM users WHERE email = $1', ['patient@test.com']);
      const doctorResult = await pool.query('SELECT id FROM users WHERE email = $1', ['doctor@test.com']);
      
      if (patientResult.rows.length > 0 && doctorResult.rows.length > 0) {
        const patientId = patientResult.rows[0].id;
        
        const records = [
          {
            title: "Annual Physical Exam",
            content: "Patient appears healthy. Blood pressure: 120/80. Weight: 165 lbs. No significant issues noted."
          },
          {
            title: "Blood Test Results",
            content: "Complete blood count normal. Cholesterol slightly elevated at 210 mg/dL. Recommend dietary changes."
          },
          {
            title: "Follow-up Visit",
            content: "Patient reports feeling well. Minor cold symptoms resolved. Continue current medications."
          }
        ];
        
        for (const record of records) {
          await pool.query(
            `INSERT INTO medical_records (user_id, title, content) 
             VALUES ($1, $2, $3)`,
            [patientId, record.title, record.content]
          );
        }
        
        console.log('✅ Sample medical records created successfully!');
      } else {
        console.log('⚠️ Cannot create medical records: test users not found');
      }
    } else {
      console.log('✅ Sample medical records already exist');
    }
    
    // Step 4: Check and create prescriptions
    console.log('\n💊 Step 4: Checking prescriptions...');
    if (!(await hasSpecificData('prescriptions'))) {
      console.log('📝 Creating sample prescriptions...');
      
      // Get user IDs
      const patientResult = await pool.query('SELECT id FROM users WHERE email = $1', ['patient@test.com']);
      const doctorResult = await pool.query('SELECT id FROM users WHERE email = $1', ['doctor@test.com']);
      
      if (patientResult.rows.length > 0 && doctorResult.rows.length > 0) {
        const patientId = patientResult.rows[0].id;
        const doctorId = doctorResult.rows[0].id;
        
        const prescriptions = [
          ['Lisinopril', '10mg', 'Once daily', '2024-01-01', '2024-07-01', 'active'],
          ['Metformin', '500mg', 'Twice daily with meals', '2024-01-01', '2024-07-01', 'active'],
          ['Ibuprofen', '400mg', 'As needed for pain', '2024-01-01', '2024-02-01', 'completed'],
          ['Vitamin D3', '2000 IU', 'Once daily', '2024-01-01', '2024-12-31', 'active']
        ];
        
        for (const [medication, dosage, frequency, startDate, endDate, status] of prescriptions) {
          await pool.query(
            `INSERT INTO prescriptions (patient_id, doctor_id, medication_name, dosage, frequency, start_date, end_date, status) 
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
            [patientId, doctorId, medication, dosage, frequency, startDate, endDate, status]
          );
        }
        
        console.log('✅ Sample prescriptions created successfully!');
      } else {
        console.log('⚠️ Cannot create prescriptions: test users not found');
      }
    } else {
      console.log('✅ Sample prescriptions already exist');
    }
    
    // Step 5: Check and create lab results
    console.log('\n🧪 Step 5: Checking lab results...');
    if (!(await hasSpecificData('lab_results'))) {
      console.log('📝 Creating sample lab results...');
      
      // Get user IDs
      const patientResult = await pool.query('SELECT id FROM users WHERE email = $1', ['patient@test.com']);
      const doctorResult = await pool.query('SELECT id FROM users WHERE email = $1', ['doctor@test.com']);
      
      if (patientResult.rows.length > 0 && doctorResult.rows.length > 0) {
        const patientId = patientResult.rows[0].id;
        const doctorId = doctorResult.rows[0].id;
        
        const labResults = [
          ['Complete Blood Count (CBC)', 'WBC: 7.2, RBC: 4.5, Hemoglobin: 14.2, Hematocrit: 42.1, Platelets: 285', '2024-01-15', 'sample-blood-1.svg'],
          ['Comprehensive Metabolic Panel', 'Glucose: 92, BUN: 18, Creatinine: 1.0, Sodium: 140, Potassium: 4.2', '2024-01-15', null],
          ['Chest X-Ray', 'Chest X-ray shows clear lungs with no signs of infection or abnormalities. Heart size normal.', '2024-02-01', 'sample-xray-1.svg'],
          ['Thyroid Function (TSH)', 'TSH: 2.1, T4: 1.2, T3: 3.1', '2024-02-15', null],
          ['Brain MRI', 'MRI scan shows normal brain structure with no abnormalities detected.', '2024-03-01', 'sample-mri-1.svg'],
          ['Vitamin D', 'Vitamin D 25-OH: 22 ng/mL', '2024-03-15', null]
        ];
        
        for (const [testName, result, testDate, filePath] of labResults) {
          await pool.query(
            `INSERT INTO lab_results (patient_id, doctor_id, test_name, result, test_date, file_path) 
             VALUES ($1, $2, $3, $4, $5, $6)`,
            [patientId, doctorId, testName, result, testDate, filePath]
          );
        }
        
        console.log('✅ Sample lab results created successfully!');
      } else {
        console.log('⚠️ Cannot create lab results: test users not found');
      }
    } else {
      console.log('✅ Sample lab results already exist');
    }
    
    // Step 6: Check and create appointments
    console.log('\n📅 Step 6: Checking appointments...');
    if (!(await hasSpecificData('appointments'))) {
      console.log('📝 Creating sample appointments...');
      
      // Get user IDs
      const patientResult = await pool.query('SELECT id FROM users WHERE email = $1', ['patient@test.com']);
      const doctorResult = await pool.query('SELECT id FROM users WHERE email = $1', ['doctor@test.com']);
      
      if (patientResult.rows.length > 0 && doctorResult.rows.length > 0) {
        const patientId = patientResult.rows[0].id;
        const doctorId = doctorResult.rows[0].id;
        
        const appointments = [
          ['2024-01-15 09:00:00', 'completed', 'Annual physical examination completed. Patient in good health.'],
          ['2024-02-20 14:30:00', 'completed', 'Follow-up blood pressure check. Blood pressure stable.'],
          ['2024-12-15 10:00:00', 'scheduled', 'Routine check-up scheduled.'],
          ['2024-12-22 11:30:00', 'scheduled', 'Lab results review appointment.']
        ];
        
        for (const [appointmentDate, status, notes] of appointments) {
          await pool.query(
            `INSERT INTO appointments (patient_id, doctor_id, appointment_date, status, notes) 
             VALUES ($1, $2, $3, $4, $5)`,
            [patientId, doctorId, appointmentDate, status, notes]
          );
        }
        
        // Add appointments for additional patient
        const patient2Result = await pool.query('SELECT id FROM users WHERE email = $1', ['patient2@test.com']);
        if (patient2Result.rows.length > 0) {
          const patient2Id = patient2Result.rows[0].id;
          
          const additionalAppointments = [
            ['2024-01-10 10:00:00', 'completed', 'Migraine headache treatment and consultation'],
            ['2024-02-15 14:00:00', 'completed', 'Routine wellness checkup and vaccinations'],
            ['2024-12-20 09:30:00', 'scheduled', 'Follow-up appointment for blood pressure monitoring']
          ];
          
          for (const [appointmentDate, status, reason] of additionalAppointments) {
            await pool.query(
              `INSERT INTO appointments (patient_id, doctor_id, appointment_date, status, reason) 
               VALUES ($1, $2, $3, $4, $5)`,
              [patient2Id, doctorId, appointmentDate, status, reason]
            );
          }
        }
        
        console.log('✅ Sample appointments created successfully!');
      } else {
        console.log('⚠️ Cannot create appointments: test users not found');
      }
    } else {
      console.log('✅ Sample appointments already exist');
    }
    
    // Step 7: Check and create chat history
    console.log('\n💬 Step 7: Checking chat history...');
    if (!(await hasSpecificData('chat_history'))) {
      console.log('📝 Creating sample chat history...');
      
      const patientResult = await pool.query('SELECT id FROM users WHERE email = $1', ['patient@test.com']);
      if (patientResult.rows.length > 0) {
        const patientId = patientResult.rows[0].id;
        
        const chatHistory = [
          ['Hello, I need help with my health records', 'Hello! I can help you access your health records. What specific information are you looking for?'],
          ['Can you show me my current prescriptions?', 'I can retrieve your current prescriptions for you. Let me access that information from our database.'],
          ['What services does Zero Health provide?', 'Zero Health provides comprehensive healthcare services including online appointment booking, medical record access, prescription management, lab result viewing, secure messaging with healthcare providers, and 24/7 AI health assistant support.'],
          ['I have a headache, should I see a doctor?', 'For occasional headaches, over-the-counter pain relievers like ibuprofen or acetaminophen may help. However, if headaches are frequent, severe, or accompanied by other symptoms like fever, vision changes, or neck stiffness, you should consult with a healthcare provider.']
        ];
        
        for (const [userMessage, botResponse] of chatHistory) {
          await pool.query(
            `INSERT INTO chat_history (user_id, message, response, created_at) 
             VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING`,
            [patientId, userMessage, botResponse, new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)]
          );
        }
        
        console.log('✅ Sample chat history created successfully!');
      } else {
        console.log('⚠️ Cannot create chat history: test patient not found');
      }
    } else {
      console.log('✅ Sample chat history already exists');
    }
    
    // Final summary
    const duration = Date.now() - startTime;
    console.log(`\n🎉 Sample data initialization completed in ${duration}ms`);
    console.log('📧 You can login with: patient@test.com / password123');
    console.log('👩‍⚕️ Or as doctor: doctor@test.com / password123');
    
    return true;
  } catch (error) {
    console.log('❌ Sample data initialization failed:', error.message);
    return false;
  }
}

// Run if called directly
if (require.main === module) {
  initializeSampleData();
}

module.exports = { initializeSampleData }; 