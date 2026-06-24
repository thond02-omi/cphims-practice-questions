# CPHIMS Flashcards — All Domains

Format: Q | A (suitable for Anki import with "|" as separator)
Total: 132 cards | Exam logistics: 6 | Domain 1: 30 | Domain 2: 24 | Domain 3: 42 | Domain 4: 30

---

## EXAM LOGISTICS — Current Official Facts (6 cards)

---

**Card X-001**
Q: What is the current CPHIMS exam length according to the HIMSS CPHIMS webpage?
A: Two hours, with 115 multiple-choice questions displayed; 100 questions are scored. The May 1, 2024 Candidate Handbook PDF still states 100 questions, so verify final logistics in the ATT email.

---

**Card X-002**
Q: What scaled score is required to pass CPHIMS?
A: HIMSS reports scores on a 200-800 scale, with 600 required to pass.

---

**Card X-003**
Q: What are the four CPHIMS domain weights?
A: Domain 1 Healthcare and Technology Environments = 25%; Domain 2 Clinical Informatics = 20%; Domain 3 Healthcare Information and Systems Management = 30%; Domain 4 Management and Leadership = 25%.

---

**Card X-004**
Q: What cognitive levels are used for CPHIMS questions?
A: Recall (recognize facts), Application (apply knowledge to a changed or practical situation), and Analysis (evaluate information, determine solutions, or judge solution usefulness).

---

**Card X-005**
Q: What pacing should you use for a 115-question, 120-minute CPHIMS exam?
A: About 63 seconds per displayed question. Answer every question, flag difficult scenarios, and return after completing easier items.

---

**Card X-006**
Q: Why should you avoid "real exam question" dumps when preparing for CPHIMS?
A: HIMSS exam questions are copyrighted and confidential. Use the official outline, learning plan, gap assessment, review guide, self-assessment, and original practice questions instead.

---

## DOMAIN 1 — Healthcare and Technology Environments (30 cards)

---

**Card D1-001**
Q: What is the primary characteristic that distinguishes an EHR from an EMR?
A: An EHR (Electronic Health Record) is designed to be shared across multiple providers and organizations; an EMR (Electronic Medical Record) is a single-provider digital record not designed for external sharing.

---

**Card D1-002**
Q: What are the three types of Health Information Exchange?
A: (1) Directed exchange — provider-to-provider, point-to-point. (2) Query-based exchange — provider looks up unknown patient records. (3) Consumer-mediated — patient controls and shares their own data.

---

**Card D1-003**
Q: A patient is transferred from hospital to a skilled nursing facility. Which HL7 document standard is used to support information continuity at the care transition?
A: C-CDA (Consolidated Clinical Document Architecture) — specifically a CCD (Continuity of Care Document).

---

**Card D1-004**
Q: What is an Accountable Care Organization (ACO)?
A: A group of providers (physicians, hospitals, others) who voluntarily coordinate care to improve quality and reduce costs for a defined patient population, sharing in any savings achieved with CMS.

---

**Card D1-005**
Q: Which federal law and regulatory framework primarily addresses information blocking and standardized API access in certified health IT?
A: The 21st Century Cures Act, implemented through ONC rules such as the Cures Act Final Rule and standardized API certification criteria.

---

**Card D1-006**
Q: Under HIPAA, what must an organization execute before sharing PHI with a cloud storage vendor?
A: A Business Associate Agreement (BAA) — required any time a third party creates, receives, maintains, or transmits PHI on behalf of a covered entity.

---

**Card D1-007**
Q: What are the two HIPAA-approved methods for de-identifying PHI?
A: (1) Safe Harbor — remove all 18 identifiers. (2) Expert Determination — a statistician certifies that re-identification risk is very small.

---

**Card D1-008**
Q: Name the 3 key components of the HIPAA Security Rule safeguard categories.
A: Administrative, Physical, and Technical safeguards.

---

**Card D1-009**
Q: Which accreditation body most commonly accredits acute care hospitals in the United States?
A: The Joint Commission (TJC).

