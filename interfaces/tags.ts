export interface TagResponse {
  data: CryptoTag[]
  status: number
  statusText: string
}

export interface CryptoTag {
  id: number
  title: string
  subtitle: string
  language: CryptoByTag
  url: null
  published_at: Date
  created_at: Date
  updated_at: Date
  statusbar: Statusbar
  order: number
  slug: string
  meta_title: null | string
  meta_description: null | string
  icon: Icon
  image: Icon
  currencies: CryptoByTag[]
}

export interface CryptoByTag {
  id: number
  name: string
  created_at: Date
  updated_at: Date
}

export interface Icon {
  id: number
  name: string
  hash: string
  sha256: null
  ext: EXT
  mime: MIME
  size: number
  url: string
  created_at: Date
  updated_at: Date
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats | null
  previewURL: null
}

export enum EXT {
  PNG = '.png',
  SVG = '.svg',
}

export interface Formats {
  small: Small
  thumbnail: Small
}

export interface Small {
  ext: EXT
  url: string
  hash: string
  mime: MIME
  name: string
  path: null
  size: number
  width: number
  height: number
}

export enum MIME {
  ImagePNG = 'image/png',
  ImageSVGXML = 'image/svg+xml',
}

export enum Statusbar {
  Dark = 'dark',
  Light = 'light',
}
