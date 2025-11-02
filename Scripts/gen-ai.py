import os
from google import genai
from google.genai import types
import json
import time

# --- Setup en Client Init (Blijft hetzelfde) ---
try:
    API_KEY = os.environ.get("GEMINI_API_KEY")
    if not API_KEY:
        raise ValueError("GEMINI_API_KEY environment variable not set.")
    
    client = genai.Client(api_key=API_KEY)
except Exception as e:
    print(f"Setup Fout: {e}")
    exit()
# ---------------------------------------------


# --- Expermentele Parameters (Uw Metadata) ---
MODEL_NAME = "gemini-2.5-pro"
TEMPERATURE = 0.0
TOP_P = 1.0
SYSTEM_INSTRUCTION = "You are an experienced business architect. Adhere strictly to all instructions and provide output in the exact requested format."
# ---------------------------------------------


def run_llm_experiment(prompt_name: str, prompt_text: str):
    """Voert de LLM-call uit en slaat de resultaten op in Markdown-bestanden."""
    
    print(f"\n--- Running Experiment: {prompt_name} ---")
    
    # Maak de output map aan
    output_dir = "llm_runs"
    os.makedirs(output_dir, exist_ok=True)
    
    # 1. API Configuratie
    config = types.GenerateContentConfig(
        system_instruction=SYSTEM_INSTRUCTION,
        temperature=TEMPERATURE,
        top_p=TOP_P,
        # Voor Gemini is 'thinking' niet een directe parameter, maar wordt de 
        # Chain-of-Thought vaak gevraagd als onderdeel van de prompt.
        # Wij gaan ervan uit dat de prompt zelf de LLM vraagt om de gedachten op te schrijven.
    )

    try:
        # 2. API Call
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[prompt_text],
            config=config,
        )
        
        # 3. Verzamel Alle Data
        
        # Gebruik de timestamp voor een unieke bestandsnaam
        timestamp = time.strftime("%Y%m%d_%H%M%S")
        base_filename = os.path.join(output_dir, f"{prompt_name}_{timestamp}")
        
        # --- Metadata en Usage ---
        metadata_content = {
            "prompt_name": prompt_name,
            "timestamp": timestamp,
            "model": MODEL_NAME,
            "temperature": TEMPERATURE,
            "top_p": TOP_P,
            "input_tokens": response.usage_metadata.prompt_token_count,
            "output_tokens": response.usage_metadata.candidates_token_count,
            "total_tokens": response.usage_metadata.total_token_count,
            "system_instruction": SYSTEM_INSTRUCTION
        }
        
        # Schrijf Metadata als JSON
        with open(f"{base_filename}_metadata.json", "w") as f:
            json.dump(metadata_content, f, indent=4)


        # --- Full Prompt Archief ---
        # Slaat de exacte prompt op die is gebruikt
        with open(f"{base_filename}_prompt.md", "w", encoding="utf-8") as f:
            f.write(f"# Prompt for {prompt_name}\n\n```markdown\n{prompt_text}\n```\n")


        # --- Raw Response Archief (De Output) ---
        # Bevat de volledige, ruwe respons, inclusief de CSV's en eventuele thoughts.
        with open(f"{base_filename}_response.md", "w", encoding="utf-8") as f:
            f.write(f"# Raw LLM Response for {prompt_name}\n\n")
            f.write(response.text)
            
        print(f"Succesvol opgeslagen: {base_filename}_response.md en metadata.")

    except Exception as e:
        print(f"Fout tijdens API-call voor {prompt_name}: {e}")

# --- Test Runs (Uw Experimentele Loop) ---
if __name__ == "__main__":
    # In een echt scenario leest u de prompts in vanuit bestanden (A.txt, B.txt, etc.)

    # Voorbeeld: Lezen uit een bestand
    def load_prompt(filename):
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                return f.read()
        except FileNotFoundError:
            print(f"Fout: {filename} niet gevonden. Zorg dat uw prompt bestanden klaarliggen.")
            return None

    # VUL HIER UW ECHTE PROMPT BESTANDSNAAM IN
    prompt = load_prompt("prompt_B+2.txt") 
    
    if prompt:
        run_llm_experiment("Condition_B+2", prompt)
    
    # Voor de B+ runs, moet u de output van de vorige run in de prompt injecteren
    # Dit moet u in een loop doen, zoals besproken.
    # run_llm_experiment("Condition_B_Iter0", prompt_b_text)
