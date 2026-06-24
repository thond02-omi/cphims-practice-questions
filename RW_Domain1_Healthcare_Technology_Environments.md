# Domain 1 — Real-World Practice Questions
## Healthcare and Technology Environments (25% of exam / ~25 scored questions)

Scenario-based questions aligned to HIMSS CPHIMS Task Statements 1.A.1 – 1.B.2.
Answer without reading the rationale first, then review why the best answer outperforms the distractors.
Keywords to watch: **FIRST · NEXT · BEST · MOST appropriate**

---

## Task 1.A.1 — Types of Healthcare Organizations

> **[AP] RW-D1-01**: A rural clinic wants to launch video visits for hypertension follow-up. The vendor platform will store visit notes, images, and patient messages. Before signing the contract, what should the clinic do FIRST from a privacy and compliance perspective?
> - A) Ask physicians to use personal video accounts until the vendor is live
> - B) Execute a Business Associate Agreement and review the vendor's security controls **[CORRECT]**
> - C) Announce the service on the patient portal
> - D) Build a custom interface to the state HIE
>
> *Rationale*: The vendor will create, receive, maintain, or transmit PHI, so the BAA and security due diligence come before production use.
> *Maps to: Task 1.A.4, 1.A.5*

> **[RE] RW-D1-11**: A community clinic in a rural county receives enhanced Medicare and Medicaid reimbursement and must serve uninsured patients regardless of ability to pay, funded in part by federal grants. This organization is BEST described as:
> - A) An Accountable Care Organization
> - B) A Federally Qualified Health Center **[CORRECT]**
> - C) A long-term care facility
> - D) An integrated delivery network
>
> *Rationale*: FQHCs receive federal funding through HRSA and must serve underserved populations on a sliding-fee scale regardless of insurance status.
> *Maps to: Task 1.A.1*

> **[AN] RW-D1-13**: A regional hospital contractually aligns with independent primary care physicians and a home health agency to jointly manage Medicare patient outcomes and costs — but all parties remain separately owned. This arrangement is MOST consistent with:
> - A) An Integrated Delivery Network
> - B) An Accountable Care Organization **[CORRECT]**
> - C) A Federally Qualified Health Center
> - D) Horizontal integration
>
> *Rationale*: ACOs coordinate care and share accountability across separately owned organizations; IDNs involve common ownership of multiple facility types.
> *Maps to: Task 1.A.1*

> **[RE] RW-D1-26**: A patient is seen by their family physician for a routine check-up, then referred to a cardiologist for arrhythmia evaluation, and finally sent to a cardiac surgery program for valve replacement. These three levels of care are respectively described as:
> - A) Acute, post-acute, long-term care
> - B) Primary, specialty, tertiary care **[CORRECT]**
> - C) Ambulatory, inpatient, home health
> - D) Fee-for-service, managed care, capitation
>
> *Rationale*: Primary = first-contact preventive care; Specialty = referred for a specific condition; Tertiary = highly specialized, often referral-only (transplant, complex surgery).
> *Maps to: Task 1.A.1*

> **[RE] RW-D1-27**: A hospital's payer mix includes Medicare, Medicaid, and commercial insurance. Which payer is a joint federal-state program that finances healthcare for low-income individuals, including many nursing home residents?
> - A) Medicare
> - B) Medicaid **[CORRECT]**
> - C) CHIP only
> - D) TRICARE
>
> *Rationale*: Medicaid is jointly funded by federal and state governments and covers low-income individuals including those in long-term care; Medicare is the federal program primarily for individuals 65+.
> *Maps to: Task 1.A.1*

> **[AP] RW-D1-28**: A hospital system transitions from billing for each individual service to a contract where it receives a fixed monthly payment per patient to manage their total healthcare needs. This model is BEST described as:
> - A) Fee-for-service
> - B) Capitation / value-based care **[CORRECT]**
> - C) Diagnosis-Related Group payment
> - D) Cost-plus reimbursement
>
> *Rationale*: Capitation pays a fixed per-member-per-month rate for all covered services, shifting financial risk to the provider and incentivizing preventive care — a core feature of value-based models.
> *Maps to: Task 1.A.1, 1.A.5*

---

## Task 1.A.2 — Interrelationships Within and Across Organizations

> **[AN] RW-D1-02**: A patient arrives unconscious in the ED after traveling from another state. The local hospital has no prior record. The physician needs medication history and recent discharge information. Which exchange method is MOST appropriate?
> - A) Directed exchange to a known receiving provider
> - B) Query-based HIE lookup across participating organizations **[CORRECT]**
> - C) Consumer-mediated exchange through the patient portal
> - D) Faxed release-of-information request after stabilization
>
> *Rationale*: Query-based exchange is used when the provider does not know where all relevant records are held and needs to search a network.
> *Maps to: Task 1.A.2*

> **[AN] RW-D1-04**: A hospital discharges patients to several skilled nursing facilities. Medication discrepancies are common within 24 hours of transfer. Which intervention BEST addresses the information continuity problem?
> - A) Ask patients to carry printed medication lists
> - B) Send a C-CDA transition-of-care document and standardize medication reconciliation workflow **[CORRECT]**
> - C) Train SNF billing staff on inpatient DRG coding
> - D) Give the SNFs view-only access to the hospital's entire EHR
>
> *Rationale*: The problem is a care transition gap, so structured exchange plus reconciliation workflow is the strongest solution.
> *Maps to: Task 1.A.2, 1.B.2*

