# Domain 3: Healthcare Information and Systems Management (30%)

---

## Exam-Style Focus

This is the highest-weight domain. Expect scenario questions across the full lifecycle: needs analysis, design, vendor selection, implementation, testing, support, benefits realization, data governance, and privacy/security. When a stem asks for the FIRST, NEXT, or BEST action, anchor your answer to the lifecycle phase and choose the action that preserves scope, safety, compliance, and stakeholder alignment.

---

## A. Analysis

---

### Task 3.A.1 — Systems Development Life Cycle (SDLC)

**Apply appropriate concepts of systems development (e.g., systems development life cycle or SDLC)**

#### Concept Summary

**SDLC Phases:**

| Phase | Key Activities |
|---|---|
| **1. Planning / Initiation** | Define project scope, feasibility study, resource assessment |
| **2. Analysis / Requirements** | Gather and document user requirements, current-state analysis |
| **3. Design** | System architecture, workflow design, interface specifications |
| **4. Development / Build** | Configuration, coding, system build |
| **5. Testing** | Unit, integration, system, UAT testing |
| **6. Implementation / Go-live** | Training, data migration, cutover |
| **7. Maintenance / Optimization** | Post-live support, upgrades, optimization |

**SDLC Models:**
- **Waterfall** → sequential phases; each must complete before the next begins; clear deliverables
- **Agile** → iterative sprints; frequent releases; continuous feedback; flexible scope
- **Spiral** → risk-driven iterations; good for complex, uncertain projects
- **Rapid Prototyping (RAD)** → fast prototype development for early user feedback

**Key SDLC Outputs by Phase:**
- Analysis → functional requirements document, current-state process maps
- Design → technical specifications, interface designs, training plan outline
- Testing → test plans, defect logs, UAT sign-off
- Implementation → go-live checklist, cutover plan, rollback plan

#### Practice Questions

> **[RE] Q1**: During which SDLC phase would an organization gather and document end-user requirements for a new clinical system?
> - A) Design
> - B) Testing
> - C) Analysis / Requirements **[CORRECT]**
> - D) Maintenance
> *Maps to: Task 3.A.1 (SDLC)*

> **[AP] Q2**: A hospital is implementing a new EHR using an Agile methodology. Compared to Waterfall, the MOST significant advantage of Agile in this context is:
> - A) Complete system design is finalized before any build work begins
> - B) Users receive working increments and can provide feedback throughout the project **[CORRECT]**
> - C) All testing is consolidated into a single phase at the end
> - D) The scope is locked at the start of the project
> *Maps to: Task 3.A.1*

---

### Task 3.A.2 — Project Management Methodology

**Apply and utilize project management methodology components (e.g., needs analysis, gap analysis, defining and prioritizing requirements)**

#### Concept Summary

**PM Methodology Components:**

| Component | Description |
|---|---|
| **Needs analysis** | Identify the organization's actual problem or unmet need before proposing solutions |
| **Gap analysis** | Compare current state (what is) to desired future state (what should be); document the gap |
| **Requirements gathering** | Document functional and non-functional system requirements |
| **Requirements prioritization** | Rank requirements by criticality (must-have vs. nice-to-have); MoSCoW method |
| **Project charter** | Formal document authorizing a project; defines scope, objectives, sponsor |
| **Work Breakdown Structure (WBS)** | Hierarchical decomposition of all project work |
| **Project plan / schedule** | Timeline with milestones, dependencies, resource assignments |
| **RACI matrix** | Responsible, Accountable, Consulted, Informed — clarifies roles |
| **Risk register** | Log of identified risks, likelihood, impact, and mitigation strategies |
| **Change control** | Formal process to evaluate and approve scope changes |

**PM Knowledge Areas (PMBOK):**
Scope · Schedule · Cost · Quality · Resource · Communication · Risk · Procurement · Stakeholder Integration

**MoSCoW Prioritization:**
- **M**ust have → required for go-live
- **S**hould have → important but not critical for initial launch
- **C**ould have → desirable if time/budget permits
- **W**on't have (this time) → explicitly deferred

#### Practice Questions

> **[AP] Q3**: A hospital informatics team is beginning the planning phase for a new patient portal. They compare their current capabilities against the desired future-state functionality to identify missing features and process deficiencies. This activity is BEST described as:
> - A) Risk assessment
> - B) Gap analysis **[CORRECT]**
> - C) Stakeholder analysis
> - D) Requirements testing
> *Maps to: Task 3.A.2 (PM — gap analysis)*

