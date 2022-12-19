import React from "react";
import TokenCard from "./TokenCard";

const FeatureOne = () => {
  const tokens = ["0x", "gosh-realm"];
  return (
    <div className="feature-container">
      <div className="swap-token-container">
        <div className="tokens-container">
          {tokens.map((token, index) => {
            return <TokenCard id={token} />;
          })}
        </div>
        <div className="btn-container">
          <button className="primary">swap</button>
        </div>
      </div>
      <div className="feature-description">
        <div className="feature-description-title">
          <h1>
            <span className="highlighted">Swap</span> Any Token, Any Chain
          </h1>
        </div>
        <p className="feature-description-paragraph">
          We&#39;ve created TokSwap to help you make cross-chain swaps in just
          few clicks. You'll be able to easily convert your coins from one
          blockchain to another, or trade them for other cryptocurrencies and
          token.
        </p>
        <div className="btn-container">
          <button className="secondary">
            <span>Start swapping</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
