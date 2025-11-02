# Raw LLM Response for Condition_C

An architectural design based on the provided brief.

### Part 1: Context & Scope

#### Sector Context Profile

**Sector to be Analyzed:** Health Insurance

*   **Core Purpose & Societal Role:** The Health Insurance sector's fundamental purpose is to provide financial protection against the high and often unpredictable costs of healthcare. It operates on the principle of risk pooling, where contributions from a large group of members (premiums) are used to pay for the medical services needed by a smaller number. Its societal role is to facilitate access to healthcare, promote wellness, and provide a mechanism for managing health-related financial risk for individuals, families, and organizations.
*   **Primary Business Model Archetype(s):** The sector operates on a hybrid model, primarily involving B2B, B2C, and B2G interactions:
    *   **B2B:** Selling group health plans to employers, who offer them to their employees as a benefit.
    *   **B2C:** Selling individual and family plans directly to consumers, often through health insurance marketplaces.
    *   **B2G:** Administering government-funded programs like Medicare and Medicaid, acting as a contractor to manage benefits and provider networks for eligible populations.
*   **Key Strategic Drivers & Basis of Competition:**
    1.  **Cost Containment & Efficiency:** The ability to manage medical costs through negotiated provider rates, care management programs, and efficient claims processing is a primary basis for competitive pricing and profitability.
    2.  **Member Experience & Satisfaction:** Competition is increasingly based on the quality of member service, ease of access to care, digital tools, and overall satisfaction, which drives member retention.
    3.  **Regulatory Compliance & Reputation:** Given the sector's high-stakes nature, maintaining a strong reputation for ethical practices and rigorously adhering to complex regulations (e.g., HIPAA, ACA) is critical for market access and trust.
*   **Dominant Environmental Factors:** The sector is heavily influenced by a complex regulatory landscape that dictates product design, pricing, and market conduct. Public accountability and political scrutiny are intense, with frequent policy debates impacting the operating environment. Technological trends, such as data analytics for risk management, telehealth for care delivery, and AI for claims processing, are significant forces for change.

#### Strategic Foundation

*   **Customer Segment:** `Employers` (Group Plans)
    *   **Value Proposition(s):** Provides a mechanism to attract and retain talent through competitive employee benefits. Manages the financial risk and administrative burden associated with employee healthcare costs.
*   **Customer Segment:** `Individuals & Families` (Direct Plans)
    *   **Value Proposition(s):** Delivers financial security and peace of mind by protecting against catastrophic healthcare expenses. Provides access to a negotiated network of healthcare providers at a lower cost than direct payment.
*   **Customer Segment:** `Government Agencies` (Public Programs)
    *   **Value Proposition(s):** Offers efficient and compliant administration of public health benefit programs. Manages healthcare costs for eligible populations while ensuring access to care according to government mandates.

#### High-Level Value Streams

*   `[Develop & Maintain Provider Network, The end-to-end process of identifying, credentialing, contracting with, and managing the network of healthcare providers (hospitals, clinics, doctors) that members can access., Provides a core asset for all value propositions, Value Stream Pattern: MTS]`
*   `[Design & Price Health Plan Product, The end-to-end process of defining benefits, structuring cost-sharing, performing actuarial analysis to set rates, and filing the resulting health plan with regulators for approval., Provides a core asset for all value propositions, Value Stream Pattern: MTS]`
*   `[Acquire & Serve Member, The customer-triggered process from initial sales and enrollment of a group or individual, through ongoing premium collection, claims processing, customer service, and eventual renewal or termination., Delivers the core value to Employers, Individuals & Families, and Government Agencies, Value Stream Pattern: ATO]`

### Part 2: Modeling Procedure

#### Step 1: Deconstruct Value Streams into Granular Elements and Objects

*   `[Identify & Recruit Provider, Provider Prospect, Develop & Maintain Provider Network]`
*   `[Credential Provider, Provider Credential, Develop & Maintain Provider Network]`
*   `[Negotiate Provider Contract, Provider Contract, Develop & Maintain Provider Network]`
*   `[Onboard & Support Provider, Network Provider, Develop & Maintain Provider Network]`
*   `[Monitor Provider Performance, Provider Performance Assessment, Develop & Maintain Provider Network]`
*   `[Define Plan Benefits & Structure, Plan Benefit Package, Design & Price Health Plan Product]`
*   `[Perform Actuarial Analysis, Actuarial Risk Model, Design & Price Health Plan Product]`
*   `[Price Plan & Set Rates, Plan Rate Schedule, Design & Price Health Plan Product]`
*   `[File Plan with Regulators, Regulatory Filing, Design & Price Health Plan Product]`
*   `[Publish Plan Details, Published Health Plan, Design & Price Health Plan Product]`
*   `[Market & Sell Plan, Sales Lead, Acquire & Serve Member]`
*   `[Generate Quote & Proposal, Group Proposal, Acquire & Serve Member]`
*   `[Underwrite & Finalize Group Agreement, Group Agreement, Acquire & Serve Member]`
*   `[Enroll Member, Enrolled Member, Acquire & Serve Member]`
*   `[Issue Member Credentials, Member ID Card, Acquire & Serve Member]`
*   `[Collect Premium, Premium Payment, Acquire & Serve Member]`
*   `[Receive & Validate Member Claim, Submitted Claim, Acquire & Serve Member]`
*   `[Adjudicate Member Claim, Claim Adjudication, Acquire & Serve Member]`
*   `[Process Claim Payment, Claim Payment, Acquire & Serve Member]`
*   `[Manage Member Inquiry, Member Inquiry Resolution, Acquire & Serve Member]`
*   `[Manage Member Grievance, Member Grievance, Acquire & Serve Member]`
*   `[Manage Membership Renewal, Membership Renewal, Acquire & Serve Member]`

