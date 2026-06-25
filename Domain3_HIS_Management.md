# Domain 3: Healthcare Information and Systems Management — 30%

> **Exam weight:** ~30 scored questions out of 100 — highest-weight domain
> **Cognitive mix:** AP and AN dominate; scenario questions requiring lifecycle phase identification
> **Cognitive mix: ~66% AP · ~22% AN · ~12% RE — heavily Application-driven**
> **Highest-tested tasks: 3.C.2 (Technical Change Mgmt — 11q) · 3.A.1 (SDLC — 9q) · 3.A.2 (Project Mgmt — 5q) · 3.D.1 (Testing — 4q) · 3.B.4 (BC/DR — 3q) · 3.B.6 (Data Governance — 3q)**
>
> **4-step framework:**
> 1. Identify the lifecycle phase (analysis? design? testing? implementation? maintenance? security?)
> 2. Identify the process being tested (change management? SDLC? testing sequence? BC/DR? governance?)
> 3. Apply the sequence rule: FIRST/NEXT answers almost always follow documented process, not skip it
> 4. Patient safety overrides process: immediate patient harm → emergency change / immediate containment first
>
> **Eliminate immediately:** "Test in production" · "Skip CAB" for normal changes · "Restore from backup before eradicating malware" · "Deleting a file securely destroys PHI" · "UAT = acceptance testing" · Deploy during change freeze for non-emergency

---

## A. Analysis

---

### Task A.1 — Systems Development Life Cycle (SDLC)
> *Apply appropriate concepts of systems development (e.g., systems development lifecycle or SDLC)*

#### SDLC Phases

| Phase | Key Activities | Key Outputs |
|---|---|---|
| **1. Planning / Initiation** | Feasibility study, resource assessment, project charter | Project charter, feasibility report |
| **2. Analysis / Requirements** | Stakeholder interviews, current-state maps, requirement documentation | Functional requirements document, process maps |
| **3. Design** | Architecture, workflow design, interface specs, training plan outline | Technical specs, future-state workflows, interface designs |
| **4. Development / Build** | Configuration, coding, integration build | Configured system, interfaces, test scripts |
| **5. Testing** | Unit, integration, system, UAT, stress testing | Test results, defect logs, UAT sign-off |
| **6. Implementation / Go-live** | Training, data migration, cutover | Go-live checklist, cutover plan, rollback plan |
| **7. Maintenance / Optimization** | Post-live support, upgrades, optimization, enhancements | Help desk logs, optimization backlog |

#### SDLC Models

| Model | When to Use | Key Characteristic |
|---|---|---|
| **Waterfall** | Fixed requirements, regulatory deadlines, formal phase gates required | Sequential; each phase completes before next begins |
| **Agile** | Evolving requirements, continuous user feedback needed | Iterative sprints; working increments delivered frequently |
| **Spiral** | High uncertainty, novel technology, significant technical risk | Risk-driven iterations with explicit risk assessment each cycle |
| **RAD (Rapid Application Development)** | Fast prototyping for early user feedback on simple systems | Fast prototype → user feedback → refine |

#### Configuration vs. Custom Development

- **Configuration** → activating and customizing features within a vendor's existing platform (no original code written) — most EHR implementations
- **Custom development** → building original software from scratch — rare, reserved for unique competitive needs
- **Build vs. Buy vs. Partner decision:** Buy = commodity function + limited resources; Build = unique competitive capability; Partner = specialized expertise needed

#### Go-live Strategies

| Strategy | Description | Trade-off |
|---|---|---|
| **Big bang** | All sites go live simultaneously | Fast; concentrates all risk at one moment |
| **Phased rollout** | One site/department at a time | Lessons learned per site; longer dual-environment period |
| **Parallel run** | Old and new systems run simultaneously for validation period | Lowest risk; doubles operational workload during overlap |
| **Pilot** | Small-scale test before broader deployment | Validates design; may not capture enterprise-scale issues |

> **Rollback plan:** Documented steps, responsible parties, and decision criteria to revert to the prior system if a deployment fails. Essential for any production deployment.

#### Environment Separation

| Environment | Purpose |
|---|---|
| **Development (DEV)** | Build and configure; no patient data |
| **Test / QA** | Test functionality; anonymized data |
| **UAT** | End-user validation; production-like data |
| **Production (PROD)** | Live clinical environment; real patient data |

> **NEVER test in production.** Untested logic in a live environment risks patient harm.

> **Exam tip:** Waterfall = fixed requirements. Agile = changing requirements + continuous feedback. Spiral = high risk / uncertainty. Know which phase produces which artifact (design → specs; testing → defect logs; implementation → rollback plan).

---

### Task A.2 — Project Management Methodology
> *Apply and utilize project management methodology components (e.g., needs analysis, gap analysis, defining and prioritizing requirements)*

#### PM Methodology Components

| Component | Description |
|---|---|
| **Needs analysis** | Identify the actual problem or unmet need before proposing solutions |
| **Gap analysis** | Current state (what IS) vs. desired future state (what SHOULD BE) — document the gap |
| **Requirements gathering** | Document functional (what it does) and non-functional (how well it performs) requirements |
| **Functional requirements** | Features and capabilities: "system shall allow real-time appointment booking" |
| **Non-functional requirements** | Performance attributes: response time <3 seconds, 99.9% availability, HIPAA compliance |
| **MoSCoW prioritization** | Must / Should / Could / Won't — separates go-live critical from deferrable |
| **RACI matrix** | Responsible (does work) · Accountable (single owner) · Consulted (input) · Informed (notified) |
| **Work Breakdown Structure (WBS)** | Hierarchical decomposition of all project work into manageable work packages |
| **Risk register** | Log of risks with probability, impact, owner, mitigation strategy, and status |
| **Project charter** | Formal authorization document: scope, objectives, sponsor, budget, stakeholders |
| **Change control** | Formal process to evaluate, approve, and document all scope changes |