---

**Card D1-010**
Q: What federal law prohibits physicians from self-referring Medicare/Medicaid patients to facilities they have a financial relationship with?
A: Stark Law (Physician Self-Referral Law).

---

**Card D1-011**
Q: What is EMTALA?
A: Emergency Medical Treatment and Labor Act — requires hospitals to screen and stabilize all patients presenting with an emergency, regardless of ability to pay.

---

**Card D1-012**
Q: What does 42 CFR Part 2 govern, and how does it differ from HIPAA?
A: It governs substance use disorder treatment records. It provides stricter confidentiality protections than HIPAA — disclosure typically requires patient consent, even to other treating providers.

---

**Card D1-013**
Q: What is a CMIO, and what is their primary function?
A: Chief Medical Informatics Officer — a physician leader who bridges clinical staff and the IT department, championing EHR adoption and optimization from a clinical perspective.

---

**Card D1-014**
Q: What is the Triple Aim?
A: A framework by the Institute for Healthcare Improvement (IHI): (1) Improve patient experience of care; (2) Improve the health of populations; (3) Reduce per-capita cost of healthcare.

---

**Card D1-015**
Q: What does the Quadruple Aim add to the Triple Aim?
A: Improving clinician work experience and reducing burnout (the fourth dimension).

---

**Card D1-016**
Q: What is HL7 FHIR and how does it differ from HL7 v2.x?
A: FHIR (Fast Healthcare Interoperability Resources) uses RESTful APIs and JSON/XML for modern web-based data exchange. HL7 v2.x uses pipe-delimited messages and requires an interface engine; FHIR enables direct application-to-application integration without middleware.

---

**Card D1-017**
Q: What is an interface engine and what does it do?
A: Middleware software that translates and routes messages between disparate healthcare systems (e.g., Mirth Connect, Rhapsody). It converts message formats and ensures data reaches the correct destination.

---

**Card D1-018**
Q: What is DICOM?
A: Digital Imaging and Communications in Medicine — the standard format for storing, transmitting, and viewing medical images (X-rays, MRI, CT scans) between modalities, PACS, and workstations.

---

**Card D1-019**
Q: What is the difference between RTO and RPO in disaster recovery?
A: RTO (Recovery Time Objective) = maximum acceptable system downtime. RPO (Recovery Point Objective) = maximum acceptable data loss expressed as time (e.g., "we can lose up to 4 hours of data").

---

**Card D1-020**
Q: In cloud computing, what is a SaaS model?
A: Software as a Service — the vendor hosts and manages the application; the customer accesses it over the internet. Most cloud EHR systems use this model.

---

**Card D1-021**
Q: What is an EMPI?
A: Enterprise Master Patient Index — a system that uniquely identifies and matches patient records across multiple facilities and systems within a health enterprise, preventing duplicate records.

---

**Card D1-022**
Q: What is CPOE?
A: Computerized Provider Order Entry — system allowing physicians and other authorized providers to enter medication, laboratory, imaging, and other orders electronically, reducing transcription errors.

---

**Card D1-023**
Q: What is PACS?
A: Picture Archiving and Communication System — a medical imaging technology that stores, retrieves, manages, and displays digital medical images (X-rays, CT, MRI, ultrasound) for radiologists and clinicians.

---

**Card D1-024**
Q: What is the difference between a patient portal and a PHR?
A: Patient portal: tethered to a specific EHR/provider; patient views data from that provider. PHR (Personal Health Record): patient-controlled; not tied to one provider; aggregates data from multiple sources.

---

**Card D1-025**
Q: What are Social Determinants of Health (SDOH)?
A: Non-clinical factors that influence health outcomes, including housing stability, food security, income, education, transportation, and social support.

---

**Card D1-026**
Q: What is remote patient monitoring (RPM)?
A: A technology-enabled service where patient health data (vitals, weight, glucose, etc.) is continuously or periodically collected from outside the clinical setting and transmitted to clinicians. Often used to reduce hospital readmissions for chronic disease patients.

