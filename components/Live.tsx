import { useMyPresence, useOthers } from "@/liveblocks.config"
import LiveCursors from "./cursor/LiveCursors"
import Cursor from "./cursor/Cursor"
import { COLORS } from "@/constants"
import { useCallback } from "react"

const Live = () => {
    const others = useOthers();
    const [{cursor}, updateMyPresence] = useMyPresence() as any;

  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault()
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({cursor: {x, y}});
  }, [])

  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    updateMyPresence({cursor: {x, y}});
  }, [])

  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault()
    updateMyPresence({cursor: null, message: null});
  }, [])

  return ( 
    <div 
      className="w-full h-[100vh] flex justify-center items-center text-center" 
      onPointerMove={handlePointerMove} 
      onPointerLeave={handlePointerLeave} 
      onPointerDown={handlePointerDown}
    >
            <h1 className="text-5xl text-white">Figma</h1>
      <LiveCursors others={others} />
    </div>
  )
}

export default Live