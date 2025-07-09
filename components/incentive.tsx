import IncentiveCard from '@/components/ui/incentiveCard'
import spx from '@/public/coins/spx.png'
import wstt from '@/public/coins/wstt.png'
import stt from '@/public/coins/stt.png'
import usdc from '@/public/coins/usdc.png'
import usdt from '@/public/coins/usdt.png'
import ankr from '@/public/coins/ankr.png'

export default function incentivePage() {
  return (
    <main className="space-y-16">
      {/* Hero */}
      <section>
        {/* Component */}
      </section>

      {/* Voting Incentive Cards Section */}
      <section className="max-w-4xl mx-auto px-4">
        <h2 className="animate-[gradient_6s_linear_infinite] m-auto bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.amber.200),theme(colors.gray.50),theme(colors.orange.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl text-center">Top Vote Incentives</h2>
        <br></br>
        <div className="grid sm:grid-cols-2 gap-6">
          <IncentiveCard
            token1Logo={spx.src}
            token2Logo={wstt.src}
            pair="SPX/WSTT"
            ammType="Constant Product vAMM"
            incentive="0.18"
            apr="25.33"
          />
          <IncentiveCard
            token1Logo={usdc.src}
            token2Logo={wstt.src}
            pair="USDC/WSTT"
            ammType="Constant Product vAMM"
            incentive="0.10"
            apr="30.14"
          />
          <IncentiveCard
            token1Logo={ankr.src}
            token2Logo={usdc.src}
            pair="ANKR/USDC"
            ammType="Constant Product vAMM"
            incentive="0.05"
            apr="18.66"
          />
          <IncentiveCard
            token1Logo={wstt.src}
            token2Logo={usdt.src}
            pair="WSTT/USDT"
            ammType="Constant Product vAMM"
            incentive="0.09"
            apr="29.22"
          />
        </div>
      </section>
    </main>
  )
}
