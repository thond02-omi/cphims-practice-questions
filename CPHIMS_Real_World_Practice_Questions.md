# CPHIMS Real-World Practice Questions

These are original, scenario-based questions aligned to the HIMSS CPHIMS outline. They are designed to feel closer to daily healthcare IT and informatics work while avoiding actual exam items or recalled live questions.

Use these after reviewing each domain. For timed practice, answer first without reading the rationale, then review why the best answer is stronger than the distractors.

---

## Domain 1 - Healthcare and Technology Environments

> **[AP] RW-D1-01**: A rural clinic wants to launch video visits for hypertension follow-up. The vendor platform will store visit notes, images, and patient messages. Before signing the contract, what should the clinic do FIRST from a privacy and compliance perspective?
> - A) Ask physicians to use personal video accounts until the vendor is live
> - B) Execute a Business Associate Agreement and review the vendor's security controls **[CORRECT]**
> - C) Announce the service on the patient portal
> - D) Build a custom interface to the state HIE
>
> *Rationale*: The vendor will create, receive, maintain, or transmit PHI, so the BAA and security due diligence come before production use.
> *Maps to: Domain 1.A.4, 1.A.5*

> **[AN] RW-D1-02**: A patient arrives unconscious in the ED after traveling from another state. The local hospital has no prior record. The physician needs medication history and recent discharge information. Which exchange method is MOST appropriate?
> - A) Directed exchange to a known receiving provider
> - B) Query-based HIE lookup across participating organizations **[CORRECT]**
> - C) Consumer-mediated exchange through the patient portal
> - D) Faxed release-of-information request after stabilization
>
> *Rationale*: Query-based exchange is used when the provider does not know where all relevant records are held and needs to search a network.
> *Maps to: Domain 1.A.2*

> **[AP] RW-D1-03**: A five-hospital system has frequent duplicate patient records when patients receive care at different campuses. Which technology should be prioritized?
> - A) Enterprise Master Patient Index **[CORRECT]**
> - B) Patient portal replacement
> - C) New charge description master
> - D) Radiology PACS upgrade
>
> *Rationale*: An EMPI supports patient identity matching across facilities and systems.
> *Maps to: Domain 1.B.1*

> **[AN] RW-D1-04**: A hospital discharges patients to several skilled nursing facilities. Medication discrepancies are common within 24 hours of transfer. Which intervention BEST addresses the information continuity problem?
> - A) Ask patients to carry printed medication lists
> - B) Send a C-CDA transition-of-care document and standardize medication reconciliation workflow **[CORRECT]**
> - C) Train SNF billing staff on inpatient DRG coding
> - D) Give the SNFs view-only access to the hospital's entire EHR
>
> *Rationale*: The problem is a care transition gap, so structured exchange plus reconciliation workflow is the strongest solution.
> *Maps to: Domain 1.A.2, 1.B.2*

> **[AP] RW-D1-05**: A patient asks a certified EHR hospital to send their data to a third-party app. The hospital has privacy concerns but no specific legal basis to deny the request. What is the BEST response?
> - A) Deny the request because third-party apps are never covered by HIPAA
> - B) Support access through the appropriate standardized API workflow while documenting privacy education **[CORRECT]**
> - C) Require the patient to pick up paper records only
> - D) Charge an interface development fee before releasing any data
>
> *Rationale*: Cures Act information blocking rules and ONC API requirements favor appropriate access unless an exception applies.
> *Maps to: Domain 1.A.4, 1.B.2*

> **[AN] RW-D1-06**: A behavioral health clinic treats patients with substance use disorder. The health system wants to include all notes in its enterprise HIE feed. What concern should the HIT leader raise FIRST?
> - A) Whether PACS storage is sufficient
> - B) Whether 42 CFR Part 2 consent and segmentation requirements apply **[CORRECT]**
> - C) Whether the billing system supports CPT modifiers
> - D) Whether the HIE uses a private cloud
>
> *Rationale*: Substance use disorder records may have stricter confidentiality requirements than standard HIPAA disclosure rules.
> *Maps to: Domain 1.A.4*

> **[AP] RW-D1-07**: Nurses report that BCMA scanning fails in two medication rooms, but only during peak evening rounds. Which infrastructure issue should be investigated FIRST?
> - A) Charge capture logic
> - B) Wireless network coverage and capacity **[CORRECT]**
> - C) DRG grouper configuration
> - D) Patient portal authentication
>
> *Rationale*: Mobile bedside workflows depend on reliable wireless connectivity, especially during high concurrency.
> *Maps to: Domain 1.B.2*

> **[AN] RW-D1-08**: A vendor says it cannot connect its EHR to a competing scheduling app because "security is too risky," but cannot identify a specific security control or exception. What should the organization do?
> - A) Accept the explanation and abandon integration
> - B) Evaluate whether an information blocking exception truly applies and document the decision **[CORRECT]**
> - C) Disable all API access for patient safety
> - D) Replace the scheduling app immediately
>
> *Rationale*: Security may be a valid concern, but it must be specific, reasonable, and handled through a documented exception process.
> *Maps to: Domain 1.A.4, 1.B.2*

> **[AP] RW-D1-09**: A population health team wants to identify diabetic patients who missed annual retinal exams and target outreach. Which application category is MOST relevant?
> - A) Business intelligence and population health analytics **[CORRECT]**
> - B) PACS
> - C) RIS
> - D) Pharmacy dispensing system
>
> *Rationale*: The task requires aggregating clinical data, identifying care gaps, and targeting interventions.
> *Maps to: Domain 1.A.5, 1.B.1*

> **[AN] RW-D1-10**: A health system acquires two outpatient practices and wants standard workflows, shared patient identity, and shared quality reporting, while keeping some local support staff. Which operating model is MOST consistent with this?
> - A) Completely decentralized IT
> - B) Matrix IT governance with enterprise standards and local support **[CORRECT]**
> - C) No governance until after go-live
> - D) Separate EHR instances with no data sharing
>
> *Rationale*: Matrix governance balances enterprise standardization with local operational support.
> *Maps to: Domain 1.A.3, 1.B.1*

---

## Domain 2 - Clinical Informatics

> **[AP] RW-D2-01**: During medication ordering, an alert fires because a patient with a documented penicillin allergy is prescribed amoxicillin. What safety function is being demonstrated?
> - A) Drug-allergy clinical decision support **[CORRECT]**
> - B) Charge capture
> - C) Diagnostic coding
> - D) Query-based HIE
>
> *Rationale*: The system is checking a medication order against documented allergy information at the point of decision.
> *Maps to: Domain 2.4, 2.6*