> **[AP] Q4**: During requirements gathering, the project team identifies 40 feature requests for a new scheduling system. To determine which features are critical for go-live, the team should use:
> - A) A RACI matrix
> - B) A risk register
> - C) MoSCoW prioritization **[CORRECT]**
> - D) A work breakdown structure
> *Maps to: Task 3.A.2*

---

### Task 3.A.3 — Process Improvement Concepts

**Apply appropriate concepts of process improvement (e.g., DMAIC, PDCA)**

#### Concept Summary

**DMAIC (Six Sigma framework):**

| Phase | Focus |
|---|---|
| **D — Define** | Define the problem, scope, and goals; identify stakeholders |
| **M — Measure** | Collect baseline data; quantify the current problem |
| **A — Analyze** | Identify root cause(s) of the problem using data |
| **I — Improve** | Design and test solutions to address root causes |
| **C — Control** | Implement controls to sustain improvements; monitor performance |

**PDCA / PDSA (Plan-Do-Check/Study-Act):**

| Phase | Focus |
|---|---|
| **P — Plan** | Identify opportunity, set objectives, develop the change |
| **D — Do** | Implement the change on a small scale (pilot) |
| **C — Check / S — Study** | Evaluate results against objectives |
| **A — Act** | Standardize successful changes; cycle again if needed |

**DMAIC vs. PDCA:**

| Aspect | DMAIC | PDCA |
|---|---|---|
| Origin | Six Sigma | Quality improvement (Deming) |
| Data focus | Heavily data-driven, statistical | Structured but lighter statistics |
| Best for | Eliminating defects, reducing variation | Iterative improvement cycles |

**Other Process Improvement Tools:**
- **Lean** → eliminate waste (muda); focuses on value-added vs. non-value-added steps
- **5 Whys** → repeatedly ask "why?" to reach root cause
- **Fishbone / Ishikawa diagram** → visualize root causes by category (Man, Machine, Method, Material, Measurement, Environment)
- **Value stream mapping** → visualize entire workflow to find waste

#### Practice Questions

> **[RE] Q5**: A hospital quality team is using a structured problem-solving methodology. They first Define the problem, then Measure baseline performance, then Analyze root causes. This methodology is:
> - A) PDCA
> - B) Lean
> - C) DMAIC **[CORRECT]**
> - D) Agile
> *Maps to: Task 3.A.3 (Process improvement — DMAIC)*

> **[AP] Q6**: A nursing unit wants to test a new hand-off communication process before rolling it out hospital-wide. Using PDCA, the correct first step after developing the change is to:
> - A) Analyze current-state hand-off data
> - B) Implement the new process on a single unit as a pilot **[CORRECT]**
> - C) Control performance by updating policy documents
> - D) Standardize the process across all units
> *Maps to: Task 3.A.3*

---

### Task 3.A.4 — Visualization Tools for Process Analysis

**Utilize standard visualization tools to analyze and improve current business and clinical processes (e.g., process mapping, flow diagramming, gap analysis)**

#### Concept Summary

| Tool | Purpose |
|---|---|
| **Process map / Flowchart** | Visualize sequential steps in a workflow; identify decision points and handoffs |
| **Swim lane diagram** | Multi-party process map showing which role performs each step; surfaces handoff gaps |
| **Value stream map** | End-to-end workflow map highlighting value-added vs. non-value-added steps (Lean) |
| **SIPOC diagram** | Supplier-Input-Process-Output-Customer; high-level process scoping tool |
| **Gap analysis matrix** | Current state vs. desired state comparison, organized by category |
| **Cause-and-effect (Fishbone) diagram** | Root cause visualization organized by categories |
| **Affinity diagram** | Groups large volumes of ideas / data into logical categories |

**When to use each:**
- Before system design → swim lane diagram to see current workflow handoffs
- Root cause analysis → fishbone diagram
- Lean improvement → value stream mapping
- Scoping a new project → SIPOC
- Comparing as-is to to-be → gap analysis matrix

#### Practice Questions

