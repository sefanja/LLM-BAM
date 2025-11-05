# Raw LLM Response for Condition_C

An architecture design for the Research-Intensive Universities sector, adhering to the specified principles and format.

### Part 1: Context & Scope

#### Sector Context Profile

*   **Sector to be Analyzed:** Research-Intensive Universities
*   **Core Purpose & Societal Role:** The fundamental purpose is the creation, curation, and dissemination of advanced knowledge. This sector fulfills the societal need for higher education, fundamental and applied research that drives innovation, and the development of a highly skilled professional workforce and informed citizenry.
*   **Primary Business Model Archetype(s):** This sector operates on a complex hybrid model:
    *   **B2C:** Delivering educational services directly to students.
    *   **B2G:** Conducting research and providing policy advice for government funding bodies.
    *   **B2B:** Partnering with industry for contract research, technology licensing, and corporate training.
    *   **Non-Profit/Public Funding:** Operating as mission-driven organizations, heavily reliant on government subsidies, philanthropy, and endowments to fulfill their public-good mandate.
*   **Key Strategic Drivers & Basis of Competition:**
    1.  **Prestige & Reputation:** Measured through global rankings, faculty awards, and brand recognition, which attracts top-tier students, faculty, and funding.
    2.  **Research Impact:** The quality, volume, and influence of research output, measured by citations, successful grants, and the creation of valuable intellectual property.
    3.  **Student Outcomes:** Success in attracting high-potential students and their subsequent career success and employability.
*   **Dominant Environmental Factors:** The sector is heavily influenced by government funding cycles and higher education policy, stringent accreditation and research compliance regulations, global competition for talent, and the disruptive potential of new technologies in both education (EdTech) and research (AI, Big Data).

#### Strategic Foundation

*   **`Customer Segment`**: Students (Undergraduate, Postgraduate, Doctoral)
    *   **`Value Proposition(s)`**: Provision of advanced education, leading to a recognized academic credential that enhances career prospects, personal growth, and access to a professional network.
*   **`Customer Segment`**: Research Funding Bodies (Government Agencies, Foundations, Corporations)
    *   **`Value Proposition(s)`**: Rigorous execution of research projects to generate novel knowledge, solve complex problems, and deliver a measurable return on investment, whether societal, technological, or commercial.
*   **`Customer Segment`**: Society & Industry
    *   **`Value Proposition(s)`**: A supply of highly skilled graduates, access to cutting-edge innovation and expert knowledge, and the commercialization of new technologies that drive economic growth and social progress.

#### High-Level Value Streams

*   `Develop Educational Offerings`, A value stream for the design, approval, and cataloging of academic programs and courses before any students are enrolled., Provision of advanced education, leading to a recognized academic credential that enhances career prospects, personal growth, and access to a professional network., `MTS`
*   `Build Research Capabilities`, A value stream for establishing the foundational faculty, facilities, and expertise in strategic research areas, independent of any specific grant or project., Rigorous execution of research projects to generate novel knowledge, solve complex problems, and deliver a measurable return on investment, whether societal, technological, or commercial., `MTS`
*   `Educate to Graduate`, A value stream triggered by a student's application to an existing program, covering the entire lifecycle from admission to graduation., Provision of advanced education, leading to a recognized academic credential that enhances career prospects, personal growth, and access to a professional network., `ATO`
*   `Research to Impact`, A value stream triggered by a specific funding opportunity or research question, covering the entire project lifecycle from proposal to dissemination of findings., Rigorous execution of research projects to generate novel knowledge, solve complex problems, and deliver a measurable return on investment, whether societal, technological, or commercial., `ETO`
*   `Innovate to Commercialize`, A value stream triggered by the disclosure of a new invention, covering the process of protecting and licensing the intellectual property to an external partner., A supply of highly skilled graduates, access to cutting-edge innovation and expert knowledge, and the commercialization of new technologies that drive economic growth and social progress., `ETO`

### Part 2: Modeling Procedure

#### Step 1: Deconstruct Value Streams into Granular Elements and Objects

*   `[Design Program, Academic Program Proposal, Develop Educational Offerings]`
*   `[Approve Curriculum, Approved Program, Develop Educational Offerings]`
*   `[Develop Course Materials, Course Content, Develop Educational Offerings]`
*   `[Establish Assessment Methods, Assessment Framework, Develop Educational Offerings]`
*   `[List Program in Catalogue, Program Catalogue Entry, Develop Educational Offerings]`
*   `[Identify Strategic Research Area, Strategic Research Mandate, Build Research Capabilities]`
*   `[Recruit Principal Investigators, Faculty Appointment, Build Research Capabilities]`
*   `[Establish Labs & Facilities, Research Infrastructure, Build Research Capabilities]`
*   `[Develop Core Methodologies, Research Protocol, Build Research Capabilities]`
*   `[Secure Foundational Funding, Core Research Grant, Build Research Capabilities]`
*   `[Recruit & Admit Student, Student Application, Educate to Graduate]`
*   `[Onboard & Register Student, Student Enrollment, Educate to Graduate]`
*   `[Deliver Instruction, Learning Experience, Educate to Graduate]`
*   `[Assess Student Performance, Academic Transcript, Educate to Graduate]`
*   `[Provide Student Support, Student Support Case, Educate to Graduate]`
*   `[Collect Tuition Fees, Tuition Payment, Educate to Graduate]`
*   `[Confer Degree, Academic Credential, Educate to Graduate]`
*   `[Maintain Alumni Relations, Alumni Record, Educate to Graduate]`
*   `[Identify Funding Opportunity, Grant Opportunity, Research to Impact]`
*   `[Develop Research Proposal, Research Proposal, Research to Impact]`
*   `[Secure Grant Agreement, Research Grant, Research to Impact]`
*   `[Conduct Research & Experiments, Raw Research Data, Research to Impact]`
*   `[Analyze & Interpret Data, Verified Research Finding, Research to Impact]`
*   `[Manage Grant Finances, Grant Financial Statement, Research to Impact]`
*   `[Disseminate Findings, Published Research, Research to Impact]`
*   `[Report to Funder, Grant Report, Research to Impact]`
*   `[Disclose Invention, Invention Disclosure, Innovate to Commercialize]`
*   `[Assess Commercial Potential, Commercial Viability Assessment, Innovate to Commercialize]`
*   `[Secure Intellectual Property, Patent or Copyright, Innovate to Commercialize]`
*   `[Market Technology to Partners, Licensing Prospect, Innovate to Commercialize]`
*   `[Negotiate Licensing Agreement, Commercialization Agreement, Innovate to Commercialize]`
*   `[Manage Royalties & Compliance, Royalty Payment, Innovate to Commercialize]`

