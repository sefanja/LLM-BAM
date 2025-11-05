<!-- INSERT HEADER HERE -->

## Part 2: Modeling Procedure

### Step 1: Deconstruct Value Streams into Granular Stages and Objects

1. Deconstruct each L0 `ValueStream` into a logical sequence of L2 `ValueStream` stages.
   * **Granularity:** Aim for a level of granularity where each stage represents a distinct, significant milestone. The total number is typically between 8 and 15 stages.
   * **Completeness:** For a customer-facing value stream, ensure you consider the full lifecycle, which includes:
     * **Engagement & Acquisition:** Initial contact, qualification, and agreement.
     * **Core Value Delivery:** The central activities the customer is paying for.
     * **Counter-Performance:** Securing the reciprocal value from the customer (e.g., `Process Payment`, `Collect Premium`).
     * **After-Care & Support:** Post-delivery support and issue resolution.
2. For **each** L2 `ValueStream` stage you just identified, determine the primary L2 `BusinessObject` it creates or transforms.
   * **Valuable Entity Rule:** You must name the actual, valuable entity in the real world (e.g., `Customer Relationship` or `Customer`), not the information *about* it (e.g., `Customer Record`). Focus on business reality, not IT. Ask yourself: Does this object name describe a **data container** that points to a more 'real' thing in the world?
3. Present the result as a **single, flat list** of `[L2 Value Stream Name, Primary L2 Object Name, Parent L0 Value Stream Name]` tuples.

---

#### Step 2: Discover the Complete Set of Core L2 Capabilities and Their Objects via Iterative Expansion

**Guiding Principle for this Step: The Capability Naming Convention**
For all capabilities generated in this step, you must adhere to the **Verb-Plural Noun** convention to represent a general, reusable potential.

* **Correct:** `Establish Customer **Relationships**`, `Develop New **Products**`, `Secure Supplier **Agreements**`.
* **Incorrect:** `Customer Relations **Management**`, `Execute **Project**` (uses singular).

---
**Methodology: Iterative Expansion**
We will discover the complete set of capabilities in a controlled, iterative process. We start with the capabilities that directly manifest in the value streams, and then perform two expansion rounds to uncover the full network of dependencies.

---
**Procedure:**

1. **Discover Primary Capabilities (S0):**
    * Revisit the list of L2 `ValueStream` stages and their `BusinessObject`s from **Step 1**.
    * For each `[L2 ValueStream, L2 BusinessObject]` pair, define the primary L2 `Capability`.
      * **Crucial Rule for Granularity:** You must define capabilities at a level of abstraction that balances reusability with specificity. To achieve this, apply the following two principles in tandem:
        * **Principle A (Cross-Stream Reusability):** The capability name must be generic enough to be potentially reusable across **different** value streams.
          * **Example:** `Assess Credit Risks` is a good capability because it's reusable for home loans, car loans, and business loans.
        * **Principle B (Single-Stage Focus):** The capability must be specific enough that it is the primary driver for at most **one** stage **within the same L0 value stream**.
          * **Litmus Test:** If you are tempted to assign the same capability to multiple stages of the same L0 value stream (e.g., assigning `Manage Customer Orders` to both "Receive Order" and "Dispatch Order"), your capability is too broad. You must define more granular capabilities instead (e.g., `Process Incoming Orders` and `Manage Outbound Shipments`).
    * This gives you the initial set of capabilities, `S0`, and their primary `BusinessObject`s.

2. **First Expansion (Discover Direct Supporters, S1):**
   * Systematically analyze the list of **`S0`** capabilities you just created.
   * For **each** `S0` capability, identify its **1-3 most critical**, not-yet-discovered supporting capabilities, but allow for a justified **0**.
   * **Golden Rule:** For each **new** capability you discover in this step (the `S1` set), you must **immediately** define its primary L2 `BusinessObject`.
   * *Constraint: Avoid generic administrative capabilities such as "Manage Finance" or "Manage Human Capital".*

