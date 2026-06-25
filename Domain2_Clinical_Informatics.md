# Domain 2: Clinical Informatics — 20%

> **Exam weight:** ~20 scored questions out of 100
> **Cognitive mix:** RE · AP · AN — mix of all three; many calculation and scenario questions
> **Cognitive mix: ~53% AP · ~29% AN · ~18% RE**
> **Highest-tested tasks: 2.5 (Analytics — 14q) · 2.6 (CDS — 12q) · 2.2 (HIT Vocab — 12q) · 2.1 (Clinical Vocab — 10q) · 2.3 (Metrics — 9q)**
>
> **4-step framework:**
> 1. Identify the informatics task (coding? analytics? CDS? BCMA? metrics?)
> 2. Identify the care setting and data type (inpatient vs. outpatient; diagnosis vs. procedure vs. lab vs. drug)
> 3. Match to the narrowest standard (inpatient procedure → PCS not CM; drug reconciliation → RxNorm not NDC)
> 4. For analytics: does the system score/predict only (predictive) or automatically take action (prescriptive)?
>
> **Eliminate immediately:** "Convert to hard-stop" when override rate is high · "Disable all alerts" for fatigue · ICD-10-PCS for outpatient · "correlation proves causation" · "discipline staff immediately" when BCMA drops

---

## A. Clinical Informatics

---

### Task A.1 — Basic Clinical Vocabulary
> *Identify basic clinical vocabulary/terms frequently represented in healthcare informatics (e.g., dosage frequency, dosage routes, body systems)*

#### Dosage Frequency

| Abbreviation | Latin Origin | Meaning |
|---|---|---|
| **QD / QDay** | Quaque die | Once daily |
| **BID** | Bis in die | Twice daily |
| **TID** | Ter in die | Three times daily |
| **QID** | Quater in die | Four times daily |
| **Q4H / Q6H / Q8H** | — | Every 4 / 6 / 8 hours |
| **PRN** | Pro re nata | As needed |
| **STAT** | Statim | Immediately |
| **QHS** | Quaque hora somni | At bedtime |
| **AC** | Ante cibum | Before meals |
| **PC** | Post cibum | After meals |
| **NPO** | Nil per os | Nothing by mouth (e.g., before surgery) |

> Q8H dose timing: if Dose 1 = 6 AM, then Dose 2 = 2 PM, Dose 3 = 10 PM.

#### Dosage Routes

| Abbreviation | Route | Clinical Note |
|---|---|---|
| **PO** | Per os — oral | Most common; patient must be able to swallow |
| **IV** | Intravenous | Fastest onset; requires vascular access |
| **IM** | Intramuscular | Vaccines, emergency injections |
| **SQ / SubQ** | Subcutaneous | Insulin, heparin |
| **SL** | Sublingual | Nitroglycerin (rapid absorption under tongue) |
| **TOP** | Topical | Skin creams, patches |
| **PR** | Per rectum | Suppositories |
| **INH** | Inhalation | Bronchodilators, anesthesia agents |
| **NG / GT** | Nasogastric / Gastrostomy tube | Patients who cannot swallow |

#### Body Systems (HIT Relevance)

| System | Key Organs | Common Informatics Applications |
|---|---|---|
| **Cardiovascular** | Heart, vessels | Cardiac monitoring, ECG integration, rhythm alerts |
| **Respiratory** | Lungs, airways | Ventilator integration, SpO2 monitoring, early warning scores |
| **Gastrointestinal** | Stomach, intestines | Nutrition documentation, bowel management |
| **Musculoskeletal** | Bones, muscles, joints | Orthopedic workflows, fall risk assessment |
| **Neurological** | Brain, spinal cord | Neuro assessment templates, stroke pathway CDS |
| **Endocrine** | Thyroid, pancreas, adrenal | Glucose monitoring, insulin order sets |
| **Renal / Urinary** | Kidneys, bladder | eGFR-based dose adjustment alerts, CAUTI tracking |
| **Integumentary** | Skin, hair, nails | Wound care documentation, pressure injury staging |
| **Hematologic** | Blood, bone marrow | INR monitoring, transfusion workflows, anticoagulation alerts |
| **Reproductive** | OB/GYN, urology | Obstetric documentation, prenatal records |

