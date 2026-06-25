# Domain 1: Healthcare and Technology Environments — 25%

> **Exam weight:** ~25 scored questions out of 100
> **Cognitive mix:** Recall (RE) · Application (AP) · Analysis (AN) — tilts toward AP/AN
> **Exam tip:** Questions test whether you can match an organizational type, law, technology, or HIE method to a scenario. Always identify the care setting, the stakeholder, and the compliance constraint first.

---

## A. Healthcare Environment

---

### Task A.1 — Types of Healthcare Organizations
> *Articulate characteristics and services of different types of healthcare organizations (e.g., hospitals, clinics, ambulatory centers, community health organizations, healthcare payers, regulators, research and academic)*

#### Care Settings

| Organization Type | Key Characteristics | HIT Relevance |
|---|---|---|
| **Acute care hospital** | Inpatient, 24/7, emergency and surgical services | Full EHR, CPOE, eMAR, PACS required |
| **Ambulatory / Outpatient** | No overnight stay, preventive and minor procedures | Scheduling, billing, patient portal |
| **Long-term Care (LTC) / SNF** | Extended stays, skilled nursing, rehabilitation | MDS (Minimum Data Set), care coordination HIT |
| **FQHC** | Federally qualified; sliding-fee scale; serves underserved populations; HRSA-funded | UDS reporting, care gap analytics |
| **Behavioral Health** | Mental health, substance use disorder (SUD) treatment | 42 CFR Part 2 data segmentation required |
| **Home Health / Hospice** | Post-discharge in-patient's home or end-of-life | OASIS documentation, remote monitoring |
| **Payer / Health Plan** | Finances services, manages risk, adjudicates claims | Claims processing, formulary management |
| **Regulator** | Sets standards, licenses, enforces compliance | CMS, FDA, ONC, State Health Departments |
| **Research / Academic Medical Center (AMC)** | Clinical trials, GME, tertiary/quaternary care | IRB systems, research data management |

#### Care Levels

| Level | Description | Example |
|---|---|---|
| **Primary care** | First-contact, preventive, chronic disease management | PCP, family medicine |
| **Specialty care** | Referred for specific condition | Cardiologist, oncologist |
| **Tertiary care** | Highly specialized, referral-only | Stroke center, burn unit |
| **Quaternary care** | Experimental, cutting-edge — rarest level | Transplant, complex surgical |

#### Organizational Models

- **IDN (Integrated Delivery Network)** → single ownership of multiple facility types (hospital + clinic + SNF)
- **ACO (Accountable Care Organization)** → contractual coalition of separate providers sharing quality/cost accountability under CMS; not common ownership
- **PCMH (Patient-Centered Medical Home)** → coordinated, team-based primary care; recognized by NCQA
- **HMO** → gatekeeper PCP required before specialist referral; lower premium
- **PPO** → direct specialist access without referral; higher out-of-pocket cost
- **Capitation** → fixed monthly payment per enrolled member regardless of services used (value-based)
- **Fee-for-Service (FFS)** → payment per individual service rendered (volume-based)

> **Exam tip:** ACO vs IDN is a common distractor. ACO = shared accountability, separate ownership. IDN = common ownership. PCMH = NCQA recognition for primary care coordination.

---

### Task A.2 — Interrelationships Within and Across Healthcare Organizations
> *Articulate characteristics of interrelationships within and across healthcare organizations (e.g., health information exchange, public, private, continuity of care)*

#### HIE — Three Exchange Types

| Type | How It Works | When Used |
|---|---|---|
| **Directed exchange** | Provider-to-provider: secure point-to-point (like encrypted email) | Sending records to a known recipient |
| **Query-based exchange** | Provider queries a network for unknown patient records | Emergency — no prior relationship with patient |
| **Consumer-mediated** | Patient collects, controls, and shares own health data | Patient-directed sharing via app or PHR |

#### HIE Governance Models

| Model | Description |
|---|---|
| **Public HIE** | Government-funded; serves regional/state population |
| **Private HIE** | Operated by a single health system for internal exchange |
| **Community HIE** | Multi-stakeholder, defined geographic region |

#### Continuity of Care