> **[AP] RW-D1-23**: A hospital acquires two smaller community hospitals in adjacent markets to expand inpatient capacity. This growth strategy is BEST described as:
> - A) Vertical integration
> - B) Horizontal integration **[CORRECT]**
> - C) Consumer-mediated exchange
> - D) ACO formation
>
> *Rationale*: Horizontal integration combines organizations of the same type (hospital + hospital); vertical integration acquires upstream or downstream organizations (e.g., hospital acquires SNF).
> *Maps to: Task 1.A.2*

> **[AP] RW-D1-29**: A patient uses a smartphone app to aggregate health records from three different providers and shares a curated summary with a new specialist. Which HIE method does this represent?
> - A) Directed exchange
> - B) Query-based exchange
> - C) Consumer-mediated exchange **[CORRECT]**
> - D) Push-based exchange
>
> *Rationale*: Consumer-mediated exchange puts the patient in control of collecting, managing, and sharing their own health data across providers.
> *Maps to: Task 1.A.2*

> **[AN] RW-D1-30**: A state-funded HIE serves all payers and providers in a geographic region and receives grants to connect rural hospitals to specialists. A competing health system operates its own internal exchange for its owned facilities only. These are examples of:
> - A) Directed and query-based exchange, respectively
> - B) Public HIE and private HIE, respectively **[CORRECT]**
> - C) Community HIE and consumer-mediated exchange, respectively
> - D) FHIR-based and HL7 v2.x-based exchange, respectively
>
> *Rationale*: Public HIEs are government-funded and serve broad regional populations; private HIEs are operated by a single health system for internal information sharing.
> *Maps to: Task 1.A.2*

---

## Task 1.A.3 — Roles of HIT Professionals

> **[AN] RW-D1-10**: A health system acquires two outpatient practices and wants standard workflows, shared patient identity, and shared quality reporting, while keeping some local support staff. Which operating model is MOST consistent with this?
> - A) Completely decentralized IT
> - B) Matrix IT governance with enterprise standards and local support **[CORRECT]**
> - C) No governance until after go-live
> - D) Separate EHR instances with no data sharing
>
> *Rationale*: Matrix governance balances enterprise standardization with local operational support.
> *Maps to: Task 1.A.3, 1.B.1*

> **[AP] RW-D1-16**: After an EHR go-live, physicians are creating workarounds, skipping order sets, and documenting inconsistently. Adoption is stalling. Which HIT leadership role is BEST positioned to lead the remediation effort?
> - A) CISO
> - B) CIO
> - C) CMIO **[CORRECT]**
> - D) Project Manager
>
> *Rationale*: The CMIO bridges clinical staff and IT and is the physician champion for EHR adoption, workflow optimization, and clinical change management.
> *Maps to: Task 1.A.3*

> **[AP] RW-D1-31**: After an EHR implementation, nursing documentation workflows are inefficient and nurses report poor usability of assessment screens. Which HIT role is BEST suited to lead the nursing workflow optimization effort?
> - A) CMIO
> - B) CNIO **[CORRECT]**
> - C) CISO
> - D) Help Desk Tier 2
>
> *Rationale*: The CNIO (Chief Nursing Informatics Officer) is the nursing counterpart to the CMIO, responsible for nursing workflow optimization and nursing input into EHR design.
> *Maps to: Task 1.A.3*

---

## Task 1.A.4 — Laws, Regulations, and Accreditation

> **[AN] RW-D1-06**: A behavioral health clinic treats patients with substance use disorder. The health system wants to include all notes in its enterprise HIE feed. What concern should the HIT leader raise FIRST?
> - A) Whether PACS storage is sufficient
> - B) Whether 42 CFR Part 2 consent and segmentation requirements apply **[CORRECT]**
> - C) Whether the billing system supports CPT modifiers
> - D) Whether the HIE uses a private cloud
>
> *Rationale*: Substance use disorder records carry stricter confidentiality requirements than standard HIPAA; 42 CFR Part 2 requires separate consent and data segmentation.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-05**: A patient asks a certified EHR hospital to send their data to a third-party app. The hospital has privacy concerns but no specific legal basis to deny the request. What is the BEST response?
> - A) Deny the request because third-party apps are never covered by HIPAA
> - B) Support access through the appropriate standardized API workflow while documenting privacy education **[CORRECT]**
> - C) Require the patient to pick up paper records only
> - D) Charge an interface development fee before releasing any data
>
> *Rationale*: 21st Century Cures Act information blocking rules and ONC API requirements favor appropriate access; without a valid exception, denial may constitute information blocking.
> *Maps to: Task 1.A.4, 1.B.2*

> **[AN] RW-D1-08**: A vendor says it cannot connect its EHR to a competing scheduling app because "security is too risky," but cannot identify a specific security control or exception. What should the organization do?
> - A) Accept the explanation and abandon integration
> - B) Evaluate whether an information blocking exception truly applies and document the decision **[CORRECT]**
> - C) Disable all API access for patient safety
> - D) Replace the scheduling app immediately
>
> *Rationale*: Security may be a valid exception, but it must be specific, proportionate, and documented — vague security claims do not qualify automatically.
> *Maps to: Task 1.A.4, 1.B.2*