> **[AP] Q7**: A process improvement team is mapping the medication ordering workflow and wants to visualize which role (physician, pharmacist, nurse) is responsible for each step and where handoffs occur. The MOST appropriate tool is:
> - A) Fishbone diagram
> - B) Run chart
> - C) Swim lane diagram **[CORRECT]**
> - D) Affinity diagram
> *Maps to: Task 3.A.4 (Process visualization tools)*

---

### Tasks 3.A.5 through 3.A.10 — Analysis, Strategic Alignment, and Business Documentation

**Interpret and analyze disparate data sets · Formulate alternate processes and solutions · Evaluate strategic alignment · Perform cost-benefit analysis · Develop proposals · Analyze business documentation (RFPs, RFIs, SLAs, SOWs, NDAs)**

#### Concept Summary

**Analyzing Disparate Data Sets:**
- Identify data sources, formats, and quality issues before analysis
- Data normalization → standardize formats for comparison
- Master data management → ensure consistent data definitions across systems
- Data governance → policies on data ownership, quality, and definitions

**Business Documentation Glossary:**

| Document | Purpose |
|---|---|
| **RFI (Request for Information)** | Early-stage inquiry to gather vendor capabilities; no commitment |
| **RFP (Request for Proposal)** | Formal solicitation for a detailed vendor proposal, pricing, and approach |
| **RFQ (Request for Quote)** | Solicits specific pricing for defined goods/services |
| **SLA (Service Level Agreement)** | Contractual commitment to specific performance standards (uptime, response time) |
| **SOW (Statement of Work)** | Defines the scope, deliverables, timeline, and payment terms for a specific engagement |
| **NDA (Non-Disclosure Agreement)** | Protects confidential information shared between parties |
| **Master Services Agreement (MSA)** | Overarching contract framework; specific work governed by individual SOWs |

**Cost-Benefit Analysis:**
- Quantify all costs: implementation, licensing, training, maintenance, downtime
- Quantify all benefits: efficiency gains, error reduction, revenue impact, avoided costs
- **ROI formula**: (Net Benefit ÷ Total Cost) × 100
- **Payback period**: time to recoup the initial investment
- **NPV (Net Present Value)**: present value of future benefits minus costs
- Consider both tangible (measurable) and intangible (morale, patient satisfaction) benefits

**Strategic Alignment:**
- Proposed solutions should align with the organization's mission, vision, and strategic plan
- Evaluate against capital budget priorities and operational goals
- Use a scoring matrix (criteria weighting) to objectively compare solutions

**Developing Proposals:**
- Executive summary → problem statement → proposed solution → benefits and ROI → implementation timeline → resource requirements → risks and mitigations

#### Practice Questions

> **[RE] Q8**: An organization sends a document to multiple EHR vendors requesting detailed proposals, implementation approaches, and pricing information. This document is BEST described as:
> - A) Request for Information (RFI)
> - B) Statement of Work (SOW)
> - C) Request for Proposal (RFP) **[CORRECT]**
> - D) Non-Disclosure Agreement (NDA)
> *Maps to: Task 3.A.10 (Business documentation)*

> **[AP] Q9**: A hospital is evaluating two patient scheduling systems. System A costs $500K with projected efficiency savings of $1.2M over 3 years. System B costs $300K with projected savings of $600K over 3 years. The MOST rigorous financial measure for comparing both systems is:
> - A) Total implementation cost
> - B) Projected cost savings only
> - C) Return on investment (ROI) for each system **[CORRECT]**
> - D) Number of features offered
> *Maps to: Task 3.A.8 (Cost-benefit analysis)*

> **[AN] Q10**: An IT team has developed a proposal for a new revenue cycle system that would save $2M annually. The CFO asks whether the project aligns with the current 3-year strategic plan. The informatics director should:
> - A) Present only the financial ROI data
> - B) Evaluate the proposal against the organization's strategic goals and capital priorities **[CORRECT]**
> - C) Proceed with implementation since the ROI is positive
> - D) Issue an RFI to confirm vendor capability before evaluating strategic fit
> *Maps to: Task 3.A.7 (Strategic alignment)*

---

## B. Design

---

### Task 3.B.1 — Interoperability

**Ensure interoperability of software, hardware, network components and medical devices**

#### Concept Summary

**Levels of Interoperability:**

