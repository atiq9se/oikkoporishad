export interface GalleryPhoto {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  category: string;
}

export interface GalleryVideo {
  id: string;
  title: string;
  category: string;
  duration: string;
  poster: string;
  youtubeId: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "photo-001",
    src: "https://images.pexels.com/photos/32048352/pexels-photo-32048352.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/32048352/pexels-photo-32048352.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Textile factory workers operating sewing machines",
    category: "Garments",
  },
  {
    id: "photo-002",
    src: "https://images.pexels.com/photos/31321032/pexels-photo-31321032.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31321032/pexels-photo-31321032.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Female factory worker stitching textiles",
    category: "Garments",
  },
  {
    id: "photo-003",
    src: "https://images.pexels.com/photos/31047138/pexels-photo-31047138.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31047138/pexels-photo-31047138.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Women operating sewing machines in textile factory",
    category: "Garments",
  },
  {
    id: "photo-004",
    src: "https://images.pexels.com/photos/31030909/pexels-photo-31030909.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31030909/pexels-photo-31030909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Female workers sewing textiles in factory",
    category: "Garments",
  },
  {
    id: "photo-005",
    src: "https://images.pexels.com/photos/31019572/pexels-photo-31019572.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31019572/pexels-photo-31019572.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Blue collar workers in textile factory",
    category: "Garments",
  },
  {
    id: "photo-006",
    src: "https://images.pexels.com/photos/31047162/pexels-photo-31047162.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31047162/pexels-photo-31047162.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Female textile worker at sewing machine",
    category: "Garments",
  },
  {
    id: "photo-007",
    src: "https://images.pexels.com/photos/31090812/pexels-photo-31090812.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31090812/pexels-photo-31090812.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Textile factory workers operating machinery",
    category: "Garments",
  },
  {
    id: "photo-008",
    src: "https://images.pexels.com/photos/31047167/pexels-photo-31047167.jpeg?auto=compress&cs=tinysrgb&w=600",
    fullSrc: "https://images.pexels.com/photos/31047167/pexels-photo-31047167.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Factory worker operating sewing machine with fabric stacks",
    category: "Garments",
  },
];

export const galleryVideos: GalleryVideo[] = [
  {
    id: "video-001",
    title: "ACS Textile Bangladesh — Largest Home Textile Factory",
    category: "Garments",
    duration: "7:49",
    poster: "https://images.pexels.com/photos/32048352/pexels-photo-32048352.jpeg?auto=compress&cs=tinysrgb&w=800",
    youtubeId: "iYOnHXY9JlM",
  },
  {
    id: "video-002",
    title: "ABA Group Corporate Documentary — Bangladesh Garments",
    category: "Garments",
    duration: "8:22",
    poster: "https://images.pexels.com/photos/31321032/pexels-photo-31321032.jpeg?auto=compress&cs=tinysrgb&w=800",
    youtubeId: "1pj5pi3Or-M",
  },
  {
    id: "video-003",
    title: "The Garments Industry in Bangladesh — Primark",
    category: "Garments",
    duration: "4:52",
    poster: "https://images.pexels.com/photos/31047138/pexels-photo-31047138.jpeg?auto=compress&cs=tinysrgb&w=800",
    youtubeId: "CexZLoXKF2s",
  },
  {
    id: "video-004",
    title: "Inside a Textile Garments Factory — Cutting to Packing",
    category: "Garments",
    duration: "5:15",
    poster: "https://images.pexels.com/photos/31030909/pexels-photo-31030909.jpeg?auto=compress&cs=tinysrgb&w=800",
    youtubeId: "ky-KYGGvRXI",
  },
  {
    id: "video-005",
    title: "Tour of a Knit Composite Factory in Bangladesh",
    category: "Garments",
    duration: "6:30",
    poster: "https://images.pexels.com/photos/31019572/pexels-photo-31019572.jpeg?auto=compress&cs=tinysrgb&w=800",
    youtubeId: "wv92RmApuOU",
  },
];
