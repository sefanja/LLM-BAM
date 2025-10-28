## Core Modeling Philosophy: The HOW-WHAT-WHY Triad

To ensure a coherent and meaningful model, you must base your entire design on the following architectural triad. This logic is the primary driver for all structural choices.

* **WHY (Value Stream):**
  This defines the **purpose** of the transformation. It represents the sequence of value-creating stages that collectively fulfill a **value commitment** made to a stakeholder, thereby achieving a strategic goal. It answers the question: "**WHY** are we doing this?"
  * **Guiding Principle (Outside-In Perspective):** When defining the value streams and their stages, you must think 'outside-in'. Start from the value promised to the stakeholder (e.g., "a fulfilled order," "a resolved support ticket"). Every stage must be a necessary step to deliver on that promise.
    * **Crucial Distinction:** This is **not** a customer journey map. The stages represent the organization's internal value-creating activities required to fulfill the promise, not necessarily the stakeholder's touchpoints. For example, 'Resource Allocation Planning' or 'Logistics Scheduling' are vital value-creating stages to ensure a service can be delivered or a product can be shipped, but they are not direct touchpoints for the stakeholder.
  * **Guiding Principle (The Single Instance Principle):** A value stream must represent the end-to-end flow of a **single case or instance** from an initial **trigger** to a final **outcome**. All stages within the stream must be activities that happen *during the journey of that one instance*.
    * **Crucial Distinction:** This separates operational value streams (which execute repeatedly for each case) from **enabling** value streams (which design or prepare the capabilities needed for operation). Mixing these is a modeling error.
    * **Example:** An 'Order-to-Cash' value stream is triggered by a 'Customer Order' and ends with 'Payment Received'. The stages are `Process Order`, `Ship Product`, `Issue Invoice`. The activity `Design Product` is not part of this stream; it belongs in a separate, enabling 'Idea-to-Product' stream.
  * **Guiding Principle (The Value-Verb Naming Convention for Processes):** To ensure the model consistently separates purpose (`WHY`) from ability (`HOW`), all `BusinessProcess` elements, at every level of the hierarchy (`L0`, `L1`, and `L2`), must adhere to the following naming convention.
    * **Core Rule:** The name must describe a **value-creating transformation** from the stakeholder's perspective. It must be active, outcome-oriented, and start with a strong, value-creating **verb**.
    * **Formula:** `[Verb]` + `[Object of Transformation]`
    * **Forbidden Words:** The name must **NOT** be a noun describing an organizational unit or a generic management activity. You must **strictly avoid** words like: `Management`, `Affairs`, `Services`, `Administration`, `Support`, `Operations`, `Lifecycle`, `Realisation`. These words describe capabilities (`HOW`), not value stream stages (`WHY`).
    * **Generic Multi-Level Example (MANDATORY TO FOLLOW):**
      * **L0 (Value Stream):**
        * INCORRECT: `Customer Lifecycle Management`
        * CORRECT: `Acquire & Serve Customers`
      * **L1 (Stage):**
        * INCORRECT: `Sales & Fulfillment Management`
        * CORRECT: `Convert Prospect to Fulfilled Order`
      * **L2 (Step):**
        * INCORRECT: `Order Processing`
        * CORRECT: `Process Customer Order`

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

### Crucial Architectural Rules

* **Rule 1: Strict Uniqueness and Single Parentage:** This is the most important structural rule. Every element you create must have a unique ID. Furthermore, **it is strictly forbidden for any element to have more than one parent** in the `CompositionRelationship` hierarchy. If you generate two stages with the same name in different value streams (e.g., an "Intake" stage), they **must** be two separate elements with unique IDs. Merging them is a critical error.
* **Hierarchical Coherence (Bottom-Up Derivation):** Transversal relations between elements at `L0` and `L1` are not created independently. They exist **only** as a direct aggregation of relationships between their children at the `L2` level. This rule is the sole mechanism for generating parent-level relationships and ensures model consistency.

### Architecture Generation Process

You will generate the architecture following a highly structured, multi-step process. The guiding principle is that a single, unified **Business Capability hierarchy is the primary organizing structure** of the entire model, which manifests itself through different, independent Value Streams.

#### Phase 1: Bottom-Up Definition of All `L2` Elements

1. **Define `L0` and `L2` Processes:** Define exactly one `L0` `BusinessProcess` (Value Stream) for each of the Core Strategic Goals. Next, generate a comprehensive list of `L2` child processes for these `L0` parents, ensuring a total of **40 to 50** `L2` processes are created across all three `L0` streams. All `BusinessProcess` elements must strictly adhere to the **Value-Verb Naming Convention**. The `L1` process hierarchy is intentionally left undefined at this stage.
   * **Crucial Naming Rule:** All `BusinessProcess` elements you create must strictly adhere to the **Value-Verb Naming Convention** defined in the Core Modeling Philosophy. Furthermore, all processes at the same hierarchical level must have unique names.
