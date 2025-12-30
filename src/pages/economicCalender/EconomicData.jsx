import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Clear the container to prevent duplicate widgets on re-renders
    if (container.current) {
      container.current.innerHTML = '';
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    
    // Configuration to match the professional calendar layout
    script.innerHTML = JSON.stringify({
      "colorTheme": "light",
      "isTransparent": false,
      "width": "100%",        
      "height": "600",
      "locale": "en",
      "importanceFilter": "-1,0,1",
      "countryFilter": "us,eu,gb,jp,ca,au", 
      "currencyFilter": "USD,EUR,GBP,JPY"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "1000px", margin: "40px auto", fontFamily: 'Trebuchet MS, Roboto, sans-serif' }}>
      
      {/* --- New Content Section --- */}
      <div style={{ marginBottom: '32px' }}>
        <h2 className='px-5'
          style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          color: '#131722', 
          marginBottom: '16px' 
        }}>
          Track Key Economic Drivers
        </h2>
        <p className='px-5'
          style={{ 
          fontSize: '16px', 
          lineHeight: '1.6', 
          color: '#4a4e5a', 
          textAlign: 'justify' 
        }}>
          Market-moving events can appear out of nowhere, and trading without foresight is risky. 
  The GenZBroking global economic calendar keeps you informed about upcoming economic releases, 
  including forecasts, previous results, and their potential impact. Whether you're seeking 
  opportunities during volatility or aiming to avoid surprises, this calendar equips you to 
  trade strategically. For traders who plan their moves in advance, it’s an essential tool 
  to stay ahead and maintain momentum.
        </p>
      </div>
      {/* --------------------------- */}

      <div className="tradingview-widget-container" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright" style={{ marginTop: '10px' }}>
          <a href="https://www.tradingview.com/markets/economic-calendar/" rel="noopener nofollow" target="_blank">
            <span className="blue-text" style={{ color: '#2962FF' }}>Economic Calendar</span>
          </a> by TradingView
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget); 