> **[AN] RW-D2-02**: A hospital finds that 94% of a low-severity drug interaction alert is overridden. Physicians say the alert appears for clinically insignificant combinations. What should the CDS committee do FIRST?
> - A) Convert the alert to a hard stop
> - B) Analyze override reasons and retune or retire the alert if it is low value **[CORRECT]**
> - C) Add more alerts to improve awareness
> - D) Disable all medication alerts for two weeks
>
> *Rationale*: High override rates suggest alert fatigue; governance should evaluate clinical value before changing severity.
> *Maps to: Domain 2.6*

> **[AP] RW-D2-03**: A quality team wants to improve compliance with an evidence-based sepsis bundle when screening criteria are met in the ED. Which CDS intervention is strongest?
> - A) Passive guideline link in the EHR library
> - B) Monthly email reminder to all clinicians
> - C) Triggered sepsis order set embedded in ED workflow **[CORRECT]**
> - D) Paper poster near the medication room
>
> *Rationale*: CDS is most effective when it provides the right information at the right time in the clinician's workflow.
> *Maps to: Domain 2.6*

> **[AN] RW-D2-04**: BCMA compliance drops from 96% to 84% on the night shift. Nurses report that barcode labels on refrigerated medications often smudge. What is the BEST next step?
> - A) Discipline the night shift nurses
> - B) Observe the workflow and correct the labeling/process defect **[CORRECT]**
> - C) Turn off BCMA for refrigerated medications
> - D) Require nurses to manually type every NDC
>
> *Rationale*: The data points to a process and usability defect. Fix the root cause before assuming noncompliance.
> *Maps to: Domain 2.3, 2.4*

> **[AP] RW-D2-05**: A lab interface sends "serum sodium" from one facility and "Na blood" from another. The analytics team needs consistent reporting across sites. Which standard is MOST relevant?
> - A) LOINC **[CORRECT]**
> - B) CPT
> - C) ICD-10-PCS
> - D) DICOM
>
> *Rationale*: LOINC standardizes laboratory tests and clinical observations.
> *Maps to: Domain 2.2*

> **[AP] RW-D2-06**: A medication list combines drug data from the EHR, pharmacy claims, and a patient app. Which terminology helps normalize medication names and clinical drug concepts?
> - A) RxNorm **[CORRECT]**
> - B) DRG
> - C) SNOMED CT only
> - D) CPT
>
> *Rationale*: RxNorm supports normalized clinical drug names across systems.
> *Maps to: Domain 2.2*

> **[AN] RW-D2-07**: A care management platform calculates a 90-day readmission risk score and automatically routes high-risk patients to a nurse outreach queue. What analytics maturity level does the automatic routing represent?
> - A) Descriptive
> - B) Diagnostic
> - C) Predictive only
> - D) Prescriptive **[CORRECT]**
>
> *Rationale*: Predicting risk is predictive; recommending or triggering an action based on the risk is prescriptive.
> *Maps to: Domain 2.5*

> **[AP] RW-D2-08**: The CMO asks whether average length of stay increased after a new discharge workflow. Which visualization is MOST useful to see the monthly trend and potential process change over time?
> - A) Pie chart
> - B) Run chart or control chart **[CORRECT]**
> - C) Single KPI snapshot
> - D) Organization chart
>
> *Rationale*: Trends and process variation over time are best assessed with run charts or control charts.
> *Maps to: Domain 2.5*

> **[AN] RW-D2-09**: A dashboard shows that readmissions rose after a new care management workflow. A committee member says, "This proves the workflow caused the increase." What is the BEST response?
> - A) Agree, because the timing proves causation
> - B) Explain that the data shows correlation and recommend further analysis for causation **[CORRECT]**
> - C) Remove the dashboard metric
> - D) Stop all care management activity immediately
>
> *Rationale*: Observational trend data can suggest an association but does not prove causation without more rigorous analysis.
> *Maps to: Domain 2.5*

> **[AP] RW-D2-10**: A nurse scans the patient wristband and the medication package, then documents whether the medication was given or refused. Which system functionality is central to this workflow?
> - A) CPOE only
> - B) eMAR integrated with BCMA **[CORRECT]**
> - C) PACS
> - D) Revenue cycle claims adjudication
>
> *Rationale*: eMAR documents medication administration, and BCMA verifies the five rights at the bedside.
> *Maps to: Domain 2.3, 2.4*

---

## Domain 3 - Healthcare Information and Systems Management

> **[AP] RW-D3-01**: A hospital wants a new patient portal because "patients complain communication is hard." Before issuing an RFP, what should the project team do FIRST?
> - A) Select the portal with the most mobile features
> - B) Conduct needs analysis and current-state workflow assessment **[CORRECT]**
> - C) Negotiate an SLA
> - D) Begin user acceptance testing
>
> *Rationale*: Solution selection should begin with the problem, current-state gaps, stakeholders, and requirements.
> *Maps to: Domain 3.A.2*

> **[AN] RW-D3-02**: During scheduling system planning, clinicians request 50 enhancements. The go-live date is fixed because of a regulatory deadline. What should the project manager do?
> - A) Add every request to preserve goodwill
> - B) Prioritize requirements using a method such as MoSCoW and document deferrals **[CORRECT]**
> - C) Reject all clinical requests
> - D) Skip requirements validation
>
> *Rationale*: Prioritization separates must-have go-live requirements from items that can move to a later phase.
> *Maps to: Domain 3.A.2*

> **[AP] RW-D3-03**: After reviewing RFP responses for a new EHR, two vendors remain. What selection activity should happen NEXT?
> - A) Execute the cheapest contract
> - B) Conduct scripted demonstrations using real organizational scenarios **[CORRECT]**
> - C) Begin production data migration
> - D) Close the project charter
>
> *Rationale*: Scenario-based demos test workflow fit beyond written claims.
> *Maps to: Domain 3.C.1*

> **[AN] RW-D3-04**: Midway through an EHR implementation, the cardiology department requests a major new module outside the approved scope. What is the BEST response?
> - A) Add it immediately because cardiology is influential
> - B) Route it through formal change control to assess scope, schedule, budget, and risk **[CORRECT]**
> - C) Ignore the request
> - D) Stop all build work until cardiology is satisfied
>
> *Rationale*: Change control protects the baseline plan and supports transparent decision-making.
> *Maps to: Domain 3.C.4*

> **[AP] RW-D3-05**: The implementation team is testing whether medication orders entered in CPOE arrive correctly in the pharmacy system and return verification status to the eMAR. What type of testing is this?
> - A) Unit testing
> - B) Integration testing **[CORRECT]**
> - C) Acceptance testing only
> - D) Benefits realization
>
> *Rationale*: The test validates data flow and behavior between systems.
> *Maps to: Domain 3.D.1*

