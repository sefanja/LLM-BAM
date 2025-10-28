# Group B

## Part 2: Generic Generation Instructions

**Objective:** Generate a complete reference business architecture for the sector defined in Part 1, following a strict "Anchor and Mirror" methodology that models the contextual roles of core capabilities.

**Guiding Principle:** You will first deconstruct value streams to discover a set of primary capabilities. You will then enrich this set with purely supporting, domain-specific capabilities. This complete, canonical set will form the structural "anchor" for the entire model.

---

### Step 1: Deconstruct Value Streams into Atomic Process Steps and Objects (The WHY & WHAT)

1. For each of the three L0 Value Streams defined in Part 1, identify a logical sequence of 8-15 atomic L2 `BusinessProcess` steps.
2. For **each** step, identify the primary `BusinessObject` it transforms.
3. Present the result as a **single, flat list** of `[L2 Process Name, Primary L2 Object Name, Parent L0 Value Stream Name]` tuples.

---

### Step 2: Discover the Complete Set of Core L2 Capabilities (The HOW)

**2a. Discover Primary Capabilities:** Analyze the list from Step 1 and derive the unique, consolidated set of L2 `BusinessFunction`s that **primarily realize** these process steps.
**2b. Discover Purely Supporting Capabilities:** Analyze the Primary set and identify new, **purely supporting, domain-specific** L2 `BusinessFunction`s essential for the primary capabilities to function.
**2c. Create the Canonical Set:** Combine both sets into one complete list of core capabilities. Map each Primary Capability back to the processes it realizes and the objects it has "custodianship" over.

---

### Step 3: Build the Canonical Capability Hierarchy (The ANCHOR)

1. Take the **complete canonical set** of all L2 `BusinessFunction`s from Step 2.
2. Organize all these L2 `BusinessFunction`s into a logical hierarchy under 5-7 newly created L1 `BusinessFunction` parents.
3. Group these L1 `BusinessFunction`s under a single L0 `BusinessFunction` named "[Sector Type] Operations".

---

### Step 4: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

1. **Object Hierarchy:** Create L0/L1 `BusinessObject`s and structure the L2 `BusinessObject`s to exactly mirror the capability hierarchy.
Uitstekend. Dit is een cruciale verfijning die de kwaliteit van de output significant verhoogt. Hieronder vind je de generieke, Engelstalige instructies die je direct in je Design Brief kunt opnemen.
2. **Process Hierarchy:**
   * **Objective:** To structure the L2 process steps into meaningful stages for each L0 Value Stream, using the capability hierarchy as a structural template.
   * **Instructions:**
     1. Retain the original L0 `BusinessProcess` elements, representing the core Value Streams.
     2. For **each** L0 Value Stream, create a set of L1 `BusinessProcess` stages that mirrors the structure of the L1 capability hierarchy. These L1 stages represent the distinct phases of the value stream, categorized by the primary type of capability involved.
     3. Group each L2 `BusinessProcess` step (identified in Step 1) under the appropriate L1 stage **within its original L0 Value Stream**.
     4. **Naming Convention:** The name for each L1 `BusinessProcess` stage must be a composite that clearly identifies both the mirrored L1 capability group and its parent L0 Value Stream. For example, for a value stream named "Order to Cash", a valid L1 stage name reflecting the `Customer Management` capability group would be "**Interact with Customer**".

---

### Step 5: Model the Domain-Specific Support Network

1. This step is about modeling the internal network of dependencies between the core capabilities defined in the canonical set from Step 2.
2. Analyze the complete list of L2 `BusinessProcess` steps and their primary L2 `BusinessFunction`s. For each `[Process, Primary Function]` pair, identify dependencies where the primary function (the "Consumer") requires a critical service from another core capability (the "Provider").
3. **Strict Rule:** You may only model dependencies between capabilities already defined in Step 2. **Creating new capabilities at this stage is strictly forbidden.**
4. For each valid dependency you identify, model a single `ServingRelationship` from the **Provider** L2 `BusinessFunction` to the **Consumer** L2 `BusinessFunction`.

---

### Step 6: Derive Aggregate Relationships & Generate Final Output

1. **Define Base Relationships (L2) with Strict Rules:** Formally define all L2 transversal relationships based on the following **exclusive** set of rules:
   * **Rule A: `AccessRelationship` (Custodianship):** For each L2 `BusinessObject`, create exactly one `AccessRelationship` originating from the single L2 `BusinessFunction` that was identified as its custodian in Step 2.
   * **Rule B: `ServingRelationship` (Realization):** For each L2 `BusinessProcess`, create a `ServingRelationship` originating from the primary L2 `BusinessFunction` that realizes it (identified in Step 2).
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
