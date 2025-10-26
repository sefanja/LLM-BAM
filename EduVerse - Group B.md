# Reference Architecture Design Brief: "EduVerse Reference Model"

## Objective

* **Title:** Design Brief: EduVerse - A Reference Business Architecture for a Modern University.
* **Objective:** Develop a reference business architecture to serve as a common language for modern, research-intensive universities. The architecture must support strategic discussions on digitalisation of education, attracting international talent, and valorisation of research.

## Core Strategic Goals

The reference architecture must enable a university to successfully pursue the following core strategic goals:

* **SG1: Student Lifecycle Management:** To provide a seamless and enriching experience for students throughout their entire academic journey. This includes the initial recruitment and application process, course enrolment, the delivery of education, examination and grading, and finally, graduation and alumni relations.
* **SG2: Research Excellence and Impact:** To create a thriving environment for groundbreaking research and ensure its value is shared with society. This includes acquiring research funding, facilitating the research process for academic staff, managing research data, and valorising research outcomes through publications and partnerships.
* **SG3: Lifelong Learning & Societal Valorisation:** To provide continuing education for professionals and to valorise academic knowledge through societal partnerships and public engagement. This includes executive education, professional development courses, public lectures, and contract research for external partners.

## Core Modeling Philosophy: The HOW-WHAT-WHY Triad

To ensure a coherent and meaningful model, you must base your entire design on the following architectural triad. This logic is the primary driver for all structural choices.

* **WHY (Value Stream):**
  This defines the **purpose** of the transformation. It represents the sequence of value-creating stages that collectively fulfill a **value commitment** made to a stakeholder, thereby achieving a strategic goal. It answers the question: "**WHY** are we doing this?"
  * **Guiding Principle (Outside-In Perspective):** When defining the value streams and their stages, you must think 'outside-in'. Start from the value promised to the stakeholder (e.g., "a fulfilled order," "a resolved support ticket"). Every stage must be a necessary step to deliver on that promise.
    * **Crucial Distinction:** This is **not** a customer journey map. The stages represent the organization's internal value-creating activities required to fulfill the promise, not necessarily the stakeholder's touchpoints. For example, 'Resource Allocation Planning' or 'Logistics Scheduling' are vital value-creating stages to ensure a service can be delivered or a product can be shipped, but they are not direct touchpoints for the stakeholder.
  * **Guiding Principle (The Single Instance Principle):** A value stream must represent the end-to-end flow of a **single case or instance** from an initial **trigger** to a final **outcome**. All stages within the stream must be activities that happen *during the journey of that one instance*.
    * **Crucial Distinction:** This separates operational value streams (which execute repeatedly for each case) from **enabling** value streams (which design or prepare the capabilities needed for operation). Mixing these is a modeling error.
    * **Example:** An 'Order-to-Cash' value stream is triggered by a 'Customer Order' and ends with 'Payment Received'. The stages are `Process Order`, `Ship Product`, `Issue Invoice`. The activity `Design Product` is not part of this stream; it belongs in a separate, enabling 'Idea-to-Product' stream.

* **WHAT (Business Object):**
 This represents the conceptual, 'real-world' entity **in a specific role** that is being transformed by the value stream. It is the subject of value creation.
  * **Crucial Principle:** A business object *is* the role. When an entity's fundamental role changes from the organization's perspective, it should be modeled as a *different* business object.
  * **Example:** 'Component Part' and 'Installed Asset' are two separate business objects. A single physical item (like a server or a machine part) transitions between these roles. As a 'Component Part' in a warehouse, it is subject to inventory management capabilities. Once installed at a client site as an 'Installed Asset', it becomes subject to maintenance and support capabilities. The value commitments and governing capabilities for these two roles are entirely different.

* **HOW (Business Capability):**
  This represents the organization's reusable **potential** to perform the transformation on the business object. It is the collection of abilities needed to execute a step in the value stream. It answers the question: "**HOW** do we have the ability to do this?"
  * **Relation to value stream (stage):** A value stream (stage) is a *particular* manifestation of this potential within a *certain* context. Therefore, the name of the value stream (stage) is typically more specific than the name of the reusable potential.

