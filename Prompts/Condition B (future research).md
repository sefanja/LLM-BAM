<!-- Deze variant poogt modelleervariatie terug te brengen met gebruik van bedrijfskundige theorieën. -->
<!-- Niet gebruikt in dit experiment: de theorieën moeten anders worden toegepast dan hier is gedaan, want ze leidden tot slechtere modellen. -->

## Part 2: Procedure

### Step 1: Define the Strategic Foundation

1. Identify **2-3 primary, external `Customer Segments`** for the defined sector.
2. For **each** `Customer Segment`, identify its core `Value Propositions`. **Crucial Rule:** For maximum clarity, you must classify each Value Proposition into one of the following four types, based on the ultimate right the customer receives:
   * **(a) `Idea Proposition`:** Customer receives full ownership of an intellectual concept.
   * **(b) `Product Proposition`:** Customer receives full ownership of a physical or digital good.
   * **(c) `Usage Right Proposition`:** Customer receives a temporary right to use a resource.
   * **(d) `Performance Right Proposition`:** Customer receives the benefit of an activity.
3. Present the result as a list where each `Customer Segment` is paired with one or more clearly defined and classified `Value Propositions`.

---

#### Step 2: Define and Scope the Core Value Streams

1. For each `Value Proposition`, determine its **Output Value Level** using the types from Step 1.
2. For each proposition's context, determine the primary **Input Value Level** the organization starts with.
   * **Constraint:** Standard procurement of supplies does not count as a value level jump.
3. **Apply the Value Stream Scoping Principle:**
   * Analyze the gap between Input and Output levels. A gap of two or more levels indicates a **potential split point**.
   * The final decision to split depends on the **typical customer order decoupling point (CODP)** for the sector.
     * **Rule A (Do Not Split):** If a single customer order typically triggers the entire end-to-end process (**Engineer-to-Order (ETO)** / **Assemble-to-Order (ATO)**), model it as a **single, unified value stream**.
     * **Rule B (Must Split):** If the organization creates an **intermediate, standardized resource to stock** in anticipation of future orders (**Make-to-Stock (MTS)**), you **must split** the value streams at that decoupling point. This "stock" can be physical inventory, a reusable digital asset, or a pre-approved intellectual concept.
4. Define the initial set of customer-facing L0 `BusinessProcess` elements based on this analysis.
5. **Dependency Analysis (Discovering Internal Streams):**
   * For each defined value stream, ask: "Does the execution of this stream depend on a significant, durable internal asset that must be created first?"
   * If yes, define an additional, preceding L0 `BusinessProcess` for the creation of that internal asset.
6. **Characterize All Value Streams:** For every L0 `BusinessProcess` (both external and internal), assign its `Value Stream Pattern (CODP)`.
   * **Choose one:** `ETO`, `ATO`, or `MTS`.
   * **Guiding Principle:** For this reference model, choose the 'deepest' pattern (`ETO` > `ATO` > `MTS`) that is a typical case for the sector, not a rare exception.
   * **Naming Convention:** For split streams, use clear `Verb-Noun` names (e.g., `Create Network Asset`, `Operate Network Service`).
   * Present the final result as a list: `[L0 Value Stream Name, Description, Originating VP, **Value Stream Pattern**]`.

---

#### Step 3: Deconstruct Value Streams into Atomic Process Steps and Objects

1. **Deconstruct Value Streams into Atomic Process Steps:** For each L0 `BusinessProcess`, first determine its delivery target and then deconstruct it into a logical sequence of atomic L2 `BusinessProcess` steps.
   * **A) For streams delivering to an EXTERNAL customer:** Structure the L2 steps into the four phases of the Customer Value Cycle:
     * **Phase 1: Agree:** Steps establishing the binding agreement.
     * **Phase 2: Perform:** Steps executing the primary value-creating activity. This phase should be sub-structured into:
       * **2a. Prepare:** Steps that configure resources for the specific case.
       * **2b. Execute:** The core step(s) of transformation or creation.
       * **2c. Finalize:** Steps that conclude the activity and prepare for delivery.
     * **Phase 3: Counter-Perform:** Steps related to the customer's reciprocal performance.
     * **Phase 4: Aftercare:** Steps for post-delivery support.
   * **B) For streams delivering an INTERNAL asset:** An **asset** is defined here as any durable, non-human resource (physical, digital, or intellectual) created to enable future value streams. Structure the L2 steps into the three phases of the Asset Creation Cycle:
     * **Phase 1: Conceptualize:** Steps defining the asset's requirements and design.
     * **Phase 2: Realize:** Steps for the actual construction or development of the asset.
     * **Phase 3: Deploy:** Steps to make the asset operational and available for use.