| Level | Description |
|---|---|
| **Foundational** | Data can be received but not necessarily interpreted (basic connectivity) |
| **Structural** | Data follows a common format / standard (HL7, DICOM) |
| **Semantic** | Shared meaning using common terminology (SNOMED CT, LOINC) |
| **Organizational** | Governance, policy, and workflow alignment to enable end-to-end exchange |

**Key Standards and Frameworks:**
- **HL7 FHIR** → RESTful APIs for real-world EHR interoperability
- **IHE profiles** → implementation frameworks (e.g., XDS for document sharing, PIX/PDQ for patient identity)
- **SMART on FHIR** → standard for third-party app integration with EHRs
- **Direct Protocol** → secure email-based directed exchange
- **ONC Interoperability Standards Advisory (ISA)** → government reference for standards

**Medical Device Integration:**
- **IoMT (Internet of Medical Things)** → connected devices (monitors, infusion pumps, glucometers)
- Devices must be validated for clinical accuracy and cybersecurity
- Integration requires middleware/device interface engines

#### Practice Questions

> **[AP] Q11**: A hospital wants to allow third-party mobile apps to securely access patient data from its EHR. The MOST appropriate standard for this is:
> - A) HL7 v2.x ADT messages
> - B) SMART on FHIR **[CORRECT]**
> - C) DICOM
> - D) Direct Protocol
> *Maps to: Task 3.B.1 (Interoperability)*

---

### Task 3.B.2 — Compliance with Industry and Regulatory Standards

**Ensure compliance with applicable industry, regulatory and organizational standards**

#### Concept Summary

**Regulatory Compliance Requirements:**
- **HIPAA Security Rule** → requires documented safeguards for ePHI
- **CMS Conditions of Participation** → must meet for Medicare/Medicaid reimbursement
- **Joint Commission standards** → required for TJC-accredited organizations
- **ONC Certification** → EHR must meet ONC certification criteria for Promoting Interoperability incentives
- **FDA** → regulates software as a medical device (SaMD); clinical decision support oversight
- **SOX (Sarbanes-Oxley)** → financial record-keeping; relevant for publicly traded health organizations

**Organizational Standards:**
- Internal policies and procedures must reflect external regulatory requirements
- Annual compliance training and audits
- Designated compliance officer role

#### Practice Questions

> **[AP] Q12**: A hospital's EHR vendor must demonstrate that its product meets federal requirements to qualify for CMS Promoting Interoperability incentive payments. This certification is issued by:
> - A) The Joint Commission
> - B) NCQA
> - C) ONC (Office of the National Coordinator for Health IT) **[CORRECT]**
> - D) CMS directly
> *Maps to: Task 3.B.2 (Compliance with standards)*

---

### Tasks 3.B.3 – 3.B.6 — Design: Environmental Scanning, Infrastructure, Emerging Tech, Data Governance

#### Concept Summary

**Environmental Scanning (Task 3.B.3):**
- Monitor industry trends: regulatory changes, technology shifts, workforce changes
- Sources: HIMSS, ONC, CMS, vendor roadmaps, peer literature, industry conferences
- Output: annual technology landscape assessment; horizon scanning for 3-year IT strategic plan

**Business Continuity and Disaster Recovery (Task 3.B.4):**

| Concept | Definition |
|---|---|
| **BCP (Business Continuity Plan)** | Plan to maintain essential operations during a disruption |
| **DRP (Disaster Recovery Plan)** | IT-focused plan to restore systems and data after an outage |
| **RTO (Recovery Time Objective)** | Maximum acceptable system downtime before services resume |
| **RPO (Recovery Point Objective)** | Maximum acceptable data loss expressed as time (e.g., 4 hours of data) |
| **Downtime procedures** | Manual processes used when systems are unavailable |
| **Failover** | Automatic switchover to a backup system when the primary fails |
| **Hot site** | Fully operational backup facility; fastest recovery |
| **Warm site** | Partially equipped; systems need configuration before go-live |
| **Cold site** | Physical space only; longest recovery time |

**Emerging Technology Evaluation (Task 3.B.5):**
- Structured framework: business need alignment → vendor evaluation → pilot testing → total cost of ownership
- Gartner Hype Cycle → useful tool for assessing emerging technology maturity
- Proof of concept (POC) before enterprise deployment

