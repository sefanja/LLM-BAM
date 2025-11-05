# Prompt for Condition_A

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

### Step 1: Develop Architectural Catalogs

Your task is to develop three separate architectural catalogs. For each, start by identifying high-level elements and then decompose them to a logical level of detail.

1. **Develop the Value Stream Catalog:**
   * Start with the top-level `ValueStreams` from Part 1 and decompose them into more detailed stages to create a full value stream hierarchy.

2. **Develop the Information Catalog:**
   * Identify the key `BusinessObjects` (representing the core information concepts of the business) that are critical to the sector.
   * Decompose these into a logical hierarchy.

3. **Develop the Business Capability Catalog:**
   * Identify the high-level `Capabilities` required for this sector and decompose them into a logical hierarchy.
   * **Guideline:** A capability name often combines a business object (noun) with an activity (verb), for example, "Project Management".
   * **Constraint:** Focus on **core** capabilities specific to the business model; avoid generic administrative capabilities (e.g., 'HR Management').

### Step 2: Define Architectural Mappings

Now, create mappings between the elements from the catalogs to show how they relate to each other.

1. **Define Cross-Architectural Mappings:**
   * Map `ValueStream` stages to the `Capabilities` that realize them.
   * Map `Capabilities` to the `BusinessObjects` (information concepts) they **modify**.

### Step 3: Perform Gap Analysis and Refinement

Review the mappings created in the previous step to ensure completeness and logical consistency.

1. **Identify Gaps:** Check for obvious gaps, such as a critical value stream stage that is not realized by any capability, or a core capability that does not act on any business object.
2. **Refine Catalogs:** Based on your analysis, refine the elements in the catalogs from Step 1 to resolve any identified gaps or inconsistencies. This may involve adding, renaming, or regrouping elements to improve the overall cohesion of the architecture.

### Step 4: Prepare for Final Output

1. Consolidate all final elements and relationships.
2. Assign a `Level` property to all elements based on their position in their respective hierarchies (top-level elements are Level 0, their children are Level 1, and so on).
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

```
