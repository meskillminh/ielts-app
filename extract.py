import os
from docx import Document

def extract_text():
    docs_dir = 'src/docs'
    for root, dirs, files in os.walk(docs_dir):
        for file in files:
            if file.endswith('.docx'):
                filepath = os.path.join(root, file)
                print(f"--- {filepath} ---")
                try:
                    doc = Document(filepath)
                    fullText = []
                    for para in doc.paragraphs:
                        if para.text.strip():
                            fullText.append(para.text.strip())
                    content = '\n'.join(fullText)
                    # Print first 1000 characters to get the gist
                    print(content[:1000])
                    print("\n" + "="*50 + "\n")
                except Exception as e:
                    print(f"Error reading {file}: {e}")

if __name__ == "__main__":
    extract_text()