**Data Governance (Task 3.B.6):**
- **Data governance** → policies and standards for data quality, consistency, and stewardship
- **Data steward** → responsible for data quality in a specific domain
- **Data dictionary** → defines data elements, their meaning, and valid values
- **Master data management (MDM)** → ensures consistency of shared data (patient, provider, facility identifiers) across systems
- **Data lifecycle** → creation → storage → use → archival → destruction; policies govern each stage

#### Practice Questions

> **[AP] Q13**: A hospital's EHR experiences an unplanned outage. Clinical staff must continue documenting patient care. The document guiding manual processes during this period is part of the organization's:
> - A) Data governance framework
> - B) Business continuity plan (downtime procedures) **[CORRECT]**
> - C) Change management plan
> - D) Disaster recovery plan
> *Maps to: Task 3.B.4 (BC/DR)*

> **[RE] Q14**: The maximum amount of data loss (expressed as time) an organization can tolerate after a system failure is called the:
> - A) Recovery Time Objective (RTO)
> - B) Recovery Point Objective (RPO) **[CORRECT]**
> - C) Failover threshold
> - D) Mean Time to Recovery (MTTR)
> *Maps to: Task 3.B.4*

> **[AP] Q15**: A health system CIO wants to ensure that the definition of "patient discharge" means the same thing across the EHR, financial system, and data warehouse. The MOST appropriate mechanism is:
> - A) Training all analysts on data visualization
> - B) Implementing an enterprise data dictionary and master data management program **[CORRECT]**
> - C) Standardizing the reporting tool used by all departments
> - D) Auditing EHR documentation quarterly
> *Maps to: Task 3.B.6 (Data governance)*

---

## C. Selection, Implementation, Support, and Maintenance

---

### Task 3.C.1 — Solution Selection

**Conduct solution selection activities (e.g., identify organizational stakeholders, demonstrations, site visits, reference checks)**

#### Concept Summary

**Selection Process Steps:**
1. Define requirements (from needs and gap analysis)
2. Issue **RFI** (gather vendor information)
3. Issue **RFP** (formal proposals)
4. Evaluate proposals using a **scoring matrix**
5. Conduct **vendor demonstrations** with real scenarios
6. **Site visits** to reference organizations already using the system
7. **Reference checks** — call/survey current users
8. Negotiate contract → **SOW** / **SLA**
9. Board / leadership approval and contract execution

**Key Stakeholders in Selection:**
- Clinical champions (physicians, nurses, pharmacists)
- IT and informatics staff
- Finance / procurement
- Executive sponsors
- End users representative sample

**Vendor Evaluation Criteria:**
- Functional fit to requirements
- Interoperability and standards compliance
- Total cost of ownership (TCO) — license, implementation, training, support, upgrade
- Vendor stability and support track record
- References and client satisfaction
- Implementation timeline and methodology

#### Practice Questions

> **[AP] Q16**: A hospital has narrowed its EHR selection to two vendors after reviewing written proposals. The NEXT step in the selection process should be:
> - A) Execute the contract with the lower-priced vendor
> - B) Issue an NDA and begin implementation planning
> - C) Conduct vendor demonstrations using organization-specific scenarios **[CORRECT]**
> - D) Finalize the SLA terms for each vendor
> *Maps to: Task 3.C.1 (Solution selection)*

---

### Tasks 3.C.2 – 3.C.6 — Implementation, Training, Maintenance, and Support

**Employ effective technical change management practices · Identify and execute effective training and support methods · Implement solutions while managing scope, schedule, budget, and quality · Maintain healthcare information systems · Analyze data for problems and trends**

#### Concept Summary

**Technical Change Management (Task 3.C.2):**
- **Change management plan** → formal process to evaluate, approve, and document system changes
- **Change advisory board (CAB)** → committee that approves changes; assesses risk and impact
- **Emergency change** → expedited process for urgent fixes (documented after the fact)
- **Release management** → packaging and scheduling of related changes
- Communicate changes to end users before deployment

**Training and Support Methods (Task 3.C.3):**

| Method | Best For |
|---|---|
| **Computer-Based Learning (CBL / eLearning)** | Self-paced, scalable, asynchronous training |
| **Classroom training** | Hands-on, interactive for complex workflows |
| **Train-the-Trainer (T3)** | Build internal expertise that scales to large user base |
| **At-the-Elbow Support (ATE)** | Go-live support by roving super-users or implementation specialists at the point of care |
| **Superuser model** | Trained end-user champions who provide peer support and ongoing optimization feedback |
| **Job aids** | Quick reference cards, tip sheets for point-of-use guidance |

