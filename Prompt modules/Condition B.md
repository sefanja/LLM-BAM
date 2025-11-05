<!-- INSERT HEADER HERE -->

## Part 2: Modeling Procedure

### Step 1: The Goal and Guiding Principles

Your primary goal is to create a coherent architectural model that satisfies all formal constraints listed in Step 2. You will achieve this by first developing architectural catalogs and then mapping them.

1. **Principle of Scope:** The architectural catalogs you develop must be scoped to what is necessary to support the value streams defined in Part 1.
2. **Principle of Reusability:** You must develop a single, canonical set of reusable capabilities. A single capability should be reused across multiple value stream stages where logical. Creating separate, non-reusable capabilities for each stage is incorrect.

### Step 2: Formal Modeling Constraints

The final model **must** adhere to the following nine formal constraints.

#### Constraints for Consistent Zooming (C1-C5)

This first set of constraints governs the hierarchical structures that enable consistent zooming across different levels of granularity. We refer to elements in these hierarchies as parents, children, and ancestors.

* **(C1) Unique parent:** Each element must have at most one parent.
* **(C2) Acyclicity:** An element cannot be its own ancestor.
* **(C3) Consistent refinement depth:** All leaf elements (elements without children) must have the same number of ancestors.
* **(C4) Upward coherence:** A non-hierarchical relationship between two elements requires a corresponding relationship between their parents (if any), with one exception: the relationship does not need to be propagated if the parent elements are both primary capabilities within the same top-level value stream.
* **(C5) Downward coherence:** A relationship between two parent elements requires that at least one pair of their respective children (if any) is also related.

#### Constraints for Cross-Perspective Alignment (C6-C9)

The second set of constraints ensures that the three perspectives remain aligned, forming a coherent triad. We treat value streams and stages as the same ontological type, referring to both as `ValueStreams`.

* **(C6) Capability impact:** Each business `Capability` must transform exactly one `BusinessObject`, with one exception: at the leaf level it may transform multiple objects.
* **(C7) Object relevance:** Each `BusinessObject` must be transformed by exactly one business `Capability`, with one exception: at the leaf level, an object may be transformed by multiple capabilities.
* **(C8) Capability purpose:** Each business `Capability` must either manifest as a primary capability in a `ValueStream` or support another capability that does.
* **(C9) Traceability:** Each `ValueStream` must manifest exactly one business `Capability`.

### Step 3: Develop Architectural Catalogs

Develop the architectural catalogs.

1. **Develop the Value Stream Catalog:** Decompose the top-level `ValueStreams` into a hierarchy of stages (also referred to as `ValueStreams`).
2. **Develop the Scoped Business Capability Catalog:** Based on an analysis of the value stream stages, derive a consolidated and reusable set of `Capabilities`. Structure these into a hierarchy.
3. **Develop the Scoped Object Catalog:** Derive the necessary `BusinessObjects` and structure them into a hierarchy.

### Step 4: Define and Verify Architectural Mappings

Create and verify the mappings between the catalogs. The final set of mappings must satisfy all nine constraints (C1 through C9).

1. Define All Relationship Types:
   * Map the `Capabilities` (Source) to the **`ValueStream` elements (Target) that manifest them, using a `ServingRelationship`.
   * Map `Capabilities` to the `BusinessObjects` they transform using the `AssociationRelationship`.
   * Define support relationships (using ArchiMate's `ServingRelationship`) between `Capabilities` to ensure all capabilities have a purpose.
2. Verify and Refine: Review all catalogs and mappings. Adjust the model iteratively until all nine constraints are fully satisfied.

### Step 5: Prepare for Final Output

1. Consolidate all final elements and relationships.
2. Assign a `Level` property to all elements.
3. Assign a `Sequence` property to the decomposed `ValueStream` elements.

<!-- INSERT FOOTER HERE -->