2. **Apply Overarching Rules to All Steps:**
   * **Crucial Rule (Business Reality Principle):** Model the business reality, not the data administration of it. All process steps and objects must represent real-world actions, agreements, or assets. Exclude any element that only describes the act of recording or managing data *about* the business.
     * **Example:**
       * **Correct (Business Reality):** "Accept Customer Order" (creates a real `Sales Agreement`).
       * **Incorrect (Data Shadow):** "Enter Order into System" (creates a data `Order Record`).
3. **Classify Each Step and Identify its Primary Object:** For each L2 process step, perform the following:
   1. **Classify the step's primary output** into **one** of the following three universal archetypes. This creates a consistent value ontology for both external and internal processes:
      * **`Commitment Output`:** The step's output is a new, binding **commitment** or entitlement, either formal (e.g., a customer contract) or informal (e.g., an internal work order). This establishes an obligation to provide access or perform an action.
      * **`Resource Output`:** The step's output is a created, transformed, or transported **physical or digital resource**.
      * **`Conceptual Output`:** The step's output is a new **insight, plan, or design**.
   2. **Use this Tie-Breaker Rule for hybrid steps:** If a step's output fits multiple categories, classify it according to this hierarchy: **1. `Commitment` > 2. `Resource` > 3. `Conceptual`**. This correctly prioritizes the creation of a binding obligation over the physical work or the preceding design work.
   3. **Identify the primary L2 `BusinessObject`** created or transformed by the step, ensuring its name is consistent with the chosen classification.
      * **Crucial Naming Rule (The 'Valuable Entity' Principle):** You must name the actual, valuable entity in the real world, not its administrative container Apply this Litmus Test to every object name:
         * Does the name describe the valuable **agreement, status, or right** itself? (e.g., `Sales Agreement`)
         * Or does it describe the **data container** that holds information *about* it? (e.g., `Order Record`, `Customer File`)
4. **Present the Result as a Structured List:** Present the result as a **single, flat list** of `[L2 Process Name, Primary L2 Object Name, Parent L0 Value Stream Name]` tuples.

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
2. **Focus exclusively on the core, value-creating and value-exchanging capabilities.** All generic, internal supporting capabilities (like generic HR, Finance, or IT management) are considered out of scope.
3. Organize the core L2 `BusinessFunction`s under L1 parent capabilities, using the following structured approach:
   1. **Use the three universal layers as the primary *categorization principle*** for your L1 capabilities.
      * **Layer 1 (The Customer Interface):** Contains capabilities managing interaction and value exchange with customers.
      * **Layer 2 (The Core Engine):** Contains capabilities forming the core "engine" of value creation.
      * **Layer 3 (The Supplier Interface):** Contains capabilities managing interaction and value exchange with suppliers and partners.
   2. **For each universal layer, identify the primary, coherent *management domains*.** A management domain is a collection of L2 capabilities that an organization would logically want to manage as a single unit due to shared strategic goals, competencies, resources, or a common lifecycle.
   3. **For each identified domain, create a distinct L1 `BusinessFunction`.**
   4. **Crucial Naming Rule:** For each L1 `BusinessFunction`, you must generate a **sector-specific and recognizable name** that accurately reflects its purpose. Do not use the generic archetype names.
   5. **Group the relevant L2 `BusinessFunction`s** from the canonical set under the appropriate L1 parent.
   6. **Layer Classification Rule:** For each L1 `BusinessFunction` you create, you must classify it by assigning it to exactly one of the three universal layers (`Customer Interface`, `Core Engine`, or `Supplier Interface`). This classification will be used to generate a property in the final output.
4. Group all L1 `BusinessFunction`s under a single L0 `BusinessFunction`.
   * **Crucial L0 Naming Rule:** This L0 `BusinessFunction` must reflect the organization's core value-creating function.

---

### Step 6: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

1. **Object Hierarchy:** Create L0/L1 `BusinessObject`s and structure the L2 `BusinessObject`s to exactly mirror the capability hierarchy.
   * **Crucial Naming Rule:** Name each L0/L1 object as a conceptual, singular noun. Avoid overly generic or abstract terms like 'Asset', 'Record', or 'Object' at the L0 and L1 levels. The name should be meaningful within the sector's context.
     * **Example:** If L2 objects are `Sales Quote` and `Sales Order`, the L1 parent should be `Sales Agreement`, not `Sales Objects`.