> **[AN] RW-D3-06**: One week before go-live, UAT shows that nurses cannot document a required discharge education step for pediatric patients. What should the project team do?
> - A) Go live anyway and fix it later
> - B) Treat it as a critical defect, remediate, retest, and reassess go-live readiness **[CORRECT]**
> - C) Delete the discharge education requirement
> - D) Ask nurses to document in free text without tracking
>
> *Rationale*: UAT exists to confirm workflow and requirement fit before go-live; patient care and compliance gaps must be resolved.
> *Maps to: Domain 3.D.1, 3.D.3*

> **[AP] RW-D3-07**: An EHR outage begins during a storm. Clinicians need to keep documenting care while IT restores systems. Which plan guides the manual clinical workflow?
> - A) Business continuity plan and downtime procedures **[CORRECT]**
> - B) Vendor marketing plan
> - C) Capital budget
> - D) Data dictionary
>
> *Rationale*: Business continuity keeps essential operations running during disruption; disaster recovery focuses on restoring IT systems.
> *Maps to: Domain 3.B.4*

> **[AP] RW-D3-08**: HR notifies IT that a billing employee with broad EHR access was terminated immediately. What should happen FIRST?
> - A) Wait for the next monthly access review
> - B) Immediately revoke system access credentials **[CORRECT]**
> - C) Notify all patients
> - D) Delete all audit logs
>
> *Rationale*: Termination procedures require prompt access removal to protect confidentiality.
> *Maps to: Domain 3.E.3*

> **[AN] RW-D3-09**: The EHR defines discharge time as "order entered," while finance defines it as "patient left bed." Reports conflict. Which governance artifact should be created or updated?
> - A) Data dictionary with accountable data stewards **[CORRECT]**
> - B) Vendor invoice
> - C) Wireless heat map
> - D) Training attendance sheet
>
> *Rationale*: Data definitions and ownership are data governance functions.
> *Maps to: Domain 3.B.6*

> **[AN] RW-D3-10**: A vulnerability scan finds unsupported operating systems on connected infusion pumps. What is the BEST next step?
> - A) Ignore the finding because the devices are clinical
> - B) Perform risk assessment and coordinate mitigation such as patching, segmentation, or replacement **[CORRECT]**
> - C) Disconnect every pump immediately without clinical planning
> - D) Ask nurses to stop using smart pump libraries
>
> *Rationale*: Medical device security requires risk-based mitigation that also preserves clinical operations.
> *Maps to: Domain 3.B.1, 3.E.2*

> **[AP] RW-D3-11**: Six months after a revenue cycle system go-live, the CFO asks whether the promised reduction in days in A/R happened. What activity is this?
> - A) Benefits realization evaluation **[CORRECT]**
> - B) Unit testing
> - C) RFI development
> - D) Downtime drill
>
> *Rationale*: Benefits realization compares actual post-implementation outcomes with projected benefits.
> *Maps to: Domain 3.D.4*

> **[AP] RW-D3-12**: A hospital wants to verify that an EHR product qualifies for federal health IT certification criteria used in CMS Promoting Interoperability programs. Which organization is most relevant?
> - A) ONC **[CORRECT]**
> - B) The Joint Commission
> - C) CARF
> - D) Local fire marshal
>
> *Rationale*: ONC manages the health IT certification program.
> *Maps to: Domain 3.B.2*

---

## Domain 4 - Management and Leadership

> **[AN] RW-D4-01**: A CIO is presenting a $4M analytics platform proposal to the board. What should the presentation emphasize?
> - A) Detailed database schema
> - B) Business case, strategic alignment, benefits, risks, and ROI **[CORRECT]**
> - C) Screenshots of every dashboard
> - D) The vendor's full technical manual
>
> *Rationale*: Executive communication should connect technology investment to organizational goals and measurable value.
> *Maps to: Domain 4.1, 4.12, 4.25*

> **[AP] RW-D4-02**: A cloud EHR vendor repeatedly misses the contract's four-hour critical incident response time. What should the HIT leader do FIRST?
> - A) Terminate the contract immediately
> - B) Formally document the SLA breach and follow the escalation/remedy process in the contract **[CORRECT]**
> - C) Tell clinicians to stop submitting tickets
> - D) Pay for additional vendor services without review
>
> *Rationale*: Vendor management starts with contract-based documentation and escalation.
> *Maps to: Domain 4.24*

> **[AN] RW-D4-03**: The CEO wants to deploy a generative AI assistant for clinicians within 30 days. The CIO believes the use case is promising but risky. What is the BEST leadership response?
> - A) Block all AI projects indefinitely
> - B) Propose governance review, risk assessment, controlled pilot, and success metrics **[CORRECT]**
> - C) Deploy immediately to prove innovation
> - D) Let each department choose its own tool
>
> *Rationale*: Leadership should balance innovation with governance, risk, and measurable outcomes.
> *Maps to: Domain 4.2, 4.3, 4.17*

> **[AN] RW-D4-04**: Nurses resist a new clinical documentation system because they believe it will slow patient care. What change management action is MOST effective?
> - A) Require compliance and ignore concerns
> - B) Involve nurse champions in workflow design, testing, training, and go-live support **[CORRECT]**
> - C) Replace the nursing documentation requirement
> - D) Communicate only on the day of go-live
>
> *Rationale*: Change adoption improves when impacted users are involved early and have credible peer champions.
> *Maps to: Domain 4.20*

> **[AP] RW-D4-05**: During contract negotiations, a vendor offers the CIO free travel to a resort "innovation summit." What is the BEST response?
> - A) Accept because it may improve the relationship
> - B) Decline and follow the organization's conflict-of-interest policy **[CORRECT]**
> - C) Accept only if procurement does not know
> - D) Ask the vendor to send the tickets to a colleague
>
> *Rationale*: Gifts during procurement create conflict-of-interest and vendor ethics concerns.
> *Maps to: Domain 4.10*

> **[AP] RW-D4-06**: The IT department has 18 proposed projects and funding for only 7. Which management function helps choose the best mix based on strategy, risk, value, and resources?
> - A) Portfolio management **[CORRECT]**
> - B) Unit testing
> - C) Release notes
> - D) Incident triage
>
> *Rationale*: Portfolio management governs and prioritizes the organization's project set.
> *Maps to: Domain 4.23*

> **[AN] RW-D4-07**: A hospital compares keeping its on-premise EHR to moving to SaaS. The SaaS subscription is lower in year one, but migration and long-term costs are uncertain. What financial analysis is MOST appropriate?
> - A) Compare only the year-one subscription fee
> - B) Compare total cost of ownership over a defined time horizon **[CORRECT]**
> - C) Choose the vendor with the largest customer list
> - D) Compare only hardware cost
>
> *Rationale*: TCO captures direct and indirect costs across the system lifecycle.
> *Maps to: Domain 4.25*

