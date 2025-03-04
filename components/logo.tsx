import { Music, Play } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center justify-center h-10 w-10 rounded bg-gradient-to-br from-teal-400 to-teal-600 text-white">
      <div className="relative">
        <Music className="h-5 w-5" />
        <Play className="h-3 w-3 absolute -bottom-1 -right-1 text-white" />
      </div>
    </div>
  )
}

