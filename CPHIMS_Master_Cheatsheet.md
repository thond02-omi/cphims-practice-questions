# CPHIMS Master Cheatsheet — All Domains

---

## Exam Quick Facts

```
115 displayed MCQs / 100 scored | 4 options | Single best answer | 2 hours
Passing score: scaled 200-800, with 600 required to pass
Cognitive levels: RE (Recall) · AP (Application) · AN (Analysis)
Domain weights on scored items: Domain1=25%  Domain2=20%  Domain3=30%  Domain4=25%
Delivery: Pearson VUE (test center) or OnVUE (online proctored)
Timing target: 115 items / 120 minutes ≈ 63 seconds per displayed item
```

Note: HIMSS' current CPHIMS webpage lists 115 questions with 100 scored; the May 1, 2024 Candidate Handbook PDF still lists 100 questions. Train for the tighter 115-item pacing and verify final logistics in the ATT email.

---

## 1 — Healthcare Acronyms

| Acronym | Full Name |
|---|---|
| ACO | Accountable Care Organization |
| ADT | Admission, Discharge, Transfer |
| ATE | At-the-Elbow support |
| BAA | Business Associate Agreement |
| BCMA | Barcode Medication Administration |
| BCP | Business Continuity Plan |
| BI | Business Intelligence |
| BYOD | Bring Your Own Device |
| CAB | Change Advisory Board |
| CCD | Continuity of Care Document |
| C-CDA | Consolidated Clinical Document Architecture |
| CDM | Charge Description Master |
| CDR | Clinical Data Repository |
| CDS | Clinical Decision Support |
| CISO | Chief Information Security Officer |
| CIO | Chief Information Officer |
| CMI | Case Mix Index |
| CMIO | Chief Medical Informatics Officer |
| CNIO | Chief Nursing Informatics Officer |
| CPOE | Computerized Provider Order Entry |
| DRP | Disaster Recovery Plan |
| EHR | Electronic Health Record |
| EMR | Electronic Medical Record |
| EMPI | Enterprise Master Patient Index |
| FQHC | Federally Qualified Health Center |
| HIE | Health Information Exchange |
| HIM | Health Information Management |
| HIS | Healthcare Information System |
| HIPAA | Health Insurance Portability and Accountability Act |
| HITECH | Health Information Technology for Economic and Clinical Health Act |
| IDN | Integrated Delivery Network |
| IDS/IPS | Intrusion Detection / Prevention System |
| IoMT | Internet of Medical Things |
| IS | Information System |
| LIS | Laboratory Information System |
| LTC | Long-Term Care |
| MDM | Master Data Management |
| MFA | Multi-Factor Authentication |
| mHealth | Mobile Health |
| MPI | Master Patient Index |
| NDA | Non-Disclosure Agreement |
| NPI | National Provider Identifier |
| ONC | Office of the National Coordinator for Health IT |
| PACS | Picture Archiving and Communication System |
| PHI | Protected Health Information |
| PHR | Personal Health Record |
| PI | Promoting Interoperability (formerly Meaningful Use) |
| PMO | Project Management Office |
| RBAC | Role-Based Access Control |
| RCM | Revenue Cycle Management |
| RFI | Request for Information |
| RFP | Request for Proposal |
| RFQ | Request for Quote |
| RIS | Radiology Information System |
| ROI | Return on Investment |
| RPM | Remote Patient Monitoring |
| RPO | Recovery Point Objective |
| RTO | Recovery Time Objective |
| SDLC | Systems Development Life Cycle |
| SIEM | Security Information and Event Management |
| SLA | Service Level Agreement |
| SNF | Skilled Nursing Facility |
| SOW | Statement of Work |
| SSO | Single Sign-On |
| TCO | Total Cost of Ownership |
| UAT | User Acceptance Testing |
| VPN | Virtual Private Network |
| WBS | Work Breakdown Structure |

---

## 2 — Coding and Terminology Standards

| Standard | Purpose | Setting |
|---|---|---|
| **ICD-10-CM** | Diagnosis coding | All care settings |
| **ICD-10-PCS** | Inpatient procedure coding | Inpatient hospital only |
| **CPT** | Outpatient / physician procedure coding | Outpatient, physician office |
| **HCPCS** | DME, supplies, drugs, non-CPT services | All settings |
| **DRG** | Inpatient payment grouping | Inpatient hospital (Medicare) |
| **SNOMED CT** | Clinical concepts and findings in EHR | Clinical documentation |
| **LOINC** | Lab tests, vitals, clinical observations | Labs, diagnostics |
| **RxNorm** | Drug names, doses, routes, forms | Pharmacy, medication lists |
| **NDC** | Drug product identification (specific product) | Pharmacy, claims |
| **NPI** | National provider identifier | All claim transactions |

---

## 3 — Integration Standards