- **Care coordination** → ongoing organization of care activities across providers and settings
- **Transition of care** → patient movement between settings (hospital → SNF → home); highest-risk period for errors
- **C-CDA Transition of Care document** → ONC-required structured document exchanged at discharge or referral
- **CCD (Continuity of Care Document)** → predecessor to C-CDA; HL7 CDA-based

#### Organizational Integration

- **Horizontal integration** → merging same-type organizations (hospital acquires hospital)
- **Vertical integration** → acquiring organizations along the care continuum (hospital acquires SNF + home health)

> **Exam tip:** Query-based exchange is for emergencies where the recipient is unknown. Directed exchange is for known recipients. Consumer-mediated puts the patient in control.

---

### Task A.3 — Roles of HIT Professionals
> *Describe the roles and responsibilities of healthcare information and management systems professionals within the organizational structures in which they work*

#### Leadership Roles

| Role | Primary Responsibility |
|---|---|
| **CIO** (Chief Information Officer) | IT strategy, budget, governance, board-level alignment |
| **CMIO** (Chief Medical Informatics Officer) | Physician bridge to IT; EHR adoption, clinical workflow optimization |
| **CNIO** (Chief Nursing Informatics Officer) | Nursing workflow optimization; nursing input to EHR design |
| **CISO** (Chief Information Security Officer) | Security policy, cybersecurity risk, regulatory compliance |
| **Privacy Officer** | HIPAA Privacy Rule compliance; PHI disclosure oversight; breach response |
| **Compliance Officer** | Regulatory compliance monitoring; OIG program elements |

#### Operational Roles

| Role | Primary Responsibility |
|---|---|
| **HIT Analyst / Clinical Informaticist** | Requirements, configuration, workflow analysis, CDS build |
| **Implementation Specialist** | Go-live readiness, training, at-the-elbow support |
| **Project Manager** | Scope, schedule, budget, risk, stakeholder communication |
| **Help Desk Tier 1** | Password resets, basic troubleshooting, ticket logging |
| **Help Desk Tier 2** | Technical analysis, escalated issues |
| **Help Desk Tier 3** | Vendor escalation, engineering |

#### IT Organizational Structures

| Structure | Description | Trade-off |
|---|---|---|
| **Centralized IT** | Single IT department serves all facilities | High standardization; low local responsiveness |
| **Decentralized IT** | Each facility manages its own IT | High local control; poor standardization |
| **Matrix IT** | Enterprise standards + local support staff | Balances both; dual reporting lines |

> **Exam tip:** CMIO leads physician EHR adoption. CNIO leads nursing workflow. CISO handles security incidents. Privacy Officer handles HIPAA Privacy Rule violations and PHI disclosure complaints.

---

### Task A.4 — Laws, Regulations, and Accreditation
> *Recognize the impact of commonly accepted laws, regulations, accreditation and other state and local rules that govern critical healthcare information and systems management services, including privacy, safety and security (e.g., privacy regulations, pharmacy, environments of care, patient rights)*

#### Key Federal Laws

| Law | Year | Focus |
|---|---|---|
| **HIPAA** | 1996 | PHI privacy, ePHI security, breach notification |
| **HITECH** | 2009 | Strengthened HIPAA; tiered penalties; extended to BAs; Meaningful Use incentives |
| **ACA** | 2010 | Value-based care; ACOs; coverage expansion |
| **21st Century Cures Act** | 2016 | Information blocking prohibition; ONC API requirements for certified HIT |
| **Stark Law** | 1989 | Prohibits physician self-referral for designated health services billed to Medicare/Medicaid |
| **Anti-Kickback Statute (AKS)** | 1972 | Prohibits any remuneration to induce/reward referrals or purchases under federal programs |
| **EMTALA** | 1986 | Emergency screening and stabilization regardless of insurance status or ability to pay |
| **42 CFR Part 2** | — | Substance use disorder records — requires separate consent; stricter than HIPAA |

> **Stark vs AKS:** Stark = physician self-referral for Medicare/Medicaid services. AKS = broader — anyone paying/receiving remuneration to induce referrals. Both can apply simultaneously.

#### HIPAA in Detail

| Component | Key Rule |
|---|---|
| **Privacy Rule** | Governs use and disclosure of PHI; minimum necessary standard applies |
| **Security Rule** | Protects ePHI; requires administrative, physical, and technical safeguards |
| **Breach Notification Rule** | Individual + HHS notification required; media notification if ≥500 in a state/jurisdiction |
| **BAA** | Required when vendor creates, receives, maintains, or transmits PHI on behalf of a covered entity |