#### Step 2: Discover the Complete Set of Capabilities and their Objects

*   **Canonical L2 Capabilities & Object Custodianship:**
    *   `Curriculum Design & Management` owns `Academic Program Proposal`, `Approved Program`, `Course Content`, `Assessment Framework`
    *   `Academic Program Portfolio Management` owns `Program Catalogue Entry`
    *   `Strategic Research Planning` owns `Strategic Research Mandate`
    *   `Faculty & Staff Management` owns `Faculty Appointment`
    *   `Research Infrastructure Management` owns `Research Infrastructure`
    *   `Research Methodology Development` owns `Research Protocol`
    *   `Student Recruitment & Admissions Management` owns `Student Application`
    *   `Student Administration & Records Management` owns `Student Enrollment`, `Academic Transcript`, `Academic Credential`
    *   `Teaching & Learning Delivery` owns `Learning Experience`
    *   `Student Welfare & Support Management` owns `Student Support Case`
    *   `Alumni Relations Management` owns `Alumni Record`
    *   `Grant & Proposal Development` owns `Grant Opportunity`, `Research Proposal`
    *   `Research Execution Management` owns `Raw Research Data`, `Verified Research Finding`
    *   `Research Dissemination Management` owns `Published Research`
    *   `Invention Assessment & Triage` owns `Invention Disclosure`, `Commercial Viability Assessment`
    *   `Intellectual Property Management` owns `Patent or Copyright`
    *   `Technology Marketing & Licensing Management` owns `Licensing Prospect`, `Commercialization Agreement`
    *   `Financial Management` owns `Tuition Payment`, `Grant Financial Statement`, `Royalty Payment`, `Core Research Grant`
    *   `Legal & Contract Management` owns `Research Grant`, `Grant Report`
    *   `Research Ethics & Compliance Management` (owns no core objects, but is a critical dependency)
    *   `Partner Relationship Management` (owns no core objects, but is a critical dependency)

*   **Capability-to-ValueStream Links:**
    *   `[Curriculum Design & Management, Design Program]`
    *   `[Curriculum Design & Management, Approve Curriculum]`
    *   `[Curriculum Design & Management, Develop Course Materials]`
    *   `[Curriculum Design & Management, Establish Assessment Methods]`
    *   `[Academic Program Portfolio Management, List Program in Catalogue]`
    *   `[Strategic Research Planning, Identify Strategic Research Area]`
    *   `[Faculty & Staff Management, Recruit Principal Investigators]`
    *   `[Research Infrastructure Management, Establish Labs & Facilities]`
    *   `[Research Methodology Development, Develop Core Methodologies]`
    *   `[Financial Management, Secure Foundational Funding]`
    *   `[Student Recruitment & Admissions Management, Recruit & Admit Student]`
    *   `[Student Administration & Records Management, Onboard & Register Student]`
    *   `[Teaching & Learning Delivery, Deliver Instruction]`
    *   `[Student Administration & Records Management, Assess Student Performance]`
    *   `[Student Welfare & Support Management, Provide Student Support]`
    *   `[Financial Management, Collect Tuition Fees]`
    *   `[Student Administration & Records Management, Confer Degree]`
    *   `[Alumni Relations Management, Maintain Alumni Relations]`
    *   `[Grant & Proposal Development, Identify Funding Opportunity]`
    *   `[Grant & Proposal Development, Develop Research Proposal]`
    *   `[Legal & Contract Management, Secure Grant Agreement]`
    *   `[Research Execution Management, Conduct Research & Experiments]`
    *   `[Research Execution Management, Analyze & Interpret Data]`
    *   `[Financial Management, Manage Grant Finances]`
    *   `[Research Dissemination Management, Disseminate Findings]`
    *   `[Legal & Contract Management, Report to Funder]`
    *   `[Invention Assessment & Triage, Disclose Invention]`
    *   `[Invention Assessment & Triage, Assess Commercial Potential]`
    *   `[Intellectual Property Management, Secure Intellectual Property]`
    *   `[Technology Marketing & Licensing Management, Market Technology to Partners]`
    *   `[Legal & Contract Management, Negotiate Licensing Agreement]`
    *   `[Financial Management, Manage Royalties & Compliance]`

*   **Capability-to-Capability Links:**
    *   `[Strategic Research Planning, Grant & Proposal Development]`
    *   `[Research Ethics & Compliance Management, Research Execution Management]`
    *   `[Research Ethics & Compliance Management, Grant & Proposal Development]`
    *   `[Legal & Contract Management, Grant & Proposal Development]`
    *   `[Legal & Contract Management, Intellectual Property Management]`
    *   `[Legal & Contract Management, Technology Marketing & Licensing Management]`
    *   `[Financial Management, Grant & Proposal Development]`
    *   `[Financial Management, Research Execution Management]`
    *   `[Partner Relationship Management, Technology Marketing & Licensing Management]`
    *   `[Partner Relationship Management, Grant & Proposal Development]`
    *   `[Academic Program Portfolio Management, Curriculum Design & Management]`
    *   `[Faculty & Staff Management, Teaching & Learning Delivery]`
    *   `[Faculty & Staff Management, Research Execution Management]`

#### Step 3: Build the Canonical Capability Hierarchy (The ANCHOR)

*   **L0 Capability:** `Create & Disseminate Knowledge`
    *   **L1 Capability:** `Develop & Manage Academic Portfolio`
        *   **L2 Capabilities:** `Curriculum Design & Management`, `Academic Program Portfolio Management`
    *   **L1 Capability:** `Manage Student Lifecycle`
        *   **L2 Capabilities:** `Student Recruitment & Admissions Management`, `Student Administration & Records Management`, `Teaching & Learning Delivery`, `Student Welfare & Support Management`
    *   **L1 Capability:** `Execute Research & Innovation Lifecycle`
        *   **L2 Capabilities:** `Grant & Proposal Development`, `Research Execution Management`, `Research Dissemination Management`, `Invention Assessment & Triage`, `Intellectual Property Management`
    *   **L1 Capability:** `Foster External Engagement & Impact`
        *   **L2 Capabilities:** `Alumni Relations Management`, `Technology Marketing & Licensing Management`, `Partner Relationship Management`
    *   **L1 Capability:** `Govern University Enterprise`
        *   **L2 Capabilities:** `Strategic Research Planning`, `Faculty & Staff Management`, `Research Infrastructure Management`, `Research Methodology Development`, `Financial Management`, `Legal & Contract Management`, `Research Ethics & Compliance Management`