#### Common Clinical Abbreviations

| Abbreviation | Meaning | | Abbreviation | Meaning |
|---|---|---|---|---|
| Dx | Diagnosis | | HTN | Hypertension |
| Tx | Treatment | | DM | Diabetes mellitus |
| Hx | History | | CHF | Congestive heart failure |
| Rx | Prescription | | MI | Myocardial infarction |
| SOB | Shortness of breath | | CVA | Cerebrovascular accident (stroke) |
| NPO | Nothing by mouth | | COPD | Chronic obstructive pulmonary disease |
| WNL | Within normal limits | | UTI | Urinary tract infection |

> **Exam tip:** "Right drug" in BCMA is verified by scanning the medication barcode. "Right patient" is verified by scanning the wristband. Skipping the medication scan removes the safeguard against wrong-drug errors.

---

### Task A.2 — Healthcare IT Vocabulary
> *Identify basic healthcare IT vocabulary/terms frequently represented in healthcare informatics*

#### Coding and Terminology Standards

| Standard | Used For | Care Setting |
|---|---|---|
| **ICD-10-CM** | Diagnosis coding | All settings (inpatient + outpatient) |
| **ICD-10-PCS** | Inpatient procedure coding | Inpatient only |
| **CPT** | Outpatient / physician procedure coding | Outpatient / professional claims |
| **HCPCS Level II** | DME, supplies, drugs not in CPT | All settings, especially Medicare claims |
| **DRG** | Inpatient payment classification grouping | Inpatient prospective payment (CMS) |
| **SNOMED CT** | Clinical concepts in EHR documentation | Problem lists, diagnoses, findings |
| **LOINC** | Laboratory tests and clinical observations | Lab results, vitals, assessments |
| **RxNorm** | Normalized drug names and drug concepts | Cross-system medication reconciliation |
| **NDC** | National Drug Code — product-level drug ID (manufacturer + product + package) | Pharmacy dispensing, MAR |
| **NPI** | National Provider Identifier — 10-digit HIPAA-required provider ID | All HIPAA transactions |

> **ICD-10-CM vs ICD-10-PCS:** CM = diagnoses (all settings). PCS = inpatient procedures only. CPT = outpatient procedures. HCPCS = DME and supplies.

#### EHR / EMR / PHR Distinctions

| Feature | EMR | EHR | PHR |
|---|---|---|---|
| Scope | Single provider, single practice | Multiple providers, multiple organizations | Patient-owned, any source |
| Portability | Not designed for sharing | Built for interoperability and sharing | Patient controls sharing |
| Standard purpose | Internal clinical documentation | Coordinated care across the continuum | Patient self-management |

#### Key Informatics Terms

| Term | Definition |
|---|---|
| **Interoperability** | Ability of two or more systems to exchange and USE information |
| **Semantic interoperability** | Systems share the MEANING of exchanged data (via LOINC, SNOMED, RxNorm) |
| **Semantic interoperability** | Highest level — systems understand data context and meaning |
| **C-CDA** | Consolidated CDA — structured document for care transition exchange |
| **CDS** | Clinical Decision Support — alerts, reminders, order sets, protocols |
| **CPOE** | Computerized Provider Order Entry — electronic order entry with embedded safety checks |
| **BCMA** | Barcode Medication Administration — verifies 5 Rights at bedside |

#### Promoting Interoperability (Meaningful Use)

| Stage | Focus |
|---|---|
| **Stage 1 (MU1)** | Data capture and sharing — EHR adoption |
| **Stage 2 (MU2)** | Advance clinical processes — patient engagement, HIE |
| **Stage 3 / PI** | Improve outcomes — interoperability, patient access |

