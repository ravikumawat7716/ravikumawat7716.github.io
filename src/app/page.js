"use client";
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Code, Database, BookOpen, Terminal, MapPin, Download, ChevronRight, Sparkles, Users, Award, Briefcase, Calendar, Building, Trophy, Star, Heart, FileText, X, Clock, Shield, Globe, ArrowLeft } from 'lucide-react';

// --- Data: Experience ---
const experiences = [
  {
    company: "KRISHAI Technologies (Evolvue.ai)",
    role: "Founding Engineer",
    duration: "Feb 2025 - Present",
    location: "Bengaluru, Karnataka",
    type: "Full-time",
    logo: "https://ui-avatars.com/api/?name=Krish+AI&background=0D8ABC&color=fff",
    desc: [
      "Building EvolVue.Ai (KrishAI Labs).",
      "Building an AI Powered Interview Platform using LLMs, TTS, STT Models, MCP.",
      "Working in a team of 4 - discuss, brainstorm, design, develop, test & deploy."
    ],
    skills: ["Load Testing", "AWS Auto Scaling", "Kubernetes", "Docker", "Error Analysis"]
  },
  {
    company: "Indian Institute of Technology, Madras",
    role: "Teaching Assistant",
    duration: "Dec 2023 - Aug 2025",
    location: "Chennai, Tamil Nadu",
    type: "Part-time",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    desc: [
      "Project Mentor & Viva Examiner for Modern Application Development I & II (CS2003P, CS2006P)."
    ],
    skills: ["MVC", "Mentoring", "Code Review"]
  },
  {
    company: "Indian Institute of Technology, Ropar",
    role: "Research Intern",
    duration: "May 2024 - Jan 2025",
    location: "Rupnagar, Punjab",
    type: "Internship",
    logo: "https://img.collegepravesh.com/2014/10/IIT-Ropar-Logo.png",
    desc: [
      "Leveraged Deep Learning & CNNs for Medical Imaging (Histopathology).",
      "Focus on Deep Learning for Computer Vision using MONAI & PyTorch."
    ],
    skills: ["Deep Learning", "Computer Vision", "PyTorch", "Medical Imaging", "Full Stack"]
  },
  {
    company: "Outlier",
    role: "RLHF Freelance Specialist",
    duration: "Dec 2024",
    location: "Remote",
    type: "Freelance",
    logo: "https://ui-avatars.com/api/?name=Outlier&background=000&color=fff",
    desc: ["Specialized in Reinforcement Learning from Human Feedback."],
    skills: ["RLHF", "AI Training"]
  },
  {
    company: "Biofield Power",
    role: "DevOps Consultant",
    duration: "Oct 2024",
    location: "Rupnagar, Punjab",
    type: "Freelance",
    logo: "https://ui-avatars.com/api/?name=Biofield+Power&background=22c55e&color=fff",
    desc: [
      "Collaborated with Founder to make code production ready.",
      "Implemented CI/CD pipelines with AWS & GCP."
    ],
    skills: ["GCP", "CI/CD", "Bash", "DevOps", "AWS", "Nginx"]
  },
  {
    company: "Sundarbans House, IITM",
    role: "Head of WebOps / Full Stack Engineer",
    duration: "Aug 2023 - Sep 2024",
    location: "Remote",
    type: "Student Role",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg",
    desc: [
      "Led WebOps team, built backend systems using Django & AWS.",
      "Developed REST APIs and managed team operations."
    ],
    skills: ["Python", "Django", "AWS", "Vue.js", "REST APIs"]
  },
  {
    company: "Decarbz",
    role: "Chief Technology Officer",
    duration: "Jun 2022 - Nov 2023",
    location: "Jaipur, Rajasthan",
    type: "Part-time",
    logo: "https://ui-avatars.com/api/?name=Decarbz&background=10b981&color=fff",
    desc: [
      "Won Hackathon at BITS Pilani.",
      "Incubated at JECRC Incubation Center."
    ],
    skills: ["Leadership", "Startup", "Full Stack"]
  },
  {
    company: "PanIIT Alumni India",
    role: "Event & Marketing Coordinator",
    duration: "Aug 2021 - Sep 2021",
    location: "New Delhi",
    type: "Internship",
    logo: "https://ui-avatars.com/api/?name=Pan+IIT&background=ef4444&color=fff",
    desc: ["Coordinated PIWOT 2021 event."],
    skills: ["Management", "Marketing"]
  }
];