---

**Card D1-027**
Q: What is an ADT system?
A: Admission, Discharge, Transfer — the core administrative system that tracks patient movement into, through, and out of a healthcare facility. ADT messages in HL7 v2.x trigger downstream system updates.

---

**Card D1-028**
Q: What is the CDM (Charge Description Master)?
A: A comprehensive list of every service, supply, and procedure an organization charges for, including the internal code, description, and standard charge. It is the foundation of the billing process.

---

**Card D1-029**
Q: What is an Integrated Delivery Network (IDN)?
A: A health system that owns and operates multiple types of healthcare facilities (hospitals, clinics, home health, rehab) under a single corporate structure, enabling coordinated care and shared services.

---

**Card D1-030**
Q: What is mHealth?
A: Mobile Health — the use of mobile devices (smartphones, tablets, wearables) and apps to deliver healthcare services, collect health data, and support patient self-management.

---

---

## DOMAIN 2 — Clinical Informatics (24 cards)

---

**Card D2-001**
Q: What does PRN mean in a medication order?
A: Pro re nata — "as needed." The medication is administered when the patient meets a defined clinical trigger (e.g., pain score ≥4), not on a scheduled basis.

---

**Card D2-002**
Q: What are the Five Rights of Medication Administration?
A: (1) Right Patient, (2) Right Drug, (3) Right Dose, (4) Right Route, (5) Right Time. BCMA verifies all five electronically at the point of care.

---

**Card D2-003**
Q: What is BCMA and why is it implemented?
A: Barcode Medication Administration — nurses scan the patient's wristband and medication barcode before administration to electronically verify the Five Rights. Implemented to reduce medication errors at the point of care.

---

**Card D2-004**
Q: What does the abbreviation "STAT" mean on a medication order?
A: Statim — immediately. The order must be processed and administered as soon as possible, with highest priority.

---

**Card D2-005**
Q: What does "PO" mean as a dosage route?
A: Per Os — by mouth (oral route of administration).

---

**Card D2-006**
Q: What is LOINC, and what is its primary use?
A: Logical Observation Identifiers Names and Codes — a terminology standard for identifying laboratory tests, clinical observations, and vital sign measurements. Ensures lab results can be consistently exchanged and understood across systems.

---

**Card D2-007**
Q: What is SNOMED CT, and when is it used?
A: Systematized Nomenclature of Medicine Clinical Terms — a comprehensive clinical terminology standard used in EHR documentation to represent diagnoses, symptoms, findings, and procedures in a machine-readable, consistent format.

---

**Card D2-008**
Q: What is the difference between ICD-10-CM and ICD-10-PCS?
A: ICD-10-CM is used for diagnosis coding in all care settings. ICD-10-PCS is used for inpatient procedure coding (hospital inpatient only). CPT is used for outpatient procedures.

---

**Card D2-009**
Q: What is a DRG?
A: Diagnosis Related Group — a classification system grouping inpatient hospital cases with similar clinical characteristics and expected resource consumption. CMS uses DRGs to determine Medicare inpatient reimbursement.

---

**Card D2-010**
Q: What is Case Mix Index (CMI) and what does a rising CMI indicate?
A: CMI is the average DRG weight of all inpatient discharges; it reflects the clinical complexity and resource intensity of the patient population. A rising CMI indicates a more clinically complex patient population.

---

**Card D2-011**
Q: What is Average Daily Census (ADC)?
A: The average number of inpatients in a facility per day, calculated as: Total patient days ÷ Number of days in the reporting period.

---

**Card D2-012**
Q: What is Average Length of Stay (ALOS)?
A: The average number of days a patient remains in the hospital per admission, calculated as: Total inpatient days ÷ Total discharges.

---

**Card D2-013**
Q: What are the four levels of analytics maturity in order?
A: (1) Descriptive — what happened; (2) Diagnostic — why it happened; (3) Predictive — what will happen; (4) Prescriptive — what should we do.

---