> **[AP] RW-D4-08**: Two physician departments disagree on a standardized order set. Each argues its workflow is unique. What should the HIT leader do FIRST?
> - A) Decide alone based on technical preference
> - B) Facilitate a structured consensus discussion focused on shared clinical goals and evidence **[CORRECT]**
> - C) Build two unrelated order sets with no governance
> - D) Escalate directly to the board
>
> *Rationale*: Facilitation and consensus-building are appropriate before escalation.
> *Maps to: Domain 4.13*

> **[AP] RW-D4-09**: A security team lacks cloud security skills after several systems move to SaaS. What should the manager do FIRST?
> - A) Wait for annual performance reviews only
> - B) Perform a competency gap assessment and create a targeted development plan **[CORRECT]**
> - C) Outsource every security function permanently
> - D) Cancel all cloud projects
>
> *Rationale*: Staff competency evaluation identifies gaps and supports education, hiring, or sourcing decisions.
> *Maps to: Domain 4.16, 4.22*

> **[AN] RW-D4-10**: An analytics manager presents infection-rate findings to the quality committee. The data has small sample sizes and a possible documentation change midway through the period. What should the manager include?
> - A) Only the conclusion, without limitations
> - B) Findings, recommendation, data limitations, and suggested next analysis **[CORRECT]**
> - C) Raw data only
> - D) A vendor sales deck
>
> *Rationale*: Leaders should communicate recommendations clearly while disclosing limitations that affect interpretation.
> *Maps to: Domain 4.19*

---

## Domain 1 — Additional Questions (Set 2)

> **[RE] RW-D1-11**: A community clinic in a rural county receives enhanced Medicare and Medicaid reimbursement and must serve uninsured patients regardless of ability to pay, funded in part by federal grants. This organization is BEST described as:
> - A) An Accountable Care Organization
> - B) A Federally Qualified Health Center **[CORRECT]**
> - C) A long-term care facility
> - D) An integrated delivery network
>
> *Rationale*: FQHCs receive federal funding through HRSA and must serve underserved populations on a sliding-fee scale regardless of insurance status.
> *Maps to: Domain 1.A.1*

> **[AP] RW-D1-12**: A health system redesigns EHR workflows specifically to reduce after-hours documentation burden on physicians and prevent clinician burnout. Which aim framework does this initiative directly address beyond the original Triple Aim?
> - A) The IHI Sepsis Bundle
> - B) The Quadruple Aim **[CORRECT]**
> - C) Meaningful Use Stage 3
> - D) The SDOH framework
>
> *Rationale*: The Quadruple Aim adds clinician well-being and work experience to the Triple Aim's three dimensions (patient experience, population health, per-capita cost).
> *Maps to: Domain 1.A.5*

> **[AN] RW-D1-13**: A regional hospital contractually aligns with independent primary care physicians and a home health agency to jointly manage Medicare patient outcomes and costs — but all parties remain separately owned. This arrangement is MOST consistent with:
> - A) An Integrated Delivery Network
> - B) An Accountable Care Organization **[CORRECT]**
> - C) A Federally Qualified Health Center
> - D) Horizontal integration
>
> *Rationale*: ACOs coordinate care and share accountability across separately owned organizations; IDNs involve common ownership of multiple facility types.
> *Maps to: Domain 1.A.1*

> **[AP] RW-D1-14**: A hospital discovers that 620 patient records were accessed by an unauthorized employee over two months. Which HIPAA Breach Notification Rule requirements apply?
> - A) Notify only the affected patients
> - B) Notify HHS and patients, but not media because the number is under 1,000
> - C) Notify the affected patients, HHS, and prominent media in the affected area because the breach exceeds 500 individuals **[CORRECT]**
> - D) Notify only the state attorney general
>
> *Rationale*: HIPAA requires notification to affected individuals, HHS, and prominent local media when a single-state breach involves 500 or more individuals.
> *Maps to: Domain 1.A.4*

> **[AP] RW-D1-15**: An uninsured patient arrives in the ED with chest pain. Registration staff request proof of insurance before the on-call physician can see the patient. What federal law does this process most directly threaten to violate?
> - A) Stark Law
> - B) HIPAA Privacy Rule
> - C) EMTALA **[CORRECT]**
> - D) Anti-Kickback Statute
>
> *Rationale*: EMTALA requires emergency medical screening and stabilization for all individuals presenting at an ED, regardless of insurance status or ability to pay.
> *Maps to: Domain 1.A.4*

> **[AP] RW-D1-16**: After an EHR go-live, physicians are creating workarounds, skipping order sets, and documenting inconsistently. Adoption is stalling. Which HIT leadership role is BEST positioned to lead the remediation effort?
> - A) CISO
> - B) CIO
> - C) CMIO **[CORRECT]**
> - D) Project Manager
>
> *Rationale*: The CMIO bridges clinical staff and IT and is the physician champion for EHR adoption, workflow optimization, and clinical change management.
> *Maps to: Domain 1.A.3*

> **[AP] RW-D1-17**: A research team wants to share a patient dataset with a university partner for a funded study. They remove all 18 PHI identifiers defined by HIPAA before transmission. Which de-identification method are they applying?
> - A) Expert Determination
> - B) Limited Data Set creation
> - C) Safe Harbor de-identification **[CORRECT]**
> - D) Data minimization
>
> *Rationale*: Safe Harbor requires removal of all 18 HIPAA-defined identifiers. Expert Determination uses statistical certification that re-identification risk is very small — a different approach.
> *Maps to: Domain 1.A.4*

> **[AN] RW-D1-18**: An integration team must connect a new third-party patient engagement app to the EHR. The vendor offers both HL7 v2.x and FHIR options. Which is the stronger choice for the app and why?
> - A) HL7 v2.x, because it is the most widely supported legacy standard
> - B) FHIR, because it uses RESTful APIs and JSON that are better suited to modern web and mobile app development **[CORRECT]**
> - C) HL7 v2.x, because FHIR cannot carry lab results
> - D) Either is equally appropriate for third-party app integration
>
> *Rationale*: FHIR's RESTful, resource-based design and JSON support make it better for modern apps; HL7 v2.x is pipe-delimited and designed for internal system messaging.
> *Maps to: Domain 1.B.2*

> **[AP] RW-D1-19**: A hospital contracts with an EHR company to access clinical software hosted entirely by the vendor — the vendor manages hardware, operating system, and application updates. The hospital pays a monthly subscription. This delivery model is:
> - A) IaaS
> - B) PaaS
> - C) SaaS **[CORRECT]**
> - D) Private cloud
>
> *Rationale*: SaaS delivers a fully hosted and managed application over the internet; the organization consumes the software without managing the underlying infrastructure.
> *Maps to: Domain 1.B.2*

> **[AP] RW-D1-20**: An outpatient network's scheduling system must send appointment data to three clinical applications, each using a different message format. Rather than building three separate point-to-point interfaces, the IT team deploys a central component that translates and routes messages. This component is called:
> - A) A data warehouse
> - B) An interface engine **[CORRECT]**
> - C) A VPN concentrator
> - D) A clinical data repository
>
> *Rationale*: An interface engine (middleware) translates messages between formats and routes them to the correct destination, reducing the proliferation of point-to-point interfaces.
> *Maps to: Domain 1.B.2*

