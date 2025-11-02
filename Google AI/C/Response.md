# Reference Architecture Design Brief

## Part 1: Context & Scope

### Sector Context Profile

*   **Core Purpose & Societal Role:** The Health Insurance sector's fundamental purpose is to pool risk and manage the financial burden of healthcare costs. It provides individuals, employers, and governments with financial protection against high, unpredictable medical expenses, thereby enabling access to necessary healthcare services. Societally, it serves as a primary mechanism for financing healthcare systems and can promote public health by incentivizing preventive care and wellness.
*   **Primary Business Model Archetype(s):** The sector operates on a hybrid model:
    *   **B2B:** Selling group health plans to employers, which is a dominant channel.
    *   **B2C:** Selling individual and family plans directly to consumers, often via public marketplaces.
    *   **B2G:** Acting as a contractor to administer public health programs, such as Medicare Advantage and Managed Medicaid plans.
*   **Key Strategic Drivers & Basis of Competition:**
    1.  **Network Management & Cost Control:** The ability to build a broad, high-quality network of healthcare providers and negotiate favorable reimbursement rates is critical to offering competitive premiums.
    2.  **Member Experience & Engagement:** Competition is increasingly based on customer satisfaction, digital tool accessibility (e.g., telehealth, member portals), and the effectiveness of programs that manage member health and wellness.
    3.  **Risk Management & Regulatory Compliance:** Accurately pricing risk to ensure financial solvency and navigating the complex, ever-changing landscape of healthcare regulations are fundamental to survival and success.
*   **Dominant Environmental Factors:** The sector is heavily influenced by:
    *   **Intense Regulation:** Strict government oversight at national and local levels dictates product design, pricing (e.g., Medical Loss Ratios), data privacy (e.g., HIPAA), and market conduct.
    *   **Technological Disruption:** The adoption of digital health technologies, data analytics for risk assessment, and AI for operational efficiency (e.g., claims processing) is reshaping the industry.
    *   **Political & Public Scrutiny:** As healthcare costs and access are major public concerns, the sector is under constant political pressure and public scrutiny, leading to frequent legislative and market reforms.

### Strategic Foundation

*   **`Customer Segment`**: `Employers / Group Plan Sponsors`
    *   **`Value Proposition`**: Provide a cost-effective and competitive employee benefits package to attract and retain talent, while managing the financial risk and administrative burden of employee healthcare.
*   **`Customer Segment`**: `Individual Members`
    *   **`Value Proposition`**: Provide financial security against high healthcare costs and affordable access to a network of quality healthcare providers, supported by tools to manage health and wellness.
*   **`Customer Segment`**: `Government Agencies`
    *   **`Value Proposition`**: Efficiently and effectively administer public health benefits to eligible populations, improving health outcomes and managing program costs within budgetary constraints.

### High-Level Value Streams

*   **`Develop Product & Network`**, `The core internal process of designing marketable health plans and establishing the underlying network of healthcare providers before any customer is acquired.`, `Provide a cost-effective and competitive employee benefits package to attract and retain talent, while managing the financial risk and administrative burden of employee healthcare.`, `MTS`
*   **`Acquire & Fulfill Coverage`**, `The customer-triggered flow of marketing, selling, underwriting, and enrolling a group or individual into a specific health plan.`, `Provide financial security against high healthcare costs and affordable access to a network of quality healthcare providers, supported by tools to manage health and wellness.`, `ATO`
*   **`Process & Pay Claim`**, `The operational flow triggered when a member receives healthcare, involving the adjudication and payment of the resulting claim according to their policy.`, `Provide financial security against high healthcare costs and affordable access to a network of quality healthcare providers, supported by tools to manage health and wellness.`, `ATO`

## Part 2: Modeling Procedure

### Step 1: Deconstruct Value Streams into Granular Elements and Objects

| L2 Value Stream Name            | Primary L2 Object Name      | Parent L0 Value Stream Name |
| :------------------------------ | :-------------------------- | :-------------------------- |
| `Analyze Market & Define Strategy` | `Product Strategy`          | `Develop Product & Network` |
| `Design Health Plan`              | `Plan Design`               | `Develop Product & Network` |
| `Price & File Plan`               | `Filed Rate`                | `Develop Product & Network` |
| `Establish Provider Network`      | `Provider Network`          | `Develop Product & Network` |
| `Contract with Provider`          | `Provider Agreement`        | `Develop Product & Network` |
| `Credential Provider`             | `Credentialed Provider`     | `Develop Product & Network` |
| `Configure Product for Sale`      | `Marketable Product`        | `Develop Product & Network` |
| `Launch Product`                  | `Launched Product`          | `Develop Product & Network` |
| `Market & Generate Lead`          | `Qualified Lead`            | `Acquire & Fulfill Coverage` |
| `Quote & Propose Solution`        | `Issued Quote`              | `Acquire & Fulfill Coverage` |
| `Underwrite Risk`                 | `Underwriting Decision`     | `Acquire & Fulfill Coverage` |
| `Establish Member Group`          | `Member Group Agreement`    | `Acquire & Fulfill Coverage` |
| `Enroll Member`                   | `Enrolled Member`           | `Acquire & Fulfill Coverage` |
| `Issue Policy & Credentials`      | `Active Policy`             | `Acquire & Fulfill Coverage` |
| `Collect Premium`                 | `Paid Premium`              | `Acquire & Fulfill Coverage` |
| `Maintain Member Record`          | `Updated Member Record`     | `Acquire & Fulfill Coverage` |
| `Handle Member Inquiry`           | `Resolved Inquiry`          | `Acquire & Fulfill Coverage` |
| `Renew Policy`                    | `Renewed Policy`            | `Acquire & Fulfill Coverage` |
| `Receive Claim`                   | `Submitted Claim`           | `Process & Pay Claim`       |
| `Validate Claim & Eligibility`    | `Validated Claim`           | `Process & Pay Claim`       |
| `Authorize Care`                  | `Care Authorization`        | `Process & Pay Claim`       |
| `Adjudicate Claim`                | `Adjudication Decision`     | `Process & Pay Claim`       |
| `Apply Benefit & Pricing`         | `Priced Claim`              | `Process & Pay Claim`       |
| `Process Provider Payment`        | `Provider Payment`          | `Process & Pay Claim`       |
| `Process Member Financials`       | `Member Financial Statement` | `Process & Pay Claim`       |
| `Manage Claim Appeal`             | `Appeal Resolution`         | `Process & Pay Claim`       |
| `Pursue Subrogation & Recovery`   | `Recovered Funds`           | `Process & Pay Claim`       |