2. **Define `L2` Primary Objects:** For each `L2` `BusinessProcess`, you will now define its primary `L2` `BusinessObject`. The is the entity that the process seeks to bring into a valuable state.
3. **Define and Consolidate `L2` Custodial Functions (Capability-Centric Consolidation):** This is the most critical step. You will now define and consolidate the capabilities (`Business Functions`) that act upon the `BusinessObjects`.
   * **Core Principle (The Reusable Ability):** Analyze the complete list of `L2` `[Process, Primary Object]` pairs. Your goal is to identify the underlying, reusable **ability** (`HOW`) required to perform the transformation.
   * **Action:** For each required ability, create **one and only one** `L2` `BusinessFunction`. If multiple, different processes from different value streams require a set of skills and resources to execute that the organization would likely want to manage as a whole, they must all be served by the **same, single, shared `L2` `BusinessFunction`**.
   * **Generic Example (MANDATORY TO FOLLOW):**
     * **Context:** You have identified two pairs:
       1. Process: `Issue B2C Invoice`, Primary Object: `Customer Invoice`.
       2. Process: `Issue B2B Invoice`, Primary Object: `Project Invoice`.
     * **Analysis:** The underlying ability to create, validate, and send both types of invoices requires financial knowledge, systems, and legal compliance checks that the organization would typically want to manage as a whole.
     * **CORRECT (Capability Consolidation):** You must create **one single `L2` `BusinessFunction`** named `Invoice Management`. This single function represents the organization's unified capability for all invoicing activities.
4. **Identify Dependencies Between Primary Capabilities:** Now, analyze the complete list of `L2` Primary Custodial Functions to map their interdependencies. For each primary function, perform the following analysis:
   A. **Identify Required Support:** Ask the question: "To perform its task, does this primary function rely on a significant outcome or service produced by **another primary function**?"
   B. **Focus on Core, Not Generic:** The goal is to identify meaningful, domain-relevant dependencies between core business activities, **not** to define generic utility services.
    * **Good Example:** A `Sales Order Fulfillment` function requires a service from an `Inventory Management` function to check stock levels. Both are core business capabilities.
    * **Bad Example (to avoid):** A `Sales Order Fulfillment` function requires 'Document Management'. This is too generic and should not be modeled at this level.
   C. **Crucial Constraint (No Intra-Stream Support):** A primary `L2` function cannot be identified as supporting another primary `L2` function within the same `L0` value stream.
   D. **Record Dependencies:** For each valid dependency found, note down the pair of `[Consuming Function, Supporting Function]`. This list will be used to create relationships in the next step.
5. **Create All `L2` Relationships:** Based on the elements and dependencies defined in steps 1-4, generate the complete set of `L2` relationships.
   A. **Link Process to Primary Capability (WHY is realized by HOW):** For each `L2` `BusinessProcess`, create a `ServingRelationship` from the `L2` Primary Custodial Function that was identified as its realizer in step 3.
   B. **Link Capability to its Object (HOW transforms WHAT):** For each `L2` Primary Custodial Function, create an `AccessRelationship` to the `L2` Primary `BusinessObject`(s) it is the custodian of (as defined in steps 2 and 3).
   C. **Link Dependent Core Capabilities (Primary HOW depends on other Primary HOW):** For every `[Consuming Function, Supporting Function]` pair recorded in step 4, create a `ServingRelationship` from the Supporting `BusinessFunction` (the provider) to the Consuming `BusinessFunction` (the consumer).
      * **Example:** Based on the analysis in step 4, create a `ServingRelationship` from `Inventory Management` (source) to `Sales Order Fulfillment` (target). This explicitly models that the fulfillment capability requires inventory services to function correctly.

#### Phase 2: Top-Down Structuring of Hierarchies

1. **Define `L0` Enterprise Anchors for Capabilities and Objects:** Before structuring the `L1` hierarchies, you must first define the single, top-level parents for the capability and object models.
   * Create exactly **one** `L0` `BusinessFunction`. This element represents the total, unified capability of the organization to perform its mission.
   * Create exactly **one** `L0` `BusinessObject`. This element represents the single, abstract entity that the organization manages.
2. **Structure the `L1` Capability Hierarchy (The Anchor):** Group the `L2` `BusinessFunction`s into logical `L1` parents based on shared skills, resources, and business logic (e.g., group all payment-related functions under 'Financial Transaction Management'). These `L1` functions will be the direct children of the single `L0` `BusinessFunction` created in the previous step.
3. **Structure the `L1` Object Hierarchy (Mirroring):** Group the `L2` `BusinessObject`s into `L1` parents to **exactly mirror** the `L1` capability hierarchy. The name of the `L1` object should describe the entity being owned and managed by the corresponding `L1` function. These `L1` objects will be the direct children of the single `L0` `BusinessObject`.
   * **Strict Alignment Rule:** The L1 Object hierarchy must not only mirror the L1 Capability hierarchy in name, but also in composition. During the structuring phase, any `AccessRelationship` at `L2` (from `BF-child` to `BO-child`) **may exclusively exist** if the L1 parent of `BF-child` is the designated corresponding parent of the L1 parent of `BO-child`. **Creating cross-hierarchical relationships at the L2 level is strictly forbidden.** This ensures that all `AccessRelationship`s are contained within parallel hierarchical branches, simplifying the subsequent derivation of parent-level relationships.