**Card D2-014**
Q: For a quality improvement team tracking whether a new infection control protocol reduced CLABSI rates over 12 months, which visualization is MOST appropriate?
A: Control chart (or run chart) — shows trend over time and distinguishes common-cause from special-cause variation.

---

**Card D2-015**
Q: What is alert fatigue?
A: The phenomenon where clinicians become desensitized to frequent, often low-value system alerts and begin dismissing them without reading — reducing the effectiveness of legitimate safety alerts. Indicated by a high override rate (>90% is a common threshold for concern).

---

**Card D2-016**
Q: What are the Five Rights of CDS (Osheroff framework)?
A: (1) Right information, (2) Right person, (3) Right format, (4) Right channel, (5) Right time in the clinical workflow.

---

**Card D2-017**
Q: What is the difference between a hard-stop and a soft-stop CDS alert?
A: Soft-stop: informational alert; clinician can acknowledge and proceed without action. Hard-stop: clinician is blocked from proceeding until they take a required action (e.g., document a contraindication reason).

---

**Card D2-018**
Q: What is Promoting Interoperability (PI)?
A: The current name for the CMS program formerly called Meaningful Use — it incentivizes healthcare providers to use certified EHR technology to improve patient care, outcomes, and interoperability.

---

**Card D2-019**
Q: What is NLP (Natural Language Processing) in healthcare informatics?
A: An AI technique that extracts structured, coded information from unstructured free-text clinical notes (e.g., identifying a diagnosis of "diabetes" from a physician's narrative note to populate a problem list).

---

**Card D2-020**
Q: What is a control chart used for in healthcare quality improvement?
A: A statistical tool that plots performance data over time with upper and lower control limits (±3 standard deviations), enabling teams to distinguish common-cause variation (normal process variation) from special-cause variation (signals requiring investigation).

---

**Card D2-021**
Q: What is the Turnaround Time (TAT) metric in laboratory informatics?
A: The time elapsed from when a lab order is placed (or specimen received) to when the result is available to the ordering clinician. A key quality indicator for laboratory efficiency.

---

**Card D2-022**
Q: What is an order set in clinical informatics?
A: A pre-built, evidence-based collection of orders (medications, labs, imaging, nursing orders) for a specific clinical condition or procedure (e.g., sepsis bundle, AMI order set). Reduces variation and supports best practice adherence.

---

**Card D2-023**
Q: What is the eMAR and how does it differ from a paper MAR?
A: Electronic Medication Administration Record — documents that each medication was administered (or not, with reason). Unlike paper MAR, eMAR integrates with BCMA to verify Five Rights at the point of care and is directly tied to CPOE orders.

---

**Card D2-024**
Q: What does "copy-forward" functionality in an EHR risk, and why is it a patient safety concern?
A: Copy-forward allows clinicians to copy a previous note into the current encounter. The risk is propagation of outdated or inaccurate information (e.g., resolved conditions, old medications) without review, leading to clinical errors and documentation bloat.

---

---

## DOMAIN 3 — Healthcare Information and Systems Management (42 cards)

---

**Card D3-001**
Q: What are the seven phases of the SDLC?
A: Planning → Analysis/Requirements → Design → Build/Development → Testing → Implementation/Go-live → Maintenance/Optimization.

---

**Card D3-002**
Q: What is the primary advantage of Agile over Waterfall for EHR implementations?
A: Agile delivers working increments through iterative sprints and incorporates continuous user feedback, allowing scope adjustments; Waterfall requires all requirements to be finalized before build begins and does not accommodate change easily.

---

**Card D3-003**
Q: What is a gap analysis in the context of HIT project management?
A: A structured comparison of the organization's current capabilities (as-is state) against the desired future state, documenting the gaps that a new system or process must address.

---

**Card D3-004**
Q: What are the five phases of DMAIC?
A: Define, Measure, Analyze, Improve, Control.

---

**Card D3-005**
Q: What are the four phases of PDCA?
A: Plan, Do, Check (or Study), Act.

---

**Card D3-006**
Q: What is the difference between DMAIC and PDCA?
A: DMAIC (Six Sigma) is heavily data-driven, statistical, and best for eliminating process defects. PDCA is a simpler iterative improvement cycle best for ongoing quality improvement without extensive statistical rigor.

---

**Card D3-007**
Q: What is a swim lane diagram?
A: A type of flowchart or process map that organizes process steps by the role or department responsible for each step. It makes handoffs between parties visible and identifies gaps in accountability.

---

**Card D3-008**
Q: What is a value stream map?
A: A Lean tool that maps every step in a process from beginning to end, labeling each step as value-added or non-value-added. Used to identify and eliminate waste.

---

**Card D3-009**
Q: What is an RFI and when is it used?
A: Request for Information — an early-stage document sent to vendors to gather general information about their capabilities and products before issuing a formal RFP. It carries no commitment to purchase.

---

**Card D3-010**
Q: What is an SLA?
A: Service Level Agreement — a contract that specifies performance commitments from a vendor or service provider, such as 99.9% uptime, 4-hour problem response time, or 24/7 support availability.

---

**Card D3-011**
Q: What is an SOW?
A: Statement of Work — a contract document that defines the specific scope of work, deliverables, timeline, and payment terms for a particular engagement between an organization and a vendor.

---

**Card D3-012**
Q: What is MoSCoW prioritization?
A: A requirements prioritization framework: Must have (required for go-live), Should have (important but not critical), Could have (nice-to-have), Won't have this time (explicitly deferred).

---

**Card D3-013**
Q: What is the purpose of a project charter?
A: A formal document that authorizes a project, defines its scope, objectives, budget, sponsor, and key stakeholders. It grants the project manager authority to apply resources to the project.

---

**Card D3-014**
Q: What is ROI in the context of HIT decision-making?
A: Return on Investment = (Net Benefits ÷ Total Cost) × 100. A positive ROI indicates the investment generates more value than it costs over a defined period.

---

**Card D3-015**
Q: What is Total Cost of Ownership (TCO)?
A: All direct and indirect costs associated with a system over its entire useful life, including purchase/license, implementation, training, maintenance, support, upgrades, and eventual decommissioning.

---

**Card D3-016**
Q: What are the four levels of interoperability?
A: (1) Foundational — basic connectivity/data receipt. (2) Structural — standardized format (HL7, DICOM). (3) Semantic — shared meaning via common terminology (SNOMED CT, LOINC). (4) Organizational — governance, policy, and workflow alignment.

---

**Card D3-017**
Q: What is SMART on FHIR?
A: A standard that enables third-party healthcare applications to securely access EHR data via OAuth2/FHIR APIs. It provides a consistent authorization framework for app integration with EHRs.

---

**Card D3-018**
Q: What is the function of ONC in the context of HIT?
A: The Office of the National Coordinator for Health IT coordinates national health IT policy, manages health IT certification programs, and leads interoperability standards development, including standardized API requirements for certified health IT.

---

**Card D3-019**
Q: What is a Business Continuity Plan (BCP)?
A: A plan that documents how an organization will maintain or quickly resume essential business functions during and after a disruptive event (cyberattack, natural disaster, power outage).

---

**Card D3-020**
Q: What is a hot site in disaster recovery?
A: A fully equipped and operational backup facility with live copies of all systems and data. It provides the fastest recovery time but is the most expensive option.

---

**Card D3-021**
Q: What is the purpose of downtime procedures?
A: Pre-defined manual processes that clinical and operational staff use when electronic systems are unavailable. They ensure patient care can continue safely during system outages.

---

**Card D3-022**
Q: What is data governance?
A: A framework of policies, standards, and processes that define who has authority over data, how data quality is maintained, how data is defined (data dictionary), and how data is used and protected across the organization.

---

**Card D3-023**
Q: What is Master Data Management (MDM)?
A: A discipline that ensures critical shared data elements (patient identity, provider identity, facility information) are consistent, accurate, and used as a single authoritative source across all systems.

---

**Card D3-024**
Q: What is the HIPAA Security Rule?
A: The HIPAA rule that requires covered entities and business associates to implement administrative, physical, and technical safeguards to ensure the confidentiality, integrity, and availability of ePHI (electronic PHI).

---

**Card D3-025**
Q: What is the CIA Triad?
A: Confidentiality (data accessible only to authorized users) + Integrity (data is accurate and unaltered) + Availability (data and systems accessible when needed). The three core principles of information security.

---

**Card D3-026**
Q: What is Role-Based Access Control (RBAC)?
A: An access control model where system access permissions are assigned to roles (e.g., nurse, physician, billing clerk) rather than to individual users. Users inherit permissions for their assigned role.

---

**Card D3-027**
Q: What is the principle of least privilege?
A: Users are granted the minimum level of access required to perform their job functions — no more. Minimizes the risk of accidental or intentional misuse of privileged access.

---

**Card D3-028**
Q: What are the three types of HIPAA safeguards and give one example of each?
A: Administrative (e.g., annual security risk assessment), Physical (e.g., server room badge access), Technical (e.g., automatic session timeout / encryption).

---

**Card D3-029**
Q: What is a security risk assessment and when must it be performed?
A: A required HIPAA process to identify, evaluate, and prioritize vulnerabilities and threats to ePHI. Must be conducted at least annually and after significant changes to the environment.

---

**Card D3-030**
Q: What is the sequence of formal testing phases before an EHR goes live?
A: Unit testing → Integration testing → System testing → User Acceptance Testing (UAT) → Acceptance (contractual sign-off).

---

**Card D3-031**
Q: What is regression testing?
A: Testing performed after a system change (patch, upgrade, new build) to verify that previously working functionality has not been broken. Critical before deploying any update to production.

---

**Card D3-032**
Q: What is UAT?
A: User Acceptance Testing — performed by end users (not the development team) to verify the system meets their documented requirements. Successful UAT is typically required before go-live sign-off.

---

**Card D3-033**
Q: What is benefits realization?
A: A post-implementation process that measures whether the benefits projected in the business case have been achieved (e.g., at 3, 6, and 12 months post-go-live). Results are reported to leadership and used to guide optimization.

---

**Card D3-034**
Q: What is change control in the context of HIT project management?
A: A formal governance process to evaluate, approve or reject, document, and communicate any proposed change to a system, project scope, schedule, or budget. Prevents uncontrolled changes and scope creep.

---

**Card D3-035**
Q: What is At-the-Elbow (ATE) support?
A: A go-live support model where trained IT staff or superusers are physically present on clinical units to provide immediate, point-of-care assistance to staff using a new system.

---

**Card D3-036**
Q: What is the Train-the-Trainer model?
A: A training strategy where a core group of individuals are trained deeply on a system, who then train their colleagues. Enables scalable training delivery for large user populations without requiring all training to be delivered by the central implementation team.

---

**Card D3-037**
Q: What is scope creep?
A: The uncontrolled expansion of a project's scope without formal change control approval or corresponding adjustments to schedule, budget, or resources. A primary cause of project delays and cost overruns.

---

**Card D3-038**
Q: What is an NDA?
A: Non-Disclosure Agreement — a legal contract between parties that prohibits sharing of confidential information received during a business relationship (e.g., vendor evaluation, contract negotiations).

---

**Card D3-039**
Q: What is data retention and why does it matter in HIT?
A: Data retention defines how long specific types of data must be stored before it can be destroyed. It is driven by legal, regulatory, and operational requirements. HIT leaders must ensure systems support retention schedules and secure disposal.

---

**Card D3-040**
Q: What is penetration testing?
A: An authorized simulated cyberattack performed by security professionals to identify exploitable vulnerabilities in an organization's systems, networks, or applications before malicious actors find them.

---

**Card D3-041**
Q: What is a SIEM system?
A: Security Information and Event Management — a platform that aggregates, correlates, and analyzes security event logs from across the IT environment in real time to detect threats and enable rapid incident response.

---

**Card D3-042**
Q: What does RPO = 4 hours mean for a hospital's data backup strategy?
A: The organization has committed that in any disaster scenario, it can lose no more than 4 hours' worth of data. Backup and replication strategies must ensure data is recoverable to within a 4-hour window at any point in time.

---

---

## DOMAIN 4 — Management and Leadership (30 cards)

---

**Card D4-001**
Q: What is the Balanced Scorecard and what are its four perspectives?
A: A strategic performance management framework by Kaplan and Norton. Four perspectives: (1) Financial, (2) Customer, (3) Internal Business Processes, (4) Learning and Growth.

---

**Card D4-002**
Q: What is a SWOT analysis?
A: A strategic assessment framework: Strengths (internal advantages), Weaknesses (internal limitations), Opportunities (external factors to leverage), Threats (external factors to mitigate).

---

**Card D4-003**
Q: What is the purpose of an IT strategic plan?
A: To align IT investments, capabilities, and initiatives with the organization's overall strategic goals over a multi-year horizon (typically 3–5 years). Updated annually and reviewed at the executive level.

---

**Card D4-004**
Q: What is benchmarking in HIT management?
A: Comparing an organization's performance metrics against an external reference point — such as a national average, industry peer group, or best-in-class standard — to identify performance gaps and set improvement targets.

---

**Card D4-005**
Q: What is an SLA and what happens when a vendor breaches it?
A: Service Level Agreement — a contractual performance commitment. When breached, the organization should formally document the breach, notify the vendor, and initiate the escalation or remedy process defined in the contract (e.g., service credits, corrective action plan).

---

**Card D4-006**
Q: What are Kotter's 8 Steps for organizational change?
A: (1) Create urgency, (2) Build a guiding coalition, (3) Develop a vision, (4) Communicate the vision, (5) Empower broad-based action, (6) Generate short-term wins, (7) Sustain acceleration, (8) Anchor the change in culture.

---

**Card D4-007**
Q: What is the ADKAR model?
A: A change management model by Prosci describing the individual change journey: Awareness (of the need to change), Desire (to support it), Knowledge (of how), Ability (to implement), Reinforcement (to sustain).

---

**Card D4-008**
Q: What is a risk register?
A: A project or operational document that logs all identified risks, each with: description, owner, probability, impact, risk score (probability × impact), mitigation strategy, and current status.

---

**Card D4-009**
Q: What are the four risk response strategies?
A: Avoid (eliminate the risk), Mitigate (reduce probability or impact), Transfer (shift to another party, e.g., insurance), Accept (acknowledge and monitor without action).

---

**Card D4-010**
Q: What is portfolio management in healthcare IT?
A: The governance process of evaluating, prioritizing, and managing all IT projects and programs across the organization as a unified investment portfolio — balancing strategic value, risk, cost, and resource capacity.

---

**Card D4-011**
Q: What is a PMO?
A: Project Management Office — a centralized function that defines and enforces project management standards, provides oversight and reporting on the project portfolio, and supports project managers across the organization.

---

**Card D4-012**
Q: What is a RACI matrix?
A: A responsibility assignment matrix: Responsible (does the work), Accountable (ultimately answerable for the outcome), Consulted (provides input), Informed (kept up to date). Every task has exactly one Accountable party.

---

**Card D4-013**
Q: What is the difference between a capital budget and an operating budget in HIT?
A: Capital budget: funds one-time assets with long-term value (hardware purchase, major software license, large-scale implementation). Operating budget: funds recurring costs (SaaS subscriptions, maintenance contracts, staff, supplies).

---

**Card D4-014**
Q: What is a chargeback model in IT financial management?
A: A model where the IT department allocates actual costs back to the business units or departments that consumed IT services, based on measured usage. Creates cost transparency and accountability.

---

**Card D4-015**
Q: What is earned value management (EVM)?
A: A project control technique that integrates scope, schedule, and cost to measure project performance. Key metrics: CPI (Cost Performance Index — >1.0 = under budget) and SPI (Schedule Performance Index — >1.0 = ahead of schedule).

---

**Card D4-016**
Q: What are the components of an effective compliance program (OIG 7 elements)?
A: (1) Written policies and procedures, (2) Designated compliance officer, (3) Training and education, (4) Effective communication channels, (5) Internal monitoring and auditing, (6) Enforcement and discipline, (7) Response to detected problems and corrective action.

---

**Card D4-017**
Q: What is the MOST effective strategy to address resistance to an EHR go-live among nursing staff?
A: Involve nursing staff early as superusers and change champions in the design, testing, and go-live process. Address concerns through communication and targeted training rather than mandates alone.

---

**Card D4-018**
Q: What is the conflict resolution style that is most likely to achieve a win-win outcome?
A: Collaboration — both parties work together to find a mutually satisfying solution that fully addresses each party's core needs.

---

**Card D4-019**
Q: What should an HIT leader do when a vendor offers gifts during contract negotiations?
A: Decline the gifts and report the offer to the appropriate internal authority (e.g., compliance officer) per the organization's conflict of interest policy.

---

**Card D4-020**
Q: What are the key components of a business case presented to executive leadership?
A: Problem/opportunity statement → proposed solution → financial analysis (costs, benefits, ROI, payback period) → strategic alignment → implementation approach → risks and mitigations → recommendation.

---

**Card D4-021**
Q: What is succession planning in HIT leadership?
A: The proactive process of identifying high-potential staff and developing them through targeted opportunities, mentorship, and training to be prepared to step into key leadership roles when vacancies arise.

---

**Card D4-022**
Q: What distinguishes prescriptive from predictive analytics?
A: Predictive analytics forecasts what will likely happen (e.g., a readmission risk score). Prescriptive analytics recommends or automatically triggers the best action to take based on that prediction (e.g., automatically enrolling the patient in a care management program).

---

**Card D4-023**
Q: What is stakeholder analysis and why is it important for HIT projects?
A: A process of identifying all parties affected by a project, assessing their level of influence and interest, and developing engagement and communication strategies for each. It reduces resistance and improves adoption by addressing concerns early.

---

**Card D4-024**
Q: What should be included in an IT communication plan?
A: Stakeholder list, communication objectives, message content, format (email, meeting, dashboard), frequency, sender/owner, and feedback mechanism.

---

**Card D4-025**
Q: What is the purpose of a data use agreement (DUA)?
A: A formal agreement specifying the permitted uses of data shared between parties — particularly for limited data sets (de-identified except for certain dates and geographic identifiers). Required when sharing patient data for research under HIPAA.

---

**Card D4-026**
Q: What is the difference between correlation and causation in data analysis?
A: Correlation means two variables move together statistically; causation means one variable directly causes the change in another. A correlation cannot be interpreted as causation without controlled study design or rigorous statistical methods.

---

**Card D4-027**
Q: What are adult learning principles (andragogy) relevant to HIT training design?
A: Adults are self-directed, learn best from experience-based and practical examples, need to understand why they are learning something, are internally motivated, and prefer relevance to their immediate responsibilities.

---

**Card D4-028**
Q: What is the purpose of a formal vendor performance review?
A: To evaluate the vendor's delivery against contractual commitments (SLAs, deliverables, quality standards), identify issues requiring correction, document the conversation, and maintain an accountable vendor relationship.

---

**Card D4-029**
Q: What is organizational culture, and why does it matter for HIT implementations?
A: The shared values, beliefs, behaviors, and norms within an organization. Culture strongly influences whether technology changes succeed; a culture resistant to change or lacking trust in IT will undermine implementations regardless of technical quality.

---

**Card D4-030**
Q: What is the role of executive sponsorship in a major HIT project?
A: The executive sponsor champions the project at the leadership level, secures funding and resources, removes organizational barriers, communicates strategic importance, and holds the organization accountable for adoption and change.