**PHI — 18 Identifiers** (must remove for Safe Harbor de-identification):
Names · Dates (except year) · Phone · Fax · Email · SSN · MRN · Health plan # · Account # · Certificate # · VIN · Device serial # · Web URLs · IP addresses · Biometrics · Full-face photos · Geographic data smaller than state · Any unique identifier

**De-identification methods:**
- **Safe Harbor** → remove all 18 identifiers; state of residence is NOT one of the 18
- **Expert Determination** → qualified statistician certifies re-identification risk is very small

**HIPAA Patient Rights:**
- Right to access/copy their PHI (within 30 days)
- Right to amend their record
- Right to an accounting of disclosures
- Right to request restrictions on disclosures
- Right to confidential communications
- Right to file complaints with HHS OCR

#### Pharmacy Regulations

| Regulation | Scope |
|---|---|
| **DEA (Drug Enforcement Administration)** | Controls prescribing and dispensing of Schedule II–V controlled substances; e-prescribing for controlled substances (EPCS) allowed under DEA rules |
| **State pharmacy boards** | License pharmacists; regulate dispensing practices; may exceed federal minimums |
| **USP standards** | Drug compounding, packaging, labeling safety standards |
| **Drug formulary management** | Payer-managed lists of covered drugs; affects prescribing systems and CDS |

#### Environments of Care / Patient Rights

- **TJC Environment of Care standards** → safe physical environment; medical equipment management; utilities; fire safety; security
- **CMS Conditions of Participation (CoP)** → hospitals must meet CoP to receive Medicare/Medicaid reimbursement; includes patient rights standards
- **Patient Rights (CMS CoP)** → informed consent, right to refuse treatment, privacy, access to medical records, freedom from restraint/seclusion

#### Accreditation Bodies

| Body | Scope |
|---|---|
| **The Joint Commission (TJC)** | Hospitals, health systems — most widely recognized |
| **NCQA** | Health plans, physician practices (PCMH recognition) |
| **CARF** | Rehabilitation and behavioral health facilities |
| **DNV GL** | Hospital accreditation; ISO 9001-based quality management |
| **URAC** | Specialty programs, utilization management, telehealth |

#### ONC Certification

- Required for EHR systems to qualify for CMS Promoting Interoperability incentive payments
- Certified Health IT must meet ONC criteria including FHIR API requirements from the 21st Century Cures Act

> **Exam tip:** Information blocking is a violation of the 21st Century Cures Act — not HIPAA. The vendor must provide a specific, documented exception (security, privacy, infeasibility) — a vague claim does not qualify.

---

### Task A.5 — Healthcare Technology Trends
> *Evaluate trends in healthcare technology and implement strategies to improve patient outcomes (e.g., telemedicine, patient portals, wearable devices, population health)*

#### Technology Trends

| Trend | Description | Clinical Impact |
|---|---|---|
| **Telehealth / Telemedicine** | Remote care via video, phone, or asynchronous messaging | Expands rural access; reduces no-shows |
| **Patient Portal** | Tethered to EHR; self-service messaging, results, scheduling | Improves engagement and adherence |
| **Remote Patient Monitoring (RPM)** | Continuous post-discharge data collection via connected devices | Reduces CHF/COPD/hypertension readmissions |
| **IoMT (Internet of Medical Things)** | Connected devices — pumps, monitors, glucometers, wearables | Enables real-time bedside and remote monitoring |
| **mHealth Apps** | Symptom tracking, medication reminders, chronic disease self-management | Patient self-management between visits |
| **AI / Machine Learning** | Predictive models, diagnostic imaging analysis, NLP on clinical notes | Faster diagnosis; enhanced CDS; risk scoring |
| **Precision Medicine** | Genomics-guided, personalized treatment plans | More targeted, effective therapy selection |
| **Blockchain** | Decentralized, tamper-proof ledger for health data sharing | Consent management; supply chain integrity |
| **Population Health Management** | Risk stratification, care gap identification, proactive outreach | Reduces preventable admissions; improves outcomes |
| **SDOH Integration** | Housing, food, transportation, income data in care planning | Addresses root causes of health disparities |

#### Population Health Frameworks