> **[AP] RW-D1-14**: A hospital discovers that 620 patient records were accessed by an unauthorized employee over two months. Which HIPAA Breach Notification Rule requirements apply?
> - A) Notify only the affected patients
> - B) Notify HHS and patients, but not media because the number is under 1,000
> - C) Notify the affected patients, HHS, and prominent media in the affected area because the breach exceeds 500 individuals **[CORRECT]**
> - D) Notify only the state attorney general
>
> *Rationale*: Breaches involving 500+ individuals in a jurisdiction require notification to affected individuals, HHS, and prominent local media outlets.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-15**: An uninsured patient arrives in the ED with chest pain. Registration staff request proof of insurance before the on-call physician can see the patient. Which federal law does this process most directly threaten to violate?
> - A) Stark Law
> - B) HIPAA Privacy Rule
> - C) EMTALA **[CORRECT]**
> - D) Anti-Kickback Statute
>
> *Rationale*: EMTALA requires emergency medical screening and stabilization for all individuals presenting at an ED, regardless of insurance status or ability to pay.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-17**: A research team wants to share a patient dataset with a university partner. They remove all 18 PHI identifiers defined by HIPAA before transmission. Which de-identification method are they applying?
> - A) Expert Determination
> - B) Limited Data Set creation
> - C) Safe Harbor de-identification **[CORRECT]**
> - D) Data minimization
>
> *Rationale*: Safe Harbor requires removal of all 18 HIPAA-defined identifiers. Expert Determination uses statistical certification — a different approach requiring a qualified statistician.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-21**: A psychiatric hospital is seeking formal accreditation for its substance use disorder treatment and rehabilitation programs. Which accreditation body is MOST relevant?
> - A) The Joint Commission
> - B) NCQA
> - C) CARF **[CORRECT]**
> - D) DNV GL
>
> *Rationale*: CARF accredits rehabilitation and behavioral health organizations, including substance use disorder treatment programs.
> *Maps to: Task 1.A.4*

> **[AN] RW-D1-25**: HITECH was enacted in 2009 to strengthen HIPAA. Which capability did HITECH add that HIPAA did not originally include?
> - A) The requirement for Business Associate Agreements
> - B) The definition of PHI and its 18 identifiers
> - C) Increased monetary penalty tiers and direct applicability of security requirements to business associates **[CORRECT]**
> - D) The EMTALA emergency screening requirement
>
> *Rationale*: HITECH increased maximum civil money penalties, created tiered penalty structures based on culpability, and extended direct HIPAA Security Rule obligations to business associates.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-39**: A physician group refers patients exclusively to a physical therapy practice the physicians co-own and bills those services to Medicare. The federal law MOST directly applicable to this arrangement is:
> - A) EMTALA
> - B) HIPAA Privacy Rule
> - C) Stark Law **[CORRECT]**
> - D) 21st Century Cures Act
>
> *Rationale*: The Stark Law prohibits physician self-referral for designated health services billed to Medicare or Medicaid when the physician has a financial relationship with the receiving entity.
> *Maps to: Task 1.A.4*

---

## Task 1.A.5 — Healthcare Technology Trends

> **[AP] RW-D1-09**: A population health team wants to identify diabetic patients who missed annual retinal exams and target outreach. Which application category is MOST relevant?
> - A) Business intelligence and population health analytics **[CORRECT]**
> - B) PACS
> - C) RIS
> - D) Pharmacy dispensing system
>
> *Rationale*: This task requires aggregating clinical data, identifying care gaps, and generating targeted outreach — all functions of BI and population health platforms.
> *Maps to: Task 1.A.5, 1.B.1*

> **[AP] RW-D1-12**: A health system redesigns EHR workflows specifically to reduce after-hours documentation burden on physicians and prevent clinician burnout. Which aim framework does this initiative directly address beyond the original Triple Aim?
> - A) The IHI Sepsis Bundle
> - B) The Quadruple Aim **[CORRECT]**
> - C) Meaningful Use Stage 3
> - D) The SDOH framework
>
> *Rationale*: The Quadruple Aim adds clinician well-being and work experience to the Triple Aim's three dimensions (patient experience, population health, per-capita cost).
> *Maps to: Task 1.A.5*

> **[AN] RW-D1-22**: An oncology center uses a patient's tumor genomic profile to select chemotherapy drugs most likely to be effective for that individual rather than following a standard population-based protocol. This approach is BEST described as:
> - A) Remote patient monitoring
> - B) Population health risk stratification
> - C) Precision medicine **[CORRECT]**
> - D) Natural language processing
>
> *Rationale*: Precision medicine uses individual genetic, molecular, or biomarker data to customize treatment rather than applying one-size-fits-all population-based protocols.
> *Maps to: Task 1.A.5*

> **[AP] RW-D1-40**: A health system deploys connected weight scales and blood pressure cuffs for 500 heart failure patients to transmit daily readings to a care team dashboard. Which technology trend does this MOST directly represent?
> - A) Precision medicine
> - B) mHealth patient portals
> - C) Remote patient monitoring via wearable/IoMT devices **[CORRECT]**
> - D) Consumer-mediated HIE
>
> *Rationale*: IoMT (Internet of Medical Things) devices continuously collect patient data outside the clinical setting; RPM uses this data stream to enable proactive care intervention.
> *Maps to: Task 1.A.5*