---

### Step 2: Discover the Complete Set of Capabilities and their Objects

#### Capability-to-ValueStream Links

| L2 Capability Name                 | L2 Value Stream Name            |
| :--------------------------------- | :------------------------------ |
| `Product & Benefit Management`     | `Analyze Market & Define Strategy` |
| `Product & Benefit Management`     | `Design Health Plan`              |
| `Actuarial & Pricing Management`   | `Price & File Plan`               |
| `Provider Network Management`      | `Establish Provider Network`      |
| `Provider Network Management`      | `Contract with Provider`          |
| `Provider Network Management`      | `Credential Provider`             |
| `Product & Benefit Management`     | `Configure Product for Sale`      |
| `Marketing & Sales Management`     | `Launch Product`                  |
| `Marketing & Sales Management`     | `Market & Generate Lead`          |
| `Underwriting & Quoting Management` | `Quote & Propose Solution`        |
| `Underwriting & Quoting Management` | `Underwrite Risk`                 |
| `Enrollment & Policy Administration` | `Establish Member Group`          |
| `Enrollment & Policy Administration` | `Enroll Member`                   |
| `Enrollment & Policy Administration` | `Issue Policy & Credentials`      |
| `Billing & Premium Management`     | `Collect Premium`                 |
| `Enrollment & Policy Administration` | `Maintain Member Record`          |
| `Member & Provider Services`       | `Handle Member Inquiry`           |
| `Enrollment & Policy Administration` | `Renew Policy`                    |
| `Claim Processing Management`      | `Receive Claim`                   |
| `Claim Processing Management`      | `Validate Claim & Eligibility`    |
| `Care & Utilization Management`    | `Authorize Care`                  |
| `Claim Processing Management`      | `Adjudicate Claim`                |
| `Claim Processing Management`      | `Apply Benefit & Pricing`         |
| `Financial & Payment Management`   | `Process Provider Payment`        |
| `Financial & Payment Management`   | `Process Member Financials`       |
| `Grievance & Appeals Management`   | `Manage Claim Appeal`             |
| `Cost Containment & Recovery`      | `Pursue Subrogation & Recovery`   |

#### Capability-to-Capability Links

| Provider L2 Capability Name        | Consumer L2 Capability Name        |
| :--------------------------------- | :--------------------------------- |
| `Compliance & Regulatory Management` | `Product & Benefit Management`     |
| `Compliance & Regulatory Management` | `Actuarial & Pricing Management`   |
| `Actuarial & Pricing Management`   | `Underwriting & Quoting Management` |
| `Actuarial & Pricing Management`   | `Product & Benefit Management`     |
| `Provider Network Management`      | `Claim Processing Management`      |
| `Product & Benefit Management`     | `Claim Processing Management`      |
| `Product & Benefit Management`     | `Marketing & Sales Management`     |
| `Care & Utilization Management`    | `Claim Processing Management`      |
| `Enrollment & Policy Administration` | `Member & Provider Services`       |
| `Claim Processing Management`      | `Member & Provider Services`       |
| `Claim Processing Management`      | `Cost Containment & Recovery`      |
| `Claim Processing Management`      | `Financial & Payment Management`   |

---

### Step 3: Build the Canonical Capability Hierarchy (The ANCHOR)

*   **L0:** `Manage Health Insurance Operations`
    *   **L1:** `Develop & Manage Products`
        *   **L2:** `Product & Benefit Management`
        *   **L2:** `Actuarial & Pricing Management`
        *   **L2:** `Provider Network Management`
    *   **L1:** `Acquire & Retain Customers`
        *   **L2:** `Marketing & Sales Management`
        *   **L2:** `Underwriting & Quoting Management`
        *   **L2:** `Enrollment & Policy Administration`
        *   **L2:** `Billing & Premium Management`
    *   **L1:** `Administer Health Benefits`
        *   **L2:** `Claim Processing Management`
        *   **L2:** `Financial & Payment Management`
        *   **L2:** `Care & Utilization Management`
        *   **L2:** `Cost Containment & Recovery`
    *   **L1:** `Manage Member & Stakeholder Relations`
        *   **L2:** `Member & Provider Services`
        *   **L2:** `Grievance & Appeals Management`
        *   **L2:** `Compliance & Regulatory Management`

---

### Step 4: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

#### Object Hierarchy

*   **L0:** `Health Insurance Asset`
    *   **L1:** `Product Portfolio`
        *   **L2:** `Product Strategy`
        *   **L2:** `Plan Design`
        *   **L2:** `Filed Rate`
        *   **L2:** `Provider Network`
        *   **L2:** `Provider Agreement`
        *   **L2:** `Credentialed Provider`
        *   **L2:** `Marketable Product`
        *   **L2:** `Launched Product`
    *   **L1:** `Customer Account`
        *   **L2:** `Qualified Lead`
        *   **L2:** `Issued Quote`
        *   **L2:** `Underwriting Decision`
        *   **L2:** `Member Group Agreement`
        *   **L2:** `Enrolled Member`
        *   **L2:** `Active Policy`
        *   **L2:** `Paid Premium`
        *   **L2:** `Updated Member Record`
        *   **L2:** `Renewed Policy`
    *   **L1:** `Benefit Administration Record`
        *   **L2:** `Submitted Claim`
        *   **L2:** `Validated Claim`
        *   **L2:** `Care Authorization`
        *   **L2:** `Adjudication Decision`
        *   **L2:** `Priced Claim`
        *   **L2:** `Provider Payment`
        *   **L2:** `Member Financial Statement`
        *   **L2:** `Recovered Funds`
    *   **L1:** `Stakeholder Engagement`
        *   **L2:** `Resolved Inquiry`
        *   **L2:** `Appeal Resolution`