| Framework | Components |
|---|---|
| **Triple Aim (IHI)** | (1) Improve patient experience · (2) Improve population health · (3) Reduce per-capita cost |
| **Quadruple Aim** | Triple Aim + (4) Improve clinician well-being and reduce burnout |
| **Quintuple Aim** | Quadruple Aim + (5) Advance health equity |

#### Value-Based Payment Models

| Model | Description |
|---|---|
| **ACO / Shared Savings** | Providers share in savings below cost benchmark |
| **Bundled Payments** | Fixed payment for an episode of care (e.g., hip replacement + 90 days post-acute) |
| **Capitation** | Fixed per-member-per-month regardless of services used |
| **Pay for Performance (P4P)** | Bonuses/penalties tied to quality metric achievement |
| **MACRA / MIPS** | CMS merit-based incentive payment system for physicians |

- **Risk stratification** → classify patients by risk level (low / moderate / high) using claims, clinical, and SDOH data to target proactive care management

> **Exam tip:** RPM reduces readmissions. Population health requires data aggregation + risk stratification + proactive outreach — all three components. SDOH integration addresses non-clinical factors that drive 60–80% of health outcomes.

---

## B. Technology Environment

---

### Task B.1 — Healthcare Applications
> *Articulate characteristics of applications commonly used in healthcare (e.g., clinical, administrative, financial, consumer, business intelligence)*

#### Clinical Applications

| Application | Full Name | Function |
|---|---|---|
| **EHR** | Electronic Health Record | Comprehensive clinical record; shareable across organizations |
| **EMR** | Electronic Medical Record | Single-provider digital record; not designed for external sharing |
| **CPOE** | Computerized Provider Order Entry | Electronic medication, lab, imaging orders; embeds dose checking + drug-allergy alerts |
| **CDS** | Clinical Decision Support | Alerts, reminders, order sets, protocols, infobuttons |
| **eMAR** | Electronic Medication Administration Record | Documents medication administration at bedside; integrates with BCMA |
| **BCMA** | Barcode Medication Administration | Verifies 5 Rights at bedside via barcode scan |
| **PACS** | Picture Archiving and Communication System | Stores and displays medical images (DICOM) |
| **LIS** | Laboratory Information System | Lab orders, specimen tracking, results delivery |
| **RIS** | Radiology Information System | Radiology scheduling, workflow, report management |
| **Pharmacy IS** | Pharmacy Information System | Medication dispensing, verification, inventory |
| **Anesthesia IS** | Anesthesia Information System | Perioperative documentation and monitoring |

**EHR vs EMR vs PHR:**

| Feature | EMR | EHR | PHR |
|---|---|---|---|
| Scope | Single provider | Across multiple providers | Patient-owned |
| Portability | Not designed for sharing | Designed to share | Patient controls sharing |
| Standard purpose | Clinical care at one practice | Coordinated care across organizations | Patient self-management |

#### Administrative Applications

| Application | Function |
|---|---|
| **ADT** | Admission, Discharge, Transfer — patient registration and movement; triggers HL7 ADT messages |
| **MPI** | Master Patient Index — unique patient identity within one facility |
| **EMPI** | Enterprise MPI — probabilistic/deterministic matching across multiple facilities |
| **Scheduling** | Appointment management (inpatient/outpatient/procedure) |
| **HIM** | Health Information Management — coding, Release of Information (ROI), record completion |

#### Financial Applications

| Application | Function |
|---|---|
| **Revenue Cycle Management (RCM)** | End-to-end: charge capture → coding → claim submission → payment posting → collections |
| **CDM** | Charge Description Master — comprehensive list of all billable items and charge codes |
| **Claims Processing** | Payer-side adjudication of submitted claims; generates EOB (Explanation of Benefits) |

#### Consumer Applications

- **Patient portal** → tethered to EHR; patient views results, messages provider, schedules, manages medications
- **PHR** → patient-controlled, portable, not tied to one provider
- **mHealth apps** → symptom tracking, medication reminders, chronic disease management

#### Business Intelligence / Analytics

- **Data warehouse** → consolidated repository integrating clinical, financial, administrative data
- **Data mart** → subject-specific subset of a data warehouse (e.g., quality mart, finance mart)
- **Dashboard** → real-time KPI visualization for operational monitoring
- **Population health platform** → risk stratification, care gap identification, cohort management
- **Predictive analytics** → ML models forecasting outcomes (readmissions, deterioration)

