## Part 2: Procedure

### Step 1: Define the Strategic Foundation (The WHY)

1. Identify **2-3 primary, external `Customer Segments`** for the defined sector.
2. For **each** `Customer Segment`, identify its core `Value Propositions`. **Crucial Rule:** For maximum clarity, you must classify each Value Proposition into one of the following three types, based on what the customer ultimately receives:
   * **(a) `Product Proposition`:** Customer receives **ownership** of a resource. (e.g., a delivered report, a piece of software).
   * **(b) `Access Service Proposition`:** Customer receives temporary **right to use** a resource. (e.g., SaaS subscription, equipment rental).
   * **(c) `Action Service Proposition`:** Customer receives the **benefit of an activity**. (e.g., a consulting service, a maintenance task).
3. Present the result as a list where each `Customer Segment` is paired with one or more clearly defined and classified `Value Propositions`.

---

#### Step 2: Derive and Fully Characterize the Core Value Streams

1. For **each individual** `Value Proposition` identified in Step 1, define one unique L0 `BusinessProcess` that represents the complete value stream.
2. **Crucial Design Choices (The Archetype Rules):** For each value stream, you must now fully characterize its archetype by making two distinct strategic choices:
   * **Choice A: The `Value Chain Starting Point`:** Define where in the broader value system this value stream begins. Choose **one**:
     * **`Creator`:** The value stream starts from basic inputs to create a fundamentally new product/service.
     * **`Integrator`:** The value stream starts by combining complex components or services from external suppliers.
     * **`Distributor`:** The value stream starts with finished products/services from others to make them accessible to customers.

   * **Choice B: The `Value Stream Pattern (CODP)`:** Define how the value stream is triggered by customer demand. Choose **one**:
     * **`Make-to-Stock (MTS) Pattern`:** Value is created in anticipation of customer orders.
     * **`Assemble-to-Order (ATO) Pattern`:** Final value configuration is triggered by a customer order.
     * **`Engineer-to-Order (ETO) Pattern`:** Almost all value creation is triggered by a customer order.