#### Step 4: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

*   **Object Hierarchy:**
    *   **L0 BusinessObject:** `University Asset`
        *   **L1 BusinessObject:** `Academic Portfolio`
            *   **L2 BusinessObjects:** `Academic Program Proposal`, `Approved Program`, `Course Content`, `Assessment Framework`, `Program Catalogue Entry`
        *   **L1 BusinessObject:** `Student Relationship`
            *   **L2 BusinessObjects:** `Student Application`, `Student Enrollment`, `Learning Experience`, `Academic Transcript`, `Student Support Case`, `Academic Credential`
        *   **L1 BusinessObject:** `Research & Innovation Asset`
            *   **L2 BusinessObjects:** `Grant Opportunity`, `Research Proposal`, `Raw Research Data`, `Verified Research Finding`, `Published Research`, `Invention Disclosure`, `Commercial Viability Assessment`, `Patent or Copyright`
        *   **L1 BusinessObject:** `External Engagement`
            *   **L2 BusinessObjects:** `Alumni Record`, `Licensing Prospect`, `Commercialization Agreement`
        *   **L1 BusinessObject:** `Governing Principle & Resource`
            *   **L2 BusinessObjects:** `Strategic Research Mandate`, `Faculty Appointment`, `Research Infrastructure`, `Research Protocol`, `Tuition Payment`, `Grant Financial Statement`, `Royalty Payment`, `Core Research Grant`, `Research Grant`, `Grant Report`

*   **Value Stream Hierarchy:**
    *   **L0 ValueStream:** `Develop Educational Offerings`
        *   **L1 ValueStream:** `Define Academic Product` (mirrors `Develop & Manage Academic Portfolio`)
            *   **L2 ValueStreams:** `Design Program`, `Approve Curriculum`, `Develop Course Materials`, `Establish Assessment Methods`, `List Program in Catalogue`
    *   **L0 ValueStream:** `Build Research Capabilities`
        *   **L1 ValueStream:** `Establish Research Foundations` (mirrors `Govern University Enterprise`)
            *   **L2 ValueStreams:** `Identify Strategic Research Area`, `Recruit Principal Investigators`, `Establish Labs & Facilities`, `Develop Core Methodologies`, `Secure Foundational Funding`
    *   **L0 ValueStream:** `Educate to Graduate`
        *   **L1 ValueStream:** `Deliver Student Journey` (mirrors `Manage Student Lifecycle`)
            *   **L2 ValueStreams:** `Recruit & Admit Student`, `Onboard & Register Student`, `Deliver Instruction`, `Assess Student Performance`, `Provide Student Support`, `Confer Degree`
        *   **L1 ValueStream:** `Manage Student Engagement` (mirrors `Foster External Engagement & Impact`)
            *   **L2 ValueStreams:** `Maintain Alumni Relations`
        *   **L1 ValueStream:** `Administer Student Progression` (mirrors `Govern University Enterprise`)
            *   **L2 ValueStreams:** `Collect Tuition Fees`
    *   **L0 ValueStream:** `Research to Impact`
        *   **L1 ValueStream:** `Execute Research Project` (mirrors `Execute Research & Innovation Lifecycle`)
            *   **L2 ValueStreams:** `Identify Funding Opportunity`, `Develop Research Proposal`, `Conduct Research & Experiments`, `Analyze & Interpret Data`, `Disseminate Findings`
        *   **L1 ValueStream:** `Administer Research Project` (mirrors `Govern University Enterprise`)
            *   **L2 ValueStreams:** `Secure Grant Agreement`, `Manage Grant Finances`, `Report to Funder`
    *   **L0 ValueStream:** `Innovate to Commercialize`
        *   **L1 ValueStream:** `Execute Commercialization` (mirrors `Execute Research & Innovation Lifecycle`)
            *   **L2 ValueStreams:** `Disclose Invention`, `Assess Commercial Potential`, `Secure Intellectual Property`
        *   **L1 ValueStream:** `Manage Partner Engagement` (mirrors `Foster External Engagement & Impact`)
            *   **L2 ValueStreams:** `Market Technology to Partners`
        *   **L1 ValueStream:** `Administer Commercialization` (mirrors `Govern University Enterprise`)
            *   **L2 ValueStreams:** `Negotiate Licensing Agreement`, `Manage Royalties & Compliance`

#### Step 5: Derive Relationships & Generate Final Output

*   **Mandatory Verification Step A (Capability-Capability Serving):**
    *   **L2 Relationship:** The L2 `Research Ethics & Compliance Management` capability serves the L2 `Research Execution Management` capability.
    *   **L1 Parents:** The L1 parent of the source is `Govern University Enterprise`. The L1 parent of the target is `Execute Research & Innovation Lifecycle`.
    *   **Derived L1 Relationship:** A `ServingRelationship` is derived from `Govern University Enterprise` to `Execute Research & Innovation Lifecycle`.
    *   **L0 Parents:** The L0 parent of both L1 capabilities is `Create & Disseminate Knowledge`.
    *   **Derived L0 Relationship:** No self-referencing relationship is created from `Create & Disseminate Knowledge` to itself.

*   **Mandatory Verification Step B (Capability-Object Association):**
    *   **L2 Relationship:** The L2 `Intellectual Property Management` capability is associated with the L2 `Patent or Copyright` business object.
    *   **L1 Parents:** The L1 parent of the source is `Execute Research & Innovation Lifecycle`. The L1 parent of the target is `Research & Innovation Asset`.
    *   **Derived L1 Relationship:** An `AssociationRelationship` is derived from `Execute Research & Innovation Lifecycle` to `Research & Innovation Asset`.
    *   **L0 Parents:** The L0 parent of the source is `Create & Disseminate Knowledge`. The L0 parent of the target is `University Asset`.
    *   **Derived L0 Relationship:** An `AssociationRelationship` is derived from `Create & Disseminate Knowledge` to `University Asset`.

*   **Mandatory Verification Step C (Capability-ValueStream Serving):**
    *   **L2 Relationship:** The L2 `Student Recruitment & Admissions Management` capability serves (realizes) the L2 `Recruit & Admit Student` value stream stage.
    *   **L1 Parents:** The L1 parent of the source capability is `Manage Student Lifecycle`. The L1 parent of the target value stream is `Deliver Student Journey` (which exists within the L0 `Educate to Graduate` stream).
    *   **Derived L1 Relationship:** A `ServingRelationship` is derived from the L1 `Manage Student Lifecycle` capability to the L1 `Deliver Student Journey` value stream stage.

