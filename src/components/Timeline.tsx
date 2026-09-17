import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2026 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Management Trainee (Contract)</h3>
            <h4 className="vertical-timeline-element-subtitle">HSBC</h4>
            <ul className="experience-list">
              <li>Enhanced an enterprise Job Scheduler platform using FastAPI, React.js, and SQLAlchemy, optimizing request handling, API latency, and workflow execution across scheduling, orchestration, and monitoring layers.</li>
              <li>Improved asynchronous processing, dependency handling, and UI-to-backend interactions for efficient job execution and responsive real-time monitoring across distributed pipelines.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2026 – Jul 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">HSBC</h4>
            <ul className="experience-list">
              <li>Built an end-to-end Job Scheduler platform from scratch using FastAPI, SQLAlchemy ORM, and Alembic migrations, exposing authenticated RESTful CRUD APIs with Pydantic schema validation.</li>
              <li>Engineered a hybrid scheduling engine combining Cron-based, FCFS, and Priority Queue strategies with dynamic dependency resolution for fault-tolerant parallel workflow orchestration.</li>
              <li>Integrated Apache Livy and Apache Spark for distributed job submission and execution, with real-time log streaming, execution telemetry, and failure recovery across multi-project pipelines.</li>
              <li>Pioneered an internal AI-powered RAG chatbot using ChromaDB vector search and LLM prompt engineering over proprietary financial datasets.</li>
              <li>Developed a React, TypeScript, and Next.js analytics dashboard with Recharts for real-time KPI metrics, bar and time-series charts, and drill-down reports.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 – Jul 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bharat RobotiX</h4>
            <p>
              Developed and optimized RESTful APIs with Node.js/Express/MongoDB. Automated API testing and validation, improving reliability and performance.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2025 – Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Head, Corporate Relations</h3>
            <h4 className="vertical-timeline-element-subtitle">Aparoksha IIIT Allahabad</h4>
            <p>
              Led corporate partnerships and managed outreach for national tech fest, driving sponsorships and industry engagement.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;