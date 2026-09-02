/**
 * AutoIntel Pro — Radar Chart Renderer
 * Draws a pentagonal Porter's Five Forces radar chart on an SVG element.
 */

const RadarChart = {
  /**
   * @param {SVGElement} svg  - The <svg> element to draw into
   * @param {Object} forces  - { newEntrants, buyerPower, supplierPower, substitutes, rivalry } (1-4)
   */
  render(svg, forces) {
    svg.innerHTML = '';
    
    // Spacious viewBox (400x300) guarantees no label clipping with ample margins on all 4 sides
    svg.setAttribute('viewBox', '0 0 400 300');
    
    const cx = 200, cy = 150, maxR = 95;
    const levels = 4;

    // Pentagon angle offsets (top = New Entrants, clockwise)
    const angles = [
      -Math.PI / 2,                          // top — New Entrants
      -Math.PI / 2 + (2 * Math.PI * 1 / 5), // top-right — Buyer Power
      -Math.PI / 2 + (2 * Math.PI * 2 / 5), // bottom-right — Supplier Power
      -Math.PI / 2 + (2 * Math.PI * 3 / 5), // bottom-left — Substitutes
      -Math.PI / 2 + (2 * Math.PI * 4 / 5), // top-left — Rivalry
    ];

    const forceValues = [
      forces.newEntrants || 2,
      forces.buyerPower || 2,
      forces.supplierPower || 2,
      forces.substitutes || 2,
      forces.rivalry || 2,
    ];

    // ── Grid Rings ──────────────────────────────────────────────
    for (let l = 1; l <= levels; l++) {
      const r = (maxR / levels) * l;
      const pts = angles.map(a => ({
        x: cx + r * Math.cos(a),
        y: cy + r * Math.sin(a),
      }));
      const polygon = this._createSVGEl('polygon', {
        points: pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '),
        fill: l === levels ? '#f8fafc' : 'none',
        stroke: '#cbd5e1',
        'stroke-width': l === levels ? '1.5' : '1',
        'stroke-dasharray': l < levels ? '3 3' : 'none',
        opacity: '0.85',
      });
      svg.appendChild(polygon);
    }

    // ── Axis Lines ──────────────────────────────────────────────
    angles.forEach(a => {
      const line = this._createSVGEl('line', {
        x1: cx, y1: cy,
        x2: cx + maxR * Math.cos(a),
        y2: cy + maxR * Math.sin(a),
        stroke: '#cbd5e1',
        'stroke-width': '1.2',
        opacity: '0.8',
      });
      svg.appendChild(line);
    });

    // ── Data Polygon ────────────────────────────────────────────
    const dataPts = forceValues.map((v, i) => {
      const r = (maxR / levels) * v;
      return {
        x: cx + r * Math.cos(angles[i]),
        y: cy + r * Math.sin(angles[i]),
      };
    });

    const dataPolygon = this._createSVGEl('polygon', {
      points: dataPts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' '),
      fill: 'rgba(2, 132, 199, 0.18)',
      stroke: '#0284c7',
      'stroke-width': '2.5',
      'stroke-linejoin': 'round',
    });
    svg.appendChild(dataPolygon);

    // ── Data Points ─────────────────────────────────────────────
    dataPts.forEach(p => {
      const dot = this._createSVGEl('circle', {
        cx: p.x.toFixed(1), cy: p.y.toFixed(1), r: '5.5',
        fill: '#0284c7',
        stroke: '#ffffff',
        'stroke-width': '2',
      });
      svg.appendChild(dot);
    });

    // ── Axis Labels (High contrast, bold, perfectly padded) ──────
    const labelConfigs = [
      { text: 'New Entrants',   anchor: 'middle', dx: 0,   dy: -18 },
      { text: 'Buyer Power',    anchor: 'start',  dx: 14,  dy: 2 },
      { text: 'Supplier Power', anchor: 'start',  dx: 12,  dy: 16 },
      { text: 'Substitutes',    anchor: 'end',    dx: -12, dy: 16 },
      { text: 'Rivalry',        anchor: 'end',    dx: -14, dy: 2 },
    ];

    labelConfigs.forEach((cfg, i) => {
      const edgeX = cx + maxR * Math.cos(angles[i]);
      const edgeY = cy + maxR * Math.sin(angles[i]);
      
      const text = this._createSVGEl('text', {
        x: (edgeX + cfg.dx).toFixed(1),
        y: (edgeY + cfg.dy).toFixed(1),
        'text-anchor': cfg.anchor,
        'dominant-baseline': 'central',
        fill: '#0f172a',
        'font-size': '13',
        'font-family': 'Inter, system-ui, -apple-system, sans-serif',
        'font-weight': '700',
      });
      text.textContent = cfg.text;
      svg.appendChild(text);
    });
  },

  _createSVGEl(tag, attrs) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  }
};

window.RadarChart = RadarChart;
