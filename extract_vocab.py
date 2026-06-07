import os
import zipfile
import re
import json

def extract_docx_text(filepath):
    try:
        with zipfile.ZipFile(filepath) as z:
            doc_xml = z.read('word/document.xml').decode('utf-8')
            text = re.sub(r'<[^>]+>', ' ', doc_xml)
            text = re.sub(r'\s+', ' ', text).strip()
            return text
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return ""

def parse_vocab(text):
    # This is a heuristic parser for the vocab format
    # Format generally looks like: word (n) – meaning 👉 Example sentence. → Translation.
    # We will try to find patterns: (word) (type) – (meaning) 👉 (example) → (translation)
    # However, since the text has stripped tags, we might have things concatenated.
    
    # We can split by '👉' to get examples, and '→' for translations.
    words = []
    
    # A generic regex to match a vocab entry
    # Match something like:
    # "some word (n) – meaning 👉 English example. → Vietnamese translation."
    # We split by '👉'
    parts = text.split('👉')
    
    if len(parts) <= 1:
        return words
        
    for i in range(len(parts)-1):
        # The first part contains the topic/word before '👉'
        # The second part contains the English example and translation before the next '👉'
        # Let's extract the word definition from the end of parts[i]
        
        # parts[i] ends with the word definition: e.g. ".... health (n) – sức khỏe "
        # Find the last occurrence of something that looks like a word definition
        # Usually it has a hyphen or ndash '–' or '-'
        # Let's just find the last " – " or "-" in parts[i]
        
        chunk1 = parts[i].strip()
        
        # Extract example and translation from parts[i+1]
        chunk2 = parts[i+1].strip()
        
        # Extract word details from chunk1
        # We look backwards for the word. Typically it's "word (type) - meaning"
        # Since we stripped all tags, maybe it's just the last 50-100 characters
        
        word_match = re.search(r'([a-zA-Z0-9\-\s]+)\s*\(([^)]+)\)\s*[–\-]\s*(.+)$', chunk1[-200:])
        if word_match:
            word = word_match.group(1).strip()
            wtype = word_match.group(2).strip()
            meaning = word_match.group(3).strip()
        else:
            word = ""
            wtype = ""
            meaning = chunk1.split(')')[-1].strip() if ')' in chunk1 else chunk1[-50:].strip()
            
        # Extract example and translation from chunk2
        # chunk2 has the english example, then '→', then the translation. 
        # Then it has the next word at the end!
        if '→' in chunk2:
            ex_split = chunk2.split('→')
            example_en = ex_split[0].strip()
            # The translation is everything up to the next word.
            # This is tricky because the next word is at the end of ex_split[1]
            # but we don't need the translation for our JSON strictly, or we can just leave it.
            example_vi = ex_split[1].strip()
        else:
            example_en = chunk2.split('.')[0] + '.'
            example_vi = ""
            
        if word:
            words.append({
                "word": word,
                "type": wtype,
                "meaning": meaning,
                "example": example_en,
                "example_vi": example_vi
            })
            
    return words

vocab_dir = "/Users/buingocminh/Vibe_coding/ielts-app/Learning English/VOCAB FOR IELTS"

topics = []

for root, dirs, files in os.walk(vocab_dir):
    for f in files:
        if f.endswith('.docx') and not f.startswith('~'):
            filepath = os.path.join(root, f)
            text = extract_docx_text(filepath)
            
            # Use folder name or file name as topic title
            topic_name = os.path.basename(f).replace('.docx', '')
            
            words = parse_vocab(text)
            if len(words) > 0:
                topics.append({
                    "id": topic_name.lower().replace(' ', '_'),
                    "title": topic_name,
                    "words": words
                })

# Also parse Speaking Lesson 5
lesson5_path = "/Users/buingocminh/Vibe_coding/ielts-app/Learning English/Speaking/Lesson 5 - Places + People.docx"
lesson5_text = extract_docx_text(lesson5_path)

with open('extracted_vocab.json', 'w', encoding='utf-8') as f:
    json.dump(topics, f, ensure_ascii=False, indent=2)

with open('lesson5_text.txt', 'w', encoding='utf-8') as f:
    f.write(lesson5_text)

print("Extraction complete. Found topics:", len(topics))
