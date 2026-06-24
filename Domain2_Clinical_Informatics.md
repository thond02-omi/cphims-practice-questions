# Domain 2: Clinical Informatics (20%)

---

## Exam-Style Focus

Expect compact clinical or operational scenarios that ask you to connect a term, metric, standard, visualization, or CDS mechanism to the safest clinical action. The exam is less about memorizing every abbreviation and more about choosing the right informatics response in the workflow.

---

### Task 2.1 — Basic Clinical Vocabulary

**Identify basic clinical vocabulary/terms frequently represented in healthcare informatics (e.g., dosage frequency, dosage routes, body systems)**

#### Concept Summary

**Dosage Frequency:**

| Abbreviation | Latin Origin | Meaning |
|---|---|---|
| **QD / QDay** | Quaque die | Once daily |
| **BID** | Bis in die | Twice daily |
| **TID** | Ter in die | Three times daily |
| **QID** | Quater in die | Four times daily |
| **Q4H / Q6H / Q8H** | — | Every 4 / 6 / 8 hours |
| **PRN** | Pro re nata | As needed |
| **QHS** | Quaque hora somni | At bedtime |
| **AC** | Ante cibum | Before meals |
| **PC** | Post cibum | After meals |
| **STAT** | Statim | Immediately |

**Dosage Routes:**

| Abbreviation | Route |
|---|---|
| **PO** | Per Os — oral |
| **IV** | Intravenous |
| **IM** | Intramuscular |
| **SQ / SubQ** | Subcutaneous |
| **SL** | Sublingual |
| **TOP** | Topical |
| **PR** | Per rectum |
| **INH** | Inhalation |
| **NG** | Nasogastric tube |
| **GT** | Gastrostomy tube |

**Body Systems (relevant to HIT documentation and coding):**

| System | Key Organs / Function |
|---|---|
| Cardiovascular | Heart, blood vessels — circulation |
| Respiratory | Lungs, airways — gas exchange |
| Gastrointestinal | Stomach, intestines — digestion |
| Musculoskeletal | Bones, muscles, joints — movement |
| Neurological | Brain, spinal cord — nervous system |
| Endocrine | Thyroid, pancreas, adrenal — hormones |
| Renal / Urinary | Kidneys, bladder — filtration |
| Integumentary | Skin, hair, nails — barrier function |
| Hematologic | Blood cells, bone marrow, coagulation |
| Reproductive | OB/GYN, urology |

**Common Clinical Abbreviations:**

| Abbreviation | Meaning |
|---|---|
| Dx | Diagnosis |
| Tx | Treatment |
| Hx | History |
| Rx | Prescription |
| NPO | Nothing by mouth |
| SOB | Shortness of breath |
| HTN | Hypertension |
| DM | Diabetes mellitus |
| CHF | Congestive heart failure |
| MI | Myocardial infarction |
| CVA | Cerebrovascular accident (stroke) |
| COPD | Chronic obstructive pulmonary disease |

#### Practice Questions

> **[RE] Q1**: A physician enters a medication order that reads "lisinopril 10mg PO QD." The dosage frequency for this order is:
> - A) Twice daily
> - B) As needed
> - C) Once daily **[CORRECT]**
> - D) At bedtime
> *Maps to: Task 2.1 (Clinical vocabulary — dosage frequency)*

> **[AP] Q2**: An alert fires in the EHR indicating that a patient with a documented penicillin allergy has an order for amoxicillin 500mg PO TID. The nurse administers the first dose without overriding the alert. Which of the Five Rights was MOST directly violated?
> - A) Right time
> - B) Right route
> - C) Right drug **[CORRECT]**
> - D) Right dose
> *Maps to: Task 2.1 / Task 2.4*

---

### Task 2.2 — Healthcare IT Vocabulary

**Identify basic healthcare IT vocabulary/terms frequently represented in healthcare informatics**

#### Concept Summary

**Core Informatics Terms:**

| Term | Definition |
|---|---|
| **EHR** | Electronic Health Record — comprehensive clinical record, shareable across organizations |
| **EMR** | Electronic Medical Record — digital record for a single provider; not designed for sharing |
| **PHR** | Personal Health Record — patient-controlled; not tied to a specific provider |
| **CPOE** | Computerized Provider Order Entry |
| **CDS** | Clinical Decision Support — alerts, order sets, protocols |
| **CCD** | Continuity of Care Document — HL7 CDA document for care transitions |
| **C-CDA** | Consolidated CDA — current standard for structured clinical documents |
| **Interoperability** | Ability of systems to exchange and use information |
| **Semantic interoperability** | Systems share the meaning, not just the format, of exchanged data |

