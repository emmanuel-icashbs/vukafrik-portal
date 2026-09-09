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
Panel 1 uses the generic ARPTC representative; Christian KATENDE remains assigned
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

Run `node programme-data.test.mjs` to check timetable continuity, rooms and speaker
assignments. The existing indexing and metadata smoke tests run against a local
production server (default port 3100).