> **[AP] RW-D1-21**: A psychiatric hospital is seeking formal accreditation for its substance use disorder treatment and rehabilitation programs. Which accreditation body is MOST relevant?
> - A) The Joint Commission
> - B) NCQA
> - C) CARF **[CORRECT]**
> - D) DNV GL
>
> *Rationale*: CARF accredits rehabilitation and behavioral health programs, including substance use disorder treatment.
> *Maps to: Domain 1.A.4*

> **[AN] RW-D1-22**: An oncology center uses a patient's tumor genomic profile to select chemotherapy drugs most likely to be effective for that individual rather than following a standard protocol. This approach is BEST described as:
> - A) Remote patient monitoring
> - B) Population health risk stratification
> - C) Precision medicine **[CORRECT]**
> - D) Natural language processing
>
> *Rationale*: Precision medicine uses individual genetic, molecular, or biomarker data to customize treatment decisions, rather than applying population-based protocols.
> *Maps to: Domain 1.A.5*

> **[AP] RW-D1-23**: A hospital acquires two smaller community hospitals in adjacent markets to expand inpatient capacity. This growth strategy is BEST described as:
> - A) Vertical integration
> - B) Horizontal integration **[CORRECT]**
> - C) Consumer-mediated exchange
> - D) ACO formation
>
> *Rationale*: Horizontal integration involves combining organizations of the same type (hospital + hospital); vertical integration acquires upstream or downstream organizations (e.g., hospital + SNF).
> *Maps to: Domain 1.A.2*

> **[AP] RW-D1-24**: A security operations team wants to aggregate log data from all servers, network devices, and clinical applications into a single platform that correlates events and sends real-time alerts when suspicious access patterns are detected. Which technology supports this?
> - A) VPN
> - B) IDS only
> - C) SIEM (Security Information and Event Management) **[CORRECT]**
> - D) Interface engine
>
> *Rationale*: SIEM centralizes log collection, performs event correlation, and generates alerts for security monitoring and incident response.
> *Maps to: Domain 1.B.2*

> **[AN] RW-D1-25**: HITECH was enacted in 2009 primarily to strengthen HIPAA. Which capability did HITECH add that HIPAA did not originally include?
> - A) The requirement for Business Associate Agreements
> - B) The definition of PHI and its 18 identifiers
> - C) Increased monetary penalty tiers and direct applicability of security requirements to business associates **[CORRECT]**
> - D) The EMTALA emergency screening requirement
>
> *Rationale*: HITECH increased maximum civil money penalties, created tiered penalty structures, and extended direct HIPAA Security Rule obligations to business associates.
> *Maps to: Domain 1.A.4*

---

## Domain 2 — Additional Questions (Set 2)

> **[RE] RW-D2-11**: A physician orders "metformin 500 mg PO BID with meals." How many times per day should the patient take this medication?
> - A) Once daily
> - B) Twice daily **[CORRECT]**
> - C) Three times daily
> - D) Every 8 hours
>
> *Rationale*: BID stands for "bis in die" — twice daily. PO means by mouth (oral route).
> *Maps to: Domain 2.1*

> **[AP] RW-D2-12**: A hospital coder is assigning procedure codes for a patient who had a laparoscopic appendectomy performed during an inpatient admission. Which coding system is correct for the procedure?
> - A) CPT
> - B) HCPCS Level II
> - C) ICD-10-PCS **[CORRECT]**
> - D) ICD-10-CM
>
> *Rationale*: ICD-10-PCS is used for inpatient procedure coding; CPT is used for outpatient and physician service billing. ICD-10-CM codes diagnoses, not procedures.
> *Maps to: Domain 2.2*

> **[AP] RW-D2-13**: A 250-bed hospital reports 6,750 total inpatient patient days in September (30-day month). What is the Average Daily Census?
> - A) 250
> - B) 225 **[CORRECT]**
> - C) 6,750
> - D) 27
>
> *Rationale*: ADC = total patient days ÷ number of days in the period = 6,750 ÷ 30 = 225. The bed occupancy rate would be 225/250 = 90%.
> *Maps to: Domain 2.3*

> **[AN] RW-D2-14**: A hospital's Case Mix Index dropped from 1.85 to 1.62 after a specialty surgical center opened nearby and took the most complex elective cases. The MOST likely financial consequence is:
> - A) Increased average length of stay
> - B) Increased per-case DRG reimbursement
> - C) Decreased per-case reimbursement because the remaining cases are clinically less complex **[CORRECT]**
> - D) Improved quality scores from reduced complexity
>
> *Rationale*: CMI reflects the average DRG weight of discharges. A lower CMI means less clinically complex cases with lower DRG weights — and lower reimbursement per discharge.
> *Maps to: Domain 2.3*

> **[RE] RW-D2-15**: A patient is discharged and requires a motorized wheelchair for home use. The appropriate code set for billing Medicare is:
> - A) CPT
> - B) ICD-10-CM
> - C) HCPCS Level II **[CORRECT]**
> - D) NDC
>
> *Rationale*: HCPCS Level II covers durable medical equipment, supplies, and drugs not covered by standard CPT codes.
> *Maps to: Domain 2.2*

> **[AN] RW-D2-16**: A hospital quality team wants to automatically identify patients with documented hypertension, diabetes, and chronic kidney disease from physician progress notes to populate a disease registry. Which technology is MOST applicable?
> - A) BCMA scanning
> - B) HL7 ADT messaging
> - C) Natural Language Processing (NLP) **[CORRECT]**
> - D) DICOM image parsing
>
> *Rationale*: NLP extracts structured clinical concepts (diagnoses, findings, medications) from unstructured free-text notes, enabling automated registry population.
> *Maps to: Domain 2.5*

> **[AP] RW-D2-17**: A drug-allergy CDS alert fires at medication reconciliation and is routed to the bedside nurse — but it is the prescribing physician who holds the authority and clinical responsibility to modify the order. Which of the Five Rights of CDS was violated?
> - A) Right information
> - B) Right time
> - C) Right person **[CORRECT]**
> - D) Right channel
>
> *Rationale*: The Right Person means the alert must reach the clinician who has the ability and authority to act on it, not just any user in the workflow.
> *Maps to: Domain 2.6*

> **[AN] RW-D2-18**: A large multi-specialty practice wants to share longitudinal patient records with outside specialists and the regional hospital. An EMR is inadequate for this goal primarily because:
> - A) EMRs cannot support CPOE
> - B) EMRs are not designed for interoperability and sharing across organizations **[CORRECT]**
> - C) EMRs do not support billing codes
> - D) EHRs are less expensive than EMRs
>
> *Rationale*: EMRs serve a single provider and are not designed to share data externally; EHRs are built for coordinated care across organizations.
> *Maps to: Domain 2.2*

