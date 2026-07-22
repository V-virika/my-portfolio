import { Project, SkillCategory, Achievement, Publication } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: 'Virika Olivia Soans',
  title: 'Data Science & Software Engineering Fresher',
  subheadline:
    'Bridging Artificial Intelligence, Analytics, and Modern Web Development. Skilled in designing and implementing efficient AI-driven solutions, analyzing complex datasets, and delivering scalable applications.',
  degree: 'B.Tech in Computer Science & Engineering (Data Science)',
  university: 'Dayananda Sagar University',
  cgpa: '9.42 / 10.0',
  location: 'Bengaluru, India',
  email: 'virika06@gmail.com',
  phone: '+91 99863 02506',
  github: 'https://github.com/V-virika',
  linkedin: 'https://linkedin.com/in/virika-olivia-soans-3727122b8',
  avatar: '/images/profile_avatar.jpg',
  resumePdf: '/resume.pdf',
  bio: 'I am a results-driven technology enthusiast with expertise in Python, SQL, data analytics, and software development. Skilled in designing and implementing efficient solutions, analyzing complex datasets, and developing applications that drive informed decision-making. Experienced in data processing, database management, and software engineering principles, with a strong foundation in problem-solving, algorithmic thinking, and delivering quality technical solutions.',
  stats: [
    { label: 'Engineering Projects', value: '6+' },
    { label: 'AI Accuracy Peak', value: '96.4%' },
    { label: 'Expo Award', value: '1st Place' },
    { label: 'Research Papers', value: '3 Published' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'prostate-cancer-classification',
    title: 'Prostate Cancer Classification',
    subtitle: 'Vision Transformers & Explainable AI',
    description:
      'Engineered a Swin Transformer pipeline with CLAHE preprocessing, achieving 96.4% classification accuracy and 0.90 ROC-AUC on histopathological images — outperforming CNN baselines by ~8%.',
    fullDescription:
      'Engineered a Swin Transformer deep learning pipeline with CLAHE preprocessing for histopathological image classification. Integrated Gradio-based explainable AI visualization to highlight diagnostic decision regions, enabling clinician trust and supporting scalable hospital deployment.',
    tags: ['Deep Learning', 'Vision Transformers', 'Explainable AI', 'PyTorch', 'Python', 'Gradio'],
    category: 'AI & ML',
    githubUrl: 'https://github.com/V-virika/prostate-cancer-classification',
    image: '/images/project_cancer_swin.png',
    metrics: { label: 'Accuracy', value: '96.4%' },
    highlights: [
      'Engineered Swin Transformer pipeline with CLAHE preprocessing (96.4% accuracy, 0.90 ROC-AUC)',
      'Outperformed traditional CNN baselines by ~8% on diagnostic accuracy',
      'Integrated Gradio explainable AI visualization for clinician decision support',
    ],
    featured: true,
  },
  {
    id: 'finova-ai',
    title: 'Finova AI – Financial Stability & Scheme Platform',
    subtitle: 'React, Node.js, PostgreSQL, Firebase, AI-based Risk Analysis',
    description:
      'Developed an AI-driven platform to detect early debt risk and map users to relevant government schemes (PMJDY, Mudra, SHG, MSME), enabling financial inclusion for underserved communities.',
    fullDescription:
      'Built a responsive React frontend with seamless API integration to a Node.js backend, enabling real-time financial analysis, risk scoring, and personalized guidance for vulnerable demographics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Firebase', 'AI Risk Analysis', 'Python'],
    category: 'Full Stack',
    githubUrl: 'https://github.com/V-virika/finova-ai',
    image: '/images/project_finova_ai.png',
    metrics: { label: 'Targeting', value: 'PMJDY, Mudra, MSME' },
    highlights: [
      'Developed AI debt risk scoring algorithms for financial distress detection',
      'Automated scheme matching system connecting users with PMJDY, Mudra, SHG, & MSME grants',
      'Built responsive React UI with Node.js backend REST APIs',
    ],
    featured: true,
  },
  {
    id: 'imprints-blood-group-id',
    title: 'IMPRINTS — Fingerprint Blood Group ID',
    subtitle: 'EfficientNet, Real-Time Healthcare Web App',
    description:
      'Built a non-invasive blood group prediction system using EfficientNet, achieving 85.84% accuracy — deployed as a real-time web app for emergency and rural healthcare settings.',
    fullDescription:
      'Designed for scalability in resource-constrained environments, reducing reliance on lab tests in underserved communities by predicting blood groups from dermatoglyphic fingerprint features.',
    tags: ['EfficientNet', 'Deep Learning', 'Web App', 'Healthcare', 'OpenCV', 'Flask'],
    category: 'Healthcare',
    githubUrl: 'https://github.com/V-virika/IMPRINTS-blood-group-id',
    image: '/images/project_imprints.png',
    metrics: { label: 'Accuracy', value: '85.84%' },
    highlights: [
      'Trained EfficientNet CNN model achieving 85.84% blood group prediction accuracy',
      'Deployed real-time web app interface for emergency rural healthcare clinics',
      'Eliminates chemical reagent reliance for non-invasive blood group triage',
    ],
    featured: true,
  },
  {
    id: 'hybrid-piezo-solar-ev-charging',
    title: 'Hybrid Piezo-Solar Smart Road for EV Charging',
    subtitle: 'ESP32, IoT, Wireless Power Transfer, Renewable Energy',
    description:
      'Engineered a hybrid piezoelectric and solar energy harvesting smart charging pad with wheel-embedded receiver technology for dynamic, sustainable EV power transfer.',
    fullDescription:
      'Designed an innovative sustainable energy ecosystem combining piezoelectric pressure harvesting and solar PV panels integrated with a smart charging pad. Features dynamic wireless power transfer to wheel-embedded receivers on electric vehicles.',
    tags: ['ESP32', 'IoT', 'Wireless Power Transfer', 'Renewable Energy', 'CleanTech', 'Embedded Systems'],
    category: 'Web & IoT',
    githubUrl:
      'https://github.com/V-virika/HYBRID-PIEZO-SOLAR-SMART-PAD-WITH-WHEEL-EMBEDDED-RECEIVER-FOR-SUSTAINABLE-EV-CHARGING',
    image: '/images/project_piezo_ev.png',
    metrics: { label: 'Publication', value: 'Published 2026 Paper' },
    highlights: [
      'Designed hybrid piezoelectric & solar energy harvesting matrix',
      'Engineered wheel-embedded receiver alignment mechanism for wireless dynamic EV charging',
      'Published research paper: “Hybrid Piezo-Solar pad with wheel embedded receiver for sustainable EV charging” (2026)',
    ],
    featured: true,
  },
  {
    id: 'adaptive-audio-steganography',
    title: 'Adaptive Audio Steganography (STC + GOAS)',
    subtitle: '2nd Place Winner, University Expo 2025',
    description:
      'Designed a high-fidelity steganography system using Syndrome-Trellis Codes (STC) and Hamming coding, embedding encrypted messages in audio with robust imperceptibility metrics.',
    fullDescription:
      'Engineered an adaptive audio steganography framework combining STC embedding and Generalized Optimal Distortion Assignment (GOAS) to hide encrypted data within digital audio signals without perceptual distortion.',
    tags: ['Steganography', 'Syndrome-Trellis Codes', 'Information Hiding', 'Python', 'Cryptography'],
    category: 'Research',
    githubUrl: 'https://github.com/V-virika',
    image: '/images/project_steganography.png',
    metrics: { label: 'Award', value: '2nd Place Expo 2025' },
    highlights: [
      'Won 2nd Place at Dayananda Sagar University Project Expo 2025',
      'Implemented Syndrome-Trellis Codes (STC) for optimal distortion assignment',
      'Achieved robust imperceptibility & encryption security metrics on audio covers',
    ],
    featured: true,
  },
  {
    id: 'smart-agriculture-iot',
    title: 'Smart Agriculture IoT System',
    subtitle: 'NodeMCU, IoT, Real-Time Soil Analytics Network',
    description:
      'Deployed IoT sensor network + automated irrigation system with real-time soil moisture analytics via Blynk. Won 1st place at DSU Expo 2024 & Global Nominee at NASA Space Apps Challenge 2024.',
    fullDescription:
      'Deployed IoT sensor network + automated irrigation system with real-time soil moisture analytics via Blynk, reducing manual oversight and optimizing water usage. Selected as a Global Nominee at NASA Space Apps Challenge 2024 from thousands of international submissions.',
    tags: ['IoT', 'NodeMCU', 'Blynk', 'Real-Time Analytics', 'Python', 'Sensors'],
    category: 'Web & IoT',
    githubUrl: 'https://github.com/V-virika/smart-agriculture-iot',
    image: '/images/project_agri_iot.png',
    metrics: { label: 'Recognition', value: '1st Place & NASA Nominee' },
    highlights: [
      'Won 1st Place at Dayananda Sagar University Project Expo 2024',
      'Selected as Global Nominee at NASA Space Apps Challenge 2024',
      'Deployed automated soil irrigation network with real-time Blynk analytics',
    ],
    featured: true,
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title:
      'Multimodal Machine Learning Approaches for Early Detection and Classification of Breast Cancer Using Imaging and Genomic Data',
    journalYear: 'Published 2025',
  },
  {
    title:
      'Automated License Plate Recognition Using Deep Learning for Smart Mobility',
    journalYear: 'Published 2026',
  },
  {
    title:
      'Hybrid Piezo-Solar pad with wheel embedded receiver for sustainable EV charging',
    journalYear: 'Published 2026',
  },
];