### Part 3: Output Specifications

```csv
"ID","Type","Name","Documentation"
"C0","Capability","Create & Disseminate Knowledge","The university's entire capability to generate new knowledge through research, package it into educational offerings, and deliver it to students and society."
"C1_1","Capability","Develop & Manage Academic Portfolio","The capability to design, approve, and manage the portfolio of academic programs and courses offered by the university."
"C1_2","Capability","Manage Student Lifecycle","The capability to manage the entire student journey, from initial recruitment and admission through to graduation and alumni status."
"C1_3","Capability","Execute Research & Innovation Lifecycle","The capability to secure funding for, execute, and disseminate research, as well as to manage the process of protecting and commercializing resulting innovations."
"C1_4","Capability","Foster External Engagement & Impact","The capability to build and maintain relationships with external stakeholders, including alumni, industry partners, and potential licensees, to maximize societal and economic impact."
"C1_5","Capability","Govern University Enterprise","The capability to provide the strategic direction, foundational resources, and administrative oversight required for all academic and research activities."
"C2_1","Capability","Curriculum Design & Management","The ability to create and maintain curricula, including learning outcomes, course content, and assessment strategies."
"C2_2","Capability","Academic Program Portfolio Management","The ability to manage the overall portfolio of academic programs, ensuring strategic alignment, viability, and market relevance."
"C2_3","Capability","Student Recruitment & Admissions Management","The ability to attract, evaluate, and admit qualified students into the university's programs."
"C2_4","Capability","Student Administration & Records Management","The ability to manage student records, enrollment, academic progress, and the conferral of degrees."
"C2_5","Capability","Teaching & Learning Delivery","The ability to deliver high-quality instruction and learning experiences to students."
"C2_6","Capability","Student Welfare & Support Management","The ability to provide non-academic support services to students, including counseling, financial aid, and disability services."
"C2_7","Capability","Grant & Proposal Development","The ability to identify funding opportunities and develop compelling research proposals to secure grants."
"C2_8","Capability","Research Execution Management","The ability to conduct research, including data collection, analysis, and interpretation, in a rigorous and ethical manner."
"C2_9","Capability","Research Dissemination Management","The ability to publish and otherwise share research findings with the academic community and the public."
"C2_10","Capability","Invention Assessment & Triage","The ability to evaluate invention disclosures from researchers to determine their commercial potential."
"C2_11","Capability","Intellectual Property Management","The ability to protect university innovations through patents, copyrights, and other legal means."
"C2_12","Capability","Alumni Relations Management","The ability to maintain long-term relationships with graduates for networking, fundraising, and community-building purposes."
"C2_13","Capability","Technology Marketing & Licensing Management","The ability to market university technologies to industry and negotiate licensing agreements."
"C2_14","Capability","Partner Relationship Management","The ability to establish and manage strategic partnerships with industry, government, and other organizations."
"C2_15","Capability","Strategic Research Planning","The ability to set strategic priorities for research and allocate resources accordingly."
"C2_16","Capability","Faculty & Staff Management","The ability to recruit, develop, and manage academic and professional staff."
"C2_17","Capability","Research Infrastructure Management","The ability to manage and maintain laboratories, equipment, and other facilities essential for research."
"C2_18","Capability","Research Methodology Development","The ability to develop and refine the scientific methods and protocols used in research."
"C2_19","Capability","Financial Management","The ability to manage the university's financial resources, including tuition, grants, endowments, and operational budgets."
"C2_20","Capability","Legal & Contract Management","The ability to manage legal risks and negotiate contracts with students, funders, and partners."
"C2_21","Capability","Research Ethics & Compliance Management","The ability to ensure all research activities adhere to ethical standards and regulatory requirements."
"BO0","BusinessObject","University Asset","The complete set of tangible and intangible assets that the university creates, manages, and leverages, including its knowledge, relationships, and resources."
"BO1_1","BusinessObject","Academic Portfolio","The collection of all approved academic programs and their constituent parts, representing the university's educational offerings."
"BO1_2","BusinessObject","Student Relationship","The representation of the end-to-end engagement with a student, from applicant to alumnus."
"BO1_3","BusinessObject","Research & Innovation Asset","The collection of intellectual assets generated through the research lifecycle, from initial ideas to protected IP."
"BO1_4","BusinessObject","External Engagement","The set of formal relationships and agreements with external parties, such as alumni and commercial partners."
"BO1_5","BusinessObject","Governing Principle & Resource","The collection of strategic mandates, policies, and core resources that enable the university's operations."
"BO2_1","BusinessObject","Academic Program Proposal","A formal document outlining the rationale, structure, and curriculum for a new or revised academic program."
"BO2_2","BusinessObject","Approved Program","A fully vetted and approved academic program, authorized for delivery to students."
"BO2_3","BusinessObject","Course Content","The materials, lectures, and activities that constitute a specific academic course."
"BO2_4","BusinessObject","Assessment Framework","The defined methods and criteria for evaluating student learning and performance."
"BO2_5","BusinessObject","Program Catalogue Entry","The official public listing of an academic program, including its description, requirements, and admission criteria."
"BO2_6","BusinessObject","Student Application","A formal request from a prospective student for admission to a specific program."
"BO2_7","BusinessObject","Student Enrollment","The official record of a student's registration in a program and its courses for a specific academic term."
"BO2_8","BusinessObject","Learning Experience","The delivery of instructional content and activities to a student."
"BO2_9","BusinessObject","Academic Transcript","The official record of a student's academic performance, including courses taken and grades received."
"BO2_10","BusinessObject","Student Support Case","A record of a specific request for non-academic support or assistance by a student."
"BO2_11","BusinessObject","Academic Credential","The official degree, diploma, or certificate awarded to a student upon successful completion of a program."
"BO2_12","BusinessObject","Grant Opportunity","An identified call for proposals or funding opportunity from a government agency, foundation, or corporation."
"BO2_13","BusinessObject","Research Proposal","A formal document submitted to a funding body, detailing the objectives, methodology, and budget for a proposed research project."
"BO2_14","BusinessObject","Raw Research Data","The unprocessed data collected during the course of a research project."
"BO2_15","BusinessObject","Verified Research Finding","An interpretation of research data that has been validated and is ready for dissemination."
"BO2_16","BusinessObject","Published Research","A research finding that has been formally published in a peer-reviewed journal, conference proceeding, or book."
"BO2_17","BusinessObject","Invention Disclosure","A formal document submitted by a researcher to the university, describing a new invention or discovery."
"BO2_18","BusinessObject","Commercial Viability Assessment","An analysis of the market potential and technical feasibility of a disclosed invention."
"BO2_19","BusinessObject","Patent or Copyright","A legal instrument that protects the university's intellectual property rights to an invention or creative work."
"BO2_20","BusinessObject","Alumni Record","The official record of a graduate, used for communication and engagement."
"BO2_21","BusinessObject","Licensing Prospect","A potential industry partner identified as a candidate for licensing a university technology."
"BO2_22","BusinessObject","Commercialization Agreement","A legally binding contract that grants a third party the rights to use and commercialize university-owned intellectual property."
"BO2_23","BusinessObject","Strategic Research Mandate","A formal directive outlining a priority area for research investment and development."
"BO2_24","BusinessObject","Faculty Appointment","The formal contract and terms of employment for a member of the academic staff."
"BO2_25","BusinessObject","Research Infrastructure","The physical labs, equipment, and core facilities established to support research activities."
"BO2_26","BusinessObject","Research Protocol","A detailed, step-by-step plan for conducting a specific experiment or research procedure."
"BO2_27","BusinessObject","Tuition Payment","A financial transaction representing the payment of fees by a student for educational services."
"BO2_28","BusinessObject","Grant Financial Statement","A report detailing the income and expenditure associated with a specific research grant."
"BO2_29","BusinessObject","Royalty Payment","A financial transaction representing income received from the licensing of intellectual property."
"BO2_30","BusinessObject","Core Research Grant","Foundational funding secured to establish a research capability, often from internal sources or large institutional grants."
"BO2_31","BusinessObject","Research Grant","A contract with an external body to fund a specific research project."
"BO2_32","BusinessObject","Grant Report","A formal report submitted to a funding body, detailing the progress and outcomes of a funded research project."
"VS0_1","ValueStream","Develop Educational Offerings","A value stream for the design, approval, and cataloging of academic programs and courses before any students are enrolled."
"VS0_2","ValueStream","Build Research Capabilities","A value stream for establishing the foundational faculty, facilities, and expertise in strategic research areas, independent of any specific grant or project."
"VS0_3","ValueStream","Educate to Graduate","A value stream triggered by a student's application to an existing program, covering the entire lifecycle from admission to graduation."
"VS0_4","ValueStream","Research to Impact","A value stream triggered by a specific funding opportunity or research question, covering the entire project lifecycle from proposal to dissemination of findings."
"VS0_5","ValueStream","Innovate to Commercialize","A value stream triggered by the disclosure of a new invention, covering the process of protecting and licensing the intellectual property to an external partner."
"VS1_1","ValueStream","Define Academic Product","The stages within the Develop Educational Offerings stream focused on designing and defining the academic product."
"VS1_2","ValueStream","Establish Research Foundations","The stages within the Build Research Capabilities stream focused on establishing the core resources and direction for research."
"VS1_3","ValueStream","Deliver Student Journey","The core stages of the Educate to Graduate stream that directly involve the student's academic and support experience."
"VS1_4","ValueStream","Manage Student Engagement","The stages within the Educate to Graduate stream focused on post-graduation and external relationship management."
"VS1_5","ValueStream","Administer Student Progression","The administrative and financial stages that support the student's progression through their program."
"VS1_6","ValueStream","Execute Research Project","The core stages of the Research to Impact stream focused on the scientific and intellectual work of the project."
"VS1_7","ValueStream","Administer Research Project","The administrative and financial stages that support the execution of a research project."
"VS1_8","ValueStream","Execute Commercialization","The core stages of the Innovate to Commercialize stream focused on assessing and protecting the intellectual property."
"VS1_9","ValueStream","Manage Partner Engagement","The stages within the Innovate to Commercialize stream focused on engaging with external partners."
"VS1_10","ValueStream","Administer Commercialization","The administrative and financial stages that support the commercialization of an invention."
"VS2_1","ValueStream","Design Program","The stage of creating the initial proposal for a new academic program."
"VS2_2","ValueStream","Approve Curriculum","The stage of formally reviewing and approving the program's curriculum and structure."
"VS2_3","ValueStream","Develop Course Materials","The stage of creating the specific content, lectures, and resources for the program's courses."
"VS2_4","ValueStream","Establish Assessment Methods","The stage of defining how student learning will be measured and graded."
"VS2_5","ValueStream","List Program in Catalogue","The stage of making the approved program publicly visible and available for applications."
"VS2_6","ValueStream","Identify Strategic Research Area","The stage of determining a priority area for institutional investment in research."
"VS2_7","ValueStream","Recruit Principal Investigators","The stage of hiring key academic staff to lead research in the strategic area."
"VS2_8","ValueStream","Establish Labs & Facilities","The stage of creating the physical infrastructure required for the research."
"VS2_9","ValueStream","Develop Core Methodologies","The stage of defining the standard scientific protocols and approaches for the research area."
"VS2_10","ValueStream","Secure Foundational Funding","The stage of acquiring the initial capital to launch the research capability."
"VS2_11","ValueStream","Recruit & Admit Student","The stage of attracting applicants and selecting qualified candidates for a program."
"VS2_12","ValueStream","Onboard & Register Student","The stage of formally enrolling an admitted student and integrating them into the university."
"VS2_13","ValueStream","Deliver Instruction","The stage of providing teaching and learning activities to students."
"VS2_14","ValueStream","Assess Student Performance","The stage of evaluating student work and recording their academic progress."
"VS2_15","ValueStream","Provide Student Support","The stage of offering non-academic assistance to students to support their well-being and success."
"VS2_16","ValueStream","Collect Tuition Fees","The stage of invoicing students for their tuition and processing payments."
"VS2_17","ValueStream","Confer Degree","The stage of formally awarding the academic credential to a student who has met all program requirements."
"VS2_18","ValueStream","Maintain Alumni Relations","The stage of managing the ongoing relationship with graduates."
"VS2_19","ValueStream","Identify Funding Opportunity","The stage of finding and qualifying potential sources of funding for a research idea."
"VS2_20","ValueStream","Develop Research Proposal","The stage of writing and submitting a formal application for a research grant."
"VS2_21","ValueStream","Secure Grant Agreement","The stage of finalizing the legal contract for a successful grant application."
"VS2_22","ValueStream","Conduct Research & Experiments","The stage of executing the planned research activities and collecting data."
"VS2_23","ValueStream","Analyze & Interpret Data","The stage of processing raw data to produce meaningful scientific findings."
"VS2_24","ValueStream","Manage Grant Finances","The stage of tracking and reporting on the expenditure of grant funds."
"VS2_25","ValueStream","Disseminate Findings","The stage of sharing research results through publications, conferences, and other channels."
"VS2_26","ValueStream","Report to Funder","The stage of providing formal progress and final reports to the funding body."
"VS2_27","ValueStream","Disclose Invention","The stage where a researcher formally reports a new discovery or invention to the university."
"VS2_28","ValueStream","Assess Commercial Potential","The stage of evaluating an invention's marketability and technical feasibility."
"VS2_29","ValueStream","Secure Intellectual Property","The stage of filing for patents or other forms of legal protection for an invention."
"VS2_30","ValueStream","Market Technology to Partners","The stage of identifying and contacting potential industry licensees for the technology."
"VS2_31","ValueStream","Negotiate Licensing Agreement","The stage of finalizing the legal and financial terms for a commercialization deal."
"VS2_32","ValueStream","Manage Royalties & Compliance","The stage of collecting licensing income and ensuring the licensee adheres to the agreement terms."
```