#### PMBOK Knowledge Areas

Scope · Schedule · Cost · Quality · Resource · Communication · Risk · Procurement · Stakeholder · Integration

> **Exam tip:** Needs analysis comes before solution selection — always. Gap analysis compares current to desired state. MoSCoW separates must-haves from nice-to-haves when scope must be managed to a deadline.

---

### Task A.3 — Process Improvement Concepts
> *Apply appropriate concepts of process improvement (e.g., DMAIC, PDCA)*

#### DMAIC (Six Sigma)

| Phase | Focus | Key Questions |
|---|---|---|
| **D — Define** | Define problem, scope, stakeholders, goals | What is broken? What does success look like? |
| **M — Measure** | Collect baseline data; quantify current performance | How bad is it? What data proves it? |
| **A — Analyze** | Identify root cause(s) using data | Why is it happening? What is the root cause? |
| **I — Improve** | Design and test solutions addressing root causes | What changes fix the root cause? |
| **C — Control** | Implement controls to sustain gains; ongoing monitoring | How do we ensure it stays fixed? |

#### PDCA / PDSA (Deming Cycle)

| Phase | Focus |
|---|---|
| **P — Plan** | Identify opportunity; develop the change; set objectives |
| **D — Do** | Implement on a small scale (pilot); collect data |
| **C — Check / S — Study** | Evaluate results against objectives; measure impact |
| **A — Act** | Standardize successful changes; cycle again if improvement needed |

#### Additional Process Improvement Tools

| Tool | Purpose |
|---|---|
| **Lean / Value Stream Mapping** | Eliminate waste (non-value-added steps); map entire workflow to surface inefficiency |
| **5 Whys** | Iteratively ask "why?" 5 times to reach root cause beneath symptoms |
| **Fishbone / Ishikawa diagram** | Visualize root causes organized by category (People, Process, Technology, Environment, Policy) |
| **Force field analysis (Lewin)** | Map driving forces (for change) vs. restraining forces (against change) |

> **DMAIC vs. PDCA:** DMAIC = Six Sigma, heavily data-driven, eliminate defects. PDCA = iterative quality improvement cycles, lighter statistics. Both start with defining the problem and measuring baseline.

---

### Task A.4 — Visualization Tools for Process Analysis
> *Utilize standard visualization tools to analyze and improve current business and clinical processes (e.g., process mapping, flow diagramming, gap analysis)*

| Tool | Purpose | When to Use |
|---|---|---|
| **Process map / Flowchart** | Sequential steps, decision points, handoffs | Any workflow documentation |
| **Swim lane diagram** | Multi-role process map — shows WHO does WHAT and WHERE handoffs occur | Cross-departmental workflows; handoff gap identification |
| **Value stream map** | End-to-end workflow showing value-added vs. non-value-added time (Lean) | Lean improvement projects; waste elimination |
| **SIPOC diagram** | Supplier-Input-Process-Output-Customer — high-level scope tool | Project scoping before detailed mapping |
| **Fishbone / Ishikawa** | Root cause categories (6Ms: Man, Machine, Method, Material, Measurement, Mother Nature) | Root cause analysis sessions |
| **Gap analysis matrix** | Current state vs. desired state organized by category | Pre-project needs assessment |
| **Affinity diagram** | Groups large volumes of ideas/data into logical categories | Brainstorming synthesis |

> **Exam tip:** Swim lane = who does what across roles (handoffs). Fishbone = root cause by category. SIPOC = scoping before detailed mapping. Value stream map = waste elimination (Lean).

---

### Tasks A.5–A.10 — Analysis, Documentation, and Business Case

#### Task A.5 — Interpret and Analyze Disparate Data Sets

**Data quality dimensions:**

| Dimension | Definition |
|---|---|
| **Accuracy** | Data correctly represents real-world values |
| **Completeness** | All required fields populated |
| **Consistency** | Same data element means the same thing across systems |
| **Timeliness** | Data is available when needed |
| **Validity** | Values fall within acceptable ranges/formats |

- **Data normalization** → standardize formats across sources before comparison (e.g., mapping "Na blood" and "serum sodium" to the same LOINC code)
- **Master data management (MDM)** → ensures shared data entities (patient, provider, facility) are consistent across all systems
- **Data dictionary** → defines each data element, its source, owner, valid values, and relationship to other elements

#### Task A.6 — Formulate Alternate Processes and Solutions

**Build vs. Buy vs. Partner Framework:**

| Option | When Appropriate | Risk |
|---|---|---|
| **Build (custom develop)** | Unique competitive capability; no vendor solution exists | High cost, long timeline, ongoing maintenance |
| **Buy (commercial)** | Commodity function; mature vendor market; limited internal resources | Vendor lock-in; configuration constraints |
| **Partner** | Specialized expertise needed; co-development or outsourced delivery | Dependency risk; IP ownership questions |

- **Proof of Concept (POC)** → time-limited trial with defined success criteria before enterprise commitment
- **Pilot** → small-scale controlled deployment before broad rollout

#### Task A.7 — Evaluate Strategic Alignment

- Proposed solution must align with organizational mission, vision, and strategic plan
- **Balanced Scorecard (Kaplan & Norton)** → Financial · Customer · Internal Process · Learning & Growth
- **SWOT analysis** → Strengths (internal) · Weaknesses (internal) · Opportunities (external) · Threats (external)
- **PEST / PESTLE** → Political · Economic · Social · Technological · Legal · Environmental — macro factors
- Use a **scoring matrix** with weighted criteria to objectively compare solution options

