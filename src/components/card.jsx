import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div class="relative m-16">
        <button class="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border bg-[#7e22ce] text-white font-bold">
        WARNING!
    </button>
        <div class="purple_border p-8 border border-black bg-white">
            The
            <span class="font-mono text-purple-700 font-bold">message</span>
            variable is a Laravel reserved word
            within this email context,
            so you should avoid using that as a field handle if you intend on using the email feature.
        </div>
    </div>
  )
}

export default Card