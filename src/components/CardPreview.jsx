import { forwardRef } from "react";
import BackgroundShapes from "./BackgroundShapes";
import "./CardPreview.css";

const CardPreview = forwardRef(function CardPreview({ config, size }, ref) {
  const {
    title,
    subtitle,
    primaryColor,
    secondaryColor,
    accentColor,
    textColor,
    plans,
    badge,
    contact,
    features,
    shopName,
    promoText,
  } = config;
  const [width, height] = size === "facebook" ? [1200, 630] : [1080, 1080];

  return (
    <div
      ref={ref}
      className="card-preview"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        background: `linear-gradient(135deg, ${secondaryColor} 0%, ${secondaryColor}ee 50%, ${secondaryColor}cc 100%)`,
        color: textColor,
      }}
    >
      <BackgroundShapes primaryColor={primaryColor} accentColor={accentColor} />

      <div className="card-content">
        {/* Top row: badge + shop name */}
        <div className="card-top-row">
          {badge && (
            <span
              className="card-discount-badge"
              style={{ background: primaryColor, color: secondaryColor }}
            >
              {badge}
            </span>
          )}
          {shopName && (
            <span className="card-shop" style={{ color: `${textColor}99` }}>
              {shopName}
            </span>
          )}
        </div>

        {/* Promo headline — fills the top space */}
        {promoText && (
          <p className="card-promo" style={{ color: `${textColor}ee` }}>
            {promoText}
          </p>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="card-subtitle" style={{ color: `${textColor}dd` }}>
            {subtitle}
          </p>
        )}

        {/* Big bold title */}
        <h1 className="card-title" style={{ color: textColor }}>
          {title}
        </h1>

        {/* Features tagline */}
        {features && (
          <p className="card-features" style={{ color: `${textColor}bb` }}>
            {features}
          </p>
        )}

        {/* Plan list */}
        <div className="card-plans">
          {plans.map((plan, index) => (
            <div key={index} className="plan-item">
              <span className="plan-label">{plan.label}</span>
              <span className="plan-price" style={{ color: textColor }}>
                {plan.price}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom row: CTA + contact */}
        <div className="card-bottom-row">
          <div
            className="card-cta"
            style={{ background: primaryColor, color: '#ffffff' }}
          >
            Order Now
          </div>
          {contact && (
            <span className="card-contact" style={{ color: `${textColor}cc` }}>
              {contact}
            </span>
          )}
        </div>
      </div>
    </div>
  );
});

export default CardPreview;