#### Task A.8 — Cost-Benefit Analysis

| Financial Metric | Formula / Definition |
|---|---|
| **ROI (Return on Investment)** | (Net Benefit ÷ Total Cost) × 100 = % return |
| **Net Benefit** | Total Benefits − Total Costs |
| **Payback Period** | Time to recoup the initial investment from net benefits |
| **NPV (Net Present Value)** | Present value of future benefits minus present value of costs |
| **TCO (Total Cost of Ownership)** | All direct + indirect costs over full system lifecycle |

**ROI example:** Cost $200K; benefits $450K → Net benefit $250K → ROI = $250K/$200K × 100 = **125%**

- Quantify tangible benefits (efficiency gains, error reduction, revenue impact)
- Acknowledge intangible benefits (patient satisfaction, staff morale) — cannot go in ROI formula but support the business case
- Capital budget = one-time assets (hardware, software licenses). Operating budget = recurring (maintenance, SaaS subscriptions, staff salaries)

#### Task A.9 — Develop Proposals

**Business Case Structure:**
1. Executive Summary — problem + recommended solution in 1 paragraph
2. Problem Statement — quantified current-state gap
3. Proposed Solution — what it is and how it works
4. Costs — implementation, training, licensing, ongoing maintenance
5. Benefits — quantified ROI, NPV, payback period
6. Risks and Mitigations — top 3–5 risks with responses
7. Implementation Timeline — phased approach with milestones
8. Recommendation — clear call to action for leadership

#### Task A.10 — Business Documentation

| Document | Purpose | Key Content |
|---|---|---|
| **RFI (Request for Information)** | Early-stage vendor inquiry; no commitment | Capabilities, approach, rough pricing |
| **RFP (Request for Proposal)** | Formal solicitation for detailed proposal and pricing | Functional requirements, implementation methodology, SLA terms, pricing |
| **RFQ (Request for Quote)** | Specific pricing for defined goods/services | Line-item pricing, delivery terms |
| **SOW (Statement of Work)** | Defines scope, deliverables, timeline, payment for a specific engagement | What will be done, when, and at what cost |
| **SLA (Service Level Agreement)** | Contractual performance commitments | Uptime %, response time, penalty clauses |
| **NDA (Non-Disclosure Agreement)** | Protects confidential information shared during discussions | Scope of confidentiality, duration |
| **BAA (Business Associate Agreement)** | Required when vendor handles PHI on behalf of covered entity | HIPAA required; security obligations of BA |
| **MSA (Master Services Agreement)** | Overarching framework; individual engagements governed by SOWs | Terms and conditions that apply across all work |

> **Selection process sequence:** Needs analysis → Gap analysis → RFI → RFP → Vendor demo → Site visit → Reference check → Contract negotiation (SOW + SLA) → Sign-off

> **Exam tip:** SLA = performance standards (uptime, response time). SOW = scope and deliverables. NDA ≠ BAA — NDA protects confidential business information; BAA is required specifically for PHI access.

---

## B. Design

---

### Task B.1 — Interoperability
> *Ensure interoperability of software, hardware, network components and medical devices*

#### Interoperability Levels

| Level | Description |
|---|---|
| **Foundational** | System can receive data (basic connectivity) |
| **Structural** | Data follows a common format (HL7, DICOM) |
| **Semantic** | Shared meaning via common terminology (LOINC, SNOMED CT, RxNorm) |
| **Organizational** | Governance, policy, workflow alignment for end-to-end exchange |

#### Key Standards and Frameworks

| Standard | Use Case |
|---|---|
| **HL7 FHIR** | RESTful API for modern EHR interoperability; required by 21st Century Cures Act |
| **SMART on FHIR** | OAuth 2.0-based authorization for third-party app integration with EHRs |
| **Direct Protocol** | Secure directed exchange (encrypted email equivalent) |
| **IHE XDS** | Cross-enterprise document sharing |
| **IHE PIX/PDQ** | Patient identity cross-referencing / patient demographics query |
| **ONC ISA** | Interoperability Standards Advisory — government reference for approved standards |

#### Medical Device Integration (IoMT)

- IoMT devices (monitors, infusion pumps, glucometers, wearables) must be validated for clinical accuracy and cybersecurity
- Device integration requires middleware/device interface engines
- End-of-life devices with unpatched OS require risk assessment and network segmentation before replacement

---

### Task B.2 — Compliance with Standards
> *Ensure compliance with applicable industry, regulatory and organizational standards*

| Standard / Requirement | Scope |
|---|---|
| **HIPAA Security Rule** | Requires documented safeguards for ePHI; annual risk assessment required |
| **CMS Conditions of Participation (CoP)** | Hospitals must meet CoP to receive Medicare/Medicaid reimbursement |
| **ONC Health IT Certification** | EHR must be certified by ONC for CMS Promoting Interoperability incentives |
| **Joint Commission standards** | Required for TJC-accredited organizations; includes information management standards |
| **FDA (SaMD)** | Regulates software as a medical device; some CDS tools fall under FDA oversight |
| **SOX (Sarbanes-Oxley)** | Financial record-keeping requirements; relevant for publicly traded health organizations |
| **State health IT laws** | May exceed federal minimums; vary by state |

---

### Task B.3 — Environmental Scanning
> *Ensure a process exists to incorporate industry, technology, infrastructure, legal and regulatory environment trends*

- **Environmental scanning** → systematic monitoring of industry trends, regulatory changes, and technology shifts
- Sources: HIMSS, ONC, CMS, vendor roadmaps, peer-reviewed journals, industry conferences
- **Gartner Hype Cycle** → maps technologies from "Peak of Inflated Expectations" through "Trough of Disillusionment" to "Plateau of Productivity" — guides buy vs. wait decisions
- **PEST / PESTLE analysis** → Political, Economic, Social, Technological, Legal, Environmental factors
- Output: Annual technology landscape assessment; 3-year IT strategic plan input