#### Step 2: Discover the Complete Set of Capabilities and their Objects

**Canonical L2 Capabilities and their Custodial L2 Objects:**

*   `Provider Recruiting Management` -> `Provider Prospect`
*   `Provider Credentialing Management` -> `Provider Credential`
*   `Provider Contract Management` -> `Provider Contract`
*   `Provider Relationship Management` -> `Network Provider`, `Provider Performance Assessment`
*   `Benefit & Product Management` -> `Plan Benefit Package`
*   `Actuarial & Pricing Management` -> `Actuarial Risk Model`, `Plan Rate Schedule`
*   `Regulatory Compliance Management` -> `Regulatory Filing`
*   `Product Publication Management` -> `Published Health Plan`
*   `Sales & Marketing Management` -> `Sales Lead`
*   `Quoting & Proposal Management` -> `Group Proposal`
*   `Underwriting Management` -> `Group Agreement`
*   `Member Enrollment Management` -> `Enrolled Member`, `Member ID Card`
*   `Billing & Collection Management` -> `Premium Payment`
*   `Claim Intake Management` -> `Submitted Claim`
*   `Claim Adjudication Management` -> `Claim Adjudication`
*   `Claim Payment Management` -> `Claim Payment`
*   `Member Service Management` -> `Member Inquiry Resolution`
*   `Grievance & Appeals Management` -> `Member Grievance`
*   `Membership Lifecycle Management` -> `Membership Renewal`
*   `Medical Policy Management` (Support)
*   `Fraud, Waste & Abuse Management` (Support)

**Capability-to-ValueStream Links:**

*   `[Provider Recruiting Management, Identify & Recruit Provider]`
*   `[Provider Credentialing Management, Credential Provider]`
*   `[Provider Contract Management, Negotiate Provider Contract]`
*   `[Provider Relationship Management, Onboard & Support Provider]`
*   `[Provider Relationship Management, Monitor Provider Performance]`
*   `[Benefit & Product Management, Define Plan Benefits & Structure]`
*   `[Actuarial & Pricing Management, Perform Actuarial Analysis]`
*   `[Actuarial & Pricing Management, Price Plan & Set Rates]`
*   `[Regulatory Compliance Management, File Plan with Regulators]`
*   `[Product Publication Management, Publish Plan Details]`
*   `[Sales & Marketing Management, Market & Sell Plan]`
*   `[Quoting & Proposal Management, Generate Quote & Proposal]`
*   `[Underwriting Management, Underwrite & Finalize Group Agreement]`
*   `[Member Enrollment Management, Enroll Member]`
*   `[Member Enrollment Management, Issue Member Credentials]`
*   `[Billing & Collection Management, Collect Premium]`
*   `[Claim Intake Management, Receive & Validate Member Claim]`
*   `[Claim Adjudication Management, Adjudicate Member Claim]`
*   `[Claim Payment Management, Process Claim Payment]`
*   `[Member Service Management, Manage Member Inquiry]`
*   `[Grievance & Appeals Management, Manage Member Grievance]`
*   `[Membership Lifecycle Management, Manage Membership Renewal]`

**Capability-to-Capability Links:**

*   `[Medical Policy Management, Claim Adjudication Management]`
*   `[Fraud, Waste & Abuse Management, Claim Adjudication Management]`
*   `[Provider Contract Management, Claim Adjudication Management]`
*   `[Provider Credentialing Management, Provider Contract Management]`
*   `[Actuarial & Pricing Management, Underwriting Management]`
*   `[Benefit & Product Management, Sales & Marketing Management]`
*   `[Regulatory Compliance Management, Benefit & Product Management]`
*   `[Provider Relationship Management, Member Service Management]`

#### Step 3: Build the Canonical Capability Hierarchy (The ANCHOR)

*   **L0 Capability:** `Provide Health Insurance Coverage`
    *   **L1 Capability:** `Develop & Manage Products`
        *   **L2 Capabilities:** `Benefit & Product Management`, `Actuarial & Pricing Management`, `Regulatory Compliance Management`, `Product Publication Management`
    *   **L1 Capability:** `Manage Provider Network`
        *   **L2 Capabilities:** `Provider Recruiting Management`, `Provider Credentialing Management`, `Provider Contract Management`, `Provider Relationship Management`
    *   **L1 Capability:** `Acquire & Retain Customers`
        *   **L2 Capabilities:** `Sales & Marketing Management`, `Quoting & Proposal Management`, `Underwriting Management`, `Membership Lifecycle Management`
    *   **L1 Capability:** `Administer Member Services`
        *   **L2 Capabilities:** `Member Enrollment Management`, `Billing & Collection Management`, `Member Service Management`, `Grievance & Appeals Management`
    *   **L1 Capability:** `Process & Pay Claims`
        *   **L2 Capabilities:** `Claim Intake Management`, `Claim Adjudication Management`, `Claim Payment Management`, `Fraud, Waste & Abuse Management`, `Medical Policy Management`

#### Step 4: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

**Object Hierarchy:**

