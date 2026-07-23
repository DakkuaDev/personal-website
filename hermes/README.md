# Hermes Agent artifacts

Files in this folder are created and maintained by Hermes (Daniel's assistant).

## CV — HYBRID model (decided 2026-07-23)
- **LIVE source = Google Drive** (file IDs fixed, so the URL never changes when Daniel
  re-uploads the same file — visitors always see the latest version). `index.html` links
  to Drive. This is Daniel's fast-update flow: drop a new PDF on the same Drive file, done.
- **This `hermes/` folder = versioned mirror** of those same PDFs, for diffs/history.
  Hermes syncs it on every CV update (vault markdown → regenerate → commit here → upload
  to the same Drive file IDs so the live URL stays stable).

| File | Lang | Variant |
|------|------|---------|
| cv-daniel-guerra-es.pdf | ES | Master (Dev/PO) — primary |
| cv-daniel-guerra-en.pdf | EN | Master (Dev/PO) — primary |
| cv-daniel-guerra-es-po.pdf | ES | PO-leaning (pure PM roles) |
| cv-daniel-guerra-en-po.pdf | EN | PO-leaning (pure PM roles) |

## Source of truth
The PDFs are generated from the markdown master in the Hermes Obsidian vault
(`/opt/data/vault/Professional Brand/CV/`) via `build_cv_pdf.py` (fpdf2).
The PO variants are mirror-only here (not linked from index.html); link them if wanted.

## Update workflow
1. Edit markdown in the vault `CV/`.
2. Regenerate PDFs there (`build_cv_pdf.py`).
3. Copy the 4 PDFs into this folder, commit to `hermes-ai`.
4. Upload the same PDFs to the existing Drive file IDs (URL stays fixed).
Do not hand-edit the PDFs. If Daniel updates Drive directly, the live site is current
and the repo mirror catches up at the next sync.