---

### Task B.4 — Information Infrastructure Design (BC/DR)
> *Design an information infrastructure that supports current and anticipated business needs (e.g., business continuity, disaster recovery)*

#### BC/DR Key Concepts

| Concept | Definition |
|---|---|
| **BCP (Business Continuity Plan)** | Plan to maintain essential operations during a disruption |
| **DRP (Disaster Recovery Plan)** | IT-focused plan to restore systems and data after an outage |
| **RTO (Recovery Time Objective)** | Maximum acceptable system downtime before services must resume |
| **RPO (Recovery Point Objective)** | Maximum acceptable data loss expressed as time (e.g., lose up to 4 hours of data) |
| **Downtime procedures** | Pre-printed paper forms and manual processes used when systems are unavailable |
| **Failover** | Automatic switchover to a backup system when the primary fails |

#### DR Site Types (by recovery speed)

| Site Type | Description | RTO |
|---|---|---|
| **Hot site** | Fully operational; current data replication; immediate failover | Minutes to hours |
| **Warm site** | Partially equipped; systems need configuration before go-live | Hours to days |
| **Cold site** | Physical space only; no pre-configured systems | Days to weeks |

> **Exam tip:** RTO = max downtime (how long systems can be down). RPO = max data loss (how much data can be lost, expressed as time). Hot site = fastest recovery. BCP = keep operations running. DRP = restore IT systems.

---

### Task B.5 — Evaluate Emerging Technologies
> *Evaluate existing and emerging technologies to support organization's future growth and strategy*

**Evaluation Framework:**
1. Identify business need (not technology-first)
2. Assess technology maturity (Gartner Hype Cycle)
3. Conduct Proof of Concept (POC) or pilot
4. Calculate Total Cost of Ownership (TCO)
5. Assess interoperability and integration requirements
6. Evaluate vendor stability and long-term roadmap
7. Board/leadership approval for enterprise deployment

---

### Task B.6 — Data Governance
> *Employ and implement effective data management using an established data governance protocol*

| Concept | Definition |
|---|---|
| **Data governance** | Policies, standards, and practices for data quality, consistency, ownership, and stewardship |
| **Data steward** | Individual accountable for data quality in a specific domain (lab data steward, medication data steward) |
| **Data dictionary** | Defines each data element: name, definition, source, owner, valid values, relationships |
| **MDM (Master Data Management)** | Single authoritative source for shared data entities (patient, provider, facility identifiers) |
| **Data classification** | Categorizing data by sensitivity (public, internal, confidential, restricted) |
| **Data lifecycle** | Creation → Storage → Use → Sharing → Retention → Archival → Destruction |
| **Retention schedule** | Legally required minimum retention periods (medical records typically 7–10 years, varies by state) |

**Data lifecycle stages and controls:**

| Stage | Key Controls |
|---|---|
| Creation | Data ownership assignment; classification; validation at entry |
| Storage | Encryption; access controls; backup; redundancy |
| Use / Sharing | Minimum necessary; BAA for external parties; audit logging |
| Retention | Retention schedules per legal and regulatory requirements |
| Destruction | Secure deletion (NIST 800-88); physical destruction of media |

> **Exam tip:** Data dictionary resolves conflicting definitions across departments (e.g., "discharge time" means different things to EHR vs. finance). Data steward = domain-level quality owner. MDM = single source of truth for shared data entities.

---

## C. Selection, Implementation, Support and Maintenance

---

### Task C.1 — Solution Selection
> *Conduct solution selection activities (e.g., identify organizational stakeholders, demonstrations, site visits, reference)*

#### Selection Process Steps

1. Define requirements (from needs + gap analysis)
2. Issue **RFI** — gather vendor capability information
3. Issue **RFP** — formal proposals with pricing
4. Evaluate proposals using a **weighted scoring matrix**
5. Conduct **vendor demonstrations** using real organizational scenarios (scripted)
6. **Site visits** — observe live system use at a reference organization
7. **Reference checks** — contact current customers directly
8. Negotiate contract → SOW + SLA
9. Leadership/board approval and contract execution

#### Key Evaluation Criteria

- Functional fit to documented requirements
- Interoperability and standards compliance (FHIR, ONC certification)
- Total Cost of Ownership (TCO) over full lifecycle
- Vendor financial stability and support track record
- Implementation methodology and timeline
- Client references and satisfaction (KLAS ratings)

> **Exam tip:** Demos must be scripted with organization-specific scenarios — not generic vendor demos. Site visits = observe real users. Reference checks = call customers directly. These happen AFTER RFP evaluation, BEFORE contract.

---

### Task C.2 — Technical Change Management
> *Employ effective technical change management practices*

#### Change Types

| Type | Description | Approval Process |
|---|---|---|
| **Standard change** | Pre-approved, low-risk, repeatable (e.g., monthly security patch) | Pre-approved; no individual CAB review |
| **Normal change** | Assessed and approved through CAB | Full CAB review; risk and impact assessment |
| **Emergency change** | Urgent patient safety fix; bypasses normal timeline | Expedited authorization; retroactive formal review |

#### Change Management Process

1. **Request** → log change request with description, justification, risk assessment
2. **Impact assessment** → identify affected systems, workflows, users; define rollback plan
3. **CAB review** → Change Advisory Board reviews, approves, and schedules
4. **Test in non-production** → DEV → QA → UAT before PROD
5. **Communicate** → notify all affected clinical staff before deployment (downtime window, scope, procedures)
6. **Deploy** → within approved maintenance window
7. **Post-implementation review (PIR)** → what worked, what failed, root cause of issues, lessons learned