2. **Process Hierarchy:**
   * **Objective:** To structure the L2 process steps into meaningful stages for each L0 Value Stream, using the capability hierarchy as a structural template.
   * **Instructions:**
     1. Retain the original L0 `BusinessProcess` elements, representing the core Value Streams.
     2. For **each** L0 Value Stream, create a set of L1 `BusinessProcess` stages that mirrors the structure of the L1 capability hierarchy. These L1 stages represent the distinct phases of the value stream, categorized by the primary type of capability involved.
     3. Group each L2 `BusinessProcess` step (identified in Step 3) under the appropriate L1 stage **within its original L0 Value Stream**.
     4. **Naming Convention:** The name for each L1 `BusinessProcess` stage must be a composite that clearly identifies both the mirrored L1 capability group and its parent L0 Value Stream. For example, for a value stream named "Order to Cash", a valid L1 stage name reflecting the `Customer Management` capability group would be "**Interact with Customer**".

---

### Step 7: Derive All Relationships & Generate Final Output

**Crucial Principle for this Step (Strict Scoping):** The only relationships permitted in the final model are those explicitly generated by the strict rules defined below. You must not infer, add, or create any other relationships, especially those that cross hierarchical levels (e.g., from an L1 element to an L2 element).

1. **Define Base Relationships (L2) with Strict Rules:** Formally define all L2 transversal relationships based on the following **exclusive** set of rules:
   * **Rule A: `AccessRelationship` (Custodianship):** For each L2 `BusinessObject`, create exactly one `AccessRelationship` originating from the single L2 `BusinessFunction` that was identified as its custodian in Step 4.
   * **Rule B: `ServingRelationship` (Realization):** For each tuple in the **'Capability-to-Process Links' list from Step 4.4.1**, create a `ServingRelationship` from the capability to the process.
   * **Rule C: `ServingRelationship` (Support):** For each tuple in the **'Capability-to-Capability Links' list from Step 4.4.2**, create a `ServingRelationship` from the Provider to the Consumer.
2. **Derive Aggregate Relationships (L1 & L0) with a Formal Algorithm:** Execute the following layered derivation algorithm precisely and completely.
   * **Part A: Derive L1 Relationships.**
     * For every pair of L1 parent elements (e.g., `L1 Parent A`, `L1 Parent B`), you **must** create an aggregate relationship from `L1 Parent A` to `L1 Parent B` **if, and only if**, at least one valid base relationship of the same type exists between any of their respective L2 child elements.
   * **Part B: Derive L0 Relationships.**
     * After completing Part A, for every pair of L0 parent elements (e.g., `L0 Parent X`, `L0 Parent Y`), you **must** create an aggregate relationship from `L0 Parent X` to `L0 Parent Y` **if, and only if**, at least one valid L1 relationship (derived in Part A) of the same type exists between any of their respective L1 child elements.
   * **Aggregation Constraint:** All derived relationships must be between two different parent elements.
**3. Define Composition Relationships:** Formally define each `CompositionRelationship` between a parent and its child, based on the hierarchy established in Step 5 and 6.
**4. Mandatory Verification Step (Prove the Derivation):** To prove the derivation algorithm was executed correctly, you must provide **one concrete example** of a derived `ServingRelationship`.
   * **Instructions:**
     1. Select one L2 `ServingRelationship` from your analysis in Step 4.
     2. Identify the L1 parents of both the source and target L2 elements.
     3. State the derived L1 `ServingRelationship` that must exist between these parents.
     4. Identify the L0 parents of both L1 elements.
     5. State the derived L0 `ServingRelationship` that must exist between these L0 parents.
     * **Present this trace clearly as proof of correct execution.**
**5. Generate Final CSV Output:** Consolidate all elements and all relationships (L0, L1, L2, and Composition) into the three final CSV files according to the specified format.

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
4. **L1 Capabilities (L1 `BusinessFunction`):** In addition to the base properties, every L1 `BusinessFunction` element must have one additional property:
   * A property with `Key` = "Capability Layer" and `Value` = the name of the universal layer it was assigned to in Step 5 (one of: `Customer Interface`, `Core Engine`, `Supplier Interface`).
