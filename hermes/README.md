# Hermes Agent artifacts

Files in this folder are created and maintained by Hermes (Daniel's assistant).

## CV PDFs (source of truth = Obsidian vault `Professional Brand/CV/*.md`)
| File | Lang | Variant |
|------|------|---------|
| cv-daniel-guerra-es.pdf | ES | Master (Dev/PO) — primary |
| cv-daniel-guerra-en.pdf | EN | Master (Dev/PO) — primary |
| cv-daniel-guerra-es-po.pdf | ES | PO-leaning (pure PM roles) |
| cv-daniel-guerra-en-po.pdf | EN | PO-leaning (pure PM roles) |

The PDFs are generated from the markdown master in the Hermes Obsidian vault
(`/opt/data/vault/Professional Brand/CV/`) via `build_cv_pdf.py` (fpdf2).
`index.html` links to these instead of Google Drive.

To update: edit markdown in the vault, regenerate PDFs there, then copy the 4
PDFs into this folder and commit. Do not hand-edit the PDFs.