// --- Data: Projects ---
const projects = [
  {
    title: "GenAI Powered LMS",
    desc: "Designed an LMS integrating Generative AI for personalized learning. Developed an AI chatbot for doubt resolution and programming assistance using Ollama and Llama3.1.",
    tags: ["Flask", "React.js", "MongoDB", "Llama3.1"],
    color: "bg-purple-600"
  },
  {
    title: "Urban Waste Management (CV)",
    desc: "Applied preprocessing techniques and trained CNN models for waste classification. Assessed performance using accuracy, precision, and recall metrics to optimize the model.",
    tags: ["Python", "OpenCV", "PyTorch", "CNN"],
    color: "bg-green-600"
  },
  {
    title: "Show Ticket Booking Platform",
    desc: "Developed a full-stack web application using Flask and Vue.js. Implemented Redis caching, Gmail SMTP, and deployed on AWS EC2 with Nginx and Celery for async tasks.",
    tags: ["Flask", "Vue.js", "Redis", "AWS"],
    color: "bg-orange-600"
  },
  {
    title: "Taxi Fare Prediction using ML",
    desc: "Preprocessed large datasets, handled missing values, and performed feature engineering. Trained multiple Scikit-Learn models and compared performance metrics for accurate fare prediction.",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    color: "bg-blue-600"
  }
];