#### Key Change Management Concepts

- **CAB (Change Advisory Board)** → committee that reviews, approves, and schedules system changes
- **Change freeze / blackout period** → no non-emergency changes during high-risk operational windows (year-end, holiday, go-live period)
- **Release management** → packages multiple approved changes into a single deployment event
- **Configuration drift** → when production system diverges from its documented, approved baseline — caused by informal changes bypassing change control
- **Rollback plan** → documented steps to revert to prior state if deployment fails

---

### Task C.3 — Training and Support Methods
> *Identify and execute effective training and support methods (e.g., computer-based learning, classroom training, train the trainer, at-the-elbow support from superusers)*

| Method | Description | Best For |
|---|---|---|
| **Computer-Based Learning (CBL / eLearning)** | Self-paced, asynchronous, scalable | Concept learning; large geographically dispersed user bases |
| **Classroom training** | In-person, interactive, hands-on | Complex workflows; groups that benefit from Q&A |
| **Train-the-Trainer (T3)** | Develops internal expert trainers who train their peers | Large-scale rollouts where vendor cannot train everyone |
| **At-the-Elbow (ATE) support** | Implementation specialists at point of care during go-live | Go-live week; real-time, workflow-embedded assistance |
| **Superuser model** | Empowered frontline peer coaches post-go-live | Ongoing optimization; peer-level credibility |
| **Job aids** | Quick reference cards, tip sheets at point of use | High-frequency tasks; experienced users |

**Training timing:** Just-in-time training (2–4 weeks before go-live) maximizes Knowledge retention. Training 8–10 weeks early results in knowledge decay before go-live.

---

### Task C.4 — Scope, Schedule, Budget, Quality (Triple Constraint)
> *Implement solutions while managing scope, schedule, budget, and quality*

- **Scope creep** → uncontrolled expansion of project scope without formal change control authorization
- Any scope change, regardless of requester authority, must go through formal change control
- **Triple constraint:** changing one dimension (scope/schedule/cost) affects the others; quality is the fourth dimension
- **Earned Value Management (EVM):**

| Metric | Formula | Interpretation |
|---|---|---|
| **CPI (Cost Performance Index)** | Earned Value ÷ Actual Cost | <1.0 = over budget; >1.0 = under budget |
| **SPI (Schedule Performance Index)** | Earned Value ÷ Planned Value | <1.0 = behind schedule; >1.0 = ahead of schedule |

---

### Task C.5 — System Maintenance
> *Maintain healthcare information systems (e.g., operate, upgrade)*

- **Patch management** → regular application of security and functional patches; critical patches within vendor-required window; test in non-production before production
- **Upgrade planning** → major version upgrades require full testing cycle (regression, UAT) and retraining
- **Database maintenance** → backups, indexing, archiving, performance tuning
- **Uptime/SLA monitoring** → track system availability against contractual SLA commitments
- Test environments should be refreshed with anonymized production data periodically to reflect current data patterns

---

### Task C.6 — Analyze Data for Problems and Trends
> *Analyze data for problems and trends (e.g., error reports, help desk logs, surveys, performance metrics, network monitoring)*

- Monitor: help desk ticket volume + categories (spike in password resets after a software update → usability root cause, not security breach)
- Use **run charts** or **control charts** to detect trends and distinguish common cause from special cause variation
- **Root cause analysis (RCA)** → for recurring or high-severity issues before implementing fixes
- Post-implementation reviews and periodic optimization cycles driven by data
- Network monitoring → identify bandwidth bottlenecks, latency, availability gaps

---

## D. Testing and Evaluation

---

### Task D.1 — Formal Testing Methodology
> *Administer a formal testing methodology (e.g., unit test, integrated test, stress test, acceptance test)*

#### Testing Types

| Test Type | What It Tests | Example |
|---|---|---|
| **Unit test** | Single component or module in isolation | Individual CDS alert logic |
| **Integration test** | Data flow and behavior between two+ components | CPOE → Pharmacy → eMAR message flow |
| **System test** | Entire system end-to-end in a production-like environment | Full patient encounter workflow |
| **UAT (User Acceptance Testing)** | End-user validation against requirements in a realistic scenario | Nurses test documentation workflows |
| **Stress / Load test** | System performance under peak or extreme load | 500 simultaneous users at go-live volume |
| **Regression test** | Verifies new changes didn't break existing functionality | Post-patch test of all existing interfaces |
| **Acceptance test** | Formal contractual sign-off that SOW deliverables are met | Legal confirmation that vendor delivered all contracted items |

**Testing sequence:** Unit → Integration → System → UAT → Acceptance

---

### Task D.2 — Internal Controls During Testing
> *Implement and monitor compliance with internal controls to protect resources and ensure availability, confidentiality and integrity during testing (e.g., security audits, versioning control, change control)*

- **Environment separation** → DEV/TEST/UAT must be isolated from PROD; never test in production
- **Versioning control** → track all configuration changes in the test environment; prevent unauthorized modifications
- **Change control in test environments** → all configuration changes during testing must be documented and approved
- **Security audits during testing** → verify access controls, audit logs, and authentication function correctly in test environment
- **Data masking / anonymization** → never use real PHI in test or UAT environments without a formal data use agreement and privacy controls
- Any informal change to the test environment invalidates the test results for that build

---

### Task D.3 — Validate Against Contractual Terms
> *Validate implementations against contractual terms and design specifications*

- **Acceptance testing** → formal process confirming delivered functionality matches SOW specifications
- Defects that prevent meeting contract terms may trigger penalty clauses or SLA remedies
- Formal sign-off document closes the contractual obligation between organization and vendor
- UAT sign-off ≠ Acceptance sign-off: UAT = clinical workflow validation; Acceptance = contractual deliverable confirmation