**This logic must be the backbone of your generated model.** Each value stream stage (`WHY`) must describe the transformation of a business object (`WHAT`) realized by a primary capability (`HOW`). Your entire model should be a reflection of this interconnected triad at every level of detail.

## Task Instructions

Based on the information above, generate a **fully coherent and hierarchically consistent** reference business architecture model in Markdown tables that exactly mirror the structure required for Archi's CSV import files.

### ArchiMate Mapping

* Value Streams (at `Level 0` (or `L0`)) and Value Stream Stages (at `Level 1` and `Level 2` (or `L1` and `L2`)) must be modeled as `BusinessProcess`.
* Business Capabilities must be modeled as `BusinessFunction`.
* Business Objects must be modeled as `BusinessObject`.
* A `ServingRelationship` from a `BusinessFunction` to a `BusinessProcess` means that a business capability is manifested as a particular value stream (stage).
* An `AccessRelationship` from a `BusinessFunction` to a `BusinessObject` means that a business capability is an ability to transform that business object.
* A `ServingRelationship` between `BusinessFunction`s means that the target requires the source to reach its intended outcome (a business object transformation).
* The `CompositionRelationhip` is used for hierarchical relations.

### Crucial Architectural Rule

* **Hierarchical Coherence (Bottom-Up Derivation):** Transversal relations between elements at `L0` and `L1` are not created independently. They exist **only** as a direct aggregation of relationships between their children at the `L2` level. This rule is the sole mechanism for generating parent-level relationships and ensures model consistency.

### Architecture Generation Process

You will generate the architecture following a highly structured, multi-step process. The guiding principle is that a single, unified **Business Capability hierarchy is the primary organizing structure** of the entire model, which manifests itself through different, independent Value Streams.

#### Phase 1: Bottom-Up Definition of All `L2` Elements

1. **Define All `L2` Processes:** For each `L2` `BusinessProcess`, you will now define its primary `L2` `BusinessObject`. This is a critical step that requires a specific level of abstraction.
    * **Core Principle:** The `L2` `BusinessObject` must be named at a **slightly more generic level** than the specific process it is tied to. To find the correct name, identify the core conceptual entity in the process and 
2. **Generate Specific `L2` Primary Objects (Initial Inventory):** For each `L2` `BusinessProcess`, define a **highly specific `L2` `BusinessObject`** that precisely matches the process context. Do not abstract at this stage.
3. **Generate Specific `L2` Supporting Objects (Full Inventory):** For each `L2` `[Process, Primary Object]` pair, identify and define any **highly specific `L2` `Supporting Objects`** required as input. Again, do not abstract yet.
   * At this point, you have a complete, detailed, but unconsolidated inventory of all business objects needed.
4. **Consolidate and Abstract All `L2` Objects (Structuring):** Now, analyze the **complete list of all specific objects** you have created (both primary and supporting). Your goal is to consolidate this list into a smaller, more abstract set of `L2` objects that represent true, reusable conceptual entities.
    * **Core Principle:** Merge specific objects into a single, more generic object if they represent variations of the same core concept.
    * **Guiding Heuristic:** A primary reason to merge objects is the likelihood that they would share a **common 'pool of identifications'** or be managed as a single set of records in a real-world system (e.g., using one sequence of booking numbers).
    * **Generic Example (MANDATORY TO FOLLOW):**
        * **Input List:** `Executive Boardroom Booking`, `Project Huddle Room Booking`, `Visitor Parking Spot Reservation`.
        * **Analysis:** The first two are types of room bookings. The third is a type of space reservation. `Room Booking` and `Parking Spot Reservation` could both be seen as types of `Resource Booking`.
        * **Output (Consolidated List):** `Room Booking`, `Resource Booking` (make a sensible abstraction choice). This list is your final catalog of abstract `L2` objects.
