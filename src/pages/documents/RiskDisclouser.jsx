import React from 'react'
import Fund from '../../components/Fund'

const RiskDisclouser = () => {
  return (
    <>
        <section className="my-10 bg-gray-100 py-32 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">

    {/* Page Title */}
    <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
      Overview
    </h1>

    {/* Intro Paragraph */}
    <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-8">
      The following statements are provided to inform you of the potential risks associated with trading financial markets. You should fully understand these risks and the possibility of losses before opening an account or engaging in trading. This document forms an essential part of your agreement with Genzbroking.
    </p>

    {/* Section */}
    <div className="space-y-8 text-gray-800 text-sm md:text-base leading-relaxed">

      <p>
        This document does not cover every possible risk in trading, as financial markets can be unpredictable. Trading in leveraged products, such as Forex and CFDs, carries a high level of risk and may not be suitable for all investors. You should only trade if you fully understand the risks and are financially able to bear potential losses.
      </p>

      <p>
        No returns are guaranteed. Past performance is not indicative of future results. Investments may result in partial or complete loss of capital. No regulatory authority has certified the reliability or financial soundness of the offered products.
      </p>

      {/* Section Title */}
      <h2 className="text-xl md:text-2xl font-semibold text-black">
        1. No Advice
      </h2>

      <p>
        Genzbroking provides an execution-only service. We do not offer investment, legal, tax, or regulatory advice. Any decision to trade is solely yours. Independent advice is recommended before entering any transaction.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Our Products and Services
      </h2>

      <p>
        We provide execution-only services and CFDs across multiple markets. The characteristics of these products may differ from the actual underlying instruments.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        2. Risk Statements
      </h2>

      <p>
        Trading online involves significant risk. You may lose part or all of your invested funds. Only risk what you can afford to lose. Genzbroking does not evaluate the suitability of a product based on your knowledge or experience.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Investment-Specific Risks
      </h2>

      <p>
        You should not trade margined products unless you fully understand the risks and have sufficient resources to meet margin requirements under adverse market conditions.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        3. Effect of Leverage
      </h2>

      <p>
        Leverage amplifies both gains and losses. Even small market movements can result in substantial profits or losses, potentially exceeding your deposits or margin.
      </p>

      <p>
        Maintaining sufficient account balance is your responsibility. Failure to meet margin calls may result in forced liquidation of positions.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Margin Calls and Close-Outs
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Deposit additional funds promptly</li>
        <li>Close one or more open positions</li>
        <li>Combination of both actions</li>
      </ul>

      <p>
        Genzbroking is not obliged to notify you of margin levels. Monitoring your account is your responsibility.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Limit and Stop Orders
      </h2>

      <p>
        Limit and stop orders can reduce risk but do not guarantee execution at the requested price, particularly during volatile market conditions.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Technical Risks
      </h2>

      <p>
        Online trading systems may fail due to hardware, software, internet, or communication errors, which can result in lost opportunities or financial loss.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Trading Platform Risks
      </h2>

      <p>
        Delays, slippage, or gaps in liquidity may affect the execution price or timing of your orders.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Market Volatility
      </h2>

      <p>
        Financial markets are highly volatile. Rapid price fluctuations may lead to significant losses, potentially exceeding deposited funds.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Automated & Algorithmic Trading
      </h2>

      <p>
        Use of automated or algorithmic trading tools is strictly prohibited by Genzbroking. Any breach may result in suspension, account closure, or reversal of profits.
      </p>

      <p className="font-medium">
        By trading with Genzbroking, you acknowledge that you understand and accept all associated risks and that you are financially capable of bearing them.
      </p>

    </div>
  </div>
</section>


    <Fund/>
    </>
  )
}

export default RiskDisclouser