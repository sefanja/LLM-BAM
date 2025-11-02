# Reference Architecture Design Brief

## Part 1: Context & Scope

### Sector Context Profile

You are an experienced business architect. Your task is to create a concise yet complete Sector Context Profile for the sector named below. Use your expertise to describe the core essence of the sector.

**Sector to be Analyzed:** Health Insurance

**Complete the profile below:**

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
    * Present the result as a list: `[L0 Value Stream Name, Description, Originating VP, Value Stream Pattern]`.

## Part 2: Modeling Procedure

### Step 1: The Goal and Guiding Principles

Your primary goal is to create a coherent architectural model that satisfies all formal constraints listed in Step 2. You will achieve this by first developing architectural catalogs and then mapping them.

1. **Principle of Scope:** The architectural catalogs you develop must be scoped to what is necessary to support the value streams defined in Part 1.
2. **Principle of Reusability:** You must develop a single, canonical set of reusable capabilities. A single capability should be reused across multiple value stream stages where logical. Creating separate, non-reusable capabilities for each stage is incorrect.

### Step 2: Formal Modeling Constraints

The final model **must** adhere to the following nine formal constraints.

#### Constraints for Consistent Zooming (C1-C5)

* **(C1) Unique Parent:** Each element must have at most one parent.
* **(C2) Acyclicity:** An element cannot be its own ancestor.
* **(C3) Consistent Refinement Depth:** All hierarchies must be 'balanced'. All leaf elements must exist at the same level of detail.
* **(C4) Upward Coherence:** A relationship between two elements requires a corresponding relationship between their parents.
* **(C5) Downward Coherence:** A relationship between two parent elements requires that at least one pair of their respective children is also related.

#### Constraints for Cross-Perspective Alignment (C6-C9)

* **(C6) Capability Impact:** Each `Capability` must modify at least one `BusinessObject`.
* **(C7) Object Relevance:** Each `BusinessObject` must be modified by at least one `Capability`.
* **(C8) Capability Purpose:** Each `Capability` must either directly realize a `ValueStream` stage or support another capability that does.
* **(C9) Traceability:** Each `ValueStream` stage must be realized by **exactly one** `Capability`.

### Step 3: Develop Architectural Catalogs

Develop the architectural catalogs, keeping the principles from Step 1 and the hierarchical constraints **(C1, C2, C3)** in mind.

1. **Develop the Value Stream Catalog:** Decompose the top-level `ValueStreams` into a balanced hierarchy of stages.
2. **Develop the Scoped Business Capability Catalog:** Based on an analysis of the value stream stages, derive a consolidated and reusable set of `Capabilities`. Structure these into a balanced hierarchy.
3. **Develop the Scoped Information Catalog:** Derive the necessary `BusinessObjects` (information concepts) and structure them into a balanced hierarchy.

### Step 4: Define and Verify Architectural Mappings

Create and verify the mappings between the catalogs. The final set of mappings must satisfy all remaining constraints **(C4 through C9)**.

1. **Define All Relationship Types:**
   * Map `ValueStream` stages to their single realizing `Capability` (**as per C9**).
   * Map `Capabilities` to the `BusinessObjects` they **modify**.
   * Define `support` relationships between `Capabilities` to ensure all capabilities have a purpose (**as per C8**).
2. **Verify and Refine:** Review all catalogs and mappings. Adjust the model iteratively until all nine constraints are fully satisfied.

### Step 5: Prepare for Final Output

1. Consolidate all final elements and relationships.
2. Assign a `Level` property to all elements.
3. Assign a `Sequence` property to the decomposed `ValueStream` elements.

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