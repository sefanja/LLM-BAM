<!-- INSERT HEADER HERE -->

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
   * Map the appropriate `Capabilities` (Source) to the **`ValueStream` elements at their corresponding hierarchical level** (Target) that they realize (using a `ServingRelationship`).
   * **Constraint (C9):** The mapping at the lowest level of detail (the stages) must be a strict 1-to-1: each stage is realized by exactly one capability.
   * Map `Capabilities` to the `BusinessObjects` they **modify**.
   * Define `support` relationships between `Capabilities` to ensure all capabilities have a purpose (as per C8).
2. **Verify and Refine:** Review all catalogs and mappings. Adjust the model iteratively until all nine constraints are fully satisfied.

### Step 5: Prepare for Final Output

1. Consolidate all final elements and relationships.
2. Assign a `Level` property to all elements.
3. Assign a `Sequence` property to the decomposed `ValueStream` elements.

<!-- INSERT FOOTER HERE -->