---

### Task D.4 — Benefits Realization
> *Evaluate that expected benefits are achieved and report metrics (e.g., return on investment, benchmarks, user satisfaction)*

- **Pre-implementation:** Define measurable benefit targets (reduce ALOS by 0.5 days, reduce medication errors by 20%)
- **Post-implementation:** Measure actual vs. projected benefits at defined intervals (3, 6, 12 months)
- Report results to leadership; use findings to guide ongoing optimization
- Benefits realization ≠ UAT — benefits realization happens months after go-live

| Measurement | When | What |
|---|---|---|
| Baseline | Before go-live | Establish pre-implementation metric values |
| 30-day check | 1 month post | Initial adoption and stability indicators |
| 90-day review | 3 months post | Workflow stabilization; early efficiency gains |
| 6-month/1-year | 6–12 months post | Full benefits realization evaluation; ROI confirmation |

---

## E. Privacy and Security

---

### Task E.1 — CIA Triad and Organizational Policies
> *Define and implement organizational policies and procedures to ensure confidentiality, privacy, security, availability, and integrity of data*

| Principle | Meaning | Violation Example |
|---|---|---|
| **Confidentiality** | Data accessible only to authorized individuals | Unauthorized access to a patient record |
| **Integrity** | Data is accurate, complete, and not improperly altered | Tampering with audit log timestamps |
| **Availability** | Systems and data accessible when needed by authorized users | Ransomware encrypting EHR for 14 hours |

**HIPAA Security Rule — Three Safeguard Categories:**

| Category | Examples |
|---|---|
| **Administrative** | Workforce security training, sanctions policy, annual risk assessment, workforce clearance procedures |
| **Physical** | Badge-access server rooms, laptop locks, visitor logs, workstation use policies, device disposal |
| **Technical** | Encryption, audit logs, automatic session timeout, MFA, access controls, integrity controls |

---

### Task E.2 — Vulnerability Assessment and Mitigation
> *Assess and mitigate privacy and security vulnerabilities*

| Activity | Description |
|---|---|
| **Annual risk assessment** | HIPAA-required; identify, evaluate, and prioritize security risks (NIST SP 800-30 framework) |
| **Vulnerability scanning** | Automated tools identifying known vulnerabilities across systems |
| **Penetration testing** | Authorized simulated attack to find exploitable vulnerabilities (ethical hacking) |
| **Patch management** | Timely application of security patches; critical patches within mandated timeframes |
| **Risk responses** | Avoid · Mitigate · Transfer (insurance) · Accept |
| **Risk appetite** | Organization's stated tolerance for risk; guides response strategy |

> **Vulnerability scan vs. penetration test:** Scan = automated, finds known CVEs. Pen test = authorized human attacker, exploits vulnerabilities. Pen test > scan for depth.

---

### Task E.3 — User Access Controls
> *Define and implement user access controls according to established policies and procedures*

| Control | Description |
|---|---|
| **RBAC (Role-Based Access Control)** | Access granted based on job role, not individual — most common in healthcare |
| **Least privilege / minimum necessary** | Users receive only the access required for their specific job function |
| **Access recertification** | Periodic review (quarterly/annual) to verify access aligns with current job roles |
| **Termination procedures** | Immediate revocation of all system access when employment ends |
| **SSO + MFA** | Single sign-on + multi-factor authentication; SSO reduces password fatigue; MFA protects against credential theft |

---

### Task E.4 — Physical, Technical, and Administrative Safeguards
> *Assess and implement physical, technical, and administrative controls to ensure safeguards are in place to protect assets (e.g., servers secured, unattended computers, two-factor authentication)*

| Safeguard | Examples |
|---|---|
| **Physical** | Badge-only server room access; surveillance cameras; visitor logs; laptop cable locks; clean desk policy |
| **Technical** | Encryption at rest/in transit; firewall; IDS/IPS; SIEM; automatic screen lock; MFA; audit logs |
| **Administrative** | Security policies; annual training; incident response plan; workforce sanctions; background checks |

> **BYOD (Bring Your Own Device):** Personal devices should connect to a guest/BYOD VLAN logically segmented from the clinical network — technical safeguard that isolates personal devices without banning them.

---

### Task E.5 — Security Roles
> *Define organizational roles responsible for managing vulnerabilities (e.g., information security, physical security, compliance)*

| Role | Primary Responsibility |
|---|---|
| **CISO** | Enterprise security strategy and governance; cybersecurity risk management |
| **Information Security Officer (ISO)** | Day-to-day security operations; risk assessments; security policy implementation |
| **Privacy Officer** | HIPAA Privacy Rule compliance; PHI disclosure policies; breach investigation |
| **Compliance Officer** | Regulatory compliance monitoring; OIG 7-element program; training |
| **Physical Security** | Facility access control; badge systems; surveillance; visitor management |

> **CISO vs. Privacy Officer:** CISO handles security incidents and ePHI technical controls. Privacy Officer handles PHI disclosure complaints and HIPAA Privacy Rule compliance. Both collaborate on breach response.

---

### Task E.6 — Data Management Controls
> *Develop and implement data management controls (e.g., data ownership, criticality, security levels, protection controls, retention and destruction requirements, access controls)*

| Data Lifecycle Stage | Key Controls |
|---|---|
| Creation | Data owner assignment; sensitivity classification (public/internal/confidential/restricted) |
| Storage | Encryption at rest; access controls; backup and redundancy |
| Use / Sharing | Minimum necessary; BAA for third parties handling PHI; audit logging |
| Retention | Retention schedules per CMS, state law, organizational policy (medical records: typically 7–10 years) |
| Destruction | NIST SP 800-88 secure deletion; physical destruction of media containing PHI |