**Terminology / Coding Standards:**

| Standard | Used For |
|---|---|
| **ICD-10-CM** | Diagnosis coding — all care settings |
| **ICD-10-PCS** | Inpatient procedure coding |
| **CPT** | Outpatient / physician procedure coding |
| **HCPCS** | Durable medical equipment, supplies, drugs not covered by CPT |
| **DRG** | Diagnosis Related Groups — inpatient payment classification |
| **SNOMED CT** | Clinical concepts in EHR documentation |
| **LOINC** | Labs, vitals, and clinical observations |
| **RxNorm** | Drug names, doses, and routes |
| **NDC** | National Drug Code — product-level drug identification |
| **NPI** | National Provider Identifier |
| **MPI / EMPI** | Master / Enterprise Master Patient Index |

**EHR vs. EMR vs. PHR — Key Differences:**

| Feature | EMR | EHR | PHR |
|---|---|---|---|
| Scope | Single provider | Across providers | Patient-owned |
| Portability | Not typically shared | Designed to be shared | Patient controls sharing |
| Standard purpose | Clinical care | Coordinated care | Patient self-management |

**Meaningful Use / Promoting Interoperability:**
- Originally called Meaningful Use (MU); now called **Promoting Interoperability (PI)** under CMS
- Stage 1 → data capture and sharing
- Stage 2 → advance clinical processes
- Stage 3 → improve outcomes
- Tied to Medicare/Medicaid incentive payments for eligible providers and hospitals

#### Practice Questions

> **[RE] Q3**: Which terminology standard is PRIMARILY used to represent and exchange laboratory test observations such as sodium levels or hemoglobin A1c?
> - A) SNOMED CT
> - B) ICD-10-CM
> - C) LOINC **[CORRECT]**
> - D) CPT
> *Maps to: Task 2.2 (HIT vocabulary — coding standards)*

> **[AP] Q4**: A hospital is selecting a new analytics platform and wants to ensure that diagnosis codes submitted on inpatient claims are correctly mapped. The MOST relevant coding standard for inpatient diagnoses is:
> - A) CPT
> - B) HCPCS
> - C) ICD-10-CM **[CORRECT]**
> - D) NDC
> *Maps to: Task 2.2*

> **[AP] Q5**: A physician practice wants to share patient health records with specialists at an outside hospital. An EMR system would be LEAST appropriate for this goal because:
> - A) EMRs do not support electronic order entry
> - B) EMRs are not designed for interoperability and sharing across organizations **[CORRECT]**
> - C) EMRs do not store clinical notes
> - D) EMRs cannot be used in outpatient settings
> *Maps to: Task 2.2*

> **[RE] Q6**: CMS's Promoting Interoperability (PI) program was formerly known as:
> - A) Health Information Exchange
> - B) Meaningful Use **[CORRECT]**
> - C) Accountable Care
> - D) PCMH Certification
> *Maps to: Task 2.2*

---

### Task 2.3 — Clinical Metrics

**Identify basic clinical metrics frequently represented in informatics (e.g., average daily census, turnaround time, adherence, barcode medication administration)**

#### Concept Summary

**Operational Metrics:**

| Metric | Formula / Definition |
|---|---|
| **Average Daily Census (ADC)** | Total inpatient days ÷ Number of days in the reporting period |
| **Bed Occupancy Rate** | (ADC ÷ Licensed beds) × 100 |
| **Average Length of Stay (ALOS)** | Total inpatient days ÷ Total discharges |
| **Bed Turnover Rate** | Total discharges ÷ Total licensed beds |
| **Turnaround Time (TAT)** | Time from order placement to result or service delivery |

**Quality and Safety Metrics:**

| Metric | Definition |
|---|---|
| **Medication Error Rate** | Errors per 1,000 doses administered |
| **BCMA Scan Rate** | % of eligible medication doses verified via barcode; many organizations target ≥95%, but the exact threshold is policy-specific |
| **Near-miss Rate** | Errors intercepted before reaching the patient |
| **Falls Rate** | Falls per 1,000 patient days |
| **30-day Readmission Rate** | % of patients readmitted within 30 days of discharge |
| **CLABSI Rate** | Central Line-Associated Bloodstream Infections per 1,000 line days |
| **CAUTI Rate** | Catheter-Associated UTI per 1,000 catheter days |
| **Mortality Rate** | Deaths ÷ Total discharges × 100 |

