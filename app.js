// All specs, test ratings, prices and links: padelreference.com product pages (September 2026)
const PADELREFERENCE_DATA = [
  { name: "HEAD Extreme Pro 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-extreme-pro-2026", image: "https://www.padelreference.com/storage/26336/Raquette-de-padel-Head-Extreme-Pro-2026-Face_03eecb49-db9b-42c7-a981-d0629cfd7827.webp", price: 279.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 7, comfort: 7, maneuverability: 8, effect: 8, tolerance: 8 } },
  { name: "HEAD Coello Motion 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-coello-motion-2026", image: "https://www.padelreference.com/storage/22257/hqrVnnKtQpdmeYFEL64oEnl3VQ1BXt-metaMS5wbmc%3D-.webp", price: 279.90, shape: "Diamond", weight: 360, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "HEAD Radical Motion 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-radical-motion-2026", image: "https://www.padelreference.com/storage/21773/IeGShXWxjrUdoTBQQPglSvzVsrNdZz-metaMjIyMDQ2IFJhZGljYWwgTW90aW9uIDIwMjZfMl8xIEtvcGllLnBuZw%3D%3D-.webp", price: 158.90, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 9, maneuverability: 8, effect: 6, tolerance: 9 } },
  { name: "HEAD Coello Vibe 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-coello-vibe-2026", image: "https://www.padelreference.com/storage/22263/EN9a0GJvbyTc4TCBRTgMkdP18QQFhS-metaMS5wbmc%3D-.webp", price: 115.90, shape: "Teardrop", weight: 355, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Beginner", ratings: { power: 7, control: 7, comfort: 9, maneuverability: 8, effect: 5, tolerance: 8 } },
  { name: "HEAD Xenon 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-xenon-2026", image: "https://www.padelreference.com/storage/25598/raquette-de-padel-head-xenon-2026-face.webp", price: 67.90, shape: "Round", weight: 363, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 5, control: 8, comfort: 8, maneuverability: 8, effect: 6, tolerance: 8 } },
  { name: "Adidas Metalbone 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/padel-rackets/p/adidas-metalbone-35-2026", image: "https://www.padelreference.com/storage/20340/sYCWhWTghFUrNzTRiFlVq07xXrjb51-metaSkQtWHF3dmcucG5n-.webp", price: 284.90, shape: "Diamond", weight: 360, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 8, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "Adidas Cross It Light 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/padel-rackets/p/adidas-cross-it-light-35-2026", image: "https://www.padelreference.com/storage/20571/wCwASkSGFT9k64OitaJ1kYs1Gla5eh-metaMWoxWHEzVmcucG5n-.webp", price: 239.90, shape: "Round", weight: 357.5, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 9, maneuverability: 9, effect: 7, tolerance: 8 } },
  { name: "Adidas Cross It Team Control 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/palas-de-padel/p/adidas-cross-it-team-control-35-2026", image: "https://www.padelreference.com/storage/21302/bB2t2g8BvCJ9nMgwkyzzSrCcxuZBRI-metaUmFxdWV0dGUtZGUtcGFkZWwtQWRpZGFzLUNyb3NzLUl0LVRlYW0tQ29udHJvbC0yMDI2LUZhY2UucG5nLndlYnA%3D-.webp", price: 149.90, shape: "Round", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 9, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Babolat Technical Viper 3.0", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-technical-viper-3-padel-racket", image: "https://www.padelreference.com/storage/22696/f1Qx1rUcLx6SNc4xNzDPeAdex84crs-metaMS5wbmc%3D-.webp", price: 309.90, shape: "Diamond", weight: 370, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 6, comfort: 7, maneuverability: 6, effect: 9, tolerance: 6 } },
  { name: "Babolat Veron Juan Lebron 3.0 2026", brand: "Babolat", url: "https://www.padelreference.com/en/babolat-padel-rackets/p/babolat-veron-juan-lebron-3.0-2026", image: "https://www.padelreference.com/storage/21016/VRswmWAQ16xXlJbIzr93BIBneL3qOV-metaMS5wbmc%3D-.webp", price: 215.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 7, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "Babolat Air Veron 2026", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-air-veron-2026-padel-racket", image: "https://www.padelreference.com/storage/22654/MvvY8bR18eLojM1eNxXxSPnfCVPHUX-metaMS5wbmc%3D-.webp", price: 198.90, shape: "Teardrop", weight: 355, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 7, comfort: 7, maneuverability: 9, effect: 8, tolerance: 8 } },
  { name: "Babolat Air Origin 2025", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-air-origin-2025", image: "https://www.padelreference.com/storage/17554/DfbgljEbx6PjcEiR4UnvQqkyiHSwoA-metaUmFxdWV0dGUtZGUtcGFkZWwtQmFib2xhdEFpci1PcmlnaW4tMjAyNS1GYWNlXzEyMDB4LndlYnA%3D-.webp", price: 99.90, shape: "Teardrop", weight: 345, balance: "Balanced", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 6, control: 7, comfort: 8, maneuverability: 9, effect: 4, tolerance: 9 } },
  { name: "Babolat Counter Origin 2025", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-counter-origin", image: "https://www.padelreference.com/storage/17544/ZW2moQ1ATPGjcKN4rT1B8xHtHClWVs-metaUmFxdWV0dGUtZGUtcGFkZWwtQmFib2xhdC1Db3VudGVyLU9yaWdpbi0yMDI1LUZhY2VfMTIwMHgud2VicA%3D%3D-.webp", price: 89.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 4, control: 7, comfort: 8, maneuverability: 8, effect: 7, tolerance: 9 } },
  { name: "Wilson Bela Pro V3 2025", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-bela-pro-v3-2025", image: "https://www.padelreference.com/storage/16658/0aT0GmC2YriC5JAo0QwbRqSthhOCIh-metad2lsc29uLWJlbGEtcHJvLXYzLTIwMjUuanBn-.webp", price: 209.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 6, effect: 7, tolerance: 7 } },
  { name: "Wilson Defy V1 2025", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-defy-v1-2025", image: "https://www.padelreference.com/storage/14948/A13XUARoGwdPR6RoFxgXaSUAOVRMht-metaMS53ZWJw-.webp", price: 168.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 5, effect: 9, tolerance: 6 } },
  { name: "Wilson Blade V4 2026", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-blade-v4-2026", image: "https://www.padelreference.com/storage/25465/Raquette-de-padel-Wilson-Blade-V4-2026-Face_46fd3774-dca0-47d1-bade-d7e0decac61a.png.webp", price: 189.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 8, comfort: 7, maneuverability: 8, effect: 8, tolerance: 8 } },
  { name: "Wilson Optix V2 Lite Lilac", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-optix-v2-lite-lilac", image: "https://www.padelreference.com/storage/24863/Raquette-de-padel-wilson-optix-v2-lite-bleu-face.png.webp", price: 99.90, shape: "Round", weight: 360, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 6, control: 8, comfort: 8, maneuverability: 9, effect: 5, tolerance: 8 } },
  { name: "Bullpadel Vertex 03 Light X-Series", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-vertex-03-light-x-series", image: "https://www.padelreference.com/storage/15677/j3HBRbojimblrN8QyogpD38fjXZFoQ-metaMS53ZWJw-.webp", price: 149.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 7, comfort: 8, maneuverability: 9, effect: 9, tolerance: 8 } },
  { name: "Bullpadel Hack 04 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-hack-04-26", image: "https://www.padelreference.com/storage/18669/BUvPSSXYXvdx7JDheMWHu1V32ojDBs-metaQlVMTFBBREVMSEFDSzA0MjAyNlBBUVVJVE9OQVZBUlJPX1BhbGFfMV85NjB4OTYwX2Nyb3BfY2VudGVyLmpwZy53ZWJw-.webp", price: 209.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 8, comfort: 7, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Bullpadel Neuron 02 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-neuron-02-2026", image: "https://www.padelreference.com/storage/18817/c5VYJ9Y3AelxwkKpnMlfI46QJxFxsP-metaUmFxdWV0dGUtZGUtcGFkZWwtQnVsbHBhZGVsLU5ldXJvbi0wMi0yMDI2LUZhY2UucG5nLndlYnA%3D-.webp", price: 216.90, shape: "Teardrop", weight: 362.5, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 5, tolerance: 7 } },
  { name: "Bullpadel Vertex 05 Hybrid 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-vertex-05-hybrid-2026", image: "https://www.padelreference.com/storage/18620/oLn8h18tGiiQX1xqfyJbks8CjGvz89-metadmVydGV4MDVoeWJyaWQyNi5qcGcud2VicA%3D%3D-.webp", price: 224.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 8, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "Bullpadel Flow 27", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-flow-27", image: "https://www.padelreference.com/storage/26272/1.webp", price: 269.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 9, effect: 8, tolerance: 8 } },
  { name: "NOX X-Hero Blue 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-x-hero-blue-2026", image: "https://www.padelreference.com/storage/19650/NlSmlXttZvbHE7lpmes8CW1io6Rj7z-metaMS5qcGc%3D-.webp", price: 64.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 5, control: 8, comfort: 8, maneuverability: 8, effect: 5, tolerance: 8 } },
  { name: "NOX X-One Silhouette 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/padel-racket-nox-x-one-silhouette-2026", image: "https://www.padelreference.com/storage/25297/fiche-produit-%287%29.webp", price: 84.90, shape: "Round", weight: 355, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 4, control: 7, comfort: 9, maneuverability: 9, effect: 6, tolerance: 8 } },
  { name: "NOX ML10 Ventus Control 3K 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-ml10-ventus-control-3k-2026", image: "https://www.padelreference.com/storage/19731/cc9oRdPEb6uG9Ikb88fpl7KLsGrWRU-metacmFxdWV0dGUtZGUtcGFkZWwtbm94LW1sMTAtdmVudHVzLWNvbnRyb2wtM2stZmFjZS53ZWJw-.webp", price: 225.90, shape: "Round", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 10, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "NOX AT10 Genius 12K Alum Xtrem 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-AT10-genius-12K-alum-xtrem-2026", image: "https://www.padelreference.com/storage/19693/THphKZTM74l1BdclZynUO9969xkm5u-metabm94LWF0MTAtbHV4dXJ5LWdlbml1cy0xMmstYWx1bS14dHJlbS0yMDI2LndlYnA%3D-.webp", price: 234.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 10, comfort: 7, maneuverability: 8, effect: 9, tolerance: 8 } },
  { name: "NOX EA10 Ventus Attack 12K Xtrem 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-EA10-ventus-attack-12K-xtrem-2026", image: "https://www.padelreference.com/storage/19735/qzwjvXHVjwojr43owQUo0s1JhAjGnE-metaZWExMC12ZW50dXMtYXR0YWNrLTEyay14dHJlbS1ieS1lZHUtYWxvbnNvLXBlYTEwdmVudHVzYTEyMjYtODQzNTc3ODkwM.webp", price: 234.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Siux Beat Play Control 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-beat-play-control-2026", image: "https://www.padelreference.com/storage/19219/qB5CH2LdkxqF58KOGBMxH4jXgike1l-metaYmVhdCBjb250cm9sLnBuZw%3D%3D-.webp", price: 78.90, shape: "Round", weight: 362.5, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 5, control: 6, comfort: 8, maneuverability: 8, effect: 5, tolerance: 9 } },
  { name: "Siux Astra Go Control 2026", brand: "Siux", url: "https://www.padelreference.com/en/siux-padel-rackets/p/siux-astra-go-control-2026", image: "https://www.padelreference.com/storage/21859/WXiAQRf3GlUQUAD96APueImpEI5JyZ-metaMS5qcGc%3D-.webp", price: 94.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 8, effect: 6, tolerance: 6 } },
  { name: "Siux Trilogy Elite 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-trilogy-elite-2026", image: "https://www.padelreference.com/storage/19174/4w6f89jpyV3nebYLxwN0VNgGMJVzut-metaMS5wbmc%3D-.webp", price: 169.90, shape: "Round", weight: 367.5, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 7, control: 10, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Siux Fenix Elite 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-fenix-elite-2026", image: "https://www.padelreference.com/storage/19209/plmBLDnl8omVDf9yktGQ94MrNgzo7E-metaMS5wbmc%3D-.webp", price: 169.90, shape: "Diamond", weight: 362.5, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 7, effect: 7, tolerance: 7 } },
  { name: "Siux Electra Elite 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-electra-elite-2026", image: "https://www.padelreference.com/storage/19194/OorKLp9u4xuxfkonF5FKSpL6Ffaa3N-metaMS5wbmc%3D-.webp", price: 169.90, shape: "Teardrop", weight: 362.5, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "StarVie Helion 2024", brand: "StarVie", url: "https://www.padelreference.com/en/starvie-padel-rackets/p/starvie-helion-2024", image: "https://www.padelreference.com/storage/9074/gbeNT8e0OxyRqfYY6L8Zmg73Q8n8xW-metaMzgucG5n-.webp", price: 99.90, shape: "Round", weight: 365, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 9, comfort: 8, maneuverability: 8, effect: 7, tolerance: 7 } },
  { name: "StarVie Aquila 2025", brand: "StarVie", url: "https://www.padelreference.com/en/starvie-padel-rackets/p/starvie-aquila-2025", image: "https://www.padelreference.com/storage/12366/n5cK5rjjzlyhYoLLT3gjq3wWe1JPV0-metaMi5wbmc%3D-.webp", price: 160.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 8, control: 7, comfort: 7, maneuverability: 7, effect: 7, tolerance: 7 } },
  { name: "StarVie Metheora Pro Touch 2025", brand: "StarVie", url: "https://www.padelreference.com/en/padel-rackets/p/starvie-metheora-pro-touch-2025", image: "https://www.padelreference.com/storage/14771/lsz79NK0ZxR6brt71bKR4pp4i5n4bu-metaQ29waWUgZGUgU2FucyB0aXRyZSAoMSkucG5n-.webp", price: 169.90, shape: "Round", weight: 365, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 10, comfort: 7, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "StarVie Triton Pro 2025", brand: "StarVie", url: "https://www.padelreference.com/en/starvie-padel-rackets/p/starvie-triton-pro-2025", image: "https://www.padelreference.com/storage/12392/s3l7vzCHiajgxy9D5PE9hBrdRDY0Nw-metaMi5wbmc%3D-.webp", price: 229, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 6, effect: 8, tolerance: 9 } },
  { name: "StarVie Brava Pro 2025", brand: "StarVie", url: "https://www.padelreference.com/en/padel-rackets/p/starvie-brava-pro-2025", image: "https://www.padelreference.com/storage/12454/RCt6yn1Z8s2iaSr0KQM9W0DsLHRJ7a-metaNC5wbmc%3D-.webp", price: 159, shape: "Teardrop", weight: 367.5, balance: "Balanced", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 8, control: 9, comfort: 8, maneuverability: 9, effect: 9, tolerance: 8 } },
  { name: "Tecnifibre Curva Power 2026", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-curva-power-2026", image: "https://www.padelreference.com/storage/25782/16CURPOW26-01.webp", price: 249.90, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 7, effect: 7, tolerance: 8 } },
  { name: "Tecnifibre Curva Soft 2026", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-curva-soft-2026", image: "https://www.padelreference.com/storage/25778/16CURSOF26-01.webp", price: 199.90, shape: "Teardrop", weight: 358, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 9, effect: 7, tolerance: 8 } },
  { name: "Tecnifibre Bomba Lite", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-bomba-lite", image: "https://www.padelreference.com/storage/23616/OKNCMVffB0objxI6dWQgjRfD7VQvyo-metaMS5wbmc%3D-.webp", price: 135.90, shape: "Diamond", weight: 345, balance: "Balanced", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 6, control: 7, comfort: 9, maneuverability: 9, effect: 6, tolerance: 9 } },
  { name: "Tecnifibre Bomba Max", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/tecnifibre-bomba-max", image: "https://www.padelreference.com/storage/23597/r6ZrDBWZudILa4zP5BV0gZOXK9fxfy-metaMS5wbmc%3D-.webp", price: 215.90, shape: "Diamond", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 6, maneuverability: 7, effect: 7, tolerance: 6 } },
  { name: "Tecnifibre Wall Master 370", brand: "Tecnifibre", url: "https://www.padelreference.com/en/padel-rackets/p/wall-master-370", image: "https://www.padelreference.com/storage/9483/7WfVvSDYTjhkKZm3VleFo7RDn7wimM-metacmFxdWV0dGUtZGUtcGFkZWwtdGVjbmlmaWJyZS13YWxsLW1hc3Rlci0yMDIzLTM3MC1mYWNlXzEyMDB4LmpwZw%3D%3D-.webp", price: 109.90, shape: "Round", weight: 370, balance: "Handle Heavy", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Dunlop FX Pro", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-fx-pro", image: "https://www.padelreference.com/storage/21733/e4UVtdWZRvG5kmzVgm2YMI7b0mO1hn-metaMS5wbmc%3D-.webp", price: 189.90, shape: "Teardrop", weight: 370, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Dunlop Nanomax Lite 2026", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-nanomax-lite-2026", image: "https://www.padelreference.com/storage/23786/xBwk7rqqAA5hENc1RZMCFnodXJpIjx-metacmFxdWV0dGUtZGUtcGFkZWwtZHVubG9wLW5hbm9tYXgtbGl0ZS0yMDI2LWZhY2Uud2VicA%3D%3D-.webp", price: 74.90, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 7, control: 7, comfort: 8, maneuverability: 9, effect: 6, tolerance: 8 } },
  { name: "Dunlop Nanomax Pro 2026", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-nanomax-pro-2026", image: "https://www.padelreference.com/storage/23779/lhQxsoWF8QBsSk2mIMSRJu35RvfRbv-metaUmFxdWV0dGUtZGUtcGFkZWwtRHVubG9wLU5hbm9tYXgtUHJvLTIwMjYtRmFjZS53ZWJw-.webp", price: 84.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 8, effect: 6, tolerance: 8 } },
  { name: "Dunlop Galactica OS 2025", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-galactica-os-2025", image: "https://www.padelreference.com/storage/18023/beRgQbJZB42vXIchhc7KBOg3he6oyo-metaZHVubG9wLWdhbGFjdGljYS1vcy0yMDI1LmpwZw%3D%3D-.webp", price: 128.90, shape: "Round", weight: 355, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 8, comfort: 7, maneuverability: 8, effect: 7, tolerance: 6 } },
  { name: "Dunlop PDL 25 Galactica Pro", brand: "Dunlop", url: "https://www.padelreference.com/en/padel-rackets/p/dunlop-pdl-25-galactica-pro", image: "https://www.padelreference.com/storage/13853/DF2ftDD7tTqIsYMI1o7jnJ6OyAOrkZ-metaRGVzaWduIHNhbnMgdGl0cmUtNi5wbmc%3D-.webp", price: 189.90, shape: "Teardrop", weight: 370, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 7, maneuverability: 6, effect: 9, tolerance: 7 } },
  { name: "Oxdog Ultimate Court 2026", brand: "Oxdog", url: "https://www.padelreference.com/en/padel-rackets/p/oxdog-ultimate-court-2026", image: "https://www.padelreference.com/storage/21452/1hkpgPuniCsz0gvAkf2sb27HdxvwKe-metaMS5wbmc%3D-.webp", price: 129.90, shape: "Diamond", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 6, comfort: 8, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "Osaka Deshi Control Green/Black", brand: "Osaka", url: "https://www.padelreference.com/en/padel-rackets/p/osaka-deshi-control-greenblack", image: "https://www.padelreference.com/storage/25056/1.webp", price: 89.90, shape: "Round", weight: 360, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 7, control: 8, comfort: 7, maneuverability: 8, effect: 8, tolerance: 6 } },
  { name: "Drop Shot Axion Attack 2.0", brand: "Drop Shot", url: "https://www.padelreference.com/en/padel-rackets/p/drop-shot-axion-attack-20", image: "https://www.padelreference.com/storage/24714/124164-pala-drop-shot-axion-attack-2-0-dp344018-1200x1200-1.jpg.webp", price: 287.90, shape: "Diamond", weight: 360, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 8, effect: 8, tolerance: 7 } },
  { name: "Drop Shot Axion Attack Soft 2026", brand: "Drop Shot", url: "https://www.padelreference.com/en/padel-rackets/p/drop-shot-axion-attack-soft-2026", image: "https://www.padelreference.com/storage/24718/Raquette-Drop-Shot-Jon-Sanz-Axion-Attack-Soft--2026--0-800x800.jpg.webp", price: 251.90, shape: "Teardrop", weight: 370, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 8, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "Drop Shot Conqueror Attack 2.0 2026", brand: "Drop Shot", url: "https://www.padelreference.com/en/padel-rackets/p/drop-shot-conqueror-attack-20-2026", image: "https://www.padelreference.com/storage/24727/drop-shot-conqueror-attack-20-2026.webp", price: 280.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 8, effect: 8, tolerance: 8 } },
  { name: "Drop Shot Explorer Pro Attack Soft 2026", brand: "Drop Shot", url: "https://www.padelreference.com/en/padel-rackets/p/drop-shot-explorer-pro-attack-soft-2026", image: "https://www.padelreference.com/storage/24722/124175-pala-drop-shot-explorer-pro-attack-soft-dp344009-1500x1500-vista1.jpg.webp", price: 251.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 8, maneuverability: 8, effect: 9, tolerance: 8 } },
  { name: "Drop Shot Explorer Pro Attack 2.0", brand: "Drop Shot", url: "https://www.padelreference.com/en/padelschlager/p/drop-shot-explorer-pro-attack-20", image: "https://www.padelreference.com/storage/24710/124174-pala-drop-shot-explorer-pro-attack-2-0-dp3440416-1500x1500-1.jpg.webp", price: 271.90, shape: "Teardrop", weight: 360, balance: "Head Heavy", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 9, control: 8, comfort: 6, maneuverability: 6, effect: 8, tolerance: 7 } },
  { name: "Joma Hyper Pro HRD", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-hyper-pro-hrd", image: "https://www.padelreference.com/storage/26303/394c09bfa887d8b98d0a055bd9d013916e9bae48_712600015_1.webp", price: 169.90, shape: "Diamond", weight: 370, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 6, effect: 9, tolerance: 8 } },
  { name: "HEAD Coello Pro 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-coello-pro-2026", image: "https://www.padelreference.com/storage/15993/5cHcZtXb7NOY3TZMjwBkhVIgHwEeww-metacmcucG5n-.webp", price: 279.90, shape: "Diamond", weight: 375, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 8, comfort: 8, maneuverability: 7, effect: 7, tolerance: 7 } },
  { name: "Head Radical Pro 2026", brand: "HEAD", url: "https://www.padelreference.com/en/raquettes-de-padel/p/head-radical-pro-2026", image: "https://www.padelreference.com/storage/21762/byOwd7x0pWjj9rejNTkCqceLuDQKZ8-metaMjIyMDM2IFJhZGljYWwgUHJvIDIwMjZfMiBLb3BpZS5wbmc%3D-.webp", price: 174.90, shape: "Teardrop", weight: 370, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 8, maneuverability: 8, effect: 6, tolerance: 8 } },
  { name: "Head Speed XTR 2026", brand: "HEAD", url: "https://www.padelreference.com/en/padel-rackets/p/head-speed-xtr-2026", image: "https://www.padelreference.com/storage/25590/raquette-de-padel-head-speed-xtr-2026-face2.webp", price: 119.90, shape: "Teardrop", weight: 368, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 8, comfort: 6, maneuverability: 7, effect: 6, tolerance: 7 } },
  { name: "Adidas Metalbone Carbon 3.5 2026", brand: "Adidas", url: "https://www.padelreference.com/en/padel-rackets/p/adidas-metalbone-carbon-35-2026", image: "https://www.padelreference.com/storage/20369/siCsngEFYngAZSnXV2dRa9fOrommUZ-metabG0wM3BKNHcucG5n-.webp", price: 214.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 8, maneuverability: 8, effect: 8, tolerance: 9 } },
  { name: "Adidas Arrow Hit Carbon 2026", brand: "Adidas", url: "https://www.padelreference.com/en/padel-rackets/p/adidas-arrow-hit-carbon-2026", image: "https://www.padelreference.com/storage/22093/wgQaN0NRvwTmsSGdIzxCp81l1RhFOw-metaMDAzMDYwMDBfMDAwLndlYnA%3D-.webp", price: 190.90, shape: "Round", weight: 365, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 7, comfort: 8, maneuverability: 7, effect: 7, tolerance: 8 } },
  { name: "Babolat Counter Viper 2026", brand: "Babolat", url: "https://www.padelreference.com/en/babolat-padel-rackets/p/babolat-counter-viper-2026-padel-racket", image: "https://www.padelreference.com/storage/22645/ds7kvpkp6EgHfHRDKf40CZDW01nV2u-metaMS5wbmc%3D-.webp", price: 254.90, shape: "Round", weight: 365, balance: "Handle Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 7, control: 9, comfort: 7, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "Babolat Air Viper 2026", brand: "Babolat", url: "https://www.padelreference.com/en/padel-rackets/p/babolat-air-viper-2026-padel-racket", image: "https://www.padelreference.com/storage/22636/ryM8UdqMPrdi9wd0S06EhmC2e70iO5-metaMS5wbmc%3D-.webp", price: 280.90, shape: "Diamond", weight: 355, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 9, effect: 8, tolerance: 8 } },
  { name: "Wilson Bela V3 2025", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-bela-v3-2025", image: "https://www.padelreference.com/storage/16664/NXVxhBaRw0QFiHchXnFd9DylqFMkDF-metad2lsc29uLWJlbGEtdjMtMjAyNS5qcGc%3D-.webp", price: 179.90, shape: "Diamond", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 8, control: 9, comfort: 8, maneuverability: 8, effect: 8, tolerance: 8 } },
  { name: "Wilson Defy Pro V1 2025", brand: "Wilson", url: "https://www.padelreference.com/en/raquettes-de-padel/p/wilson-defy-pro-v1-2025", image: "https://www.padelreference.com/storage/14960/hl3xHnw5bWElEDGSjMcmUXamxk33vw-metaMS53ZWJw-.webp", price: 199.90, shape: "Diamond", weight: 370, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 5, effect: 9, tolerance: 7 } },
  { name: "Wilson Endure Pro V1", brand: "Wilson", url: "https://www.padelreference.com/en/padel-rackets/p/wilson-endure-pro-v1", image: "https://www.padelreference.com/storage/23577/jN77NvPAcHB38rCcHuVWgjg8WMyQ12-metaMS5wbmc%3D-.webp", price: 200.90, shape: "Round", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 7, control: 10, comfort: 7, maneuverability: 9, effect: 8, tolerance: 7 } },
  { name: "Bullpadel Vertex 05 2027", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-vertex-05-2027", image: "https://www.padelreference.com/storage/26175/vertex-05.webp", price: 349.90, shape: "Diamond", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 8, maneuverability: 8, effect: 9, tolerance: 8 } },
  { name: "Bullpadel Hack 04 Hybrid 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/padel-rackets/p/bullpadel-hack-04-hybrid-2026", image: "https://www.padelreference.com/storage/18637/Hjs50i7l9fvp9BeQ48fVroWHufaWIp-metaUmFxdWV0dGUtZGUtcGFkZWwtQnVsbHBhZGVsLUhhY2stMDQtSHlicmlkLTIwMjYtRmFjZS5wbmc%3D-.webp", price: 209.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 7, maneuverability: 7, effect: 8, tolerance: 8 } },
  { name: "Bullpadel Vertex 05 GEO 2026", brand: "Bullpadel", url: "https://www.padelreference.com/en/palas-de-padel/p/bullpadel-vertex-05-geo-2026", image: "https://www.padelreference.com/storage/18625/ecsNM6BcUbVuxUWipkzVN7AynGwfY8-metaUmFxdWV0dGUtZGUtcGFkZWwtQnVsbHBhZGVsLVZlcnRleC0wNS1HZW8tMjAyNi1GYWNlLnBuZw%3D%3D-.webp", price: 219.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "NOX AT10 Genius Attack 18K Alum 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-AT10-genius-attack-18K-alum-2026", image: "https://www.padelreference.com/storage/19675/HEfbXd1kaCFdovXPFYidO64R1qO7XJ-metaYXQxMC1sdXh1cnktZ2VuaXVzLWF0dGFjay0xOGstYWx1bS0yMDI2LWJ5LWFndXN0aW4tdGFwaWEtcGF0MTBnZW5pdXNhd.webp", price: 229.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 10, control: 8, comfort: 8, maneuverability: 8, effect: 8, tolerance: 9 } },
  { name: "NOX VK10 Ventus Control 12K 2026", brand: "NOX", url: "https://www.padelreference.com/en/padel-rackets/p/nox-vk10-ventus-control-12k-2026", image: "https://www.padelreference.com/storage/19727/qKgVFvN2Kfp1czXsULqIJdAX3HVvfO-metacmFxdWV0dGUtZGUtcGFkZWwtTm94LVZLMTAtQ29udHJvbGUteHRyZW1lLWZhY2Uud2VicA%3D%3D-.webp", price: 219.90, shape: "Round", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 9, comfort: 8, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "Siux Trilogy Pro Black FOG 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-trilogy-pro-black-fog-2026", image: "https://www.padelreference.com/storage/20737/g5ixFwd9yi7aaGpgVlb4Fn46Rqxx2o-metacmFxdWV0dGUtZGUtcGFkZWwtc2l1eC10cmlsb2d5LXByby02LW5vaXItMjAyNi1GQUNFLnBuZy53ZWJw-.webp", price: 179.90, shape: "Round", weight: 362.5, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 7, control: 10, comfort: 8, maneuverability: 8, effect: 7, tolerance: 8 } },
  { name: "Siux Pegasus Elite 4 2026", brand: "Siux", url: "https://www.padelreference.com/en/padel-rackets/p/siux-pegasus-elite-4-2026", image: "https://www.padelreference.com/storage/20954/us4C5vDpiies0db12qb9YDLuCzovrM-metaUmFxdWV0dGUtZGUtcGFkZWwtU2l1eC1QZWdhc3VzLUVsaXRlLTQtMjAyNi1GYWNlLnBuZy53ZWJw-.webp", price: 180.90, shape: "Teardrop", weight: 367.5, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 7, maneuverability: 7, effect: 7, tolerance: 9 } },
  { name: "Varlion Bourne Summum Carbon Black 2024", brand: "Varlion", url: "https://www.padelreference.com/en/padel-rackets/p/varlion-bourne-summum-carbon-black-24", image: "https://www.padelreference.com/storage/9269/2RLuHjvwJG8VuVZsfD5mqCesIvKkec-metaQm91cm5lIENCIFN1bW11bSAxLmpwZWc%3D-.webp", price: 214, shape: "Teardrop", weight: 367.5, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 6, effect: 6, tolerance: 7 } },
  { name: "Varlion LW Summum Carbon Black", brand: "Varlion", url: "https://www.padelreference.com/en/padel-rackets/p/lw-summum-carbon-black", image: "https://www.padelreference.com/storage/9263/PYmRivuoTS2rV42uDmYPMUOSkeXWQy-metaTFcgU3VtbXVtIENCIC5qcGVn-.webp", price: 159, shape: "Round", weight: 355, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 6, control: 8, comfort: 9, maneuverability: 10, effect: 7, tolerance: 9 } },
  { name: "Varlion Bourne Hexagon 8.8", brand: "Varlion", url: "https://www.padelreference.com/en/padel-rackets/p/bourne-hexagon-88", image: "https://www.padelreference.com/storage/9253/DROFQwlMNshdM6b9XkspfetPQXt96E-metaVmFybGlvbiBCb3VybmUgLmpwZWc%3D-.webp", price: 79, shape: "Diamond", weight: 345, balance: "Head Heavy", feel: "Stiff / Power", level: "Beginner", ratings: { power: 6, control: 6, comfort: 8, maneuverability: 8, effect: 5, tolerance: 7 } },
  { name: "Varlion Maxima Summum Prisma Soft", brand: "Varlion", url: "https://www.padelreference.com/en/padelschlager/p/varlion-maxima-summum-prisma-soft-2", image: "https://www.padelreference.com/storage/9306/sxMm4H5AUvVifXyLSRn89TunoEbnoh-metaTWF4aW1hLmpwZWc%3D-.webp", price: 169, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 7, effect: 6, tolerance: 7 } },
  { name: "Black Crown Patron Xtrem 2025", brand: "Black Crown", url: "https://www.padelreference.com/en/padel-rackets/p/black-crown-patron-xtrem-2025", image: "https://www.padelreference.com/storage/16113/fHhpUEo5NFXi0GZOgtmXQv2UxH8niU-metaMS53ZWJw-.webp", price: 233, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 8, effect: 9, tolerance: 7 } },
  { name: "Black Crown Special Invictus 2025", brand: "Black Crown", url: "https://www.padelreference.com/en/padel-rackets/p/black-crown-special-invictus-2025", image: "https://www.padelreference.com/storage/16063/WZOnYbsdiGU2j1MABWPA3qP68jSz7k-metacmFxdWV0dGUtZGUtcGFkZWwtYmxhY2stY3Jvd24tc3BlY2lhbC1pbnZpY3R1cy0yMDI1LndlYnA%3D-.webp", price: 237, shape: "Teardrop", weight: 360, balance: "Balanced", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 7, control: 7, comfort: 8, maneuverability: 7, effect: 9, tolerance: 6 } },
  { name: "Black Crown Piton 4.0 2025", brand: "Black Crown", url: "https://www.padelreference.com/en/padel-rackets/p/black-crown-piton-40-2025", image: "https://www.padelreference.com/storage/15964/B96Jz3KwZddkDaRSEugJYPoQj61M3T-metaUmFxdWV0dGUtZGUtcGFkZWwtQmxhY2stQ3Jvd24tUGl0b24tNC4wLUZhY2VfMTIwMHgud2VicA%3D%3D-.webp", price: 99, shape: "Round", weight: 370, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 5, control: 8, comfort: 7, maneuverability: 8, effect: 5, tolerance: 8 } },
  { name: "Black Crown Piton Epic Energy 2025", brand: "Black Crown", url: "https://www.padelreference.com/en/padel-rackets/p/black-crown-piton-epic-energy-2025", image: "https://www.padelreference.com/storage/15857/s22cTMOzT0LKNcc2OXaWZYbryrCujC-metaMS53ZWJw-.webp", price: 314, shape: "Teardrop", weight: 362.5, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Joma Tournament Pro 2.0", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-tournament-pro-20", image: "https://www.padelreference.com/storage/16153/QhTWuQL8HXBamrzVEENIdJur3EP5Ab-metaMS5qcGc%3D-.webp", price: 238.50, shape: "Teardrop", weight: 355, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 6, tolerance: 7 } },
  { name: "Joma Tournament Pro Juani Mieres", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-tournament-pro-juani-mieres", image: "https://www.padelreference.com/storage/11062/epx5iY0HkIyEqEvzGhJ60qGEXKd3Pd-metaam9tYS1yYXF1ZXR0ZS1kZS1wYWRlbC1wb3VyLWZlbW1lLXRvdXJuYW1lbnQtanVhbmktbWllcmVzLndlYnA%3D-.webp", price: 169.90, shape: "Teardrop", weight: 355, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Joma Tournament Pro Black/Red", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-tournament-pro-black-red", image: "https://www.padelreference.com/storage/11060/44RriDe6EroSOU2g70SoWL9rEWiUU8-metaam9tYS10b3VybmFtZW50LXByby1ub2lyLXJvdWdlLTIwMjQuanBn-.webp", price: 109.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 7, effect: 8, tolerance: 7 } },
  { name: "Joma Tournament Pro Yellow Black 2024", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-tournament-pro-yellow-black-2024", image: "https://www.padelreference.com/storage/9669/ED76HXkfEtYxEiuD1FMNKYWQXq5lKJ-metaam9tYS10b3VybmFtZW50LXByby15ZWxsb3ctYmxhY2stMjAyNCAoMSkuanBn-.webp", price: 149.90, shape: "Teardrop", weight: 365, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Joma Slam Soft 2.0", brand: "Joma", url: "https://www.padelreference.com/en/raquettes-de-padel/p/joma-slam-soft-20", image: "https://www.padelreference.com/storage/16117/FPowuAvJuN5KLU5CKvdVfWay5zLXAg-metaMS5qcGc%3D-.webp", price: 99.00, shape: "Diamond", weight: 360, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Beginner", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 7, effect: 5, tolerance: 7 } },
  { name: "Joma Slam Pro 2.0 Black/Turquoise", brand: "Joma", url: "https://www.padelreference.com/en/padelracketar/p/joma-slam-pro-20-black-and-turquoise", image: "https://www.padelreference.com/storage/15647/2gxqKw9PEuLW0kqQFcr1e8h10O1hp4-metacGFsYS1qb21hLXNsYW0tcHJvLTItMC1uZWdyby10dXJxdWVzYS0yMDI1LTEtMTEwMHgxMTAwLmpwZw%3D%3D-.webp", price: 166.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 7, effect: 7, tolerance: 8 } },
  { name: "Joma Slam Pro White Gold 2024", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-slam-pro-white-gold-2024", image: "https://www.padelreference.com/storage/15595/RtURWjb9j8BHz0CBusEyUwg8vCjp3s-metaam9tYS1zbGFtLXByby1hMS1ibGFuYy1vci0yMDI0LmpwZw%3D%3D-.webp", price: 126.90, shape: "Teardrop", weight: 370, balance: "Balanced", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 9, control: 9, comfort: 7, maneuverability: 7, effect: 7, tolerance: 7 } },
  { name: "Joma Slam Pro Black/Silver", brand: "Joma", url: "https://www.padelreference.com/en/raquette-de-padel-joma/p/joma-slam-pro-black-silver", image: "https://www.padelreference.com/storage/11027/Rfm9whqe9m6GqGR7SdONMTr6U9m0rK-metaam9tYS1zbGFtLXByby1ub2lyLWFyZ2VudC0yMDI0LmpwZw%3D%3D-.webp", price: 99.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Advanced to Expert", ratings: { power: 8, control: 6, comfort: 7, maneuverability: 6, effect: 5, tolerance: 8 } },
  { name: "Joma Slam Anthracite Green", brand: "Joma", url: "https://www.padelreference.com/en/raquette-de-padel-joma/p/joma-slam-anthracite-green", image: "https://www.padelreference.com/storage/9676/NKYxDiKQe3xBRCOOuzCCdJ46oFRGCY-metaam9tYS1zbGFtLXZlcnQtYW50aHJhY2l0ZS0yMDIzICgzKS5qcGc%3D-.webp", price: 94.90, shape: "Teardrop", weight: 365, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 6, control: 7, comfort: 9, maneuverability: 7, effect: 5, tolerance: 8 } },
  { name: "Joma Gold Pro Black Gold", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-gold-pro-black-gold", image: "https://www.padelreference.com/storage/15641/cCtUGHqPJQHxjzzQg4tfS3mDhZLSbP-metacGFsYS1qb21hLWdvbGQtcHJvLTItMC1uZWdyby1hbWFyaWxsby0yMDI1LTEwMDB4MTAwMC5qcGc%3D-.webp", price: 149.90, shape: "Diamond", weight: 355, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 7, comfort: 7, maneuverability: 7, effect: 6, tolerance: 7 } },
  { name: "Joma Gold Pro Yellow Fluor", brand: "Joma", url: "https://www.padelreference.com/en/raquettes-de-padel/p/joma-gold-pro-yellow-fluor", image: "https://www.padelreference.com/storage/9659/nWYhc1rGEgK8mZAp59DOvpq0PFEAJo-metaam9tYS1nb2xkLXByby1ibGFjay15ZWxsb3ctZmx1b3ItMjAyNC5qcGc%3D-.webp", price: 149.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 8, maneuverability: 7, effect: 8, tolerance: 6 } },
  { name: "Joma Gold Pro Green/Yellow", brand: "Joma", url: "https://www.padelreference.com/en/padelracketar/p/joma-gold-pro-green-and-yellow", image: "https://www.padelreference.com/storage/9657/ctFrehNA5qLUP6cMUc1i1tFzsWq9nC-metaam9tYS1nb2xkLXByby1ncmVlbi15ZWxsb3ctMjAyNC5qcGc%3D-.webp", price: 139.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 6, effect: 8, tolerance: 6 } },
  { name: "Joma Gold Pro Black/Gray", brand: "Joma", url: "https://www.padelreference.com/en/padel-rackets/p/joma-gold-pro-black", image: "https://www.padelreference.com/storage/9623/Pv8kw2nyp1JwBXjhKAE4ghyKDvjo9a-metaSm9tYSBHb2xkIFByby0yLTIucG5nMS5wbmc%3D-.webp", price: 149.90, shape: "Diamond", weight: 365, balance: "Head Heavy", feel: "Stiff / Power", level: "Advanced to Expert", ratings: { power: 9, control: 8, comfort: 7, maneuverability: 6, effect: 8, tolerance: 6 } },
  { name: "Royal Padel 760 Carrera 2023", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-760-carrera-2023", image: "https://www.padelreference.com/storage/6235/raquette-royal-padel-760-carrera-2023.webp", price: 109.90, shape: "Round", weight: 360, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 7, control: 9, comfort: 7, maneuverability: 8, effect: 5, tolerance: 8 } },
  { name: "Royal Padel 760 Carrera Woman 2023", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-rp-760-carrera-woman-2023", image: "https://www.padelreference.com/storage/6234/u.webp", price: 109.90, shape: "Round", weight: 367.5, balance: "Handle Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 7, effect: 5, tolerance: 8 } },
  { name: "Royal Padel 771 EFE", brand: "Royal Padel", url: "https://www.padelreference.com/en/palas-de-padel/p/royal-padel-771-efe", image: "https://www.padelreference.com/storage/6229/raquette-royal-padel-771-efe.webp", price: 119.90, shape: "Diamond", weight: 370, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 6, comfort: 8, maneuverability: 7, effect: 5, tolerance: 6 } },
  { name: "Royal Padel 850 Pure 2023", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-850-pure-2023", image: "https://www.padelreference.com/storage/6226/raquette-royal-padel-850-pure-2023.webp", price: 119.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 7, comfort: 7, maneuverability: 6, effect: 9, tolerance: 6 } },
  { name: "Royal Padel 850 Pure Woman 2023", brand: "Royal Padel", url: "https://www.padelreference.com/en/padelschlager/p/royal-padel-850-pure-woman-2023", image: "https://www.padelreference.com/storage/6223/raquette-de-padel-royal-padel-850-pure-woman-2023.webp", price: 119.90, shape: "Diamond", weight: 357.5, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 5, comfort: 8, maneuverability: 7, effect: 9, tolerance: 6 } },
  { name: "Royal Padel Cross Pro 2023", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-cross-pro-2023", image: "https://www.padelreference.com/storage/6220/raquette-royal-padel-cross-pro-2023.webp", price: 260.90, shape: "Diamond", weight: 367.5, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 8, control: 7, comfort: 8, maneuverability: 7, effect: 5, tolerance: 7 } },
  { name: "Royal Padel Whip Extreme 2024", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-whip-extreme-2024", image: "https://www.padelreference.com/storage/6217/raquette-royal-padel-whip-extreme-2024.webp", price: 201.90, shape: "Teardrop", weight: 367.5, balance: "Balanced", feel: "Stiff / Power", level: "Intermediate", ratings: { power: 8, control: 8, comfort: 8, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Royal Padel 34 Aniversario Poly 2024", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-34-aniversario-poly-2024", image: "https://www.padelreference.com/storage/6214/raquette-royal-padel-34-aniversario-poly-2024.webp", price: 271.90, shape: "Teardrop", weight: 370, balance: "Balanced", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 7 } },
  { name: "Royal Padel 34 Aniversario Light Woman 2024", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-34-aniversario-light-woman-2024", image: "https://www.padelreference.com/storage/6209/raquette-royal-padel-34-aniversario-light-woman-2024.webp", price: 209.90, shape: "Teardrop", weight: 355, balance: "Balanced", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 7, maneuverability: 6, effect: 9, tolerance: 7 } },
  { name: "Royal Padel R Ace 2024", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-r-ace-2024", image: "https://www.padelreference.com/storage/6201/raquette-royal-padel-r-ace-2024.webp", price: 297.90, shape: "Diamond", weight: 362.5, balance: "Head Heavy", feel: "Hybrid / Intermediate", level: "Intermediate", ratings: { power: 8, control: 6, comfort: 7, maneuverability: 6, effect: 9, tolerance: 6 } },
  { name: "Royal Padel M27 LTD 2024", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-m27-ltd-2024", image: "https://www.padelreference.com/storage/6193/raquette-royal-padel-m27-ltd-2024.webp", price: 239.90, shape: "Round", weight: 367.5, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 9, comfort: 7, maneuverability: 7, effect: 9, tolerance: 8 } },
  { name: "Royal Padel M27 Control-X 2023", brand: "Royal Padel", url: "https://www.padelreference.com/en/royal-padel-padel-rackets/p/royal-padel-m27-control-x-2023", image: "https://www.padelreference.com/storage/6178/raquette-royal-padel-m27-control-x-2023.webp", price: 299.90, shape: "Round", weight: 362.5, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 8, comfort: 7, maneuverability: 7, effect: 7, tolerance: 8 } },
  { name: "Royal Padel RP 24 Whip Polietileno 2024", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-rp-24-whip-polietileno-2024", image: "https://www.padelreference.com/storage/6174/raquette-royal-padel-rp-24-whip-polietileno-2024.webp", price: 179.90, shape: "Round", weight: 362.5, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Intermediate", ratings: { power: 7, control: 7, comfort: 9, maneuverability: 7, effect: 9, tolerance: 9 } },
  { name: "Royal Padel 4.0 Oxide Mexico WPT", brand: "Royal Padel", url: "https://www.padelreference.com/en/padel-rackets/p/royal-padel-40-oxide-mexico-wpt", image: "https://www.padelreference.com/storage/6240/raquette-royal-padel-40-oxide-mexico-wpt.webp", price: 229.90, shape: "Diamond", weight: 370, balance: "Head Heavy", feel: "Flexible / Comfort", level: "Advanced to Expert", ratings: { power: 7, control: 8, comfort: 8, maneuverability: 7, effect: 9, tolerance: 6 } }
];

const BALANCE_MAP = { "Handle Heavy": "Low", "Balanced": "Medium", "Head Heavy": "High" };
const FEEL_HARDNESS = { "Flexible / Comfort": 4, "Hybrid / Intermediate": 5.5, "Stiff / Power": 8 };
const LEVEL_MAP = { "Beginner": "Beginner", "Intermediate": "Intermediate", "Advanced to Expert": "Advanced" };
const LEVEL_GROWTH = { Beginner: 6, Intermediate: 8, Advanced: 9 };

function normalizeRacket(raw) {
  const r = raw.ratings;
  const level = LEVEL_MAP[raw.level];
  return {
    name: raw.name,
    brand: raw.brand,
    url: raw.url,
    image: raw.image,
    price: raw.price,
    form: raw.shape,
    weight: raw.weight,
    balance: BALANCE_MAP[raw.balance],
    feel: raw.feel,
    hardness: FEEL_HARDNESS[raw.feel],
    level,
    power: r.power,
    control: r.control,
    comfort: r.comfort,
    maneuver: r.maneuverability,
    effect: r.effect,
    forgiveness: r.tolerance,
    // Not published by the shop: derived from its ratings and level label
    net: (r.maneuverability + r.control) / 2,
    defense: (r.control + r.tolerance) / 2,
    growth: LEVEL_GROWTH[level]
  };
}

const RACKETS = PADELREFERENCE_DATA.map(normalizeRacket);

function findRacketByName(name) {
  const needle = String(name || "").trim().toLowerCase();
  return needle ? RACKETS.find(r => r.name.toLowerCase() === needle) : undefined;
}

const BALANCE_ORDER = { Low: 0, Medium: 1, High: 2 };

// ============================== i18n ==============================

let LANG = localStorage.getItem("padelFinderLang") === "en" ? "en" : "de";

const UI = {
  de: {
    "hero.badge": "PADEL RACKET FINDER",
    "hero.title1": "Finde deinen",
    "hero.title2": "perfekten Schläger.",
    "hero.desc": "Ein kurzer Racket-Fit-Test analysiert deinen Spielstil, deine Technik, deine Wünsche und dein Budget.",
    "hero.cta": "Test starten",
    "hero.meta": "Quick oder Pro · unabhängig · persönliches Matching",
    "mode.badge": "WÄHLE DEINEN TEST",
    "mode.title": "Quick oder Pro?",
    "mode.desc": "Beide Tests matchen dich gegen dieselbe kuratierte Schläger-Auswahl — der Pro-Test stellt nur mehr und tiefere Fragen für eine präzisere Empfehlung.",
    "mode.quickTitle": "Quick Test",
    "mode.quickMeta": "17–19 Fragen · ca. 4–6 Min",
    "mode.quickDesc": "Spielstil, Technik, Wünsche und Budget — eine schnelle, verlässliche Empfehlung.",
    "mode.quickCta": "Quick Test starten →",
    "mode.proTitle": "Pro Test",
    "mode.proMeta": "bis zu 28 Fragen · ca. 8–10 Min",
    "mode.proDesc": "Zusätzlich: Gewicht, Balance-Gefühl, Wettkampf-Niveau, Verletzungsdetails, Indoor/Outdoor, Markenpräferenz und Budget-Flexibilität für die präziseste Empfehlung.",
    "mode.proCta": "Pro Test starten →",
    "mode.back": "← Zurück",
    "q.back": "← Zurück",
    "q.next": "Weiter →",
    "q.multiTag": " · MEHRFACHAUSWAHL",
    "q.frage": "FRAGE",
    "q.skip": "Überspringen",
    "results.badge": "DEIN PADEL RACKET FIT",
    "results.quickLabel": "QUICK-ANALYSE",
    "results.proLabel": "PRO-ANALYSE",
    "results.title": "Dein Match.",
    "results.desc": n => `Auf Basis deiner Antworten haben wir dein Profil gegen ${n} Modelle im Finder bewertet.`,
    "results.control": "Kontrolle",
    "results.power": "Power",
    "results.forgiveness": "Fehlertoleranz",
    "results.comfort": "Komfort",
    "analysis.title": "Deine Profil-Analyse",
    "analysis.desc": "Dein Spielprofil (hell) im Vergleich zu den Eigenschaften deines Top-Matches (gestrichelt).",
    "analysis.legendUser": "Dein Profil",
    "radar.control": "Kontrolle",
    "radar.power": "Power",
    "radar.forgiveness": "Sweet Spot",
    "radar.comfort": "Komfort",
    "radar.net": "Netzspiel",
    "radar.defense": "Defensive",
    "stat.control": "Kontrolle",
    "stat.power": "Power",
    "stat.forgiveness": "Fehlertoleranz",
    "stat.comfort": "Komfort",
    "stat.maneuver": "Handling",
    "stat.effect": "Effet",
    "stat.weight": "Gewicht",
    "card.rank": n => `#${n} BEST MATCH`,
    "card.priceLabel": "Preis",
    "card.priceText": price => `Shop-Preis <b>${price} €</b> (Stand: September 2026). Preise können sich ändern — bitte vor dem Kauf im Shop prüfen.`,
    "card.overBudget": " <b>Liegt über deinem Budget</b> — im Finder gibt es nicht genug passende Modelle in deiner Preisklasse.",
    "card.buy": "Im Shop ansehen ↗",
    "card.source": "Testwerte &amp; Daten: padelreference.com",
    "card.noImage": "Kein Bild verfügbar",
    "notice": n => `<b>Hinweis:</b> Alle ${n} Schläger, ihre Specs, Testwerte (Power, Kontrolle, Komfort, Handling, Effet, Fehlertoleranz), Preise und Links stammen von padelreference.com (Stand: September 2026). Die Werte für Netzspiel und Defensive leiten wir daraus ab. Preise und Verfügbarkeit können sich ändern.`,
    "restart": "Test erneut starten",
    "and": "und",
    "reasonFallback": "Dieser Schläger erzielt über alle deine Antworten hinweg die beste Gesamtbewertung.",
    "reasonTemplate": list => `Dieser Schläger passt besonders gut zu dir, weil er ${list} mitbringt.`,
    "reasonBrand": brand => ` Außerdem stammt er von deiner Wunschmarke ${brand}.`,
    "reason.control": "viel Kontrolle",
    "reason.power": "viel Power",
    "reason.sweetSpot": "einen großen, fehlerverzeihenden Sweet Spot",
    "reason.comfort": "hohen, gelenkschonenden Komfort",
    "reason.growth": "genug Reserven für deine Weiterentwicklung",
    "reason.shape": shape => `die gewünschte ${shape}`,
    "reason.grippy": "das von dir bevorzugte griffige Spielgefühl",
    "reason.headHeavy": "das von dir bevorzugte kopflastige Powergefühl",
    "reason.vsCurrent": (label, diff, name) => `${diff} ${diff === 1 ? "Punkt" : "Punkte"} mehr ${label} als dein ${name}`,
    "reason.lighterThanCurrent": (diff, name) => `${diff} g weniger Gewicht als dein ${name}`,
    "reason.cheaperThanCurrent": (diff, name) => `rund ${diff} € Ersparnis gegenüber deinem ${name}`,
    "alt.template": parts => `Im Vergleich zu deinem Top-Match: ${parts}.`,
    "alt.fallback": "Sehr ähnliches Profil wie dein Top-Match — eine gute Alternative, falls das erste Modell nicht verfügbar ist.",
    "alt.more": list => `mehr ${list}`,
    "alt.less": (list, hasMore) => `${hasMore ? "dafür " : ""}weniger ${list}`,
    "alt.cheaper": diff => `rund ${diff} € günstiger`,
    "alt.pricier": diff => `rund ${diff} € teurer`,
    "alt.shape": (a, b) => `Kopfform ${a} statt ${b}`,
    "player.badge": "SPIELERPROFIL IM DETAIL",
    "player.typeTitle": name => `Dein Spielertyp: ${name}`,
    "player.stageLabel": "Entwicklungsstand",
    "player.nextStep": "Nächster Schritt:",
    "player.strengths": "Deine Stärken",
    "player.focus": "Deine Baustellen",
    "player.noFocus": "Keine angegeben",
    "player.tips": "Trainingstipps für dich",
    "player.ideas": "Ideen",
    "shape.Round": "Rund",
    "shape.Teardrop": "Teardrop",
    "shape.Diamond": "Diamond",
    "shapePhrase.Round": "runde Kopfform",
    "shapePhrase.Teardrop": "Teardrop-Kopfform",
    "shapePhrase.Diamond": "Diamond-Kopfform",
    "balance.Low": "grifflastig",
    "balance.Medium": "ausgewogen",
    "balance.High": "kopflastig",
    "feel.Flexible / Comfort": "weich",
    "feel.Hybrid / Intermediate": "mittel",
    "feel.Stiff / Power": "hart",
    "level.Beginner": "Einsteiger",
    "level.Intermediate": "Mittelklasse",
    "level.Advanced": "Fortgeschritten/Profi",
    "kernLabel": "Kern",

    "share.title": "Ergebnis teilen",
    "share.desc": "Der Link öffnet dein Ergebnis exakt so, wie du es siehst — inklusive aller drei Schläger.",
    "share.button": "Teilen",
    "share.copyLink": "Link kopieren",
    "share.copiedLink": "Link kopiert!",
    "share.copiedText": "Ergebnis kopiert — einfach einfügen!",
    "share.textIntro": n => `🎾 Mein Padel Racket Fit (${n}/100 Top-Match):`,
    "share.textLine": (rank, name, score) => `#${rank} ${name} — ${score}/100`,
    "share.textOutro": "Mach den Test selbst:",
    "share.native": "Mein Padel Racket Fit",

    "history.title": "Dein Fortschritt",
    "history.desc": "Frühere Testergebnisse auf diesem Gerät.",
    "history.vsLast": date => `Im Vergleich zu deinem Test vom ${date}:`,
    "history.sameTop": "Gleiches Top-Match wie letztes Mal.",
    "history.newTop": (from, to) => `Neues Top-Match: ${from} → ${to}.`,
    "history.statChange": (label, from, to) => `${label} ${from} → ${to}`,
    "history.noChange": "Keine Veränderung zu deinem letzten Test.",
    "history.clear": "Verlauf löschen",
    "history.entry": (date, mode, name, score) => `${date} · ${mode} · ${name} (${score}/100)`,

    "partner.badge": "DOPPEL-CHECK",
    "partner.title": "Wie passt ihr als Team zusammen?",
    "partner.desc": "Padel wird zu zweit gespielt. Lass deinen Partner / deine Partnerin einen kurzen 15-Fragen-Check machen — wir zeigen euch, wie sich eure Profile ergänzen und wer eher Netz oder hinten spielen sollte.",
    "partner.start": "Partner-Check starten →",
    "partner.stepLabel": "Partner-Frage",
    "partner.resultTitle": "Euer Team-Profil",
    "partner.you": "Du",
    "partner.partner": "Partner:in",
    "partner.partnerTop": "Top-Match für deine:n Partner:in",
    "partner.restart": "Partner-Check neu starten",
    "compat.bothNet": "Ihr spielt beide am liebsten am Netz — sprecht ab, wer bei Bedarf zurückfällt, sonst bleibt die Hinterfeld-Absicherung offen.",
    "compat.bothBack": "Ihr spielt beide am liebsten hinten — versucht abwechselnd auch ans Netz vorzurücken, sonst fehlt euch der Druck vorne.",
    "compat.complementary": "Starke Rollenverteilung: Einer von euch deckt eher das Netz ab, der andere die Defensive von hinten — ein Klassiker im Doppel.",
    "compat.balanced": "Ihr seid beide flexibel unterwegs — sprecht vor dem Match kurz ab, wer bei welchem Ballwechsel welche Seite/Position übernimmt.",
    "compat.powerControl": "Gute Ergänzung: Eine:r bringt mehr Power, der/die andere mehr Kontrolle — nutzt das gezielt beim Punktabschluss.",

    "browse.link": "Alle Schläger durchsuchen →",
    "browse.badge": "SCHLÄGER-DATENBANK",
    "browse.title": n => `Alle ${n} Schläger`,
    "browse.desc": "Filtere, sortiere und vergleiche bis zu 3 Schläger direkt nebeneinander — ganz ohne Quiz.",
    "browse.searchPlaceholder": "Modell oder Marke suchen…",
    "browse.filterShape": "Kopfform",
    "browse.filterBrand": "Marke",
    "browse.filterLevel": "Niveau",
    "browse.allShapes": "Alle Formen",
    "browse.allBrands": "Alle Marken",
    "browse.allLevels": "Alle Niveaus",
    "browse.sortBy": "Sortieren nach",
    "browse.sortControl": "Kontrolle",
    "browse.sortPower": "Power",
    "browse.sortPriceAsc": "Preis aufsteigend",
    "browse.sortPriceDesc": "Preis absteigend",
    "browse.compareAdd": "+ Vergleichen",
    "browse.compareRemove": "− Entfernen",
    "browse.compareFull": "Max. 3 ausgewählt",
    "browse.compareBarText": n => `${n} von 3 zum Vergleich ausgewählt`,
    "browse.compareButton": "Vergleichen",
    "browse.compareTitle": "Vergleich",
    "browse.compareClear": "Auswahl leeren",
    "browse.noResults": "Keine Schläger gefunden — Filter anpassen.",
    "browse.back": "← Zurück zur Startseite",
    "browse.resultsCount": n => `${n} Schläger`,

    "pwa.installTitle": "App installieren",
    "pwa.installDesc": "Auf dem Homescreen speichern — öffnet sich wie eine App, auch bei schwachem Netz.",
    "pwa.installBtn": "Installieren",
    "pwa.installDismiss": "Nicht jetzt",

    "refine.title": "Ergebnis verfeinern",
    "refine.desc": "Passt nicht ganz? Verschiebe die Regler — deine Top 3 werden sofort neu berechnet, ohne den Test zu wiederholen.",
    "refine.control": "Kontrolle",
    "refine.power": "Power",
    "refine.comfort": "Komfort",
    "refine.cheaper": "Günstiger",
    "refine.less": "weniger",
    "refine.more": "mehr",
    "refine.reset": "Zurücksetzen",
    "confidence.clear": gap => `Klarer Favorit — ${gap} Punkte Vorsprung auf Platz 2.`,
    "confidence.close": "Kopf-an-Kopf-Rennen — Platz 1 und 2 passen fast gleich gut. Entscheide nach Preis, Optik oder Verfügbarkeit.",
    "current.badge": "UPGRADE-CHECK",
    "current.title": "Welchen Schläger spielst du gerade?",
    "current.desc": "Wähle dein aktuelles Modell aus der Liste — wir zeigen dir, was sich mit deinem Top-Match konkret verbessern würde.",
    "current.placeholder": "Aktuellen Schläger eingeben…",
    "current.vsTop": name => `Dein aktueller Schläger → ${name}`,
    "current.priceDiff": diff => `Preisunterschied zum Top-Match: ${diff} €.`,
    "current.notFound": "Modell nicht in der Datenbank — bitte einen Namen aus der Vorschlagsliste wählen.",
    "browse.yourScore": "Für dein Profil",
    "browse.yourScoreHint": "Persönlicher Score auf Basis deines Tests",

    "meta.title": "Padel Racket Finder — finde deinen perfekten Schläger",
    "meta.desc": "Finde den Padel-Schläger, der am besten zu deinem Spiel, Niveau und Budget passt — mit echten Testwerten, Score-Aufschlüsselung und Profil-Analyse.",
    "hero.statRackets": "Schläger",
    "hero.statBrands": "Marken",
    "hero.statQuestions": "Fragen im Pro-Test",
    "bd.title": "Warum dieser Score?",
    "bd.desc": n => `Wo dein Top-Match gegenüber dem Durchschnitt aller ${n} Modelle Punkte holt oder verliert.`,
    "bd.style": "Spielstil & Position",
    "bd.wishes": "Deine Wünsche",
    "bd.level": "Niveau & Entwicklung",
    "bd.health": "Gelenkschonung",
    "bd.budget": "Budget",
    "bd.nogo": "No-Gos",
    "bd.nogoOk": "Keine No-Gos verletzt",
    "bd.current": "Besser als dein Schläger",
    "bd.refine": "Deine Regler",
    "card.noGoWarning": list => `<b>Achtung:</b> verletzt dein No-Go „${list}“ — es gibt aber kaum Alternativen, die sonst passen.`,
    "results.browseCta": "Alle Schläger mit deinem persönlichen Score ansehen →",
    "results.backToResults": "← Zurück zu deinem Ergebnis",
    "browse.compareJump": "Vergleich ansehen ↓",
    "radar.aria": "Netzdiagramm: Kontrolle, Power, Sweet Spot, Komfort, Netzspiel, Defensive",
    "refine.aria": label => `Gewichtung ${label}`,
    "q.rangeAria": "Wichtigkeit von 1 bis 10",
    "acc.badge": "PASST DAZU",
    "acc.title": "Zubehör, das zu deinem Profil passt",
    "acc.desc": "Ausgewählt anhand deiner Antworten — pro Kategorie das passendste Produkt.",
    "acc.why": "Passt, weil",
    "acc.cat.overgrip": "Griffband",
    "acc.cat.balls": "Bälle",
    "acc.cat.protector": "Rahmenschutz",
    "acc.cat.bag": "Tasche",
    "acc.cat.shoes": "Schuhe",
    "acc.cat.other": "Zubehör",
    "need.sweaty_hands": "du stark an den Händen schwitzt",
    "need.comfort_joints": "du Gelenkbeschwerden hast",
    "need.more_grip": "es dir mehr Halt am Griff gibt",
    "need.beginner": "es sich gut für den Einstieg eignet",
    "need.frequent_player": "du viel spielst",
    "need.outdoor": "du draußen spielst",
    "need.indoor": "du in der Halle spielst",
    "need.frame_protection": "es deinen Rahmen vor Schäden schützt",
    "need.travel_storage": "du deinen Schläger oft mitnimmst",
    "need.court_grip_footwear": "du auf dem Platz sicheren Halt brauchst"
  },
  en: {
    "hero.badge": "PADEL RACKET FINDER",
    "hero.title1": "Find your",
    "hero.title2": "perfect racket.",
    "hero.desc": "A short racket-fit test analyzes your playing style, technique, preferences and budget.",
    "hero.cta": "Start test",
    "hero.meta": "Quick or Pro · independent · personal matching",
    "mode.badge": "CHOOSE YOUR TEST",
    "mode.title": "Quick or Pro?",
    "mode.desc": "Both tests match you against the same curated racket selection — the Pro test just asks more, deeper questions for a more precise recommendation.",
    "mode.quickTitle": "Quick Test",
    "mode.quickMeta": "17–19 questions · ~4–6 min",
    "mode.quickDesc": "Playing style, technique, preferences and budget — a fast, reliable recommendation.",
    "mode.quickCta": "Start Quick Test →",
    "mode.proTitle": "Pro Test",
    "mode.proMeta": "up to 28 questions · ~8–10 min",
    "mode.proDesc": "Also covers: weight, balance feel, competitive level, injury details, indoor/outdoor, brand preference and budget flexibility for the most precise recommendation.",
    "mode.proCta": "Start Pro Test →",
    "mode.back": "← Back",
    "q.back": "← Back",
    "q.next": "Next →",
    "q.multiTag": " · MULTIPLE CHOICE",
    "q.frage": "QUESTION",
    "q.skip": "Skip",
    "results.badge": "YOUR PADEL RACKET FIT",
    "results.quickLabel": "QUICK ANALYSIS",
    "results.proLabel": "PRO ANALYSIS",
    "results.title": "Your Match.",
    "results.desc": n => `Based on your answers, we scored your profile against ${n} models in the finder.`,
    "results.control": "Control",
    "results.power": "Power",
    "results.forgiveness": "Forgiveness",
    "results.comfort": "Comfort",
    "analysis.title": "Your Profile Analysis",
    "analysis.desc": "Your playing profile (bright) compared to your top match's stats (dashed).",
    "analysis.legendUser": "Your profile",
    "radar.control": "Control",
    "radar.power": "Power",
    "radar.forgiveness": "Sweet spot",
    "radar.comfort": "Comfort",
    "radar.net": "Net play",
    "radar.defense": "Defense",
    "stat.control": "Control",
    "stat.power": "Power",
    "stat.forgiveness": "Forgiveness",
    "stat.comfort": "Comfort",
    "stat.maneuver": "Handling",
    "stat.effect": "Spin",
    "stat.weight": "Weight",
    "card.rank": n => `#${n} BEST MATCH`,
    "card.priceLabel": "Price",
    "card.priceText": price => `Shop price <b>€${price}</b> (as of September 2026). Prices can change — please check the shop before buying.`,
    "card.overBudget": " <b>Above your budget</b> — the finder doesn't have enough matching models in your price range.",
    "card.buy": "View in shop ↗",
    "card.source": "Test scores &amp; data: padelreference.com",
    "card.noImage": "No image available",
    "notice": n => `<b>Note:</b> All ${n} rackets, their specs, test scores (power, control, comfort, handling, spin, forgiveness), prices and links come from padelreference.com (as of September 2026). Net play and defense values are derived from those scores. Prices and availability can change.`,
    "restart": "Restart test",
    "and": "and",
    "reasonFallback": "This racket scores best overall across all your answers.",
    "reasonTemplate": list => `This racket fits you especially well because it brings ${list}.`,
    "reasonBrand": brand => ` It's also from your preferred brand, ${brand}.`,
    "reason.control": "excellent control",
    "reason.power": "plenty of power",
    "reason.sweetSpot": "a large, forgiving sweet spot",
    "reason.comfort": "high, joint-friendly comfort",
    "reason.growth": "enough headroom for your progress",
    "reason.shape": shape => `the ${shape} you wanted`,
    "reason.grippy": "the handle-light feel you prefer",
    "reason.headHeavy": "the head-heavy power feel you prefer",
    "reason.vsCurrent": (label, diff, name) => `${diff} ${diff === 1 ? "point" : "points"} more ${label.toLowerCase()} than your ${name}`,
    "reason.lighterThanCurrent": (diff, name) => `${diff} g less weight than your ${name}`,
    "reason.cheaperThanCurrent": (diff, name) => `about €${diff} savings compared to your ${name}`,
    "alt.template": parts => `Compared to your top match: ${parts}.`,
    "alt.fallback": "Very similar profile to your top match — a good alternative if the first model isn't available.",
    "alt.more": list => `more ${list}`,
    "alt.less": (list, hasMore) => `${hasMore ? "but " : ""}less ${list}`,
    "alt.cheaper": diff => `about €${diff} cheaper`,
    "alt.pricier": diff => `about €${diff} pricier`,
    "alt.shape": (a, b) => `${a} shape instead of ${b}`,
    "player.badge": "YOUR PLAYER PROFILE IN DETAIL",
    "player.typeTitle": name => `Your player type: ${name}`,
    "player.stageLabel": "Progress stage",
    "player.nextStep": "Next step:",
    "player.strengths": "Your strengths",
    "player.focus": "Your focus areas",
    "player.noFocus": "None given",
    "player.tips": "Training tips for you",
    "player.ideas": "Ideas",
    "shape.Round": "Round",
    "shape.Teardrop": "Teardrop",
    "shape.Diamond": "Diamond",
    "shapePhrase.Round": "round shape",
    "shapePhrase.Teardrop": "teardrop shape",
    "shapePhrase.Diamond": "diamond shape",
    "balance.Low": "handle-light",
    "balance.Medium": "balanced",
    "balance.High": "head-heavy",
    "feel.Flexible / Comfort": "soft",
    "feel.Hybrid / Intermediate": "medium",
    "feel.Stiff / Power": "hard",
    "level.Beginner": "Beginner",
    "level.Intermediate": "Mid-range",
    "level.Advanced": "Advanced/Pro",
    "kernLabel": "Core",

    "share.title": "Share result",
    "share.desc": "The link opens your result exactly as you see it — including all three rackets.",
    "share.button": "Share",
    "share.copyLink": "Copy link",
    "share.copiedLink": "Link copied!",
    "share.copiedText": "Result copied — just paste it!",
    "share.textIntro": n => `🎾 My Padel Racket Fit (${n}/100 top match):`,
    "share.textLine": (rank, name, score) => `#${rank} ${name} — ${score}/100`,
    "share.textOutro": "Take the test yourself:",
    "share.native": "My Padel Racket Fit",

    "history.title": "Your progress",
    "history.desc": "Previous test results on this device.",
    "history.vsLast": date => `Compared to your test on ${date}:`,
    "history.sameTop": "Same top match as last time.",
    "history.newTop": (from, to) => `New top match: ${from} → ${to}.`,
    "history.statChange": (label, from, to) => `${label} ${from} → ${to}`,
    "history.noChange": "No change since your last test.",
    "history.clear": "Clear history",
    "history.entry": (date, mode, name, score) => `${date} · ${mode} · ${name} (${score}/100)`,

    "partner.badge": "DOUBLES CHECK",
    "partner.title": "How well do you match as a team?",
    "partner.desc": "Padel is played in pairs. Have your partner take a short 15-question check — we'll show you how your profiles complement each other and who should play net or back.",
    "partner.start": "Start partner check →",
    "partner.stepLabel": "Partner question",
    "partner.resultTitle": "Your team profile",
    "partner.you": "You",
    "partner.partner": "Partner",
    "partner.partnerTop": "Top match for your partner",
    "partner.restart": "Restart partner check",
    "compat.bothNet": "You both prefer the net — agree on who falls back when needed, or your backcourt coverage stays open.",
    "compat.bothBack": "You both prefer staying back — take turns pushing up to the net, or you'll be missing pressure up front.",
    "compat.complementary": "Strong role split: one of you covers the net, the other covers defense from the back — a doubles classic.",
    "compat.balanced": "You're both flexible — agree beforehand on who takes which side/position on a given rally.",
    "compat.powerControl": "Good complement: one of you brings more power, the other more control — use that deliberately when finishing points.",

    "browse.link": "Browse all rackets →",
    "browse.badge": "RACKET DATABASE",
    "browse.title": n => `All ${n} rackets`,
    "browse.desc": "Filter, sort and compare up to 3 rackets side by side — no quiz required.",
    "browse.searchPlaceholder": "Search model or brand…",
    "browse.filterShape": "Shape",
    "browse.filterBrand": "Brand",
    "browse.filterLevel": "Level",
    "browse.allShapes": "All shapes",
    "browse.allBrands": "All brands",
    "browse.allLevels": "All levels",
    "browse.sortBy": "Sort by",
    "browse.sortControl": "Control",
    "browse.sortPower": "Power",
    "browse.sortPriceAsc": "Price: low to high",
    "browse.sortPriceDesc": "Price: high to low",
    "browse.compareAdd": "+ Compare",
    "browse.compareRemove": "− Remove",
    "browse.compareFull": "Max. 3 selected",
    "browse.compareBarText": n => `${n} of 3 selected to compare`,
    "browse.compareButton": "Compare",
    "browse.compareTitle": "Comparison",
    "browse.compareClear": "Clear selection",
    "browse.noResults": "No rackets found — adjust your filters.",
    "browse.back": "← Back to home",
    "browse.resultsCount": n => `${n} rackets`,

    "pwa.installTitle": "Install app",
    "pwa.installDesc": "Save to your home screen — opens like an app, even on a weak connection.",
    "pwa.installBtn": "Install",
    "pwa.installDismiss": "Not now",

    "refine.title": "Refine your result",
    "refine.desc": "Not quite right? Move the sliders — your top 3 recalculate instantly without redoing the test.",
    "refine.control": "Control",
    "refine.power": "Power",
    "refine.comfort": "Comfort",
    "refine.cheaper": "Cheaper",
    "refine.less": "less",
    "refine.more": "more",
    "refine.reset": "Reset",
    "confidence.clear": gap => `Clear favorite — ${gap} points ahead of #2.`,
    "confidence.close": "Neck and neck — #1 and #2 fit almost equally well. Decide by price, looks or availability.",
    "current.badge": "UPGRADE CHECK",
    "current.title": "Which racket do you play right now?",
    "current.desc": "Pick your current model from the list — we'll show you exactly what would improve with your top match.",
    "current.placeholder": "Enter your current racket…",
    "current.vsTop": name => `Your current racket → ${name}`,
    "current.priceDiff": diff => `Price difference to your top match: €${diff}.`,
    "current.notFound": "Model not in the database — please pick a name from the suggestion list.",
    "browse.yourScore": "For your profile",
    "browse.yourScoreHint": "Personal score based on your test",

    "meta.title": "Padel Racket Finder — find your perfect racket",
    "meta.desc": "Find the padel racket that best fits your game, level and budget — with real test scores, a score breakdown and a player profile analysis.",
    "hero.statRackets": "rackets",
    "hero.statBrands": "brands",
    "hero.statQuestions": "questions in the Pro test",
    "bd.title": "Why this score?",
    "bd.desc": n => `Where your top match gains or loses points compared to the average of all ${n} models.`,
    "bd.style": "Style & position",
    "bd.wishes": "Your wishes",
    "bd.level": "Level & development",
    "bd.health": "Joint friendliness",
    "bd.budget": "Budget",
    "bd.nogo": "No-gos",
    "bd.nogoOk": "No-gos respected",
    "bd.current": "Better than your racket",
    "bd.refine": "Your sliders",
    "card.noGoWarning": list => `<b>Heads-up:</b> breaks your no-go "${list}" — but hardly any alternatives fit otherwise.`,
    "results.browseCta": "See all rackets with your personal score →",
    "results.backToResults": "← Back to your result",
    "browse.compareJump": "View comparison ↓",
    "radar.aria": "Radar chart: control, power, sweet spot, comfort, net play, defense",
    "refine.aria": label => `Weighting ${label}`,
    "q.rangeAria": "Importance from 1 to 10",
    "acc.badge": "GOES WELL WITH",
    "acc.title": "Accessories that fit your profile",
    "acc.desc": "Picked from your answers — the best-fitting product per category.",
    "acc.why": "Fits because",
    "acc.cat.overgrip": "Overgrip",
    "acc.cat.balls": "Balls",
    "acc.cat.protector": "Frame protection",
    "acc.cat.bag": "Bag",
    "acc.cat.shoes": "Shoes",
    "acc.cat.other": "Accessory",
    "need.sweaty_hands": "your hands sweat a lot",
    "need.comfort_joints": "you have joint discomfort",
    "need.more_grip": "it gives you more grip",
    "need.beginner": "it suits beginners",
    "need.frequent_player": "you play a lot",
    "need.outdoor": "you play outdoors",
    "need.indoor": "you play indoors",
    "need.frame_protection": "it protects your frame",
    "need.travel_storage": "you often carry your racket around",
    "need.court_grip_footwear": "you need secure footing on court"
  }
};

function t(key, ...args) {
  const entry = UI[LANG][key];
  if (typeof entry === "function") {
    return args.length ? entry(...args) : entry;
  }
  return entry;
}

// Question structure is language-independent; text is resolved via QUESTION_TEXT[LANG][id]
const QUICK_QUESTION_DEFS = [
  { id: "level", opts: ["A", "B", "C", "D"] },
  { id: "currentRacket", racketSearch: true },
  { id: "dislikes", multi: true, exclusive: ["I"], showIf: () => !!findRacketByName(getAnswer("currentRacket")), opts: ["A", "B", "C", "D", "E", "F", "G", "H", "I"] },
  { id: "likes", multi: true, exclusive: ["F"], showIf: () => !!findRacketByName(getAnswer("currentRacket")), opts: ["A", "B", "C", "D", "E", "F"] },
  { id: "style", opts: ["A", "B", "C"] },
  { id: "position", opts: ["A", "B", "C", "D"] },
  { id: "power", range: true },
  { id: "control", range: true },
  { id: "forgive", range: true },
  { id: "comfort", range: true },
  { id: "joints", opts: ["A", "B", "C"] },
  { id: "weakness", multi: true, exclusive: ["H"], opts: ["A", "B", "C", "D", "E", "F", "G", "H"] },
  { id: "technique", opts: ["A", "B", "C", "D"] },
  { id: "sports", multi: true, exclusive: ["A"], opts: ["A", "B", "C", "D", "E", "F"] },
  { id: "frequency", opts: ["A", "B", "C", "D"] },
  { id: "shapePreference", opts: ["A", "B", "C", "D"] },
  { id: "noGos", multi: true, exclusive: ["F"], opts: ["A", "B", "C", "D", "E", "F"] },
  { id: "growth", opts: ["A", "B", "C", "D"] },
  { id: "budget", opts: ["A", "B", "C", "D", "E", "F"] }
];

// The partner check is a quick standalone profile, so it skips the current-racket questions
const PARTNER_QUESTION_DEFS = QUICK_QUESTION_DEFS.filter(q => !["currentRacket", "dislikes", "likes"].includes(q.id));

const PRO_EXTRA_QUESTION_DEFS = [
  { id: "weightPref", opts: ["A", "B", "C", "D"] },
  { id: "balanceFeel", opts: ["A", "B", "C", "D"] },
  { id: "level2", opts: ["A", "B", "C", "D"] },
  { id: "injuryDetail", multi: true, showIf: () => ["B", "C"].includes(getAnswer("joints")), opts: ["A", "B", "C"] },
  { id: "court", opts: ["A", "B", "C"] },
  { id: "brand", multi: true, exclusive: ["A"], opts: ["A", "B", "C", "D", "E", "F", "G"] },
  { id: "budgetFlex", opts: ["A", "B", "C"] },
  { id: "sweat", opts: ["A", "B", "C"] },
  { id: "playstyleIcon", opts: ["A", "B", "C", "D"] }
];

const QUESTION_TEXT = {
  de: {
    level: { title: "Wie viel Padel hast du gespielt?", hint: "Eine \"Session\" ist eine Trainings- oder Spieleinheit auf dem Platz.", opts: { A: "0–5 Sessions", B: "5–20 Sessions", C: "20–50 Sessions", D: "50+ Sessions / Turniere" } },
    currentRacket: { title: "Welchen Schläger spielst du aktuell?", hint: "Optional — tippe den Namen und wähle ihn aus der Vorschlagsliste. Dein aktueller Schläger dient als Referenz: Was dir daran fehlt, soll dein neuer besser machen. Noch keinen oder nicht in der Liste? Einfach überspringen." },
    dislikes: { title: "Was stört dich an deinem aktuellen Schläger?", hint: "Wähle alles, was zutrifft — wir suchen gezielt Schläger, die genau hier besser sind als dein jetziger.", opts: { A: "Zu wenig Power", B: "Zu wenig Kontrolle", C: "Zu hart / zu viele Vibrationen", D: "Zu schwer", E: "Zu kopflastig / zu träge", F: "Sweet Spot zu klein", G: "Zu wenig Effet", H: "Zu teuer — der nächste soll günstiger sein", I: "Nichts — ich will einfach etwas Neues" } },
    likes: { title: "Was magst du an deinem aktuellen Schläger?", hint: "Diese Stärken soll dein neuer Schläger behalten — Modelle, die hier schlechter sind, rutschen nach unten.", opts: { A: "Kontrolle", B: "Power", C: "Komfort", D: "Handling / Leichtigkeit", E: "Die Kopfform", F: "Nichts Besonderes" } },
    style: { title: "Wie würdest du dein Spiel beschreiben?", hint: "Defensiv = du spielst sicher und wartest auf Fehler des Gegners. Offensiv = du suchst aktiv den Punktgewinn über Smashes und Angriffe.", opts: { A: "Defensiv", B: "Allround", C: "Offensiv" } },
    position: { title: "Wo spielst du am liebsten?", hint: "Deine bevorzugte Position beeinflusst, wie wichtig Netzspiel (Volleys) gegenüber Defensive (Lobs, Abwehr) für deinen Schläger ist.", opts: { A: "Hinten", B: "Variabel", C: "Gerne am Netz", D: "Sehr offensiv" } },
    power: { title: "Wie wichtig ist dir Power?", hint: "Power beschreibt, wie viel zusätzliche Schlagkraft dir der Schläger selbst gibt — besonders hilfreich, wenn dir noch die eigene Wucht fehlt." },
    control: { title: "Wie wichtig ist dir Kontrolle?", hint: "Kontrolle beschreibt, wie präzise du den Ball platzieren kannst — meist wichtiger als Power für ein konstantes Spiel." },
    forgive: { title: "Wie wichtig ist dir Fehlertoleranz / großer Sweet Spot?", hint: "Der Sweet Spot ist die Zone auf dem Schlägerkopf, die den saubersten Treffer gibt. Ein großer Sweet Spot verzeiht auch Treffer, die nicht perfekt mittig sitzen." },
    comfort: { title: "Wie wichtig ist dir Komfort?", hint: "Komfort beschreibt, wie wenig Vibration beim Treffer in Arm und Schulter ankommt — wichtig für lange Sessions." },
    joints: { title: "Hast du manchmal Beschwerden in Ellenbogen, Handgelenk oder Schulter?", hint: "Im Volksmund oft \"Tennisarm\" genannt. Weichere Schläger mit neutraler oder niedriger Balance schonen die Gelenke spürbar mehr als harte Diamond-Schläger.", opts: { A: "Nein, keine Beschwerden", B: "Manchmal, leichte Beschwerden", C: "Ja, regelmäßig" } },
    weakness: { title: "Wo siehst du aktuell deine größten Schwächen?", hint: "Wähle alles, was zutrifft. Wir gleichen deine Schwächen mit den Eigenschaften des Schlägers aus und geben dir am Ende passende Trainingstipps.", opts: { A: "Power", B: "Kontrolle", C: "Return", D: "Aufschlag", E: "Volley / Netzspiel", F: "Defensive", G: "Timing / Technik", H: "Keine besonderen Schwächen" } },
    technique: { title: "Wie sauber ist deine Technik?", hint: "Bei noch unsauberer Technik empfehlen wir automatisch weichere, fehlerverzeihendere Schläger mit großem Sweet Spot.", opts: { A: "Noch unsauber", B: "Solide, aber inkonstant", C: "Ziemlich sauber", D: "Sehr sauber" } },
    sports: { title: "Welche anderen Schlägersportarten hast du schon gespielt?", hint: "Vorerfahrung verbessert oft dein Ballgefühl. Sie fließt ins Kontroll-Matching und in deine persönlichen Tipps ein.", opts: { A: "Keine", B: "Tennis", C: "Badminton", D: "Tischtennis", E: "Squash", F: "Andere" } },
    frequency: { title: "Wie oft spielst du Padel?", hint: "Je öfter du spielst, desto mehr lohnt sich ein Schläger, der auch bei intensiverem Training mitwächst.", opts: { A: "Seltener als 1x im Monat", B: "1x pro Woche", C: "2–3x pro Woche", D: "4x+ pro Woche / Wettkampf" } },
    shapePreference: { title: "Kennst du schon deine bevorzugte Kopfform?", hint: "Rund = maximale Kontrolle & großer Sweet Spot. Teardrop = Allround-Mix aus Power & Kontrolle. Diamond = maximale Power, aber kleinerer Sweet Spot und anstrengender für Einsteiger.", opts: { A: "Rund", B: "Teardrop", C: "Diamond", D: "Weiß ich noch nicht" } },
    noGos: { title: "Gibt es No-Gos für deinen Schläger?", hint: "Alles, was du auf keinen Fall willst — solche Modelle landen ganz unten und tauchen nur auf, wenn wirklich nichts anderes passt. Mehrfachauswahl möglich.", opts: { A: "Keine Diamond-Form", B: "Nichts schwerer als 365 g", C: "Kein harter Kern", D: "Nicht kopflastig", E: "Keine reinen Einsteiger-Modelle", F: "Keine No-Gos" } },
    growth: { title: "Wie lange soll der Schläger mit dir mitwachsen?", hint: "Falls du dich schnell verbessern willst, empfehlen wir Schläger mit mehr Powerreserven für die Zukunft statt reinen Einsteiger-Modellen.", opts: { A: "Hauptsächlich jetzt", B: "1 Jahr+", C: "1–2 Jahre+", D: "Möglichst lange" } },
    budget: { title: "Was ist dein maximales Budget?", hint: "Alle Preise sind Richtwerte fürs Matching. Der aktuelle Preis kann über den Link am Ende geprüft werden.", opts: { A: "Unter 100 €", B: "100–130 €", C: "130–150 €", D: "150–180 €", E: "180–220 €", F: "220 €+" } },
    weightPref: { title: "Bevorzugst du eher leichte oder schwere Schläger?", hint: "Leichtere Schläger (unter 358 g) ermöglichen schnellere Reaktionen am Netz. Schwerere (365 g+) geben mehr Power und Stabilität bei Schmetterbällen.", opts: { A: "Eher leicht", B: "Ausgewogen", C: "Eher schwer", D: "Weiß ich nicht" } },
    balanceFeel: { title: "Bevorzugst du ein griffiges oder kopflastiges Spielgefühl?", hint: "Griffig (niedrige Balance) = mehr Kontrolle und schnellere Handbewegungen. Kopflastig (hohe Balance) = mehr Power, aber ein trägerer Schwung.", opts: { A: "Griffig (mehr Kontrolle)", B: "Ausgewogen", C: "Kopflastig (mehr Power)", D: "Weiß ich nicht" } },
    level2: { title: "Auf welchem Niveau spielst du hauptsächlich?", hint: "Dein Wettkampf-Niveau beeinflusst, wie leistungsorientiert dein Schläger sein sollte.", opts: { A: "Hobby / Freizeit", B: "Amateur-Liga", C: "Ambitioniert / Turniere", D: "Leistungssport" } },
    injuryDetail: { title: "Welche Regionen betreffen deine Beschwerden?", hint: "Schulterprobleme reagieren besonders auf kopflastige Schläger, Handgelenksprobleme auf harte Schläger.", opts: { A: "Ellenbogen", B: "Handgelenk", C: "Schulter" } },
    court: { title: "Spielst du hauptsächlich Indoor oder Outdoor?", hint: "Outdoor (Wind, Sonne) profitiert oft von etwas mehr Kontrolle und Stabilität. Indoor erlaubt kompromissloseres Powerspiel.", opts: { A: "Outdoor", B: "Indoor", C: "Beides" } },
    brand: { title: "Hast du bevorzugte Marken?", hint: "Optional, Mehrfachauswahl möglich. Passende Modelle bekommen einen kleinen Bonus, aber Performance bleibt wichtiger als Marke.", opts: { A: "Keine Präferenz", B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat", G: "Andere" } },
    budgetFlex: { title: "Würdest du für den perfekten Schläger auch etwas mehr zahlen?", hint: "Falls ja, lockern wir dein Budget-Limit leicht, um dir auch knapp darüber liegende Top-Modelle zu zeigen.", opts: { A: "Nein, strikt bei meinem Budget bleiben", B: "Ja, bis zu 20 € mehr", C: "Ja, bis zu 40 € mehr" } },
    sweat: { title: "Wie stark schwitzt du an den Händen?", hint: "Entscheidet, welches Griffband zu dir passt: Bei feuchten Händen hilft ein saugfähiges Overgrip, bei trockenen Händen ein griffiges (tacky).", opts: { A: "Stark", B: "Normal", C: "Kaum" } },
    playstyleIcon: { title: "Welcher Spielstil inspiriert dich am meisten?", hint: "Nur für den Vibe — hilft uns, zwischen ähnlich guten Empfehlungen die passende Note zu treffen.", opts: { A: "Kontrollierter Allrounder", B: "Aggressiver Power-Spieler", C: "Geduldiger Verteidiger", D: "Kreativer Netzspieler" } }
  },
  en: {
    level: { title: "How much padel have you played?", hint: "A \"session\" is one training or match session on court.", opts: { A: "0–5 sessions", B: "5–20 sessions", C: "20–50 sessions", D: "50+ sessions / tournaments" } },
    currentRacket: { title: "Which racket do you play right now?", hint: "Optional — type the name and pick it from the suggestions. Your current racket becomes the reference: whatever it lacks, your new one should do better. No racket yet or not listed? Just skip." },
    dislikes: { title: "What bothers you about your current racket?", hint: "Pick everything that applies — we specifically look for rackets that are better than yours in exactly these areas.", opts: { A: "Not enough power", B: "Not enough control", C: "Too hard / too much vibration", D: "Too heavy", E: "Too head-heavy / sluggish", F: "Sweet spot too small", G: "Not enough spin", H: "Too expensive — next one should be cheaper", I: "Nothing — I just want something new" } },
    likes: { title: "What do you like about your current racket?", hint: "Your new racket should keep these strengths — models that are worse here drop down the list.", opts: { A: "Control", B: "Power", C: "Comfort", D: "Handling / lightness", E: "The head shape", F: "Nothing in particular" } },
    style: { title: "How would you describe your game?", hint: "Defensive = you play safe and wait for your opponent's mistakes. Offensive = you actively look to win the point via smashes and attacks.", opts: { A: "Defensive", B: "All-round", C: "Offensive" } },
    position: { title: "Where do you like to play?", hint: "Your preferred position affects how important net play (volleys) is versus defense (lobs, retrieving) for your racket.", opts: { A: "Back", B: "Variable", C: "Love the net", D: "Very offensive" } },
    power: { title: "How important is power to you?", hint: "Power describes how much extra hitting force the racket itself gives you — especially helpful if you're still lacking your own." },
    control: { title: "How important is control to you?", hint: "Control describes how precisely you can place the ball — usually more important than power for consistent play." },
    forgive: { title: "How important is forgiveness / a big sweet spot to you?", hint: "The sweet spot is the zone on the racket face that gives the cleanest hit. A large sweet spot also forgives hits that aren't perfectly centered." },
    comfort: { title: "How important is comfort to you?", hint: "Comfort describes how little vibration reaches your arm and shoulder on impact — important for long sessions." },
    joints: { title: "Do you sometimes have discomfort in your elbow, wrist or shoulder?", hint: "Often called \"tennis elbow\". Softer rackets with a neutral or low balance are noticeably gentler on your joints than hard diamond rackets.", opts: { A: "No discomfort", B: "Sometimes, mild discomfort", C: "Yes, regularly" } },
    weakness: { title: "Where do you currently see your biggest weaknesses?", hint: "Pick everything that applies. We match your weaknesses against the racket's traits and give you matching training tips at the end.", opts: { A: "Power", B: "Control", C: "Return", D: "Serve", E: "Volley / net play", F: "Defense", G: "Timing / technique", H: "No particular weaknesses" } },
    technique: { title: "How clean is your technique?", hint: "If your technique is still rough, we automatically recommend softer, more forgiving rackets with a big sweet spot.", opts: { A: "Still rough", B: "Solid but inconsistent", C: "Pretty clean", D: "Very clean" } },
    sports: { title: "Which other racket sports have you already played?", hint: "Prior experience often improves your ball feel. It feeds into your control matching and your personal tips.", opts: { A: "None", B: "Tennis", C: "Badminton", D: "Table tennis", E: "Squash", F: "Other" } },
    frequency: { title: "How often do you play padel?", hint: "The more often you play, the more a racket that grows with more intense training pays off.", opts: { A: "Less than once a month", B: "Once a week", C: "2–3x a week", D: "4x+ a week / competitive" } },
    shapePreference: { title: "Do you already know your preferred head shape?", hint: "Round = maximum control & big sweet spot. Teardrop = all-round mix of power & control. Diamond = maximum power, but a smaller sweet spot and more demanding for beginners.", opts: { A: "Round", B: "Teardrop", C: "Diamond", D: "Don't know yet" } },
    noGos: { title: "Any no-gos for your racket?", hint: "Anything you definitely don't want — those models drop to the bottom and only appear if nothing else fits. Multiple selections possible.", opts: { A: "No diamond shape", B: "Nothing heavier than 365 g", C: "No hard core", D: "Not head-heavy", E: "No pure beginner models", F: "No no-gos" } },
    growth: { title: "How long should the racket grow with you?", hint: "If you want to improve quickly, we recommend rackets with more power reserves for the future instead of pure beginner models.", opts: { A: "Mainly for now", B: "1 year+", C: "1–2 years+", D: "As long as possible" } },
    budget: { title: "What's your maximum budget?", hint: "All prices are reference values for matching. The current price can be checked via the link at the end.", opts: { A: "Under €100", B: "€100–130", C: "€130–150", D: "€150–180", E: "€180–220", F: "€220+" } },
    weightPref: { title: "Do you prefer lighter or heavier rackets?", hint: "Lighter rackets (under 358 g) allow faster reactions at the net. Heavier ones (365 g+) give more power and stability on smashes.", opts: { A: "Lighter", B: "Balanced", C: "Heavier", D: "Don't know" } },
    balanceFeel: { title: "Do you prefer a handle-light or head-heavy feel?", hint: "Handle-light (low balance) = more control and faster hand movement. Head-heavy (high balance) = more power, but a slower swing.", opts: { A: "Handle-light (more control)", B: "Balanced", C: "Head-heavy (more power)", D: "Don't know" } },
    level2: { title: "What level do you mainly play at?", hint: "Your competitive level affects how performance-oriented your racket should be.", opts: { A: "Hobby / recreational", B: "Amateur league", C: "Ambitious / tournaments", D: "Competitive sport" } },
    injuryDetail: { title: "Which regions are affected by your discomfort?", hint: "Shoulder issues react especially to head-heavy rackets, wrist issues to hard rackets.", opts: { A: "Elbow", B: "Wrist", C: "Shoulder" } },
    court: { title: "Do you mainly play indoor or outdoor?", hint: "Outdoor (wind, sun) often benefits from a bit more control and stability. Indoor allows more uncompromising power play.", opts: { A: "Outdoor", B: "Indoor", C: "Both" } },
    brand: { title: "Do you have preferred brands?", hint: "Optional, multiple selections possible. Matching models get a small bonus, but performance still matters more than brand.", opts: { A: "No preference", B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat", G: "Other" } },
    budgetFlex: { title: "Would you pay a bit more for the perfect racket?", hint: "If yes, we loosen your budget limit slightly to also show top models just above it.", opts: { A: "No, stick strictly to my budget", B: "Yes, up to €20 more", C: "Yes, up to €40 more" } },
    sweat: { title: "How much do your hands sweat?", hint: "Decides which overgrip suits you: absorbent overgrips help with sweaty hands, tacky ones with dry hands.", opts: { A: "A lot", B: "Normal", C: "Barely" } },
    playstyleIcon: { title: "Which playing style inspires you the most?", hint: "Just for the vibe — helps us pick the right note between similarly good recommendations.", opts: { A: "Controlled all-rounder", B: "Aggressive power player", C: "Patient defender", D: "Creative net player" } }
  }
};

function questionText(id) {
  return QUESTION_TEXT[LANG][id];
}

const SCORE_DIVISORS = { quick: 3.6, pro: 4.0 };

const RACKET_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="racket-icon" aria-hidden="true">
  <ellipse cx="12" cy="9" rx="7" ry="8" stroke="currentColor" stroke-width="1.6"/>
  <line x1="12" y1="17" x2="12" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="9" cy="7" r="0.9" fill="currentColor"/>
  <circle cx="12" cy="6" r="0.9" fill="currentColor"/>
  <circle cx="15" cy="7" r="0.9" fill="currentColor"/>
  <circle cx="9" cy="11" r="0.9" fill="currentColor"/>
  <circle cx="12" cy="12" r="0.9" fill="currentColor"/>
  <circle cx="15" cy="11" r="0.9" fill="currentColor"/>
</svg>`;

let currentQuestion = 0;
let answers = {};
let testMode = "quick";
let activeQuestions = QUICK_QUESTION_DEFS;

// Snapshot of the most recently rendered results, used by share/history/partner features
let lastResults = null; // { profile, topThree, mode }

// Partner (doubles) mini-quiz state — always the Quick question set
let partnerAnswers = {};
let partnerCurrentQuestion = 0;

const getElement = id => document.getElementById(id);

getElement("startBtn").onclick = () => {
  getElement("startBtn").blur();
  document.querySelector(".hero").classList.add("hidden");
  getElement("modeSelect").classList.remove("hidden");
};

getElement("quickModeBtn").onclick = () => startTest("quick");
getElement("proModeBtn").onclick = () => startTest("pro");
getElement("modeBackBtn").onclick = () => {
  getElement("modeSelect").classList.add("hidden");
  document.querySelector(".hero").classList.remove("hidden");
};

getElement("langToggle").onclick = () => {
  setLang(LANG === "de" ? "en" : "de");
};

function setLang(lang) {
  LANG = lang;
  localStorage.setItem("padelFinderLang", lang);
  getElement("langToggle").textContent = lang === "de" ? "EN" : "DE";
  applyStaticTranslations();
  if (!getElement("quiz").classList.contains("hidden")) {
    const range = getElement("range");
    const pendingRange = range && range.value;
    const typedRacket = getElement("racketSearchInput") && getElement("racketSearchInput").value;
    renderQuestion();
    if (pendingRange) { getElement("range").value = pendingRange; getElement("rv").textContent = pendingRange; }
    if (typedRacket && getElement("racketSearchInput")) { getElement("racketSearchInput").value = typedRacket; getElement("racketSearchInput").oninput(); }
  } else if (!getElement("results").classList.contains("hidden")) {
    const scrollY = window.scrollY;
    const typedCurrent = getElement("currentRacketInput") && getElement("currentRacketInput").value;
    showResults({ keepScroll: true });
    if (typedCurrent !== undefined && getElement("currentRacketInput")) {
      getElement("currentRacketInput").value = typedCurrent;
      applyCurrentRacket();
    }
    window.scrollTo(0, scrollY);
  }
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    let value = t(key);
    if (typeof value === "function") value = value(RACKETS.length);
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = t(el.getAttribute("data-i18n-placeholder"));
    if (value !== undefined) el.placeholder = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    const value = t(el.getAttribute("data-i18n-aria"));
    if (value !== undefined) el.setAttribute("aria-label", value);
  });
  document.documentElement.lang = LANG;
  document.title = t("meta.title");
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("meta.desc"));
  if (getElement("installBanner")) {
    getElement("installBanner").remove();
    showInstallBanner();
  }
  if (typeof renderBrowseIfActive === "function") renderBrowseIfActive();
}

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

function restartApp() {
  location.href = location.pathname + location.search;
}

function startTest(mode) {
  testMode = mode;
  activeQuestions = mode === "pro" ? QUICK_QUESTION_DEFS.concat(PRO_EXTRA_QUESTION_DEFS) : QUICK_QUESTION_DEFS;
  currentQuestion = 0;
  answers = {};
  resultsRecorded = false;
  isSharedView = false;
  refineWeights = { control: 0, power: 0, comfort: 0, price: 0 };
  history.replaceState(null, "", location.pathname + location.search);
  getElement("modeSelect").classList.add("hidden");
  getElement("quiz").classList.remove("hidden");
  renderQuestion();
}

function getVisibleQuestions() {
  return activeQuestions.filter(q => !q.showIf || q.showIf());
}

function playCardAnimation() {
  const card = getElement("questionCard");
  card.classList.remove("anim-in");
  void card.offsetWidth;
  card.classList.add("anim-in");
}

function renderQuestion() {
  const questions = getVisibleQuestions();
  const def = questions[currentQuestion];
  const text = questionText(def.id);
  getElement("stepLabel").textContent = `${currentQuestion + 1} / ${questions.length}`;
  const progressPercent = Math.round((currentQuestion + 1) / questions.length * 100);
  getElement("progressPct").textContent = progressPercent + "%";
  getElement("bar").style.width = progressPercent + "%";

  let html = `<div class="eyebrow">${t("q.frage")} ${currentQuestion + 1}${def.multi ? t("q.multiTag") : ""}</div><h2>${text.title}</h2>`;
  if (text.hint) html += `<p class="hint">${text.hint}</p>`;
  const backButton = currentQuestion > 0
    ? `<button class="secondary" onclick="goToPrevious()">${t("q.back")}</button>`
    : `<span></span>`;

  if (def.range) {
    const currentValue = answers[def.id] || 5;
    html += `<div class="range-value" id="rv">${currentValue}</div>`;
    html += `<input class="range" id="range" type="range" min="1" max="10" value="${currentValue}" aria-label="${text.title} — ${t("q.rangeAria")}">`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="submitRange()">${t("q.next")}</button></div>`;
  } else if (def.racketSearch) {
    const current = findRacketByName(answers[def.id]);
    html += `<input type="text" id="racketSearchInput" class="text-input" list="quizRacketList" value="${current ? current.name : ""}" placeholder="${t("current.placeholder")}" aria-label="${t("current.placeholder")}" autocomplete="off">`;
    html += `<datalist id="quizRacketList">${RACKETS.map(r => `<option value="${r.name}">`).join("")}</datalist>`;
    html += `<p class="hint racket-search-status" id="racketSearchStatus"></p>`;
    html += `<div class="actions">${backButton}<button class="secondary" onclick="skipRacketSearch()">${t("q.skip")}</button><button class="primary" id="racketSearchNext" onclick="submitRacketSearch()">${t("q.next")}</button></div>`;
  } else if (def.multi) {
    const selected = getList(def.id);
    html += `<div class="options">`;
    html += def.opts.map(key => {
      const isSelected = selected.includes(key);
      return `<button class="option option-multi${isSelected ? " selected" : ""}" aria-pressed="${isSelected}" onclick="toggleAnswer('${key}')"><span class="check" aria-hidden="true"></span>${text.opts[key]}</button>`;
    }).join("");
    html += `</div>`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="goToNext()"${selected.length ? "" : " disabled"}>${t("q.next")}</button></div>`;
  } else {
    html += `<div class="options">`;
    html += def.opts.map(key =>
      `<button class="option${answers[def.id] === key ? " selected" : ""}" onclick="chooseAnswer('${key}')">${key}) ${text.opts[key]}</button>`
    ).join("");
    html += `</div>`;
    html += `<div class="actions">${backButton}</div>`;
  }

  getElement("questionCard").innerHTML = html;
  playCardAnimation();
  const heading = getElement("questionCard").querySelector("h2");
  heading.setAttribute("tabindex", "-1");
  if (document.activeElement === document.body || !getElement("questionCard").contains(document.activeElement)) {
    heading.focus({ preventScroll: true });
  }

  if (def.racketSearch) {
    const input = getElement("racketSearchInput");
    const update = () => {
      const query = input.value.trim().toLowerCase();
      const match = findRacketByName(query);
      const anyPartial = !query || RACKETS.some(r => r.name.toLowerCase().includes(query));
      getElement("racketSearchNext").disabled = !match;
      getElement("racketSearchStatus").textContent = anyPartial ? "" : t("current.notFound");
    };
    input.oninput = update;
    input.onkeydown = e => { if (e.key === "Enter") submitRacketSearch(); };
    update();
  }

  if (def.range) {
    getElement("range").oninput = e => {
      getElement("rv").textContent = e.target.value;
    };
  }
}

function chooseAnswer(choice) {
  answers[getVisibleQuestions()[currentQuestion].id] = choice;
  goToNext();
}

function toggleAnswer(choice) {
  const def = getVisibleQuestions()[currentQuestion];
  const exclusiveKeys = def.exclusive || [];
  let selected = getList(def.id);
  if (selected.includes(choice)) {
    selected = selected.filter(key => key !== choice);
  } else if (exclusiveKeys.includes(choice)) {
    selected = [choice];
  } else {
    selected = selected.filter(key => !exclusiveKeys.includes(key)).concat(choice);
  }
  answers[def.id] = selected;
  renderQuestion();
}

function submitRacketSearch() {
  const match = findRacketByName(getElement("racketSearchInput").value);
  if (!match) return;
  answers.currentRacket = match.name;
  goToNext();
}

function skipRacketSearch() {
  delete answers.currentRacket;
  delete answers.dislikes;
  delete answers.likes;
  goToNext();
}

function submitRange() {
  answers[getVisibleQuestions()[currentQuestion].id] = +getElement("range").value;
  goToNext();
}

function goToNext() {
  if (currentQuestion < getVisibleQuestions().length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResults();
  }
}

function goToPrevious() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

let scoringSource = null;

function getAnswer(id) {
  return (scoringSource || answers)[id];
}

function getList(id) {
  const value = (scoringSource || answers)[id];
  return Array.isArray(value) ? value : value ? [value] : [];
}

// Temporarily reads getAnswer/getList from a different answers object — used
// to score the partner's own answers through the same scoring engine.
function withAnswers(ansObj, fn) {
  const previous = scoringSource;
  scoringSource = ansObj;
  try {
    return fn();
  } finally {
    scoringSource = previous;
  }
}

function rankRackets(ansObj) {
  return withAnswers(ansObj, () =>
    RACKETS
      .map(racket => ({ ...racket, rawScore: calculateRawScore(racket) }))
      .sort((a, b) => b.rawScore - a.rawScore)
  );
}

function getMaxBudget() {
  const budgetMap = { A: 99, B: 130, C: 150, D: 180, E: 220, F: 999 };
  let max = budgetMap[getAnswer("budget")] || 180;
  const flex = getAnswer("budgetFlex");
  if (flex === "B") max += 20;
  if (flex === "C") max += 40;
  return max;
}

const MAIN_BRANDS = { B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat" };

function getBrandPrefs() {
  return getList("brand").map(key => MAIN_BRANDS[key]).filter(Boolean);
}

function matchesBrandPref(racket) {
  if (getBrandPrefs().includes(racket.brand)) return true;
  return getList("brand").includes("G") && !Object.values(MAIN_BRANDS).includes(racket.brand);
}

const NO_GO_CHECKS = {
  A: r => r.form === "Diamond",
  B: r => r.weight > 365,
  C: r => r.hardness >= 7,
  D: r => r.balance === "High",
  E: r => r.level === "Beginner"
};

function violatedNoGos(racket) {
  return getList("noGos").filter(key => NO_GO_CHECKS[key] && NO_GO_CHECKS[key](racket));
}

// Every point is booked into a category so the result page can explain where a score comes from.
function scoreBreakdown(racket) {
  const parts = { style: 0, wishes: 0, level: 0, health: 0, budget: 0, nogo: 0, current: 0 };
  const style = getAnswer("style");
  const position = getAnswer("position");
  const weaknesses = getList("weakness").filter(w => w !== "H");
  const technique = getAnswer("technique");
  const joints = getAnswer("joints");
  const frequency = getAnswer("frequency");
  const shapePref = getAnswer("shapePreference");
  const sports = getList("sports");

  // Style & position
  if (style === "A") parts.style += racket.defense * 2;
  else if (style === "C") parts.style += racket.power * 2;
  else parts.style += ((racket.control + racket.power) / 2) * 2;

  if (position === "C" || position === "D") parts.style += racket.net * 1.5;
  else if (position === "A") parts.style += racket.defense * 1.5;
  else parts.style += ((racket.net + racket.defense) / 2) * 1.5;

  // Weakness compensation, damped so selecting many weaknesses doesn't inflate every score
  const weaknessFactor = 1 / Math.sqrt(Math.max(1, weaknesses.length));
  if (weaknesses.includes("A")) parts.style += racket.power * 2 * weaknessFactor;
  if (["B", "C", "D"].some(w => weaknesses.includes(w))) parts.style += racket.control * 1.4 * weaknessFactor;
  if (weaknesses.includes("E")) parts.style += racket.net * 1.5 * weaknessFactor;
  if (weaknesses.includes("F")) parts.style += racket.defense * 1.7 * weaknessFactor;
  if (weaknesses.includes("G")) parts.style += racket.forgiveness * 1.6 * weaknessFactor;

  const court = getAnswer("court");
  if (court === "A") parts.style += racket.control * 0.4;
  if (court === "B") parts.style += racket.power * 0.3;

  const playstyle = getAnswer("playstyleIcon");
  if (playstyle === "A") parts.style += racket.control * 0.3;
  if (playstyle === "B") parts.style += racket.power * 0.4;
  if (playstyle === "C") parts.style += racket.defense * 0.4;
  if (playstyle === "D") parts.style += racket.net * 0.4;

  // Sliders are normalized to the default total (7+6+7+7), so "everything 10" means
  // "everything equally important" instead of inflating every racket to 100.
  const sliders = {
    control: +getAnswer("control") || 7,
    power: +getAnswer("power") || 6,
    forgive: +getAnswer("forgive") || 7,
    comfort: +getAnswer("comfort") || 7
  };
  const sliderNorm = 27 / (sliders.control + sliders.power + sliders.forgive + sliders.comfort);
  parts.wishes += racket.control * sliders.control * sliderNorm * 1.2;
  parts.wishes += racket.power * sliders.power * sliderNorm * 1.1;
  parts.wishes += racket.forgiveness * sliders.forgive * sliderNorm * 1.1;
  parts.wishes += racket.comfort * sliders.comfort * sliderNorm * 0.7;

  const shapeMap = { A: "Round", B: "Teardrop", C: "Diamond" };
  if (shapeMap[shapePref] && racket.form === shapeMap[shapePref]) parts.wishes += 10;

  const weightPref = getAnswer("weightPref");
  if (weightPref === "A" && racket.weight < 358) parts.wishes += 8;
  if (weightPref === "C" && racket.weight >= 365) parts.wishes += 8;
  if (weightPref === "B" && racket.weight >= 358 && racket.weight < 365) parts.wishes += 6;

  const balanceFeel = getAnswer("balanceFeel");
  if (balanceFeel === "A" && racket.balance === "Low") parts.wishes += 10;
  if (balanceFeel === "C" && racket.balance === "High") parts.wishes += 10;
  if (balanceFeel === "B" && racket.balance === "Medium") parts.wishes += 8;

  if (matchesBrandPref(racket)) parts.wishes += 6;

  // Level, technique & development
  if (technique === "A") parts.level += racket.forgiveness * 2.2;
  if (technique === "B") parts.level += racket.forgiveness * 1.2;
  if (["A", "B"].includes(technique)) {
    if (racket.hardness >= 7) parts.level -= 8;
    if (racket.balance === "High" || racket.form === "Diamond") parts.level -= 7;
  }

  const level = getAnswer("level");
  if (level === "A" || level === "B") {
    parts.level += racket.forgiveness * 1.5;
    if (racket.form === "Diamond") parts.level -= 12;
    if (racket.hardness >= 7) parts.level -= 6;
    if (racket.level === "Beginner") parts.level += 6;
  }
  if (level === "A" && racket.level === "Advanced") parts.level -= 6;
  if (level === "D") {
    parts.level += racket.power * 0.8 + racket.growth * 0.8;
    if (racket.level === "Beginner") parts.level -= 8;
  }

  // Any racket-sport background transfers ball feel into control
  if (sports.some(s => s !== "A")) parts.level += racket.control * 0.3;

  if (getAnswer("growth") === "C") parts.level += racket.growth * 2;
  if (getAnswer("growth") === "D") parts.level += racket.growth * 2.5;
  if (frequency === "C") parts.level += racket.growth * 1;
  if (frequency === "D") parts.level += racket.growth * 1.8;

  const level2 = getAnswer("level2");
  if (level2 === "C") parts.level += racket.growth * 1.2;
  if (level2 === "D") parts.level += racket.power * 1.5 + racket.growth * 1.5;

  // Joint health
  if (joints === "B") {
    parts.health += racket.comfort * 1.5;
    if (racket.hardness >= 6) parts.health -= 6;
  }
  if (joints === "C") {
    parts.health += racket.comfort * 3;
    if (racket.hardness >= 6) parts.health -= 14;
    if (racket.balance === "High" || racket.form === "Diamond") parts.health -= 10;
  }
  const injuryRegions = getList("injuryDetail");
  if (joints === "B" || joints === "C") {
    if (injuryRegions.includes("A") && racket.hardness >= 6) parts.health -= 5;
    if (injuryRegions.includes("A")) parts.health += racket.comfort * 0.6;
    if (injuryRegions.includes("B") && racket.hardness >= 6) parts.health -= 6;
    if (injuryRegions.includes("C") && (racket.balance === "High" || racket.form === "Diamond")) parts.health -= 6;
  }

  // Budget
  const maxBudget = getMaxBudget();
  if (racket.price <= maxBudget) parts.budget += 8;
  else parts.budget -= Math.min(18, (racket.price - maxBudget) * 0.18);

  // No-gos are soft exclusions: a violating racket can only surface if nothing else fits
  parts.nogo -= violatedNoGos(racket).length * 35;

  // Current racket as reference: fix what bothers the player, keep what they like
  const current = findRacketByName(getAnswer("currentRacket"));
  if (current) {
    const dislikes = getList("dislikes");
    const likes = getList("likes");
    const delta = key => racket[key] - current[key];

    if (dislikes.includes("A")) parts.current += delta("power") * 6;
    if (dislikes.includes("B")) parts.current += delta("control") * 6;
    if (dislikes.includes("C")) parts.current += (current.hardness - racket.hardness) * 3 + delta("comfort") * 4;
    if (dislikes.includes("D")) parts.current += (current.weight - racket.weight) * 0.8;
    if (dislikes.includes("E")) parts.current += (BALANCE_ORDER[current.balance] - BALANCE_ORDER[racket.balance]) * 8 + delta("maneuver") * 3;
    if (dislikes.includes("F")) parts.current += delta("forgiveness") * 6;
    if (dislikes.includes("G")) parts.current += delta("effect") * 5;
    if (dislikes.includes("H")) parts.current += (current.price - racket.price) * 0.12;

    if (likes.includes("A")) parts.current -= Math.max(0, -delta("control")) * 6;
    if (likes.includes("B")) parts.current -= Math.max(0, -delta("power")) * 6;
    if (likes.includes("C")) parts.current -= Math.max(0, -delta("comfort")) * 6;
    if (likes.includes("D")) parts.current -= Math.max(0, -delta("maneuver")) * 5;
    if (likes.includes("E") && racket.form === current.form) parts.current += 10;
  }

  return parts;
}

function calculateRawScore(racket) {
  const parts = scoreBreakdown(racket);
  return Object.keys(parts).reduce((sum, key) => sum + parts[key], 0);
}

function calculateScore(rawScore, mode = testMode) {
  return Math.round(Math.max(0, Math.min(100, rawScore / SCORE_DIVISORS[mode])));
}

function getUserProfile() {
  const position = getAnswer("position");
  const style = getAnswer("style");
  let net = 6;
  let defense = 6;

  if (position === "C" || position === "D") {
    net = 9; defense = 4;
  } else if (position === "A") {
    net = 3; defense = 9;
  }
  if (style === "A") defense = Math.min(10, defense + 1.5);
  if (style === "C") net = Math.min(10, net + 1);

  return {
    control: +getAnswer("control") || 7,
    power: +getAnswer("power") || 6,
    forgive: +getAnswer("forgive") || 7,
    comfort: +getAnswer("comfort") || 7,
    net: Math.round(net * 10) / 10,
    defense: Math.round(defense * 10) / 10
  };
}

function polarPoint(cx, cy, radius, index, total) {
  const angle = (Math.PI / 180) * (-90 + (360 / total) * index);
  return [cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)];
}

function pointsToString(points) {
  return points.map(p => p.join(",")).join(" ");
}

function racketRadarValues(racket) {
  return [racket.control, racket.power, racket.forgiveness, racket.comfort, racket.net, racket.defense];
}

function profileRadarValues(profile) {
  return [profile.control, profile.power, profile.forgive, profile.comfort, profile.net, profile.defense];
}

// series: [{ values: [6 numbers 0-10], cssClass: "radar-user" }, ...] — drawn in order, so put
// filled/solid series first and dashed comparison series last so strokes stay visible on top.
function buildRadarSVG(series) {
  const labels = [t("radar.control"), t("radar.power"), t("radar.forgiveness"), t("radar.comfort"), t("radar.net"), t("radar.defense")];
  const cx = 150, cy = 150, maxR = 100;
  const total = labels.length;

  const gridRings = [0.25, 0.5, 0.75, 1].map(scale => {
    const pts = labels.map((_, i) => polarPoint(cx, cy, maxR * scale, i, total));
    return `<polygon points="${pointsToString(pts)}" class="radar-grid" />`;
  }).join("");

  const axisLines = labels.map((_, i) => {
    const [x, y] = polarPoint(cx, cy, maxR, i, total);
    return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" class="radar-axis" />`;
  }).join("");

  const labelEls = labels.map((label, i) => {
    const [x, y] = polarPoint(cx, cy, maxR + 26, i, total);
    return `<text x="${x}" y="${y}" class="radar-label" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
  }).join("");

  const polygons = series.map(s => {
    const pts = s.values.map((v, i) => polarPoint(cx, cy, (Math.min(10, v) / 10) * maxR, i, total));
    return `<polygon points="${pointsToString(pts)}" class="${s.cssClass}" />`;
  }).join("");

  return `<svg viewBox="0 0 300 300" class="radar-svg" role="img" aria-label="${t("radar.aria")}">
    ${gridRings}
    ${axisLines}
    ${polygons}
    ${labelEls}
  </svg>`;
}

function buildRadarChart(profile, racket) {
  return buildRadarSVG([
    { values: racketRadarValues(racket), cssClass: "radar-racket" },
    { values: profileRadarValues(profile), cssClass: "radar-user" }
  ]);
}

function createStatBars(racket) {
  const stats = [
    [t("stat.control"), racket.control],
    [t("stat.power"), racket.power],
    [t("stat.forgiveness"), racket.forgiveness],
    [t("stat.comfort"), racket.comfort],
    [t("stat.maneuver"), racket.maneuver],
    [t("stat.effect"), racket.effect]
  ];
  return `<div class="stat-bars">${stats.map(([label, value]) => `
    <div class="stat-bar-row">
      <span class="stat-bar-label">${label}</span>
      <div class="stat-bar-track"><div class="stat-bar-fill" data-target="${Math.round(value / 10 * 100)}" style="width:0%"></div></div>
      <span class="stat-bar-value">${value}/10</span>
    </div>`).join("")}</div>`;
}

function animateFillsAndScores(container, instant = false) {
  const applyFills = () => {
    container.querySelectorAll(".stat-bar-fill[data-target], .stage-fill[data-target], .bd-fill[data-target]").forEach(el => {
      el.style.width = el.getAttribute("data-target") + "%";
    });
    container.querySelectorAll(".score-ring[data-target]").forEach(el => {
      el.style.setProperty("--p", el.getAttribute("data-target"));
    });
  };
  if (instant || prefersReducedMotion()) {
    applyFills();
    container.querySelectorAll(".score[data-target]").forEach(el => {
      el.textContent = el.getAttribute("data-target") + "/100";
    });
    return;
  }
  // Scheduled with setTimeout (not requestAnimationFrame) so the fill still
  // happens even if the tab is backgrounded and rAF never gets a frame.
  setTimeout(applyFills, 20);

  container.querySelectorAll(".score[data-target]").forEach(el => {
    const target = +el.getAttribute("data-target");
    const duration = 700;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(progress * target) + "/100";
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    // Safety net: rAF pauses on a backgrounded tab, which could otherwise
    // leave the score stuck mid-count. Force the final value regardless.
    setTimeout(() => { el.textContent = target + "/100"; }, duration + 300);
  });
}

// --- Share ---

function encodeShareState() {
  return btoa(encodeURIComponent(JSON.stringify({ m: testMode, a: answers, r: refineWeights })));
}

function decodeShareState(str) {
  try {
    return JSON.parse(decodeURIComponent(atob(str)));
  } catch (e) {
    return null;
  }
}

function buildShareUrl() {
  const base = location.href.split("#")[0];
  return `${base}#r=${encodeShareState()}`;
}

function buildShareText() {
  if (!lastResults) return "";
  const lines = [t("share.textIntro")(lastResults.topThree[0].score)];
  lastResults.topThree.forEach((r, i) => lines.push(t("share.textLine")(i + 1, r.name, r.score)));
  lines.push(`${t("share.textOutro")} ${buildShareUrl()}`);
  return lines.join("\n");
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch (e) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e2) { /* clipboard unavailable, ignore */ }
    document.body.removeChild(ta);
  }
}

function showToast(message) {
  let toast = getElement("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function shareResults() {
  const url = buildShareUrl();
  const text = buildShareText();
  if (navigator.share) {
    try {
      await navigator.share({ title: t("share.native"), text, url });
      return;
    } catch (e) {
      if (e && e.name === "AbortError") return;
    }
  }
  await copyToClipboard(text);
  showToast(t("share.copiedText"));
}

async function copyShareLink() {
  await copyToClipboard(buildShareUrl());
  showToast(t("share.copiedLink"));
}

function buildShareSection() {
  let html = `<section class="analysis anim-in">`;
  html += `<h2 class="analysis-title">${t("share.title")}</h2>`;
  html += `<p class="hint">${t("share.desc")}</p>`;
  html += `<div class="share-actions">`;
  html += `<button class="primary" onclick="shareResults()">${t("share.button")}</button>`;
  html += `<button class="secondary" onclick="copyShareLink()">${t("share.copyLink")}</button>`;
  html += `</div>`;
  html += `</section>`;
  return html;
}

// --- History / progress ---

const HISTORY_KEY = "padelFinderHistory";
let resultsRecorded = false;
let isSharedView = false;

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function saveHistoryEntry(entry) {
  const history = loadHistory();
  history.push(entry);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(-10)));
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  resultsRecorded = false;
  if (lastResults) showResults();
}

function formatHistoryDate(timestamp) {
  return new Date(timestamp).toLocaleDateString(LANG === "de" ? "de-DE" : "en-GB", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function recordHistoryEntry(profile, topThree) {
  if (isSharedView || resultsRecorded) return;
  saveHistoryEntry({
    date: Date.now(),
    mode: testMode,
    topName: topThree[0].name,
    topScore: topThree[0].score,
    profile: { control: profile.control, power: profile.power, forgive: profile.forgive, comfort: profile.comfort }
  });
  resultsRecorded = true;
  hasOwnProfile = true;
}

// True once the user has completed their own quiz (not a shared link) — gates
// the "for your profile" personal score shown in browse/compare mode.
let hasOwnProfile = false;

function personalScoreFor(racket) {
  return calculateScore(calculateRawScore(racket));
}

// --- Refine: live re-weighting on top of the quiz result, no retake needed ---

let refineWeights = { control: 0, power: 0, comfort: 0, price: 0 };

function refineBonus(racket) {
  return refineWeights.control * racket.control * 2.5
    + refineWeights.power * racket.power * 2.5
    + refineWeights.comfort * racket.comfort * 2.5
    + refineWeights.price * (150 - racket.price) * 0.15;
}

// In-budget rackets always come first; over-budget ones are ranked by fit minus overshoot.
// Reads the budget via getAnswer, so call inside withAnswers when scoring someone else.
function orderByBudget(ranked) {
  const maxBudget = getMaxBudget();
  const inBudget = ranked.filter(r => r.price <= maxBudget);
  const fitMinusOvershoot = r => r.rawScore - (r.price - maxBudget) * 1.5;
  const overBudget = ranked
    .filter(r => r.price > maxBudget)
    .sort((a, b) => fitMinusOvershoot(b) - fitMinusOvershoot(a));
  return inBudget.concat(overBudget);
}

function computeTopThree() {
  const currentName = (findRacketByName(getAnswer("currentRacket")) || {}).name;
  const ranked = RACKETS
    .filter(racket => racket.name !== currentName)
    .map(racket => ({ ...racket, rawScore: calculateRawScore(racket) + refineBonus(racket) }))
    .sort((a, b) => b.rawScore - a.rawScore)
    .map(racket => ({ ...racket, score: calculateScore(racket.rawScore) }));
  return orderByBudget(ranked).slice(0, 3);
}

const REFINE_KEYS = ["control", "power", "comfort", "price"];

function sanitizeRefine(raw) {
  const out = {};
  REFINE_KEYS.forEach(key => {
    out[key] = Math.max(-2, Math.min(2, Math.round(+((raw || {})[key]) || 0)));
  });
  return out;
}

function buildRefinePanel() {
  const slider = (id, key, label) =>
    `<div class="refine-row">
      <span class="refine-label">${label}</span>
      <span class="refine-end">${t("refine.less")}</span>
      <input type="range" class="refine-slider" id="${id}" min="-2" max="2" step="1" value="${refineWeights[key]}" oninput="applyRefine()" aria-label="${t("refine.aria")(label)}">
      <span class="refine-end">${t("refine.more")}</span>
    </div>`;
  return `<section class="analysis anim-in refine-panel">
    <h2 class="analysis-title">${t("refine.title")}</h2>
    <p class="hint">${t("refine.desc")}</p>
    ${slider("refineControl", "control", t("refine.control"))}
    ${slider("refinePower", "power", t("refine.power"))}
    ${slider("refineComfort", "comfort", t("refine.comfort"))}
    ${slider("refinePrice", "price", t("refine.cheaper"))}
    <button class="secondary" onclick="resetRefine()">${t("refine.reset")}</button>
  </section>`;
}

function applyRefine() {
  refineWeights = sanitizeRefine({
    control: getElement("refineControl").value,
    power: getElement("refinePower").value,
    comfort: getElement("refineComfort").value,
    price: getElement("refinePrice").value
  });
  renderResultsBody(lastResults.profile, computeTopThree(), true);
}

function resetRefine() {
  ["refineControl", "refinePower", "refineComfort", "refinePrice"].forEach(id => { getElement(id).value = 0; });
  refineWeights = sanitizeRefine({});
  renderResultsBody(lastResults.profile, computeTopThree(), true);
}

function buildConfidenceBadge(topThree) {
  if (topThree.length < 2) return "";
  // Raw scores, not the clamped 0-100 value: two rackets can both display 100 yet differ clearly.
  const gap = Math.round((topThree[0].rawScore - topThree[1].rawScore) / SCORE_DIVISORS[testMode]);
  const isClose = gap < 6;
  return `<div class="confidence-badge ${isClose ? "close" : "clear"} anim-in">${isClose ? t("confidence.close") : t("confidence.clear")(gap)}</div>`;
}

const BREAKDOWN_KEYS = ["style", "wishes", "level", "health", "budget", "nogo", "current"];

function buildScoreBreakdown(racket) {
  const divisor = SCORE_DIVISORS[testMode];
  const all = RACKETS.map(scoreBreakdown);
  const mine = scoreBreakdown(racket);
  const rows = BREAKDOWN_KEYS.map(key => {
    const average = all.reduce((sum, parts) => sum + parts[key], 0) / all.length;
    return [key, (mine[key] - average) / divisor];
  });
  const bonus = refineBonus(racket) / divisor;
  if (Math.abs(bonus) >= 0.5) rows.push(["refine", bonus]);
  const visible = rows.filter(([, value]) => Math.abs(value) >= 0.5).sort((a, b) => b[1] - a[1]);
  if (!visible.length) return "";
  const maxAbs = Math.max(...visible.map(([, value]) => Math.abs(value)));
  const rowsHtml = visible.map(([key, value]) => {
    const rounded = Math.round(value);
    const cls = value >= 0 ? "pos" : "neg";
    const label = rounded > 0 ? `+${rounded}` : rounded < 0 ? `−${-rounded}` : "±0";
    return `<div class="bd-row ${cls}">
      <span class="bd-label">${t(key === "nogo" && value > 0 ? "bd.nogoOk" : "bd." + key)}</span>
      <div class="bd-track"><div class="bd-fill" data-target="${Math.round(Math.abs(value) / maxAbs * 100)}" style="width:0%"></div></div>
      <span class="bd-value">${label}</span>
    </div>`;
  }).join("");
  return `<details class="breakdown" open>
    <summary>${t("bd.title")}</summary>
    <p class="hint">${t("bd.desc")(RACKETS.length)}</p>
    ${rowsHtml}
  </details>`;
}

function renderResultsBody(profile, topThree, instant = false) {
  lastResults.topThree = topThree;
  const body = getElement("resultsBody");
  if (instant) body.style.minHeight = body.offsetHeight + "px";
  let html = `<section class="analysis anim-in">`;
  html += `<h2 class="analysis-title">${t("analysis.title")}</h2>`;
  html += `<p class="hint">${t("analysis.desc")}</p>`;
  html += `<div class="radar-wrap">${buildRadarChart(profile, topThree[0])}</div>`;
  html += `<div class="radar-legend"><span><i class="legend-dot legend-user"></i>${t("analysis.legendUser")}</span><span><i class="legend-dot legend-racket"></i>${topThree[0].name}</span></div>`;
  html += `</section>`;
  html += buildConfidenceBadge(topThree);
  html += topThree.map((r, n) => createRacketCard(r, n, topThree[0], n === 0)).join("");
  body.innerHTML = html;
  body.classList.toggle("static", instant);
  animateFillsAndScores(body, instant);
  if (instant) requestAnimationFrame(() => { body.style.minHeight = ""; });
  if (getElement("currentRacketInput")) applyCurrentRacket();
}

// --- Accessory recommendations (real products from padelreference.com) ---

const PR_IMG = "https://www.padelreference.com/storage/";
const PR_URL = "https://www.padelreference.com/en/";

// Verified on padelreference.com (September 2026). Shoes are left out on purpose: every model is gendered.
const ACCESSORIES = [
  { name: "Padel Reference Overgrip White x4", brand: "Padel Reference", category: "overgrip", price: 6.9, url: PR_URL + "padel-accessories/p/overgrip-padel-reference-white-x4", image: PR_IMG + "767/surgrip-padel-reference-blanc.webp", goodFor: ["beginner", "frequent_player"] },
  { name: "Wilson Absorbx Black Overgrip", brand: "Wilson", category: "overgrip", price: 8.9, url: PR_URL + "accesorios-de-padel/p/wilson-absorbx-black-overgrip", image: PR_IMG + "22525/4skNaj7FE5Wg02SEU64R1Ft7iraVdQ-metaU3VyZ3JpcC13aWxzb24tYWJzb3JieC1ub2lyLndlYnA%3D-.webp", goodFor: ["sweaty_hands", "more_grip", "frequent_player"] },
  { name: "Dunlop Tour Pro Overgrips White x3", brand: "Dunlop", category: "overgrip", price: 6.9, url: PR_URL + "padel-accessories/p/dunlop-tour-pro-overgrips-white-x3", image: PR_IMG + "22053/2hfBDBTuqxLyk9Svs2myOpQpitVD0P-metaNjIzNzk4XzAxLmpwZw%3D%3D-.webp", goodFor: ["more_grip", "sweaty_hands", "comfort_joints", "frequent_player"] },
  { name: "Head Prime Tour White Overgrip x12", brand: "HEAD", category: "overgrip", price: 21.9, url: PR_URL + "padel-accessories/p/head-prime-tour-white-overgrip-x12", image: PR_IMG + "13281/W4i4UX1cGwdD1AEoskcG3zPL2hCp7H-metaMS5wbmc%3D-.webp", goodFor: ["sweaty_hands", "more_grip", "frequent_player"] },
  { name: "Oxdog Supertech Black Overgrips x2", brand: "Oxdog", category: "overgrip", price: 6.9, url: PR_URL + "padel-accessories/p/oxdog-supertech-black-overgrips-x2", image: PR_IMG + "19312/iWr7KgUuSiU8IWmfQ2UNE97owkTSsG-metac2hvcHBpbmcuanBlZw%3D%3D-.webp", goodFor: ["more_grip", "frequent_player"] },
  { name: "Bullpadel Hesacore Gel Grip", brand: "Bullpadel", category: "overgrip", price: 16.9, url: PR_URL + "accessoires-de-padel/p/grip-bullpadel-hesacore-gel", image: PR_IMG + "799/grip-bullpadel-hesacore-carbon-.webp", goodFor: ["comfort_joints", "more_grip", "sweaty_hands"] },
  { name: "Shockout Duo Grip Pro + Overgrip", brand: "Shockout", category: "overgrip", price: 8.5, url: PR_URL + "shockout-padel-accessories/p/shockout-duo-grip-pro-and-overgrip-black-yellow", image: PR_IMG + "723/shockout-duo-grip-pro-surgrip-de-padel-noirjaune.webp", goodFor: ["more_grip", "comfort_joints", "sweaty_hands"] },
  { name: "Head Pro S+ x Padel Reference Balls", brand: "HEAD", category: "balls", price: 5.9, url: PR_URL + "padel-balls/p/head-pro-s-plus-x-padelreference-padel-balls", image: PR_IMG + "15989/A7XaodbQCUSBt3lcVHzXzlNVGntaLK-metaVmlzdWVscyByYXF1ZXR0ZXMucG5n-.webp", goodFor: ["frequent_player", "outdoor"] },
  { name: "Dunlop Fort Padel", brand: "Dunlop", category: "balls", price: 5.9, url: PR_URL + "padel-balls/p/dunlop-fort-padel", image: PR_IMG + "17231/0u6Lo4XN7Yya1OcF7QdjZCQYdjeVOQ-metaYm9pdGUtZGUtYmFsbGVzLWR1bmxvcC1mb3J0LXBhZGVsLmpwZw%3D%3D-.webp", goodFor: ["frequent_player"] },
  { name: "Bullpadel Premium Pro", brand: "Bullpadel", category: "balls", price: 4.9, url: PR_URL + "padel-balls/p/bullpadel-premium-pro", image: PR_IMG + "17542/PbYilHQaXrzpCPWouYSMqAZIvsN8Uc-metadHViZS1kZS1iYWxsZXMtYnVsbHBhZGVsLXByZW1pdW0tcHJvLndlYnA%3D-.webp", goodFor: ["frequent_player"] },
  { name: "Head Pro+ Padel Balls", brand: "HEAD", category: "balls", price: 5.9, url: PR_URL + "padel-balls/p/head-pro-plus-padel-balls", image: PR_IMG + "11003/3RbclAXD6qGX34CH4pmjw7xC205K7n-metaMy1iYWxsLWhlYWQtcGFkZWwtcHJvLXNpbmdsZS1jYW4ucG5n-.webp", goodFor: ["frequent_player"] },
  { name: "3 Tubes Dunlop Eco Padel Balls", brand: "Dunlop", category: "balls", price: 23.9, url: PR_URL + "padel-balls/p/3-tubes-of-dunlop-eco-padel-balls", image: PR_IMG + "19980/AoABepRqX54Pk9egMPgzdfeux1Ry50-metaMTE5ODU0LXRyaXBhY2stZGUtYm90ZXMtZGUtMy1ib2xhcy1kdW5sb3AtZWNvLXBhZGVsLTYwMTU1NGV1LTEyMDB4MTIwM.webp", goodFor: ["frequent_player"] },
  { name: "Bullpadel Racket Protector Transparent", brand: "Bullpadel", category: "protector", price: 4.9, url: PR_URL + "padel-accessories/p/bullpadel-racket-protector-transparent", image: PR_IMG + "10349/B5XaFOOw04eV7cReyI4AXj3qFyF0h6-metaNTQucG5n-.webp", goodFor: ["frame_protection", "beginner"] },
  { name: "Padel Reference Racket Protector", brand: "Padel Reference", category: "protector", price: 5.5, url: PR_URL + "padel-accessories/p/padel-reference-racket-protector-transparent", image: PR_IMG + "11292/X4PqN2YrX3x0czeqV2hdqpfoykdVri-metaNjMucG5n-.webp", goodFor: ["frame_protection", "beginner"] },
  { name: "Head Antishock Skin", brand: "HEAD", category: "protector", price: 6.9, url: PR_URL + "padel-accessories/p/head-antishock-skin-overgrip", image: PR_IMG + "9716/yVVCT1N33iFwODcgFpkqVlg3vhWIpu-metaYW50aXNob2NrLXNraW4tcGFkZWwtMi5qcGc%3D-.webp", goodFor: ["frame_protection", "beginner"] },
  { name: "Oxdog No.2 Transparent Racket Protector", brand: "Oxdog", category: "protector", price: 7.9, url: PR_URL + "padel-accessories/p/oxdog-no2-transparent-racket-protector", image: PR_IMG + "19321/6kVNXbj47SfGa5kSfboxLlER2em33m-metabm8yLWZyYW1lLXByb3RlY3Rvci5qcGVn-.webp", goodFor: ["frame_protection", "beginner"] },
  { name: "Babolat Court Lite Backpack", brand: "Babolat", category: "bag", price: 44.9, url: PR_URL + "padel-bag/p/babolat-court-lite-navy-blue-backpack", image: PR_IMG + "22504/3p8rLqz0O8g3TXJtQZE3Y5vgXFNbue-metaNzQwMTAwMDkwXzEud2VicA%3D%3D-.webp", goodFor: ["travel_storage"] },
  { name: "Dunlop Club Thermo Backpack", brand: "Dunlop", category: "bag", price: 44.9, url: PR_URL + "padel-bag/p/dunlop-club-thermo-backpack-blackgrey", image: PR_IMG + "26335/Sac-de-padel-Dunlop-noir-thermos.webp", goodFor: ["travel_storage", "frequent_player"] },
  { name: "Head Tour 25L Backpack", brand: "HEAD", category: "bag", price: 69.9, url: PR_URL + "padel-bag/p/head-tour-25l-black-backpack", image: PR_IMG + "22545/m96ejm1dS0wdoUYcJMrStd3gATPW2h-metaMzIzNzk3LmpwZw%3D%3D-.webp", goodFor: ["travel_storage"] },
  { name: "Adidas Multigame 2026 Padel Bag", brand: "Adidas", category: "bag", price: 89.9, url: PR_URL + "padel-bag/p/adidas-multigame-2026-black-red-padel-bag", image: PR_IMG + "24366/120481-paletero-adidas-multigame-black-red-2026-ab1pa7u22-1500x1500-1.jpg.webp", goodFor: ["travel_storage", "frequent_player"] },
  { name: "HEAD Padel Tour Bag L", brand: "HEAD", category: "bag", price: 89.9, url: PR_URL + "padel-bag/p/head-padel-tour-bag-l-green", image: PR_IMG + "22437/JFitzzQnZ01ucBd07NxlKdKYAuLuTf-metaMzI0MjgxLmpwZw%3D%3D-.webp", goodFor: ["travel_storage", "frequent_player", "outdoor"] },
  { name: "Bullpadel Ease Vibe Dampeners x4", brand: "Bullpadel", category: "other", price: 14.9, notForBrand: "Babolat", url: PR_URL + "padel-accessories/p/bullpadel-ease-vibe-white-dampeners-x4", image: PR_IMG + "20221/wNXQv9Ph1nAnnAhFvTOczkPKP9uKo1-metaMTIxNjA0LWJsaXN0ZXItNHVkcy00OTUxNDEtMTUwMHgxNTAwLXZpc3RhMS5qcGcud2VicA%3D%3D-.webp", goodFor: ["comfort_joints"] },
  { name: "4ON Total Grip Spray", brand: "4ON", category: "other", price: 22.9, url: PR_URL + "padel-accessories/p/4-on-total-grip-spray-", image: PR_IMG + "750/4-on-total-grip-spray-.webp", goodFor: ["sweaty_hands", "more_grip"] },
  { name: "Head Wristband Anthracite 5\"", brand: "HEAD", category: "other", price: 8.9, url: PR_URL + "padel-accessories/p/head-wristband-anthracite-5", image: PR_IMG + "17600/AO1vrFK5injkEagCwzOqEPQXoabv9Z-metaMjg1MDcwLWFuX2dyaXNfMS5qcGc%3D-.webp", goodFor: ["sweaty_hands"] }
];

function getPlayerNeeds() {
  const needs = new Set();
  const sweat = getAnswer("sweat");
  if (sweat === "A") needs.add("sweaty_hands");
  if (sweat !== "A") needs.add("more_grip");
  if (["B", "C"].includes(getAnswer("joints"))) needs.add("comfort_joints");
  const level = getAnswer("level");
  if (level === "A" || level === "B") ["beginner", "frame_protection", "court_grip_footwear"].forEach(n => needs.add(n));
  const frequency = getAnswer("frequency");
  if (frequency === "C" || frequency === "D") ["frequent_player", "frame_protection", "travel_storage", "court_grip_footwear"].forEach(n => needs.add(n));
  const court = getAnswer("court");
  if (court === "A" || court === "C") needs.add("outdoor");
  if (court === "B" || court === "C") needs.add("indoor");
  return needs;
}

function recommendAccessories() {
  const needs = getPlayerNeeds();
  const topBrand = lastResults && lastResults.topThree[0] ? lastResults.topThree[0].brand : "";
  const bestByCategory = {};
  ACCESSORIES.forEach(item => {
    if (item.notForBrand && item.notForBrand === topBrand) return;
    const matched = (item.goodFor || []).filter(n => needs.has(n));
    if (!matched.length) return;
    const best = bestByCategory[item.category];
    const better = !best || matched.length > best.matched.length
      || (matched.length === best.matched.length && item.price < best.item.price);
    if (better) bestByCategory[item.category] = { item, matched };
  });
  return Object.values(bestByCategory).sort((a, b) => b.matched.length - a.matched.length).slice(0, 5);
}

function buildAccessoriesSection() {
  const picks = recommendAccessories();
  if (!picks.length) return "";
  let html = `<section class="analysis anim-in"><div class="badge">${t("acc.badge")}</div>`;
  html += `<h2 class="analysis-title">${t("acc.title")}</h2><p class="hint">${t("acc.desc")}</p><div class="acc-grid">`;
  html += picks.map(({ item, matched }) => `<article class="acc-card">
    ${racketImageBlock(item)}
    <div class="acc-body">
      <div class="acc-category">${t("acc.cat." + item.category)}</div>
      <h3>${item.name}</h3>
      <p class="acc-why">${t("acc.why")} ${joinList(matched.map(n => t("need." + n)))}.</p>
      <div class="acc-price">${formatPrice(item.price)} €</div>
      <a class="buy" href="${item.url}" target="_blank" rel="noopener">${t("card.buy")}</a>
    </div>
  </article>`).join("");
  html += `</div></section>`;
  return html;
}

// --- Upgrade check: compare your current racket against your top match ---

function buildCurrentRacketSection() {
  return `<section class="analysis anim-in">
    <div class="badge">${t("current.badge")}</div>
    <h2 class="analysis-title">${t("current.title")}</h2>
    <p class="hint">${t("current.desc")}</p>
    <input type="text" id="currentRacketInput" class="text-input" list="racketNamesList" placeholder="${t("current.placeholder")}" aria-label="${t("current.placeholder")}" value="${(findRacketByName(getAnswer("currentRacket")) || {}).name || ""}" oninput="applyCurrentRacket()" autocomplete="off">
    <datalist id="racketNamesList">${RACKETS.map(r => `<option value="${r.name}">`).join("")}</datalist>
    <div id="currentRacketResult"></div>
  </section>`;
}

function applyCurrentRacket() {
  const input = getElement("currentRacketInput");
  const container = getElement("currentRacketResult");
  if (!input || !container || !lastResults) return;
  const name = input.value.trim();
  if (!name) { container.innerHTML = ""; return; }
  const current = findRacketByName(name);
  if (!current) { container.innerHTML = `<p class="hint">${t("current.notFound")}</p>`; return; }

  const top = lastResults.topThree[0];
  const stats = [
    [t("stat.control"), current.control, top.control],
    [t("stat.power"), current.power, top.power],
    [t("stat.forgiveness"), current.forgiveness, top.forgiveness],
    [t("stat.comfort"), current.comfort, top.comfort],
    [t("stat.maneuver"), current.maneuver, top.maneuver],
    [t("stat.effect"), current.effect, top.effect]
  ];
  let html = `<h3>${t("current.vsTop")(top.name)}</h3><div class="upgrade-list">`;
  stats.forEach(([label, from, to]) => {
    const diff = Math.round((to - from) * 10) / 10;
    const cls = diff > 0.3 ? "up" : diff < -0.3 ? "down" : "same";
    const arrow = diff > 0.3 ? `+${diff}` : diff < -0.3 ? `${diff}` : "±0";
    html += `<div class="upgrade-row ${cls}"><span class="upgrade-label">${label}</span><span class="upgrade-values">${from} → ${to}</span><span class="upgrade-diff">${arrow}</span></div>`;
  });
  html += `</div>`;
  const priceDiff = Math.round(top.price - current.price);
  html += `<p class="reason">${t("current.priceDiff")(priceDiff > 0 ? "+" + priceDiff : String(priceDiff))}</p>`;
  container.innerHTML = html;
}

function buildHistorySection(profile, topThree) {
  if (isSharedView) return "";
  const history = loadHistory();
  const relevant = resultsRecorded ? history.slice(0, -1) : history;
  const previous = relevant[relevant.length - 1];
  if (!previous || !previous.profile) return "";

  const statDefs = [
    [t("results.control"), "control"],
    [t("results.power"), "power"],
    [t("results.forgiveness"), "forgive"],
    [t("results.comfort"), "comfort"]
  ];
  const changes = statDefs
    .filter(([, key]) => previous.profile[key] !== profile[key])
    .map(([label, key]) => t("history.statChange")(label, previous.profile[key], profile[key]));

  const topLine = previous.topName === topThree[0].name
    ? t("history.sameTop")
    : t("history.newTop")(previous.topName, topThree[0].name);

  let html = `<section class="analysis anim-in">`;
  html += `<h2 class="analysis-title">${t("history.title")}</h2>`;
  html += `<p class="hint">${t("history.vsLast")(formatHistoryDate(previous.date))}</p>`;
  html += `<ul class="tag-list">${(changes.length ? changes : [t("history.noChange")]).map(c => `<li>${c}</li>`).join("")}</ul>`;
  html += `<p class="reason">${topLine}</p>`;
  html += `<button class="secondary" onclick="clearHistory()">${t("history.clear")}</button>`;
  html += `</section>`;
  return html;
}

// --- Partner / doubles check ---

function buildPartnerSection() {
  return `<section class="analysis anim-in" id="partnerSection">
    <div class="badge">${t("partner.badge")}</div>
    <h2 class="analysis-title">${t("partner.title")}</h2>
    <p class="hint">${t("partner.desc")}</p>
    <div id="partnerContent"><button class="primary" onclick="startPartnerQuiz()">${t("partner.start")}</button></div>
  </section>`;
}

let partnerStage = "idle"; // idle | quiz | done — lets a language switch restore the partner block

function startPartnerQuiz() {
  partnerAnswers = {};
  partnerCurrentQuestion = 0;
  partnerStage = "quiz";
  renderPartnerQuestion();
}

function renderPartnerQuestion() {
  const def = PARTNER_QUESTION_DEFS[partnerCurrentQuestion];
  const text = questionText(def.id);
  const total = PARTNER_QUESTION_DEFS.length;
  const backButton = partnerCurrentQuestion > 0
    ? `<button class="secondary" onclick="goToPreviousPartner()">${t("q.back")}</button>`
    : `<span></span>`;

  let html = `<div class="eyebrow">${t("partner.stepLabel")} ${partnerCurrentQuestion + 1}/${total}${def.multi ? t("q.multiTag") : ""}</div><h3>${text.title}</h3>`;
  if (text.hint) html += `<p class="hint">${text.hint}</p>`;

  if (def.range) {
    const currentValue = partnerAnswers[def.id] || 5;
    html += `<div class="range-value" id="prv">${currentValue}</div>`;
    html += `<input class="range" id="partnerRange" type="range" min="1" max="10" value="${currentValue}" aria-label="${text.title} — ${t("q.rangeAria")}">`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="submitPartnerRange()">${t("q.next")}</button></div>`;
  } else if (def.multi) {
    const selected = Array.isArray(partnerAnswers[def.id]) ? partnerAnswers[def.id] : [];
    html += `<div class="options">`;
    html += def.opts.map(key => {
      const isSelected = selected.includes(key);
      return `<button class="option option-multi${isSelected ? " selected" : ""}" aria-pressed="${isSelected}" onclick="togglePartnerAnswer('${key}')"><span class="check" aria-hidden="true"></span>${text.opts[key]}</button>`;
    }).join("");
    html += `</div>`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="goToNextPartner()"${selected.length ? "" : " disabled"}>${t("q.next")}</button></div>`;
  } else {
    html += `<div class="options">`;
    html += def.opts.map(key =>
      `<button class="option${partnerAnswers[def.id] === key ? " selected" : ""}" onclick="choosePartnerAnswer('${key}')">${key}) ${text.opts[key]}</button>`
    ).join("");
    html += `</div>`;
    html += `<div class="actions">${backButton}</div>`;
  }

  getElement("partnerContent").innerHTML = html;
  if (def.range) {
    getElement("partnerRange").oninput = e => { getElement("prv").textContent = e.target.value; };
  }
}

function choosePartnerAnswer(choice) {
  partnerAnswers[PARTNER_QUESTION_DEFS[partnerCurrentQuestion].id] = choice;
  goToNextPartner();
}

function togglePartnerAnswer(choice) {
  const def = PARTNER_QUESTION_DEFS[partnerCurrentQuestion];
  const exclusiveKeys = def.exclusive || [];
  let selected = Array.isArray(partnerAnswers[def.id]) ? partnerAnswers[def.id] : [];
  if (selected.includes(choice)) {
    selected = selected.filter(k => k !== choice);
  } else if (exclusiveKeys.includes(choice)) {
    selected = [choice];
  } else {
    selected = selected.filter(k => !exclusiveKeys.includes(k)).concat(choice);
  }
  partnerAnswers[def.id] = selected;
  renderPartnerQuestion();
}

function submitPartnerRange() {
  partnerAnswers[PARTNER_QUESTION_DEFS[partnerCurrentQuestion].id] = +getElement("partnerRange").value;
  goToNextPartner();
}

function goToNextPartner() {
  if (partnerCurrentQuestion < PARTNER_QUESTION_DEFS.length - 1) {
    partnerCurrentQuestion++;
    renderPartnerQuestion();
  } else {
    finishPartnerQuiz();
  }
}

function goToPreviousPartner() {
  if (partnerCurrentQuestion > 0) {
    partnerCurrentQuestion--;
    renderPartnerQuestion();
  }
}

function getCompatibilityText(partnerProfile) {
  const mainPosition = getAnswer("position");
  const partnerPosition = withAnswers(partnerAnswers, () => getAnswer("position"));
  const mainProfile = lastResults ? lastResults.profile : getUserProfile();
  const isNet = pos => pos === "C" || pos === "D";
  const isBack = pos => pos === "A";

  if (isNet(mainPosition) && isNet(partnerPosition)) return t("compat.bothNet");
  if (isBack(mainPosition) && isBack(partnerPosition)) return t("compat.bothBack");
  if ((isNet(mainPosition) && isBack(partnerPosition)) || (isBack(mainPosition) && isNet(partnerPosition))) return t("compat.complementary");
  if (Math.abs(mainProfile.power - partnerProfile.power) >= 2) return t("compat.powerControl");
  return t("compat.balanced");
}

function finishPartnerQuiz() {
  const mainProfile = lastResults ? lastResults.profile : getUserProfile();
  const partnerProfile = withAnswers(partnerAnswers, () => getUserProfile());
  partnerStage = "done";
  const partnerRanked = rankRackets(partnerAnswers).map(r => ({ ...r, score: calculateScore(r.rawScore, "quick") }));
  const partnerTop = withAnswers(partnerAnswers, () => orderByBudget(partnerRanked))[0];

  const radar = buildRadarSVG([
    { values: profileRadarValues(partnerProfile), cssClass: "radar-partner" },
    { values: profileRadarValues(mainProfile), cssClass: "radar-user" }
  ]);
  const compatText = getCompatibilityText(partnerProfile);
  const partnerCard = withAnswers(partnerAnswers, () => createRacketCard(partnerTop, 0, partnerTop));

  let html = `<h3>${t("partner.resultTitle")}</h3>`;
  html += `<div class="radar-wrap">${radar}</div>`;
  html += `<div class="radar-legend"><span><i class="legend-dot legend-user"></i>${t("partner.you")}</span><span><i class="legend-dot legend-partner"></i>${t("partner.partner")}</span></div>`;
  html += `<p class="reason">${compatText}</p>`;
  html += `<h3>${t("partner.partnerTop")}</h3>`;
  html += partnerCard;
  html += `<button class="secondary" onclick="startPartnerQuiz()">${t("partner.restart")}</button>`;

  getElement("partnerContent").innerHTML = html;
  animateFillsAndScores(getElement("partnerContent"));
}

// --- Results page ---

function showResults(options = {}) {
  const profile = getUserProfile();
  const topThree = computeTopThree();
  const modeLabel = testMode === "pro" ? t("results.proLabel") : t("results.quickLabel");

  lastResults = { profile, topThree, mode: testMode };
  recordHistoryEntry(profile, topThree);

  getElement("quiz").classList.add("hidden");
  getElement("results").classList.remove("hidden");
  if (!options.keepScroll) scrollToTop();

  let html = `<div class="results-head anim-in">`;
  html += `<div class="badge">${RACKET_ICON}${t("results.badge")} · ${modeLabel}</div>`;
  html += `<h1>${t("results.title")}</h1>`;
  html += `<p>${t("results.desc")(RACKETS.length)}</p>`;
  html += `</div>`;
  html += `<div class="profile anim-in" style="animation-delay:.05s">`;
  html += `<div class="stat"><b>${profile.control}/10</b><span>${t("results.control")}</span></div>`;
  html += `<div class="stat"><b>${profile.power}/10</b><span>${t("results.power")}</span></div>`;
  html += `<div class="stat"><b>${profile.forgive}/10</b><span>${t("results.forgiveness")}</span></div>`;
  html += `<div class="stat"><b>${profile.comfort}/10</b><span>${t("results.comfort")}</span></div>`;
  html += `</div>`;

  html += `<div id="resultsBody"></div>`;
  if (!isSharedView) html += `<button class="link-btn results-browse" onclick="openBrowse()">${t("results.browseCta")}</button>`;
  html += buildRefinePanel();
  html += buildCurrentRacketSection();
  html += buildAccessoriesSection();
  html += buildPlayerAnalysis(profile);
  html += buildHistorySection(profile, topThree);
  html += buildPartnerSection();
  html += buildShareSection();
  html += `<div class="notice anim-in">${t("notice")(RACKETS.length)}</div>`;
  html += `<button class="secondary restart" onclick="restartApp()">${t("restart")}</button>`;

  getElement("results").innerHTML = html;
  renderResultsBody(profile, topThree, !!options.keepScroll);
  animateFillsAndScores(getElement("results"), !!options.keepScroll);
  if (partnerStage === "quiz") renderPartnerQuestion();
  if (partnerStage === "done") finishPartnerQuiz();
}

function racketImageBlock(racket) {
  if (racket.image) {
    return `<div class="card-image"><img src="${racket.image}" alt="${racket.name}" onerror="this.parentElement.classList.add('broken')">${RACKET_ICON}</div>`;
  }
  return `<div class="card-image card-image-placeholder">${RACKET_ICON}</div>`;
}

function createRacketCard(racket, index, top, withBreakdown = false) {
  const reason = index === 0
    ? generateTopReasonText(racket)
    : generateAlternativeText(racket, top);
  const overBudgetNote = racket.price > getMaxBudget() ? t("card.overBudget") : "";
  const noGoLabels = violatedNoGos(racket).map(key => questionText("noGos").opts[key]);

  let html = `<article class="recommendation anim-in${index === 0 ? " top-pick" : ""}" style="animation-delay:${0.15 + index * 0.08}s">`;
  html += `<div class="rank">${t("card.rank")(index + 1)}</div>`;
  html += `<div class="rec-body">`;
  html += racketImageBlock(racket);
  html += `<div class="rec-main">`;
  html += `<div class="rec-title">`;
  html += `<div>`;
  html += `<h2>${racket.name}</h2>`;
  html += `<div>${racket.brand} · ${t("shape." + racket.form)} · ${formatNumber(racket.weight)} g · ${t("balance." + racket.balance)} · ${t("kernLabel")} ${t("feel." + racket.feel)} · ${t("level." + racket.level)}</div>`;
  html += `</div>`;
  html += `<div class="score-ring" data-target="${racket.score}"><div class="score" data-target="${racket.score}">0/100</div></div>`;
  html += `</div>`;
  html += createStatBars(racket);
  html += `<p class="reason">${reason}</p>`;
  if (noGoLabels.length) html += `<p class="nogo-warning">${t("card.noGoWarning")(joinList(noGoLabels))}</p>`;
  if (withBreakdown) html += buildScoreBreakdown(racket);
  html += `<div class="why">`;
  html += `<h3>${t("card.priceLabel")}</h3>`;
  html += `<p>${t("card.priceText")(formatPrice(racket.price))}${overBudgetNote}</p>`;
  html += `</div>`;
  html += `<a class="buy" href="${racket.url}" target="_blank" rel="noopener">${t("card.buy")}</a>`;
  html += `<p class="source-note">${t("card.source")}</p>`;
  html += `</div>`;
  html += `</div>`;
  html += `</article>`;

  return html;
}

function formatNumber(value) {
  const str = String(value);
  return LANG === "de" ? str.replace(".", ",") : str;
}

function formatPrice(value) {
  return formatNumber(value.toFixed(2));
}

function joinList(items) {
  const and = t("and");
  return items.length > 1 ? items.slice(0, -1).join(", ") + ` ${and} ` + items[items.length - 1] : items[0];
}

function generateTopReasonText(racket) {
  const profile = getUserProfile();
  const technique = getAnswer("technique");
  const joints = getAnswer("joints");
  const growth = getAnswer("growth");
  const reasons = [];

  if (profile.control >= 7 && racket.control >= 8) reasons.push(t("reason.control"));
  if (profile.power >= 7 && racket.power >= 9) reasons.push(t("reason.power"));
  if ((profile.forgive >= 7 || technique === "A" || technique === "B") && racket.forgiveness >= 8) {
    reasons.push(t("reason.sweetSpot"));
  }
  if ((profile.comfort >= 7 || joints === "B" || joints === "C") && racket.comfort >= 8) {
    reasons.push(t("reason.comfort"));
  }
  if ((growth === "C" || growth === "D") && racket.growth >= 9) {
    reasons.push(t("reason.growth"));
  }

  const shapeMap = { A: "Round", B: "Teardrop", C: "Diamond" };
  if (shapeMap[getAnswer("shapePreference")] === racket.form) {
    reasons.push(t("reason.shape")(t("shapePhrase." + racket.form)));
  }

  const balanceFeel = getAnswer("balanceFeel");
  if (balanceFeel === "A" && racket.balance === "Low") {
    reasons.push(t("reason.grippy"));
  }
  if (balanceFeel === "C" && racket.balance === "High") {
    reasons.push(t("reason.headHeavy"));
  }

  const current = findRacketByName(getAnswer("currentRacket"));
  if (current) {
    const dislikes = getList("dislikes");
    const vsCurrent = [];
    [["A", "power", t("stat.power")], ["B", "control", t("stat.control")], ["F", "forgiveness", t("stat.forgiveness")], ["G", "effect", t("stat.effect")]]
      .forEach(([key, stat, label]) => {
        const diff = Math.round((racket[stat] - current[stat]) * 10) / 10;
        if (dislikes.includes(key) && diff >= 1) vsCurrent.push(t("reason.vsCurrent")(label, diff, current.name));
      });
    if (dislikes.includes("C") && racket.comfort - current.comfort >= 1) {
      vsCurrent.push(t("reason.vsCurrent")(t("stat.comfort"), racket.comfort - current.comfort, current.name));
    }
    if (dislikes.includes("D") && current.weight - racket.weight >= 5) {
      vsCurrent.push(t("reason.lighterThanCurrent")(formatNumber(current.weight - racket.weight), current.name));
    }
    if (dislikes.includes("H") && current.price - racket.price >= 15) {
      vsCurrent.push(t("reason.cheaperThanCurrent")(Math.round(current.price - racket.price), current.name));
    }
    reasons.unshift(...vsCurrent);
  }

  let text = reasons.length
    ? t("reasonTemplate")(joinList(reasons.slice(0, 4)))
    : t("reasonFallback");

  if (getBrandPrefs().includes(racket.brand)) {
    text += t("reasonBrand")(racket.brand);
  }
  return text;
}

function generateAlternativeText(racket, top) {
  const stats = [
    [t("stat.control"), racket.control - top.control],
    [t("stat.power"), racket.power - top.power],
    [t("stat.forgiveness"), racket.forgiveness - top.forgiveness],
    [t("stat.comfort"), racket.comfort - top.comfort]
  ];
  const more = stats.filter(([, diff]) => diff >= 0.5).map(([label]) => label);
  const less = stats.filter(([, diff]) => diff <= -1).map(([label]) => label);

  const parts = [];
  if (more.length) parts.push(t("alt.more")(joinList(more)));
  if (less.length) parts.push(t("alt.less")(joinList(less), more.length > 0));
  const priceDiff = racket.price - top.price;
  if (priceDiff <= -15) parts.push(t("alt.cheaper")(Math.round(-priceDiff)));
  if (priceDiff >= 15) parts.push(t("alt.pricier")(Math.round(priceDiff)));
  if (racket.form !== top.form) parts.push(t("alt.shape")(t("shape." + racket.form), t("shape." + top.form)));

  return parts.length ? t("alt.template")(parts.join(" · ")) : t("alt.fallback");
}

const STAGES = {
  de: [
    { name: "Einsteiger", next: "Grundschläge (Vorhand, Rückhand, Volley) konstant ins Spiel bringen und das Spiel mit der Glaswand kennenlernen." },
    { name: "Aufsteiger", next: "Konstanz aufbauen: Bälle kontrolliert in die Mitte spielen und den Lob als Verteidigungswaffe einsetzen." },
    { name: "Fortgeschritten", next: "Positionsspiel verbessern: gemeinsam mit dem Partner ans Netz rücken und die Bandeja sicher spielen." },
    { name: "Ambitioniert", next: "Variation ins Spiel bringen: Víbora, Chiquita und bewusste Tempowechsel trainieren." },
    { name: "Leistungsspieler", next: "Feinschliff: Matchplanung, Videoanalyse deiner Spiele und gezieltes Athletiktraining." }
  ],
  en: [
    { name: "Beginner", next: "Bring the basic strokes (forehand, backhand, volley) into your game consistently and get to know the glass wall." },
    { name: "Improver", next: "Build consistency: play balls into the middle with control and use the lob as a defensive weapon." },
    { name: "Advanced", next: "Improve positioning: move up to the net together with your partner and play the bandeja confidently." },
    { name: "Ambitious", next: "Add variation to your game: practice the víbora, chiquita and deliberate tempo changes." },
    { name: "Competitive", next: "Fine-tuning: match planning, video analysis of your games and targeted athletic training." }
  ]
};

const WEAKNESS_TIPS = {
  de: {
    A: "Power: Sie kommt im Padel vor allem aus Timing und Körperrotation, nicht aus dem Arm. Trainiere den Smash mit Ganzkörperbewegung und triff den Ball am höchsten Punkt.",
    B: "Kontrolle: Spiele mehr Bälle mit mittlerem Tempo gezielt in die Mitte oder auf die Füße der Gegner. Zielübungen mit Hütchen helfen, Präzision vor Tempo zu stellen.",
    C: "Return: Kurze Ausholbewegung, Ball früh nehmen und bevorzugt tief in die Mitte spielen — so kommt der Aufschläger nicht bequem ans Netz.",
    D: "Aufschlag: Konstanz vor Tempo. Der Ball wird nach dem Aufprall auf Hüfthöhe oder darunter getroffen — ziele auf die Ecke zur Seitenwand oder auf den Körper und variiere mit Slice.",
    E: "Netzspiel: Kontinentalgriff, kurze Blockbewegung statt Ausholen, Schläger immer vor dem Körper. Ein Split-Step vor jedem gegnerischen Schlag verbessert dein Timing.",
    F: "Defensive: Übe das Spiel mit der Glaswand — Ball abprallen lassen, mitdrehen, danach spielen. Der hohe Lob ist deine beste Waffe, um die Gegner vom Netz zu drängen.",
    G: "Timing: Mach bei jedem gegnerischen Schlag einen Split-Step und bereite den Schläger früh vor. Ein kurzes Handyvideo deiner Schläge oder eine Trainerstunde zeigt Technikfehler schnell."
  },
  en: {
    A: "Power: In padel it mainly comes from timing and body rotation, not the arm. Train the smash with a full-body motion and hit the ball at its highest point.",
    B: "Control: Play more mid-paced balls deliberately into the middle or at your opponents' feet. Target drills with cones help prioritize precision over pace.",
    C: "Return: Short backswing, take the ball early and prefer to play deep into the middle — that keeps the server from comfortably reaching the net.",
    D: "Serve: Consistency over pace. The ball is hit at or below hip height after the bounce — aim for the corner near the side wall or the body, and vary with slice.",
    E: "Net play: Continental grip, short block motion instead of a backswing, racket always in front of your body. A split-step before every opponent shot improves your timing.",
    F: "Defense: Practice playing off the glass wall — let the ball bounce off, turn with it, then play it. The high lob is your best weapon to push opponents off the net.",
    G: "Timing: Do a split-step on every opponent shot and prepare your racket early. A short phone video of your strokes or a coaching session quickly reveals technique flaws."
  }
};

function getProgressStage() {
  const scale = { A: 0, B: 1, C: 2, D: 3 };
  const values = ["level", "technique", "frequency", "level2"]
    .map(id => scale[getAnswer(id)])
    .filter(value => value !== undefined);
  const average = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
  return {
    index: Math.round(average / 3 * (STAGES[LANG].length - 1)),
    percent: Math.max(6, Math.round(average / 3 * 100))
  };
}

const PLAYER_TYPES = {
  de: {
    beginner: { name: "Einsteiger mit Potenzial", text: "Du stehst noch am Anfang — jetzt zählen ein fehlerverzeihender Schläger und saubere Grundlagen." },
    power: { name: "Power-Angreifer", text: "Du suchst aktiv den Punkt, übernimmst gerne Verantwortung und willst Bälle über Kopf beenden." },
    net: { name: "Netzspieler", text: "Du fühlst dich am Netz am wohlsten und machst Punkte mit Volleys und Druck aus der Vorderposition." },
    defender: { name: "Solider Verteidiger", text: "Du spielst geduldig, bringst viele Bälle zurück und nutzt die Fehler deiner Gegner." },
    allround: { name: "Kontrollierter Allrounder", text: "Du bist variabel unterwegs und setzt auf ein ausgewogenes Spiel aus Kontrolle und Druck." }
  },
  en: {
    beginner: { name: "Beginner with potential", text: "You're still at the start — a forgiving racket and clean fundamentals matter most right now." },
    power: { name: "Power attacker", text: "You actively look for the point, like to take responsibility and want to finish balls overhead." },
    net: { name: "Net player", text: "You feel most at home at the net and score points with volleys and pressure from the front." },
    defender: { name: "Solid defender", text: "You play patiently, get a lot of balls back and capitalize on your opponents' mistakes." },
    allround: { name: "Controlled all-rounder", text: "You're flexible on court and rely on a balanced game of control and pressure." }
  }
};

function getPlayerType(profile, stageIndex) {
  const style = getAnswer("style");
  const position = getAnswer("position");
  const types = PLAYER_TYPES[LANG];
  if (stageIndex === 0) return types.beginner;
  if (style === "C" || position === "D" || (profile.power >= 8 && profile.power > profile.control)) return types.power;
  if (position === "C") return types.net;
  if (style === "A" || position === "A") return types.defender;
  return types.allround;
}

const PLAYER_STRINGS = {
  de: {
    cleanTechnique: "Saubere Technik",
    practice: "Viel Spielpraxis",
    otherSports: "Ballgefühl aus anderen Schlägersportarten",
    netPresence: "Präsenz am Netz",
    patience: "Geduld von hinten",
    flexible: "Flexibel auf beiden Positionen",
    variable: "Variables Spiel",
    motivation: "Motivation, besser zu werden",
    jointFocus: "Gelenkbelastung im Blick behalten",
    jointTip: "Gelenke: Unterarm und Schulter vor jeder Session aufwärmen und einen weichen Schläger mit großem Sweet Spot nutzen. Anhaltende Beschwerden ärztlich abklären lassen.",
    tennisTip: "Aus dem Tennis: Schwinge im Padel kompakter, verzichte auf starken Topspin und nutze die Wände, statt jeden Ball direkt zu nehmen.",
    badmintonTip: "Aus dem Badminton: Halte das Handgelenk vor allem am Netz stabil — Kontrolle kommt im Padel aus einer ruhigen Schlagfläche.",
    tableTennisTip: "Aus dem Tischtennis: Deine Reflexe sind am Netz Gold wert — achte auf eine kompakte, stabile Schlagfläche statt viel Handgelenk.",
    squashTip: "Aus dem Squash: Dein Wandgefühl ist ein echter Vorteil — nutze es bewusst bei Bällen aus der Rückwand.",
    frequencyTip: "Regelmäßigkeit: Eine feste Session pro Woche bringt deutlich mehr Fortschritt als unregelmäßiges Spielen.",
    diamondBeginnerTip: "Kopfform: Diamond-Schläger verzeihen wenig. Für den Einstieg sind runde oder Teardrop-Schläger meist die bessere Wahl — der Finder berücksichtigt das bereits.",
    idea1: "Teste vor dem Kauf nach Möglichkeit einen der empfohlenen Schläger im Club oder beim Händler.",
    idea2: "Vorjahresmodelle sind oft deutlich günstiger bei nahezu gleicher Leistung.",
    idea3: "Such dir einen Partner, der gerne ans Netz geht — Verteidiger und Netzspieler ergänzen sich im Doppel ideal.",
    idea4: "Ein geduldiger Partner, der von hinten viele Bälle zurückbringt, ergänzt dein Netzspiel ideal.",
    idea5: "Führe ein kurzes Trainingstagebuch: Notiere nach jeder Session einen Schlag, der gut lief, und einen, an dem du arbeitest.",
    idea6: "Wechsle regelmäßig das Griffband — ein frisches Griffband verbessert den Halt und entlastet den Unterarm."
  },
  en: {
    cleanTechnique: "Clean technique",
    practice: "Lots of match practice",
    otherSports: "Ball feel from other racket sports",
    netPresence: "Presence at the net",
    patience: "Patience from the back",
    flexible: "Flexible in both positions",
    variable: "Variable game",
    motivation: "Motivation to improve",
    jointFocus: "Keep an eye on joint strain",
    jointTip: "Joints: Warm up your forearm and shoulder before every session and use a soft racket with a big sweet spot. Get persistent discomfort checked by a doctor.",
    tennisTip: "From tennis: Swing more compactly in padel, skip heavy topspin, and use the walls instead of taking every ball on the fly.",
    badmintonTip: "From badminton: Keep your wrist stable, especially at the net — control in padel comes from a steady hitting surface.",
    tableTennisTip: "From table tennis: Your reflexes are gold at the net — focus on a compact, stable hitting surface rather than a lot of wrist.",
    squashTip: "From squash: Your wall sense is a real advantage — use it deliberately on balls off the back wall.",
    frequencyTip: "Consistency: One fixed session a week brings noticeably more progress than playing irregularly.",
    diamondBeginnerTip: "Head shape: Diamond rackets forgive very little. For getting started, round or teardrop rackets are usually the better choice — the finder already accounts for that.",
    idea1: "If possible, try one of the recommended rackets at a club or retailer before buying.",
    idea2: "Last year's models are often noticeably cheaper for almost the same performance.",
    idea3: "Find a partner who likes to go to the net — defenders and net players complement each other perfectly in doubles.",
    idea4: "A patient partner who retrieves a lot of balls from the back complements your net game perfectly.",
    idea5: "Keep a short training journal: after each session, note one shot that went well and one you're working on.",
    idea6: "Change your grip tape regularly — fresh grip tape improves your hold and eases strain on your forearm."
  }
};

function buildPlayerAnalysis(profile) {
  const stage = getProgressStage();
  const stages = STAGES[LANG];
  const type = getPlayerType(profile, stage.index);
  const weaknesses = getList("weakness").filter(key => key !== "H");
  const sports = getList("sports");
  const position = getAnswer("position");
  const joints = getAnswer("joints");
  const S = PLAYER_STRINGS[LANG];
  const weaknessLabels = questionText("weakness").opts;
  const tipsDict = WEAKNESS_TIPS[LANG];

  const strengths = [];
  if (["C", "D"].includes(getAnswer("technique"))) strengths.push(S.cleanTechnique);
  if (["C", "D"].includes(getAnswer("frequency"))) strengths.push(S.practice);
  if (sports.some(s => s !== "A")) strengths.push(S.otherSports);
  if (position === "C" || position === "D") strengths.push(S.netPresence);
  if (position === "A") strengths.push(S.patience);
  if (position === "B") strengths.push(S.flexible);
  if (getAnswer("style") === "B") strengths.push(S.variable);
  if (!strengths.length) strengths.push(S.motivation);

  const focusAreas = weaknesses.map(key => weaknessLabels[key]);
  if (joints === "B" || joints === "C") focusAreas.push(S.jointFocus);

  const tips = weaknesses.map(key => tipsDict[key]);
  if (joints === "B" || joints === "C") tips.push(S.jointTip);
  if (sports.includes("B")) tips.push(S.tennisTip);
  if (sports.includes("C")) tips.push(S.badmintonTip);
  if (sports.includes("D")) tips.push(S.tableTennisTip);
  if (sports.includes("E")) tips.push(S.squashTip);
  if (["A", "B"].includes(getAnswer("frequency"))) tips.push(S.frequencyTip);
  if (getAnswer("technique") === "A" && getAnswer("shapePreference") === "C") tips.push(S.diamondBeginnerTip);

  const ideas = [S.idea1];
  if (["A", "B"].includes(getAnswer("budget"))) ideas.push(S.idea2);
  if (position === "A") ideas.push(S.idea3);
  if (position === "C" || position === "D") ideas.push(S.idea4);
  if (["C", "D"].includes(getAnswer("frequency"))) ideas.push(S.idea5);
  ideas.push(S.idea6);

  let html = `<section class="player-analysis anim-in">`;
  html += `<div class="badge">${t("player.badge")}</div>`;
  html += `<h2 class="analysis-title">${t("player.typeTitle")(type.name)}</h2>`;
  html += `<p class="reason">${type.text}</p>`;

  html += `<div class="stage">`;
  html += `<div class="stage-head"><span>${t("player.stageLabel")}</span><b>${stages[stage.index].name}</b></div>`;
  html += `<div class="stage-track"><div class="stage-fill" data-target="${stage.percent}" style="width:0%"></div></div>`;
  html += `<div class="stage-labels">${stages.map((s, i) => `<span${i === stage.index ? ` class="active"` : ""}>${s.name}</span>`).join("")}</div>`;
  html += `<p class="hint"><b>${t("player.nextStep")}</b> ${stages[stage.index].next}</p>`;
  html += `</div>`;

  html += `<div class="analysis-columns">`;
  html += `<div><h3>${t("player.strengths")}</h3><ul class="tag-list">${strengths.map(s => `<li>${s}</li>`).join("")}</ul></div>`;
  html += `<div><h3>${t("player.focus")}</h3><ul class="tag-list tag-list-focus">${(focusAreas.length ? focusAreas : [t("player.noFocus")]).map(s => `<li>${s}</li>`).join("")}</ul></div>`;
  html += `</div>`;

  if (tips.length) {
    html += `<h3>${t("player.tips")}</h3>`;
    html += `<ol class="tip-list">${tips.slice(0, 6).map(tip => `<li>${tip}</li>`).join("")}</ol>`;
  }
  html += `<h3>${t("player.ideas")}</h3>`;
  html += `<ul class="tip-list">${ideas.slice(0, 4).map(i => `<li>${i}</li>`).join("")}</ul>`;
  html += `</section>`;
  return html;
}

// --- PWA install prompt (Chrome/Android only; iOS has no such API) ---

let deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredInstallPrompt = e;
  showInstallBanner();
});

function showInstallBanner() {
  if (getElement("installBanner")) return;
  const banner = document.createElement("div");
  banner.id = "installBanner";
  banner.className = "install-banner anim-in";
  banner.innerHTML = `<div><b>${t("pwa.installTitle")}</b><p>${t("pwa.installDesc")}</p></div>
    <div class="install-banner-actions">
      <button class="primary" id="installBtn">${t("pwa.installBtn")}</button>
      <button class="secondary" id="installDismissBtn">${t("pwa.installDismiss")}</button>
    </div>`;
  document.body.appendChild(banner);
  getElement("installBtn").onclick = async () => {
    banner.remove();
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
    }
  };
  getElement("installDismissBtn").onclick = () => banner.remove();
}

// Share links are untrusted input: only keep answers that are valid for a known question.
function sanitizeAnswers(raw) {
  const clean = {};
  if (!raw || typeof raw !== "object") return clean;
  QUICK_QUESTION_DEFS.concat(PRO_EXTRA_QUESTION_DEFS).forEach(def => {
    const value = raw[def.id];
    if (value === undefined || value === null) return;
    if (def.range) {
      const n = Math.round(+value);
      if (n >= 1 && n <= 10) clean[def.id] = n;
    } else if (def.racketSearch) {
      const match = findRacketByName(value);
      if (match) clean[def.id] = match.name;
    } else if (def.multi) {
      const list = (Array.isArray(value) ? value : [value]).filter(key => def.opts.includes(key));
      if (list.length) clean[def.id] = [...new Set(list)];
    } else if (def.opts.includes(value)) {
      clean[def.id] = value;
    }
  });
  return clean;
}

function tryRestoreSharedResult() {
  if (!location.hash.startsWith("#r=")) return false;
  const decoded = decodeShareState(location.hash.slice(3));
  if (!decoded || typeof decoded !== "object") return false;
  const cleanAnswers = sanitizeAnswers(decoded.a);
  if (!Object.keys(cleanAnswers).length) return false;
  answers = cleanAnswers;
  testMode = decoded.m === "pro" ? "pro" : "quick";
  activeQuestions = testMode === "pro" ? QUICK_QUESTION_DEFS.concat(PRO_EXTRA_QUESTION_DEFS) : QUICK_QUESTION_DEFS;
  refineWeights = sanitizeRefine(decoded.r);
  isSharedView = true;
  resultsRecorded = false;
  partnerStage = "idle";
  document.querySelector(".hero").classList.add("hidden");
  ["modeSelect", "quiz", "browseSection"].forEach(id => getElement(id).classList.add("hidden"));
  showResults();
  return true;
}

function renderHeroStats() {
  const brands = new Set(RACKETS.map(r => r.brand)).size;
  const proQuestions = QUICK_QUESTION_DEFS.length + PRO_EXTRA_QUESTION_DEFS.length;
  const stats = [[RACKETS.length, "hero.statRackets"], [brands, "hero.statBrands"], [proQuestions, "hero.statQuestions"]];
  getElement("heroStats").innerHTML = stats.map(([n, key]) =>
    `<div class="hero-stat"><b data-count="${n}">${n}</b><span data-i18n="${key}">${t(key)}</span></div>`
  ).join("");
  if (prefersReducedMotion()) return;
  getElement("heroStats").querySelectorAll("[data-count]").forEach(el => {
    const target = +el.getAttribute("data-count");
    const start = performance.now();
    const tick = now => {
      const progress = Math.min(1, (now - start) / 1100);
      el.textContent = Math.round((1 - Math.pow(1 - progress, 3)) * target);
      if (progress < 1) requestAnimationFrame(tick);
    };
    el.textContent = "0";
    requestAnimationFrame(tick);
    setTimeout(() => { el.textContent = target; }, 1500);
  });
}

renderHeroStats();
applyStaticTranslations();
getElement("langToggle").textContent = LANG === "de" ? "EN" : "DE";
tryRestoreSharedResult();
window.addEventListener("hashchange", tryRestoreSharedResult);