> **Exam tip:** CPOE does not administer medications — eMAR + BCMA do. PACS stores images; RIS manages radiology workflow. EMPI solves multi-facility duplicate patient records. CDM ≠ MPI.

---

### Task B.2 — Technology Infrastructure
> *Articulate characteristics of technology infrastructure that support the healthcare environment (e.g., network, communications, data integration, privacy and security)*

#### Network Infrastructure

| Component | Description |
|---|---|
| **LAN** | Local Area Network — within a building or campus |
| **WAN** | Wide Area Network — connects geographically separate sites |
| **VPN** | Virtual Private Network — encrypted tunnel over public internet for remote access |
| **VLAN** | Virtual LAN — logical network segmentation within a physical network |
| **Firewall** | Controls inbound/outbound traffic at network perimeter |
| **DMZ** | Demilitarized Zone — isolated segment for public-facing servers (e.g., patient portal) |
| **Wireless / Wi-Fi** | Enables mobile device connectivity; critical for BCMA, bedside tablets |

#### Integration Standards

| Standard | Purpose |
|---|---|
| **HL7 v2.x** | Traditional pipe-delimited messaging: ADT, orders, results, lab, pharmacy |
| **HL7 FHIR** | Modern RESTful API using JSON/XML; required by 21st Century Cures Act for certified EHRs |
| **DICOM** | Medical imaging format and communications standard |
| **C-CDA** | Consolidated Clinical Document Architecture — structured documents for care transitions |
| **IHE profiles** | Implementation frameworks specifying how to use existing standards for specific workflows (XDS, PIX/PDQ, SMART on FHIR) |
| **SMART on FHIR** | Standard enabling authorized third-party apps to query EHRs using OAuth 2.0 |
| **Direct Protocol** | Secure, encrypted point-to-point messaging (directed exchange) |

#### Interoperability Levels

| Level | Description |
|---|---|
| **Foundational** | Data can be received (basic connectivity) |
| **Structural** | Data follows a common format/standard (HL7, DICOM) |
| **Semantic** | Shared meaning via standard terminology (LOINC, SNOMED CT, RxNorm) |
| **Organizational** | Governance, policy, and workflow alignment enabling end-to-end exchange |

#### Data Integration Components

- **Interface engine** → middleware translating/routing messages between systems (Mirth Connect, Rhapsody, Ensemble)
- **API** → real-time data exchange; FHIR endpoints for modern integration
- **ETL (Extract, Transform, Load)** → batch pipeline populating data warehouses
- **CDR (Clinical Data Repository)** → centralized clinical data store serving multiple applications

#### Security Infrastructure

| Control | Description |
|---|---|
| **Encryption at rest** | Protects data on storage media (laptops, drives, servers) |
| **Encryption in transit** | Protects data during network transmission (TLS/SSL) |
| **MFA** | Multi-Factor Authentication — two or more verification factors |
| **SSO** | Single Sign-On — one credential for multiple applications |
| **PKI** | Public Key Infrastructure — manages digital certificates for encryption and authentication |
| **SIEM** | Security Information and Event Management — centralized log collection, correlation, real-time alerting |
| **IDS / IPS** | Intrusion Detection / Prevention System |
| **Zero Trust** | Never trust, always verify — verify every user and device regardless of location |

#### Cloud Service Models

| Model | Who Manages What | Healthcare Example |
|---|---|---|
| **IaaS** | Provider: hardware; Customer: OS + apps | Virtual servers for analytics |
| **PaaS** | Provider: hardware + OS; Customer: apps | Development environment |
| **SaaS** | Provider: everything; Customer: uses app | Cloud EHR (Epic on Azure, Oracle Health) |
| **Private cloud** | Dedicated to one organization | On-premise virtualized infrastructure |
| **Hybrid cloud** | Mix of private + public | Most common in healthcare — clinical on private, analytics on public |

> **Exam tip:** HL7 FHIR + SMART on FHIR = modern third-party app integration. HL7 v2.x = legacy internal messaging. DICOM = imaging only. Encryption at rest ≠ encryption in transit — they solve different problems. SaaS = vendor manages everything including updates.

---

## Domain 1 — Quick Reference Cheatsheet