> **Media destruction:** Deleting files or reformatting a drive does NOT securely destroy PHI — data is recoverable. NIST 800-88 cryptographic erasure or physical destruction is required.

---

### Task E.7 — Ongoing Security Validation
> *Validate on an ongoing basis the security features of existing systems*

- **Annual HIPAA risk assessment** — required; identifies threats and vulnerabilities to ePHI
- **Regular vulnerability scanning** — automated, at least quarterly
- **Periodic penetration testing** — annual or after major system changes
- **SIEM monitoring** — continuous real-time log analysis and alerting
- **Tabletop exercises** — simulated incident response scenarios for team readiness
- **Policy review cycle** — review policies annually OR after significant regulatory/incident triggers
- **Access recertification** — quarterly or annual review of all user access permissions

---

### Task C.2 Extension — Release Management, Change Impact Assessment, and PIR

#### Release Management

- **Release management** → packages multiple approved changes into a single scheduled deployment event; reduces maintenance windows and manages inter-change dependencies
- Release package contains: list of all changes, individual test results, combined rollback plan, communication plan, post-deployment monitoring criteria
- Prevents deployment fatigue from excessive individual change windows

#### Change Impact Assessment

Before any production change, document:
1. **Affected systems** → which applications, interfaces, databases will be impacted
2. **Affected workflows** → which clinical/operational workflows and user groups are affected
3. **Testing required** → what must be validated in non-production environments before deploying
4. **Rollback criteria** → specific measurable conditions (error rate threshold, downtime duration) that trigger rollback
5. **Communication plan** → who must be notified and when (before, during, after deployment)

#### Post-Implementation Review (PIR)

Conducted after every significant change deployment:
- Were the change objectives achieved?
- Did unexpected issues occur? What was the root cause?
- Was the rollback plan activated? Why or why not?
- What would improve the next deployment?

PIR findings update the risk register and change management procedures. PIR findings do NOT trigger disciplinary action unless deliberate policy violations occurred.

---

### Task C.5 Extension — ITIL Service Management

**ITIL (Information Technology Infrastructure Library)** — framework for managing IT services aligned to business needs.

| Process | Purpose | Healthcare HIT Example |
|---|---|---|
| **Incident Management** | Restore normal service as quickly as possible after an unplanned outage | EHR login failure at 6 AM → immediate service restoration; ticket logged |
| **Problem Management** | Find and eliminate root cause of one or more recurring incidents | Three EHR outages per month → root cause analysis → permanent fix |
| **Change Management** | Control changes to minimize risk to IT services | CAB review before deploying new CDS alert to production |
| **Service Request Management** | Handle standard, pre-approved user requests (not incidents) | New user account; access role change; password reset |
| **Service Catalog** | Documented list of all IT services offered, SLAs, and how to request them | "Order a new workstation" — defined process, SLA, and approval workflow |
| **CMDB** | Configuration Management Database — authoritative IT asset inventory and relationships | Know which servers support which EHR modules for impact assessment |

**Incident vs. Problem:**
- **Incident** = unplanned disruption RIGHT NOW → restore service fast (not root cause)
- **Problem** = underlying root cause of recurring incidents → eliminate permanently

> **Exam tip:** EHR is down, patients are waiting → FIRST step is to restore service (incident management), NOT investigate root cause. Root cause investigation (problem management) comes after service is restored.

### Task D.4 Extension — Benefits Realization Timeline

| Checkpoint | When | What to Measure |
|---|---|---|
| **Baseline** | Before go-live | Establish pre-implementation metric values (ALOS, error rates, scan rates) |
| **30-day check** | 1 month post | Initial adoption rates; help desk ticket volume; critical issue resolution |
| **90-day review** | 3 months post | Workflow stabilization; early efficiency gains; training compliance rates |
| **6-month review** | 6 months post | First measurable outcome improvements; initial ROI data |
| **12-month review** | 1 year post | Full benefits realization evaluation; actual ROI vs. projected; go/no-go on next phase |

Benefits realization requires a **pre-defined measurement plan established BEFORE go-live** — defining success metrics retrospectively is not acceptable.

> **Exam tip:** Benefits realization ≠ UAT. UAT validates that the system works as configured. Benefits realization (months post go-live) measures whether the system delivered the clinical and financial improvements that justified the investment.

---

### Task E.2 Extension — NIST Cybersecurity Framework and Incident Response

#### NIST Cybersecurity Framework (CSF) Applied to Healthcare HIT

| Function | Healthcare HIT Application |
|---|---|
| **Identify** | IT asset inventory; annual HIPAA risk assessment; data classification by sensitivity |
| **Protect** | RBAC; MFA; encryption; patching; security awareness training; BAA for all PHI-accessing vendors |
| **Detect** | SIEM continuous monitoring; audit log review; vulnerability scanning; IDS/IPS alerting |
| **Respond** | Incident response plan activation; containment; forensic analysis; breach notification to HHS and individuals |
| **Recover** | BCP/DRP activation; restore from verified clean backup; post-incident review; update controls |

#### Security Incident Response Sequence (NIST SP 800-61)

1. **Preparation** — policies, tools, and response team established BEFORE any incident
2. **Detection & Analysis** — identify and confirm the incident; determine scope and severity
3. **Containment** — isolate affected systems; prevent lateral spread via network segmentation
4. **Eradication** — remove malware; patch exploited vulnerability; clean affected systems
5. **Recovery** — restore from verified clean backup; validate integrity before returning to production
6. **Post-Incident Review** — lessons learned; update incident response plan; improve controls