**Triple Constraint — Scope / Schedule / Budget / Quality (Task 3.C.4):**
- Any change in one constraint affects the others
- Quality is the fourth dimension that can be traded off
- **Scope creep** → uncontrolled expansion of project scope without formal change control
- Monitor against baseline plan; report earned value metrics (SPI, CPI)

**System Maintenance (Task 3.C.5):**
- Patch management → regular security and functional patches
- Upgrade planning → major version upgrades require testing and training cycles
- Database maintenance → backups, indexing, archiving
- Uptime / SLA monitoring → track against contractual commitments

**Analyzing Problems and Trends (Task 3.C.6):**
- Monitor: error logs, help desk ticket volume and categories, user surveys, system performance dashboards
- Use **run charts** or **control charts** to detect trends over time
- Root cause analysis (RCA) for recurring issues
- Communicate findings to clinical and operational stakeholders

#### Practice Questions

> **[AP] Q17**: During an EHR go-live, informatics staff are assigned to walk the nursing units and assist nurses who are struggling with the new documentation screens. This support model is called:
> - A) Train-the-Trainer
> - B) Computer-based learning
> - C) At-the-Elbow support **[CORRECT]**
> - D) Superuser model
> *Maps to: Task 3.C.3 (Training and support methods)*

> **[AN] Q18**: Midway through an EHR implementation, several clinical departments request 25 additional features not in the original requirements. The project manager should:
> - A) Immediately add all features to maintain clinical support
> - B) Defer all new features to a future phase without evaluating them
> - C) Evaluate each request through the formal change control process and assess impact on scope, schedule, and budget **[CORRECT]**
> - D) Cancel the project and restart requirements gathering
> *Maps to: Task 3.C.4 (Scope/schedule/budget/quality)*

> **[AP] Q19**: An IS support manager notices a significant increase in help desk tickets related to the same system error over three weeks. The BEST next action is to:
> - A) Retrain all users on the affected module
> - B) Escalate to the vendor immediately without further analysis
> - C) Analyze the error trend data to identify the root cause before taking corrective action **[CORRECT]**
> - D) Accept the errors as normal system behavior
> *Maps to: Task 3.C.6 (Analyze data for problems and trends)*

---

## D. Testing and Evaluation

---

### Tasks 3.D.1 – 3.D.4 — Testing Methodology, Controls, Validation, and Benefits Realization

**Administer a formal testing methodology · Implement and monitor internal controls during testing · Validate implementations against contractual terms and design specifications · Evaluate that expected benefits are achieved**

#### Concept Summary

**Formal Testing Methodology (Task 3.D.1):**

| Test Type | Description |
|---|---|
| **Unit test** | Tests a single component or module in isolation |
| **Integration test** | Tests interactions between two or more components (e.g., CPOE → Pharmacy) |
| **System test** | Tests the entire system end-to-end in a production-like environment |
| **User Acceptance Testing (UAT)** | End-user validation that the system meets their requirements |
| **Stress / Load test** | Evaluates system performance under high or extreme load conditions |
| **Regression test** | Verifies that new code/changes have not broken previously working functionality |
| **Acceptance test** | Formal sign-off confirming the system meets contract/spec requirements |

**Testing Sequence (generally):** Unit → Integration → System → UAT → Acceptance

**Internal Controls During Testing (Task 3.D.2):**
- **Versioning control** → track system version changes; prevent unauthorized changes during testing
- **Change control** → all modifications during testing must go through formal approval
- **Security audits** → verify access controls are functioning correctly in the test environment
- **Environment separation** → test environment must be isolated from production

**Contract and Specification Validation (Task 3.D.3):**
- Compare delivered system functionality against the original SOW and design specifications
- Formal sign-off (UAT/acceptance) documents that contractual deliverables are met
- Defects that prevent meeting contract terms may trigger penalty clauses or SLA remedies

**Benefits Realization (Task 3.D.4):**
- Pre-implementation: define measurable benefit targets (e.g., reduce ALOS by 0.5 days, reduce medication errors by 20%)
- Post-implementation: measure actual vs. projected benefits at defined intervals (3, 6, 12 months)
- **ROI (Return on Investment)** = (Net Benefits ÷ Total Cost) × 100
- Report results to leadership and use findings to guide ongoing optimization

