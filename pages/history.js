import { useAtom } from "jotai"
import { searchHistoryAtom } from "@/store"

export default function SearchHistory() {
  // Getting a reference to the favouriteList from favouritesAtom
  const [searchHistory, setSearchHistory] = useAtom(searchHistoryAtom)

  let parsedHistory = []
  searchHistory.forEach((h) => {
    let params = new URLSearchParams(h)
    let entries = params.entries()
    parsedHistory.push(Object.fromEntries(entries))
  })
}