| Standard | Description |
|---|---|
| **HL7 v2.x** | Traditional pipe-delimited messaging (ADT, orders, results); most widely deployed |
| **HL7 FHIR** | RESTful API standard; uses JSON/XML; central to ONC standardized API certification criteria |
| **DICOM** | Medical imaging format and communication |
| **C-CDA** | Structured clinical documents (discharge summary, progress notes, care transition) |
| **IHE profiles** | Implementation frameworks layered on HL7 / DICOM (XDS, PIX/PDQ, XCA) |
| **Direct Protocol** | Secure provider-to-provider message transport (directed HIE exchange) |
| **SMART on FHIR** | Standard for third-party app integration with EHRs |

---

## 4 — SDLC and Process Improvement Frameworks

### SDLC Phases
```
1. Planning / Initiation    → scope, feasibility, resources
2. Analysis / Requirements  → user requirements, current-state analysis
3. Design                   → architecture, workflows, interfaces
4. Build / Development      → configuration, coding
5. Testing                  → unit → integration → system → UAT
6. Implementation / Go-live → training, data migration, cutover
7. Maintenance              → support, upgrades, optimization
```

### SDLC Models
```
Waterfall → sequential; each phase completed before next begins
Agile     → iterative sprints; continuous user feedback
Spiral    → risk-driven iterations; suits complex projects
RAD       → rapid prototyping; fast early user feedback
```

### DMAIC (Six Sigma)
```
D — Define   → problem, scope, goals, stakeholders
M — Measure  → baseline data, current performance
A — Analyze  → root cause identification
I — Improve  → design and test solutions
C — Control  → sustain improvements; ongoing monitoring
```

### PDCA (Quality Improvement)
```
P — Plan  → identify opportunity; develop change
D — Do    → implement on small scale (pilot)
C — Check → evaluate results vs. objective
A — Act   → standardize or cycle again
```

---

## 5 — HIPAA Safeguards

```
ADMINISTRATIVE:
  - Written information security policies
  - Workforce training and awareness
  - Annual security risk assessment (required)
  - Sanction policy for violations
  - Designated security officer

PHYSICAL:
  - Facility access controls (badge readers, locks)
  - Workstation use and security policies
  - Device and media controls (disposal, reuse)
  - Visitor access logs

TECHNICAL:
  - Access controls (RBAC, least privilege)
  - Audit logs and activity tracking
  - Encryption (at rest and in transit)
  - Automatic session timeout / screen lock
  - Integrity controls (data hasn't been altered)
  - Authentication (MFA recommended)
```

---

## 6 — Testing Types

| Test | Tests What | When |
|---|---|---|
| **Unit** | Single component in isolation | During build |
| **Integration** | Component-to-component interfaces | After unit testing |
| **System** | End-to-end in a production-like environment | Before UAT |
| **UAT (User Acceptance Test)** | Meets user requirements; user sign-off | Before go-live |
| **Acceptance** | Meets contractual deliverables | Formal sign-off |
| **Regression** | New changes haven't broken existing functions | After any change |
| **Stress / Load** | Performance under high volume | Before go-live for high-traffic systems |

---

## 7 — Business Documents

| Document | Use |
|---|---|
| **RFI** | Gather vendor information early; no commitment |
| **RFP** | Formal solicitation for proposal + pricing |
| **RFQ** | Specific pricing for defined goods/services |
| **SOW** | Scope, deliverables, timeline, payment terms |
| **SLA** | Performance commitments (uptime, response time) |
| **NDA** | Protects confidential information between parties |
| **BAA** | Required HIPAA contract with any vendor handling PHI |
| **MSA** | Master Services Agreement; SOWs issued under it |

---

## 8 — BC/DR Concepts

```
BCP (Business Continuity Plan) → keep operations running during disruption
DRP (Disaster Recovery Plan)   → restore IT systems after outage

RTO (Recovery Time Objective)  → max acceptable system downtime
RPO (Recovery Point Objective) → max acceptable data loss (expressed as time)

Hot site  → fully operational backup; fastest RTO (most expensive)
Warm site → partially equipped; intermediate RTO and cost
Cold site → physical space only; slowest RTO (least expensive)

Downtime procedures → manual workflows used when systems are unavailable
Failover → automatic switchover to backup system
```

---

## 9 — Key Metrics Formulas

```
ADC (Average Daily Census)   = Total patient days ÷ Days in period
ALOS (Avg Length of Stay)    = Total patient days ÷ Total discharges
Bed Occupancy Rate           = (ADC ÷ Licensed beds) × 100
Bed Turnover Rate            = Total discharges ÷ Total beds
ROI                          = (Net benefit ÷ Total cost) × 100
Medication Error Rate        = Errors ÷ Total doses × 1,000
BCMA Scan Rate               = Scanned eligible doses ÷ Eligible doses administered × 100
Common BCMA target           = ≥ 95% in many orgs, but exact threshold is policy-specific
CMI (Case Mix Index)         = Average DRG weight (↑ = more complex)
```

---