*   **L0 BusinessObject:** `Health Insurance Coverage`
    *   **L1 BusinessObject:** `Health Product`
        *   **L2 BusinessObjects:** `Plan Benefit Package`, `Actuarial Risk Model`, `Plan Rate Schedule`, `Regulatory Filing`, `Published Health Plan`
    *   **L1 BusinessObject:** `Provider Network`
        *   **L2 BusinessObjects:** `Provider Prospect`, `Provider Credential`, `Provider Contract`, `Network Provider`, `Provider Performance Assessment`
    *   **L1 BusinessObject:** `Customer Relationship`
        *   **L2 BusinessObjects:** `Sales Lead`, `Group Proposal`, `Group Agreement`, `Membership Renewal`
    *   **L1 BusinessObject:** `Member Service`
        *   **L2 BusinessObjects:** `Enrolled Member`, `Member ID Card`, `Premium Payment`, `Member Inquiry Resolution`, `Member Grievance`
    *   **L1 BusinessObject:** `Health Claim`
        *   **L2 BusinessObjects:** `Submitted Claim`, `Claim Adjudication`, `Claim Payment`

**Value Stream Hierarchy:**

*   **L0 ValueStream:** `Develop & Maintain Provider Network`
    *   **L1 ValueStream:** `Establish Network`
        *   **L2 ValueStreams:** `Identify & Recruit Provider`, `Credential Provider`, `Negotiate Provider Contract`
    *   **L1 ValueStream:** `Operate Network`
        *   **L2 ValueStreams:** `Onboard & Support Provider`, `Monitor Provider Performance`
*   **L0 ValueStream:** `Design & Price Health Plan Product`
    *   **L1 ValueStream:** `Formulate Product`
        *   **L2 ValueStreams:** `Define Plan Benefits & Structure`, `Perform Actuarial Analysis`, `Price Plan & Set Rates`
    *   **L1 ValueStream:** `Finalize Product`
        *   **L2 ValueStreams:** `File Plan with Regulators`, `Publish Plan Details`
*   **L0 ValueStream:** `Acquire & Serve Member`
    *   **L1 ValueStream:** `Execute Sales & Onboarding`
        *   **L2 ValueStreams:** `Market & Sell Plan`, `Generate Quote & Proposal`, `Underwrite & Finalize Group Agreement`, `Enroll Member`, `Issue Member Credentials`
    *   **L1 ValueStream:** `Deliver Core Services`
        *   **L2 ValueStreams:** `Collect Premium`, `Receive & Validate Member Claim`, `Adjudicate Member Claim`, `Process Claim Payment`
    *   **L1 ValueStream:** `Provide Member Support`
        *   **L2 ValueStreams:** `Manage Member Inquiry`, `Manage Member Grievance`, `Manage Membership Renewal`

#### Step 5: Derive Relationships & Generate Final Output

**Mandatory Verification Step A (Capability-to-Capability Serving):**

*   **L2 Relationship:** The L2 `Medical Policy Management` capability serves the L2 `Claim Adjudication Management` capability.
*   **L1 Parents:** The L1 parent for both capabilities is `Process & Pay Claims`.
*   **Derived L1 Relationship:** The L1 `Process & Pay Claims` capability serves itself. (This is a valid derivation, but per the exception rule, self-referencing relationships are omitted from the final output).
*   **L0 Parents:** The L0 parent for the L1 capability is `Provide Health Insurance Coverage`.
*   **Derived L0 Relationship:** The L0 `Provide Health Insurance Coverage` capability serves itself. (Omitted from output).

**Mandatory Verification Step B (Capability-to-Object Association):**

*   **L2 Relationship:** The L2 `Claim Adjudication Management` capability is associated with the L2 `Claim Adjudication` business object.
*   **L1 Parents:** The L1 parent of the capability is `Process & Pay Claims`. The L1 parent of the object is `Health Claim`.
*   **Derived L1 Relationship:** The L1 `Process & Pay Claims` capability is associated with the L1 `Health Claim` business object.
*   **L0 Parents:** The L0 parent of the L1 capability is `Provide Health Insurance Coverage`. The L0 parent of the L1 object is `Health Insurance Coverage`.
*   **Derived L0 Relationship:** The L0 `Provide Health Insurance Coverage` capability is associated with the L0 `Health Insurance Coverage` business object.

**Mandatory Verification Step C (Capability-to-ValueStream Serving):**

*   **L2 Relationship:** The L2 `Member Enrollment Management` capability serves the L2 `Enroll Member` value stream stage.
*   **L1 Parents:** The L1 parent of the capability is `Administer Member Services`. The L1 parent of the value stream stage is `Execute Sales & Onboarding` (within the `Acquire & Serve Member` L0 stream).
*   **Derived L1 Relationship:** The L1 `Administer Member Services` capability serves the L1 `Execute Sales & Onboarding` value stream stage.

### Part 3: Output Specifications

