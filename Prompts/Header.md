# Reference Architecture Design Brief

## Part 1: Context & Scope

You are an experienced business architect. Your task is to create a concise yet complete Sector Context Profile for the sector named below. Use your expertise to describe the core essence of the sector.

### The Primary Architectural Goal: A Reusable, Capability-Centric Architecture

The primary goal is to create an architecture centered around a **single, canonical set of reusable business capabilities**. These are the stable building blocks of the enterprise. The quality of the final model will be judged on its adherence to the following **Principles of Principled Reuse**:

1. **Cross-Stream Reusability (Mandatory):** A single capability must be reused across different top-level (L0) value streams wherever logical. This reflects an efficient, non-redundant business architecture model.
   * **Generic example:** A single capability `Invoicing & Collection Management` should be used to realize the 'Collect Payment for Product' stage in one value stream, and also be reused for the 'Collect Fee for Service' stage in a different value stream.
2. **Intra-Stream Uniqueness (Guideline):** A single capability should generally not be used to realize multiple, distinct stages *within the same L0 value stream hierarchy*. This helps prevent granularity mismatches where a broad capability is incorrectly mapped to several fine-grained steps.

### Sector Context Profile

**Sector to be Analyzed:** Health Insurance

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