5. **Define `L2` Custodial Functions:** For **every** unique abstract `L2` `BusinessObject` in your final consolidated list, create **one and only one** `L2` `BusinessFunction` to act as its custodian.
6. **Create All `L2` Relationships:** Now, create all transversal relationships, linking the original `L2` Processes to their corresponding *abstract* `L2` Objects and Functions.
    * For **each** abstract `L2` `BusinessObject`, create an `AccessRelationship` from its single custodian `L2` `Function`.
    * For **each** `L2` `BusinessProcess`, find its *original specific primary object* from step 2, determine which *abstract object* this was consolidated into in step 4, and create a `ServingRelationship` from the custodian `Function` of that abstract object to the `Process`.
    * Do the same for identifying necessary `[primary Function, supporting Function]` relationships.

#### Phase 2: Top-Down Structuring of Hierarchies

1. **Structure the `L1` Capability Hierarchy (The Anchor):** Group the `L2` `BusinessFunction`s into `L1` parents based on **business logic** such as shared skills and resources that should be managed as a whole (e.g., group all payment-related functions under 'Financial Transaction Management').
2. **Structure the `L1` Object Hierarchy (Mirroring):** Group the `L2` `BusinessObjects` into `L1` parents to **exactly mirror** the `L1` capability hierarchy. The name of the `L1` object should describe the entity being owned and managed by the `L1` function.
3. **Restructure the L1 Process Hierarchy (Final Alignment):** Discard the original `L1` `BusinessProcess` parents. Create a **new set of `L1` `BusinessProcess` parents** that mirrors the `L1` `BusinessFunction` hierarchy. Re-parent the `L2` `BusinessProcesses` under these new `L1` parents. **Note:** An `L1` `BusinessProcess` will now logically group stages that are realized by a common type of capability, even if these stages belong to different `L0` Value Streams.

#### Phase 3: Derivation, Verification, and Output Generation

1. **Derive `L0` and `L1` Relationships:** Systematically apply the **Hierarchical Coherence** rule to create all parent-level transversal relationships as aggregations of the `L2` relationships.
2. **Verification:** Before generating the final tables, demonstrate that you have correctly applied the **Hierarchical Coherence** rule. Pick one `L1` `ServingRelationship` and list the specific `L2` child relationships that caused its creation.
3. **Generate Final Output:** After providing the example, generate the three complete Markdown tables.

## Output Format

Please generate the output as three separate Markdown tables: one for all elements (`elements.csv`), and one for all relationships between them (`relations.csv`), and one for all properties (`properties.csv`).

### `elements.csv` Table

This table must list every single architectural element. Generate a unique `ID` for each element.

| ID | Type | Name | Documentation |
| :--- | :--- | :--- | :--- |

**Column Definitions:**

* **ID:** A unique identifier for the element (e.g., `BP-1`, `BF-1`, `BO-1`).
* **Type:** The specific ArchiMate element type (`BusinessProcess`, `BusinessFunction`, `BusinessObject`).
* **Name:** The human-readable name of the element.
* **Documentation:** A concise description of the element's purpose.

### `relations.csv` Table

This table must define all the relationships between the elements listed in the `elements.csv` table.

| ID | Type | Name | Documentation | Source | Target | Specialization |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

**Column Definitions:**

* **ID:** Leave empty.
* **Type:** The specific ArchiMate relationship type. Use **only** the following:
  * **`CompositionRelationship`**: To link a parent element to its child elements.
  * **`ServingRelationship`**: To show that a `BusinessFunction` is required by another `BusinessFunction` or that it mainfests as a particular `BusinessProcess`.
  * **`AccessRelationship`**: To show that a `BusinessFunction` transforms a `BusinessObject`.
* **Name:** Leave empty.
* **Documentation:** Leave empty.
* **Source:** The `ID` of the element where the relationship starts.
* **Target:** The `ID` of the element where the relationship ends.
* **Specialization:** Leave empty.

### `properties.csv` Table

This table adds the properties `Level` and `Code` to each element defined in the `elements.csv` table.

| ID | Key | Value |
| :--- | :--- | :--- |

**Column Definitions:**

* **ID:** The `ID` of the element used in the `elements.csv` table.
* **Key:** Per element: use `Level` for the first row, `Code` for the second.
* **Value:** For `Level` put in `0`, `1`, or `2`, based on the element's place in the hierarchy. For `Code`, put in the element's `ID`.
