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

## How to Review These Questions

- For each wrong answer, write the domain concept it tried to distract you with.
- For each correct answer, identify whether the stem asked for FIRST, NEXT, BEST, or MOST appropriate.
- Re-answer missed questions after 48 hours without looking at the rationale.
- When two answers seem plausible, choose the one that protects patient safety, compliance, scope control, stakeholder alignment, and evidence-based workflow.