---

## Task 1.B.1 — Healthcare Applications

> **[AP] RW-D1-03**: A five-hospital system has frequent duplicate patient records when patients receive care at different campuses. Which technology should be prioritized?
> - A) Enterprise Master Patient Index **[CORRECT]**
> - B) Patient portal replacement
> - C) New charge description master
> - D) Radiology PACS upgrade
>
> *Rationale*: An EMPI provides patient identity matching across multiple facilities and systems using probabilistic or deterministic algorithms.
> *Maps to: Task 1.B.1*

> **[AP] RW-D1-36**: A patient is admitted to a hospital, transferred from the ICU to a medical floor, and then discharged to a rehabilitation center. Which clinical application is the PRIMARY source of record for tracking these movements in real time?
> - A) EHR clinical documentation module
> - B) ADT (Admission, Discharge, Transfer) system **[CORRECT]**
> - C) Revenue cycle management system
> - D) PACS
>
> *Rationale*: The ADT system is the authoritative source for patient registration, location, and movement events; it also triggers HL7 ADT messages to downstream systems.
> *Maps to: Task 1.B.1*

> **[AP] RW-D1-37**: A patient manages their own health record by collecting data from multiple providers and sharing a customized summary with each new care team. This tool is patient-owned and not tethered to any single provider. It is BEST described as:
> - A) EHR
> - B) EMR
> - C) PHR (Personal Health Record) **[CORRECT]**
> - D) CCD
>
> *Rationale*: A PHR is patient-controlled and not tied to a specific provider system, unlike an EHR (provider-managed, shareable) or EMR (provider-managed, not designed for sharing).
> *Maps to: Task 1.B.1*

---

## Task 1.B.2 — Technology Infrastructure

> **[AP] RW-D1-07**: Nurses report that BCMA scanning fails in two medication rooms, but only during peak evening rounds. Which infrastructure issue should be investigated FIRST?
> - A) Charge capture logic
> - B) Wireless network coverage and capacity **[CORRECT]**
> - C) DRG grouper configuration
> - D) Patient portal authentication
>
> *Rationale*: Mobile bedside workflows depend on reliable wireless connectivity; time-of-day failures during high concurrency point to capacity or coverage gaps.
> *Maps to: Task 1.B.2*

> **[AN] RW-D1-18**: An integration team must connect a new third-party patient engagement app to the EHR. The vendor offers both HL7 v2.x and FHIR options. Which is the stronger choice for this use case and why?
> - A) HL7 v2.x, because it is the most widely deployed legacy standard
> - B) FHIR, because it uses RESTful APIs and JSON better suited to modern web and mobile app development **[CORRECT]**
> - C) HL7 v2.x, because FHIR cannot carry lab result data
> - D) Either is equally appropriate for third-party app integration
>
> *Rationale*: FHIR's RESTful, resource-based design and JSON support make it the preferred choice for modern apps; HL7 v2.x is pipe-delimited and designed for internal system-to-system messaging.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-19**: A hospital contracts with an EHR company to access clinical software hosted entirely by the vendor — the vendor manages hardware, operating system, and application updates. The hospital pays a monthly subscription. This delivery model is:
> - A) IaaS
> - B) PaaS
> - C) SaaS **[CORRECT]**
> - D) Private cloud
>
> *Rationale*: SaaS delivers a fully hosted and managed application over the internet; the organization consumes the software without managing any underlying infrastructure.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-20**: An outpatient network's scheduling system must send appointment data to three clinical applications, each using a different message format. Rather than building three separate interfaces, the IT team deploys a central component that translates and routes messages. This component is called:
> - A) A data warehouse
> - B) An interface engine **[CORRECT]**
> - C) A VPN concentrator
> - D) A clinical data repository
>
> *Rationale*: An interface engine (middleware) translates messages between formats and routes them to the correct destination, reducing point-to-point integration complexity.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-24**: A security operations team wants to aggregate log data from all servers, network devices, and clinical applications into a single platform that correlates events and sends real-time alerts when suspicious patterns are detected. Which technology supports this?
> - A) VPN
> - B) IDS only
> - C) SIEM (Security Information and Event Management) **[CORRECT]**
> - D) Interface engine
>
> *Rationale*: SIEM centralizes log collection, performs event correlation, and generates alerts for security monitoring and incident response across the enterprise.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-33**: A hospital's radiology department needs to transmit CT scan images from the scanner to a radiologist workstation in a remote building for interpretation. The MOST appropriate standard for this transmission is:
> - A) HL7 FHIR
> - B) DICOM **[CORRECT]**
> - C) HL7 v2.x ADT message
> - D) C-CDA document
>
> *Rationale*: DICOM (Digital Imaging and Communications in Medicine) is the universal standard for storing, transmitting, and displaying medical images.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-34**: A health system is moving clinical applications to the cloud and wants to prevent unauthorized access even if credentials are stolen. Which combination of security controls BEST addresses this risk?
> - A) Firewall and VPN only
> - B) SSO and MFA (Single Sign-On combined with Multi-Factor Authentication) **[CORRECT]**
> - C) VLAN segmentation and audit logs
> - D) Encryption at rest and IDS
>
> *Rationale*: SSO reduces password fatigue and enables centralized access control; MFA requires a second verification factor, protecting against credential theft.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-35**: An organization hosts its public-facing patient portal on a server segment that is separated from the internal clinical network by two firewalls — one facing the internet and one facing the internal systems. This architecture is called:
> - A) VLAN
> - B) VPN
> - C) DMZ (Demilitarized Zone) **[CORRECT]**
> - D) CDR
>
> *Rationale*: A DMZ is a network segment that isolates public-facing servers from both the internet and internal systems, reducing the blast radius if the public server is compromised.
> *Maps to: Task 1.B.2*