3. **Second Expansion (Discover Deeper Supporters, S2):**
   * Now, systematically analyze the list of **newly discovered `S1`** capabilities from the previous step.
   * For **each** `S1` capability, identify its **1-3 most critical**, not-yet-discovered supporting capabilities, but allow for a justified **0**.
   * **Golden Rule:** For each **new** capability you discover in this step (the `S2` set), you must **immediately** define its primary L2 `BusinessObject`.
   * *Constraint: Avoid generic administrative capabilities such as "Manage Finance" or "Manage Human Capital".*

4. **Present the Canonical Sets:**
   * Combine all capabilities and objects from all sets (`S0`, `S1`, `S2`) into two **final, unique, canonical lists**:
     * A list of all L2 `Capability` names.
     * A list of all L2 `BusinessObject` names.

---

#### Step 3: Define L2 Relationships (Roles and Custodianship)

1. **Formalize Custodianship:** Using the outputs from the previous step, create a **complete and definitive** list of `[L2 Capability Name, L2 BusinessObject Name]` pairs. Each object must be assigned to exactly one capability, and each capability must have exactly one primary object.
2. **Model the Roles (Primary and Supporting):**
   * **Primary Roles:** Create a list of `[L2 Capability Name, L2 ValueStream Name]` pairs for each capability that directly manifests a stage (based on the analysis in Step 2, procedure 1).
   * **Supporting Roles:** Now, model the full support network.
     * For each L2 `Capability` in the canonical list (the "consumer"), identify which capabilities from the **complete canonical list** (the "providers") offer it essential, direct support.
     * **Crucial Rule:** A capability that has a primary role in one value stream can (and often will) have a supporting role for another capability. The pool of potential providers is always the **entire** set of discovered capabilities.
     * **Directional Rule:** Support flows from strategic/enabling capabilities to operational/executing capabilities (e.g., `Define Pricing Strategies` supports `Create Customer Quotes`).
     * Present this as a list of `[Provider L2 Capability Name, Consumer L2 Capability Name]` tuples.

---

### Step 4: Build the Canonical Capability Hierarchy (The ANCHOR)

1. Take the **complete canonical set** of L2 `Capabilities` from Step 2.
2. Group the L2 `Capabilities` under **one or more** L1 `Capabilities`. Each L1 must represent a coherent management domain with a distinct strategic purpose. Its name must be a **logical, verb-plural noun phrase** that describes the core activity. Strive for active, descriptive verbs beyond just 'Manage' where appropriate (e.g., 'Acquire & Retain Customers', 'Fulfill Client Orders').
3. Group all L1 `Capabilities` under a single L0 `Capability`. Its name must be a verb-noun phrase that describes the organization's core value-creating activity.

---

### Step 5: Structure Other Hierarchies by Mirroring the Anchor (The MIRROR)

1. **Object Hierarchy:** Create L0/L1 `BusinessObjects` and structure the L2 `BusinessObjects` so the hierarchy **exactly** mirrors the `Capability` hierarchy.
   * **Naming Rule:** Name L0/L1 objects as conceptual, singular nouns that are meaningful within the sector.
2. **Value Stream Hierarchy:** For each L0 `ValueStream`, group its L2 `ValueStream` stages into **newly created** L1 `ValueStream` stages, such that the hierarchy mirrors the grouping of related (see Step 3.2) L2 `Capabilities` into the L1 `Capabilities` (see Step 4.2) and such that each L1 `ValueStream` is the manifestation of exactly one L1 `Capability`. To mirror the capability hierarchy, you must ignore any order between L1 `ValueStream` stages. The name of each L1 stage must reflect a value-creating activity from the customer perspective.

---

### Step 6: Derive Relationships & Generate Final Output

1. **Define Base Relationships (L2):** Formally define all L2 relationships based on the analysis from Step 3.
   * `AssociationRelationship`: From an L2 `Capability` to the L2 `BusinessObject` it has custodianship over.
   * `ServingRelationship`: From a `Capability` to a `ValueStream` (manifestation) or to another `Capability` (support), based on the lists from Step 3.
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

<!-- INSERT FOOTER HERE -->