> CMS renamed Meaningful Use to **Promoting Interoperability (PI)** in 2018. Eligible providers and hospitals receive incentive payments for meeting specific HIT use criteria.

> **Exam tip:** LOINC = lab tests and observations. SNOMED CT = clinical concepts and diagnoses in the EHR. RxNorm = drug names for reconciliation across systems. NDC = specific drug product at the package level. Do not confuse them.

---

### Task A.3 — Basic Clinical Metrics
> *Identify basic clinical metrics frequently represented in informatics (e.g., average daily census, turnaround time, adherence, barcode medication administration)*

#### Operational Metrics

| Metric | Formula | Example |
|---|---|---|
| **Average Daily Census (ADC)** | Total inpatient days ÷ Days in period | 3,720 days ÷ 31 days = 120 patients/day |
| **Bed Occupancy Rate** | (ADC ÷ Licensed beds) × 100 | 120 ÷ 200 × 100 = 60% |
| **Average Length of Stay (ALOS)** | Total inpatient days ÷ Total discharges | 2,000 days ÷ 400 discharges = 5 days |
| **Bed Turnover Rate** | Total discharges ÷ Licensed beds | 400 ÷ 200 = 2.0 turnovers per period |
| **Turnaround Time (TAT)** | Elapsed time from order to result/service delivery | Lab culture TAT = order to final result |

#### Quality and Safety Metrics

| Metric | Formula / Definition |
|---|---|
| **BCMA Scan Rate** | (Doses scanned ÷ Eligible doses) × 100; target typically ≥95% |
| **Medication Error Rate** | Errors per 1,000 doses administered |
| **Near-miss Rate** | Errors intercepted before reaching the patient |
| **Falls Rate** | (Falls ÷ Patient days) × 1,000 = falls per 1,000 patient days |
| **30-day Readmission Rate** | (Readmissions within 30 days ÷ Total discharges) × 100 |
| **CLABSI Rate** | Central Line-Associated BSI per 1,000 central line days |
| **CAUTI Rate** | Catheter-Associated UTI per 1,000 catheter days |
| **Protocol Adherence** | (Cases following protocol ÷ Eligible cases) × 100 |

> **Falls rate example:** 3 falls, 600 patient days → (3 ÷ 600) × 1,000 = 5 per 1,000 patient days

#### Financial Metrics

| Metric | Definition |
|---|---|
| **Case Mix Index (CMI)** | Average DRG weight of all discharges — reflects clinical complexity; higher CMI = more complex = higher reimbursement |
| **Days in Accounts Receivable (A/R)** | Average days to collect payment after service; higher = slower cash flow |
| **Cost per Case** | Total costs ÷ Total discharges |
| **Payer Mix** | Proportion of revenue from Medicare / Medicaid / commercial / self-pay; more commercial = higher revenue per case |

#### BCMA — Five Rights of Medication Administration

1. **Right Patient** → scan patient wristband
2. **Right Drug** → scan medication barcode
3. **Right Dose** → confirmed by system
4. **Right Route** → confirmed by system
5. **Right Time** → confirmed by system

> **Exam tip:** A drop in BCMA scan rate = a PROCESS or USABILITY problem first (smudged labels, poor lighting, connectivity), not necessarily staff noncompliance. Investigate root cause before disciplinary action.

---

### Task A.4 — System Functionality for Clinical Effectiveness
> *Develop and implement system functionality to optimize clinical effectiveness and efficiencies*

#### Workflow Analysis Process

1. Document **current-state** workflow (observe, interview, map)
2. Identify waste, redundancy, workarounds, and pain points
3. Design **future-state** workflow with clinical stakeholders
4. Validate future-state design before configuration begins
5. Configure system to support (not dictate) clinical workflow
6. Test and optimize post-go-live

#### EHR Optimization Strategies