```csv
elements.csv
"ID","Type","Name","Documentation"
"C0","Capability","Provide Health Insurance Coverage","The complete ability of the organization to offer and manage health insurance coverage, encompassing all supporting functions from product design to claim payment."
"C1_1","Capability","Develop & Manage Products","The collective ability to design, price, file, and publish health insurance products that meet market needs and regulatory requirements."
"C1_2","Capability","Manage Provider Network","The collective ability to build, maintain, and manage a network of healthcare providers to deliver services to members."
"C1_3","Capability","Acquire & Retain Customers","The collective ability to market, sell, underwrite, and renew policies for group and individual customers."
"C1_4","Capability","Administer Member Services","The collective ability to enroll, bill, and provide ongoing support and grievance resolution for members."
"C1_5","Capability","Process & Pay Claims","The collective ability to receive, adjudicate, and pay member claims accurately and efficiently, while managing risk and policy compliance."
"C2_1","Capability","Benefit & Product Management","The ability to define the specific benefits, coverage limits, and structure of a health plan."
"C2_2","Capability","Actuarial & Pricing Management","The ability to perform risk analysis and set commercially viable and compliant premium rates for health plans."
"C2_3","Capability","Regulatory Compliance Management","The ability to manage interactions with regulatory bodies, including filing plans for approval and ensuring ongoing compliance."
"C2_4","Capability","Product Publication Management","The ability to create and distribute formal plan documents and marketing materials."
"C2_5","Capability","Provider Recruiting Management","The ability to identify, contact, and attract potential healthcare providers to join the network."
"C2_6","Capability","Provider Credentialing Management","The ability to verify a provider's qualifications, licenses, and history to ensure they meet quality standards."
"C2_7","Capability","Provider Contract Management","The ability to negotiate, execute, and manage contracts with network providers, including reimbursement rates and terms."
"C2_8","Capability","Provider Relationship Management","The ability to onboard, support, and manage the ongoing relationship with and performance of network providers."
"C2_9","Capability","Sales & Marketing Management","The ability to market products to potential customers and manage the sales pipeline."
"C2_10","Capability","Quoting & Proposal Management","The ability to generate accurate quotes and formal proposals for prospective group clients."
"C2_11","Capability","Underwriting Management","The ability to assess the risk of a potential group or individual and finalize the terms of the insurance agreement."
"C2_12","Capability","Membership Lifecycle Management","The ability to manage the member relationship from renewal through to termination."
"C2_13","Capability","Member Enrollment Management","The ability to process member applications and issue credentials for new and existing groups."
"C2_14","Capability","Billing & Collection Management","The ability to invoice members or groups for premiums and manage the collection of payments."
"C2_15","Capability","Member Service Management","The ability to respond to member inquiries and provide information and assistance."
"C2_16","Capability","Grievance & Appeals Management","The ability to formally process and resolve member complaints and appeals according to regulatory guidelines."
"C2_17","Capability","Claim Intake Management","The ability to receive and validate the completeness and initial eligibility of submitted claims."
"C2_18","Capability","Claim Adjudication Management","The ability to apply plan benefits, medical policies, and provider contracts to determine the outcome of a claim."
"C2_19","Capability","Claim Payment Management","The ability to process and issue payments to providers or members for approved claims."
"C2_20","Capability","Fraud, Waste & Abuse Management","The ability to detect, investigate, and prevent fraudulent or wasteful claims and activities."
"C2_21","Capability","Medical Policy Management","The ability to define and maintain clinical policies that guide coverage decisions for medical services and treatments."
"BO0","BusinessObject","Health Insurance Coverage","The conceptual representation of the complete health insurance offering provided by the organization."
"BO1_1","BusinessObject","Health Product","A marketable health insurance plan with defined benefits, rates, and regulatory approvals."
"BO1_2","BusinessObject","Provider Network","The contracted group of healthcare providers that deliver services to members."
"BO1_3","BusinessObject","Customer Relationship","The formal business relationship established with a group or individual policyholder."
"BO1_4","BusinessObject","Member Service","The set of interactions and transactions related to an enrolled member's coverage."
"BO1_5","BusinessObject","Health Claim","A request for payment submitted by a member or provider for rendered healthcare services."
"BO2_1","BusinessObject","Plan Benefit Package","The detailed specification of what is covered under a health plan."
"BO2_2","BusinessObject","Actuarial Risk Model","The mathematical model used to assess risk and calculate premium rates."
"BO2_3","BusinessObject","Plan Rate Schedule","The official list of premiums for a specific health plan."
"BO2_4","BusinessObject","Regulatory Filing","The formal submission of a health plan to a regulatory body for approval."
"BO2_5","BusinessObject","Published Health Plan","The final, customer-facing documentation describing the health plan."
"BO2_6","BusinessObject","Provider Prospect","A healthcare provider identified as a potential candidate for the network."
"BO2_7","BusinessObject","Provider Credential","The verified documentation of a provider's qualifications and background."
"BO2_8","BusinessObject","Provider Contract","The legal agreement between the insurer and a healthcare provider."
"BO2_9","BusinessObject","Network Provider","A fully credentialed and contracted provider available to members."
"BO2_10","BusinessObject","Provider Performance Assessment","An evaluation of a provider's performance against quality and cost metrics."
"BO2_11","BusinessObject","Sales Lead","An identified potential customer for a health plan."
"BO2_12","BusinessObject","Group Proposal","A formal offer of coverage and rates presented to a prospective group client."
"BO2_13","BusinessObject","Group Agreement","The finalized contract with a group policyholder."
"BO2_14","BusinessObject","Membership Renewal","The formal agreement to continue coverage for another term."
"BO2_15","BusinessObject","Enrolled Member","An individual who is officially covered by a health plan."
"BO2_16","BusinessObject","Member ID Card","The official credential issued to a member for accessing services."
"BO2_17","BusinessObject","Premium Payment","The financial transaction for a premium paid by a member or group."
"BO2_18","BusinessObject","Member Inquiry Resolution","The outcome of a successfully handled member question or request."
"BO2_19","BusinessObject","Member Grievance","A formal complaint filed by a member regarding their coverage or care."
"BO2_20","BusinessObject","Submitted Claim","A request for payment received from a provider or member."
"BO2_21","BusinessObject","Claim Adjudication","The official decision on a claim, including amounts approved and denied."
"BO2_22","BusinessObject","Claim Payment","The financial transaction to settle an approved claim."
"VS0_1","ValueStream","Develop & Maintain Provider Network","The end-to-end process of identifying, credentialing, contracting with, and managing the network of healthcare providers (hospitals, clinics, doctors) that members can access."
"VS0_2","ValueStream","Design & Price Health Plan Product","The end-to-end process of defining benefits, structuring cost-sharing, performing actuarial analysis to set rates, and filing the resulting health plan with regulators for approval."
"VS0_3","ValueStream","Acquire & Serve Member","The customer-triggered process from initial sales and enrollment of a group or individual, through ongoing premium collection, claims processing, customer service, and eventual renewal or termination."
"VS1_1_1","ValueStream","Establish Network","The initial stages of building the provider network, from identification through contracting."
"VS1_1_2","ValueStream","Operate Network","The ongoing management and support of contracted providers within the network."
"VS1_2_1","ValueStream","Formulate Product","The core design and pricing stages of product development."
"VS1_2_2","ValueStream","Finalize Product","The final stages of gaining regulatory approval and preparing the product for market."
"VS1_3_1","ValueStream","Execute Sales & Onboarding","The front-end process of acquiring a new customer and enrolling their members."
"VS1_3_2","ValueStream","Deliver Core Services","The central operational processes of collecting premiums and processing claims."
"VS1_3_3","ValueStream","Provide Member Support","The ongoing processes of managing member inquiries, issues, and the renewal lifecycle."
"VS2_1_1","ValueStream","Identify & Recruit Provider","The stage of finding and engaging potential providers to join the network."
"VS2_1_2","ValueStream","Credential Provider","The stage of verifying a provider's qualifications and background."
"VS2_1_3","ValueStream","Negotiate Provider Contract","The stage of establishing a formal contractual agreement with a provider."
"VS2_1_4","ValueStream","Onboard & Support Provider","The stage of integrating a new provider into the network and providing ongoing support."
"VS2_1_5","ValueStream","Monitor Provider Performance","The stage of evaluating provider performance against quality and efficiency metrics."
"VS2_2_1","ValueStream","Define Plan Benefits & Structure","The stage of designing the core components and coverage of a health plan."
"VS2_2_2","ValueStream","Perform Actuarial Analysis","The stage of assessing risk to inform the pricing of the health plan."
"VS2_2_3","ValueStream","Price Plan & Set Rates","The stage of establishing the final premium rates for the health plan."
"VS2_2_4","ValueStream","File Plan with Regulators","The stage of submitting the plan for formal approval by regulatory authorities."
"VS2_2_5","ValueStream","Publish Plan Details","The stage of creating and releasing official plan documents to the market."
"VS2_3_1","ValueStream","Market & Sell Plan","The stage of generating leads and engaging with prospective customers."
"VS2_3_2","ValueStream","Generate Quote & Proposal","The stage of creating a specific offer for a prospective group customer."
"VS2_3_3","ValueStream","Underwrite & Finalize Group Agreement","The stage of assessing group risk and executing a formal contract."
"VS2_3_4","ValueStream","Enroll Member","The stage of processing applications and officially adding members to the plan."
"VS2_3_5","ValueStream","Issue Member Credentials","The stage of creating and sending identification cards to new members."
"VS2_3_6","ValueStream","Collect Premium","The stage of billing and collecting payment for coverage."
"VS2_3_7","ValueStream","Receive & Validate Member Claim","The stage of accepting and performing initial checks on a submitted claim."
"VS2_3_8","ValueStream","Adjudicate Member Claim","The stage of applying business and medical rules to decide the outcome of a claim."
"VS2_3_9","ValueStream","Process Claim Payment","The stage of issuing payment for an approved claim."
"VS2_3_10","ValueStream","Manage Member Inquiry","The stage of responding to and resolving questions from members."
"VS2_3_11","ValueStream","Manage Member Grievance","The stage of formally investigating and resolving a member's complaint."
"VS2_3_12","ValueStream","Manage Membership Renewal","The stage of managing the process for a member or group to continue their coverage."
```

