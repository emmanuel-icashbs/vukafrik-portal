# Programme update — September 2026

The timetable follows `VUKAFRIK_2026_Programme_Detaille_5.pdf` (included in
`public/documents`). The organiser's subsequent instructions take precedence:

- Pullman Hôtel, Kinshasa is the main venue. Day 1 uses Salon Congo; days 2 and 3 use Chapiteau.
- The first Day 1 keynote is labelled « À confirmer ». The second is assigned to Hervé Claude Ntumba (FPI).
- Manitek's product/service presentation is on Day 3, 11:30–12:00; its detailed content and presenter remain unspecified.
- Daniel Mukoko Samba appears first on the speakers page. He has his own record, separate from the generic government representative.

Session IDs are retained when a session continues. IDs 18 (former ministry workshop)
and 40 (former Day 3 second product presentation) are removed because those sessions
are absent from version 5. Newly separated protocol/transition entries use IDs 44–52.
Historical speaker profiles remain reachable, but the speaker lists show current
programme participants only. APROCEM and APROCEC retain the source's distinct spellings.

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
