<!-- INSERT HEADER HERE -->

## Part 2: Modeling Procedure

### Step 1: Deconstruct Value Streams into Granular Elements and Objects

1. Deconstruct each L0 `ValueStream` into a logical sequence of L2 `ValueStreams` (stages). Aim for a level of granularity where each stage represents a distinct, significant milestone. The total number of stages should be sufficient to tell the complete end-to-end story, which for a complex stream is typically between 8 and 15 stages.
   * **Guideline for Completeness:** When defining the sequence of stages for a customer-facing value stream, ensure you consider the full lifecycle, which typically includes:
     * **Engagement & Acquisition:** Initial contact, qualification, and agreement.
     * **Core Value Delivery:** The central activities the customer is paying for.
     * **Counter-Performance:** Securing the reciprocal value from the customer (e.g., `Process Payment`, `Collect Premium`).
     * **After-Care & Support:** Post-delivery support and issue resolution.
2. **Apply the Overarching Principles to All Elements and Objects:**
   * **Crucial Principle 1 (Business Reality):** Model the business reality, not its data administration. L2 `ValueStreams` must represent real-world actions.
   * **Crucial Principle 2 (Valuable Entity):** For each L2 `ValueStream`, identify the primary L2 `BusinessObject` that is created or transformed. **You must name the actual, valuable entity in the real world, not its administrative container.**
     * **Litmus Test:** Does the name describe the valuable **agreement, status, or resource** itself? Or does it describe the **data container** that holds information *about* it?
     * **Example:**
     * **Correct (Valuable Entity):** An L2 `ValueStream` "Establish Agreement" creates the object `Service Agreement`.
     * **Incorrect (Data Shadow):** An L2 `ValueStream` "Enter Agreement in System" creates the object `Agreement Record`.
3. Present the result as a **single, flat list** of `[L2 Value Stream Name, Primary L2 Object Name, Parent L0 Value Stream Name]` tuples.

---

### Step 2: Discover the Complete Set of Capabilities and their Objects

1. For each L2 `ValueStream`, define its realizing L2 `Capability` using this **Scoping Rule**:
   * **Rule:** A capability must be specific enough to realize only one stage per value stream, yet generic enough to be **reusable in other contexts**.
   * **Reminder:** Adhere to the `Primary Architectural Goal` of creating a reusable, capability-centric architecture as defined in Part 1.
   * **Example:** The stage "Collect Payment for Product" is realized by Invoicing & Collection Management. This same capability is reused to realize the "Collect Fee for Service" stage in a completely different value stream.
2. Create a complete list of all core capabilities through dependency analysis:
   * Start with the capabilities that realize the value stream stages.
   * For each capability on your list, ask: "What other core business ability is essential for this to function?" Add these dependencies to your list.
   * **Crucially:** If you add a new capability to the list, you must also perform the dependency analysis for that new capability. Continue this expansion until no new capabilities are discovered.
   * **Constraint:** Only define capabilities specific to the core business model of the sector; avoid generic administrative capabilities (e.g., 'HR Management').
   * **Directional Principle:** The conceptual support link always points towards the capability that is 'closer' to the tangible value for the end customer. This means support flows from strategic or policy-setting capabilities to the operational capabilities that execute the core work. For example, a policy-setting capability (like `Pricing Management`) supports an operational one (like `Order Management`).
3. **Create the Canonical Set:** Combine all unique capabilities into a single, canonical list of L2 `Capability`s. Formally assign each L2 `BusinessObject` to the `Capability` that has custodianship over it.
4. **Identify and List Conceptual Links:** Generate two flat lists of tuples to serve as input for relationship modeling:
   1. **Capability-to-ValueStream Links:** `[L2 Capability Name, L2 Value Stream Name]` (for each L2 `ValueStream` and its realizing `Capability`).
   2. **Capability-to-Capability Links:** `[Provider L2 Capability Name, Consumer L2 Capability Name]` (for each support relationship identified).

---

### Step 3: Build the Canonical Capability Hierarchy (The ANCHOR)

1. Take the **complete canonical set** of L2 `Capabilities` from Step 2.
2. Group the L2 `Capabilities` under **one or more** L1 `Capabilities`. Each L1 must represent a coherent management domain with a distinct strategic purpose. Its name must be a **sector-specific, recognizable verb-noun phrase** that describes the core activity. Strive for active, descriptive verbs beyond just 'Manage' where appropriate (e.g., 'Acquire & Retain Customers', 'Fulfill Client Orders').
3. Group all L1 `Capabilities` under a single L0 `Capability`. Its name must be a verb-noun phrase that describes the organization's core value-creating activity.

---

### Step 4: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

1. **Object Hierarchy:** Create L0/L1 `BusinessObjects` and structure the L2 `BusinessObjects` so the hierarchy **exactly** mirrors the `Capability` hierarchy.
   * **Naming Rule:** Name L0/L1 objects as conceptual, singular nouns that are meaningful within the sector.
2. **Value Stream Hierarchy:**
   * Retain the original L0 `ValueStreams`.
   * Within **each** L0 `ValueStream`, create a set of L1 `ValueStream` stages that mirrors the structure of the L1 `Capability` hierarchy.
   * Group each L2 `ValueStream` under the appropriate L1 stage within its original L0 `ValueStream`.
   * **Naming Convention:** Name L1 `ValueStream` stages to reflect both the mirrored capability and the parent stream (e.g., for a L0 stream 'Develop to Deliver', a valid L1 stage mirroring the `Perform Core Operations` capability group would be '**Execute Core Activity**').

---

### Step 5: Derive Relationships & Generate Final Output

1. **Define Base Relationships (L2):** Formally define all L2 relationships based on the analysis from Step 2.
   * `AssociationRelationship`: From an L2 `Capability` to the L2 `BusinessObject` it has custodianship over.
   * `ServingRelationship`: From a `Capability` to a `ValueStream` (realization) or to another `Capability` (support), based on the lists from Step 2.4.
2. **Derive Aggregate Relationships (L1 & L0):** Rigorously apply the following single rule to ensure internal consistency.
   * **The Derivation Rule:** An aggregate relationship at a higher level (L1, L0) is created **if, and only if,** at least one underlying relationship of the same type and direction exists between their respective child elements.
   * **Exception:** Do not create self-referencing relationships where the source and target are the same element (e.g., an L0 capability serving itself).
3. **Define Composition Relationships:** Define all `CompositionRelationships` between parents and children in the hierarchies.
4. **Mandatory Verification Step A:** Prove the correct application of the derivation rule with **one concrete example**.
   * Select one L2 `ServingRelationship`.
   * Identify the L1 parents of the source and target.
   * State the derived L1 `ServingRelationship`.
   * Identify the L0 parents of the L1 elements.
   * State the derived L0 `ServingRelationship`.
5. **Mandatory Verification Step B:** Repeat the previous step, but this time for the `AssocationRelationships`.
6. **Mandatory Verification Step C:** Finally, repeat the process for `ServingRelationships` between capabilities and value streams.
   * Select one L2 `ServingRelationship` from a `Capability` to a `ValueStream`.
   * Identify the L1 parents of the source capability and the target value stream stage.
   * State the derived L1 `ServingRelationship` that must be present in the output.
7. **Generate Final CSV Output:** Consolidate all elements and relationships into the three specified CSV files.

<!-- INSERT FOOTER HERE -->