#### Value Stream Hierarchy

*   **L0:** `Develop Product & Network`
    *   **L1:** `Define Offering`
        *   **L2:** `Analyze Market & Define Strategy`
        *   **L2:** `Design Health Plan`
        *   **L2:** `Price & File Plan`
        *   **L2:** `Establish Provider Network`
        *   **L2:** `Contract with Provider`
        *   **L2:** `Credential Provider`
        *   **L2:** `Configure Product for Sale`
    *   **L1:** `Establish Relationship`
        *   **L2:** `Launch Product`
*   **L0:** `Acquire & Fulfill Coverage`
    *   **L1:** `Establish Relationship`
        *   **L2:** `Market & Generate Lead`
        *   **L2:** `Quote & Propose Solution`
        *   **L2:** `Underwrite Risk`
        *   **L2:** `Establish Member Group`
        *   **L2:** `Enroll Member`
        *   **L2:** `Issue Policy & Credentials`
        *   **L2:** `Collect Premium`
        *   **L2:** `Renew Policy`
    *   **L1:** `Provide Support & Governance`
        *   **L2:** `Maintain Member Record`
        *   **L2:** `Handle Member Inquiry`
*   **L0:** `Process & Pay Claim`
    *   **L1:** `Execute Core Transaction`
        *   **L2:** `Receive Claim`
        *   **L2:** `Validate Claim & Eligibility`
        *   **L2:** `Authorize Care`
        *   **L2:** `Adjudicate Claim`
        *   **L2:** `Apply Benefit & Pricing`
        *   **L2:** `Process Provider Payment`
        *   **L2:** `Process Member Financials`
        *   **L2:** `Pursue Subrogation & Recovery`
    *   **L1:** `Provide Support & Governance`
        *   **L2:** `Manage Claim Appeal`

---

### Step 5: Derive Relationships & Generate Final Output

#### Mandatory Verification Step A

*   **Selected L2 Relationship:** `Product & Benefit Management` (Source) serves `Claim Processing Management` (Target).
*   **L1 Parents:** The L1 parent of the source is `Develop & Manage Products`. The L1 parent of the target is `Administer Health Benefits`.
*   **Derived L1 Relationship:** `Develop & Manage Products` serves `Administer Health Benefits`.
*   **L0 Parents:** The L0 parent of both L1 capabilities is `Manage Health Insurance Operations`.
*   **Derived L0 Relationship:** A self-referencing `ServingRelationship` from `Manage Health Insurance Operations` to itself is derived but excluded from the final output per the exception rule.

#### Mandatory Verification Step B

*   **Selected L2 Relationship:** `Underwriting & Quoting Management` (Source) is associated with `Issued Quote` (Target).
*   **L1 Parents:** The L1 parent of the source is `Acquire & Retain Customers`. The L1 parent of the target is `Customer Account`.
*   **Derived L1 Relationship:** `Acquire & Retain Customers` is associated with `Customer Account`.
*   **L0 Parents:** The L0 parent of the source is `Manage Health Insurance Operations`. The L0 parent of the target is `Health Insurance Asset`.
*   **Derived L0 Relationship:** `Manage Health Insurance Operations` is associated with `Health Insurance Asset`.

#### Mandatory Verification Step C

*   **Selected L2 Relationship:** `Billing & Premium Management` (Source) serves `Collect Premium` (Target).
*   **L1 Parents:** The L1 parent of the source capability is `Acquire & Retain Customers`. The L1 parent of the target value stream stage is `Establish Relationship` (within the `Acquire & Fulfill Coverage` L0 stream).
*   **Derived L1 Relationship:** `Acquire & Retain Customers` serves `Establish Relationship`.

## Part 3: Output Specifications