4. **Structure the `L1` Process Hierarchy (Mirroring):** Group the `L2` `BusinessProcess`es into `L1` parents to **exactly mirror** the `L1` capability hierarchy. The names of these `L1` processes must be a logical aggregation of their children and must strictly adhere to the **Value-Verb Naming Convention**.
5. **Connect to Level 0:** Ensure every `L1` element you have structured in the steps above is correctly linked to its `L0` parent via a `CompositionRelationship`.
   * All `L1` `BusinessProcess`es link to their respective `L0` `BusinessProcess` parent.
   * All `L1` `BusinessFunction`s link to the **single** `L0` `BusinessFunction` parent.
   * All `L1` `BusinessObject`s link to the **single** `L0` `BusinessObject` parent.
6. **Pre-flight Uniqueness and Parentage Check:** Before proceeding to the next phase, you must perform a final verification of the **complete element hierarchy**.
   * **Action:** Scan the full list of elements and their parent-child `CompositionRelationship`s.
   * **Verification 1 (Unique Naming):** Confirm that all `BusinessProcess` elements at the same level (e.g., all `L1` stages across all `L0` streams) have unique names, as instructed in Phase 1.
   * **Verification 2 (Single Parentage):** Confirm that you have strictly adhered to `Rule 1` and that no single element ID has been assigned more than one parent.
   * **Confirmation Statement:** You must explicitly state: **"Verification complete. The full hierarchy is established. All elements have a unique parent, and all same-level stages have unique names."** Only after making this statement can you proceed.

### Phase 3: Derivation, Verification, and Output Generation**

1. **Derive and Verify L1 Access Relationships:**
   A. Create an empty list for `L1 Access Relationships`.
   B. Iterate through **every** `AccessRelationship` at `L2`. For each L2 relationship `[Source: BF-L2-child, Target: BO-L2-child]`:
      i. Identify the `L1` parent of the source (`BF-L1-parent`).
      ii. Identify the `L1` parent of the target (`BO-L1-parent`).
      iii. Add the tuple `(BF-L1-parent, BO-L1-parent)` to the list, if it's not already present.
   C. For every unique tuple in the list, create one `AccessRelationship` in the final model.
   D. **Verification:** As proof of execution, state the total number of `L2` `AccessRelationship`s found and the total number of unique `L1` `AccessRelationship`s derived. Then, list the specific `L2` relationships that led to the creation of the `AccessRelationship` between `BF-L1-1` and `BO-L1-7` (if present).
2. **Derive and Verify `L1` Serving Relationships (between Functions):**
   A. Apply the exact same procedure as in Step 1, but now for all `ServingRelationship`s between `BusinessFunction`s at `L2`.
3. **Derive and Verify `L0` Relationships:**
   A. Apply the same procedure again to derive the `L0` relationships from the generated `L1` relationships.

#### Phase 3: Derivation, Verification, and Output Generation

1. **Derive `L0` and `L1` Relationships:** Systematically apply the **Hierarchical Coherence** rule to create all parent-level transversal relationships as aggregations of the `L2` relationships.
2. **Verification:** Before generating the final tables, demonstrate that you have correctly applied the **Hierarchical Coherence** rule. Pick one `L1` `ServingRelationship` and list the specific `L2` child relationships that caused its creation.
3. **Generate Final Output:** After providing the example, generate the three complete Markdown tables.

## Output Format

Please generate the output as three separate code blocks, each containing the raw content for `elements.csv`, `relations.csv`, and `properties.csv` respectively. The format must be standard CSV, using comma separators, and with all text values enclosed in double quotes. Include a header row in each file.

### `elements.csv` Table

This table must list every single architectural element. Generate a unique `ID` for each element.

```csv
"ID","Type","Name","Documentation"
```

**Column Definitions:**

* **ID:** A unique identifier for the element (e.g., `BP-1`, `BF-1`, `BO-1`).
* **Type:** The specific ArchiMate element type (`BusinessProcess`, `BusinessFunction`, `BusinessObject`).
* **Name:** The human-readable name of the element.
* **Documentation:** A concise description of the element's purpose.

### `relations.csv` Table

This table must define all the relationships between the elements listed in the `elements.csv` table.

```csv
"ID","Type","Name","Documentation","Source","Target","Specialization"
```

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

```csv
"ID","Key","Value"
```

**Column Definitions:**

* **ID:** The `ID` of the element used in the `elements.csv` table.
* **Key:** Per element: use `Level` for the first row, `Code` for the second.
* **Value:** For `Level` put in `0`, `1`, or `2`, based on the element's place in the hierarchy. For `Code`, put in the element's `ID`.
