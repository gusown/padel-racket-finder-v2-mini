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
  { name: "Osaka Deshi Control Green/Black", brand: "Osaka", url: "https://www.padelreference.com/en/padel-rackets/p/osaka-deshi-control-greenblack", image: "https://www.padelreference.com/storage/25056/1.webp", price: 89.90, shape: "Round", weight: 360, balance: "Handle Heavy", feel: "Flexible / Comfort", level: "Beginner", ratings: { power: 7, control: 8, comfort: 7, maneuverability: 8, effect: 8, tolerance: 6 } }
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
    "mode.quickMeta": "15 Fragen · ca. 3–5 Min",
    "mode.quickDesc": "Spielstil, Technik, Wünsche und Budget — eine schnelle, verlässliche Empfehlung.",
    "mode.quickCta": "Quick Test starten →",
    "mode.proTitle": "Pro Test",
    "mode.proMeta": "bis zu 23 Fragen · ca. 7–9 Min",
    "mode.proDesc": "Zusätzlich: Gewicht, Balance-Gefühl, Wettkampf-Niveau, Verletzungsdetails, Indoor/Outdoor, Markenpräferenz und Budget-Flexibilität für die präziseste Empfehlung.",
    "mode.proCta": "Pro Test starten →",
    "mode.back": "← Zurück",
    "q.back": "← Zurück",
    "q.next": "Weiter →",
    "q.multiTag": " · MEHRFACHAUSWAHL",
    "q.frage": "FRAGE",
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
    "browse.title": "Alle 49 Schläger",
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
    "pwa.installDesc": "Auf dem Homescreen speichern — funktioniert auch offline im Laden.",
    "pwa.installBtn": "Installieren",
    "pwa.installDismiss": "Nicht jetzt"
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
    "mode.quickMeta": "15 questions · ~3–5 min",
    "mode.quickDesc": "Playing style, technique, preferences and budget — a fast, reliable recommendation.",
    "mode.quickCta": "Start Quick Test →",
    "mode.proTitle": "Pro Test",
    "mode.proMeta": "up to 23 questions · ~7–9 min",
    "mode.proDesc": "Also covers: weight, balance feel, competitive level, injury details, indoor/outdoor, brand preference and budget flexibility for the most precise recommendation.",
    "mode.proCta": "Start Pro Test →",
    "mode.back": "← Back",
    "q.back": "← Back",
    "q.next": "Next →",
    "q.multiTag": " · MULTIPLE CHOICE",
    "q.frage": "QUESTION",
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
    "browse.title": "All 49 rackets",
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
    "pwa.installDesc": "Save to your home screen — works offline in-store too.",
    "pwa.installBtn": "Install",
    "pwa.installDismiss": "Not now"
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
  { id: "style", opts: ["A", "B", "C"] },
  { id: "position", opts: ["A", "B", "C", "D"] },
  { id: "power", range: true },
  { id: "control", range: true },
  { id: "forgive", range: true },
  { id: "comfort", range: true },
  { id: "joints", opts: ["A", "B", "C"] },
  { id: "weakness", multi: true, opts: ["A", "B", "C", "D", "E", "F", "G"] },
  { id: "technique", opts: ["A", "B", "C", "D"] },
  { id: "sports", multi: true, exclusive: ["A"], opts: ["A", "B", "C", "D", "E", "F"] },
  { id: "frequency", opts: ["A", "B", "C", "D"] },
  { id: "shapePreference", opts: ["A", "B", "C", "D"] },
  { id: "growth", opts: ["A", "B", "C", "D"] },
  { id: "budget", opts: ["A", "B", "C", "D", "E", "F"] }
];

const PRO_EXTRA_QUESTION_DEFS = [
  { id: "weightPref", opts: ["A", "B", "C", "D"] },
  { id: "balanceFeel", opts: ["A", "B", "C", "D"] },
  { id: "level2", opts: ["A", "B", "C", "D"] },
  { id: "injuryDetail", multi: true, showIf: () => ["B", "C"].includes(getAnswer("joints")), opts: ["A", "B", "C"] },
  { id: "court", opts: ["A", "B", "C"] },
  { id: "brand", multi: true, exclusive: ["A"], opts: ["A", "B", "C", "D", "E", "F", "G"] },
  { id: "budgetFlex", opts: ["A", "B", "C"] },
  { id: "playstyleIcon", opts: ["A", "B", "C", "D"] }
];