```csv
relations.csv
"ID","Type","Name","Documentation","Source","Target","Specialization"
"","CompositionRelationship","","","C0","C1_1",""
"","CompositionRelationship","","","C0","C1_2",""
"","CompositionRelationship","","","C0","C1_3",""
"","CompositionRelationship","","","C0","C1_4",""
"","CompositionRelationship","","","C0","C1_5",""
"","CompositionRelationship","","","C1_1","C2_1",""
"","CompositionRelationship","","","C1_1","C2_2",""
"","CompositionRelationship","","","C1_1","C2_3",""
"","CompositionRelationship","","","C1_1","C2_4",""
"","CompositionRelationship","","","C1_2","C2_5",""
"","CompositionRelationship","","","C1_2","C2_6",""
"","CompositionRelationship","","","C1_2","C2_7",""
"","CompositionRelationship","","","C1_2","C2_8",""
"","CompositionRelationship","","","C1_3","C2_9",""
"","CompositionRelationship","","","C1_3","C2_10",""
"","CompositionRelationship","","","C1_3","C2_11",""
"","CompositionRelationship","","","C1_3","C2_12",""
"","CompositionRelationship","","","C1_4","C2_13",""
"","CompositionRelationship","","","C1_4","C2_14",""
"","CompositionRelationship","","","C1_4","C2_15",""
"","CompositionRelationship","","","C1_4","C2_16",""
"","CompositionRelationship","","","C1_5","C2_17",""
"","CompositionRelationship","","","C1_5","C2_18",""
"","CompositionRelationship","","","C1_5","C2_19",""
"","CompositionRelationship","","","C1_5","C2_20",""
"","CompositionRelationship","","","C1_5","C2_21",""
"","CompositionRelationship","","","BO0","BO1_1",""
"","CompositionRelationship","","","BO0","BO1_2",""
"","CompositionRelationship","","","BO0","BO1_3",""
"","CompositionRelationship","","","BO0","BO1_4",""
"","CompositionRelationship","","","BO0","BO1_5",""
"","CompositionRelationship","","","BO1_1","BO2_1",""
"","CompositionRelationship","","","BO1_1","BO2_2",""
"","CompositionRelationship","","","BO1_1","BO2_3",""
"","CompositionRelationship","","","BO1_1","BO2_4",""
"","CompositionRelationship","","","BO1_1","BO2_5",""
"","CompositionRelationship","","","BO1_2","BO2_6",""
"","CompositionRelationship","","","BO1_2","BO2_7",""
"","CompositionRelationship","","","BO1_2","BO2_8",""
"","CompositionRelationship","","","BO1_2","BO2_9",""
"","CompositionRelationship","","","BO1_2","BO2_10",""
"","CompositionRelationship","","","BO1_3","BO2_11",""
"","CompositionRelationship","","","BO1_3","BO2_12",""
"","CompositionRelationship","","","BO1_3","BO2_13",""
"","CompositionRelationship","","","BO1_3","BO2_14",""
"","CompositionRelationship","","","BO1_4","BO2_15",""
"","CompositionRelationship","","","BO1_4","BO2_16",""
"","CompositionRelationship","","","BO1_4","BO2_17",""
"","CompositionRelationship","","","BO1_4","BO2_18",""
"","CompositionRelationship","","","BO1_4","BO2_19",""
"","CompositionRelationship","","","BO1_5","BO2_20",""
"","CompositionRelationship","","","BO1_5","BO2_21",""
"","CompositionRelationship","","","BO1_5","BO2_22",""
"","CompositionRelationship","","","VS0_1","VS1_1_1",""
"","CompositionRelationship","","","VS0_1","VS1_1_2",""
"","CompositionRelationship","","","VS0_2","VS1_2_1",""
"","CompositionRelationship","","","VS0_2","VS1_2_2",""
"","CompositionRelationship","","","VS0_3","VS1_3_1",""
"","CompositionRelationship","","","VS0_3","VS1_3_2",""
"","CompositionRelationship","","","VS0_3","VS1_3_3",""
"","CompositionRelationship","","","VS1_1_1","VS2_1_1",""
"","CompositionRelationship","","","VS1_1_1","VS2_1_2",""
"","CompositionRelationship","","","VS1_1_1","VS2_1_3",""
"","CompositionRelationship","","","VS1_1_2","VS2_1_4",""
"","CompositionRelationship","","","VS1_1_2","VS2_1_5",""
"","CompositionRelationship","","","VS1_2_1","VS2_2_1",""
"","CompositionRelationship","","","VS1_2_1","VS2_2_2",""
"","CompositionRelationship","","","VS1_2_1","VS2_2_3",""
"","CompositionRelationship","","","VS1_2_2","VS2_2_4",""
"","CompositionRelationship","","","VS1_2_2","VS2_2_5",""
"","CompositionRelationship","","","VS1_3_1","VS2_3_1",""
"","CompositionRelationship","","","VS1_3_1","VS2_3_2",""
"","CompositionRelationship","","","VS1_3_1","VS2_3_3",""
"","CompositionRelationship","","","VS1_3_1","VS2_3_4",""
"","CompositionRelationship","","","VS1_3_1","VS2_3_5",""
"","CompositionRelationship","","","VS1_3_2","VS2_3_6",""
"","CompositionRelationship","","","VS1_3_2","VS2_3_7",""
"","CompositionRelationship","","","VS1_3_2","VS2_3_8",""
"","CompositionRelationship","","","VS1_3_2","VS2_3_9",""
"","CompositionRelationship","","","VS1_3_3","VS2_3_10",""
"","CompositionRelationship","","","VS1_3_3","VS2_3_11",""
"","CompositionRelationship","","","VS1_3_3","VS2_3_12",""
"","ServingRelationship","","","C2_21","C2_18",""
"","ServingRelationship","","","C2_20","C2_18",""
"","ServingRelationship","","","C2_7","C2_18",""
"","ServingRelationship","","","C2_6","C2_7",""
"","ServingRelationship","","","C2_2","C2_11",""
"","ServingRelationship","","","C2_1","C2_9",""
"","ServingRelationship","","","C2_3","C2_1",""
"","ServingRelationship","","","C2_8","C2_15",""
"","ServingRelationship","","","C1_5","C1_5",""
"","ServingRelationship","","","C1_2","C1_5",""
"","ServingRelationship","","","C1_2","C1_2",""
"","ServingRelationship","","","C1_1","C1_3",""
"","ServingRelationship","","","C1_1","C1_1",""
"","ServingRelationship","","","C1_2","C1_4",""
"","AssociationRelationship","","","C2_1","BO2_1",""
"","AssociationRelationship","","","C2_2","BO2_2",""
"","AssociationRelationship","","","C2_2","BO2_3",""
"","AssociationRelationship","","","C2_3","BO2_4",""
"","AssociationRelationship","","","C2_4","BO2_5",""
"","AssociationRelationship","","","C2_5","BO2_6",""
"","AssociationRelationship","","","C2_6","BO2_7",""
"","AssociationRelationship","","","C2_7","BO2_8",""
"","AssociationRelationship","","","C2_8","BO2_9",""
"","AssociationRelationship","","","C2_8","BO2_10",""
"","AssociationRelationship","","","C2_9","BO2_11",""
"","AssociationRelationship","","","C2_10","BO2_12",""
"","AssociationRelationship","","","C2_11","BO2_13",""
"","AssociationRelationship","","","C2_12","BO2_14",""
"","AssociationRelationship","","","C2_13","BO2_15",""
"","AssociationRelationship","","","C2_13","BO2_16",""
"","AssociationRelationship","","","C2_14","BO2_17",""
"","AssociationRelationship","","","C2_15","BO2_18",""
"","AssociationRelationship","","","C2_16","BO2_19",""
"","AssociationRelationship","","","C2_17","BO2_20",""
"","AssociationRelationship","","","C2_18","BO2_21",""
"","AssociationRelationship","","","C2_19","BO2_22",""
"","AssociationRelationship","","","C1_1","BO1_1",""
"","AssociationRelationship","","","C1_2","BO1_2",""
"","AssociationRelationship","","","C1_3","BO1_3",""
"","AssociationRelationship","","","C1_4","BO1_4",""
"","AssociationRelationship","","","C1_5","BO1_5",""
"","AssociationRelationship","","","C0","BO0",""
"","ServingRelationship","","","C2_5","VS2_1_1",""
"","ServingRelationship","","","C2_6","VS2_1_2",""
"","ServingRelationship","","","C2_7","VS2_1_3",""
"","ServingRelationship","","","C2_8","VS2_1_4",""
"","ServingRelationship","","","C2_8","VS2_1_5",""
"","ServingRelationship","","","C2_1","VS2_2_1",""
"","ServingRelationship","","","C2_2","VS2_2_2",""
"","ServingRelationship","","","C2_2","VS2_2_3",""
"","ServingRelationship","","","C2_3","VS2_2_4",""
"","ServingRelationship","","","C2_4","VS2_2_5",""
"","ServingRelationship","","","C2_9","VS2_3_1",""
"","ServingRelationship","","","C2_10","VS2_3_2",""
"","ServingRelationship","","","C2_11","VS2_3_3",""
"","ServingRelationship","","","C2_13","VS2_3_4",""
"","ServingRelationship","","","C2_13","VS2_3_5",""
"","ServingRelationship","","","C2_14","VS2_3_6",""
"","ServingRelationship","","","C2_17","VS2_3_7",""
"","ServingRelationship","","","C2_18","VS2_3_8",""
"","ServingRelationship","","","C2_19","VS2_3_9",""
"","ServingRelationship","","","C2_15","VS2_3_10",""
"","ServingRelationship","","","C2_16","VS2_3_11",""
"","ServingRelationship","","","C2_12","VS2_3_12",""
"","ServingRelationship","","","C1_2","VS1_1_1",""
"","ServingRelationship","","","C1_2","VS1_1_2",""
"","ServingRelationship","","","C1_1","VS1_2_1",""
"","ServingRelationship","","","C1_1","VS1_2_2",""
"","ServingRelationship","","","C1_3","VS1_3_1",""
"","ServingRelationship","","","C1_4","VS1_3_1",""
"","ServingRelationship","","","C1_4","VS1_3_2",""
"","ServingRelationship","","","C1_5","VS1_3_2",""
"","ServingRelationship","","","C1_4","VS1_3_3",""
"","ServingRelationship","","","C1_3","VS1_3_3",""
"","ServingRelationship","","","C0","VS0_1",""
"","ServingRelationship","","","C0","VS0_2",""
"","ServingRelationship","","","C0","VS0_3",""
```