// --- Data: Blogs ---
const blogs = [
  {
    id: "aws-ec2-flask",
    slug: "deploying-flask-applications-on-aws-ec2",
    title: "Deploying Flask Applications on AWS EC2",
    desc: "Complete guide to deploying Flask applications on AWS EC2 using Gunicorn and Nginx for production-ready deployment.",
    date: "March 15, 2024",
    readTime: "10 min read",
    tags: ["AWS", "Flask", "DevOps", "Nginx"],
    content: (
      <div className="space-y-6">
        <p>Deploying a Flask application properly is crucial for ensuring your web application runs efficiently and securely in a production environment. This guide will walk you through the process of deploying a Flask application on AWS EC2 using Gunicorn as the WSGI server and Nginx as the reverse proxy.</p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">Prerequisites</h3>
        <ul className="list-disc list-outside ml-6 space-y-1">
            <li>An AWS account</li>
            <li>Basic knowledge of command line and SSH</li>
            <li>A Flask application ready for deployment</li>
            <li>Understanding of Python virtual environments</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">1. Launch an EC2 Instance</h3>
        <p>First, we'll need to set up our EC2 instance:</p>
        <ul className="list-disc list-outside ml-6 space-y-1">
            <li>Sign in to AWS Management Console & Navigate to EC2 Dashboard</li>
            <li>Click "Launch Instance" & Choose Ubuntu Server 20.04 LTS (or newer)</li>
            <li>Select t2.micro (free tier eligible)</li>
            <li>Configure security group to allow HTTP (80), HTTPS (443), and SSH (22)</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">2. Connect to Your Instance</h3>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           ssh -i /path/to/your-key.pem ubuntu@your-public-ip
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">3. Install Required Packages</h3>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           sudo apt update<br/>
           sudo apt upgrade -y<br/>
           sudo apt install python3 python3-pip python3-venv nginx git -y
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">4. Set Up Your Application</h3>
        <p>Clone your application repository and set up a virtual environment:</p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           git clone https://github.com/yourusername/your-repo.git<br/>
           cd your-repo<br/>
           python3 -m venv .venv<br/>
           source .venv/bin/activate<br/>
           pip install -r requirements.txt<br/>
           pip install gunicorn
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">5. Configure Gunicorn</h3>
        <p>Create a systemd service file: <code>sudo nano /etc/systemd/system/myflaskapp.service</code></p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           [Unit]<br/>
           Description=Gunicorn instance for myflaskapp<br/>
           After=network.target<br/><br/>
           [Service]<br/>
           User=ubuntu<br/>
           Group=www-data<br/>
           WorkingDirectory=/home/ubuntu/your-repo<br/>
           Environment="PATH=/home/ubuntu/your-repo/.venv/bin"<br/>
           ExecStart=/home/ubuntu/your-repo/.venv/bin/gunicorn --workers 3 --bind unix:myflaskapp.sock -m 007 app:app<br/><br/>
           [Install]<br/>
           WantedBy=multi-user.target
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">6. Configure Nginx</h3>
        <p>Create configuration: <code>sudo nano /etc/nginx/sites-available/myflaskapp</code></p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           server &#123;<br/>
           &nbsp;&nbsp;listen 80;<br/>
           &nbsp;&nbsp;server_name your-public-ip;<br/><br/>
           &nbsp;&nbsp;location / &#123;<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;proxy_pass http://unix:/home/ubuntu/your-repo/myflaskapp.sock;<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header Host $host;<br/>
           &nbsp;&nbsp;&nbsp;&nbsp;proxy_set_header X-Real-IP $remote_addr;<br/>
           &nbsp;&nbsp;&#125;<br/>
           &#125;
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">7. Conclusion</h3>
        <p>Your Flask application is now running on EC2 with Gunicorn and Nginx! Don't forget to set up HTTPS next.</p>
      </div>
    )
  },
  {
    id: "dns-ssl-https",
    slug: "dns-configuration-ssl-certificates-and-http-setup",
    title: "DNS Configuration, SSL, and HTTP Setup",
    desc: "Learn how to configure custom domains, set up SSL certificates with Let's Encrypt, and secure your Flask application.",
    date: "March 20, 2024",
    readTime: "12 min read",
    tags: ["Security", "DNS", "SSL", "Let's Encrypt"],
    content: (
      <div className="space-y-6">
        <p>Setting up a secure, production-ready web application requires proper DNS configuration and SSL certificates. This guide walks through the steps to configure DNS, obtain SSL certificates, and set up HTTPS.</p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">Understanding the Stack</h3>
        <ul className="list-disc list-outside ml-6 space-y-1">
            <li><strong>DNS:</strong> Translates domain names to IP addresses</li>
            <li><strong>SSL/TLS:</strong> Encrypts data transmission</li>
            <li><strong>HTTPS:</strong> Secure HTTP protocol</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">1. DNS Records Setup</h3>
        <p>Configure these records at your registrar (GoDaddy, Namecheap, Route53):</p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           Type: A<br/>
           Name: @<br/>
           Value: your-ec2-public-ip<br/><br/>
           Type: CNAME<br/>
           Name: www<br/>
           Value: yourdomain.com
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">2. Installing Certbot</h3>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           sudo apt update<br/>
           sudo apt install certbot python3-certbot-nginx -y
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">3. Obtaining SSL Certificates</h3>
        <p>Certbot can automatically configure Nginx for you:</p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
        </div>
        <p className="mt-2 text-sm italic">Follow the prompts to redirect HTTP to HTTPS (recommended).</p>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">4. Automatic Renewal</h3>
        <p>Let's Encrypt certs expire in 90 days. Verify the auto-renewal timer:</p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           sudo systemctl status certbot.timer<br/>
           sudo certbot renew --dry-run
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">5. Security Best Practices</h3>
        <p>Add these headers to your Nginx config for better security:</p>
        <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-lg font-mono text-sm overflow-x-auto border border-slate-200 dark:border-zinc-700">
           add_header X-Frame-Options "SAMEORIGIN" always;<br/>
           add_header X-Content-Type-Options "nosniff" always;<br/>
           add_header X-XSS-Protection "1; mode=block" always;
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-6">
           <p className="font-bold">Verification</p>
           <p>Visit your site at <code>https://yourdomain.com</code> and check for the padlock icon!</p>
        </div>
      </div>
    )
  },
  {
    id: "international-internships",
    slug: "international-internship-opportunities",
    title: "International Internship Opportunities",
    desc: "Comprehensive list of international internship and scholarship opportunities for students in STEM fields across the globe.",
    date: "Feb 28, 2024",
    readTime: "8 min read",
    tags: ["Career", "Internships", "Scholarships"],
    content: (
      <div className="space-y-6">
         <p>Finding international research internships can be a game-changer for your career. This curated list covers some of the most prestigious opportunities available for students.</p>
         
         <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">Top Programs</h3>
         <ul className="list-disc list-outside ml-6 space-y-2">
            <li><strong>MITACS Globalink (Canada):</strong> A 12-week research internship for undergrads. Covers travel and accommodation.</li>
            <li><strong>DAAD WISE (Germany):</strong> For Indian students pursuing engineering/science. Provides monthly stipend.</li>
            <li><strong>EPFL Summer Internship (Switzerland):</strong> Highly competitive, offers exposure to world-class labs.</li>
            <li><strong>CERN Summer Student Program:</strong> Work at the forefront of particle physics in Geneva.</li>
         </ul>

         <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6">Application Tips</h3>
         <p>1. <strong>Start Early:</strong> Most deadlines are 6-9 months before the summer.</p>
         <p>2. <strong>Cold Emailing:</strong> Don't underestimate the power of a well-written email to a professor whose work you admire.</p>
         <p>3. <strong>CV/Resume:</strong> Tailor your CV to highlight research potential, not just grades.</p>
      </div>
    )
  }
];