export const EDUCATION_LIST = [
  {
    institution: 'Dayananda Sagar University',
    degree: 'B.Tech — Computer Science & Engineering (Data Science)',
    year: '2022 – 2026',
    score: 'CGPA: 9.42 / 10',
  },
  {
    institution: 'Christ Academy Junior College',
    degree: 'Class XII (PCMB)',
    year: '2022',
    score: '89.3%',
  },
  {
    institution: 'De Sales Academy',
    degree: 'Class X (ICSE)',
    year: '2020',
    score: '92%',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Analytics & Machine Learning',
    description: 'Building predictive models, deep learning pipelines, and explainable AI systems.',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Predictive Modelling', level: 92, tag: 'ML' },
      { name: 'Statistical Analysis', level: 90, tag: 'Stats' },
      { name: 'Data Visualization', level: 88, tag: 'BI' },
      { name: 'Deep Learning (CNNs & Vision Transformers)', level: 90, tag: 'PyTorch/TF' },
      { name: 'Explainable AI (Grad-CAM, SHAP)', level: 88, tag: 'XAI' },
    ],
  },
  {
    title: 'Tools & Platforms',
    description: 'Databases, visualization dashboards, and deployment platforms.',
    iconName: 'Cpu',
    skills: [
      { name: 'Python', level: 95, tag: 'Core Lang' },
      { name: 'SQL (MySQL)', level: 90, tag: 'Database' },
      { name: 'Power BI', level: 88, tag: 'Dashboards' },
      { name: 'Jupyter & GitHub', level: 92, tag: 'Dev Tools' },
      { name: 'Cloud Platforms', level: 82, tag: 'Cloud' },
    ],
  },
  {
    title: 'Libraries & Frameworks',
    description: 'Production-ready toolkits for data science and AI development.',
    iconName: 'Code2',
    skills: [
      { name: 'Pandas & NumPy', level: 95, tag: 'Data Prep' },
      { name: 'Scikit-learn', level: 92, tag: 'ML Engine' },
      { name: 'TensorFlow & PyTorch', level: 88, tag: 'Deep Learning' },
      { name: 'OpenCV & CLAHE', level: 85, tag: 'Image Proc' },
      { name: 'Gradio & Flask', level: 85, tag: 'Web Services' },
    ],
  },
  {
    title: 'Frontend & Web Development',
    description: 'Crafting responsive, clean web interfaces and software APIs.',
    iconName: 'Layout',
    skills: [
      { name: 'HTML5 & CSS3', level: 95, tag: 'Markup' },
      { name: 'JavaScript & React', level: 88, tag: 'Frontend' },
      { name: 'Node.js', level: 85, tag: 'Backend' },
      { name: 'PostgreSQL & Firebase', level: 85, tag: 'Data Store' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '1st Place — Project Expo',
    event: 'Smart Agriculture IoT System, Dayananda Sagar University',
    date: '2024',
    description: 'Awarded 1st place for the Smart Agriculture IoT & Real-Time Soil Analytics System.',
  },
  {
    title: 'Global Nominee — NASA Space Apps Challenge',
    event: 'NASA Space Apps Challenge 2024',
    date: '2024',
    description: "Selected as Global Nominee for 'Leveraging Earth Observation Data for Informed Agricultural Decision-Making'.",
  },
  {
    title: '2nd Place — Project Expo',
    event: 'Adaptive Audio Steganography, Dayananda Sagar University',
    date: '2025',
    description: 'Awarded 2nd place for high-fidelity Syndrome-Trellis Codes steganography system.',
  },
  {
    title: 'Best SDG Innovation Award',
    event: '36 Hours Hackathon-CodeSangram, Alliance University',
    date: '2026',
    description: 'Won Best SDG Innovation for sustainable AI technology implementation.',
  },
];