| Strategy | Purpose | Example |
|---|---|---|
| **Evidence-based order sets** | Standardize care; reduce unwarranted variation | Sepsis bundle, VTE prophylaxis set |
| **Smart text / dot phrases** | Accelerate documentation with reusable templates | `.hpi` expands to HPI template |
| **Voice recognition** | Hands-free, real-time documentation | Dragon Medical dictation in radiology |
| **Structured data entry** | Enables reporting, analytics, CDS logic | Flowsheets vs free-text notes |
| **Default field values** | Reduce clicks for high-frequency scenarios | Default route = PO for oral meds |
| **Downtime procedures** | Pre-printed paper forms for EHR outages | Paper MAR, vital sign flowsheets |

#### Alert Fatigue

- **Definition:** Clinicians become desensitized to frequent alerts and dismiss them without reading
- **Indicator:** Override rate >90% for a specific alert signals low clinical value or poor design
- **Causes:** Excessive alert volume, low specificity, non-actionable content, wrong audience
- **Resolution (governance process):**
  1. Audit override rates and override reasons for each alert
  2. Evaluate clinical evidence supporting the alert
  3. Retire alerts with >90% override rate AND low clinical evidence
  4. Retune threshold, target population, or severity for improvable alerts
  5. Convert only highest-severity alerts to hard-stops

> **Exam tip:** Never disable all alerts. Always investigate the root cause of compliance failures. Structured data (flowsheets, order sets) enables analytics; free text does not.

---

### Task A.5 — Data Analytics for Clinical Outcomes
> *Interpret clinical and operational outcomes through the use of various data analytics tools (e.g., reports, tables, graphs, charts, predictive models)*

#### Analytics Maturity Levels

| Level | Question Answered | Healthcare Example |
|---|---|---|
| **Descriptive** | What happened? | Monthly report of admissions by DRG |
| **Diagnostic** | Why did it happen? | Root cause analysis of elevated sepsis mortality |
| **Predictive** | What will happen? | 30-day readmission risk score at discharge |
| **Prescriptive** | What should we do? | Auto-route high-risk patients to care management queue |

> **Key distinction:** Risk SCORE = predictive. Automatic ACTION based on score = prescriptive.

#### Visualization Selection Guide

| Chart Type | Best Used For | Example |
|---|---|---|
| **Bar chart** | Comparing discrete categories | Readmission rates by DRG |
| **Line chart** | Trend over time | Monthly ALOS trend |
| **Run chart** | Simple trend; quality improvement monitoring | BCMA compliance over 12 months |
| **Control chart** | Detect process variation; common vs. special cause | Identify whether a change is statistically significant |
| **Pie chart** | Proportions (use sparingly; ≤5 categories) | Payer mix percentage |
| **Scatter plot** | Correlation between two continuous variables | Staffing ratio vs. CLABSI rate |
| **Heat map** | Intensity patterns across two dimensions | HAI rates by floor/wing/unit |
| **Dashboard** | Multiple KPIs simultaneously | Operational command center display |
| **Histogram** | Distribution of a single continuous variable | Distribution of patient LOS |

#### Statistical Concepts

| Concept | Definition | Exam Relevance |
|---|---|---|
| **Mean** | Average value | ALOS, ADC calculations |
| **Median** | Middle value; not affected by outliers | Better than mean for skewed data |
| **Standard deviation** | Spread of data around the mean | Identify outliers |
| **p-value <0.05** | Result is statistically significant (5% chance of occurring by chance) | Interpreting study results |
| **Confidence interval (95% CI)** | Range containing true population value with 95% probability | e.g., "8%–22% reduction" |
| **Outlier** | Data point significantly outside expected range | Triggers investigation, not immediate judgment |
| **Benchmark** | External comparison standard | National average, peer group |
| **Correlation** | Two variables move together — does NOT prove causation | Timing alone ≠ cause |

#### Predictive Tools

- **Risk stratification models** → ACG, HCC scores; classify patients into low/medium/high risk
- **Machine learning** → identifies complex patterns in large datasets (readmission prediction)
- **NLP (Natural Language Processing)** → extracts coded concepts from free-text clinical notes (auto-populates disease registries)
- **Regression models** → predict continuous outcomes (expected LOS)

