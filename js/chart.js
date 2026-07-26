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
    const cx = 100, cy = 100, maxR = 76;
    const levels = 4;

    // Pentagon angle offsets (top = New Entrants, clockwise)
    const angles = [
      -Math.PI / 2,                          // top    — New Entrants
      -Math.PI / 2 + (2 * Math.PI * 1 / 5), // top-right — Buyer Power
      -Math.PI / 2 + (2 * Math.PI * 2 / 5), // bottom-right — Supplier Power
      -Math.PI / 2 + (2 * Math.PI * 3 / 5), // bottom-left — Substitutes
      -Math.PI / 2 + (2 * Math.PI * 4 / 5), // top-left — Rivalry
    ];

    const forceValues = [
      forces.newEntrants,
      forces.buyerPower,
      forces.supplierPower,
      forces.substitutes,
      forces.rivalry,
    ];

    // ── Grid Rings ──────────────────────────────────────────────
    for (let l = 1; l <= levels; l++) {
      const r = (maxR / levels) * l;
      const pts = angles.map(a => ({
        x: cx + r * Math.cos(a),
        y: cy + r * Math.sin(a),
      }));
      const polygon = this._createSVGEl('polygon', {
        points: pts.map(p => `${p.x},${p.y}`).join(' '),
        fill: 'none',
        stroke: '#c3c6d6',
        'stroke-width': '1',
        opacity: '0.6',
      });
      svg.appendChild(polygon);
    }

    // ── Axis Lines ──────────────────────────────────────────────
    angles.forEach(a => {
      const line = this._createSVGEl('line', {
        x1: cx, y1: cy,
        x2: cx + maxR * Math.cos(a),
        y2: cy + maxR * Math.sin(a),
        stroke: '#c3c6d6',
        'stroke-width': '1',
        opacity: '0.5',
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
      points: dataPts.map(p => `${p.x},${p.y}`).join(' '),
      fill: 'rgba(0, 71, 187, 0.12)',
      stroke: '#0047bb',
      'stroke-width': '2',
      'stroke-linejoin': 'round',
    });
    svg.appendChild(dataPolygon);

    // ── Data Points ─────────────────────────────────────────────
    dataPts.forEach(p => {
      const dot = this._createSVGEl('circle', {
        cx: p.x, cy: p.y, r: '4',
        fill: '#0047bb',
        stroke: '#ffffff',
        'stroke-width': '1.5',
      });
      svg.appendChild(dot);
    });

    // ── Axis Labels ─────────────────────────────────────────────
    const labels = ['New Entrants', 'Buyer Power', 'Supplier Power', 'Substitutes', 'Rivalry'];
    const labelR = maxR + 14;

    labels.forEach((label, i) => {
      const lx = cx + labelR * Math.cos(angles[i]);
      const ly = cy + labelR * Math.sin(angles[i]);
      const text = this._createSVGEl('text', {
        x: lx, y: ly,
        'text-anchor': 'middle',
        'dominant-baseline': 'middle',
        fill: '#434653',
        'font-size': '8',
        'font-family': 'JetBrains Mono, monospace',
        'font-weight': '500',
      });
      text.textContent = label;
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
