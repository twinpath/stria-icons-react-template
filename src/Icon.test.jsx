import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { GearSolid, GearDuotone } from '@stria-icons/react';

describe('Stria React Icon Components', () => {
  it('should render the SVG element successfully', () => {
    const { container } = render(<GearSolid />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
    expect(svg.getAttribute('viewBox')).toBeDefined();
  });

  it('should apply the size prop correctly to width and height', () => {
    const { container: containerNum } = render(<GearSolid size={48} />);
    const svgNum = containerNum.querySelector('svg');
    expect(svgNum.getAttribute('width')).toBe('48');
    expect(svgNum.getAttribute('height')).toBe('48');

    const { container: containerStr } = render(<GearSolid size="2em" />);
    const svgStr = containerStr.querySelector('svg');
    expect(svgStr.getAttribute('width')).toBe('2em');
    expect(svgStr.getAttribute('height')).toBe('2em');
  });

  it('should apply the color prop to the fill attribute', () => {
    const { container } = render(<GearSolid color="#ff0000" />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('fill')).toBe('#ff0000');
  });

  it('should append custom classNames alongside default ones', () => {
    const { container } = render(<GearSolid className="my-custom-icon-class" />);
    const svg = container.querySelector('svg');
    expect(svg.classList.contains('my-custom-icon-class')).toBe(true);
  });

  it('should forward refs to the underlying SVG DOM element', () => {
    const ref = React.createRef();
    render(<GearSolid ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current instanceof SVGSVGElement).toBe(true);
  });

  it('should propagate click event handlers correctly', () => {
    const handleClick = vi.fn();
    const { container } = render(<GearSolid onClick={handleClick} />);
    const svg = container.querySelector('svg');
    
    fireEvent.click(svg);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should support duotone multi-paths and opacity rules', () => {
    const { container } = render(<GearDuotone />);
    const svg = container.querySelector('svg');
    const paths = svg.querySelectorAll('path');
    
    // Duotone must have at least 2 paths (primary and secondary)
    expect(paths.length).toBeGreaterThanOrEqual(2);
    
    // First path is secondary, should have stria-secondary class and opacity 0.4
    const secondaryPath = paths[0];
    expect(secondaryPath.classList.contains('stria-secondary')).toBe(true);
    expect(secondaryPath.style.opacity).toBe('0.4');
  });
});