> **Critical sequence:** Containment → Eradication → Recovery. Never restore systems before eradicating the threat — malware will immediately reinfect restored systems.

---

## Domain 3 — Quick Reference Cheatsheet

```
SDLC PHASES:
1. Planning/Initiation   → feasibility study; project charter
2. Analysis/Requirements → functional + non-functional requirements; gap analysis
3. Design               → technical specs; future-state workflows; interface designs
4. Development/Build    → configuration; coding; interface build
5. Testing              → unit → integration → system → UAT → acceptance
6. Implementation       → training; data migration; cutover; rollback plan
7. Maintenance          → support; upgrades; optimization; benefits realization

SDLC MODELS:
Waterfall → fixed requirements; formal phase gates; sequential
Agile     → changing requirements; iterative sprints; continuous feedback
Spiral    → high uncertainty/risk; explicit risk assessment each cycle

GO-LIVE STRATEGIES:
Big bang   → all at once; concentrates risk
Phased     → one site at a time; lessons learned; longer dual-environment
Parallel   → old + new run simultaneously; lowest risk; doubles workload
Rollback plan → documented revert steps if deployment fails

ENVIRONMENTS:  DEV → QA/TEST → UAT → PROD
NEVER test in PROD.

PROJECT MANAGEMENT:
Needs analysis    → identify actual problem before solution
Gap analysis      → current state vs. desired state
MoSCoW            → Must/Should/Could/Won't
RACI              → Responsible(does work) / Accountable(1 owner) / Consulted / Informed
WBS               → hierarchical work decomposition
Risk register     → risk + probability + impact + owner + mitigation
Project charter   → formal authorization: scope + objectives + sponsor + budget

PROCESS IMPROVEMENT:
DMAIC → Define, Measure, Analyze, Improve, Control (Six Sigma; data-driven)
PDCA  → Plan, Do (pilot), Check, Act (standardize or cycle again)
Lean  → eliminate waste; value stream mapping shows NVA steps
5 Whys → iterate "why?" to reach root cause beneath symptoms
Fishbone → root cause by category (6Ms)

BUSINESS DOCUMENTS:
RFI  → early inquiry; no commitment
RFP  → formal proposal + pricing solicitation
SOW  → scope + deliverables + timeline + payment for one engagement
SLA  → performance commitments (uptime %, response time, penalties)
NDA  → confidentiality of information shared between parties
BAA  → required when vendor creates/receives/maintains/transmits PHI
MSA  → overarching framework; individual work governed by SOWs

SELECTION SEQUENCE:
Needs → Gap → RFI → RFP → Weighted scoring → Demo → Site visit →
Reference check → Contract (SOW+SLA) → Acceptance sign-off

TESTING SEQUENCE:  Unit → Integration → System → UAT → Acceptance
Unit     → single component in isolation
Integration → data flow between components (CPOE→Pharmacy→eMAR)
System   → end-to-end in production-like environment
UAT      → end-user validation of clinical workflows
Stress   → performance under peak/extreme load
Regression → new changes didn't break existing functionality
Acceptance → contractual sign-off (SOW deliverables met)

BC/DR:
RTO = max acceptable downtime (hours systems can be down)
RPO = max acceptable data loss (expressed as time)
Hot site  = fully operational; fastest RTO (minutes-hours)
Warm site = partially equipped; medium RTO (hours-days)
Cold site = physical space only; slowest RTO (days-weeks)
BCP = keep operations running during disruption
DRP = restore IT systems after outage

DATA GOVERNANCE:
Data dictionary  → defines elements: name, owner, valid values, relationships
MDM              → single authoritative source for shared data entities
Data steward     → domain-level quality owner
Data lifecycle   → create → store → use → retain → archive → destroy
NIST 800-88      → required for secure media destruction/disposal

CIA TRIAD:
Confidentiality → authorized access only
Integrity       → accurate, unaltered, tamper-evident
Availability    → accessible when needed by authorized users

HIPAA SAFEGUARDS:
Administrative → policies, training, risk assessment, sanctions
Physical       → server room locks, badge access, device controls
Technical      → encryption, audit logs, auto-logoff, MFA, access controls

ACCESS CONTROLS:
RBAC           → role-based (most common in healthcare)
Least privilege → minimum necessary access for job function
Recertification → periodic review of access permissions
Termination    → IMMEDIATE revocation upon employment end
BYOD           → guest VLAN segmentation (isolate from clinical network)

SECURITY ROLES:
CISO          → security strategy; cyber risk; ePHI technical controls
Privacy Officer → HIPAA Privacy Rule; PHI disclosure; breach investigation
Compliance Officer → regulatory compliance; OIG 7 elements
ISO            → day-to-day security operations

EVM:
CPI = EV ÷ AC  (<1 = over budget; >1 = under budget)
SPI = EV ÷ PV  (<1 = behind schedule; >1 = ahead of schedule)

CHANGE MANAGEMENT (TECHNICAL):
Standard  → pre-approved, low-risk, repeatable (monthly patch)
Normal    → full CAB review and risk assessment
Emergency → urgent patient safety; expedited auth; retroactive review
CAB       → reviews, approves, and schedules changes
Change freeze → no non-emergency changes during high-risk windows
Config drift → production diverges from approved baseline

TRAINING METHODS:
CBL/eLearning → self-paced; scalable; asynchronous; concept learning
Classroom     → interactive; complex workflows; Q&A
T3 (Train-the-Trainer) → multiplies training capacity for large deployments
ATE (At-the-Elbow)    → go-live week; point-of-care; real-time coaching
Superuser model        → empowered peer coaches; ongoing post-go-live
Job aids       → quick reference cards; high-frequency tasks
Just-in-time training = 2–4 weeks before go-live (avoids knowledge decay)
```
