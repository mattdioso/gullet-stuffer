import { fireEvent, render } from '@testing-library/react';
import Carousel from './carousel';

describe('Carousel', () => {
    const images = [
        'https://example.com/one.jpg',
        'https://example.com/two.jpg',
        'https://example.com/three.jpg'
    ];

    test('renders one slide and navigation dot per supplied image', () => {
        const { container } = render(<Carousel images={images} />);

        const slides = container.querySelectorAll('.aspect-video');
        const navigationDots = container.querySelectorAll('button');

        expect(slides).toHaveLength(images.length);
        expect(navigationDots).toHaveLength(images.length);
        images.forEach((image, index) => {
            expect(slides[index]).toHaveStyle(`background-image: url(${image})`);
        });
    });

    test('renders safely when images are omitted or empty', () => {
        const { container, rerender } = render(<Carousel />);

        expect(container.querySelectorAll('.aspect-video')).toHaveLength(0);
        expect(container.querySelectorAll('button')).toHaveLength(0);

        rerender(<Carousel images={[]} />);

        expect(container.querySelectorAll('.aspect-video')).toHaveLength(0);
        expect(container.querySelectorAll('button')).toHaveLength(0);
    });

    test('resets the selected index when the images array becomes shorter', () => {
        const { container, rerender } = render(<Carousel images={images} />);
        const navigationDots = container.querySelectorAll('button');

        fireEvent.click(navigationDots[2]);
        expect(navigationDots[2]).toHaveClass('bg-neutral-50');

        rerender(<Carousel images={[images[0]]} />);

        const remainingDot = container.querySelector('button');
        expect(remainingDot).toHaveClass('bg-neutral-50');
        expect(container.querySelectorAll('.aspect-video')).toHaveLength(1);
    });
});