```csv
"ID","Type","Name","Documentation"
"C0_MHO","Capability","Manage Health Insurance Operations","The integrated set of all core business capabilities required to operate a health insurance organization."
"C1_DMP","Capability","Develop & Manage Products","The strategic capability to design, price, file, and build the network for competitive and compliant health insurance products."
"C2_PBM","Capability","Product & Benefit Management","Manages the lifecycle of health insurance products, from market analysis and strategic planning to detailed benefit design and configuration."
"C2_APM","Capability","Actuarial & Pricing Management","Performs risk analysis, calculates premium rates, and ensures financial soundness of products, including regulatory filings."
"C2_PNM","Capability","Provider Network Management","Builds, maintains, and manages the network of healthcare providers, including contracting, credentialing, and relationship management."
"C1_ARC","Capability","Acquire & Retain Customers","The end-to-end capability to market, sell, underwrite, and administer policies for new and existing customers."
"C2_MSM","Capability","Marketing & Sales Management","Promotes products to the market, generates leads, and manages the sales process for group and individual customers."
"C2_UQM","Capability","Underwriting & Quoting Management","Assesses the risk of potential members or groups to determine eligibility and premium rates, and generates quotes."
"C2_EPA","Capability","Enrollment & Policy Administration","Manages the process of enrolling members, issuing policies, and maintaining member records throughout the policy lifecycle, including renewals."
"C2_BPM","Capability","Billing & Premium Management","Manages the invoicing of premiums to groups and individuals and the collection and reconciliation of payments."
"C1_AHB","Capability","Administer Health Benefits","The core operational capability to process and pay claims for healthcare services delivered to members."
"C2_CPM","Capability","Claim Processing Management","Manages the end-to-end process of receiving, validating, and adjudicating healthcare claims against member benefits and provider contracts."
"C2_FPM","Capability","Financial & Payment Management","Manages the disbursement of funds to providers for approved claims and the processing of member financial responsibilities like co-pays and deductibles."
"C2_CUM","Capability","Care & Utilization Management","Manages healthcare quality and costs through programs like pre-authorization, case management, and disease management."
"C2_CCR","Capability","Cost Containment & Recovery","Identifies and recovers funds through activities such as subrogation, coordination of benefits, and fraud, waste, and abuse detection."
"C1_MSR","Capability","Manage Member & Stakeholder Relations","The capability to provide service and support to members and providers, and to ensure governance and compliance."
"C2_MPS","Capability","Member & Provider Services","Provides front-line support for inquiries from members and providers regarding benefits, claims, eligibility, and other issues."
"C2_GAM","Capability","Grievance & Appeals Management","Manages the formal process for members and providers to dispute decisions related to coverage or claims."
"C2_CRM","Capability","Compliance & Regulatory Management","Ensures the organization adheres to all relevant healthcare laws, regulations, and industry standards."
"B0_HIA","BusinessObject","Health Insurance Asset","The complete set of core business objects that represent the valuable entities created and managed by the health insurance organization."
"B1_PP","BusinessObject","Product Portfolio","Represents the collection of designed, priced, and configured health insurance products and their associated provider networks."
"B2_PS","BusinessObject","Product Strategy","A documented plan outlining the target markets, competitive positioning, and goals for the product portfolio."
"B2_PD","BusinessObject","Plan Design","The detailed specification of benefits, cost-sharing (deductibles, co-pays), and rules for a specific health plan."
"B2_FR","BusinessObject","Filed Rate","The official, regulator-approved premium rate structure for a health plan."
"B2_PN","BusinessObject","Provider Network","The curated group of contracted hospitals, clinics, and physicians that provide care to members."
"B2_PA","BusinessObject","Provider Agreement","A formal contract between the insurer and a healthcare provider outlining services, reimbursement rates, and obligations."
"B2_CP","BusinessObject","Credentialed Provider","A healthcare provider whose qualifications and history have been verified and approved for inclusion in the network."
"B2_MP","BusinessObject","Marketable Product","A fully configured health plan, including rates and network, ready to be sold to customers."
"B2_LP","BusinessObject","Launched Product","A marketable product that has been officially released to the market for sale."
"B1_CA","BusinessObject","Customer Account","Represents the complete record of a customer relationship, including all policies, members, and financial transactions."
"B2_QL","BusinessObject","Qualified Lead","A potential individual or group customer that has been identified and vetted as a sales opportunity."
"B2_IQ","BusinessObject","Issued Quote","A formal offer provided to a potential customer detailing the proposed plan and its premium cost."
"B2_UD","BusinessObject","Underwriting Decision","The formal approval or denial of coverage for an applicant based on risk assessment."
"B2_MGA","BusinessObject","Member Group Agreement","The contract established with an employer or organization for providing health coverage to its members."
"B2_EM","BusinessObject","Enrolled Member","An individual who has been successfully registered for coverage under a specific health plan."
"B2_AP","BusinessObject","Active Policy","The official insurance contract that entitles a member to benefits."
"B2_PPrem","BusinessObject","Paid Premium","A confirmed payment of a premium, which keeps the policy in force."
"B2_UMR","BusinessObject","Updated Member Record","The current and accurate demographic and eligibility information for a member."
"B2_RP","BusinessObject","Renewed Policy","An active policy that has been extended for a new coverage period."
"B1_BAR","BusinessObject","Benefit Administration Record","Represents the transactional records related to the adjudication and payment of healthcare claims."
"B2_SC","BusinessObject","Submitted Claim","An initial request for payment from a healthcare provider for services rendered to a member."
"B2_VC","BusinessObject","Validated Claim","A submitted claim that has been checked for completeness, accuracy, and member eligibility."
"B2_CAU","BusinessObject","Care Authorization","A formal approval for a specific medical service or treatment, often required before the service is rendered."
"B2_AD","BusinessObject","Adjudication Decision","The outcome of the claim review process, determining whether the claim is approved, denied, or requires more information."
"B2_PC","BusinessObject","Priced Claim","An approved claim to which contractual rates and benefit rules have been applied to determine the final payment amount."
"B2_PPAY","BusinessObject","Provider Payment","The actual funds disbursed to a healthcare provider for a processed claim."
"B2_MFS","BusinessObject","Member Financial Statement","A document (e.g., Explanation of Benefits) sent to a member detailing how a claim was processed and their financial responsibility."
"B2_RF","BusinessObject","Recovered Funds","Money reclaimed by the insurer through subrogation, coordination of benefits, or other cost containment activities."
"B1_SE","BusinessObject","Stakeholder Engagement","Represents the records of interactions, inquiries, and disputes with members, providers, and regulators."
"B2_RI","BusinessObject","Resolved Inquiry","The final state of a member or provider question or issue that has been addressed by the service team."
"B2_AR","BusinessObject","Appeal Resolution","The final decision on a formal grievance or appeal regarding a claim or coverage determination."
"V0_DPN","ValueStream","Develop Product & Network","The core internal process of designing marketable health plans and establishing the underlying network of healthcare providers before any customer is acquired."
"V1_DPN_DO","ValueStream","Define Offering","The strategic phase of product development, encompassing market analysis, design, pricing, and network creation."
"V2_DPN_AMDS","ValueStream","Analyze Market & Define Strategy","Researching market needs, competitive landscape, and regulatory changes to create a product strategy."
"V2_DPN_DHP","ValueStream","Design Health Plan","Defining the specific benefits, coverage levels, and cost-sharing structures for a new or updated product."
"V2_DPN_PFP","ValueStream","Price & File Plan","Calculating the required premiums based on actuarial analysis and submitting the plan and rates to regulators for approval."
"V2_DPN_EPN","ValueStream","Establish Provider Network","Identifying, recruiting, and building a network of healthcare providers to serve members."
"V2_DPN_CWP","ValueStream","Contract with Provider","Negotiating and executing legal agreements with providers regarding services and reimbursement rates."
"V2_DPN_CP","ValueStream","Credential Provider","Verifying the qualifications, licenses, and practice history of providers to ensure they meet quality standards."
"V2_DPN_CFS","ValueStream","Configure Product for Sale","Setting up the approved and priced health plan in all operational systems for marketing, sales, and administration."
"V1_DPN_ER","ValueStream","Establish Relationship","The transitional phase where a developed product is prepared for and introduced to the market."
"V2_DPN_LP","ValueStream","Launch Product","Executing the marketing and communication plan to make a new product available for sale."
"V0_AFC","ValueStream","Acquire & Fulfill Coverage","The customer-triggered flow of marketing, selling, underwriting, and enrolling a group or individual into a specific health plan."
"V1_AFC_ER","ValueStream","Establish Relationship","The core acquisition and onboarding phase, from initial contact through policy activation and payment."
"V2_AFC_MGL","ValueStream","Market & Generate Lead","Advertising and outreach activities to attract potential customers and identify sales opportunities."
"V2_AFC_QPS","ValueStream","Quote & Propose Solution","Providing a potential customer with a detailed quote for a suitable health plan based on their needs."
"V2_AFC_UR","ValueStream","Underwrite Risk","Assessing the health risk of an applicant or group to determine eligibility and final premium rates."
"V2_AFC_EMG","ValueStream","Establish Member Group","Setting up the contractual and administrative framework for a new employer group client."
"V2_AFC_EM","ValueStream","Enroll Member","Collecting individual member information and officially registering them for coverage under a plan."
"V2_AFC_IPC","ValueStream","Issue Policy & Credentials","Generating and delivering the official policy documents and member identification cards."
"V2_AFC_CP","ValueStream","Collect Premium","Billing the customer for the first and subsequent premium payments to keep the policy active."
"V2_AFC_RP","ValueStream","Renew Policy","Managing the annual process of renewing coverage for an existing member or group."
"V1_AFC_PSG","ValueStream","Provide Support & Governance","The ongoing servicing phase of the customer lifecycle, focused on maintenance and support."
"V2_AFC_MMR","ValueStream","Maintain Member Record","Performing ongoing updates to member demographic, eligibility, and contact information."
"V2_AFC_HMI","ValueStream","Handle Member Inquiry","Responding to and resolving questions or issues from members regarding their coverage, claims, or benefits."
"V0_PPC","ValueStream","Process & Pay Claim","The operational flow triggered when a member receives healthcare, involving the adjudication and payment of the resulting claim according to their policy."
"V1_PPC_ECT","ValueStream","Execute Core Transaction","The primary processing path for a claim, from intake and validation through payment."
"V2_PPC_RC","ValueStream","Receive Claim","Accepting claim submissions from providers or members through various channels (electronic, paper)."
"V2_PPC_VCE","ValueStream","Validate Claim & Eligibility","Checking the submitted claim for completeness and verifying the member's eligibility on the date of service."
"V2_PPC_AC","ValueStream","Authorize Care","Verifying that required pre-authorizations for services are on file or conducting a medical necessity review."
"V2_PPC_ADJC","ValueStream","Adjudicate Claim","Applying plan benefit rules, medical policies, and provider contract terms to the claim to determine coverage."
"V2_PPC_ABP","ValueStream","Apply Benefit & Pricing","Calculating the final payment amount to the provider and the financial responsibility of the member."
"V2_PPC_PPP","ValueStream","Process Provider Payment","Issuing payment to the healthcare provider for the approved claim amount."
"V2_PPC_PMF","ValueStream","Process Member Financials","Generating and sending an Explanation of Benefits (EOB) to the member."
"V2_PPC_PSR","ValueStream","Pursue Subrogation & Recovery","Identifying and acting on opportunities to recover claim costs from other parties (e.g., other insurers)."
"V1_PPC_PSG","ValueStream","Provide Support & Governance","The exception handling and dispute resolution phase of the claims lifecycle."
"V2_PPC_MCA","ValueStream","Manage Claim Appeal","Administering the formal process for a member or provider to appeal a denied or partially paid claim."
```