**Financial Metrics:**

| Metric | Definition |
|---|---|
| **Case Mix Index (CMI)** | Average DRG weight of all inpatient discharges — reflects clinical complexity |
| **Cost per Case** | Total costs ÷ Total discharges |
| **Days in Accounts Receivable (A/R)** | Average days to collect payment after service |
| **Payer Mix** | Proportion of revenue from Medicare, Medicaid, commercial, self-pay |

**BCMA (Barcode Medication Administration) — Five Rights:**
1. Right **Patient** (scan wristband)
2. Right **Drug** (scan medication barcode)
3. Right **Dose** (confirmed by system)
4. Right **Route** (confirmed by system)
5. Right **Time** (confirmed by system)

**Adherence Metrics:**
- **Protocol adherence** → % of eligible cases following a specified clinical protocol
- **Medication adherence** → % of patients taking medications as prescribed
- **Order set adherence** → % of applicable cases using standardized, evidence-based order sets

#### Practice Questions

> **[RE] Q7**: A hospital has 3,720 total patient days in October (31 days). The Average Daily Census is:
> - A) 3,720
> - B) 31
> - C) 120 **[CORRECT]** (3,720 ÷ 31 = 120)
> - D) 310
> *Maps to: Task 2.3 (Clinical metrics — ADC)*

> **[AP] Q8**: A quality analyst reviews BCMA scan compliance data and finds the scan rate has fallen to 87% on the night shift. The MOST immediate concern this metric raises is:
> - A) Inadequate inventory management in pharmacy
> - B) Increased risk that medication errors will go undetected at the bedside **[CORRECT]**
> - C) Possible EHR downtime affecting documentation
> - D) Inaccurate shift scheduling for nursing staff
> *Maps to: Task 2.3*

> **[AN] Q9**: A hospital's Case Mix Index has increased from 1.4 to 1.9 over two years. Reimbursement has stayed flat. The MOST likely explanation is:
> - A) Patient satisfaction scores have declined
> - B) Readmission rates have increased
> - C) The hospital is treating a more clinically complex patient population **[CORRECT]**
> - D) The coding department is under-coding diagnoses
> *Maps to: Task 2.3*

---

### Task 2.4 — System Functionality for Clinical Effectiveness

**Develop and implement system functionality to optimize clinical effectiveness and efficiencies**

#### Concept Summary

**Workflow Analysis Approach:**
- Document **current-state** workflows before designing any system solution
- Design **future-state** workflows with clinical stakeholders, not around them
- Identify redundancies, manual workarounds, and process gaps
- Validate the future state with end users before configuring the system

**EHR Optimization Strategies:**

| Strategy | Purpose |
|---|---|
| Evidence-based order sets | Standardize care and reduce unwarranted clinical variation |
| Smart text / dot phrases | Accelerate clinical documentation with reusable templates |
| Voice recognition (e.g., Dragon Medical) | Hands-free, real-time documentation |
| Structured data entry | Improves data quality, enables reporting and analytics |
| Default field values | Reduce clicks; ensure completeness for high-frequency scenarios |

**Alert Fatigue:**
- **Definition**: clinicians become desensitized to frequent alerts and dismiss them without reading
- **Indicator**: high alert override rate (>90% signals poor alert design or relevance)
- **Causes**: excessive volume, low specificity, non-actionable alerts
- **Mitigation**: alert governance committee, evidence-based thresholds, reduce total alert count, prioritize high-severity actionable alerts

**Integration Workflow Example:**
- CPOE → Pharmacy IS → eMAR (order placed → verified → administered)
- LIS → EHR (result available → provider notified via inbox or alert)
- RIS / PACS → EHR (radiology report → physician notification)

#### Practice Questions

> **[AP] Q10**: A hospital's EHR implementation team notices that physicians are spending 45 minutes per shift clicking through non-relevant alerts. The FIRST step to address this is:
> - A) Disable all drug-drug interaction alerts immediately
> - B) Conduct an alert audit to identify high-override-rate, low-value alerts **[CORRECT]**
> - C) Upgrade the EHR to a newer version
> - D) Require physicians to document alert override reasons for all alerts
> *Maps to: Task 2.4 (System functionality — alert fatigue)*

> **[AN] Q11**: A nursing informatics team is designing nursing assessment documentation in the EHR. Nurses complain the current paper form takes 30 minutes to complete. Which approach would BEST optimize both efficiency and data quality?
> - A) Replicate the existing paper form exactly in the EHR
> - B) Eliminate all structured fields and use free text for flexibility
> - C) Redesign the assessment using structured templates with default values for common findings **[CORRECT]**
> - D) Reduce the assessment frequency to once per shift regardless of patient acuity
> *Maps to: Task 2.4*