```csv
"ID","Type","Name","Documentation","Source","Target","Specialization"
"","CompositionRelationship","","","C0","C1_1",""
"","CompositionRelationship","","","C0","C1_2",""
"","CompositionRelationship","","","C0","C1_3",""
"","CompositionRelationship","","","C0","C1_4",""
"","CompositionRelationship","","","C0","C1_5",""
"","CompositionRelationship","","","C1_1","C2_1",""
"","CompositionRelationship","","","C1_1","C2_2",""
"","CompositionRelationship","","","C1_2","C2_3",""
"","CompositionRelationship","","","C1_2","C2_4",""
"","CompositionRelationship","","","C1_2","C2_5",""
"","CompositionRelationship","","","C1_2","C2_6",""
"","CompositionRelationship","","","C1_3","C2_7",""
"","CompositionRelationship","","","C1_3","C2_8",""
"","CompositionRelationship","","","C1_3","C2_9",""
"","CompositionRelationship","","","C1_3","C2_10",""
"","CompositionRelationship","","","C1_3","C2_11",""
"","CompositionRelationship","","","C1_4","C2_12",""
"","CompositionRelationship","","","C1_4","C2_13",""
"","CompositionRelationship","","","C1_4","C2_14",""
"","CompositionRelationship","","","C1_5","C2_15",""
"","CompositionRelationship","","","C1_5","C2_16",""
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
"","CompositionRelationship","","","BO1_2","BO2_11",""
"","CompositionRelationship","","","BO1_3","BO2_12",""
"","CompositionRelationship","","","BO1_3","BO2_13",""
"","CompositionRelationship","","","BO1_3","BO2_14",""
"","CompositionRelationship","","","BO1_3","BO2_15",""
"","CompositionRelationship","","","BO1_3","BO2_16",""
"","CompositionRelationship","","","BO1_3","BO2_17",""
"","CompositionRelationship","","","BO1_3","BO2_18",""
"","CompositionRelationship","","","BO1_3","BO2_19",""
"","CompositionRelationship","","","BO1_4","BO2_20",""
"","CompositionRelationship","","","BO1_4","BO2_21",""
"","CompositionRelationship","","","BO1_4","BO2_22",""
"","CompositionRelationship","","","BO1_5","BO2_23",""
"","CompositionRelationship","","","BO1_5","BO2_24",""
"","CompositionRelationship","","","BO1_5","BO2_25",""
"","CompositionRelationship","","","BO1_5","BO2_26",""
"","CompositionRelationship","","","BO1_5","BO2_27",""
"","CompositionRelationship","","","BO1_5","BO2_28",""
"","CompositionRelationship","","","BO1_5","BO2_29",""
"","CompositionRelationship","","","BO1_5","BO2_30",""
"","CompositionRelationship","","","BO1_5","BO2_31",""
"","CompositionRelationship","","","BO1_5","BO2_32",""
"","CompositionRelationship","","","VS0_1","VS1_1",""
"","CompositionRelationship","","","VS0_2","VS1_2",""
"","CompositionRelationship","","","VS0_3","VS1_3",""
"","CompositionRelationship","","","VS0_3","VS1_4",""
"","CompositionRelationship","","","VS0_3","VS1_5",""
"","CompositionRelationship","","","VS0_4","VS1_6",""
"","CompositionRelationship","","","VS0_4","VS1_7",""
"","CompositionRelationship","","","VS0_5","VS1_8",""
"","CompositionRelationship","","","VS0_5","VS1_9",""
"","CompositionRelationship","","","VS0_5","VS1_10",""
"","CompositionRelationship","","","VS1_1","VS2_1",""
"","CompositionRelationship","","","VS1_1","VS2_2",""
"","CompositionRelationship","","","VS1_1","VS2_3",""
"","CompositionRelationship","","","VS1_1","VS2_4",""
"","CompositionRelationship","","","VS1_1","VS2_5",""
"","CompositionRelationship","","","VS1_2","VS2_6",""
"","CompositionRelationship","","","VS1_2","VS2_7",""
"","CompositionRelationship","","","VS1_2","VS2_8",""
"","CompositionRelationship","","","VS1_2","VS2_9",""
"","CompositionRelationship","","","VS1_2","VS2_10",""
"","CompositionRelationship","","","VS1_3","VS2_11",""
"","CompositionRelationship","","","VS1_3","VS2_12",""
"","CompositionRelationship","","","VS1_3","VS2_13",""
"","CompositionRelationship","","","VS1_3","VS2_14",""
"","CompositionRelationship","","","VS1_3","VS2_15",""
"","CompositionRelationship","","","VS1_3","VS2_17",""
"","CompositionRelationship","","","VS1_4","VS2_18",""
"","CompositionRelationship","","","VS1_5","VS2_16",""
"","CompositionRelationship","","","VS1_6","VS2_19",""
"","CompositionRelationship","","","VS1_6","VS2_20",""
"","CompositionRelationship","","","VS1_6","VS2_22",""
"","CompositionRelationship","","","VS1_6","VS2_23",""
"","CompositionRelationship","","","VS1_6","VS2_25",""
"","CompositionRelationship","","","VS1_7","VS2_21",""
"","CompositionRelationship","","","VS1_7","VS2_24",""
"","CompositionRelationship","","","VS1_7","VS2_26",""
"","CompositionRelationship","","","VS1_8","VS2_27",""
"","CompositionRelationship","","","VS1_8","VS2_28",""
"","CompositionRelationship","","","VS1_8","VS2_29",""
"","CompositionRelationship","","","VS1_9","VS2_30",""
"","CompositionRelationship","","","VS1_10","VS2_31",""
"","CompositionRelationship","","","VS1_10","VS2_32",""
"","AssociationRelationship","","","C2_1","BO2_1",""
"","AssociationRelationship","","","C2_1","BO2_2",""
"","AssociationRelationship","","","C2_1","BO2_3",""
"","AssociationRelationship","","","C2_1","BO2_4",""
"","AssociationRelationship","","","C2_2","BO2_5",""
"","AssociationRelationship","","","C2_3","BO2_6",""
"","AssociationRelationship","","","C2_4","BO2_7",""
"","AssociationRelationship","","","C2_4","BO2_9",""
"","AssociationRelationship","","","C2_4","BO2_11",""
"","AssociationRelationship","","","C2_5","BO2_8",""
"","AssociationRelationship","","","C2_6","BO2_10",""
"","AssociationRelationship","","","C2_7","BO2_12",""
"","AssociationRelationship","","","C2_7","BO2_13",""
"","AssociationRelationship","","","C2_8","BO2_14",""
"","AssociationRelationship","","","C2_8","BO2_15",""
"","AssociationRelationship","","","C2_9","BO2_16",""
"","AssociationRelationship","","","C2_10","BO2_17",""
"","AssociationRelationship","","","C2_10","BO2_18",""
"","AssociationRelationship","","","C2_11","BO2_19",""
"","AssociationRelationship","","","C2_12","BO2_20",""
"","AssociationRelationship","","","C2_13","BO2_21",""
"","AssociationRelationship","","","C2_13","BO2_22",""
"","AssociationRelationship","","","C2_15","BO2_23",""
"","AssociationRelationship","","","C2_16","BO2_24",""
"","AssociationRelationship","","","C2_17","BO2_25",""
"","AssociationRelationship","","","C2_18","BO2_26",""
"","AssociationRelationship","","","C2_19","BO2_27",""
"","AssociationRelationship","","","C2_19","BO2_28",""
"","AssociationRelationship","","","C2_19","BO2_29",""
"","AssociationRelationship","","","C2_19","BO2_30",""
"","AssociationRelationship","","","C2_20","BO2_31",""
"","AssociationRelationship","","","C2_20","BO2_32",""
"","AssociationRelationship","","","C1_1","BO1_1",""
"","AssociationRelationship","","","C1_2","BO1_2",""
"","AssociationRelationship","","","C1_3","BO1_3",""
"","AssociationRelationship","","","C1_4","BO1_4",""
"","AssociationRelationship","","","C1_5","BO1_5",""
"","AssociationRelationship","","","C0","BO0",""
"","ServingRelationship","","","C2_15","C2_7",""
"","ServingRelationship","","","C2_21","C2_8",""
"","ServingRelationship","","","C2_21","C2_7",""
"","ServingRelationship","","","C2_20","C2_7",""
"","ServingRelationship","","","C2_20","C2_11",""
"","ServingRelationship","","","C2_20","C2_13",""
"","ServingRelationship","","","C2_19","C2_7",""
"","ServingRelationship","","","C2_19","C2_8",""
"","ServingRelationship","","","C2_14","C2_13",""
"","ServingRelationship","","","C2_14","C2_7",""
"","ServingRelationship","","","C2_2","C2_1",""
"","ServingRelationship","","","C2_16","C2_5",""
"","ServingRelationship","","","C2_16","C2_8",""
"","ServingRelationship","","","C1_5","C1_3",""
"","ServingRelationship","","","C1_5","C1_4",""
"","ServingRelationship","","","C1_1","C1_1",""
"","ServingRelationship","","","C1_5","C1_2",""
"","ServingRelationship","","","C2_1","VS2_1",""
"","ServingRelationship","","","C2_1","VS2_2",""
"","ServingRelationship","","","C2_1","VS2_3",""
"","ServingRelationship","","","C2_1","VS2_4",""
"","ServingRelationship","","","C2_2","VS2_5",""
"","ServingRelationship","","","C2_15","VS2_6",""
"","ServingRelationship","","","C2_16","VS2_7",""
"","ServingRelationship","","","C2_17","VS2_8",""
"","ServingRelationship","","","C2_18","VS2_9",""
"","ServingRelationship","","","C2_19","VS2_10",""
"","ServingRelationship","","","C2_3","VS2_11",""
"","ServingRelationship","","","C2_4","VS2_12",""
"","ServingRelationship","","","C2_5","VS2_13",""
"","ServingRelationship","","","C2_4","VS2_14",""
"","ServingRelationship","","","C2_6","VS2_15",""
"","ServingRelationship","","","C2_19","VS2_16",""
"","ServingRelationship","","","C2_4","VS2_17",""
"","ServingRelationship","","","C2_12","VS2_18",""
"","ServingRelationship","","","C2_7","VS2_19",""
"","ServingRelationship","","","C2_7","VS2_20",""
"","ServingRelationship","","","C2_20","VS2_21",""
"","ServingRelationship","","","C2_8","VS2_22",""
"","ServingRelationship","","","C2_8","VS2_23",""
"","ServingRelationship","","","C2_19","VS2_24",""
"","ServingRelationship","","","C2_9","VS2_25",""
"","ServingRelationship","","","C2_20","VS2_26",""
"","ServingRelationship","","","C2_10","VS2_27",""
"","ServingRelationship","","","C2_10","VS2_28",""
"","ServingRelationship","","","C2_11","VS2_29",""
"","ServingRelationship","","","C2_13","VS2_30",""
"","ServingRelationship","","","C2_20","VS2_31",""
"","ServingRelationship","","","C2_19","VS2_32",""
"","ServingRelationship","","","C1_1","VS1_1",""
"","ServingRelationship","","","C1_5","VS1_2",""
"","ServingRelationship","","","C1_2","VS1_3",""
"","ServingRelationship","","","C1_4","VS1_4",""
"","ServingRelationship","","","C1_5","VS1_5",""
"","ServingRelationship","","","C1_3","VS1_6",""
"","ServingRelationship","","","C1_5","VS1_7",""
"","ServingRelationship","","","C1_3","VS1_8",""
"","ServingRelationship","","","C1_4","VS1_9",""
"","ServingRelationship","","","C1_5","VS1_10",""
"","ServingRelationship","","","C0","VS0_1",""
"","ServingRelationship","","","C0","VS0_2",""
"","ServingRelationship","","","C0","VS0_3",""
"","ServingRelationship","","","C0","VS0_4",""
"","ServingRelationship","","","C0","VS0_5",""
```