```csv
"ID","Type","Name","Documentation","Source","Target","Specialization"
"","CompositionRelationship","","","C0_MHO","C1_DMP",""
"","CompositionRelationship","","","C0_MHO","C1_ARC",""
"","CompositionRelationship","","","C0_MHO","C1_AHB",""
"","CompositionRelationship","","","C0_MHO","C1_MSR",""
"","CompositionRelationship","","","C1_DMP","C2_PBM",""
"","CompositionRelationship","","","C1_DMP","C2_APM",""
"","CompositionRelationship","","","C1_DMP","C2_PNM",""
"","CompositionRelationship","","","C1_ARC","C2_MSM",""
"","CompositionRelationship","","","C1_ARC","C2_UQM",""
"","CompositionRelationship","","","C1_ARC","C2_EPA",""
"","CompositionRelationship","","","C1_ARC","C2_BPM",""
"","CompositionRelationship","","","C1_AHB","C2_CPM",""
"","CompositionRelationship","","","C1_AHB","C2_FPM",""
"","CompositionRelationship","","","C1_AHB","C2_CUM",""
"","CompositionRelationship","","","C1_AHB","C2_CCR",""
"","CompositionRelationship","","","C1_MSR","C2_MPS",""
"","CompositionRelationship","","","C1_MSR","C2_GAM",""
"","CompositionRelationship","","","C1_MSR","C2_CRM",""
"","CompositionRelationship","","","B0_HIA","B1_PP",""
"","CompositionRelationship","","","B0_HIA","B1_CA",""
"","CompositionRelationship","","","B0_HIA","B1_BAR",""
"","CompositionRelationship","","","B0_HIA","B1_SE",""
"","CompositionRelationship","","","B1_PP","B2_PS",""
"","CompositionRelationship","","","B1_PP","B2_PD",""
"","CompositionRelationship","","","B1_PP","B2_FR",""
"","CompositionRelationship","","","B1_PP","B2_PN",""
"","CompositionRelationship","","","B1_PP","B2_PA",""
"","CompositionRelationship","","","B1_PP","B2_CP",""
"","CompositionRelationship","","","B1_PP","B2_MP",""
"","CompositionRelationship","","","B1_PP","B2_LP",""
"","CompositionRelationship","","","B1_CA","B2_QL",""
"","CompositionRelationship","","","B1_CA","B2_IQ",""
"","CompositionRelationship","","","B1_CA","B2_UD",""
"","CompositionRelationship","","","B1_CA","B2_MGA",""
"","CompositionRelationship","","","B1_CA","B2_EM",""
"","CompositionRelationship","","","B1_CA","B2_AP",""
"","CompositionRelationship","","","B1_CA","B2_PPrem",""
"","CompositionRelationship","","","B1_CA","B2_UMR",""
"","CompositionRelationship","","","B1_CA","B2_RP",""
"","CompositionRelationship","","","B1_BAR","B2_SC",""
"","CompositionRelationship","","","B1_BAR","B2_VC",""
"","CompositionRelationship","","","B1_BAR","B2_CAU",""
"","CompositionRelationship","","","B1_BAR","B2_AD",""
"","CompositionRelationship","","","B1_BAR","B2_PC",""
"","CompositionRelationship","","","B1_BAR","B2_PPAY",""
"","CompositionRelationship","","","B1_BAR","B2_MFS",""
"","CompositionRelationship","","","B1_BAR","B2_RF",""
"","CompositionRelationship","","","B1_SE","B2_RI",""
"","CompositionRelationship","","","B1_SE","B2_AR",""
"","CompositionRelationship","","","V0_DPN","V1_DPN_DO",""
"","CompositionRelationship","","","V0_DPN","V1_DPN_ER",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_AMDS",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_DHP",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_PFP",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_EPN",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_CWP",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_CP",""
"","CompositionRelationship","","","V1_DPN_DO","V2_DPN_CFS",""
"","CompositionRelationship","","","V1_DPN_ER","V2_DPN_LP",""
"","CompositionRelationship","","","V0_AFC","V1_AFC_ER",""
"","CompositionRelationship","","","V0_AFC","V1_AFC_PSG",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_MGL",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_QPS",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_UR",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_EMG",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_EM",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_IPC",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_CP",""
"","CompositionRelationship","","","V1_AFC_ER","V2_AFC_RP",""
"","CompositionRelationship","","","V1_AFC_PSG","V2_AFC_MMR",""
"","CompositionRelationship","","","V1_AFC_PSG","V2_AFC_HMI",""
"","CompositionRelationship","","","V0_PPC","V1_PPC_ECT",""
"","CompositionRelationship","","","V0_PPC","V1_PPC_PSG",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_RC",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_VCE",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_AC",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_ADJC",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_ABP",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_PPP",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_PMF",""
"","CompositionRelationship","","","V1_PPC_ECT","V2_PPC_PSR",""
"","CompositionRelationship","","","V1_PPC_PSG","V2_PPC_MCA",""
"","AssociationRelationship","","","C2_PBM","B2_PS",""
"","AssociationRelationship","","","C2_PBM","B2_PD",""
"","AssociationRelationship","","","C2_PBM","B2_MP",""
"","AssociationRelationship","","","C2_PBM","B2_LP",""
"","AssociationRelationship","","","C2_APM","B2_FR",""
"","AssociationRelationship","","","C2_PNM","B2_PN",""
"","AssociationRelationship","","","C2_PNM","B2_PA",""
"","AssociationRelationship","","","C2_PNM","B2_CP",""
"","AssociationRelationship","","","C2_MSM","B2_QL",""
"","AssociationRelationship","","","C2_UQM","B2_IQ",""
"","AssociationRelationship","","","C2_UQM","B2_UD",""
"","AssociationRelationship","","","C2_EPA","B2_MGA",""
"","AssociationRelationship","","","C2_EPA","B2_EM",""
"","AssociationRelationship","","","C2_EPA","B2_AP",""
"","AssociationRelationship","","","C2_EPA","B2_UMR",""
"","AssociationRelationship","","","C2_EPA","B2_RP",""
"","AssociationRelationship","","","C2_BPM","B2_PPrem",""
"","AssociationRelationship","","","C2_CPM","B2_SC",""
"","AssociationRelationship","","","C2_CPM","B2_VC",""
"","AssociationRelationship","","","C2_CPM","B2_AD",""
"","AssociationRelationship","","","C2_CPM","B2_PC",""
"","AssociationRelationship","","","C2_FPM","B2_PPAY",""
"","AssociationRelationship","","","C2_FPM","B2_MFS",""
"","AssociationRelationship","","","C2_CUM","B2_CAU",""
"","AssociationRelationship","","","C2_CCR","B2_RF",""
"","AssociationRelationship","","","C2_MPS","B2_RI",""
"","AssociationRelationship","","","C2_GAM","B2_AR",""
"","ServingRelationship","","","C2_CRM","C2_PBM",""
"","ServingRelationship","","","C2_CRM","C2_APM",""
"","ServingRelationship","","","C2_APM","C2_UQM",""
"","ServingRelationship","","","C2_APM","C2_PBM",""
"","ServingRelationship","","","C2_PNM","C2_CPM",""
"","ServingRelationship","","","C2_PBM","C2_CPM",""
"","ServingRelationship","","","C2_PBM","C2_MSM",""
"","ServingRelationship","","","C2_CUM","C2_CPM",""
"","ServingRelationship","","","C2_EPA","C2_MPS",""
"","ServingRelationship","","","C2_CPM","C2_MPS",""
"","ServingRelationship","","","C2_CPM","C2_CCR",""
"","ServingRelationship","","","C2_CPM","C2_FPM",""
"","ServingRelationship","","","C2_PBM","V2_DPN_AMDS",""
"","ServingRelationship","","","C2_PBM","V2_DPN_DHP",""
"","ServingRelationship","","","C2_APM","V2_DPN_PFP",""
"","ServingRelationship","","","C2_PNM","V2_DPN_EPN",""
"","ServingRelationship","","","C2_PNM","V2_DPN_CWP",""
"","ServingRelationship","","","C2_PNM","V2_DPN_CP",""
"","ServingRelationship","","","C2_PBM","V2_DPN_CFS",""
"","ServingRelationship","","","C2_MSM","V2_DPN_LP",""
"","ServingRelationship","","","C2_MSM","V2_AFC_MGL",""
"","ServingRelationship","","","C2_UQM","V2_AFC_QPS",""
"","ServingRelationship","","","C2_UQM","V2_AFC_UR",""
"","ServingRelationship","","","C2_EPA","V2_AFC_EMG",""
"","ServingRelationship","","","C2_EPA","V2_AFC_EM",""
"","ServingRelationship","","","C2_EPA","V2_AFC_IPC",""
"","ServingRelationship","","","C2_BPM","V2_AFC_CP",""
"","ServingRelationship","","","C2_EPA","V2_AFC_MMR",""
"","ServingRelationship","","","C2_MPS","V2_AFC_HMI",""
"","ServingRelationship","","","C2_EPA","V2_AFC_RP",""
"","ServingRelationship","","","C2_CPM","V2_PPC_RC",""
"","ServingRelationship","","","C2_CPM","V2_PPC_VCE",""
"","ServingRelationship","","","C2_CUM","V2_PPC_AC",""
"","ServingRelationship","","","C2_CPM","V2_PPC_ADJC",""
"","ServingRelationship","","","C2_CPM","V2_PPC_ABP",""
"","ServingRelationship","","","C2_FPM","V2_PPC_PPP",""
"","ServingRelationship","","","C2_FPM","V2_PPC_PMF",""
"","ServingRelationship","","","C2_GAM","V2_PPC_MCA",""
"","ServingRelationship","","","C2_CCR","V2_PPC_PSR",""
"","AssociationRelationship","","","C0_MHO","B0_HIA",""
"","AssociationRelationship","","","C1_DMP","B1_PP",""
"","AssociationRelationship","","","C1_ARC","B1_CA",""
"","AssociationRelationship","","","C1_AHB","B1_BAR",""
"","AssociationRelationship","","","C1_MSR","B1_SE",""
"","ServingRelationship","","","C1_MSR","C1_DMP",""
"","ServingRelationship","","","C1_MSR","C1_ARC",""
"","ServingRelationship","","","C1_DMP","C1_ARC",""
"","ServingRelationship","","","C1_DMP","C1_AHB",""
"","ServingRelationship","","","C1_ARC","C1_MSR",""
"","ServingRelationship","","","C1_AHB","C1_MSR",""
"","ServingRelationship","","","C1_AHB","C1_AHB",""
"","ServingRelationship","","","C1_DMP","V1_DPN_DO",""
"","ServingRelationship","","","C1_ARC","V1_DPN_ER",""
"","ServingRelationship","","","C1_ARC","V1_AFC_ER",""
"","ServingRelationship","","","C1_MSR","V1_AFC_PSG",""
"","ServingRelationship","","","C1_AHB","V1_PPC_ECT",""
"","ServingRelationship","","","C1_MSR","V1_PPC_PSG",""
```