---

### Task 2.5 — Data Analytics for Clinical Outcomes

**Interpret clinical and operational outcomes through the use of various data analytics tools (e.g., reports, tables, graphs, charts, predictive models)**

#### Concept Summary

**Analytics Maturity Levels:**

| Level | Question Answered | Healthcare Example |
|---|---|---|
| **Descriptive** | What happened? | Monthly report of inpatient admissions by DRG |
| **Diagnostic** | Why did it happen? | Root cause analysis of elevated sepsis mortality |
| **Predictive** | What will happen? | 30-day readmission risk score at discharge |
| **Prescriptive** | What should we do? | Automated care management referral for high-risk patients |

**Visualization Selection Guide:**

| Chart Type | Best Used When |
|---|---|
| **Bar chart** | Comparing values across discrete categories |
| **Line chart** | Showing a trend or change over time |
| **Pie chart** | Showing proportions (use sparingly; max 4–5 categories) |
| **Scatter plot** | Exploring correlation between two continuous variables |
| **Run chart** | Simple trend line; used in quality improvement |
| **Control chart** | Detect process variation; distinguish common cause from special cause variation |
| **Heat map** | Showing intensity patterns across two dimensions |
| **Dashboard** | Displaying multiple KPIs simultaneously for operational monitoring |

**Statistical Concepts:**
- **Mean / Median / Mode** → measures of central tendency
- **Standard deviation** → spread of data around the mean
- **Confidence interval** → range within which the true population value likely falls
- **p-value < 0.05** → result is statistically significant
- **Benchmark** → a standard for comparison (internal target, national average, peer group)
- **Outlier** → a data point that falls significantly outside the expected range

**Predictive Tools in Healthcare:**
- **Risk stratification models** → classify patients by risk (e.g., ACG, HCC risk score)
- **Regression models** → predict continuous outcomes (e.g., expected LOS)
- **Machine learning** → identify complex patterns in large datasets
- **NLP (Natural Language Processing)** → extract coded information from free-text clinical notes

#### Practice Questions

> **[AP] Q12**: A quality improvement team wants to visualize whether a new hand hygiene protocol has reduced CLABSI rates over the past 12 months, and whether the change was statistically meaningful. The MOST appropriate tool is:
> - A) Pie chart showing CLABSI proportion of total infections
> - B) Bar chart comparing pre- and post-intervention monthly rates
> - C) Control chart tracking CLABSI rates over 12 months **[CORRECT]**
> - D) Scatter plot of CLABSI rates vs. staff-to-patient ratios
> *Maps to: Task 2.5 (Data analytics — visualization)*

> **[AN] Q13**: A care management team uses a risk score calculated from historical claims, lab values, and diagnoses to identify patients likely to be hospitalized in the next 90 days. This application is BEST classified as:
> - A) Descriptive analytics
> - B) Diagnostic analytics
> - C) Predictive analytics **[CORRECT]**
> - D) Prescriptive analytics
> *Maps to: Task 2.5*

> **[AP] Q14**: A CFO asks the analytics team "Why did our average length of stay increase last quarter?" This question calls for which type of analytics?
> - A) Descriptive
> - B) Diagnostic **[CORRECT]**
> - C) Predictive
> - D) Prescriptive
> *Maps to: Task 2.5*

---

### Task 2.6 — Clinical Decision Support Mechanisms

**Develop mechanisms to facilitate ongoing clinical content and decision-support tools**

#### Concept Summary

**Types of CDS Interventions:**

| Type | Example |
|---|---|
| **Drug-drug interaction alert** | Warfarin + aspirin contraindication warning |
| **Drug-allergy alert** | Amoxicillin order for penicillin-allergic patient |
| **Dose range checking** | Weight-based dosing check for renally cleared drugs |
| **Reminder / Prompt** | Influenza vaccine overdue notification |
| **Evidence-based order set** | Sepsis bundle, AMI order set, VTE prophylaxis |
| **Diagnostic support** | Differential diagnosis suggestions |
| **Early warning score** | NEWS (National Early Warning Score), MEWS |
| **Reference infobutton** | In-context link to drug monograph or clinical guideline |
| **Workflow checklist** | Nursing central line insertion safety checklist |

**Five Rights of CDS (Osheroff Framework):**

