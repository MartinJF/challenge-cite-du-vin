// import wines from "static/wineData.json";
import { Wine } from "$lib/interface";
import { EndpointOutput } from "@sveltejs/kit";

export async function get(): Promise<EndpointOutput> {
  // const ptsList: Array<number> = wines.map((w) => w.points)

  const url = import.meta.env.VITE_API_URL
  const jsonWines = await fetch(`${url}/wineData.json`)
  const wines: Array<Wine> = await jsonWines.json()
  const lowCepage = wines.filter((w: Wine) => Number(w.points) < 85)
  const rand = Math.floor(Math.random() * lowCepage.length)
  return {
    status: 200,
    body: JSON.stringify(lowCepage[rand])
  }
}