```csv
"ID","Key","Value"
"C0_MHO","Level","0"
"C0_MHO","Code","C0_MHO"
"C1_DMP","Level","1"
"C1_DMP","Code","C1_DMP"
"C2_PBM","Level","2"
"C2_PBM","Code","C2_PBM"
"C2_APM","Level","2"
"C2_APM","Code","C2_APM"
"C2_PNM","Level","2"
"C2_PNM","Code","C2_PNM"
"C1_ARC","Level","1"
"C1_ARC","Code","C1_ARC"
"C2_MSM","Level","2"
"C2_MSM","Code","C2_MSM"
"C2_UQM","Level","2"
"C2_UQM","Code","C2_UQM"
"C2_EPA","Level","2"
"C2_EPA","Code","C2_EPA"
"C2_BPM","Level","2"
"C2_BPM","Code","C2_BPM"
"C1_AHB","Level","1"
"C1_AHB","Code","C1_AHB"
"C2_CPM","Level","2"
"C2_CPM","Code","C2_CPM"
"C2_FPM","Level","2"
"C2_FPM","Code","C2_FPM"
"C2_CUM","Level","2"
"C2_CUM","Code","C2_CUM"
"C2_CCR","Level","2"
"C2_CCR","Code","C2_CCR"
"C1_MSR","Level","1"
"C1_MSR","Code","C1_MSR"
"C2_MPS","Level","2"
"C2_MPS","Code","C2_MPS"
"C2_GAM","Level","2"
"C2_GAM","Code","C2_GAM"
"C2_CRM","Level","2"
"C2_CRM","Code","C2_CRM"
"B0_HIA","Level","0"
"B0_HIA","Code","B0_HIA"
"B1_PP","Level","1"
"B1_PP","Code","B1_PP"
"B2_PS","Level","2"
"B2_PS","Code","B2_PS"
"B2_PD","Level","2"
"B2_PD","Code","B2_PD"
"B2_FR","Level","2"
"B2_FR","Code","B2_FR"
"B2_PN","Level","2"
"B2_PN","Code","B2_PN"
"B2_PA","Level","2"
"B2_PA","Code","B2_PA"
"B2_CP","Level","2"
"B2_CP","Code","B2_CP"
"B2_MP","Level","2"
"B2_MP","Code","B2_MP"
"B2_LP","Level","2"
"B2_LP","Code","B2_LP"
"B1_CA","Level","1"
"B1_CA","Code","B1_CA"
"B2_QL","Level","2"
"B2_QL","Code","B2_QL"
"B2_IQ","Level","2"
"B2_IQ","Code","B2_IQ"
"B2_UD","Level","2"
"B2_UD","Code","B2_UD"
"B2_MGA","Level","2"
"B2_MGA","Code","B2_MGA"
"B2_EM","Level","2"
"B2_EM","Code","B2_EM"
"B2_AP","Level","2"
"B2_AP","Code","B2_AP"
"B2_PPrem","Level","2"
"B2_PPrem","Code","B2_PPrem"
"B2_UMR","Level","2"
"B2_UMR","Code","B2_UMR"
"B2_RP","Level","2"
"B2_RP","Code","B2_RP"
"B1_BAR","Level","1"
"B1_BAR","Code","B1_BAR"
"B2_SC","Level","2"
"B2_SC","Code","B2_SC"
"B2_VC","Level","2"
"B2_VC","Code","B2_VC"
"B2_CAU","Level","2"
"B2_CAU","Code","B2_CAU"
"B2_AD","Level","2"
"B2_AD","Code","B2_AD"
"B2_PC","Level","2"
"B2_PC","Code","B2_PC"
"B2_PPAY","Level","2"
"B2_PPAY","Code","B2_PPAY"
"B2_MFS","Level","2"
"B2_MFS","Code","B2_MFS"
"B2_RF","Level","2"
"B2_RF","Code","B2_RF"
"B1_SE","Level","1"
"B1_SE","Code","B1_SE"
"B2_RI","Level","2"
"B2_RI","Code","B2_RI"
"B2_AR","Level","2"
"B2_AR","Code","B2_AR"
"V0_DPN","Level","0"
"V0_DPN","Code","V0_DPN"
"V0_DPN","Value Proposition","Provide a cost-effective and competitive employee benefits package to attract and retain talent, while managing the financial risk and administrative burden of employee healthcare."
"V0_DPN","Value Stream Pattern","MTS"
"V1_DPN_DO","Level","1"
"V1_DPN_DO","Code","V1_DPN_DO"
"V2_DPN_AMDS","Level","2"
"V2_DPN_AMDS","Code","V2_DPN_AMDS"
"V2_DPN_AMDS","Sequence","1"
"V2_DPN_DHP","Level","2"
"V2_DPN_DHP","Code","V2_DPN_DHP"
"V2_DPN_DHP","Sequence","2"
"V2_DPN_PFP","Level","2"
"V2_DPN_PFP","Code","V2_DPN_PFP"
"V2_DPN_PFP","Sequence","3"
"V2_DPN_EPN","Level","2"
"V2_DPN_EPN","Code","V2_DPN_EPN"
"V2_DPN_EPN","Sequence","4"
"V2_DPN_CWP","Level","2"
"V2_DPN_CWP","Code","V2_DPN_CWP"
"V2_DPN_CWP","Sequence","5"
"V2_DPN_CP","Level","2"
"V2_DPN_CP","Code","V2_DPN_CP"
"V2_DPN_CP","Sequence","6"
"V2_DPN_CFS","Level","2"
"V2_DPN_CFS","Code","V2_DPN_CFS"
"V2_DPN_CFS","Sequence","7"
"V1_DPN_ER","Level","1"
"V1_DPN_ER","Code","V1_DPN_ER"
"V2_DPN_LP","Level","2"
"V2_DPN_LP","Code","V2_DPN_LP"
"V2_DPN_LP","Sequence","8"
"V0_AFC","Level","0"
"V0_AFC","Code","V0_AFC"
"V0_AFC","Value Proposition","Provide financial security against high healthcare costs and affordable access to a network of quality healthcare providers, supported by tools to manage health and wellness."
"V0_AFC","Value Stream Pattern","ATO"
"V1_AFC_ER","Level","1"
"V1_AFC_ER","Code","V1_AFC_ER"
"V2_AFC_MGL","Level","2"
"V2_AFC_MGL","Code","V2_AFC_MGL"
"V2_AFC_MGL","Sequence","1"
"V2_AFC_QPS","Level","2"
"V2_AFC_QPS","Code","V2_AFC_QPS"
"V2_AFC_QPS","Sequence","2"
"V2_AFC_UR","Level","2"
"V2_AFC_UR","Code","V2_AFC_UR"
"V2_AFC_UR","Sequence","3"
"V2_AFC_EMG","Level","2"
"V2_AFC_EMG","Code","V2_AFC_EMG"
"V2_AFC_EMG","Sequence","4"
"V2_AFC_EM","Level","2"
"V2_AFC_EM","Code","V2_AFC_EM"
"V2_AFC_EM","Sequence","5"
"V2_AFC_IPC","Level","2"
"V2_AFC_IPC","Code","V2_AFC_IPC"
"V2_AFC_IPC","Sequence","6"
"V2_AFC_CP","Level","2"
"V2_AFC_CP","Code","V2_AFC_CP"
"V2_AFC_CP","Sequence","7"
"V2_AFC_RP","Level","2"
"V2_AFC_RP","Code","V2_AFC_RP"
"V2_AFC_RP","Sequence","10"
"V1_AFC_PSG","Level","1"
"V1_AFC_PSG","Code","V1_AFC_PSG"
"V2_AFC_MMR","Level","2"
"V2_AFC_MMR","Code","V2_AFC_MMR"
"V2_AFC_MMR","Sequence","8"
"V2_AFC_HMI","Level","2"
"V2_AFC_HMI","Code","V2_AFC_HMI"
"V2_AFC_HMI","Sequence","9"
"V0_PPC","Level","0"
"V0_PPC","Code","V0_PPC"
"V0_PPC","Value Proposition","Provide financial security against high healthcare costs and affordable access to a network of quality healthcare providers, supported by tools to manage health and wellness."
"V0_PPC","Value Stream Pattern","ATO"
"V1_PPC_ECT","Level","1"
"V1_PPC_ECT","Code","V1_PPC_ECT"
"V2_PPC_RC","Level","2"
"V2_PPC_RC","Code","V2_PPC_RC"
"V2_PPC_RC","Sequence","1"
"V2_PPC_VCE","Level","2"
"V2_PPC_VCE","Code","V2_PPC_VCE"
"V2_PPC_VCE","Sequence","2"
"V2_PPC_AC","Level","2"
"V2_PPC_AC","Code","V2_PPC_AC"
"V2_PPC_AC","Sequence","3"
"V2_PPC_ADJC","Level","2"
"V2_PPC_ADJC","Code","V2_PPC_ADJC"
"V2_PPC_ADJC","Sequence","4"
"V2_PPC_ABP","Level","2"
"V2_PPC_ABP","Code","V2_PPC_ABP"
"V2_PPC_ABP","Sequence","5"
"V2_PPC_PPP","Level","2"
"V2_PPC_PPP","Code","V2_PPC_PPP"
"V2_PPC_PPP","Sequence","6"
"V2_PPC_PMF","Level","2"
"V2_PPC_PMF","Code","V2_PPC_PMF"
"V2_PPC_PMF","Sequence","7"
"V2_PPC_PSR","Level","2"
"V2_PPC_PSR","Code","V2_PPC_PSR"
"V2_PPC_PSR","Sequence","9"
"V1_PPC_PSG","Level","1"
"V1_PPC_PSG","Code","V1_PPC_PSG"
"V2_PPC_MCA","Level","2"
"V2_PPC_MCA","Code","V2_PPC_MCA"
"V2_PPC_MCA","Sequence","8"
```