| Right | Description |
|---|---|
| **Right information** | Evidence-based, current, accurate content |
| **Right person** | Delivered to the appropriate clinician role |
| **Right format** | Alert, order set, infobutton, reminder — matched to the decision |
| **Right channel** | EHR workflow, mobile app, secure message — appropriate for the context |
| **Right time** | At the moment of clinical decision-making, not retrospectively |

**CDS Governance:**
- Multidisciplinary governance committee (physicians, pharmacists, nurses, IT, informatics)
- Clinical champions own content domains
- Annual content review cycle aligned with evidence updates
- Defined process for alert retirement and escalation
- Tracking of override rates and override reasons to guide optimization
- Goal: reduce alert burden while maximizing clinical relevance

**Alert Fatigue and Governance Best Practices:**
- Measure and publish override rates by alert type
- Remove low-value alerts that exceed a pre-defined override threshold
- Use tiered alerting (soft-stop = informational; hard-stop = required action before proceeding)

#### Practice Questions

> **[AP] Q15**: A pharmacist receives a CDS alert when reviewing a physician's order — but the alert was intended to inform the prescribing physician about a drug interaction. According to the Five Rights of CDS, which right was violated?
> - A) Right information
> - B) Right person **[CORRECT]**
> - C) Right format
> - D) Right time
> *Maps to: Task 2.6 (CDS — Five Rights)*

> **[AP] Q16**: A hospital wants to improve compliance with evidence-based sepsis treatment. A CDS governance committee is evaluating intervention options. The MOST effective CDS mechanism is:
> - A) A passive reference link to sepsis guidelines in the EHR library
> - B) A daily email report showing sepsis compliance rates to unit managers
> - C) A triggered evidence-based order set that fires when sepsis screening criteria are met **[CORRECT]**
> - D) A general training module on sepsis management for all nurses
> *Maps to: Task 2.6*

> **[AN] Q17**: A hospital's CDS governance committee reviews quarterly alert data and finds that 88% of a specific drug-drug interaction alert is overridden. The committee's BEST next step is to:
> - A) Make the alert a hard-stop to force compliance
> - B) Increase the frequency of the alert to reinforce the message
> - C) Analyze override reasons to determine if the alert has clinical value or should be retired **[CORRECT]**
> - D) Add the alert to all order sets regardless of patient context
> *Maps to: Task 2.6*

---

## Domain 2 — Quick Cheatsheet

```
DOSAGE FREQUENCY:
QD=daily  BID=2×/day  TID=3×/day  QID=4×/day
PRN=as needed  STAT=immediately  QHS=bedtime
AC=before meals  PC=after meals  Q6H=every 6 hours

DOSAGE ROUTES:
PO=oral  IV=intravenous  IM=intramuscular
SQ=subcutaneous  SL=sublingual  INH=inhalation

CODING STANDARDS:
ICD-10-CM  → diagnoses (all settings)
ICD-10-PCS → inpatient procedures
CPT        → outpatient procedures
HCPCS      → DME / supplies / drugs
DRG        → inpatient payment grouping
SNOMED CT  → clinical concepts in EHR
LOINC      → labs / vitals / observations
RxNorm/NDC → drug names / drug products

EHR vs EMR vs PHR:
EMR  = single provider, not shared
EHR  = shared across providers and organizations
PHR  = patient-controlled, not provider-tied

KEY METRICS:
ADC  = Total patient days ÷ Days in period
ALOS = Patient days ÷ Discharges
Bed occupancy = (ADC ÷ Licensed beds) × 100
CMI  = Average DRG weight (↑ CMI = more complex)
BCMA verifies 5 Rights: Patient, Drug, Dose, Route, Time
BCMA scan rate = scanned eligible doses ÷ eligible doses administered × 100
Many orgs target ≥95%, but use the local benchmark stated in the question

ANALYTICS LEVELS:
Descriptive  → what happened (report)
Diagnostic   → why it happened (root cause)
Predictive   → what will happen (risk score)
Prescriptive → what to do (automated action)

BEST VISUALIZATION:
Trend over time     → run chart / control chart
Comparing categories → bar chart
Proportion          → pie chart (≤5 slices)
Correlation         → scatter plot
Multiple KPIs       → dashboard

CDS FIVE RIGHTS (Osheroff):
1. Right information  2. Right person  3. Right format
4. Right channel      5. Right time in workflow

ALERT FATIGUE:
Override rate >90% = poor alert design or low value
Fix: CDS governance committee → audit → retire / retune
```