> **[AP] RW-D2-19**: A hospital's eligible professionals want to receive CMS incentive payments for demonstrating specific health IT use, including providing patients electronic access to their health records. This program is currently known as:
> - A) Meaningful Use Stage 1
> - B) Health Information Exchange Certification
> - C) Promoting Interoperability (PI) **[CORRECT]**
> - D) ONC Cures Act Certification
>
> *Rationale*: CMS renamed the Meaningful Use program to Promoting Interoperability; it offers incentive payments for demonstrated health IT use across three stages.
> *Maps to: Domain 2.2*

> **[AN] RW-D2-20**: An orthopedic unit has highly variable post-operative nursing assessments — some nurses document in paragraphs, others use bullet points — making it impossible to extract consistent quality metrics. The best long-term informatics solution is:
> - A) Require all nurses to use the same paragraph template
> - B) Redesign the assessment using structured data fields with validated clinical terminology **[CORRECT]**
> - C) Export all free-text monthly for manual review
> - D) Reduce the number of required assessment elements
>
> *Rationale*: Structured data entry using standardized terminology enables consistent documentation, automated quality reporting, and analytics — free-text is not reliable for metric extraction.
> *Maps to: Domain 2.4*

> **[AP] RW-D2-21**: The quality team reports sepsis mortality increased 12% last quarter. The CMO asks: "What changed in our care processes or patient population that drove this increase?" This question requires:
> - A) Descriptive analytics
> - B) Diagnostic analytics **[CORRECT]**
> - C) Predictive analytics
> - D) Prescriptive analytics
>
> *Rationale*: Diagnostic analytics investigates the cause or explanation behind observed outcomes — why did something happen.
> *Maps to: Domain 2.5*

> **[AP] RW-D2-22**: During a BCMA audit, a nurse is found to have scanned the patient wristband but not the medication barcode, relying on visual identification of the medication package. Which of the Five Rights is MOST at risk?
> - A) Right patient
> - B) Right drug **[CORRECT]**
> - C) Right time
> - D) Right route
>
> *Rationale*: Scanning the medication barcode is the system-level check that verifies the Right Drug. Skipping it removes the automated safeguard against wrong-drug errors.
> *Maps to: Domain 2.3, 2.4*

---

## Domain 3 — Additional Questions (Set 2)

> **[AP] RW-D3-13**: A health system is building a new patient portal with frequently changing user requirements and clinician feedback cycles planned every two weeks. Which SDLC model is MOST appropriate?
> - A) Waterfall, because it provides clear phase gates and formal documentation
> - B) Agile, because it supports iterative delivery and continuous stakeholder feedback **[CORRECT]**
> - C) Spiral, because it is designed for low-risk, single-phase deliverables
> - D) RAD, because portals do not require testing cycles
>
> *Rationale*: Agile's iterative sprints and continuous feedback loops are best suited to projects where requirements evolve and users need to validate increments regularly.
> *Maps to: Domain 3.A.1*

> **[RE] RW-D3-14**: A hospital quality team is reducing CAUTI infections. They quantify baseline infection rates, identify contributing root causes through data analysis, implement catheter care protocol changes, and establish ongoing monitoring dashboards. This structured methodology is:
> - A) PDCA
> - B) ADKAR
> - C) DMAIC **[CORRECT]**
> - D) Kotter's 8-Step Model
>
> *Rationale*: DMAIC (Define, Measure, Analyze, Improve, Control) is the Six Sigma process improvement framework; PDCA is similar but less statistically rigorous.
> *Maps to: Domain 3.A.3*

> **[AP] RW-D3-15**: An implementation team is mapping the hospital discharge process and needs to show which staff role — case manager, physician, nurse, or social worker — performs each step and where handoffs occur. The MOST appropriate tool is:
> - A) Fishbone diagram
> - B) Swim lane diagram **[CORRECT]**
> - C) Run chart
> - D) SIPOC diagram
>
> *Rationale*: Swim lane diagrams assign each role its own lane and show exactly who performs each step and where cross-role handoffs occur in the process.
> *Maps to: Domain 3.A.4*

> **[AP] RW-D3-16**: Clinical leaders state they can tolerate a maximum of 2 hours of system downtime and can afford to lose up to 30 minutes of transaction data if the lab results system fails. The correct recovery targets are:
> - A) RTO = 30 minutes; RPO = 2 hours
> - B) RTO = 2 hours; RPO = 30 minutes **[CORRECT]**
> - C) RTO = RPO = 2 hours
> - D) RTO = 0; RPO = 4 hours
>
> *Rationale*: RTO = Recovery Time Objective (max downtime tolerated) = 2 hours; RPO = Recovery Point Objective (max data loss tolerated, expressed as time) = 30 minutes.
> *Maps to: Domain 3.B.4*

> **[AP] RW-D3-17**: A hospital wants to allow a third-party patient-facing app to securely query the EHR for a patient's medication list using the patient's existing EHR credentials. The MOST appropriate standard to enable this is:
> - A) Direct Protocol
> - B) HL7 v2.x
> - C) SMART on FHIR **[CORRECT]**
> - D) DICOM
>
> *Rationale*: SMART on FHIR enables authorized third-party app integration with EHRs using OAuth 2.0 authentication and FHIR resource queries.
> *Maps to: Domain 3.B.1*

> **[AP] RW-D3-18**: A hospital system needs to train 5,000 end users across 8 facilities before an EHR go-live. The vendor cannot provide direct classroom training to all users. The MOST scalable training strategy is:
> - A) Hire enough contract trainers to reach all 5,000 users simultaneously
> - B) Train-the-Trainer — build internal expert trainers who then train their department peers **[CORRECT]**
> - C) Provide no pre-go-live training and rely solely on at-the-elbow support
> - D) Send all users to the vendor's national training center
>
> *Rationale*: Train-the-Trainer multiplies the organization's internal training capacity by creating a layer of expert trainers who scale to the full user base.
> *Maps to: Domain 3.C.3*

> **[AN] RW-D3-19**: An implementation team has completed unit testing and integration testing for a new ED tracking system. What type of testing should occur NEXT before User Acceptance Testing?
> - A) Stress testing only
> - B) System testing, to validate end-to-end functionality in a production-like environment **[CORRECT]**
> - C) Regression testing of the existing system
> - D) Acceptance testing to obtain contractual sign-off
>
> *Rationale*: The correct sequence is: unit → integration → system → UAT → acceptance. System testing validates the complete system before clinical end users conduct UAT.
> *Maps to: Domain 3.D.1*