> **[RE] RW-D1-38**: The Integrating the Healthcare Enterprise (IHE) initiative publishes:
> - A) Federal regulations governing EHR certification
> - B) Implementation frameworks (profiles) that specify how existing standards like HL7 and DICOM should be used for specific clinical workflows **[CORRECT]**
> - C) Proprietary messaging formats competing with HL7 FHIR
> - D) Accreditation standards for health IT departments
>
> *Rationale*: IHE profiles do not create new standards — they specify how to use existing standards (HL7, DICOM) for defined interoperability use cases such as document sharing (XDS) and patient identity (PIX/PDQ).
> *Maps to: Task 1.B.2*

---

## Task 1.A.1 — Additional Questions (Set 2)

> **[RE] RW-D1-41**: A 78-year-old patient with dementia needs 24-hour nursing supervision, wound care, and physical therapy after a hip fracture but cannot return home independently. The MOST appropriate care setting is:
> - A) Acute care hospital for continued inpatient treatment
> - B) Skilled nursing facility (SNF) **[CORRECT]**
> - C) Ambulatory surgery center
> - D) FQHC
>
> *Rationale*: SNFs / long-term care facilities provide extended nursing, rehabilitation, and custodial care for patients requiring 24-hour supervision but not acute hospital-level care.
> *Maps to: Task 1.A.1*

> **[AP] RW-D1-42**: A patient enrolled in an HMO requires a referral from their primary care physician before seeing a cardiologist. A patient in a PPO can see the cardiologist directly but pays higher out-of-pocket costs. Which statement BEST describes the key operational difference?
> - A) HMOs reimburse providers on a fee-for-service basis; PPOs use capitation
> - B) HMOs require coordination through a gatekeeper PCP; PPOs allow direct specialist access at higher member cost **[CORRECT]**
> - C) PPOs always provide lower total cost than HMOs
> - D) HMOs only cover inpatient services
>
> *Rationale*: HMOs require a PCP gatekeeper referral and have lower premiums; PPOs allow self-referrals to specialists but charge more for out-of-network or direct access — a key managed care distinction.
> *Maps to: Task 1.A.1*

> **[RE] RW-D1-43**: A hospital affiliated with a medical school provides complex tertiary care, conducts federally funded clinical trials, and trains medical residents and nursing students. This organization is BEST described as:
> - A) A Federally Qualified Health Center
> - B) A community health center
> - C) An Academic Medical Center (AMC) **[CORRECT]**
> - D) A long-term care facility
>
> *Rationale*: AMCs combine research, education (GME/nursing training), and clinical care — often serving as tertiary/quaternary referral centers with specialized programs not available elsewhere.
> *Maps to: Task 1.A.1*

> **[AP] RW-D1-44**: A primary care practice redesigns its care model to emphasize team-based care, coordinated chronic disease management, enhanced patient access, and quality improvement. It seeks formal recognition from NCQA. This model is BEST described as:
> - A) Integrated Delivery Network
> - B) Patient-Centered Medical Home (PCMH) **[CORRECT]**
> - C) Accountable Care Organization
> - D) Health Maintenance Organization
>
> *Rationale*: The PCMH model (recognized by NCQA) emphasizes coordinated, accessible, team-based primary care with a focus on whole-person care and chronic disease management — distinct from ACOs (which focus on cost/quality shared savings across a broader network).
> *Maps to: Task 1.A.1, 1.A.4*

---

## Task 1.A.2 — Additional Questions (Set 2)

> **[AP] RW-D1-45**: A hospital ED physician needs to send a patient's discharge summary and medication list securely to a specific known primary care physician at another organization for post-discharge follow-up. Which HIE method is MOST appropriate?
> - A) Query-based exchange
> - B) Consumer-mediated exchange
> - C) Directed exchange **[CORRECT]**
> - D) Broadcast exchange
>
> *Rationale*: Directed exchange is a secure, point-to-point transmission from one known provider to another — similar to secure email. It is used when the receiving provider is already known, unlike query-based exchange which searches for unknown records.
> *Maps to: Task 1.A.2*

> **[AN] RW-D1-46**: A hospital system acquires a skilled nursing facility, a home health agency, and an outpatient physical therapy practice — expanding its services both upstream and downstream from acute care. This strategy is BEST described as:
> - A) Horizontal integration
> - B) ACO formation
> - C) Vertical integration **[CORRECT]**
> - D) Consumer-mediated exchange
>
> *Rationale*: Vertical integration acquires organizations at different points along the care continuum (clinic → acute hospital → SNF → home health). Horizontal integration merges same-type organizations (e.g., hospital + hospital).
> *Maps to: Task 1.A.2*