## 10 — Clinical / Quality Metrics

| Metric | Per 1,000 |
|---|---|
| CLABSI | Per 1,000 central line days |
| CAUTI | Per 1,000 catheter days |
| Falls | Per 1,000 patient days |
| Pressure injuries | Per 1,000 patient days |
| Medication errors | Per 1,000 doses administered |

---

## 11 — Key Frameworks

### Five Rights of CDS (Osheroff)
```
1. Right information  (evidence-based)
2. Right person       (correct clinician role)
3. Right format       (alert, order set, infobutton)
4. Right channel      (EHR, mobile, message)
5. Right time         (point of decision-making)
```

### BCMA Five Rights
```
1. Right Patient  2. Right Drug  3. Right Dose
4. Right Route    5. Right Time
```

### Triple / Quadruple Aim
```
Triple Aim    → improve patient experience
              → improve population health
              → reduce per-capita cost
Quadruple Aim → + improve clinician well-being
```

### RACI
```
R — Responsible (does the work)
A — Accountable (ultimately answerable)
C — Consulted   (provides input)
I — Informed    (kept up to date)
```

### Kotter's 8-Step Change Model
```
1. Create urgency         5. Empower action
2. Build coalition        6. Short-term wins
3. Develop vision         7. Sustain acceleration
4. Communicate vision     8. Anchor in culture
```

### ADKAR (Prosci Change Model)
```
A — Awareness  (of the need to change)
D — Desire     (to support the change)
K — Knowledge  (of how to change)
A — Ability    (to implement the change)
R — Reinforcement (to sustain the change)
```

### MoSCoW Prioritization
```
Must have    → required for go-live
Should have  → important but not critical initially
Could have   → nice-to-have if time/budget allows
Won't have   → explicitly deferred to future
```

---

## 12 — Analytics Maturity

```
Descriptive  → What happened?         (report, dashboard)
Diagnostic   → Why did it happen?     (root cause analysis)
Predictive   → What will happen?      (risk score, ML model)
Prescriptive → What should we do?     (automated action, recommendation)
```

---

## 13 — Cloud Models

```
IaaS → Infrastructure: virtual machines, storage (AWS EC2)
PaaS → Platform: development/deployment environment
SaaS → Software: fully hosted application (cloud EHR)

Public cloud  → shared multi-tenant infrastructure
Private cloud → dedicated to one organization
Hybrid cloud  → mix of public and private (most common in healthcare)
```

---

## 14 — Access Control Principles

```
RBAC         → access based on job role
Least privilege → minimum access needed for job function
Separation of duties → no single person controls entire process
Access review → periodic recertification of user access
Termination  → immediate access revocation on employment end
MFA          → something you know + something you have/are
```

---

## 15 — HIPAA Key Numbers

```
18 PHI identifiers → must remove ALL for Safe Harbor de-identification
Breach notification:
  - Individuals: within 60 days of discovery
  - HHS: within 60 days (or annual report if <500 individuals)
  - Media: within 60 days IF ≥500 individuals in a single state
PHI retention: varies by state law; typically 6–10 years
Security risk assessment: required annually
```

---

## 16 — HIE Exchange Types

```
Directed exchange    → provider-to-provider (secure email); point-to-point
Query-based exchange → look up unknown patient records (emergency use)
Consumer-mediated    → patient controls and shares their own data
```

---

## 17 — Project / Portfolio Management

```
Project     → unique temporary effort with defined scope
Program     → group of related projects
Portfolio   → all projects/programs prioritized across the organization
PMO         → centralized PM standards and governance
WBS         → hierarchical decomposition of all project work
RACI        → clarifies roles on deliverables
Risk Register → logs risks: probability, impact, mitigation
Change Control → formal approval for any scope, schedule, cost change
Scope creep → uncontrolled scope expansion without change control

EVM metrics:
  CPI (Cost Performance Index)     > 1.0 = under budget
  SPI (Schedule Performance Index) > 1.0 = ahead of schedule
```

---

## 18 — Common Exam Traps

| Trap | Correct Direction |
|---|---|
| EMR vs EHR | EMR = single provider, not shared; EHR = shareable across orgs |
| RFI vs RFP | RFI = early info gathering; RFP = formal proposal with pricing |
| RTO vs RPO | RTO = downtime tolerance; RPO = data loss tolerance |
| DMAIC vs PDCA | DMAIC = Six Sigma / data-driven; PDCA = iterative quality cycles |
| Directed vs Query HIE | Directed = push to known recipient; Query = pull unknown records |
| Unit vs Integration test | Unit = one component; Integration = between two components |
| ADC formula | Patient days ÷ days in period (not discharges) |
| PHI Safe Harbor | Remove ALL 18 identifiers (not just names) |
| BAA trigger | Any vendor who creates, receives, maintains, or transmits PHI |
| Alert fatigue fix | Governance + audit override rates; reduce volume (not hard-stops alone) |