// --- Data: Happenings (Achievements & Extra Curricular) ---
const happenings = [
  {
    title: "Ram Shriram Scholarship",
    org: "Ram Shriram Foundation, USA",
    date: "2024",
    icon: Trophy,
    color: "text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20",
    desc: "Awarded the prestigious Ram Shriram Scholarship for academic excellence."
  },
  {
    title: "RCAT Scholarship",
    org: "Govt of Rajasthan",
    date: "2023",
    icon: Award,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20",
    desc: "Awarded by Rajasthan Center for Advanced Technology, DOITC."
  },
  {
    title: "TATA Capital Scholarship",
    org: "TATA Capital",
    date: "2023",
    icon: Star,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-900/20",
    desc: "Recipient of the prestigious TATA Capital Scholarship."
  },
  {
    title: "BITS Pilani Hackathon Winner",
    org: "KHOJ Startup Yatra",
    date: "2022",
    icon: Trophy,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-900/20",
    desc: "Secured First Place at the KHOJ Startup Yatra hackathon."
  },
  {
    title: "Paper Presentation",
    org: "Rajasthan DigiFest",
    date: "2022",
    icon: BookOpen,
    color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20",
    desc: "Presented a research paper on Big Data Analytics."
  },
  {
    title: "L&T Merit Scholarship",
    org: "Larsen & Toubro",
    date: "2021",
    icon: Award,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-900/20",
    desc: "Recipient of the prestigious L&T Merit Scholarship."
  },
  {
    title: "Head of WebOps Team",
    org: "Sundarbans House, IITM",
    date: "2023-24",
    icon: Users,
    color: "text-green-500 bg-green-50 dark:bg-green-900/20",
    desc: "Led the technical WebOps team and served as Group Leader in the House Council."
  },
  {
    title: "Event Volunteer",
    org: "PanIIT Alumni & Paradox",
    date: "2021-24",
    icon: Heart,
    color: "text-red-500 bg-red-50 dark:bg-red-900/20",
    desc: "Volunteered for PIWOT (PanIIT Alumni India) and 50 Ka Funda (Paradox-IIT Madras)."
  }
];

