import { render, screen } from '@testing-library/react';
import GS8AthleteSection from './gs8_athlete_section';

const contestants = {
    pros: [{
        name: 'Pro Athlete',
        nickname: 'The Pro',
        experience: 1,
        finishes: [{ food: 'Gyoza', year: 2025, rank: 'Professional', place: 1 }],
        campaignUrl: 'https://example.com/pro',
        img: 'https://example.com/pro.jpg',
    }],
    amateurs: [{
        name: 'Amateur Athlete',
        experience: 0,
        campaignUrl: 'https://example.com/amateur',
        img: 'https://example.com/amateur.jpg',
    }],
};

test('renders GSVIII athlete details without support links', () => {
    render(<GS8AthleteSection contestants={contestants} />);

    expect(screen.getByText(/Pro Athlete/)).toBeInTheDocument();
    expect(screen.getByText(/The Pro/)).toBeInTheDocument();
    expect(screen.getByText('2025: 1st place Professional')).toBeInTheDocument();
    expect(screen.getByText(/Amateur Athlete/)).toBeInTheDocument();
    expect(screen.getByText('Gullet Stuffer debut')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByText(/Support/)).not.toBeInTheDocument();
});