```csv
properties.csv
"ID","Key","Value"
"C0","Level","0"
"C0","Code","C0"
"C1_1","Level","1"
"C1_1","Code","C1_1"
"C1_2","Level","1"
"C1_2","Code","C1_2"
"C1_3","Level","1"
"C1_3","Code","C1_3"
"C1_4","Level","1"
"C1_4","Code","C1_4"
"C1_5","Level","1"
"C1_5","Code","C1_5"
"C2_1","Level","2"
"C2_1","Code","C2_1"
"C2_2","Level","2"
"C2_2","Code","C2_2"
"C2_3","Level","2"
"C2_3","Code","C2_3"
"C2_4","Level","2"
"C2_4","Code","C2_4"
"C2_5","Level","2"
"C2_5","Code","C2_5"
"C2_6","Level","2"
"C2_6","Code","C2_6"
"C2_7","Level","2"
"C2_7","Code","C2_7"
"C2_8","Level","2"
"C2_8","Code","C2_8"
"C2_9","Level","2"
"C2_9","Code","C2_9"
"C2_10","Level","2"
"C2_10","Code","C2_10"
"C2_11","Level","2"
"C2_11","Code","C2_11"
"C2_12","Level","2"
"C2_12","Code","C2_12"
"C2_13","Level","2"
"C2_13","Code","C2_13"
"C2_14","Level","2"
"C2_14","Code","C2_14"
"C2_15","Level","2"
"C2_15","Code","C2_15"
"C2_16","Level","2"
"C2_16","Code","C2_16"
"C2_17","Level","2"
"C2_17","Code","C2_17"
"C2_18","Level","2"
"C2_18","Code","C2_18"
"C2_19","Level","2"
"C2_19","Code","C2_19"
"C2_20","Level","2"
"C2_20","Code","C2_20"
"C2_21","Level","2"
"C2_21","Code","C2_21"
"BO0","Level","0"
"BO0","Code","BO0"
"BO1_1","Level","1"
"BO1_1","Code","BO1_1"
"BO1_2","Level","1"
"BO1_2","Code","BO1_2"
"BO1_3","Level","1"
"BO1_3","Code","BO1_3"
"BO1_4","Level","1"
"BO1_4","Code","BO1_4"
"BO1_5","Level","1"
"BO1_5","Code","BO1_5"
"BO2_1","Level","2"
"BO2_1","Code","BO2_1"
"BO2_2","Level","2"
"BO2_2","Code","BO2_2"
"BO2_3","Level","2"
"BO2_3","Code","BO2_3"
"BO2_4","Level","2"
"BO2_4","Code","BO2_4"
"BO2_5","Level","2"
"BO2_5","Code","BO2_5"
"BO2_6","Level","2"
"BO2_6","Code","BO2_6"
"BO2_7","Level","2"
"BO2_7","Code","BO2_7"
"BO2_8","Level","2"
"BO2_8","Code","BO2_8"
"BO2_9","Level","2"
"BO2_9","Code","BO2_9"
"BO2_10","Level","2"
"BO2_10","Code","BO2_10"
"BO2_11","Level","2"
"BO2_11","Code","BO2_11"
"BO2_12","Level","2"
"BO2_12","Code","BO2_12"
"BO2_13","Level","2"
"BO2_13","Code","BO2_13"
"BO2_14","Level","2"
"BO2_14","Code","BO2_14"
"BO2_15","Level","2"
"BO2_15","Code","BO2_15"
"BO2_16","Level","2"
"BO2_16","Code","BO2_16"
"BO2_17","Level","2"
"BO2_17","Code","BO2_17"
"BO2_18","Level","2"
"BO2_18","Code","BO2_18"
"BO2_19","Level","2"
"BO2_19","Code","BO2_19"
"BO2_20","Level","2"
"BO2_20","Code","BO2_20"
"BO2_21","Level","2"
"BO2_21","Code","BO2_21"
"BO2_22","Level","2"
"BO2_22","Code","BO2_22"
"VS0_1","Level","0"
"VS0_1","Code","VS0_1"
"VS0_1","Value Proposition","Provides a core asset for all value propositions"
"VS0_1","Value Stream Pattern","MTS"
"VS0_2","Level","0"
"VS0_2","Code","VS0_2"
"VS0_2","Value Proposition","Provides a core asset for all value propositions"
"VS0_2","Value Stream Pattern","MTS"
"VS0_3","Level","0"
"VS0_3","Code","VS0_3"
"VS0_3","Value Proposition","Delivers the core value to Employers, Individuals & Families, and Government Agencies"
"VS0_3","Value Stream Pattern","ATO"
"VS1_1_1","Level","1"
"VS1_1_1","Code","VS1_1_1"
"VS1_1_2","Level","1"
"VS1_1_2","Code","VS1_1_2"
"VS1_2_1","Level","1"
"VS1_2_1","Code","VS1_2_1"
"VS1_2_2","Level","1"
"VS1_2_2","Code","VS1_2_2"
"VS1_3_1","Level","1"
"VS1_3_1","Code","VS1_3_1"
"VS1_3_2","Level","1"
"VS1_3_2","Code","VS1_3_2"
"VS1_3_3","Level","1"
"VS1_3_3","Code","VS1_3_3"
"VS2_1_1","Level","2"
"VS2_1_1","Code","VS2_1_1"
"VS2_1_1","Sequence","1"
"VS2_1_2","Level","2"
"VS2_1_2","Code","VS2_1_2"
"VS2_1_2","Sequence","2"
"VS2_1_3","Level","2"
"VS2_1_3","Code","VS2_1_3"
"VS2_1_3","Sequence","3"
"VS2_1_4","Level","2"
"VS2_1_4","Code","VS2_1_4"
"VS2_1_4","Sequence","4"
"VS2_1_5","Level","2"
"VS2_1_5","Code","VS2_1_5"
"VS2_1_5","Sequence","5"
"VS2_2_1","Level","2"
"VS2_2_1","Code","VS2_2_1"
"VS2_2_1","Sequence","1"
"VS2_2_2","Level","2"
"VS2_2_2","Code","VS2_2_2"
"VS2_2_2","Sequence","2"
"VS2_2_3","Level","2"
"VS2_2_3","Code","VS2_2_3"
"VS2_2_3","Sequence","3"
"VS2_2_4","Level","2"
"VS2_2_4","Code","VS2_2_4"
"VS2_2_4","Sequence","4"
"VS2_2_5","Level","2"
"VS2_2_5","Code","VS2_2_5"
"VS2_2_5","Sequence","5"
"VS2_3_1","Level","2"
"VS2_3_1","Code","VS2_3_1"
"VS2_3_1","Sequence","1"
"VS2_3_2","Level","2"
"VS2_3_2","Code","VS2_3_2"
"VS2_3_2","Sequence","2"
"VS2_3_3","Level","2"
"VS2_3_3","Code","VS2_3_3"
"VS2_3_3","Sequence","3"
"VS2_3_4","Level","2"
"VS2_3_4","Code","VS2_3_4"
"VS2_3_4","Sequence","4"
"VS2_3_5","Level","2"
"VS2_3_5","Code","VS2_3_5"
"VS2_3_5","Sequence","5"
"VS2_3_6","Level","2"
"VS2_3_6","Code","VS2_3_6"
"VS2_3_6","Sequence","6"
"VS2_3_7","Level","2"
"VS2_3_7","Code","VS2_3_7"
"VS2_3_7","Sequence","7"
"VS2_3_8","Level","2"
"VS2_3_8","Code","VS2_3_8"
"VS2_3_8","Sequence","8"
"VS2_3_9","Level","2"
"VS2_3_9","Code","VS2_3_9"
"VS2_3_9","Sequence","9"
"VS2_3_10","Level","2"
"VS2_3_10","Code","VS2_3_10"
"VS2_3_10","Sequence","10"
"VS2_3_11","Level","2"
"VS2_3_11","Code","VS2_3_11"
"VS2_3_11","Sequence","11"
"VS2_3_12","Level","2"
"VS2_3_12","Code","VS2_3_12"
"VS2_3_12","Sequence","12"
```