> **Exam tip:** Run charts show trends over time. Control charts add statistical upper/lower control limits to distinguish common cause (normal variation) from special cause (real change). A dashboard answers "what is happening now." Scatter plot answers "are these two variables related?"

---

### Task A.6 — Clinical Decision Support Mechanisms
> *Develop mechanisms to facilitate ongoing clinical content and decision-support tools*

#### Types of CDS Interventions

| Type | Example | Trigger |
|---|---|---|
| **Drug-allergy alert** | Amoxicillin ordered for penicillin-allergic patient | Order entry |
| **Drug-drug interaction (DDI) alert** | Warfarin + aspirin → bleeding risk | Order entry |
| **Dose range check** | Gentamicin dose exceeds weight-based max for pediatric patient | Order entry |
| **Early warning score (EWS)** | NEWS score >7 triggers escalation alert | Vital sign documentation |
| **Evidence-based order set** | Sepsis bundle fires when screening criteria met | Clinical documentation trigger |
| **Reminder / Prompt** | Influenza vaccine overdue notification | Patient encounter |
| **Infobutton** | In-context link to drug monograph; appears during order entry | Clinician request |
| **Diagnostic support** | Differential diagnosis suggestions | Problem documentation |
| **Workflow checklist** | Central line insertion safety checklist | Procedure order |

#### Five Rights of CDS (Osheroff Framework)

| Right | Description | Failure Example |
|---|---|---|
| **Right information** | Evidence-based, current, accurate content | Alert built on outdated 2015 guideline now superseded |
| **Right person** | Delivered to the clinician with authority to act | Drug interaction alert routed to nurse, not prescribing physician |
| **Right format** | Alert, order set, infobutton — matched to the decision context | Pop-up alert for complex differential diagnosis (should be infobutton) |
| **Right channel** | EHR workflow, mobile app, secure message — appropriate for the context | Email 24 hours after prescribing (not actionable) |
| **Right time** | At the moment of clinical decision-making | Retrospective report rather than point-of-care alert |

#### CDS Governance

| Element | Description |
|---|---|
| **Governance committee** | Multidisciplinary: physicians, pharmacists, nurses, informatics, IT |
| **Clinical champions** | Domain owners for specific content areas (pharmacy champion owns drug alerts) |
| **Annual content review** | Update alerts to current evidence; retire outdated content |
| **Override rate tracking** | Override rate >90% = investigate → retune or retire |
| **Hard-stop vs. soft-stop** | Hard-stop: must acknowledge before proceeding (highest severity only). Soft-stop: informational, dismissible |
| **Alert retirement** | Retire: high override rate + outdated/low clinical evidence |

> **Alert levels:** Hard-stop = only for patient safety emergencies (contraindicated drug + allergy with high severity). Soft-stop = clinically relevant but manageable. Informational = awareness only. Too many hard-stops = alert fatigue.

> **Exam tip:** CDS is most effective when embedded in the clinician's workflow at the right moment (right time). A triggered sepsis order set beats a passive guideline link every time. Override rate >90% is the key governance trigger for audit and review.

---

### Task A.5 Extension — Control Charts and NLP in Healthcare Analytics

#### Control Charts vs. Run Charts

| Feature | Run Chart | Control Chart |
|---|---|---|
| **What it shows** | Trend over time (simple line graph) | Trend + statistical control limits (UCL / LCL / centerline) |
| **Detects** | Directional trends and shifts — visually | Common cause vs. special cause variation — statistically |
| **When to use** | Quick trend monitoring; quality improvement | Determine if a change is statistically significant or just noise |

**Common Cause vs. Special Cause Variation:**
- **Common cause (normal variation)** → random variation inherent to the process; points within control limits; system is stable — do NOT overreact to individual data points
- **Special cause (assignable)** → non-random variation from an identifiable source; signals a real change → investigate

