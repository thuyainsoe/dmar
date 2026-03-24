import { presets } from '../presets';
import './CustomizeForm.css';

export default function CustomizeForm({ config, setConfig, size, setSize }) {
  const updateField = (field, value) => {
    setConfig((prev) => ({ ...prev, [field]: value }));
  };

  const updatePlan = (index, field, value) => {
    setConfig((prev) => {
      const plans = [...prev.plans];
      plans[index] = { ...plans[index], [field]: value };
      return { ...prev, plans };
    });
  };

  const addPlan = () => {
    setConfig((prev) => ({
      ...prev,
      plans: [...prev.plans, { label: '', price: '' }],
    }));
  };

  const removePlan = (index) => {
    setConfig((prev) => ({
      ...prev,
      plans: prev.plans.filter((_, i) => i !== index),
    }));
  };

  const loadPreset = (key) => {
    setConfig(presets[key]);
  };

  return (
    <div className="customize-form">
      <h2>Customize</h2>

      {/* Presets */}
      <div className="form-section">
        <label>Brand Presets</label>
        <div className="preset-buttons">
          {Object.entries(presets).map(([key, preset]) => (
            <button
              key={key}
              className="preset-btn"
              style={{ background: preset.primaryColor, color: '#fff' }}
              onClick={() => loadPreset(key)}
            >
              {preset.title}
            </button>
          ))}
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="form-section">
        <label>Title</label>
        <input
          type="text"
          value={config.title}
          onChange={(e) => updateField('title', e.target.value)}
        />
      </div>
      <div className="form-section">
        <label>Subtitle</label>
        <input
          type="text"
          value={config.subtitle}
          onChange={(e) => updateField('subtitle', e.target.value)}
        />
      </div>

      {/* Promo Text */}
      <div className="form-section">
        <label>Promo Headline</label>
        <input
          type="text"
          value={config.promoText || ''}
          placeholder="e.g. Unlimited Music, Anytime!"
          onChange={(e) => updateField('promoText', e.target.value)}
        />
      </div>

      {/* Badge & Shop Name */}
      <div className="form-row">
        <div className="form-section form-half">
          <label>Badge</label>
          <input
            type="text"
            value={config.badge || ''}
            placeholder="e.g. Best Deal"
            onChange={(e) => updateField('badge', e.target.value)}
          />
        </div>
        <div className="form-section form-half">
          <label>Shop Name</label>
          <input
            type="text"
            value={config.shopName || ''}
            placeholder="e.g. @MyShop"
            onChange={(e) => updateField('shopName', e.target.value)}
          />
        </div>
      </div>

      {/* Features */}
      <div className="form-section">
        <label>Features</label>
        <input
          type="text"
          value={config.features || ''}
          placeholder="e.g. HD Audio • Offline • No Ads"
          onChange={(e) => updateField('features', e.target.value)}
        />
      </div>

      {/* Contact */}
      <div className="form-section">
        <label>Contact</label>
        <input
          type="text"
          value={config.contact || ''}
          placeholder="e.g. Viber - 09xxxxxxxxx"
          onChange={(e) => updateField('contact', e.target.value)}
        />
      </div>

      {/* Colors */}
      <div className="form-section">
        <label>Colors</label>
        <div className="color-row">
          <div className="color-field">
            <span>Primary</span>
            <input
              type="color"
              value={config.primaryColor}
              onChange={(e) => updateField('primaryColor', e.target.value)}
            />
          </div>
          <div className="color-field">
            <span>Background</span>
            <input
              type="color"
              value={config.secondaryColor}
              onChange={(e) => updateField('secondaryColor', e.target.value)}
            />
          </div>
          <div className="color-field">
            <span>Accent</span>
            <input
              type="color"
              value={config.accentColor}
              onChange={(e) => updateField('accentColor', e.target.value)}
            />
          </div>
          <div className="color-field">
            <span>Text</span>
            <input
              type="color"
              value={config.textColor}
              onChange={(e) => updateField('textColor', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="form-section">
        <label>Size</label>
        <div className="size-buttons">
          <button
            className={`size-btn ${size === 'instagram' ? 'active' : ''}`}
            onClick={() => setSize('instagram')}
          >
            Instagram (1080x1080)
          </button>
          <button
            className={`size-btn ${size === 'facebook' ? 'active' : ''}`}
            onClick={() => setSize('facebook')}
          >
            Facebook (1200x630)
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="form-section">
        <label>Plans</label>
        {config.plans.map((plan, index) => (
          <div key={index} className="plan-row">
            <input
              type="text"
              placeholder="Label (e.g. 1 Month)"
              value={plan.label}
              onChange={(e) => updatePlan(index, 'label', e.target.value)}
            />
            <input
              type="text"
              placeholder="Price (e.g. 5,000 Ks)"
              value={plan.price}
              onChange={(e) => updatePlan(index, 'price', e.target.value)}
            />
            <button className="remove-btn" onClick={() => removePlan(index)}>
              ×
            </button>
          </div>
        ))}
        <button className="add-btn" onClick={addPlan}>
          + Add Plan
        </button>
      </div>
    </div>
  );
}