```
ORGANIZATION TYPES:
Acute care    → inpatient, 24/7, emergency/surgical
Ambulatory    → outpatient, no overnight stay
LTC / SNF     → extended care, skilled nursing, rehabilitation
FQHC          → federal grants, sliding-fee, underserved populations
ACO           → separate organizations, shared CMS accountability
IDN           → common ownership of multiple facility types
PCMH          → NCQA-recognized coordinated primary care model
AMC           → research + teaching + tertiary/quaternary care

PAYMENT MODELS:
FFS           → payment per service (volume-based)
Capitation    → fixed per-member-per-month (risk to provider)
Bundled       → fixed payment for episode of care + post-acute period
P4P / MIPS    → bonus/penalty based on quality metric performance

KEY FEDERAL LAWS:
HIPAA         → PHI privacy (18 identifiers); ePHI security; breach notification
HITECH        → tiered HIPAA penalties; extended to BAs; MU incentives
Cures Act     → bans information blocking; ONC API requirements for certified HIT
ACA           → value-based care; ACOs; coverage expansion
Stark Law     → no physician self-referral to self-owned Medicare/Medicaid services
AKS           → no remuneration (anyone) to induce federal program referrals
EMTALA        → ED must screen/stabilize regardless of ability to pay
42 CFR Part 2 → SUD records: separate consent + segmentation required

HIPAA RULES:
Privacy Rule  → PHI use/disclosure; minimum necessary
Security Rule → ePHI safeguards: administrative + physical + technical
Breach Rule   → notify individuals + HHS; media if ≥500 in jurisdiction
BAA           → required when vendor creates/receives/maintains/transmits PHI

PHI 18 IDs:   Name, DOB, SSN, MRN, address, phone, fax, email,
              health plan #, account #, cert #, VIN, device serial,
              IP address, URL, biometrics, photos, geo <state
NOT an ID:    State of residence

DE-ID METHODS:
Safe Harbor        → remove all 18 identifiers
Expert Determination → statistician certifies low re-ID risk

PATIENT RIGHTS (HIPAA):
Access/copy · Amend · Accounting of disclosures
Request restrictions · Confidential communications · Complain to OCR

ACCREDITATION:
TJC    → hospitals (most common)
NCQA   → health plans, PCMH physician practices
CARF   → rehab / behavioral health
DNV GL → ISO 9001-based hospital accreditation
URAC   → specialty programs, utilization management

HIE TYPES:
Directed exchange    → known provider-to-provider, point-to-point
Query-based exchange → unknown patient, emergency, network search
Consumer-mediated    → patient controls own data aggregation/sharing

INTEGRATION STANDARDS:
HL7 v2.x    → legacy pipe-delimited ADT/orders/results messaging
HL7 FHIR    → RESTful API, JSON/XML; Cures Act required
SMART/FHIR  → third-party app authorization (OAuth 2.0 + FHIR)
DICOM       → medical imaging format
C-CDA       → structured transition-of-care documents
Interface engine → middleware: translates + routes messages between systems
ETL          → batch: extract → transform → load into data warehouse

APPS:
CPOE  → electronic orders (not administration)
eMAR  → medication administration documentation
BCMA  → 5 Rights verification at bedside (Patient/Drug/Dose/Route/Time)
PACS  → image storage/viewing
LIS   → laboratory workflow
RIS   → radiology scheduling/workflow
ADT   → patient registration and movement (triggers HL7 messages)
EMPI  → cross-facility patient identity matching
CDM   → master list of all billable items + charge codes
EHR   → shareable across orgs; EMR = single provider only; PHR = patient-owned

CLOUD:
IaaS → customer manages OS + apps (VMs)
PaaS → customer manages apps only
SaaS → vendor manages everything (cloud EHR)
Hybrid → most common in healthcare

SECURITY:
Encryption at rest   → protects stored data (lost laptop)
Encryption in transit → protects data in motion (TLS/SSL)
MFA    → two or more authentication factors
SSO    → one credential for multiple apps
SIEM   → centralized log monitoring + real-time alerting
VPN    → encrypted tunnel over public internet

FRAMEWORKS:
Triple Aim    → patient experience + population health + per-capita cost
Quadruple Aim → + clinician well-being
SDOH          → housing, food, income, education, transportation
```