**Control chart signals indicating special cause:**
- One point beyond the 3σ upper or lower control limit
- Eight or more consecutive points on the same side of the centerline
- Six consecutive points trending consistently up or down

> **Exam tip:** "Did our new protocol actually improve outcomes?" → control chart (distinguishes real improvement from normal variation). Run chart = simpler visual trend. Control chart = statistical rigor with UCL/LCL.

#### Natural Language Processing (NLP) in Healthcare

| NLP Application | Use Case |
|---|---|
| **Registry population** | Auto-extract diagnoses, procedures, and medications from clinical notes to populate disease registries |
| **Computer-Assisted Coding (CAC)** | Propose ICD-10 and CPT codes from clinical documentation; coder validates and finalizes |
| **Adverse event detection** | Identify falls, infections, and adverse drug events from nursing notes and discharge summaries |
| **Clinical trial eligibility screening** | Screen patient records for inclusion/exclusion criteria automatically |
| **Quality measure abstraction** | Extract quality measure data elements from unstructured free text |

**Key NLP components:**
- **Named Entity Recognition (NER)** → identifies and classifies clinical entities (diagnoses, medications, anatomical locations)
- **Negation detection** → distinguishes "patient has pneumonia" from "no evidence of pneumonia" or "patient denies pneumonia"
- **Assertion detection** → determines whether a finding is current, historical, or hypothetical

> **Exam tip:** NLP works on FREE TEXT (progress notes, discharge summaries). Structured fields (flowsheets, coded orders) don't require NLP. NLP quality is only as good as the documentation it reads — poorly documented notes produce unreliable extractions.

---

### Task A.2 Extension — CDI, Nursing Informatics, and Clinical Registries

#### Clinical Documentation Improvement (CDI)

- **CDI program** → ensures clinical documentation accurately reflects patient condition, complexity, and resource utilization — directly drives DRG assignment and reimbursement accuracy
- **CDI specialists** → review records concurrently and query physicians for clarification of diagnosis specificity and linkage (e.g., "CHF" → "acute-on-chronic systolic heart failure, NYHA Class III")
- **Query types:** concurrent (during hospitalization — allows real-time correction) or retrospective (after discharge)
- **Computer-Assisted Coding (CAC)** → NLP-based software proposes ICD-10-CM/PCS and CPT codes from clinical text for coder review and validation; increases coding speed and consistency
- **Impact:** Higher documentation specificity → more accurate DRG → appropriate reimbursement. Underdocumentation = lost revenue; overdocumentation = compliance risk

#### Nursing Informatics

| Standard | Full Name | Purpose |
|---|---|---|
| **NANDA-I** | North American Nursing Diagnosis Association — International | Standardized nursing diagnoses (e.g., "Risk for Falls", "Impaired Gas Exchange") |
| **NIC** | Nursing Interventions Classification | Standardized nursing intervention labels and definitions |
| **NOC** | Nursing Outcomes Classification | Standardized, measurable nursing care outcomes |
| **NMDS** | Nursing Minimum Data Set | Core nursing data elements for electronic capture, comparison, and research |

Nursing informatics bridges clinical nursing practice and HIT: EHR workflow design, CDS for nursing (early warning scores, fall risk tools), clinical documentation optimization, and evidence-based outcomes measurement.

#### Clinical Registries

- **Disease registry** → population-level database tracking specific diagnoses (cancer, cardiac, diabetes) across patients over time
- Used for: quality measurement; outcomes tracking; public health surveillance; research; regulatory reporting to payers and accreditors
- **Examples:** National Cancer Registry, STS (Society of Thoracic Surgeons) database, AHA Get With The Guidelines (GWTG) registry, state immunization registries
- Registries feed **population health management** platforms and **quality dashboard** reporting
- Data inputs: HL7 interfaces from EHR (automated) OR manual chart abstraction OR NLP extraction from clinical notes

> **Exam tip:** CAC proposes codes — a coder must validate and finalize. CDI improves documentation before coding to ensure accurate DRG assignment. Registry data quality depends on structured (not free-text) clinical documentation.

