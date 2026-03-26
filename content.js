/**
 * APEX SPORTS — CONTENT CONFIG
 * ============================================================
 * This is the single file you edit to update the website.
 *
 * HOW TO ADD A CASE STUDY:
 *   1. Add a new object to APEX.insights[] below
 *   2. Add a cover image to assets/ folder
 *   3. Save. Done.
 *
 * HOW TO ADD A PARTNER LOGO:
 *   1. Drop the logo file into assets/logos/
 *   2. Add an entry to APEX.partners[] below
 *   3. Save. Done.
 *
 * HOW TO ADD AN ATHLETE:
 *   1. Add portrait photo to assets/players/
 *   2. Add entry to APEX.roster[] below
 *   3. Save. Done.
 * ============================================================
 */

const APEX = {

  /* ── SITE META ─────────────────────────────────────────── */
  meta: {
    siteName: "Apex Sports Consulting",
    email: "office@apex-sports.org",
    address: "Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E.",
    phone: "",
    social: {
      instagram: "https://www.instagram.com/apexsportsae/",
      facebook: "#",
      twitter: "https://x.com/ApexSportsAE",
      youtube: "https://www.youtube.com/@sportshubplay",
      linkedin: "https://www.linkedin.com/company/apexsportsconsulting",
    },
    newsletter: {
      // Set action to your Mailchimp/ConvertKit form URL
      // Leave as "#" to use mailto fallback
      formAction: "#",
    },
  },

  /* ── HOMEPAGE STATS ────────────────────────────────────── */
  // Fill these in before launch. Leave empty string to hide.
  stats: [
    { value: "", suffix: "B+", label: "In landmark sports deals advised, managed and facilitated", prefix: "$" },
    { value: "", suffix: "B+", label: "Media rights acquired and distributed in-house", prefix: "$" },
    { value: "", suffix: "B+", label: "Fans reached and engaged through campaigns", prefix: "" },
  ],

  /* ── PARTNERS ──────────────────────────────────────────── */
  // logo: filename inside assets/logos/ (e.g. "fifa.svg")
  // active: true = current partner, false = historical
  // show: true = display on website
  partners: [
    // Drop logo files into assets/logos/ and update the logo field when ready
    { name: "Sony", logo: "", description: "", active: true, show: true },
    { name: "PCB", logo: "", description: "", active: true, show: true },
    { name: "DP World", logo: "dp-world.png", description: "", active: true, show: true },
    { name: "Geo Super", logo: "geo-super.png", description: "", active: true, show: true },
    { name: "Myco", logo: "myco.png", description: "", active: true, show: true },
    { name: "SA20", logo: "", description: "", active: true, show: true },
    { name: "Jazz 5G", logo: "", description: "", active: true, show: true },
    { name: "Walee Tech", logo: "", description: "", active: true, show: true },
    { name: "Multan Sultans", logo: "", description: "", active: true, show: true },
    { name: "Fancode", logo: "", description: "", active: true, show: true },
  ],

  /* ── TEAM ──────────────────────────────────────────────── */
  // photo: full URL or filename inside assets/team/
  // Leave photo as "" to show initials avatar
  team: [
    { name: "Peter Hutton", title: "Chairman", photo: "Peter-Hutton-683x1024.jpg", bio: "Seasoned media executive serving on boards of Saudi Pro League, British Rugby League, Wembley Stadium, and Professional Triathlon Organization. Former CEO of major sports channels across Europe, Asia, and the Indian subcontinent. Led Meta's global sports business for six years and chaired T20 World Cup USA." },
    { name: "Zahid Noorani", title: "Member, Board of Directors", photo: "Zahid-846x1024.png", bio: "Brings 35 years of combined experience in global sports, banking, finance, and real estate development. Conceived and implemented Ten Sports, a leading South Asian sports TV channel. 25+ years as CEO managing relationships with international sports governing bodies and concluding multi-million-dollar broadcasting deals." },
    { name: "Subhan Ahmad", title: "Member, Board of Directors", photo: "Subhan-Ahad.png", bio: "Seasoned Pakistani sports administrator with ICC, PCB, PSL, ILT20, and Emirates Cricket Board experience. Former PCB Chief Operating Officer (2010–2019). Instrumental in hosting major international cricket events and served on ICC committees. Currently Advisor to Emirates Cricket Board and COO of ILT20." },
    { name: "Imran Ahmad Khan", title: "Chief Executive Officer", photo: "Imran.png", bio: "Dynamic sports management professional with nearly a decade of experience spanning commercial strategy, leagues, broadcasts, production, and athlete management. Led A Sports content acquisition and commercial growth. Director for World Cricketers' Association." },
    { name: "Mark Denton", title: "Director, International Business Development", photo: "Mark-Denton.png", bio: "Over 30 years of international sports broadcast and media distribution expertise. Co-founded Ten Sports as SVP Revenue and Digital. Distributed major content including UEFA Champions League, La Liga, and established Willow TV OTT streaming service across Middle East and Europe." },
    { name: "Zain Noorani", title: "Manager, Operations & Partnerships", photo: "241128_Wavelink_Zain_Noorani313-1-819x1024.jpg", bio: "Strong financial foundation with double bachelor's degree in Accounting and Banking & Finance. Transitioned from finance and foreign exchange risk management to sports. Drives media rights, commercial strategy, and cross-border collaborations across MENA and South Asia regions." },
  ],

  /* ── ATHLETE ROSTER ────────────────────────────────────── */
  // photo: filename inside assets/players/
  // sport: e.g. "Cricket", "Squash", "Football"
  roster: [
    { name: "Shadab Khan",     sport: "Cricket", nationality: "Pakistan", bio: "Pakistan T20 Vice Captain. Leg-spin all-rounder and one of Pakistan's most dynamic match-winners in white-ball cricket.",                                                         photo: "shadab-khan.png",     instagram: "", twitter: "" },
    { name: "Haris Rauf",      sport: "Cricket", nationality: "Pakistan", bio: "One of the World's Fastest Bowlers. Pakistan's premier pace weapon in T20 and ODI cricket.",                                                                                         photo: "haris-rauf.png",      instagram: "", twitter: "" },
    { name: "Hassan Ali",      sport: "Cricket", nationality: "Pakistan", bio: "Premier Fast Bowler. ICC Champions Trophy 2017 Player of the Tournament and a key figure in Pakistan's pace attack.",                                                               photo: "hassan-ali.png",      instagram: "", twitter: "" },
    { name: "Fakhar Zaman",    sport: "Cricket", nationality: "Pakistan", bio: "Premier Opening Batter. Holder of the highest individual score in ODI cricket by a Pakistan batsman.",                                                                               photo: "fakhar-zaman.png",    instagram: "", twitter: "" },
    { name: "Shan Masood",     sport: "Cricket", nationality: "Pakistan", bio: "Pakistan Test Captain. Elegant left-handed batter leading Pakistan's red-ball renaissance.",                                                                                          photo: "shan-masood.png",     instagram: "", twitter: "" },
    { name: "Sarfaraz Ahmed",  sport: "Cricket", nationality: "Pakistan", bio: "ICC Champions Trophy 2017 Winning Captain. Veteran wicketkeeper-batter and one of Pakistan's most celebrated leaders.",                                                             photo: "sarfaraz-ahmed.png",  instagram: "", twitter: "" },
    { name: "Faheem Ashraf",   sport: "Cricket", nationality: "Pakistan", bio: "Premier All Rounder. Powerful lower-order batter and effective swing bowler across all formats.",                                                                                    photo: "faheem-ashraf.png",   instagram: "", twitter: "" },
    { name: "Mohammad Nawaz",  sport: "Cricket", nationality: "Pakistan", bio: "Premier All Rounder. Left-arm spinner and handy batter who has played key roles in Pakistan's T20 campaigns.",                                                                       photo: "mohammad-nawaz.png",  instagram: "", twitter: "" },
    { name: "Shamyl Hussain",   sport: "Cricket", nationality: "Pakistan", bio: "Rising Pakistan international cricketer.",                                                                                                                                              photo: "shamyl-hussain.jpg",  instagram: "", twitter: "" },
    { name: "Farhan Yusuf",     sport: "Cricket", nationality: "Pakistan", bio: "Rising Pakistan international cricketer.",                                                                                                                                              photo: "farhan-yusuf.jpg",    instagram: "", twitter: "" },
  ],

  /* ── APEX INSIGHTS (CASE STUDIES) ─────────────────────── */
  // To add a new case study, copy one of the objects below and fill it in.
  // category options: "Production" | "Media Rights" | "Commercial" | "Events" | "Athlete Management"
  // coverImage: filename in assets/ folder. Leave "" for gradient placeholder.
  insights: [

    {
      id: "multan-sultans-cd-ventures",
      title: "Multan Sultans Acquisition by CD Ventures: Managed by Apex Sports",
      subtitle: "PKR 20 Billion PSL Franchise Transaction",
      category: "Commercial",
      coverImage: "multan-sultans.jpeg",
      video: "https://www.youtube.com/embed/gxPuE3ON1AU",
      featured: true,
      stats: [
        { value: "PKR 20B", label: "Transaction Value" },
        { value: "~$71M", label: "USD Equivalent" },
        { value: "<2 Weeks", label: "Time to Close" },
      ],
      summary: "Apex Sports served as exclusive strategic advisor to CD Ventures on the acquisition of the Multan Sultans PSL franchise — a PKR 20 billion (~USD 71 million) transaction completed in under two weeks.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports served as the exclusive strategic advisor to CD Ventures on the acquisition of the Multan Sultans franchise in the Pakistan Super League (PSL). The firm facilitated a PKR 20 billion (~USD 71 million) transaction completed in under two weeks."
        },
        {
          heading: "Our Role",
          text: "The team supported end-to-end processes, bringing together key stakeholders and structuring the transaction for successful outcomes for all parties. Apex Sports worked closely with CD Ventures and the Pakistan Cricket Board throughout, providing strategic guidance on transaction structuring, negotiations, and execution."
        },
        {
          heading: "Significance",
          text: "The deal represents one of the most significant franchise transactions in PSL history and reflects the league's continued commercial growth. Apex Sports has played a pivotal role in the PSL since its founding, and facilitating this landmark acquisition marks another chapter in that long-running relationship."
        },
      ],
      quote: {
        text: "It is incredibly rewarding to see how far the league has come over the past decade. Helping close this transaction, as the PSL enters its next chapter of growth, feels particularly meaningful on a personal level.",
        author: "Imran Ahmad Khan",
        role: "CEO, Apex Sports Consulting"
      },
      partners: ["CD Ventures", "Pakistan Cricket Board", "PSL"],
      tags: ["Commercial", "M&A", "PSL", "Pakistan Cricket"],
    },

    {
      id: "psl-global-distribution-walee",
      title: "Apex Sports Drives Global PSL Media Distribution in Partnership with WALEE",
      subtitle: "7 Regions. 10+ Broadcast Partnerships. HBL PSL Season 10.",
      category: "Media Rights",
      coverImage: "global-distribution-psl.jpg",
      featured: true,
      stats: [
        { value: "7", label: "Regions Activated" },
        { value: "10+", label: "Broadcast Partnerships" },
        { value: "Season 10", label: "HBL PSL" },
      ],
      summary: "In partnership with WALEE, Apex Sports drove the global media distribution strategy for HBL PSL Season 10 — activating broadcast partnerships across seven key regions and connecting the league with fans worldwide.",
      body: [
        {
          heading: "The Brief",
          text: "Apex Sports, in partnership with WALEE, led the global media distribution strategy for HBL PSL — a league the Apex team has been associated with since its inception. The mandate was to expand the league's international broadcast footprint and activate partnerships across key regions for Season 10."
        },
        {
          heading: "Regions & Partnerships",
          text: "Seven key regions were activated across the season: ESPN in Australia & New Zealand, Cricbuzz.com across MENA, ARY Digital & ARY Plus in the United Kingdom, T Sports and tapmad in Bangladesh, tapmad in Nepal, Willow TV by Cricbuzz in North America, and Dialog Television, VIU, and tapmad in Sri Lanka."
        },
        {
          heading: "Significance",
          text: "The PSL has come a long way over the past decade, and this season's distribution reflects the growing global appetite for Pakistan cricket. Each partnership connects the league with its fans wherever they are, expanding the PSL's international footprint and commercial reach season on season."
        },
      ],
      quote: {
        text: "Grateful to the PCB and Walee for their continued trust, and proud of the Apex Sports team for the tremendous effort behind the scenes to make this happen.",
        author: "Apex Sports",
        role: "Global Media Distribution — HBL PSL"
      },
      partners: ["WALEE", "PCB", "ESPN", "Cricbuzz", "ARY Digital", "ARY Plus", "T Sports", "tapmad", "Willow TV", "Dialog Television", "VIU"],
      tags: ["Media Rights", "PSL", "Pakistan Cricket", "Global Distribution"],
    },

    {
      id: "sa20-media-rights",
      title: "Apex Secures SA20 Media Rights — 2025-26",
      subtitle: "Second Consecutive Year of SA20 Distribution in Pakistan",
      category: "Media Rights",
      coverImage: "sa20-media-rights.jpeg",
      featured: false,
      stats: [
        { value: "2nd Year", label: "Consecutive Distribution" },
        { value: "3 Platforms", label: "Broadcast Coverage" },
      ],
      summary: "Apex Sports Consulting secured and distributed the SA20 media rights in Pakistan for the 2025-26 season — the second consecutive year — across Geo Super, Tamasha, Myco, and Dot Republic Media.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports Consulting secured and distributed the SA20 media rights in Pakistan for the 2025 season, marking the second consecutive year of collaboration with South Africa's premier T20 league."
        },
        {
          heading: "Distribution Network",
          text: "The agreement ensured comprehensive coverage of the tournament across Pakistan's leading broadcast and digital platforms. The tournament was broadcast across Geo Super, Tamasha, and Myco, providing coverage across both traditional television and digital streaming platforms."
        },
        {
          heading: "Digital Reach",
          text: "In addition, clip rights were distributed to Dot Republic Media, enabling global digital distribution across YouTube and expanding the tournament's reach across online audiences."
        },
        {
          heading: "Strategic Context",
          text: "The partnership reflects Apex Sports' growing expertise in regional media rights distribution and its ability to connect international leagues with key broadcast partners across South Asia."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["SA20", "Geo Super", "Tamasha", "Myco", "Dot Republic Media"],
      tags: ["Media Rights", "Cricket", "South Africa", "Pakistan"],
    },

    {
      id: "sony-asia-cup-distribution",
      title: "Apex Supports Sony Entertainment's Asia Cup Distribution Strategy",
      subtitle: "Strategic Media Consulting — Pakistan Market",
      category: "Media Rights",
      coverImage: "asia-cup.jpg",
      featured: true,
      stats: [
        { value: "1+ Year", label: "Consulting Relationship" },
        { value: "2 Platforms", label: "Pakistan Distribution" },
      ],
      summary: "Apex Sports Consulting serves as strategic advisor to Sony Entertainment on sports media strategy and rights distribution, supporting the Asia Cup's Pakistan rollout across PTV and Tamasha.",
      body: [
        {
          heading: "The Brief",
          text: "Apex Sports Consulting functions as a strategic advisor to Sony Entertainment, assisting with sports media strategy, rights distribution, and market execution initiatives."
        },
        {
          heading: "Asia Cup Execution",
          text: "Working with Sony on the Asia Cup cricket tournament, Apex Sports developed distribution and syndication approaches for this commercially significant event. The Asia Cup commands substantial viewership throughout South Asia, making robust regional distribution essential for maximising audience reach and commercial potential."
        },
        {
          heading: "Distribution Outcome",
          text: "Apex Sports supported Sony's syndication efforts within Pakistan by structuring partnerships with major broadcast and digital platforms. The tournament was made available through PTV for cable broadcast and Tamasha for digital streaming, providing Pakistani fans access via both traditional television and digital channels."
        },
        {
          heading: "Ongoing Relationship",
          text: "Apex Sports has maintained its consulting relationship with Sony Entertainment for over one year, offering strategic guidance on media rights distribution, market engagement, and partnership development within the sports media sector."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Sony Entertainment", "PTV", "Tamasha"],
      tags: ["Media Rights", "Cricket", "Sony", "Pakistan"],
    },

    {
      id: "naseem-shah-desert-vipers-ilt20",
      title: "Naseem Shah Joins Desert Vipers for ILT20 2025-26",
      subtitle: "Apex Facilitates Pakistan Pacer's UAE Franchise Placement",
      category: "Athlete Management",
      coverImage: "naseem-desert-vipers.jpeg",
      featured: false,
      stats: [
        { value: "$80K", label: "Contract Value (USD)" },
        { value: "ILT20", label: "UAE-Based T20 League" },
      ],
      summary: "Apex Sports facilitated the placement of Pakistan international fast bowler Naseem Shah with the Desert Vipers for the 2025-26 ILT20 season in the UAE.",
      body: [
        {
          heading: "The Placement",
          text: "Apex Sports facilitated the placement of Pakistan international fast bowler Naseem Shah with the Desert Vipers for the 2025 International League T20 (ILT20) season in the UAE."
        },
        {
          heading: "The Player",
          text: "The selection brings one of Pakistan's leading pace bowlers into one of the fastest-growing franchise leagues in world cricket, strengthening the Desert Vipers' bowling lineup ahead of the 2025 campaign."
        },
        {
          heading: "Our Role",
          text: "Apex Sports worked closely with the Desert Vipers throughout the process, coordinating the placement and supporting the contractual process to ensure a smooth onboarding for the player and franchise. Through placements such as this, Apex Sports continues to support players and franchises in navigating opportunities across the rapidly expanding international T20 ecosystem."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Desert Vipers", "ILT20"],
      tags: ["Athlete Management", "Cricket", "Naseem Shah", "ILT20"],
    },

    {
      id: "naseem-shah-cpl-2025",
      title: "Naseem Shah Signs with St Kitts & Nevis Patriots for CPL 2025",
      subtitle: "Apex Facilitates Caribbean Premier League Signing",
      category: "Athlete Management",
      coverImage: "naseem-cpl.jpg",
      featured: false,
      stats: [
        { value: "$75K", label: "Contract Value (USD)" },
        { value: "CPL", label: "Caribbean Premier League" },
      ],
      summary: "Apex Sports facilitated the signing of Pakistan international fast bowler Naseem Shah with the St Kitts & Nevis Patriots for the 2025 Caribbean Premier League season.",
      body: [
        {
          heading: "The Signing",
          text: "Apex Sports facilitated the signing of Pakistan international fast bowler Naseem Shah with the St Kitts & Nevis Patriots for the 2025 Caribbean Premier League (CPL) season."
        },
        {
          heading: "Global Franchise Presence",
          text: "The agreement strengthens Naseem's presence in global franchise cricket, bringing one of Pakistan's premier fast bowlers into one of the most competitive T20 leagues outside the ICC events calendar."
        },
        {
          heading: "Our Role",
          text: "Apex Sports worked closely with the franchise and the player's representatives to structure and finalise the agreement, ensuring a smooth transaction for all parties involved."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["St Kitts & Nevis Patriots", "CPL"],
      tags: ["Athlete Management", "Cricket", "Naseem Shah", "CPL"],
    },

    {
      id: "remitly-shaheen-shan",
      title: "Remitly x Shaheen Shah Afridi & Shan Masood",
      subtitle: "Global Fintech Brand Partnership with Pakistan's Top Cricketers",
      category: "Commercial",
      coverImage: "remitly-shaheen.jpeg",
      featured: true,
      stats: [
        { value: "ICC 2021", label: "Cricketer of the Year — Shaheen" },
        { value: "3x", label: "Consecutive PSL Titles — Lahore Qalandars" },
      ],
      summary: "Apex Sports orchestrated a collaboration between global fintech company Remitly and two of Pakistan's most respected cricketers — Shaheen Shah Afridi and Shan Masood — as brand ambassadors.",
      body: [
        {
          heading: "The Partnership",
          text: "Apex Sports announces its orchestration of a collaboration between fintech company Remitly and Pakistani cricketers Shaheen Shah Afridi and Shan Masood, who served as brand ambassadors. The partnership connected cricket heritage with Remitly's mission of maintaining financial connections across borders."
        },
        {
          heading: "The Athletes",
          text: "Shaheen Shah Afridi won the ICC Men's Cricketer of the Year award in 2021 and led Lahore Qalandars to a third consecutive PSL title, establishing him as a global sports icon. Shan Masood, known for elegant batting and cricket intelligence, provided depth and relatability to the campaign through reflective storytelling."
        },
        {
          heading: "The Campaign",
          text: "The campaign leveraged authentic messaging combining Shaheen's disciplined leadership with emotional resonance and Shan's reflective narrative. This strategy aligned with Remitly's sponsorship of major cricket events, including the ICC Men's Cricket World Cup."
        },
        {
          heading: "Strategic Value",
          text: "Apex Sports demonstrated its ability to merge iconic athletes with global brands strategically, creating campaigns that resonate authentically with South Asian cricket audiences worldwide."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Remitly", "ICC"],
      tags: ["Commercial", "Endorsements", "Cricket", "Pakistan"],
    },

    {
      id: "dp-world-dressing-room",
      title: "Apex Sports Delivers the DP World Dressing Room Show",
      subtitle: "Cricket Analysis that Became a Global Digital Hit",
      category: "Production",
      coverImage: "dp-world-dressing-room.jpg",
      featured: true,
      stats: [
        { value: "30M+", label: "Platform Views" },
        { value: "130M+", label: "Combined Video Views" },
      ],
      summary: "Apex Sports produced The DP World Dressing Room during ICC Champions Trophy 2025 — hailed by Hindustan Times as 'a masterclass in cricket, chuckle and chemistry' — generating 130M+ combined views.",
      body: [
        {
          heading: "Overview",
          text: "Apex Sports produced the DP World Dressing Room, a cricket analysis show that gained significant traction during the ICC Champions Trophy 2025. Hailed as 'a masterclass in cricket, chuckle and chemistry' by Hindustan Times, the show set a new benchmark for sports entertainment in the region."
        },
        {
          heading: "The Talent",
          text: "The show featured some of the biggest cricket legends: Wasim Akram (20+ years broadcasting experience), Waqar Younis, Ajay Jadeja, Nikhil Chopra, and was hosted by Fakhr-e-Alam (3 decades of hosting experience)."
        },
        {
          heading: "The Format",
          text: "The show's #AskTheRoom segment enabled live viewer questions, generating millions of social media views. The entertainment-first approach — combining technical insight with locker-room banter and cross-cultural dialogue — ensured every fan, regardless of location, could connect with the conversation."
        },
        {
          heading: "Distribution",
          text: "Broadcast partnerships were structured with Ten Sports and Dot Republic Media, ensuring comprehensive reach across broadcast television and digital platforms."
        },
        {
          heading: "Results",
          text: "The show generated 30M+ views on platform and 130M+ combined views across videos and related posts. A social media powerhouse with millions of organic interactions and viral clips."
        },
      ],
      quote: {
        text: "A masterclass in cricket, chuckle and chemistry.",
        author: "Hindustan Times",
        role: ""
      },
      partners: ["DP World", "Ten Sports", "Dot Republic Media"],
      tags: ["Production", "Cricket", "Content", "ICC Champions Trophy"],
    },

    {
      id: "rastah-wasim-harris",
      title: "Apex Facilitates Rastah Partnership with Wasim Akram and Harris Rauf",
      subtitle: "Two Generations of Pakistan Cricket. One Fashion Campaign.",
      category: "Commercial",
      coverImage: "rastah-wasim.jpg",
      featured: false,
      stats: [],
      summary: "Apex Sports coordinated the partnership between Rastah — one of Pakistan's most recognised fashion brands — and cricket icons Wasim Akram and Harris Rauf, blending sport and culture in a multi-activation campaign.",
      body: [
        {
          heading: "The Partnership",
          text: "The collaboration brought together two generations of Pakistan's cricketing talent with one of the country's most recognised fashion brands, creating a campaign that blended sport and culture."
        },
        {
          heading: "Our Role",
          text: "Apex Sports coordinated the partnership between Rastah and cricket athletes Wasim Akram and Harris Rauf, providing support with talent negotiations and partnership structuring."
        },
        {
          heading: "The Activations",
          text: "The campaign involved multiple activations including photoshoots, social media content, and brand-led promotional initiatives tied to the collaboration launch."
        },
        {
          heading: "Strategic Value",
          text: "The partnership demonstrates Apex Sports' work connecting athletes with brands seeking authentic collaborations to engage cricket audiences — bridging iconic legacy (Wasim Akram) with current star power (Harris Rauf) to deliver broad audience reach."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Rastah"],
      tags: ["Commercial", "Endorsements", "Cricket", "Pakistan"],
    },

    {
      id: "wasim-akram-coca-cola",
      title: "Wasim Akram x Coca-Cola — Endorsement Deal Facilitated by Apex Sports",
      subtitle: "Brand Endorsement — Global Icon Meets Global Brand",
      category: "Athlete Management",
      coverImage: "wasim-akram-coca-cola.jpg",
      featured: false,
      stats: [],
      summary: "Apex Sports facilitated a brand endorsement deal between cricket legend Wasim Akram and Coca-Cola, connecting one of the sport's most iconic figures with one of the world's most recognised consumer brands.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports Consulting facilitated the endorsement partnership between Wasim Akram and Coca-Cola. The deal leverages Wasim Akram's global recognition and deep connection with cricket fans across South Asia, MENA, and the wider diaspora."
        },
        {
          heading: "Our Role",
          text: "Apex Sports managed the full negotiation and deal structuring process, identifying the brand fit, structuring commercial terms, and ensuring delivery obligations were met on both sides."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Coca-Cola", "Wasim Akram"],
      tags: ["Athlete Management", "Endorsements", "Cricket"],
    },

    {
      id: "formula-e-south-asia-distribution",
      title: "Apex Sports & Formula E Bring World-Class Racing to South Asia",
      subtitle: "Media Rights Distribution — A-Sports, Myco & Sports Central",
      category: "Media Rights",
      coverImage: "formula-e-south-asia.webp",
      featured: false,
      stats: [
        { value: "3", label: "Broadcast Platforms" },
        { value: "South Asia", label: "Territory" },
      ],
      summary: "Apex Sports partnered with Formula E to distribute world-class electric racing content across South Asia, activating broadcast deals on A-Sports, Myco, and Sports Central.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports secured and distributed the Formula E media rights across South Asia, bringing world-class electric circuit racing to a new and rapidly growing audience in the region."
        },
        {
          heading: "Distribution",
          text: "The content was distributed across three platforms: A-Sports for traditional broadcast coverage, Myco for digital streaming, and Sports Central for additional broadcast reach — ensuring comprehensive coverage across the territory."
        },
        {
          heading: "Significance",
          text: "The deal demonstrates Apex Sports' ability to bring global motorsport properties into South Asian markets, diversifying its rights portfolio beyond cricket and expanding relationships with international sports federations."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Formula E", "A-Sports", "Myco", "Sports Central"],
      tags: ["Media Rights", "Motorsport", "South Asia", "Formula E"],
    },

    {
      id: "hong-kong-sixes-2025-row-media-rights",
      title: "Apex Sports & DRM Secure Rest of World Media Rights for Hong Kong Sixes 2025",
      subtitle: "International Media Rights — Hong Kong Sixes 2025",
      category: "Media Rights",
      coverImage: "hong-kong-sixes-2025.webp",
      featured: false,
      stats: [
        { value: "ROW", label: "Territory" },
        { value: "2025", label: "Edition" },
      ],
      summary: "Apex Sports, in partnership with DRM, secured the Rest of World media rights for the Hong Kong Sixes 2025, expanding the tournament's international broadcast footprint.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports and DRM jointly secured the Rest of World media rights for Hong Kong Sixes 2025 — one of cricket's most distinctive and entertaining short-form tournaments. The partnership enables international distribution of the event beyond its home territory."
        },
        {
          heading: "Our Role",
          text: "Apex Sports leveraged its global broadcast network to identify and secure distribution partners for the tournament across international markets, working in tandem with DRM to deliver comprehensive rights coverage."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Hong Kong Cricket", "DRM"],
      tags: ["Media Rights", "Cricket", "Hong Kong Sixes", "International"],
    },

    {
      id: "mohammad-nawaz-bpl-rajshahi",
      title: "Mohammad Nawaz Signs for Rajshahi Whackers — BPL Deal Facilitated by Apex Sports",
      subtitle: "Athlete Placement — Bangladesh Premier League",
      category: "Athlete Management",
      coverImage: "mohammad-nawaz-bpl.webp",
      featured: false,
      stats: [],
      summary: "Apex Sports Consulting facilitated the placement of Pakistan international all-rounder Mohammad Nawaz with Rajshahi Whackers in the Bangladesh Premier League (BPL).",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports Consulting facilitated the signing of Pakistan all-rounder Mohammad Nawaz for Rajshahi Whackers in the Bangladesh Premier League, securing a contract that reflects his standing as one of Pakistan's most valuable T20 assets."
        },
        {
          heading: "Our Role",
          text: "Apex Sports managed the full negotiation and placement process — identifying the franchise opportunity, structuring the playing contract, and completing the signing to meet BPL timelines."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Rajshahi Whackers", "BPL", "Mohammad Nawaz"],
      tags: ["Athlete Management", "Cricket", "BPL", "Pakistan"],
    },

    {
      id: "legends-pro-t20-media-rights",
      title: "Apex Sports Acquires World Legends Pro T20 League Media Rights",
      subtitle: "Media Rights Acquisition — World Legends Pro T20",
      category: "Media Rights",
      coverImage: "legends-pro-t20-media-rights.webp",
      featured: false,
      stats: [],
      summary: "Apex Sports acquired the media rights for the World Legends Pro T20 League, adding another major cricket property to its growing international broadcast portfolio.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports acquired the media rights for the World Legends Pro T20 League — a tournament featuring some of the game's greatest retired internationals. The acquisition adds a high-profile and commercially attractive property to Apex's media rights portfolio."
        },
        {
          heading: "Significance",
          text: "The World Legends Pro T20 League commands significant appeal across South Asia and the global cricket diaspora, drawing on the star power of legendary players. Apex Sports' acquisition reflects its continued push to build a diversified cricket rights portfolio spanning active leagues, emerging formats, and heritage properties."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["World Legends Pro T20 League"],
      tags: ["Media Rights", "Cricket", "Legends", "T20"],
    },

    {
      id: "lions-v-shaheens-media-rights",
      title: "Apex Sports Distributes Media Rights for Lions v Shaheens",
      subtitle: "Multi-Platform Media Distribution — Fancode, Myco, Ten Sports, T Sports",
      category: "Media Rights",
      coverImage: "lions-v-shaheens-media-rights.webp",
      featured: false,
      stats: [
        { value: "4+", label: "Broadcast Platforms" },
        { value: "Global", label: "Reach" },
      ],
      summary: "Apex Sports distributed the media rights for Lions v Shaheens across multiple platforms including Fancode, Myco, Ten Sports, and T Sports, with additional coverage on Sports Central, STV, and Sports Hub.",
      body: [
        {
          heading: "The Deal",
          text: "Apex Sports secured and distributed the broadcast rights for the Lions v Shaheens series, activating a multi-platform deal that ensured comprehensive coverage across television and digital channels."
        },
        {
          heading: "Distribution Network",
          text: "Official broadcasters included Fancode and Myco for digital streaming, and Ten Sports and T Sports for broadcast television. The series was also covered on Sports Central, STV, and Sports Hub — delivering wide reach across key cricket markets."
        },
        {
          heading: "Significance",
          text: "The deal further demonstrates Apex Sports' capability in multi-platform rights distribution, ensuring that domestic Pakistani cricket fixtures reach fans across traditional broadcast and digital streaming channels globally."
        },
      ],
      quote: { text: "", author: "", role: "" },
      partners: ["Fancode", "Myco", "Ten Sports", "T Sports", "Sports Central", "STV", "Sports Hub"],
      tags: ["Media Rights", "Cricket", "Pakistan", "Distribution"],
    },

    // ── ADD NEW CASE STUDIES BELOW THIS LINE ──────────────
    // {
    //   id: "unique-slug",
    //   title: "Case Study Title",
    //   subtitle: "Short Subtitle",
    //   category: "Media Rights",
    //   coverImage: "filename.jpg",
    //   featured: false,
    //   stats: [
    //     { value: "$385M", label: "Deal Value" },
    //   ],
    //   summary: "One paragraph summary shown on the card.",
    //   body: [
    //     { heading: "Section Heading", text: "Section body text." },
    //   ],
    //   quote: { text: "", author: "", role: "" },
    //   partners: ["Partner Name"],
    //   tags: ["Tag1", "Tag2"],
    // },
  ],

};

// Make available globally
if (typeof module !== "undefined") module.exports = APEX;