> **[AP] RW-D3-20**: A ransomware attack encrypts all patient records. Backups exist but systems are completely inaccessible to clinicians for 14 hours. Which component of the CIA triad was MOST directly violated?
> - A) Confidentiality
> - B) Integrity
> - C) Availability **[CORRECT]**
> - D) Authentication
>
> *Rationale*: Availability means systems and data are accessible when needed by authorized users. Ransomware denies that access, directly violating availability.
> *Maps to: Domain 3.E.1*

> **[AN] RW-D3-21**: A patient registrar responsible for insurance verification is found to have full access to clinical documentation, medication history, and surgical notes. Which access control principle was NOT enforced?
> - A) Role-based access control
> - B) Least privilege / minimum necessary **[CORRECT]**
> - C) Multi-factor authentication
> - D) Audit logging
>
> *Rationale*: Least privilege requires that users receive only the access rights required for their specific job function — not broader system access based on general role membership.
> *Maps to: Domain 3.E.3*

> **[AP] RW-D3-22**: A hospital is decommissioning hard drives from workstations that previously stored ePHI. Before disposing of the drives, the MOST appropriate action is:
> - A) Delete files using the Windows recycle bin
> - B) Reformat the drives using standard OS tools
> - C) Perform secure media destruction or cryptographic erasure per NIST 800-88 **[CORRECT]**
> - D) Return the drives to the vendor without erasure
>
> *Rationale*: PHI on decommissioned media must be permanently and verifiably destroyed per HIPAA and NIST SP 800-88 guidelines to prevent unauthorized recovery.
> *Maps to: Domain 3.E.6*

> **[AP] RW-D3-23**: After reviewing written proposals and conducting vendor demonstrations, the EHR selection committee wants to see how a reference organization's clinical staff actually interact with the system in daily operations. This activity is called:
> - A) Reference check
> - B) Proof of concept
> - C) Site visit **[CORRECT]**
> - D) User acceptance testing
>
> *Rationale*: Site visits allow the selection team to observe real-world clinical workflow integration and end-user experience at a live reference customer.
> *Maps to: Domain 3.C.1*

> **[AN] RW-D3-24**: During the final month of an EHR build, the CMO requests adding a full telehealth module not included in the original project scope. The project team's BEST response is:
> - A) Add it immediately because the CMO has authority
> - B) Document the request, evaluate impact on scope, schedule, and budget, then route through change control **[CORRECT]**
> - C) Postpone all other build work until the telehealth module is complete
> - D) Reject the request without evaluation because go-live is imminent
>
> *Rationale*: All scope changes, regardless of the requester's authority, must go through formal change control to assess and document the impact on the project baseline.
> *Maps to: Domain 3.C.4*

> **[AP] RW-D3-25**: A health system's primary data center is destroyed in a flood. Clinical systems must be restored with the shortest possible recovery time. Which disaster recovery site type enables the fastest recovery?
> - A) Cold site
> - B) Warm site
> - C) Hot site **[CORRECT]**
> - D) Remote offsite tape backup library
>
> *Rationale*: A hot site is fully operational with current system images and data replication, enabling near-immediate failover with the lowest RTO.
> *Maps to: Domain 3.B.4*

> **[AN] RW-D3-26**: A clinical informatics team observes that a 12-step medication ordering workflow contains only 4 steps that directly contribute to patient safety verification; the other 8 involve re-entering data, redundant approvals, and searching for duplicate information. Which improvement approach BEST addresses these non-value-added steps?
> - A) DMAIC
> - B) PDCA
> - C) Lean / value stream mapping **[CORRECT]**
> - D) Fishbone analysis
>
> *Rationale*: Lean focuses on identifying and eliminating waste (non-value-added steps); value stream mapping is the specific tool for visualizing the workflow to surface waste.
> *Maps to: Domain 3.A.3*

> **[AP] RW-D3-27**: An audit finds that employees' personal smartphones are connecting to the same internal Wi-Fi network used by clinical applications and the EHR. The MOST appropriate technical control to address this risk is:
> - A) Ban all personal devices from the facility
> - B) Implement a guest/BYOD VLAN that is logically segmented from the clinical network **[CORRECT]**
> - C) Require employees to sign an acceptable use policy only
> - D) Install endpoint security software on all personal devices
>
> *Rationale*: Network segmentation (VLAN) is a technical safeguard that isolates personal devices from clinical systems, reducing risk without banning devices.
> *Maps to: Domain 3.E.4, 1.B.2*

---

## Domain 4 — Additional Questions (Set 2)

> **[AP] RW-D4-11**: A CIO wants the IT department's performance evaluated across four perspectives: financial returns, service quality for internal clinical customers, operational processes, and staff learning and development. This framework is:
> - A) SWOT analysis
> - B) PEST analysis
> - C) Balanced Scorecard **[CORRECT]**
> - D) Triple Aim
>
> *Rationale*: The Balanced Scorecard (Kaplan & Norton) measures organizational performance across Financial, Customer, Internal Process, and Learning & Growth dimensions.
> *Maps to: Domain 4.1*

> **[AN] RW-D4-12**: An IT department developing a 3-year strategic plan identifies: strong clinical expertise (internal), outdated legacy infrastructure (internal), growing telehealth market demand (external), and a new federal data privacy regulation requiring costly compliance work (external). Which planning tool captures all four of these factors?
> - A) Balanced Scorecard
> - B) SWOT analysis **[CORRECT]**
> - C) Risk register
> - D) RACI matrix
>
> *Rationale*: SWOT organizes internal Strengths and Weaknesses alongside external Opportunities and Threats into a single strategic assessment framework.
> *Maps to: Domain 4.2*

> **[AP] RW-D4-13**: Before launching an EHR replacement project, the CIO holds town halls and sends communications to all staff explaining why the current system is creating patient safety risks and limiting growth. According to Kotter's 8-Step Change Model, this MOST directly represents:
> - A) Building the guiding coalition
> - B) Sustaining acceleration
> - C) Creating a sense of urgency **[CORRECT]**
> - D) Empowering broad-based action
>
> *Rationale*: Kotter's first step is establishing urgency by communicating why change is necessary before building a coalition or launching the formal initiative.
> *Maps to: Domain 4.20*

> **[AN] RW-D4-14**: Post-go-live data shows nurses scored 92% on EHR proficiency assessments but are still reverting to paper forms two months after launch. Which element of the ADKAR change model is MOST likely deficient?
> - A) Knowledge
> - B) Awareness
> - C) Ability
> - D) Reinforcement **[CORRECT]**
>
> *Rationale*: High knowledge and demonstrated ability suggest the missing element is Reinforcement — without ongoing reinforcement through coaching, recognition, and accountability, learned behaviors decay.
> *Maps to: Domain 4.20*

