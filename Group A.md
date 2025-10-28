# Group A

## Part 4: Task Instructions and Required Output Format

### Task

Based on the information above, generate the reference business architecture model in Markdown tables that exactly mirror the structure required for Archi's CSV import files. Use a logical prefix for IDs (e.g., BP-, BF-, BO-).

**ArchiMate Mapping:**

* Value Streams and Value Stream Stages must be modeled as **`BusinessProcess`**.
* Business Capabilities must be modeled as **`BusinessFunction`**.
* Business Objects must be modeled as **`BusinessObject`**.

**Hierarchical Structures:**

* You may define a logical hierarchy for Business Capabilities (`BusinessFunction`) and Business Objects (`BusinessObject`). This hierarchical relationship (parent-child) must be defined using a `CompositionRelationship` in the Relations Table, connecting the parent element (Source) to the child element (Target).

**Output Format:**
Please generate the output as two separate Markdown tables: one for all elements (`elements.csv`) and one for all relationships between them (`relations.csv`).

### 1. Elements Table (`elements.csv`)

This table must list every single architectural element. Generate a unique `ID` for each element.

| ID | Type | Name | Documentation |
| :--- | :--- | :--- | :--- |

**Column Definitions:**

* **ID:** A unique identifier for the element (e.g., `BP-01`, `BF-01`, `BO-01`).
* **Type:** The specific ArchiMate element type (`BusinessProcess`, `BusinessFunction`, `BusinessObject`).
* **Name:** The human-readable name of the element.
* **Documentation:** A concise description of the element's purpose.

### 2. Relations Table (`relations.csv`)

This table must define all the relationships between the elements listed in the Elements Table.

| Source | Target | Type |
| :--- | :--- | :--- |

**Column Definitions:**

* **Source:** The `ID` of the element where the relationship starts.
* **Target:** The `ID` of the element where the relationship ends.
* **Type:** The specific ArchiMate relationship type. Use **only** the following:
  * **`CompositionRelationship`**: To link a parent element to its child elements.
  * **`ServingRelationship`**: To show that a `BusinessFunction` enables a `BusinessProcess`.
  * **`AccessRelationship`**: To show that a `BusinessFunction` modifies a `BusinessObject`.
