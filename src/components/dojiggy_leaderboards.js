import React, { useEffect, useMemo, useState } from 'react';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const formatCurrency = (amount) => currencyFormatter.format(Number(amount || 0));

const LeaderboardSkeleton = () => (
  <div className="space-y-3">
    {[0, 1, 2].map((item) => (
      <div className="h-16 rounded-md bg-neutral-900 animate-pulse" key={item}></div>
    ))}
  </div>
);

const EmptyLeaderboard = ({ configured }) => (
  <div className="min-h-[184px] rounded-md border border-dashed border-neutral-700 bg-neutral-950 px-5 py-8 text-center">
    <p className="font-heavitas text-sm text-neutral-300">
      {configured ? 'No leaderboard data yet.' : 'DoJiggy leaderboard feed is not configured.'}
    </p>
  </div>
);

const LeaderboardList = ({ entries, kind }) => {
  if (!entries.length) {
    return null;
  }

  return (
    <ol className="space-y-3">
      {entries.map((entry, index) => (
        <li
          className="grid grid-cols-[44px_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-3"
          key={entry.id || `${kind}-${entry.name}-${index}`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gs_purple text-lg text-black">
            {index + 1}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xl leading-tight text-white">{entry.name}</p>
            {entry.donationCount > 0 && (
              <p className="font-heavitas text-xs text-neutral-400">
                {entry.donationCount} {entry.donationCount === 1 ? 'donation' : 'donations'}
              </p>
            )}
            {entry.message && kind === 'donors' && (
              <p className="truncate font-heavitas text-xs text-neutral-400">{entry.message}</p>
            )}
          </div>
          <p className="whitespace-nowrap text-2xl leading-none text-gs_red">
            {formatCurrency(entry.amount)}
          </p>
        </li>
      ))}
    </ol>
  );
};

const LeaderboardPanel = ({ title, entries, kind, loading, configured }) => (
  <div className="min-w-0">
    <div className="mb-4 flex items-end justify-between gap-4 border-b border-neutral-800 pb-3">
      <h3 className="text-3xl leading-none text-gs_purple">{title}</h3>
      <p className="font-heavitas text-xs uppercase text-neutral-400">
        Live
      </p>
    </div>
    {loading ? (
      <LeaderboardSkeleton />
    ) : entries.length ? (
      <LeaderboardList entries={entries} kind={kind} />
    ) : (
      <EmptyLeaderboard configured={configured} />
    )}
  </div>
);

export const DojiggyLeaderboards = ({ endpoint = '/api/dojiggy-leaderboards' }) => {
  const [leaderboards, setLeaderboards] = useState({
    fundraisers: [],
    donors: [],
    updatedAt: null,
    configured: true
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    const loadLeaderboards = async () => {
      try {
        const response = await fetch(endpoint, { cache: 'no-store' });
        const json = await response.json();

        if (!response.ok || json.error) {
          throw new Error(json.error || 'Leaderboard request failed.');
        }

        if (active) {
          setLeaderboards({
            fundraisers: json.fundraisers || [],
            donors: json.donors || [],
            updatedAt: json.updatedAt,
            configured: json.configured !== false
          });
          setError('');
        }
      } catch (requestError) {
        if (active) {
          setError(requestError.message);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadLeaderboards();

    return () => {
      active = false;
    };
  }, [endpoint]);

  const updatedLabel = useMemo(() => {
    if (!leaderboards.updatedAt) {
      return '';
    }

    const updatedAt = new Date(leaderboards.updatedAt);

    if (Number.isNaN(updatedAt.getTime())) {
      return '';
    }

    return `Updated ${updatedAt.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })}`;
  }, [leaderboards.updatedAt]);

  return (
    <section className="relative w-full my-16 py-12 bg-black border-y border-neutral-800">
      <div className="w-11/12 2xl:w-4/5 mx-auto">
        <div className="grid grid-cols-12 gap-4 items-center mb-8">
          <div className="col-span-12 md:col-span-5">
            <h2 className="text-gs_red text-4xl md:text-6xl leading-none">Fundraising Leaders</h2>
          </div>
          <div className="hidden md:block md:col-span-7 h-[1px] w-full bg-white"></div>
        </div>
        <div className="mb-8 max-w-3xl">
          {(updatedLabel || error) && (
            <p className="mt-2 font-heavitas text-xs text-neutral-400">
              {error ? 'Live leaderboard data is temporarily unavailable.' : updatedLabel}
            </p>
          )}
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <LeaderboardPanel
            title="Top Fundraisers"
            entries={leaderboards.fundraisers}
            kind="fundraisers"
            loading={loading}
            configured={leaderboards.configured}
          />
          <LeaderboardPanel
            title="Top Donors"
            entries={leaderboards.donors}
            kind="donors"
            loading={loading}
            configured={leaderboards.configured}
          />
        </div>
      </div>
    </section>
  );
};

export default DojiggyLeaderboards;
