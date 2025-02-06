import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import unifiedvision from "../../Assets/Experience/unifiedvision.png";
import careem from "../../Assets/Experience/careem.png";
import thorgate from "../../Assets/Experience/thorgate.png";
import tune from "../../Assets/Experience/tune.png";
import goodcore from "../../Assets/Experience/goodcore.png";
import 'react-vertical-timeline-component/style.min.css';

const experienceData = [
  {
    company: "Unified Vision",
    role: "Software Engineer II",
    duration: "Sept 2023 - Present",
    icon: unifiedvision,
    descriptionItems: [
        "<span class=\"purple\">Transformed backend architecture into multi-tenant SaaS platform</span>, empowering Board-Certified Behavior Analysts (BCBAs) to independently manage their businesses on it.",
        "<span class=\"purple\">Developed and integrated hierarchical role-based permission system</span>, enabling members to join groups with parent and multiple subgroup structures for enhanced organizational management.",
        "<span class=\"purple\">Created in-house framework</span> supporting chaining of actions and events for efficient event-driven code architecture.",
        "<span class=\"purple\">Improved CI/CD processes</span>, using Terraform to automate infrastructure provisioning and eliminating manual efforts."
    ]
  },
  {
    company: "Careem (Uber Inc.)",
    role: "Senior Software Engineer I",
    duration: "Dec 2022 - Sept 2023",
    icon: careem,
    descriptionItems: [
        "<span class=\"purple\">Migrated and modularized core applications</span> into independent microservices, utilizing REST APIs for communication.",
        "<span class=\"purple\">Enhanced and refactored existing microservices codebase</span>, increasing test coverage to over 90%.",
        "<span class=\"purple\">Spearheaded backend implementation</span> for new school packages features MVP, specifically for schools in Dubai.",
        "<span class=\"purple\">Strengthened system reliability</span> by improving server resource monitoring and logging for API failures.",
        "<span class=\"purple\">Elevated security standards</span> by introducing \"Golden\" AWS images, pre-configured with security patches and tools."
    ]
  },
  {
    company: "Thorgate",
    role: "Full Stack Developer",
    duration: "Dec 2022 - Mar 2023",
    icon: thorgate,
    descriptionItems: [
        "<span class=\"purple\">Led development of ODI Medical</span> (health tech application), utilizing ML algorithms to detect capillaries in skin images.",
        "<span class=\"purple\">Migrated ODI Medical</span> to microservice architecture, isolating web portals from ML algorithms to enhance system flexibility and scalability.",
        "<span class=\"purple\">Designed CMS alternative</span> to replace static Thorgate website, improving content management and user experience.",
        "<span class=\"purple\">Integrated Eziil's REST API</span> to develop industrial orders web portal for seamless synchronization with internal database."
    ]
  },
  {
    company: "TUNE",
    role: "Senior Software Engineer",
    duration: "May 2021 - Dec 2023",
    icon: tune,
    descriptionItems: [
        "<span class=\"purple\">Developed and optimized internal admin portal</span> to enhance employee management of client accounts.",
        "<span class=\"purple\">Improved lead generation</span> through integration of Marketo forms with Salesforce on TUNE WordPress website.",
        "<span class=\"purple\">Automated affiliate invoice payouts</span> by implementing Apex triggers in Salesforce to streamline financial processes.",
        "<span class=\"purple\">Enhanced accurate performance monitoring</span>, using page load time metrics from PerformanceTiming API."
    ]
  },
  {
    company: "GoodCore Software",
    role: "Software Engineer",
    duration: "Jun 2019 - May 2021",
    icon: goodcore,
    descriptionItems: [
        "<span class=\"purple\">Transitioned conferencing tool’s APIs from V2 to V3</span>, maintaining compatibility for existing legacy users.",
        "<span class=\"purple\">Boosted application performance</span> by identifying and mitigating bottlenecks and reducing unnecessary re-renders.",
        "<span class=\"purple\">Proactively salvaged COVID-19 disruption</span> by integrating video conferencing solutions into BriefingSource.",
        "<span class=\"purple\">Fixed critical permission issues for IBM’s server logs</span> by configuring user groups and accessing their server via VPN."
    ]
  },
];

const Experience = () => {
  return (
    <VerticalTimeline className="chronology">
        {experienceData.map( row => (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'transparent', opacity: '0.9' }}
                contentArrowStyle={{ visibility: 'hidden' }}
                date={row.duration}
                icon={<img src={row.icon} style={{ width: '100%', height: '100%', borderRadius: '50%' }}/>}
            >
                <h3 className="vertical-timeline-element-title">{row.role}</h3>
                <h2 className="vertical-timeline-element-subtitle" style={{color: "grey"}}>{row.company}</h2>
                {row.descriptionItems.map( item => (
                    <p dangerouslySetInnerHTML={{ __html: item }}></p>
                ))}
            </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
};

export default Experience;