```csv
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
"BO2_23","Level","2"
"BO2_23","Code","BO2_23"
"BO2_24","Level","2"
"BO2_24","Code","BO2_24"
"BO2_25","Level","2"
"BO2_25","Code","BO2_25"
"BO2_26","Level","2"
"BO2_26","Code","BO2_26"
"BO2_27","Level","2"
"BO2_27","Code","BO2_27"
"BO2_28","Level","2"
"BO2_28","Code","BO2_28"
"BO2_29","Level","2"
"BO2_29","Code","BO2_29"
"BO2_30","Level","2"
"BO2_30","Code","BO2_30"
"BO2_31","Level","2"
"BO2_31","Code","BO2_31"
"BO2_32","Level","2"
"BO2_32","Code","BO2_32"
"VS0_1","Level","0"
"VS0_1","Code","VS0_1"
"VS0_1","Value Proposition","Provision of advanced education, leading to a recognized academic credential that enhances career prospects, personal growth, and access to a professional network."
"VS0_1","Value Stream Pattern","MTS"
"VS0_2","Level","0"
"VS0_2","Code","VS0_2"
"VS0_2","Value Proposition","Rigorous execution of research projects to generate novel knowledge, solve complex problems, and deliver a measurable return on investment, whether societal, technological, or commercial."
"VS0_2","Value Stream Pattern","MTS"
"VS0_3","Level","0"
"VS0_3","Code","VS0_3"
"VS0_3","Value Proposition","Provision of advanced education, leading to a recognized academic credential that enhances career prospects, personal growth, and access to a professional network."
"VS0_3","Value Stream Pattern","ATO"
"VS0_4","Level","0"
"VS0_4","Code","VS0_4"
"VS0_4","Value Proposition","Rigorous execution of research projects to generate novel knowledge, solve complex problems, and deliver a measurable return on investment, whether societal, technological, or commercial."
"VS0_4","Value Stream Pattern","ETO"
"VS0_5","Level","0"
"VS0_5","Code","VS0_5"
"VS0_5","Value Proposition","A supply of highly skilled graduates, access to cutting-edge innovation and expert knowledge, and the commercialization of new technologies that drive economic growth and social progress."
"VS0_5","Value Stream Pattern","ETO"
"VS1_1","Level","1"
"VS1_1","Code","VS1_1"
"VS1_2","Level","1"
"VS1_2","Code","VS1_2"
"VS1_3","Level","1"
"VS1_3","Code","VS1_3"
"VS1_4","Level","1"
"VS1_4","Code","VS1_4"
"VS1_5","Level","1"
"VS1_5","Code","VS1_5"
"VS1_6","Level","1"
"VS1_6","Code","VS1_6"
"VS1_7","Level","1"
"VS1_7","Code","VS1_7"
"VS1_8","Level","1"
"VS1_8","Code","VS1_8"
"VS1_9","Level","1"
"VS1_9","Code","VS1_9"
"VS1_10","Level","1"
"VS1_10","Code","VS1_10"
"VS2_1","Level","2"
"VS2_1","Code","VS2_1"
"VS2_1","Sequence","1"
"VS2_2","Level","2"
"VS2_2","Code","VS2_2"
"VS2_2","Sequence","2"
"VS2_3","Level","2"
"VS2_3","Code","VS2_3"
"VS2_3","Sequence","3"
"VS2_4","Level","2"
"VS2_4","Code","VS2_4"
"VS2_4","Sequence","4"
"VS2_5","Level","2"
"VS2_5","Code","VS2_5"
"VS2_5","Sequence","5"
"VS2_6","Level","2"
"VS2_6","Code","VS2_6"
"VS2_6","Sequence","1"
"VS2_7","Level","2"
"VS2_7","Code","VS2_7"
"VS2_7","Sequence","2"
"VS2_8","Level","2"
"VS2_8","Code","VS2_8"
"VS2_8","Sequence","3"
"VS2_9","Level","2"
"VS2_9","Code","VS2_9"
"VS2_9","Sequence","4"
"VS2_10","Level","2"
"VS2_10","Code","VS2_10"
"VS2_10","Sequence","5"
"VS2_11","Level","2"
"VS2_11","Code","VS2_11"
"VS2_11","Sequence","1"
"VS2_12","Level","2"
"VS2_12","Code","VS2_12"
"VS2_12","Sequence","2"
"VS2_13","Level","2"
"VS2_13","Code","VS2_13"
"VS2_13","Sequence","3"
"VS2_14","Level","2"
"VS2_14","Code","VS2_14"
"VS2_14","Sequence","4"
"VS2_15","Level","2"
"VS2_15","Code","VS2_15"
"VS2_15","Sequence","5"
"VS2_16","Level","2"
"VS2_16","Code","VS2_16"
"VS2_16","Sequence","6"
"VS2_17","Level","2"
"VS2_17","Code","VS2_17"
"VS2_17","Sequence","7"
"VS2_18","Level","2"
"VS2_18","Code","VS2_18"
"VS2_18","Sequence","8"
"VS2_19","Level","2"
"VS2_19","Code","VS2_19"
"VS2_19","Sequence","1"
"VS2_20","Level","2"
"VS2_20","Code","VS2_20"
"VS2_20","Sequence","2"
"VS2_21","Level","2"
"VS2_21","Code","VS2_21"
"VS2_21","Sequence","3"
"VS2_22","Level","2"
"VS2_22","Code","VS2_22"
"VS2_22","Sequence","4"
"VS2_23","Level","2"
"VS2_23","Code","VS2_23"
"VS2_23","Sequence","5"
"VS2_24","Level","2"
"VS2_24","Code","VS2_24"
"VS2_24","Sequence","6"
"VS2_25","Level","2"
"VS2_25","Code","VS2_25"
"VS2_25","Sequence","7"
"VS2_26","Level","2"
"VS2_26","Code","VS2_26"
"VS2_26","Sequence","8"
"VS2_27","Level","2"
"VS2_27","Code","VS2_27"
"VS2_27","Sequence","1"
"VS2_28","Level","2"
"VS2_28","Code","VS2_28"
"VS2_28","Sequence","2"
"VS2_29","Level","2"
"VS2_29","Code","VS2_29"
"VS2_29","Sequence","3"
"VS2_30","Level","2"
"VS2_30","Code","VS2_30"
"VS2_30","Sequence","4"
"VS2_31","Level","2"
"VS2_31","Code","VS2_31"
"VS2_31","Sequence","5"
"VS2_32","Level","2"
"VS2_32","Code","VS2_32"
"VS2_32","Sequence","6"
```