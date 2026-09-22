# Programme and speaker updates — 22 September 2026

- “La parole aux acteurs de l’écosystème” (event 55) moves to Day 2, 14:20–15:00, replacing the FOGEC workshop. Its former Day 3 slot, 13:25–14:25, is unassigned; later sessions retain their times.
- FOGEC, ARSP and Boni Maya are removed from speaker profiles and assignments. The first keynote remains, with its speaker to be confirmed.

- Panel 1: Noemie Mutombo (ARPTC), Olivier Bampendi Mufuta (PNUD), Mirela Pekmezi, Joël Kabuya and Alain Betu. BCC is removed from this panel.
- Panel 2: Dieumerci Pande, gestionnaire financier chez ASCADO et entrepreneur, joins the existing participants.
- Noemie, Dieumerci and Olivier use the supplied portraits.
- These website updates supersede the panel assignments below. The downloadable programme PDF has not been revised.

# Final programme — 20 September 2026

Source: the organiser’s latest supplied VUKAFRIK_2026_Programme_Detaille_9.pdf.
The downloadable copy in public/documents is replaced with that exact file.

- Boni MAYA confirms the first keynote on enterprise growth.
- The second fireside chat addresses universal connectivity and opportunities for youth.
- NextGen moves to Day 2, 12:20–12:40, replacing pawaPay; session ID 57 is retained.
- CCC – Congo Innovation Group fills Day 2, 15:00–15:20.
- Day 3, 11:30–11:50, is a break (operational entry 58).
- Neotex’s workshop title now follows the final PDF; Coach Gabriel LOMENGO’s name is corrected.
- Existing confirmed speaker profiles and venue clarifications are retained where the PDF is silent.
- Operational entries remain hidden from participant-facing programme pages.

These notes supersede conflicting details in the historical versions below.

---

# Programme version 9 — 18 September 2026

Current source: `public/documents/VUKAFRIK_2026_Programme_Detaille_9.pdf`.
Version 9 supersedes the historical notes below. The organiser confirmed that
Day 2 has no main-stage session at 10:40–11:20, Emmanuel remains on the stand
visit, and Day 3 remains in Chapiteau.

- Panel 1: ARPTC, BCC, Mirela Pekmezi, Joël Kabuya and Alain Betu.
- Fireside chat 2: Paterne Binene A Kadiat (FDSU) and Jeannette Cilomba.
- Day 2: continuous ministry formalisation service 10:40–16:00, explicitly
  parallel to the main programme; CCC moves to 12:40–13:20; CSB is removed.
- Day 3: Manitech Congo / Sivi Malukisa, ecosystem panel (composition pending),
  and Coach Gabriel Lomengo replace the former sessions. ENA, APROCEC, ANADEC
  and closing networking are removed. Closing ends at 17:30.
- New profiles use only roles and participation supplied by the programme,
  with standard placeholder portraits. Existing portraits are preserved.
- Continuing session IDs remain stable; new sessions use 53–56, new speakers
  use 41–44. Historical speaker URLs remain available.
- First keynote and Day 2 unnamed presentation remain unconfirmed.
- Version 9 is available through the programme download link.

Run `node programme-data.test.mjs` to validate version 9, including the intentional
parallel service and the reserved main-stage gap.

## Historical notes (superseded where different above)

# Programme update — September 2026

The timetable follows `VUKAFRIK_2026_Programme_Detaille_5.pdf` (included in
`public/documents`). The organiser's subsequent instructions take precedence:

- Pullman Hôtel, Kinshasa is the main venue. Day 1 uses Salon Congo; days 2 and 3 use Chapiteau.
- The first Day 1 keynote is labelled « À confirmer ». The second is assigned to Hervé Claude Ntumba (FPI).
- Manitek's product/service presentation is on Day 3, 11:30–12:00; its detailed content and presenter remain unspecified.
- Daniel Mukoko Samba appears first on the speakers page. He has his own record, separate from the generic government representative.

The organiser's latest corrections restore the ministry workshop (ID 18) on Day 2,
10:00–10:40, followed by CCC at 10:40–11:20. Subsequent Day 2 activities move
40 minutes later, preserving durations; the day ends at 16:50. The government
representative leads the ribbon cutting and allocution, and Emmanuel joins the
government and FEC for the stand visit. Mirela PEKMEZI (FINCA's managing director)
replaces the generic FINCA representative in Panel 1 only; her supplied biography
is included verbatim. The Day 3 FINCA workshop retains its organisation representative.

Session IDs are retained when a session continues. ID 40 remains removed.
Protocol/transition entries use IDs 44–52. The named `schedule_data` export keeps
the operational timetable; the default export excludes arrivals, registration,
breaks and transitions from public pages. Public names include their titles, and
CCC and the ministry workshop identify their leading teams. The outdated version 5
PDF download link is removed pending a revised document; the source PDF is retained.
Historical speaker profiles remain reachable, but the speaker lists show current
programme participants only. Pascal TCHELO MAZOMBO (Directeur général — APROCM)
replaces the former APROCEM placeholder in Panel 2 and joins the Hackathon launch.
APROCM follows the organiser's corrected spelling; APROCEC remains a separate entry.
Panel 1 features Noemie MUTOMBO (ARPTC); Christian KATENDE remains assigned
to the fireside chat only.

Internal spacing is scoped through `InternalPage.module.css`. Do not apply this
class to the homepage or restore the reverted commit's global import changes.
The shared speaker component only prioritises the minister when `ministerFirst` is set.

The supplied photographs were processed conventionally: light tonal correction,
portrait framing, and manual background masking for Emmanuel's portrait. No facial
generation, reshaping, or beauty filter was used. The original credit-bearing JPEGs
are retained under `public/images/speakers/originals`; processed assets live under
`src/assets/img/vukafrik`.

At the organiser's request, personal portraits are replaced by the existing generic
speaker placeholder in cards, profile pages and session speaker rows. Names, titles
and profile links remain; the contextual fireside-chat photograph is retained.

The organiser subsequently supplied `Image (52).jpg` for Daniel Mukoko Samba.
Its unchanged copy is `src/assets/img/vukafrik/speakers/daniel-mukoko-samba.jpg`;
his cards, profile and session rows now display that portrait, including its credit.
Other speakers continue to use the generic placeholder.

Run `node programme-data.test.mjs` to check timetable continuity, rooms and speaker
assignments. The existing indexing and metadata smoke tests run against a local
production server (default port 3100).
