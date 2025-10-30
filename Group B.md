## Part 2: Procedure

### Step 1: Define the Strategic Foundation (The WHY)

**Objective:** To establish the core of the business model using the principles of Osterwalder's Business Model Canvas, recognizing that a single customer segment may have multiple distinct needs.

1. Identify **2-3 primary, external `Customer Segments`** for the defined sector.
2. For **each** `Customer Segment`, identify its core `Value Propositions`. **Crucial Rule:** For maximum clarity, you must classify each Value Proposition into one of the following three types, based on what the customer ultimately receives:
   * **(a) `Product Proposition`:** The customer receives **ownership** of a tangible or intangible resource. The value is embodied in the final deliverable.
     * *(Generic Example: delivering a physical good, providing a customized report, or developing a piece of software for ownership.)*
   * **(b) `Access Service Proposition`:** The customer receives the temporary **right to use** a resource or platform without owning it. The value lies in the convenient, on-demand access.
     * *(Generic Example: providing subscription access to a software platform, granting rental access to equipment, or offering membership to a content library.)*
   * **(c) `Action Service Proposition`:** The customer receives the **benefit of an activity** performed on their behalf. The value lies in the expertise and execution of a task to achieve a desired outcome.
   * *(Generic Example: executing a professional service like consulting, providing logistical transportation, or performing a maintenance task.)*
3. Present the result as a list where each `Customer Segment` is paired with one or more clearly defined and classified `Value Propositions`.

---

#### **Step 2: Derive and Fully Characterize the Core Value Streams**

**Objective:** To translate each strategic value proposition into a distinct, conceptual value stream, and to define its complete strategic and logical archetype.

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

**Objective:** To break down the high-level value streams into concrete, atomic steps and identify what is being transformed in each step.

1. Take the L0 Value Streams generated in **Step 2**.
2. For each value stream, identify a logical sequence of 8-15 atomic L2 `BusinessProcess` steps.
   * **Naming Rule:** Name the **value-creating** activity from the viewpoint of the stakeholder (e.g., **Correct:** Onboard Customer, **Incorrect:** Complete Registration Form).
3. For **each** L2 step, identify the primary L2 `BusinessObject` it transforms.
   * **Naming Rule:** You must name the **real-world entity**, not its administrative or informational representation (e.g., **Correct:** `Product`, **Incorrect**: `Product Specification`).
4. Present the result as a **single, flat list** of `[L2 Process Name, Primary L2 Object Name, Parent L0 Value Stream Name]` tuples.

---

### Step 4: Discover the Complete Set of Core L2 Capabilities (The HOW)

1. **Discover Primary Capabilities:** Analyze the list from Step 3. For each process step, derive the specific L2 `BusinessFunction` that represents the core business competency required to govern the transformation of its primary business object.
2. **Discover Purely Supporting Capabilities:** Analyze the Primary set and identify new, **purely supporting, domain-specific** L2 `BusinessFunction`s essential for the primary capabilities to function.
3. **Create the Canonical Set:** Combine both sets into one complete list of core capabilities. Map each Primary Capability back to the processes it realizes and the objects it has "custodianship" over.

---

### Step 5: Model the Domain-Specific Support Network

1. This step is about modeling the internal network of dependencies between the core capabilities defined in the canonical set from Step 4.
2. Analyze the complete list of L2 `BusinessProcess` steps and their primary L2 `BusinessFunction`s. For each `[Process, Primary Function]` pair, identify dependencies where the primary function (the "Consumer") requires a critical service from another core capability (the "Provider").
   * **Strict Rule:** You may only model dependencies between capabilities already defined in Step 4. **Creating new capabilities at this stage is strictly forbidden.**
3. For each valid dependency you identify, model a single `ServingRelationship` from the **Provider** L2 `BusinessFunction` to the **Consumer** L2 `BusinessFunction`.

---

### Step 6: Build the Canonical Capability Hierarchy (The ANCHOR)

1. Take the **complete canonical set** of all L2 `BusinessFunction`s from Step 4.
2. Organize all these L2 `BusinessFunction`s into a logical hierarchy under 5-7 newly created L1 `BusinessFunction` parents.
3. Group these L1 `BusinessFunction`s under a single L0 `BusinessFunction`.

---

### Step 7: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

1. **Object Hierarchy:** Create L0/L1 `BusinessObject`s and structure the L2 `BusinessObject`s to exactly mirror the capability hierarchy.
Uitstekend. Dit is een cruciale verfijning die de kwaliteit van de output significant verhoogt. Hieronder vind je de generieke, Engelstalige instructies die je direct in je Design Brief kunt opnemen.
2. **Process Hierarchy:**
   * **Objective:** To structure the L2 process steps into meaningful stages for each L0 Value Stream, using the capability hierarchy as a structural template.
   * **Instructions:**
     1. Retain the original L0 `BusinessProcess` elements, representing the core Value Streams.
     2. For **each** L0 Value Stream, create a set of L1 `BusinessProcess` stages that mirrors the structure of the L1 capability hierarchy. These L1 stages represent the distinct phases of the value stream, categorized by the primary type of capability involved.
     3. Group each L2 `BusinessProcess` step (identified in Step 3) under the appropriate L1 stage **within its original L0 Value Stream**.
     4. **Naming Convention:** The name for each L1 `BusinessProcess` stage must be a composite that clearly identifies both the mirrored L1 capability group and its parent L0 Value Stream. For example, for a value stream named "Order to Cash", a valid L1 stage name reflecting the `Customer Management` capability group would be "**Interact with Customer**".

---

### Step 8: Derive Aggregate Relationships & Generate Final Output

1. **Define Base Relationships (L2) with Strict Rules:** Formally define all L2 transversal relationships based on the following **exclusive** set of rules:
   * **Rule A: `AccessRelationship` (Custodianship):** For each L2 `BusinessObject`, create exactly one `AccessRelationship` originating from the single L2 `BusinessFunction` that was identified as its custodian in Step 4.
   * **Rule B: `ServingRelationship` (Realization):** For each L2 `BusinessProcess`, create a `ServingRelationship` originating from the primary L2 `BusinessFunction` that realizes it (identified in Step 4).
      * **Aggregation Constraint:** You must **not** create reflexive relationships. A reflexive relationship is one where an element is both the source and the target of the relationship. For example, if sub-capabilities within the same L1 capability support each other, this does **not** result in a relationship from the L1 capability to itself. All derived relationships must be between two *different* parent elements.
   * **Rule C: `ServingRelationship` (Support):** Create a `ServingRelationship` for each provider-consumer dependency identified in Step 5.

2. **Derive Aggregate Relationships (L1 & L0):** Execute the derivation algorithm for the three sets of L2 relationships defined above to create their L1 and L0 counterparts.
3. **Verification Step:** Provide a concrete example to prove the derivation was successful.
4. **Generate Final CSV Output:** Consolidate all elements and all relationships (L0, L1, L2, and Composition) into the three final CSV files according to the specified format. Ensure that only the relationship types listed above are present.

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
* **Key:** Per element: use `Level` for the first row, `Code` for the second.
* **Value:** For `Level`, use `0`, `1`, or `2`. For `Code`, use the element's `ID`.