// --- Data: Certifications ---
const certifications = [
  // 2025
  { name: "AWS Academy Graduate - Cloud Foundations", org: "AWS", date: "Sep 2025", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Intro to Model Context Protocol", org: "Anthropic", date: "Sep 2025", logo: "https://logo.clearbit.com/anthropic.com" },
  { name: "Deploying AWS App with Docker", org: "LinkedIn", date: "Jun 2025", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Getting Started with Deep Learning", org: "NVIDIA", date: "Jun 2025", logo: "https://logo.clearbit.com/nvidia.com" },
  { name: "AI Agents Fundamentals", org: "Hugging Face", date: "Feb 2025", logo: "https://logo.clearbit.com/huggingface.co" },
  { name: "ML Techniques using Numpy", org: "IIT Madras", date: "Jan 2025", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
  
  // 2024
  { name: "Deep Learning with PyTorch", org: "Coursera", date: "Nov 2024", logo: "https://logo.clearbit.com/coursera.org" },
  { name: "Google Cloud Computing Foundations", org: "NPTEL", date: "Nov 2024", logo: "https://ui-avatars.com/api/?name=NPTEL&background=f59e0b&color=fff" },
  { name: "Developing DL Models (PyTorch)", org: "IIT Madras", date: "Oct 2024", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
  { name: "Large Language Models", org: "IIT Madras", date: "Sep 2024", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
  { name: "SQL (Basic)", org: "HackerRank", date: "Jan 2024", logo: "https://logo.clearbit.com/hackerrank.com" },
  
  // 2023
  { name: "Diploma in Data Science", org: "IIT Madras", date: "Dec 2023", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
  { name: "Diploma in Programming", org: "IIT Madras", date: "Oct 2023", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
  { name: "Beta Testing Youthhub", org: "UNICEF (YuWaah)", date: "Aug 2023", logo: "https://logo.clearbit.com/unicef.org" },
  { name: "Azure Fundamentals (AZ900)", org: "Microsoft", date: "May 2023", logo: "https://logo.clearbit.com/microsoft.com" },
  { name: "UPSHIFT Social Innovation", org: "iStart Rajasthan", date: "Mar 2023", logo: "https://ui-avatars.com/api/?name=iStart&background=orange&color=fff" },
  { name: "R-CAT Quizathon", org: "R-CAT", date: "Feb 2023", logo: "https://ui-avatars.com/api/?name=R-CAT&background=blue&color=fff" },
  
  // 2022
  { name: "Hackathon Participation", org: "iNeuron.ai", date: "Sep 2022", logo: "https://ui-avatars.com/api/?name=iNeuron&background=000&color=fff" },
  { name: "Rajasthan Digifest Paper Presentation", org: "Govt of Rajasthan", date: "Aug 2022", logo: "https://ui-avatars.com/api/?name=Gov+Raj&background=ff9933&color=fff" },
  { name: "Remote Sensing Data Classification", org: "ISRO (IIRS)", date: "Jul 2022", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Indian_Space_Research_Organisation_Logo.svg" },
  { name: "First Web App with Flask", org: "Coursera", date: "Apr 2022", logo: "https://logo.clearbit.com/coursera.org" },
  { name: "Volunteer at Shaastra", org: "IIT Madras", date: "2022", logo: "https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" },
  
  // Older / Misc
  { name: "Project Management Foundations", org: "LinkedIn", date: "Oct 2021", logo: "https://logo.clearbit.com/linkedin.com" },
  { name: "Internship Certificate", org: "PanIIT Alumni", date: "Sep 2021", logo: "https://ui-avatars.com/api/?name=Pan+IIT&background=ef4444&color=fff" },
  { name: "Intermediate Python", org: "DataCamp", date: "Jul 2021", logo: "https://logo.clearbit.com/datacamp.com" },
  { name: "Intro to SQL", org: "DataCamp", date: "Jul 2021", logo: "https://logo.clearbit.com/datacamp.com" },
  { name: "Python Data Science Toolbox", org: "DataCamp", date: "Jul 2021", logo: "https://logo.clearbit.com/datacamp.com" },
  { name: "Understanding Data Science", org: "DataCamp", date: "Jul 2021", logo: "https://logo.clearbit.com/datacamp.com" },
  { name: "Intro to Statistics", org: "Cognitive Class", date: "Jun 2021", logo: "https://ui-avatars.com/api/?name=Cognitive&background=blue&color=fff" },
  { name: "Intro to Python", org: "DataCamp", date: "May 2021", logo: "https://logo.clearbit.com/datacamp.com" },
  { name: "Python for Beginners", org: "Great Learning", date: "Apr 2021", logo: "https://logo.clearbit.com/mygreatlearning.com" },
  { name: "Intro to AWS EC2", org: "AWS", date: "Sep 2020", logo: "https://logo.clearbit.com/aws.amazon.com" },
  { name: "Energy Literacy", org: "Energy Swaraj", date: "Sep 2020", logo: "https://ui-avatars.com/api/?name=Energy&background=green&color=fff" },
  { name: "Fundamentals of Digital Marketing", org: "Google", date: "Jul 2020", logo: "https://logo.clearbit.com/google.com" },
  
  // IBM / Cognitive Class Bundle (2020)
  { name: "Intro to Data Science", org: "IBM", date: "2020", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Data Science Methodology", org: "IBM", date: "2020", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Python for Data Science", org: "IBM", date: "2020", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Data Analysis with Python", org: "IBM", date: "2020", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Data Visualization with Python", org: "IBM", date: "2020", logo: "https://logo.clearbit.com/ibm.com" },
  { name: "Machine Learning with Python", org: "IBM", date: "2020", logo: "https://logo.clearbit.com/ibm.com" },

  // Early Education/School
  { name: "Excel Skills for Business", org: "Macquarie Univ", date: "2021", logo: "https://logo.clearbit.com/mq.edu.au" },
  { name: "Computer Literacy", org: "Kota", date: "Sep 2017", logo: "https://ui-avatars.com/api/?name=Kota&background=gray&color=fff" },
  { name: "State Talent Search Excellence", org: "CLC Sikar", date: "Jun 2017", logo: "https://ui-avatars.com/api/?name=CLC&background=red&color=fff" },
  { name: "BTSE Topper Award", org: "Bansal Institute", date: "May 2017", logo: "https://ui-avatars.com/api/?name=Bansal&background=blue&color=fff" },
  { name: "Microsoft Office Specialist", org: "Microsoft", date: "2017", logo: "https://logo.clearbit.com/microsoft.com" }
];


// --- UI Components ---

const Badge = ({ children, color = "slate" }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    green: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    purple: "bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    orange: "bg-orange-50 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 border-orange-200 dark:border-orange-800",
    slate: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700",
  };
  
  const selectedColor = colorClasses[color] || colorClasses.slate;

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${selectedColor} transition-colors`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-3xl border border-slate-200 dark:border-zinc-800 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
    {children}
  </div>
);

const SectionHeader = ({ icon: Icon, title, count }) => (
  <div className="flex items-center gap-3 mb-6">
    <div className="w-10 h-10 rounded-xl bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
      <Icon size={20} />
    </div>
    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
    {count && <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded-full">{count}</span>}
  </div>
);

// --- Missing Components Added Here ---

const ExperienceCard = ({ exp }) => (
  <div className="relative pl-8 md:pl-0 group">
    {/* Timeline line for mobile - hidden on md, handled by grid layout */}
    <div className="absolute left-3 top-3 bottom-0 w-px bg-slate-200 dark:bg-zinc-800 md:hidden"></div>
    
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
      {/* Logo */}
      <div className="shrink-0 z-10 relative">
        <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-1 overflow-hidden shadow-sm">
          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain rounded-lg" onError={(e) => {e.target.style.display='none'; e.target.parentElement.classList.add('bg-blue-50', 'text-blue-600', 'font-bold', 'flex', 'items-center', 'justify-center'); e.target.parentElement.innerText = exp.company[0]}} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 w-full">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
           <div>
             <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
             <div className="font-medium text-slate-700 dark:text-slate-300">{exp.company}</div>
           </div>
           <div className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded self-start sm:self-center whitespace-nowrap">
             {exp.duration}
           </div>
        </div>
        
        <div className="flex flex-wrap gap-y-1 gap-x-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <span className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</span>
          <span className="flex items-center gap-1"><Briefcase size={12} /> {exp.type}</span>
        </div>

        <ul className="space-y-1 mb-4 list-disc list-outside ml-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {exp.desc.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.skills.map(skill => (
             <span key={skill} className="text-[10px] px-2 py-0.5 rounded border border-slate-200 dark:border-zinc-700 text-slate-500 dark:text-slate-400">
               {skill}
             </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const EducationCard = () => {
  return (
    <Card className="w-full overflow-hidden relative">
       {/* Decorative background gradient for the card */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start gap-6 mb-10">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white dark:bg-white/90 shadow-sm border border-slate-100 flex items-center justify-center shrink-0 p-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" 
              alt="IIT Madras Logo" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="pt-1">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              Indian Institute of Technology, Madras
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
               <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                 BS in Data Science & Applications
               </span>
               <span className="text-sm text-slate-400">•</span>
               <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Jan 2021 - May 2025</span>
            </div>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative pl-2 mb-10">
          <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-zinc-800"></div>

          {/* Item 1: BS Degree */}
          <div className="relative pl-10 group">
            {/* <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-50 dark:bg-zinc-900 border-4 border-teal-500 z-10 group-hover:scale-110 transition-transform"></div> */}
            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">Bachelor's Degree</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">
              2021 - 2025
            </p>
          </div>

          {/* Item 2: Diploma DS */}
          {/* <div className="relative pl-10 group">
            <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-50 dark:bg-zinc-900 border-4 border-blue-500 z-10 group-hover:scale-110 transition-transform"></div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Diploma in Data Science</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
              Completed • Focus: ML, Deep Learning, Statistics
            </p>
          </div> */}

          {/* Item 3: Diploma Programming */}
          {/* <div className="relative pl-10 group">
             <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-slate-50 dark:bg-zinc-900 border-4 border-purple-500 z-10 group-hover:scale-110 transition-transform"></div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Diploma in Programming</h4>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
              Completed • Focus: Algorithms, Data Structures, SWE
            </p>
          </div> */}
        </div>

        {/* Focus Areas */}
        <div className="mb-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-2">Academic Focus Areas</p>
          <div className="flex flex-wrap gap-2">
            <Badge color="teal">Databases</Badge>
            <Badge color="blue">Data Structures</Badge>
            <Badge color="purple">Algorithms</Badge>
            <Badge color="emerald">Modern Application Development</Badge>
            <Badge color="cyan">Data Visualization</Badge>
            <Badge color="amber">Big Data</Badge>
            <Badge color="blue">Machine Learning</Badge>
            <Badge color="purple">Deep Learning</Badge>
            <Badge color="green">Generative AI</Badge>
            <Badge color="orange">NLP</Badge>
            <Badge color="slate">Statistics</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

const HappeningCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col gap-3 hover:border-blue-500/30 transition-all group">
       <div className="flex justify-between items-start">
         <div className={`p-2 rounded-lg ${item.color} bg-opacity-20`}>
           <Icon size={18} />
         </div>
         <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded-full">
           {item.date}
         </span>
       </div>
       
       <div>
         <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
           {item.title}
         </h4>
         <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
           {item.org}
         </p>
         <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
           {item.desc}
         </p>
       </div>
    </div>
  );
}

const CertificationCard = ({ cert }) => (
  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800/50 border border-transparent hover:border-slate-100 dark:hover:border-zinc-800 transition-all group">
    <div className="w-10 h-10 shrink-0 rounded-lg bg-white dark:bg-zinc-900 p-1 border border-slate-100 dark:border-zinc-800 flex items-center justify-center">
       <img src={cert.logo} alt={cert.org} className="w-full h-full object-contain rounded-md" onError={(e) => {e.target.style.display='none'; e.target.parentElement.classList.add('bg-blue-50', 'text-blue-600', 'font-bold'); e.target.parentElement.innerText = cert.org[0]}} />
    </div>
    <div className="min-w-0 flex-1">
      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{cert.name}</h4>
      <div className="flex justify-between items-center mt-0.5">
        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{cert.org}</p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 shrink-0">{cert.date}</p>
      </div>
    </div>
  </div>
);

const BlogCard = ({ blog, onClick }) => (
  <div 
    className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all group flex flex-col h-full cursor-pointer"
    onClick={onClick}
  >
     <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
           <FileText size={24} />
        </div>
        <div className="text-xs font-medium text-slate-400 bg-slate-50 dark:bg-zinc-800 px-2 py-1 rounded-lg">
           {blog.readTime}
        </div>
     </div>
     
     <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {blog.title}
     </h3>
     
     <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 flex-1 line-clamp-3">
        {blog.desc}
     </p>
     
     <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 dark:border-zinc-800/50">
        <span className="text-xs font-medium text-slate-400">{blog.date}</span>
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
           Read Article <ChevronRight size={16} />
        </span>
     </div>
  </div>
);

const ProjectCard = ({ title, desc, tags, color }) => (
  <Card className="group hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all cursor-pointer h-full flex flex-col">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Code size={20} />
      </div>
      <ExternalLink className="text-slate-300 group-hover:text-blue-500 transition-colors" size={20} />
    </div>
    
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-1">
      {desc}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded-md">
          {tag}
        </span>
      ))}
    </div>
  </Card>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors group"
  >
    <div className="p-2 rounded-lg bg-slate-50 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 group-hover:bg-white dark:group-hover:bg-zinc-700 group-hover:text-slate-900 dark:group-hover:text-white transition-colors shadow-sm">
      <Icon size={18} />
    </div>
    <span className="font-medium text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">{label}</span>
    <ChevronRight className="ml-auto text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" size={16} />
  </a>
);

// --- Article Page Component ---
const ArticlePage = ({ blog, onBack }) => {
  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
       {/* Article Navbar */}
       <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-slate-200 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
             <button 
               onClick={onBack}
               className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
             >
               <ArrowLeft size={18} />
               Back to Portfolio
             </button>
             <div className="text-sm font-bold text-slate-900 dark:text-white truncate max-w-[200px] hidden sm:block">
               {blog.title}
             </div>
          </div>
       </nav>

       <main className="max-w-3xl mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="mb-10">
             <div className="flex items-center gap-4 mb-6 text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                   Article
                </span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {blog.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
             </div>
             <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                {blog.title}
             </h1>
             <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                {blog.desc}
             </p>
          </header>

          <hr className="my-10 border-slate-200 dark:border-zinc-800" />

          {/* Article Content */}
          <article className="prose dark:prose-invert max-w-none prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-li:text-slate-600 dark:prose-li:text-slate-300 prose-pre:bg-slate-900 dark:prose-pre:bg-zinc-900 prose-pre:text-slate-50 dark:prose-pre:text-slate-300 prose-pre:border prose-pre:border-slate-800 dark:prose-pre:border-zinc-800 prose-pre:rounded-xl">
             {blog.content}
          </article>

          {/* Article Footer */}
          <div className="mt-16 pt-10 border-t border-slate-200 dark:border-zinc-800">
             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Tags</h3>
             <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-400 rounded-lg text-sm font-medium">
                      #{tag}
                   </span>
                ))}
             </div>
          </div>
       </main>
    </div>
  );
};

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true); 
  const [activeSection, setActiveSection] = useState('about');
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null); // State to handle "routing" to blog page

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // If a blog is active, render the Article Page instead of the main portfolio
  if (activeBlog) {
    return (
      <div className={darkMode ? "dark" : ""}>
         <ArticlePage blog={activeBlog} onBack={() => setActiveBlog(null)} />
      </div>
    );
  }

  // Main Portfolio Render
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-zinc-950' : 'bg-slate-50'}`}>
      {/* Dot Grid Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{
        backgroundImage: `radial-gradient(${darkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-20">
        <div className="grid lg:grid-cols-[380px_1fr] gap-8 lg:gap-12">
          
          {/* --- Left Column: Sticky Profile --- */}
          <div className="lg:sticky lg:top-24 h-fit space-y-6">
            <Card className="text-center lg:text-left">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full p-1 bg-gradient-to-br from-blue-500 to-teal-400">
                  <img 
                    src="https://www.ravikumawat.com/Ravi%20Kumawat.png" 
                    alt="Ravi" 
                    className="w-full h-full rounded-full object-cover border-4 border-white dark:border-zinc-900"
                  />
                </div>
                <div className="absolute bottom-2 right-2 lg:right-0 w-8 h-8 bg-green-500 border-4 border-white dark:border-zinc-900 rounded-full flex items-center justify-center shadow-lg" title="Online">
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">Ravi Kumawat</h1>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">(He/Him)</p>
              
              <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 font-semibold mb-2">
                AI/ML Professional & Full-Stack Developer
              </p>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                AI/ML professional with a BS in Data Science and Applications from IIT Madras. Skilled in Machine Learning, Deep Learning, LLMs, Full-Stack Development, and Medical Imaging. Experienced in Generative AI and software engineering through industry roles and research collaborations.
                <br /><br />
                Adept at building production-ready applications, scalable deployments, and applying AI to solve real-world challenges. Currently contributing as a Software Engineer (Founding Engineer, evolvue.ai) at KRISHAI Technologies Pvt Ltd, Bangalore.
              </p>

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                 <div className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded">
                    <MapPin size={12} /> Bengaluru, India
                 </div>
                 <div className="flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-zinc-800 px-2 py-1 rounded">
                    <Users size={12} /> 500+ Connections
                 </div>
              </div>

              {/* <div className="flex gap-4 justify-center lg:justify-start">
                <button className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-zinc-900 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20">
                  Contact Me
                </button>
                <button className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors">
                  <Download size={18} />
                </button>
              </div> */}
            </Card>

            <Card className="p-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 ml-2">Connect</h3>
              <div className="space-y-1">
                <SocialLink href="https://github.com/ravikumawat7716" icon={Github} label="GitHub" />
                <SocialLink href="https://linkedin.com/in/ravikumawat7716" icon={Linkedin} label="LinkedIn" />
                <SocialLink href="mailto:ravikumawat7716@gmail.com" icon={Mail} label="Email" />
              </div>
            </Card>
          </div>

          {/* --- Right Column: Scrollable Content --- */}
          <div className="space-y-12">

            {/* Experience Section */}
            <section id="experience" className="scroll-mt-24">
              <SectionHeader icon={Briefcase} title="Work Experience" />
              <Card>
                 <div className="space-y-10">
                    {experiences.map((exp, index) => (
                      <React.Fragment key={index}>
                        <ExperienceCard exp={exp} />
                        {index !== experiences.length - 1 && <hr className="border-slate-100 dark:border-zinc-800" />}
                      </React.Fragment>
                    ))}
                 </div>
              </Card>
            </section>
            
            {/* Education Section */}
            <section id="education" className="scroll-mt-24">
              <SectionHeader icon={Terminal} title="Education" />
              <EducationCard />
            </section>

            {/* Happenings Section (Achievements) */}
            <section id="happenings" className="scroll-mt-24">
               <SectionHeader icon={Trophy} title="Happenings" />
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {happenings.map((item, i) => (
                    <HappeningCard key={i} item={item} />
                  ))}
               </div>
            </section>

            {/* Blogs Section - Simulating Navigation to /article/slug */}
            <section id="blogs" className="scroll-mt-24">
               <SectionHeader icon={FileText} title="Technical Writing" />
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {blogs.map((blog) => (
                    <BlogCard 
                      key={blog.id} 
                      blog={blog} 
                      onClick={() => setActiveBlog(blog)} // Navigates to ArticlePage view
                    />
                  ))}
               </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="scroll-mt-24">
               <SectionHeader icon={Award} title="Licenses & Certifications" count={certifications.length} />
               <Card className="!p-4 md:!p-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {(showAllCerts ? certifications : certifications.slice(0, 8)).map((cert, i) => (
                       <CertificationCard key={i} cert={cert} />
                    ))}
                 </div>
                 <button 
                   onClick={() => setShowAllCerts(!showAllCerts)}
                   className="w-full mt-6 py-3 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-xl transition-all flex items-center justify-center gap-2"
                 >
                   {showAllCerts ? 'Show Less' : `Show All ${certifications.length} Certifications`}
                   <ChevronRight size={16} className={`transition-transform ${showAllCerts ? '-rotate-90' : 'rotate-90'}`} />
                 </button>
               </Card>
            </section>

            {/* Tech Stack */}
            <section id="stack">
               <SectionHeader icon={Database} title="Tech Stack" />
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Python', 'TensorFlow', 'Next.js', 'SQL', 'Tableau', 'Docker', 'FastAPI', 'Tailwind'].map((skill, i) => (
                    <div key={skill} className="bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 p-4 rounded-2xl flex items-center gap-3 hover:border-blue-500/50 transition-colors group">
                       <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-teal-500'} group-hover:scale-150 transition-transform`}></div>
                       <span className="font-medium text-slate-700 dark:text-slate-200">{skill}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <SectionHeader icon={Code} title="Selected Work" />
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                   <div key={i} className={i === 2 || i === 3 ? "" : "md:col-span-1"}>
                      <ProjectCard {...project} />
                   </div>
                ))}
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 pb-6 text-center lg:text-left">
              <p className="text-slate-500 dark:text-slate-500 text-sm">
                © {new Date().getFullYear()} Ravi Kumawat. 
              </p>
            </footer>

          </div>
        </div>
      </div>

      {/* Floating Navbar Pill */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[90vw] overflow-x-auto">
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200 dark:border-zinc-700 shadow-xl shadow-black/5">
          {['experience', 'education', 'happenings', 'blogs', 'projects'].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveSection(item);
                document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                activeSection === item 
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-zinc-900 shadow-md' 
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
          <div className="w-px h-4 bg-slate-200 dark:bg-zinc-700 mx-1"></div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-600 dark:text-slate-400 transition-colors"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

    </div>
  );
}