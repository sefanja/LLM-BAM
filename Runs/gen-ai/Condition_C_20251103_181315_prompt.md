# Prompt for Condition_C

```markdown
# Reference Architecture Design Brief

## Part 1: Context & Scope

You are an experienced business architect. Your task is to create a concise yet complete Sector Context Profile for the sector named below. Use your expertise to describe the core essence of the sector.

### The Primary Architectural Goal: A Reusable, Capability-Centric Architecture

The primary goal is to create an architecture centered around a **single, canonical set of reusable business capabilities**. These are the stable building blocks of the enterprise. The quality of the final model will be judged on its adherence to the following **Principles of Principled Reuse**:

1. **Cross-Stream Reusability (Mandatory):** A single capability must be reused across different top-level (L0) value streams wherever logical. This reflects an efficient, non-redundant business architecture model.
   * **Generic example:** A single capability `Invoicing & Collection Management` should be used to realize the 'Collect Payment for Product' stage in one value stream, and also be reused for the 'Collect Fee for Service' stage in a different value stream.
2. **Intra-Stream Uniqueness (Guideline):** A single capability should generally not be used to realize multiple, distinct stages *within the same L0 value stream hierarchy*. This helps prevent granularity mismatches where a broad capability is incorrectly mapped to several fine-grained steps.

### Sector Context Profile

**Sector to be Analyzed:** Research-Intensive Universities

* **Core Purpose & Societal Role:** Describe the sector's fundamental purpose. Why does it exist? What societal need does it fulfill?
* **Primary Business Model Archetype(s):** Identify the dominant business model. Think in terms of B2C (to consumers), B2B (to businesses), B2G (to government), or non-profit/public funding. A hybrid model is possible.
* **Key Strategic Drivers & Basis of Competition:** On what basis do organizations in this sector compete? Consider factors like reputation, innovation, efficiency, customer satisfaction, or societal impact. Name the 2-3 most important ones.
* **Dominant Environmental Factors:** Describe the context in which the sector operates. Consider laws and regulations, public accountability, technological trends, or funding models (e.g., public funds).

### Strategic Foundation

1. Identify **2-3 primary, external `Customer Segments`** for the defined sector.
2. For **each** `Customer Segment`, describe the core `Value Proposition` it receives from the organization. Focus on the ultimate value for the customer.
3. Present the result as a list where each `Customer Segment` is paired with its `Value Proposition(s)`.

### High-Level Value Streams

1. **Define L0 Value Streams using CODP:** Apply the Customer Order Decoupling Point (CODP) principle to define the complete set of L0 `ValueStreams`.
   * **Principle:** If the organization creates a standardized, reusable business asset 'to stock' (**Make-to-Stock, MTS**), this is a separate L0 `ValueStream`. The flow triggered by a customer order (**Assemble-to-Order, ATO**) is another.
   * **Litmus Test:** Ask "Does the organization build a core asset *before* any specific customer is known?"
     * **Example:** A software company develops a standard `Platform` (MTS) before a client signs up. Configuring that platform for a new client (ATO) is a separate L0 Value Stream.
   * **Action:** Use this logic to define all internal asset-creation streams (MTS) and all customer-facing delivery streams (ATO/ETO).
2. **Characterize All Value Streams:** For every L0 `ValueStream` defined above:
    * Assign a `Value Stream Pattern (CODP)`: Choose one of `ETO`, `ATO`, or `MTS`.
    * Use the 'deepest' pattern (`ETO` > `ATO` > `MTS`) that represents a typical case for the sector.
3. Present the result as a list: `[L0 Value Stream Name, Description, Originating VP, Value Stream Pattern]`.

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

## Part 3: Output Specifications

Generate the output as three separate code blocks for `elements.csv`, `relations.csv`, and `properties.csv`. The format must be standard CSV with headers, comma separators, and all text values in double quotes.

**1. `elements.csv` Table**

| Column          | Content                                                                      |
| :-------------- | :--------------------------------------------------------------------------- |
| `ID`            | A unique identifier for the element.                                         |
| `Type`          | The element type. **Use only:** `ValueStream`, `Capability`, `BusinessObject`. |
| `Name`          | The human-readable name of the element.                                      |
| `Documentation` | A concise description of the element's purpose.                              |

**2. `relations.csv` Table**

| Column           | Content                                                                                      |
| :--------------- | :------------------------------------------------------------------------------------------- |
| `ID`             | Leave empty.                                                                                 |
| `Type`           | The ArchiMate relationship type. **Use only:** `CompositionRelationship`, `ServingRelationship`, `AssociationRelationship`. |
| `Name`           | Leave empty.                                                                                 |
| `Documentation`  | Leave empty.                                                                                 |
| `Source`         | The `ID` of the source element.                                                              |
| `Target`         | The `ID` of the target element.                                                              |
| `Specialization` | Leave empty.                                                                                 |

**3. `properties.csv` Table and Rules**

The `properties.csv` file must contain `"ID", "Key", "Value"`. Apply the following rules rigorously:

* **Rule 1 (All Elements):** Every single element from `elements.csv` must have these two properties:
  * A property with `Key` = "Level" and `Value` = the element's hierarchy level (`0`, `1`, or `2`).
  * A property with `Key` = "Code" and `Value` = the element's unique `ID`.
* **Rule 2 (L0 ValueStreams):** Every L0 `ValueStream` element must have these **additional** properties:
  * A property with `Key` = "Value Proposition" and `Value` = the full description of the originating Value Proposition.
  * A property with `Key` = "Value Stream Pattern" and `Value` = the chosen value (`MTS`, `ATO`, or `ETO`).
* **Rule 3 (L2 ValueStreams):** Every L2 `ValueStream` element must have one **additional** property:
  * A property with `Key` = "Sequence" and `Value` = a number indicating its sequential position within its parent L0 `ValueStream` (starting from "1" for each stream).

```