3. **Strict Rule (Starreveld's Value Cycle):** Ensure each value stream still describes a complete value cycle (Agree, Perform, Counter-perform).
4. Present the result as a list with the following structure: `[L0 Value Stream Name, Description, Originating VP, **Starting Point**, **Value Stream Pattern**]`.

---

#### Step 3: Deconstruct Value Streams into Atomic Process Steps and Objects

1. **Identify the Atomic L2 Process Steps:** For each L0 `BusinessProcess`, identify a logical sequence of 8-15 atomic L2 `BusinessProcess` steps that directly contribute to the value proposition for the external stakeholder.
   * **Crucial Granularity Rule:** Define capabilities as distinct, atomic competencies, not broad functions. A single capability can realize steps in different value streams, but should not cover many unrelated steps within one stream.
     * **Example:** Instead of one broad `Order Management` capability, define specific ones like `Order Capture`, `Price Calculation`, and `Fulfillment Scheduling`.
   * **Crucial Single Case Rule:** The sequence must describe the journey of a **single case** (e.g., one customer order) from its external trigger. Exclude all preparatory, design, or portfolio management steps.
   * **Crucial Business Reality Rule:** Model the business reality, not the data administration of it. All process steps and objects must represent real-world actions, agreements, or assets. Exclude any element that only describes the act of recording or managing data *about* the business.
     * **Example:**
       * **Correct (Business Reality):** "Accept Customer Order" (creates a real `Sales Agreement`).
       * **Incorrect (Data Shadow):** "Enter Order into System" (creates a data `Order Record`).
2. **Classify Each Step and Identify its Primary Object:** For each L2 process step, perform the following:
   1. **Classify the step's primary purpose** into **one** of the following categories.
      * **Transactional:** Creates a new, binding **agreement** between parties.
      * **Analytical/Cognitive:** Creates a new **insight, plan, or design**.
      * **Operational/Delivery:** Creates, transforms, or transports a **physical or digital resource**.
   2. **Use this Tie-Breaker Rule for hybrid steps:** If a step fits multiple categories, classify it according to this hierarchy: **1. Transactional > 2. Operational > 3. Analytical**.
   3. **Identify the primary L2 `BusinessObject`** created or transformed by the step, consistent with its classification.
      * **Naming Rule:** Name the **real-world entity**, not its administrative or informational representation.
3. **Present the Result as a Structured List:** Present the result as a **single, flat list** of `[L2 Process Name, Primary L2 Object Name, Parent L0 Value Stream Name]` tuples.

---

#### Step 4: Discover the Complete Set of L2 Capabilities and their Objects

1. **Identify Process-Realizing Capabilities:** For each L2 `BusinessProcess` from Step 3, define its corresponding L2 `BusinessFunction`. This function governs the transformation of the process's primary `BusinessObject`.
2. **Identify Capabilities and Their Objects in Supporting Roles:** The objective is to discover the capabilities that enable the process-realizing capabilities to function, and to identify the business objects they manage.
   1. For each L2 `BusinessFunction` identified in Step 4.1, determine if it requires a **critical** service from another core capability to function effectively. This identifies the *need* for a **"Supporting Role"**.
   2. For each identified need, define the capability with the primary L2 `BusinessObject` it has custodianship over, that fulfills this supporting role. You may:
      * **Reuse an existing capability:** A capability identified in Step 4.1 can act in a supporting role for another.
      * **Define a new capability:** If no existing capability fits, define a new one.
      * **Constraint:** Only define new supporting capabilities if they are specific to the core business model, not generic administrative functions (e.g., avoid generic 'HR Management').
   3. Repeat the two steps above, but this time start with the capabilities in supporting roles. Do this iteratively, until no **core, domain-specific** capabilities can be usefully identified.
3. **Create the Canonical Set and Assign Custodianship:** Combine all unique capabilities from Step 4.1 and 4.2 into a single, canonical list of L2 `BusinessFunction`s and formally assign custodianship for every L2 `BusinessObject`. This defines the `AccessRelationship` from the capability to the object.
   * **Strict Custodianship Rule:**
     * Assign each object from Step 3 to the 'Process-Realizing' capability that transforms it.
   * Assign each new object from Step 4.2 to the new supporting capability it was created with.
4. **Identify and List Conceptual Links:** Create structured lists of all conceptual links discovered during the analysis, which will serve as the direct input for relationship formalization in Step 8. Present the results of the analysis as two distinct, flat lists of tuples:
   1. **Create a list of Capability-to-Process Links:**
      * **Format:** `[L2 BusinessFunction Name, L2 BusinessProcess Name]`
      * **Content:** For each L2 `BusinessProcess`, create one tuple pairing it with the L2 `BusinessFunction` that was identified as its realizer in Step 4.1.
   2. **Create a list of Capability-to-Capability Links:**
      * **Format:** `[Provider L2 BusinessFunction Name, Consumer L2 BusinessFunction Name]`
      * **Content:** For each support need identified in Step 4.2, create one tuple identifying the Provider (the capability in the Supporting Role) and the Consumer (the capability being supported).

---

### Step 5: Build the Canonical Capability Hierarchy (The ANCHOR)

1. Take the **complete canonical set** of all L2 `BusinessFunction`s from Step 4.
2. Organize all these L2 `BusinessFunction`s into a logical hierarchy under 5-7 newly created L1 `BusinessFunction` parents.
3. Group these L1 `BusinessFunction`s under a single L0 `BusinessFunction`.

---

### Step 6: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

1. **Object Hierarchy:** Create L0/L1 `BusinessObject`s and structure the L2 `BusinessObject`s to exactly mirror the capability hierarchy.
   * **Crucial Naming Rule:** Name each L0/L1 object as a conceptual, singular noun. Avoid generic suffixes like "Objects".
     * **Example:** If L2 objects are `Sales Quote` and `Sales Order`, the L1 parent should be `Sales Agreement`, not `Sales Objects`.
2. **Process Hierarchy:**
   * **Objective:** To structure the L2 process steps into meaningful stages for each L0 Value Stream, using the capability hierarchy as a structural template.
   * **Instructions:**
     1. Retain the original L0 `BusinessProcess` elements, representing the core Value Streams.
     2. For **each** L0 Value Stream, create a set of L1 `BusinessProcess` stages that mirrors the structure of the L1 capability hierarchy. These L1 stages represent the distinct phases of the value stream, categorized by the primary type of capability involved.
     3. Group each L2 `BusinessProcess` step (identified in Step 3) under the appropriate L1 stage **within its original L0 Value Stream**.
     4. **Naming Convention:** The name for each L1 `BusinessProcess` stage must be a composite that clearly identifies both the mirrored L1 capability group and its parent L0 Value Stream. For example, for a value stream named "Order to Cash", a valid L1 stage name reflecting the `Customer Management` capability group would be "**Interact with Customer**".

---

### Step 7: Derive Aggregate Relationships & Generate Final Output

1. **Define Base Relationships (L2) with Strict Rules:** Formally define all L2 transversal relationships based on the following **exclusive** set of rules:
   * **Rule A: `AccessRelationship` (Custodianship):** For each L2 `BusinessObject`, create exactly one `AccessRelationship` originating from the single L2 `BusinessFunction` that was identified as its custodian in Step 4.
   * **Rule B: `ServingRelationship` (Realization):** For each tuple in the **'Capability-to-Process Links' list from Step 4.4.1**, create a `ServingRelationship` from the capability to the process.
   * **Rule C: `ServingRelationship` (Support):** For each tuple in the **'Capability-to-Capability Links' list from Step 4.4.2**, create a `ServingRelationship` from the Provider to the Consumer.
2. **Derive Aggregate Relationships (L1 & L0):** Execute a formal, layered derivation algorithm:
   * **Part A: Derive L1 Relationships.** Create an aggregate relationship between two L1 parent elements **if, and only if**, at least one valid base relationship of the **same type** exists between any of their respective L2 child elements.
   * **Part B: Derive L0 Relationships.** After completing Part A, create an aggregate relationship between two L0 parent elements **if, and only if**, at least one valid L1 relationship (derived in Part A) of the same type exists between any of their respective L1 child elements.
   * **Aggregation Constraint:** All derived relationships must be between two different parent elements.
3. **Define Composition Relationships:** Formally define each `CompositionRelationship` between a parent and its child, based on the hierarchy established in Step 5 and 6.
4. **Verification Step:** Provide a concrete example to prove the derivation was successful.
5. **Generate Final CSV Output:** Consolidate all elements and all relationships (L0, L1, L2, and Composition) into the three final CSV files according to the specified format.

**Output Format Specifications:**

Generate the output as three separate code blocks, each containing the raw content for `elements.csv`, `relations.csv`, and `properties.csv` respectively. The format must be standard CSV, using comma separators, and with all text values enclosed in double quotes. Include a header row in each file.

**`elements.csv` Table**

```csv
"ID","Type","Name","Documentation"
```

* **ID:** A unique identifier for the element.
* **Type:** The specific ArchiMate element type (`BusinessProcess`, `BusinessFunction`, `BusinessObject`).
* **Name:** The human-readable name of the element.
* **Documentation:** A concise description of the element's purpose.

**`relations.csv` Table**

```csv
"ID","Type","Name","Documentation","Source","Target","Specialization"
```

* **ID:** Leave empty.
* **Type:** The ArchiMate relationship type. Use **only**: `CompositionRelationship`, `ServingRelationship`, `AccessRelationship`.
* **Name:** Leave empty.
* **Documentation:** Leave empty.
* **Source:** The `ID` of the source element.
* **Target:** The `ID` of the target element.
* **Specialization:** Leave empty.

**`properties.csv` Table**

```csv
"ID","Key","Value"
```

* **ID:** The `ID` of the element from `elements.csv`.
* **Key:** The name of the property.
* **Value:** The value of the property.

**Property Assignment Rules:**

1. **All Elements:** Every element must have the following two properties:
   * A property with `Key` = "Level" and `Value` = the element's hierarchy level (`0`, `1`, or `2`).
   * A property with `Key` = "Code" and `Value` = the element's unique `ID`.
2. **L0 Value Streams (L0 `BusinessProcess`):** In addition to the above, every L0 `BusinessProcess` element must have the following properties derived from the strategic analysis in Step 2:
   * A property with `Key` = "Value Proposition" and `Value` = the full description of the originating Value Proposition.
   * A property with `Key` = "Starting Point" and `Value` = the chosen value (`Creator`, `Integrator`, or `Distributor`).
   * A property with `Key` = "Value Stream Pattern" and `Value` = the chosen value (`MTS`, `ATO`, or `ETO`).

3. **L2 Process Steps (L2 `BusinessProcess`):** In addition to the base properties, every L2 `BusinessProcess` element must have one additional property:
   * A property with `Key` = "Sequence" and `Value` = a number indicating its sequential position within its parent L0 Value Stream (starting from "1" for each stream).
