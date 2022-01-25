export interface Page {
  id: number
  name: string
  active: boolean
  anchor: string
  imgPath?: string
}

export interface News {
  id: number
  name: string
  active: boolean
  content: string
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

export interface SlideChangeDetail {
  direction: number
  index: number
}

export interface SlideButtonDetail {
  index: number
}
