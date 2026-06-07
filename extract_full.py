import os
from docx import Document

def extract_text():
    docs_dir = 'src/docs'
    with open('full_content.txt', 'w', encoding='utf-8') as f:
        for root, dirs, files in sorted(os.walk(docs_dir)):
            for file in sorted(files):
                if file.endswith('.docx'):
                    filepath = os.path.join(root, file)
                    f.write(f"\n\n{'='*50}\n--- {filepath} ---\n{'='*50}\n")
                    try:
                        doc = Document(filepath)
                        for para in doc.paragraphs:
                            if para.text.strip():
                                f.write(para.text.strip() + '\n')
                    except Exception as e:
                        f.write(f"Error reading {file}: {e}\n")

if __name__ == "__main__":
    extract_text()
