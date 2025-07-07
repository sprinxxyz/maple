'use client'

import Image from 'next/image'

interface VotingIncentiveCardProps {
  token1Logo: string
  token2Logo: string
  pair: string
  ammType: string
  incentive: string
  apr: string
}

export default function incentiveCard({
  token1Logo,
  token2Logo,
  pair,
  ammType,
  incentive,
  apr,
}: VotingIncentiveCardProps) {
  return (
    <div className="group/card relative h-full overflow-hidden rounded-2xl bg-zinc-900 p-4 shadow-md hover:shadow-orange-500/30 transition-shadow">
      {/* Glowing gradient animation */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-600/10 to-amber-500/10 blur-xl group-hover/card:opacity-40 transition-opacity rounded-2xl pointer-events-none z-0" />

      {/* Content */}
      <div className="relative z-10 space-y-3">
        {/* Logos */}
        <div className="flex space-x-2 items-center">
          <Image src={token1Logo} alt="token1" width={28} height={28} className="rounded-full" />
          <Image src={token2Logo} alt="token2" width={28} height={28} className="rounded-full" />
        </div>

        {/* Pair & Type */}
        <div>
          <h3 className="text-lg font-semibold text-white">{pair}</h3>
          <p className="text-sm text-zinc-400">{ammType}</p>
        </div>

        {/* Incentive and APR */}
        <div className="flex justify-between items-center text-sm text-white">
          <div>
            <p className="text-zinc-400">Incentive</p>
            <p className="font-semibold">${incentive}</p>
          </div>
          <div>
            <p className="text-zinc-400">Voting APR</p>
            <p className="font-semibold">{apr}%</p>
          </div>
        </div>
      </div>
    </div>
  )
}