> **[AP] RW-D1-47**: A care management nurse coordinates daily communication among a diabetic patient's endocrinologist, cardiologist, and primary care physician to align treatment plans and prevent conflicting medications. This activity is BEST described as:
> - A) Care transition management
> - B) Utilization management
> - C) Care coordination **[CORRECT]**
> - D) Disease registry management
>
> *Rationale*: Care coordination is the deliberate organization of patient care activities across providers and settings to ensure appropriate, safe, and effective care. Care transitions refer specifically to a patient's movement between care settings.
> *Maps to: Task 1.A.2*

> **[RE] RW-D1-48**: The structured clinical document format used to exchange patient information at care transitions — including medications, allergies, problems, and visit notes — in a standardized, machine-readable format is called:
> - A) HL7 v2.x ADT message
> - B) DICOM header
> - C) C-CDA (Consolidated Clinical Document Architecture) **[CORRECT]**
> - D) FHIR Questionnaire resource
>
> *Rationale*: C-CDA is the ONC-required structured document standard for care transition exchange (Transition of Care / Referral Note). It replaced the earlier CCD as the dominant format for Meaningful Use / Promoting Interoperability.
> *Maps to: Task 1.A.2, 1.B.2*

---

## Task 1.A.3 — Additional Questions (Set 2)

> **[AP] RW-D1-49**: A health system's senior IT executive develops the 3-year technology roadmap, oversees the $12M annual IT capital budget, and aligns IT investments with the board-approved organizational strategic plan. Which HIT leadership role does this describe?
> - A) CMIO
> - B) CISO
> - C) CIO **[CORRECT]**
> - D) HIT Project Manager
>
> *Rationale*: The CIO (Chief Information Officer) is responsible for enterprise IT strategy, governance, capital budget, and alignment of IT investments with organizational goals — the top IT leadership role.
> *Maps to: Task 1.A.3*

> **[AP] RW-D1-50**: A health system has both a CISO and a Privacy Officer. A ransomware attack encrypts clinical records; separately, a patient files a complaint about unauthorized disclosure of their psychiatric records. Which roles lead each response?
> - A) Privacy Officer leads both
> - B) CISO leads both
> - C) CISO leads the ransomware technical response; Privacy Officer leads the unauthorized disclosure investigation **[CORRECT]**
> - D) The Compliance Officer leads both
>
> *Rationale*: CISO = security incidents, ePHI technical controls, cybersecurity response. Privacy Officer = HIPAA Privacy Rule compliance, PHI disclosure policies, and patient complaint investigations. Both roles often collaborate but have distinct primary responsibilities.
> *Maps to: Task 1.A.3*

> **[RE] RW-D1-51**: A nurse calls the help desk because she cannot log into the EHR. The Tier 1 agent performs basic troubleshooting and cannot resolve the issue, then escalates it to a Tier 2 technical analyst. This process is an example of:
> - A) An emergency change management process
> - B) A tiered help desk support model **[CORRECT]**
> - C) A Change Advisory Board review
> - D) A benefits realization escalation
>
> *Rationale*: Tiered help desk support routes issues from Tier 1 (basic troubleshooting, password resets) to Tier 2 (technical analysts) to Tier 3 (vendor or engineering escalation) based on complexity and resolution capability.
> *Maps to: Task 1.A.3*

> **[AN] RW-D1-52**: A hospital system centralizes all IT staff, infrastructure, and decision-making at corporate headquarters. Each facility has no local IT staff and submits all requests to the central team. This structure maximizes standardization but raises concerns about local responsiveness. This is BEST described as:
> - A) Matrix IT governance
> - B) Decentralized IT governance
> - C) Centralized IT governance **[CORRECT]**
> - D) Federated IT governance
>
> *Rationale*: Centralized IT maximizes standardization and cost efficiency but may reduce local responsiveness. Decentralized IT maximizes local control but loses standardization. Matrix governance balances both with enterprise standards and local support.
> *Maps to: Task 1.A.3*

---

## Task 1.A.4 — Additional Questions (Set 2)

> **[AN] RW-D1-53**: A pharmaceutical company pays a hospital's pharmacy director a consulting fee; in return, the director ensures the hospital formulary favors that company's drugs over clinically equivalent alternatives. No physician referral is involved. Which law MOST directly applies?
> - A) Stark Law
> - B) EMTALA
> - C) Anti-Kickback Statute **[CORRECT]**
> - D) HIPAA Privacy Rule
>
> *Rationale*: The Anti-Kickback Statute (AKS) prohibits any remuneration to induce or reward referrals or purchases of items/services under federal healthcare programs — broader than Stark Law, which covers physician self-referral specifically.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-54**: A hospital's research team wants to share a patient dataset but retains some identifiers that would be removed under Safe Harbor. A qualified statistician reviews the data and certifies that the probability of re-identifying any individual is very small. Which de-identification method is being used?
> - A) Safe Harbor
> - B) Limited Data Set
> - C) Expert Determination **[CORRECT]**
> - D) Data minimization
>
> *Rationale*: Expert Determination uses a qualified statistician to certify that re-identification risk is very small — an alternative to Safe Harbor that may allow more data utility while still meeting HIPAA de-identification standards.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-55**: A nurse accesses a patient's electronic record out of curiosity to see if the patient is her neighbor's ex-spouse — she is not involved in the patient's care. Under HIPAA, which principle does this most directly violate?
> - A) Breach notification standard
> - B) Minimum necessary standard **[CORRECT]**
> - C) Business Associate Agreement requirement
> - D) 42 CFR Part 2 restriction
>
> *Rationale*: HIPAA's minimum necessary standard requires PHI to be accessed only to the extent necessary to accomplish the intended purpose. Accessing records without a care-related purpose violates this principle.
> *Maps to: Task 1.A.4*