const QUESTION_TEXT = {
  de: {
    level: { title: "Wie viel Padel hast du gespielt?", hint: "Eine \"Session\" ist eine Trainings- oder Spieleinheit auf dem Platz.", opts: { A: "0–5 Sessions", B: "5–20 Sessions", C: "20–50 Sessions", D: "50+ Sessions / Turniere" } },
    style: { title: "Wie würdest du dein Spiel beschreiben?", hint: "Defensiv = du spielst sicher und wartest auf Fehler des Gegners. Offensiv = du suchst aktiv den Punktgewinn über Smashes und Angriffe.", opts: { A: "Defensiv", B: "Allround", C: "Offensiv" } },
    position: { title: "Wo spielst du am liebsten?", hint: "Deine bevorzugte Position beeinflusst, wie wichtig Netzspiel (Volleys) gegenüber Defensive (Lobs, Abwehr) für deinen Schläger ist.", opts: { A: "Hinten", B: "Variabel", C: "Gerne am Netz", D: "Sehr offensiv" } },
    power: { title: "Wie wichtig ist dir Power?", hint: "Power beschreibt, wie viel zusätzliche Schlagkraft dir der Schläger selbst gibt — besonders hilfreich, wenn dir noch die eigene Wucht fehlt." },
    control: { title: "Wie wichtig ist dir Kontrolle?", hint: "Kontrolle beschreibt, wie präzise du den Ball platzieren kannst — meist wichtiger als Power für ein konstantes Spiel." },
    forgive: { title: "Wie wichtig ist dir Fehlertoleranz / großer Sweet Spot?", hint: "Der Sweet Spot ist die Zone auf dem Schlägerkopf, die den saubersten Treffer gibt. Ein großer Sweet Spot verzeiht auch Treffer, die nicht perfekt mittig sitzen." },
    comfort: { title: "Wie wichtig ist dir Komfort?", hint: "Komfort beschreibt, wie wenig Vibration beim Treffer in Arm und Schulter ankommt — wichtig für lange Sessions." },
    joints: { title: "Hast du manchmal Beschwerden in Ellenbogen, Handgelenk oder Schulter?", hint: "Im Volksmund oft \"Tennisarm\" genannt. Weichere Schläger mit neutraler oder niedriger Balance schonen die Gelenke spürbar mehr als harte Diamond-Schläger.", opts: { A: "Nein, keine Beschwerden", B: "Manchmal, leichte Beschwerden", C: "Ja, regelmäßig" } },
    weakness: { title: "Wo siehst du aktuell deine größten Schwächen?", hint: "Wähle alles, was zutrifft. Wir gleichen deine Schwächen mit den Eigenschaften des Schlägers aus und geben dir am Ende passende Trainingstipps.", opts: { A: "Power", B: "Kontrolle", C: "Return", D: "Aufschlag", E: "Volley / Netzspiel", F: "Defensive", G: "Timing / Technik" } },
    technique: { title: "Wie sauber ist deine Technik?", hint: "Bei noch unsauberer Technik empfehlen wir automatisch weichere, fehlerverzeihendere Schläger mit großem Sweet Spot.", opts: { A: "Noch unsauber", B: "Solide, aber inkonstant", C: "Ziemlich sauber", D: "Sehr sauber" } },
    sports: { title: "Welche anderen Schlägersportarten hast du schon gespielt?", hint: "Vorerfahrung verbessert oft dein Ballgefühl. Sie fließt ins Kontroll-Matching und in deine persönlichen Tipps ein.", opts: { A: "Keine", B: "Tennis", C: "Badminton", D: "Tischtennis", E: "Squash", F: "Andere" } },
    frequency: { title: "Wie oft spielst du Padel?", hint: "Je öfter du spielst, desto mehr lohnt sich ein Schläger, der auch bei intensiverem Training mitwächst.", opts: { A: "Seltener als 1x im Monat", B: "1x pro Woche", C: "2–3x pro Woche", D: "4x+ pro Woche / Wettkampf" } },
    shapePreference: { title: "Kennst du schon deine bevorzugte Kopfform?", hint: "Rund = maximale Kontrolle & großer Sweet Spot. Teardrop = Allround-Mix aus Power & Kontrolle. Diamond = maximale Power, aber kleinerer Sweet Spot und anstrengender für Einsteiger.", opts: { A: "Rund", B: "Teardrop", C: "Diamond", D: "Weiß ich noch nicht" } },
    growth: { title: "Wie lange soll der Schläger mit dir mitwachsen?", hint: "Falls du dich schnell verbessern willst, empfehlen wir Schläger mit mehr Powerreserven für die Zukunft statt reinen Einsteiger-Modellen.", opts: { A: "Hauptsächlich jetzt", B: "1 Jahr+", C: "1–2 Jahre+", D: "Möglichst lange" } },
    budget: { title: "Was ist dein maximales Budget?", hint: "Alle Preise sind Richtwerte fürs Matching. Der aktuelle Preis kann über den Link am Ende geprüft werden.", opts: { A: "Unter 100 €", B: "100–130 €", C: "130–150 €", D: "150–180 €", E: "180–220 €", F: "220 €+" } },
    weightPref: { title: "Bevorzugst du eher leichte oder schwere Schläger?", hint: "Leichtere Schläger (unter 358 g) ermöglichen schnellere Reaktionen am Netz. Schwerere (365 g+) geben mehr Power und Stabilität bei Schmetterbällen.", opts: { A: "Eher leicht", B: "Ausgewogen", C: "Eher schwer", D: "Weiß ich nicht" } },
    balanceFeel: { title: "Bevorzugst du ein griffiges oder kopflastiges Spielgefühl?", hint: "Griffig (niedrige Balance) = mehr Kontrolle und schnellere Handbewegungen. Kopflastig (hohe Balance) = mehr Power, aber ein trägerer Schwung.", opts: { A: "Griffig (mehr Kontrolle)", B: "Ausgewogen", C: "Kopflastig (mehr Power)", D: "Weiß ich nicht" } },
    level2: { title: "Auf welchem Niveau spielst du hauptsächlich?", hint: "Dein Wettkampf-Niveau beeinflusst, wie leistungsorientiert dein Schläger sein sollte.", opts: { A: "Hobby / Freizeit", B: "Amateur-Liga", C: "Ambitioniert / Turniere", D: "Leistungssport" } },
    injuryDetail: { title: "Welche Regionen betreffen deine Beschwerden?", hint: "Schulterprobleme reagieren besonders auf kopflastige Schläger, Handgelenksprobleme auf harte Schläger.", opts: { A: "Ellenbogen", B: "Handgelenk", C: "Schulter" } },
    court: { title: "Spielst du hauptsächlich Indoor oder Outdoor?", hint: "Outdoor (Wind, Sonne) profitiert oft von etwas mehr Kontrolle und Stabilität. Indoor erlaubt kompromissloseres Powerspiel.", opts: { A: "Outdoor", B: "Indoor", C: "Beides" } },
    brand: { title: "Hast du bevorzugte Marken?", hint: "Optional, Mehrfachauswahl möglich. Passende Modelle bekommen einen kleinen Bonus, aber Performance bleibt wichtiger als Marke.", opts: { A: "Keine Präferenz", B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat", G: "Andere" } },
    budgetFlex: { title: "Würdest du für den perfekten Schläger auch etwas mehr zahlen?", hint: "Falls ja, lockern wir dein Budget-Limit leicht, um dir auch knapp darüber liegende Top-Modelle zu zeigen.", opts: { A: "Nein, strikt bei meinem Budget bleiben", B: "Ja, bis zu 20 € mehr", C: "Ja, bis zu 40 € mehr" } },
    playstyleIcon: { title: "Welcher Spielstil inspiriert dich am meisten?", hint: "Nur für den Vibe — hilft uns, zwischen ähnlich guten Empfehlungen die passende Note zu treffen.", opts: { A: "Kontrollierter Allrounder", B: "Aggressiver Power-Spieler", C: "Geduldiger Verteidiger", D: "Kreativer Netzspieler" } }
  },
  en: {
    level: { title: "How much padel have you played?", hint: "A \"session\" is one training or match session on court.", opts: { A: "0–5 sessions", B: "5–20 sessions", C: "20–50 sessions", D: "50+ sessions / tournaments" } },
    style: { title: "How would you describe your game?", hint: "Defensive = you play safe and wait for your opponent's mistakes. Offensive = you actively look to win the point via smashes and attacks.", opts: { A: "Defensive", B: "All-round", C: "Offensive" } },
    position: { title: "Where do you like to play?", hint: "Your preferred position affects how important net play (volleys) is versus defense (lobs, retrieving) for your racket.", opts: { A: "Back", B: "Variable", C: "Love the net", D: "Very offensive" } },
    power: { title: "How important is power to you?", hint: "Power describes how much extra hitting force the racket itself gives you — especially helpful if you're still lacking your own." },
    control: { title: "How important is control to you?", hint: "Control describes how precisely you can place the ball — usually more important than power for consistent play." },
    forgive: { title: "How important is forgiveness / a big sweet spot to you?", hint: "The sweet spot is the zone on the racket face that gives the cleanest hit. A large sweet spot also forgives hits that aren't perfectly centered." },
    comfort: { title: "How important is comfort to you?", hint: "Comfort describes how little vibration reaches your arm and shoulder on impact — important for long sessions." },
    joints: { title: "Do you sometimes have discomfort in your elbow, wrist or shoulder?", hint: "Often called \"tennis elbow\". Softer rackets with a neutral or low balance are noticeably gentler on your joints than hard diamond rackets.", opts: { A: "No discomfort", B: "Sometimes, mild discomfort", C: "Yes, regularly" } },
    weakness: { title: "Where do you currently see your biggest weaknesses?", hint: "Pick everything that applies. We match your weaknesses against the racket's traits and give you matching training tips at the end.", opts: { A: "Power", B: "Control", C: "Return", D: "Serve", E: "Volley / net play", F: "Defense", G: "Timing / technique" } },
    technique: { title: "How clean is your technique?", hint: "If your technique is still rough, we automatically recommend softer, more forgiving rackets with a big sweet spot.", opts: { A: "Still rough", B: "Solid but inconsistent", C: "Pretty clean", D: "Very clean" } },
    sports: { title: "Which other racket sports have you already played?", hint: "Prior experience often improves your ball feel. It feeds into your control matching and your personal tips.", opts: { A: "None", B: "Tennis", C: "Badminton", D: "Table tennis", E: "Squash", F: "Other" } },
    frequency: { title: "How often do you play padel?", hint: "The more often you play, the more a racket that grows with more intense training pays off.", opts: { A: "Less than once a month", B: "Once a week", C: "2–3x a week", D: "4x+ a week / competitive" } },
    shapePreference: { title: "Do you already know your preferred head shape?", hint: "Round = maximum control & big sweet spot. Teardrop = all-round mix of power & control. Diamond = maximum power, but a smaller sweet spot and more demanding for beginners.", opts: { A: "Round", B: "Teardrop", C: "Diamond", D: "Don't know yet" } },
    growth: { title: "How long should the racket grow with you?", hint: "If you want to improve quickly, we recommend rackets with more power reserves for the future instead of pure beginner models.", opts: { A: "Mainly for now", B: "1 year+", C: "1–2 years+", D: "As long as possible" } },
    budget: { title: "What's your maximum budget?", hint: "All prices are reference values for matching. The current price can be checked via the link at the end.", opts: { A: "Under €100", B: "€100–130", C: "€130–150", D: "€150–180", E: "€180–220", F: "€220+" } },
    weightPref: { title: "Do you prefer lighter or heavier rackets?", hint: "Lighter rackets (under 358 g) allow faster reactions at the net. Heavier ones (365 g+) give more power and stability on smashes.", opts: { A: "Lighter", B: "Balanced", C: "Heavier", D: "Don't know" } },
    balanceFeel: { title: "Do you prefer a handle-light or head-heavy feel?", hint: "Handle-light (low balance) = more control and faster hand movement. Head-heavy (high balance) = more power, but a slower swing.", opts: { A: "Handle-light (more control)", B: "Balanced", C: "Head-heavy (more power)", D: "Don't know" } },
    level2: { title: "What level do you mainly play at?", hint: "Your competitive level affects how performance-oriented your racket should be.", opts: { A: "Hobby / recreational", B: "Amateur league", C: "Ambitious / tournaments", D: "Competitive sport" } },
    injuryDetail: { title: "Which regions are affected by your discomfort?", hint: "Shoulder issues react especially to head-heavy rackets, wrist issues to hard rackets.", opts: { A: "Elbow", B: "Wrist", C: "Shoulder" } },
    court: { title: "Do you mainly play indoor or outdoor?", hint: "Outdoor (wind, sun) often benefits from a bit more control and stability. Indoor allows more uncompromising power play.", opts: { A: "Outdoor", B: "Indoor", C: "Both" } },
    brand: { title: "Do you have preferred brands?", hint: "Optional, multiple selections possible. Matching models get a small bonus, but performance still matters more than brand.", opts: { A: "No preference", B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat", G: "Other" } },
    budgetFlex: { title: "Would you pay a bit more for the perfect racket?", hint: "If yes, we loosen your budget limit slightly to also show top models just above it.", opts: { A: "No, stick strictly to my budget", B: "Yes, up to €20 more", C: "Yes, up to €40 more" } },
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
  if (!getElement("quiz").classList.contains("hidden")) renderQuestion();
  else if (!getElement("results").classList.contains("hidden")) showResults();
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = t(key);
    if (value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const value = t(el.getAttribute("data-i18n-placeholder"));
    if (value !== undefined) el.placeholder = value;
  });
  document.documentElement.lang = LANG;
  if (typeof renderBrowseIfActive === "function") renderBrowseIfActive();
}

function startTest(mode) {
  testMode = mode;
  activeQuestions = mode === "pro" ? QUICK_QUESTION_DEFS.concat(PRO_EXTRA_QUESTION_DEFS) : QUICK_QUESTION_DEFS;
  currentQuestion = 0;
  answers = {};
  resultsRecorded = false;
  isSharedView = false;
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
    html += `<input class="range" id="range" type="range" min="1" max="10" value="${currentValue}">`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="submitRange()">${t("q.next")}</button></div>`;
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

function calculateRawScore(racket) {
  let score = 0;
  const style = getAnswer("style");
  const position = getAnswer("position");
  const weaknesses = getList("weakness");
  const technique = getAnswer("technique");
  const joints = getAnswer("joints");
  const frequency = getAnswer("frequency");
  const shapePref = getAnswer("shapePreference");
  const sports = getList("sports");

  // Style matching
  if (style === "A") {
    score += racket.defense * 2;
  } else if (style === "C") {
    score += racket.power * 2;
  } else {
    score += ((racket.control + racket.power) / 2) * 2;
  }

  // Position matching
  if (position === "C" || position === "D") {
    score += racket.net * 1.5;
  } else if (position === "A") {
    score += racket.defense * 1.5;
  } else {
    score += ((racket.net + racket.defense) / 2) * 1.5;
  }

  // User preferences (sliders)
  score += racket.control * (+getAnswer("control") || 7) * 1.2;
  score += racket.power * (+getAnswer("power") || 6) * 1.1;
  score += racket.forgiveness * (+getAnswer("forgive") || 7) * 1.1;
  score += racket.comfort * (+getAnswer("comfort") || 7) * 0.7;

  // Weakness compensation, damped so selecting many weaknesses doesn't inflate every score
  const weaknessFactor = 1 / Math.sqrt(Math.max(1, weaknesses.length));
  if (weaknesses.includes("A")) score += racket.power * 2 * weaknessFactor;
  if (["B", "C", "D"].some(w => weaknesses.includes(w))) score += racket.control * 1.4 * weaknessFactor;
  if (weaknesses.includes("E")) score += racket.net * 1.5 * weaknessFactor;
  if (weaknesses.includes("F")) score += racket.defense * 1.7 * weaknessFactor;
  if (weaknesses.includes("G")) score += racket.forgiveness * 1.6 * weaknessFactor;

  // Technique level
  if (technique === "A") score += racket.forgiveness * 2.2;
  if (technique === "B") score += racket.forgiveness * 1.2;

  // Experience: beginners need forgiveness and should avoid demanding power frames
  const level = getAnswer("level");
  if (level === "A" || level === "B") {
    score += racket.forgiveness * 1.5;
    if (racket.form === "Diamond") score -= 12;
    if (racket.hardness >= 7) score -= 6;
    if (racket.level === "Beginner") score += 6;
  }
  if (level === "A" && racket.level === "Advanced") score -= 6;
  if (level === "D") {
    score += racket.power * 0.8 + racket.growth * 0.8;
    if (racket.level === "Beginner") score -= 8;
  }

  // Racket-sport background transfers ball feel into control
  if (sports.includes("B") || sports.includes("C")) score += racket.control * 0.3;

  // Growth potential
  if (getAnswer("growth") === "C") score += racket.growth * 2;
  if (getAnswer("growth") === "D") score += racket.growth * 2.5;

  // Frequent players also benefit from growth reserves
  if (frequency === "C") score += racket.growth * 1;
  if (frequency === "D") score += racket.growth * 1.8;

  // Joint health: comfort and softness matter a lot more
  if (joints === "B") {
    score += racket.comfort * 1.5;
    if (racket.hardness >= 6) score -= 6;
  }
  if (joints === "C") {
    score += racket.comfort * 3;
    if (racket.hardness >= 6) score -= 14;
    if (racket.balance === "High" || racket.form === "Diamond") score -= 10;
  }

  // Explicit shape preference
  const shapeMap = { A: "Round", B: "Teardrop", C: "Diamond" };
  if (shapeMap[shapePref] && racket.form === shapeMap[shapePref]) score += 10;

  // Budget matching
  const maxBudget = getMaxBudget();
  if (racket.price <= maxBudget) {
    score += 8;
  } else {
    score -= Math.min(18, (racket.price - maxBudget) * 0.18);
  }

  // Penalize overly demanding rackets for less experienced players
  if (["A", "B"].includes(technique)) {
    if (racket.hardness >= 7) score -= 8;
    if (racket.balance === "High" || racket.form === "Diamond") score -= 7;
  }

  // --- Pro test only signals (no-op if unanswered) ---
  const weightPref = getAnswer("weightPref");
  if (weightPref === "A" && racket.weight < 358) score += 8;
  if (weightPref === "C" && racket.weight >= 365) score += 8;
  if (weightPref === "B" && racket.weight >= 358 && racket.weight < 365) score += 6;

  const balanceFeel = getAnswer("balanceFeel");
  if (balanceFeel === "A" && (racket.balance === "Low" || racket.balance === "Low-Medium")) score += 10;
  if (balanceFeel === "C" && (racket.balance === "High" || racket.balance === "Medium-High")) score += 10;
  if (balanceFeel === "B" && racket.balance === "Medium") score += 8;

  const level2 = getAnswer("level2");
  if (level2 === "C") score += racket.growth * 1.2;
  if (level2 === "D") score += racket.power * 1.5 + racket.growth * 1.5;

  const injuryRegions = getList("injuryDetail");
  if (joints === "B" || joints === "C") {
    if (injuryRegions.includes("C") && (racket.balance === "High" || racket.form === "Diamond")) score -= 6;
    if (injuryRegions.includes("B") && racket.hardness >= 6) score -= 6;
  }

  const court = getAnswer("court");
  if (court === "A") score += racket.control * 0.4;
  if (court === "B") score += racket.power * 0.3;

  const brandMap = { B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat" };
  const brandPrefs = getList("brand").map(key => brandMap[key]).filter(Boolean);
  if (brandPrefs.includes(racket.brand)) score += 6;

  const playstyle = getAnswer("playstyleIcon");
  if (playstyle === "A") score += racket.control * 0.3;
  if (playstyle === "B") score += racket.power * 0.4;
  if (playstyle === "C") score += racket.defense * 0.4;
  if (playstyle === "D") score += racket.net * 0.4;

  return score;
}

function calculateScore(rawScore) {
  return Math.round(Math.max(0, Math.min(100, rawScore / SCORE_DIVISORS[testMode])));
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

  return `<svg viewBox="0 0 300 300" class="radar-svg" role="img" aria-label="radar">
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

function animateFillsAndScores(container) {
  // Scheduled with setTimeout (not requestAnimationFrame) so the fill still
  // happens even if the tab is backgrounded and rAF never gets a frame.
  setTimeout(() => {
    container.querySelectorAll(".stat-bar-fill[data-target], .stage-fill[data-target]").forEach(el => {
      el.style.width = el.getAttribute("data-target") + "%";
    });
  }, 20);

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
  return btoa(encodeURIComponent(JSON.stringify({ m: testMode, a: answers })));
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
}

function buildHistorySection(profile, topThree) {
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

function startPartnerQuiz() {
  partnerAnswers = {};
  partnerCurrentQuestion = 0;
  renderPartnerQuestion();
}

function renderPartnerQuestion() {
  const def = QUICK_QUESTION_DEFS[partnerCurrentQuestion];
  const text = questionText(def.id);
  const total = QUICK_QUESTION_DEFS.length;
  const backButton = partnerCurrentQuestion > 0
    ? `<button class="secondary" onclick="goToPreviousPartner()">${t("q.back")}</button>`
    : `<span></span>`;

  let html = `<div class="eyebrow">${t("partner.stepLabel")} ${partnerCurrentQuestion + 1}/${total}${def.multi ? t("q.multiTag") : ""}</div><h3>${text.title}</h3>`;
  if (text.hint) html += `<p class="hint">${text.hint}</p>`;

  if (def.range) {
    const currentValue = partnerAnswers[def.id] || 5;
    html += `<div class="range-value" id="prv">${currentValue}</div>`;
    html += `<input class="range" id="partnerRange" type="range" min="1" max="10" value="${currentValue}">`;
    html += `<div class="actions">${backButton}<button class="primary" onclick="submitPartnerRange()">${t("q.next")}</button></div>`;
  } else if (def.multi) {
    const selected = Array.isArray(partnerAnswers[def.id]) ? partnerAnswers[def.id] : [];
    html += `<div class="options">`;
    html += def.opts.map(key => {
      const isSelected = selected.includes(key);
      return `<button class="option option-multi${isSelected ? " selected" : ""}" onclick="togglePartnerAnswer('${key}')"><span class="check" aria-hidden="true"></span>${text.opts[key]}</button>`;
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
  partnerAnswers[QUICK_QUESTION_DEFS[partnerCurrentQuestion].id] = choice;
  goToNextPartner();
}

function togglePartnerAnswer(choice) {
  const def = QUICK_QUESTION_DEFS[partnerCurrentQuestion];
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
  partnerAnswers[QUICK_QUESTION_DEFS[partnerCurrentQuestion].id] = +getElement("partnerRange").value;
  goToNextPartner();
}

function goToNextPartner() {
  if (partnerCurrentQuestion < QUICK_QUESTION_DEFS.length - 1) {
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
  const partnerRanked = rankRackets(partnerAnswers).map(r => ({ ...r, score: calculateScore(r.rawScore) }));
  const partnerTop = partnerRanked[0];

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

function showResults() {
  const ranked = RACKETS
    .map(racket => ({ ...racket, rawScore: calculateRawScore(racket) }))
    .sort((a, b) => b.rawScore - a.rawScore)
    .map(racket => ({ ...racket, score: calculateScore(racket.rawScore) }));

  const profile = getUserProfile();
  const maxBudget = getMaxBudget();
  const inBudget = ranked.filter(r => r.price <= maxBudget);
  const fitMinusOvershoot = r => r.rawScore - (r.price - maxBudget) * 1.5;
  const overBudget = ranked
    .filter(r => r.price > maxBudget)
    .sort((a, b) => fitMinusOvershoot(b) - fitMinusOvershoot(a));
  const topThree = inBudget.concat(overBudget).slice(0, 3);
  const modeLabel = testMode === "pro" ? t("results.proLabel") : t("results.quickLabel");

  lastResults = { profile, topThree, mode: testMode };
  recordHistoryEntry(profile, topThree);

  getElement("quiz").classList.add("hidden");
  getElement("results").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });

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

  html += `<section class="analysis anim-in" style="animation-delay:.1s">`;
  html += `<h2 class="analysis-title">${t("analysis.title")}</h2>`;
  html += `<p class="hint">${t("analysis.desc")}</p>`;
  html += `<div class="radar-wrap">${buildRadarChart(profile, topThree[0])}</div>`;
  html += `<div class="radar-legend"><span><i class="legend-dot legend-user"></i>${t("analysis.legendUser")}</span><span><i class="legend-dot legend-racket"></i>${topThree[0].name}</span></div>`;
  html += `</section>`;

  html += topThree.map((r, n) => createRacketCard(r, n, topThree[0])).join("");
  html += buildPlayerAnalysis(profile);
  html += buildHistorySection(profile, topThree);
  html += buildPartnerSection();
  html += buildShareSection();
  html += `<div class="notice anim-in">${t("notice")(RACKETS.length)}</div>`;
  html += `<button class="secondary restart" onclick="location.reload()">${t("restart")}</button>`;

  getElement("results").innerHTML = html;
  animateFillsAndScores(getElement("results"));
}

function racketImageBlock(racket) {
  if (racket.image) {
    return `<div class="card-image"><img src="${racket.image}" alt="${racket.name}" onerror="this.parentElement.classList.add('broken')">${RACKET_ICON}</div>`;
  }
  return `<div class="card-image card-image-placeholder">${RACKET_ICON}</div>`;
}

function createRacketCard(racket, index, top) {
  const reason = index === 0
    ? generateTopReasonText(racket)
    : generateAlternativeText(racket, top);
  const overBudgetNote = racket.price > getMaxBudget() ? t("card.overBudget") : "";

  let html = `<article class="recommendation anim-in" style="animation-delay:${0.15 + index * 0.08}s">`;
  html += `<div class="rank">${t("card.rank")(index + 1)}</div>`;
  html += `<div class="rec-body">`;
  html += racketImageBlock(racket);
  html += `<div class="rec-main">`;
  html += `<div class="rec-title">`;
  html += `<div>`;
  html += `<h2>${racket.name}</h2>`;
  html += `<div>${racket.brand} · ${t("shape." + racket.form)} · ${formatNumber(racket.weight)} g · ${t("balance." + racket.balance)} · ${t("kernLabel")} ${t("feel." + racket.feel)} · ${t("level." + racket.level)}</div>`;
  html += `</div>`;
  html += `<div class="score" data-target="${racket.score}">0/100</div>`;
  html += `</div>`;
  html += createStatBars(racket);
  html += `<p class="reason">${reason}</p>`;
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
  if (balanceFeel === "A" && (racket.balance === "Low" || racket.balance === "Low-Medium")) {
    reasons.push(t("reason.grippy"));
  }
  if (balanceFeel === "C" && (racket.balance === "High" || racket.balance === "Medium-High")) {
    reasons.push(t("reason.headHeavy"));
  }

  let text = reasons.length
    ? t("reasonTemplate")(joinList(reasons.slice(0, 4)))
    : t("reasonFallback");

  const brandMap = { B: "NOX", C: "Bullpadel", D: "HEAD", E: "Adidas", F: "Babolat" };
  const brandPrefs = getList("brand").map(key => brandMap[key]).filter(Boolean);
  if (brandPrefs.includes(racket.brand)) {
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
  const average = values.reduce((sum, value) => sum + value, 0) / values.length;
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
  const weaknesses = getList("weakness");
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

function tryRestoreSharedResult() {
  if (!location.hash.startsWith("#r=")) return false;
  const decoded = decodeShareState(location.hash.slice(3));
  if (!decoded || !decoded.a) return false;
  answers = decoded.a;
  testMode = decoded.m === "pro" ? "pro" : "quick";
  isSharedView = true;
  document.querySelector(".hero").classList.add("hidden");
  showResults();
  return true;
}

applyStaticTranslations();
getElement("langToggle").textContent = LANG === "de" ? "EN" : "DE";
tryRestoreSharedResult();
window.addEventListener("hashchange", tryRestoreSharedResult);