---

## Domain 2 — Quick Reference Cheatsheet

```
DOSAGE FREQUENCY:
QD=once daily  BID=2×/day  TID=3×/day  QID=4×/day
PRN=as needed  STAT=immediately  QHS=at bedtime
AC=before meals  PC=after meals  Q8H=every 8 hours  NPO=nothing by mouth

DOSAGE ROUTES:
PO=oral  IV=intravenous  IM=intramuscular
SQ=subcutaneous  SL=sublingual  INH=inhalation  TOP=topical

CODING STANDARDS:
ICD-10-CM  → diagnoses (ALL settings)
ICD-10-PCS → inpatient procedures ONLY
CPT        → outpatient / physician procedures
HCPCS II   → DME, supplies, non-CPT drugs (Medicare)
DRG        → inpatient payment grouping (average DRG weight = CMI)
SNOMED CT  → clinical concepts in EHR (diagnoses, findings)
LOINC      → lab tests and clinical observations (sodium = LOINC 2951-2)
RxNorm     → normalized drug names across systems
NDC        → product-level drug ID (manufacturer + product + package)
NPI        → 10-digit HIPAA-required provider identifier

EHR vs EMR vs PHR:
EMR  = single provider; not designed for sharing
EHR  = shareable across providers and organizations
PHR  = patient-owned; patient controls what is shared

INTEROPERABILITY LEVELS:
Foundational  → data can be received (connectivity only)
Structural    → follows common format (HL7, DICOM)
Semantic      → shared meaning via terminology (LOINC, SNOMED, RxNorm)
Organizational → governance + policy + workflow alignment

KEY METRICS (formulas):
ADC           = Total patient days ÷ Days in period
Bed occupancy = (ADC ÷ Licensed beds) × 100
ALOS          = Total patient days ÷ Total discharges
Falls rate    = (Falls ÷ Patient days) × 1,000
BCMA rate     = (Scanned doses ÷ Eligible doses) × 100; target ≥95%
CMI           = Average DRG weight (↑CMI = more complex patients = higher reimbursement)
Days in A/R   = avg days to collect; ↑ = slower cash flow = problem

BCMA 5 RIGHTS: Patient · Drug · Dose · Route · Time

ANALYTICS LEVELS:
Descriptive  → what happened (report)
Diagnostic   → why it happened (root cause analysis)
Predictive   → what will happen (risk score model)
Prescriptive → what to do (automated action/routing)

BEST VISUALIZATION:
Trend over time     → run chart / control chart
Category comparison → bar chart
Correlation         → scatter plot
Proportion          → pie chart (≤5 slices)
Spatial pattern     → heat map
Multiple KPIs now   → dashboard
Statistical control → control chart (common vs. special cause)

STATISTICAL:
p<0.05 = statistically significant (5% chance result is random)
95% CI = 95% confident true effect is within this range
Correlation ≠ causation (timing alone does not prove cause)
Outlier = investigate first, do not immediately judge

CDS TYPES:
Drug-allergy alert     → allergy cross-reference at order entry
Drug-drug interaction  → hazardous combination check
Dose range check       → weight-based or renal-adjusted dose validation
Early warning score    → NEWS/MEWS/SEWS from vital signs → escalation
Order set             → evidence-based bundle fires on trigger criteria
Infobutton            → in-context reference link (right format for lookup)
Reminder/Prompt        → preventive care overdue notification

CDS 5 RIGHTS (Osheroff):
1. Right information  → current, evidence-based
2. Right person       → clinician with authority to act
3. Right format       → alert/order set/infobutton matched to context
4. Right channel      → EHR workflow vs. mobile vs. message
5. Right time         → at point of decision, not retrospectively

ALERT GOVERNANCE:
Override rate >90% = audit → retune or retire
Hard-stop = highest severity only (patient safety emergency)
Soft-stop = clinically relevant, dismissible
Retire when: high override rate AND low/outdated clinical evidence
```