> **[RE] RW-D1-56**: Under HIPAA's Safe Harbor de-identification method, which of the following geographic data elements is NOT included in the 18 PHI identifiers that must be removed?
> - A) Patient's ZIP code (in low-population areas)
> - B) Patient's city of residence
> - C) Patient's county of residence
> - D) Patient's state of residence **[CORRECT]**
>
> *Rationale*: State of residence is NOT one of HIPAA's 18 PHI identifiers. Geographic data smaller than state (such as ZIP codes where the population is ≤20,000) ARE identifiers, but the state itself is not.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-57**: A hospital uses one cloud vendor to store fully de-identified research data and another cloud vendor to process individually identifiable patient billing records on the hospital's behalf. Which arrangement requires a Business Associate Agreement?
> - A) The de-identified research data processing only
> - B) Both arrangements equally
> - C) The billing records processing — the vendor creates, receives, or maintains PHI on the hospital's behalf **[CORRECT]**
> - D) Neither arrangement, since cloud storage is not clinical
>
> *Rationale*: A BAA is required when a vendor creates, receives, maintains, or transmits PHI on behalf of a covered entity. Truly de-identified data is not PHI and does not trigger the BAA requirement.
> *Maps to: Task 1.A.4*

> **[AP] RW-D1-58**: A primary care group practice wants accreditation that recognizes quality of care, care coordination, and patient experience in an outpatient physician practice setting. Which accreditation body is MOST relevant?
> - A) The Joint Commission (TJC)
> - B) NCQA **[CORRECT]**
> - C) CARF
> - D) DNV GL
>
> *Rationale*: NCQA accredits health plans and physician practices (including the PCMH model). TJC primarily accredits hospitals and health systems; CARF covers rehabilitation and behavioral health.
> *Maps to: Task 1.A.4*

---

## Task 1.A.5 — Additional Questions (Set 2)

> **[AN] RW-D1-59**: A community health center adds housing stability screening, food insecurity assessment, and transportation access questions to its intake process. Data is used to connect patients with social services and adjust care plans. This initiative integrates:
> - A) Precision medicine genomic data into care planning
> - B) Social Determinants of Health (SDOH) into population health management **[CORRECT]**
> - C) Remote patient monitoring devices for chronic disease
> - D) Consumer-mediated HIE for data aggregation
>
> *Rationale*: SDOH (social determinants of health) are non-clinical factors — housing, food, transportation, income, education — that significantly impact health outcomes. Integrating SDOH data into care planning is a key population health management strategy.
> *Maps to: Task 1.A.5*

> **[RE] RW-D1-60**: The Triple Aim framework developed by the Institute for Healthcare Improvement (IHI) includes which three dimensions?
> - A) Patient safety, cost reduction, and staff satisfaction
> - B) Improving patient experience, improving population health, and reducing per-capita cost **[CORRECT]**
> - C) Patient satisfaction, clinician satisfaction, and operational efficiency
> - D) Quality, safety, and access
>
> *Rationale*: The IHI Triple Aim targets: (1) improving individual patient care experience and satisfaction, (2) improving the health of populations, and (3) reducing the per-capita cost of healthcare.
> *Maps to: Task 1.A.5*

> **[AP] RW-D1-61**: A patient with uncontrolled hypertension receives a smartphone app that sends daily blood pressure reading reminders, tracks medication adherence, and alerts the care team when readings exceed a threshold. This application category is BEST described as:
> - A) PACS system
> - B) mHealth (mobile health) application **[CORRECT]**
> - C) Personal Health Record (PHR)
> - D) Laboratory Information System
>
> *Rationale*: mHealth apps deliver health services and information through mobile devices — including medication reminders, symptom tracking, chronic disease self-management tools, and remote monitoring integrations.
> *Maps to: Task 1.A.5*

> **[AN] RW-D1-62**: An AI algorithm trained on 500,000 chest X-rays flags potential pneumonia findings for radiologist review before the radiologist reads the image, reducing time to diagnosis and catching subtle findings. This technology trend MOST directly represents:
> - A) Blockchain for medical image integrity verification
> - B) AI / machine learning applied to diagnostic imaging **[CORRECT]**
> - C) Remote patient monitoring for vital sign tracking
> - D) Precision medicine for treatment personalization
>
> *Rationale*: AI/ML in medical imaging uses deep learning to identify patterns in images at scale — assisting (not replacing) radiologists by improving diagnostic speed and sensitivity for subtle findings.
> *Maps to: Task 1.A.5*

---

## Task 1.B.1 — Additional Questions (Set 2)