#### Practice Questions

> **[RE] Q20**: A hospital is testing the interface between its CPOE system and the pharmacy system to ensure orders flow correctly. This type of testing is called:
> - A) Unit testing
> - B) Integration testing **[CORRECT]**
> - C) Stress testing
> - D) User Acceptance Testing
> *Maps to: Task 3.D.1 (Testing methodology)*

> **[AP] Q21**: After an EHR go-live, the implementation team must confirm that all functionality defined in the Statement of Work has been delivered. The MOST appropriate testing activity to document this confirmation is:
> - A) Regression testing
> - B) Unit testing
> - C) Acceptance testing **[CORRECT]**
> - D) Stress testing
> *Maps to: Task 3.D.3 (Contract and spec validation)*

> **[AN] Q22**: Six months after a new revenue cycle system goes live, the CFO asks whether the projected $1.5M annual savings have been achieved. This activity is an example of:
> - A) System acceptance testing
> - B) Benefits realization evaluation **[CORRECT]**
> - C) Gap analysis
> - D) Change management
> *Maps to: Task 3.D.4 (Benefits realization)*

---

## E. Privacy and Security

---

### Tasks 3.E.1 – 3.E.7 — Privacy, Security, Access Controls, Safeguards, Roles, Data Lifecycle, Ongoing Validation

**Define and implement organizational policies for CIA · Assess and mitigate vulnerabilities · Define user access controls · Assess physical/technical/administrative controls · Define organizational security roles · Develop data management controls · Validate security features of existing systems**

#### Concept Summary

**CIA Triad (Task 3.E.1):**

| Principle | Meaning |
|---|---|
| **Confidentiality** | Data is accessible only to authorized individuals |
| **Integrity** | Data is accurate, complete, and not improperly altered |
| **Availability** | Systems and data are accessible when needed by authorized users |

**HIPAA Security Rule Safeguards:**

| Category | Examples |
|---|---|
| **Administrative** | Workforce security policies, training, risk assessments, sanction policy |
| **Physical** | Facility access controls, workstation use policies, device disposal procedures |
| **Technical** | Encryption, access controls, audit logs, automatic logoff, authentication |

**Vulnerability Assessment and Mitigation (Task 3.E.2):**
- **Risk assessment** → identify, evaluate, and prioritize security risks (NIST SP 800-30)
- **Penetration testing** → authorized simulated attacks to find exploitable vulnerabilities
- **Vulnerability scanning** → automated tools to identify known vulnerabilities
- **Patch management** → timely application of security patches
- **Mitigation** → accept, avoid, transfer (insurance), or remediate each risk

**User Access Controls (Task 3.E.3):**
- **RBAC (Role-Based Access Control)** → access granted based on job role, not individual
- **Least privilege / minimum necessary** → users get only the access required for their job
- **Access review / recertification** → periodic review to remove stale or inappropriate access
- **Termination procedures** → immediate revocation of access when employment ends
- **SSO + MFA** → single sign-on plus multi-factor authentication

**Physical, Technical, and Administrative Safeguards (Task 3.E.4):**

| Safeguard | Examples |
|---|---|
| **Physical** | Secured server rooms, visitor logs, laptop locks, badge-only access |
| **Technical** | Encryption, firewalls, IDS/IPS, automatic screen lock, MFA |
| **Administrative** | Security policies, training, incident response plan, sanctions for violations |

**Security Roles (Task 3.E.5):**

| Role | Responsibility |
|---|---|
| **Information Security Officer (ISO)** | Information security policies and risk management |
| **CISO** | Executive-level security strategy and governance |
| **Privacy Officer** | HIPAA Privacy Rule compliance, PHI breach response |
| **Compliance Officer** | Overall regulatory compliance monitoring |
| **Physical Security** | Facility access, badge systems, surveillance |

**Data Management Controls — Lifecycle (Task 3.E.6):**

| Stage | Controls |
|---|---|
| **Data creation / collection** | Ownership assignment, classification (sensitivity level) |
| **Storage** | Encryption, access controls, backup |
| **Use / sharing** | Minimum necessary, BAAs for external parties |
| **Retention** | Retention schedules per legal / regulatory requirements |
| **Destruction / disposal** | Secure deletion (NIST 800-88), physical destruction of media |

