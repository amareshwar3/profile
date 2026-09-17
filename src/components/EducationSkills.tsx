import React from 'react';
import '../assets/styles/EducationSkills.scss';

function EducationSkills() {
  return (
    <div className="container" id="education-skills">
      <div className="education-skills-container">
        <h1>Education and Skills</h1>

        <div className="education-grid">
          <div className="education-card">
            <h3>Indian Institute of Information Technology Allahabad</h3>
            <p className="edu-meta">India | Nov 2022 - Jun 2026</p>
            <p>Bachelor of Technology, Information Technology</p>
            <p>CGPA: 8.18</p>
          </div>

          <div className="education-card">
            <h3>Narayana Junior College, Hyderabad</h3>
            <p className="edu-meta">India | 2020 - 2022</p>
            <p>Class XII Percentage: 97%</p>
          </div>
        </div>

        <div className="skills-block">
          <h2>Technical Skills</h2>

          <p>
            <span className="label">Languages:</span> C/C++, Java, Go, Python, JavaScript,
            TypeScript, SQL
          </p>

          <p>
            <span className="label">Backend &amp; APIs:</span> FastAPI, Kafka, Node.js, Express.js,
            REST APIs, Apache Spark, Apache Livy, WebSockets
          </p>

          <p>
            <span className="label">Frontend:</span> React.js, Next.js, Tailwind CSS, Socket.IO
          </p>

          <p>
            <span className="label">AI/ML:</span> RAG, LLM, Embeddings, LangChain, FAISS, ChromaDB,
            Hugging Face, NLP
          </p>

          <p>
            <span className="label">Databases &amp; ORMs:</span> PostgreSQL, MongoDB, MySQL, SQLAlchemy,
            Alembic
          </p>

          <p>
            <span className="label">Dev Tools:</span> Git, GitHub, Docker, Linux, AWS, Postman,
            GitHub Copilot, Pydantic
          </p>
        </div>
      </div>
    </div>
  );
}

export default EducationSkills;