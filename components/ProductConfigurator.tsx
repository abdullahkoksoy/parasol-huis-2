'use client';
import { useState } from 'react';

type ColorOption = '#E67E22' | '#2ECC71' | '#3498DB';
type SizeOption = 'small' | 'medium' | 'large';

export default function ProductConfigurator() {
  const [color, setColor] = useState<ColorOption>('#E67E22');
  const [size, setSize] = useState<SizeOption>('medium');

  const priceMap: Record<SizeOption, number> = {
    small: 299,
    medium: 399,
    large: 499
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center my-20">
      <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
        <div 
          className="w-32 h-32 transition-colors"
          style={{ backgroundColor: color }}
        />
      </div>
      
      <div>
        <h3 className="text-2xl font-light mb-6">CUSTOMIZE YOUR PARASOL</h3>
        
        <div className="mb-8">
          <h4 className="text-sm mb-3">COLOR</h4>
          <div className="flex gap-3">
            {['#E67E22', '#2ECC71', '#3498DB'].map((c) => (
              <button 
                key={c}
                onClick={() => setColor(c as ColorOption)}
                className={`w-8 h-8 rounded-full ${color === c ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                style={{ backgroundColor: c }}
                aria-label={`Select ${c} color`}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-sm mb-3">SIZE</h4>
          <div className="flex gap-4">
            {(['small', 'medium', 'large'] as SizeOption[]).map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`px-4 py-2 border ${size === s ? 'bg-black text-white border-black' : 'border-gray-300'}`}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <button className="bg-black text-white px-8 py-3 w-full hover:bg-opacity-90 transition">
          ADD TO CART — €{priceMap[size].toLocaleString('nl-NL')}
        </button>
      </div>
    </div>
  );
}