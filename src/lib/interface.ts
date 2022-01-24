export interface Dot {
  name: string
  active: boolean
  anchor: string
  imgPath?: string
}

export interface Wine {
  points: string
  title: string
  description: string
  taster_name: string | null
  taster_name_twitter_handle: string | null
  price: number | null
  designation: string | null
  variety: string
  region_1: string | null
  region_2: string | null
  province: string
  country: string
  winery: string
}