> **[AN] RW-D4-15**: An IT department plans to purchase new server hardware ($800K one-time), pay annual software maintenance fees ($150K/year), and hire two system administrators ($120K/year each). How should these costs be classified?
> - A) All are capital expenses
> - B) Hardware = capital; software maintenance fees and salaries = operating expenses **[CORRECT]**
> - C) Hardware and software licenses = capital; salaries = operating expenses
> - D) All are operating expenses
>
> *Rationale*: Capital budget covers one-time asset purchases (hardware); operating budget covers recurring expenses (maintenance, staff salaries, subscriptions).
> *Maps to: Domain 4.25*

> **[AP] RW-D4-16**: During an EHR implementation, the project manager learns the interface vendor may have supply chain delays that could prevent the ADT interface from being ready by go-live. The MOST appropriate immediate action is to:
> - A) Ignore the concern until the delay is confirmed
> - B) Log the risk in the risk register with probability, impact, mitigation strategy, and an assigned owner **[CORRECT]**
> - C) Escalate directly to the board without further analysis
> - D) Move the go-live date immediately
>
> *Rationale*: The risk register captures identified risks before they become issues, enabling proactive planning and mitigation.
> *Maps to: Domain 4.17*

> **[AN] RW-D4-17**: A legacy clinical application cannot be patched because the vendor has reached end-of-life, creating a known cybersecurity vulnerability. Replacement is 18 months away. The organization purchases cyber liability insurance and implements network segmentation around the application. These responses are BEST described as:
> - A) Avoidance and mitigation
> - B) Transfer and mitigation **[CORRECT]**
> - C) Acceptance and avoidance
> - D) Transfer and acceptance
>
> *Rationale*: Insurance = risk transfer (shifting financial consequences); network segmentation = risk mitigation (reducing likelihood and impact). Neither avoids nor simply accepts the risk.
> *Maps to: Domain 4.17*

> **[AP] RW-D4-18**: An IT department has 20 project proposals but budget and staffing for only 8. The CIO evaluates each proposal against strategic goals, projected ROI, organizational risk, and resource availability to select the optimal mix. This function is called:
> - A) Project management
> - B) Program management
> - C) Portfolio management **[CORRECT]**
> - D) Benefits realization
>
> *Rationale*: Portfolio management governs and optimizes the overall mix of projects and programs across the organization based on strategy, value, risk, and resources.
> *Maps to: Domain 4.23*

> **[AN] RW-D4-19**: A health system's IT department wants clinical departments to see how much of the IT budget is consumed by their systems — but does not want to create interdepartmental billing friction. The MOST appropriate cost transparency model is:
> - A) Chargeback
> - B) Show-back **[CORRECT]**
> - C) Fixed-price contract
> - D) Time-and-materials billing
>
> *Rationale*: Show-back reports IT costs to business units for visibility and transparency without generating an actual internal charge; chargeback directly bills departments.
> *Maps to: Domain 4.25*

> **[AP] RW-D4-20**: A clinical communications vendor has missed its contractually guaranteed 99.5% monthly uptime for three consecutive months, causing significant workflow disruption. The FIRST formal action the HIT leader should take is:
> - A) Issue an RFP for a replacement vendor
> - B) Document each SLA breach formally and initiate the escalation and remedy process defined in the contract **[CORRECT]**
> - C) Terminate the contract immediately
> - D) Waive the SLA breach to preserve the vendor relationship
>
> *Rationale*: Vendor management requires formal documentation of breaches and adherence to the contractual escalation and remedy process before considering more drastic actions.
> *Maps to: Domain 4.24*

> **[RE] RW-D4-21**: In a project RACI matrix, the individual who is ultimately answerable for ensuring a deliverable is completed — even if others perform the actual work — holds which designation?
> - A) Responsible
> - B) Consulted
> - C) Accountable **[CORRECT]**
> - D) Informed
>
> *Rationale*: Accountable = the single owner answerable for the outcome. Responsible = those who do the work. Only one person should be Accountable per task.
> *Maps to: Domain 4.21*

> **[AN] RW-D4-22**: A senior informatics director announces retirement in 18 months. The CIO begins providing two high-potential analysts with cross-functional project leadership opportunities, executive committee exposure, and mentoring. This activity is an example of:
> - A) Competency gap assessment
> - B) 360° performance feedback
> - C) Succession planning **[CORRECT]**
> - D) Train-the-Trainer model
>
> *Rationale*: Succession planning identifies and systematically develops high-potential staff to assume leadership roles before a vacancy creates organizational disruption.
> *Maps to: Domain 4.22*

> **[AP] RW-D4-23**: An informatics manager is presenting findings on an AI diagnostic pilot to the executive committee. What presentation structure is MOST appropriate?
> - A) Detailed algorithm specifications and model architecture diagrams
> - B) Clinical impact findings, cost-benefit summary, recommendation, and proposed next steps **[CORRECT]**
> - C) Raw data tables and confidence intervals for all test metrics
> - D) A live vendor product demonstration
>
> *Rationale*: Executive presentations should lead with business and clinical significance, not technical detail. Format: findings → significance → recommendation → next steps.
> *Maps to: Domain 4.12*

> **[AN] RW-D4-24**: Six months after deploying a new laboratory order management system, satisfaction surveys show lab technicians are dissatisfied, but results lack specificity about root causes. Before designing remediation, what should the informatics team do NEXT?
> - A) Replace the system based on low satisfaction scores
> - B) Conduct focused usability observation sessions and structured interviews with laboratory staff **[CORRECT]**
> - C) Increase training hours on the current system
> - D) Survey ordering physicians to cross-reference satisfaction
>
> *Rationale*: When survey data lacks specificity, qualitative methods — observation and interviews — identify the specific usability barriers needed to guide targeted remediation.
> *Maps to: Domain 4.6*

> **[AP] RW-D4-25**: An emergency medicine department and the hospitalist group cannot agree on a common sepsis order set. Both believe their workflow is uniquely correct. Before escalating, the HIT leader should FIRST:
> - A) Select the most evidence-based version and implement it without further discussion
> - B) Facilitate a structured collaborative discussion focused on shared patient safety goals and clinical evidence **[CORRECT]**
> - C) Escalate immediately to the CMO for a unilateral decision
> - D) Build two separate order sets and allow each department to use their preferred version
>
> *Rationale*: The Thomas-Kilmann collaborative approach seeks a win-win by identifying shared priorities. Escalation is appropriate only if facilitation fails, and two separate order sets undermine standardization.
> *Maps to: Domain 4.13*

---

## How to Review These Questions

- For each wrong answer, write the domain concept it tried to distract you with.
- For each correct answer, identify whether the stem asked for FIRST, NEXT, BEST, or MOST appropriate.
- Re-answer missed questions after 48 hours without looking at the rationale.
- When two answers seem plausible, choose the one that protects patient safety, compliance, scope control, stakeholder alignment, and evidence-based workflow.