**Ongoing Security Validation (Task 3.E.7):**
- Regular vulnerability scans and penetration tests
- Annual security risk assessments (required by HIPAA)
- Monitor SIEM alerts and audit logs
- Tabletop exercises for incident response
- Review and update policies after incidents or regulatory changes

#### Practice Questions

> **[RE] Q23**: Under the HIPAA Security Rule, which category of safeguards includes encryption, audit logs, and automatic session timeout?
> - A) Administrative
> - B) Physical
> - C) Technical **[CORRECT]**
> - D) Operational
> *Maps to: Task 3.E.4 (Physical/technical/administrative safeguards)*

> **[AP] Q24**: A hospital terminates an employee from its billing department. The FIRST action the organization should take from an information security perspective is to:
> - A) Conduct a forensic review of the employee's workstation
> - B) Immediately revoke all system access credentials **[CORRECT]**
> - C) Change the department's shared passwords within 24 hours
> - D) Notify HHS of a potential HIPAA violation
> *Maps to: Task 3.E.3 (User access controls)*

> **[AN] Q25**: A hospital's annual HIPAA risk assessment identifies that unattended workstations in the ED are accessible by unauthorized visitors. The MOST appropriate safeguard to address this risk is:
> - A) Requiring all ED nurses to complete annual HIPAA training
> - B) Configuring automatic screen lock / session timeout after 2 minutes of inactivity **[CORRECT]**
> - C) Encrypting all data at rest on the servers
> - D) Implementing a SIEM system to detect unauthorized access
> *Maps to: Task 3.E.4 / 3.E.2*

> **[AP] Q26**: An organization wants to implement access controls that grant users the minimum level of system access needed to perform their job functions. This principle is called:
> - A) Role-Based Access Control only
> - B) Least privilege / minimum necessary **[CORRECT]**
> - C) Mandatory Access Control
> - D) Separation of duties
> *Maps to: Task 3.E.3*

---

## Domain 3 — Quick Cheatsheet

```
SDLC PHASES:
1. Planning  2. Analysis/Requirements  3. Design
4. Build/Development  5. Testing  6. Implementation
7. Maintenance/Optimization

SDLC MODELS:
Waterfall → sequential, clear deliverables
Agile     → iterative sprints, flexible, user feedback
Spiral    → risk-driven iterations

PROCESS IMPROVEMENT:
DMAIC → Define, Measure, Analyze, Improve, Control (Six Sigma)
PDCA  → Plan, Do, Check, Act (quality improvement cycles)
Lean  → eliminate waste, value-added vs. non-value-added

BUSINESS DOCUMENTS:
RFI  → early-stage vendor information gathering
RFP  → formal proposal solicitation
SOW  → scope, deliverables, timeline, payment
SLA  → performance commitments (uptime, response time)
NDA  → protects confidential information
BAA  → required with all vendors handling PHI

SELECTION PROCESS:
Needs → Gap Analysis → RFI → RFP → Demo → Site Visit
→ Reference Check → Contract (SOW/SLA) → Sign-off

TESTING TYPES:
Unit → single component
Integration → component interfaces (CPOE→Pharmacy)
System → end-to-end
UAT → user acceptance
Stress/Load → performance at volume
Regression → no new bugs from changes
Acceptance → contractual sign-off

BC/DR:
RTO = max acceptable downtime
RPO = max acceptable data loss (expressed in time)
Hot site = fully operational backup (fastest RTO)
Warm site = partially equipped
Cold site = physical space only (slowest RTO)

DATA GOVERNANCE:
Data dictionary → definitions of data elements
MDM → consistent shared data across systems
Data steward → domain-level data quality ownership
Lifecycle → create → store → use → retain → destroy

CIA TRIAD:
Confidentiality → access only to authorized
Integrity       → accurate, unaltered
Availability    → accessible when needed

HIPAA SAFEGUARDS:
Administrative → policies, training, risk assessment
Physical       → facility access, device controls
Technical      → encryption, audit logs, auto-logoff, MFA

ACCESS CONTROLS:
RBAC          → role-based access
Least privilege → minimum necessary access
Access review  → periodic recertification
Termination    → immediate revocation on exit
```