> **[AP] RW-D1-63**: Before CPOE implementation, physicians handwrote medication orders that pharmacists often found illegible or ambiguous, leading to clarification delays and potential dosing errors. Which patient safety benefit is MOST directly realized after CPOE adoption?
> - A) Physicians can now order medications without nursing involvement
> - B) Elimination of handwriting-related errors with embedded dose range checking at the point of order entry **[CORRECT]**
> - C) Pharmacy staff can now modify physician orders without approval
> - D) Medications are dispensed automatically without pharmacist review
>
> *Rationale*: CPOE eliminates handwriting illegibility errors and embeds real-time CDS (dose range checking, drug-allergy alerts, drug-drug interaction alerts) directly at the point of order entry — a core patient safety benefit.
> *Maps to: Task 1.B.1*

> **[RE] RW-D1-64**: A clinical application manages the complete laboratory workflow: physician places an order, it tracks specimen collection, receipt, and processing, and delivers finalized results back to the ordering provider in the EHR. This application is called:
> - A) PACS
> - B) RIS (Radiology Information System)
> - C) LIS (Laboratory Information System) **[CORRECT]**
> - D) eMAR
>
> *Rationale*: The LIS manages end-to-end laboratory workflow: order receipt, specimen tracking, result processing, and result delivery. PACS stores medical images; RIS manages radiology scheduling and workflow.
> *Maps to: Task 1.B.1*

> **[AP] RW-D1-65**: A hospital's revenue cycle team uses a comprehensive master list of every billable item — procedures, supplies, medications, and services — each with associated charge codes and prices. This foundational revenue cycle tool is called:
> - A) EMPI
> - B) MPI
> - C) Charge Description Master (CDM) **[CORRECT]**
> - D) DRG grouper
>
> *Rationale*: The CDM is the hospital's complete list of all billable items and their charge codes — the foundation of the charge capture and billing process. It must be maintained accurately to ensure correct claim submission.
> *Maps to: Task 1.B.1*

---

## Task 1.B.2 — Additional Questions (Set 2)

> **[AP] RW-D1-66**: A health system's IT team must connect its main campus network to a remote clinic 50 miles away. Which network type describes this long-distance connectivity?
> - A) LAN (Local Area Network)
> - B) WAN (Wide Area Network) **[CORRECT]**
> - C) VLAN
> - D) DMZ
>
> *Rationale*: WANs connect geographically separated networks over long distances. LANs operate within a single building or campus; VLANs are logical segmentation within a network; DMZ is a security architecture zone.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-67**: A health system wants to deploy virtual machines and cloud storage, maintaining full control over the operating system, middleware, and application stack — but without managing physical hardware. Which cloud service model fits this requirement?
> - A) SaaS — the vendor manages everything including the application
> - B) PaaS — the vendor manages the runtime environment and OS
> - C) IaaS (Infrastructure as a Service) **[CORRECT]**
> - D) Hybrid cloud
>
> *Rationale*: IaaS provides virtualized compute, storage, and networking. The organization manages OS and above; the provider manages physical hardware. PaaS adds a managed runtime; SaaS delivers a fully managed application.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-68**: A hospital's remote physicians need to access the EHR from home over the public internet. The IT team must ensure all data transmitted between home offices and the hospital is encrypted end-to-end. Which technology achieves this?
> - A) VLAN segmentation
> - B) DMZ architecture
> - C) VPN (Virtual Private Network) **[CORRECT]**
> - D) LAN extension
>
> *Rationale*: A VPN creates an encrypted tunnel over the public internet, protecting data transmitted between a remote endpoint and the hospital network from interception or eavesdropping.
> *Maps to: Task 1.B.2*

> **[AN] RW-D1-69**: A hospital's data warehouse is populated nightly from the EHR, lab system, and financial system. The process extracts data from source systems, converts it into a standardized format, and loads it into the warehouse. This batch pipeline is called:
> - A) FHIR API integration
> - B) HL7 directed exchange
> - C) ETL (Extract, Transform, Load) **[CORRECT]**
> - D) SIEM data ingestion
>
> *Rationale*: ETL is the batch data pipeline for populating data warehouses — extracting from sources, transforming/normalizing data, and loading into the target repository. API/FHIR enables real-time exchange; ETL handles scheduled batch loads.
> *Maps to: Task 1.B.2*

> **[AP] RW-D1-70**: A hospital's security policy requires that patient data stored on laptops be protected so that if a device is lost or stolen, the data cannot be read by unauthorized parties. Which security control BEST addresses this requirement?
> - A) MFA on the hospital's EHR login screen
> - B) Encryption at rest on the laptop's hard drive **[CORRECT]**
> - C) TLS encryption in transit during network communication
> - D) SIEM monitoring of access log events
>
> *Rationale*: Encryption at rest protects data stored on physical media (laptop drives, USB devices, backup tapes) from unauthorized access if the device is physically stolen. Encryption in transit protects data during network transmission — a separate, complementary control.
> *Maps to: Task 1.B.2*

---

## How to Review These Questions

- For each wrong answer, write the concept the distractor was testing.
- For each correct answer, note whether the stem asked FIRST, NEXT, BEST, or MOST appropriate — these words change which answer wins.
- Re-attempt missed questions after 48 hours without the rationale.
- When two answers seem equally valid, choose the one that protects patient safety, compliance, or stakeholder alignment first.

**Question count: 70 | Domain weight: 25% (~25 scored questions)**
