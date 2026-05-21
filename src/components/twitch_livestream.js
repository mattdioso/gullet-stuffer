import React from 'react';

function getTwitchParent() {
  if (typeof window === 'undefined') {
    return 'localhost';
  }

  return window.location.hostname || 'localhost';
}

function TwitchLivestream({
  channel = 'gulletstuffer',
  title = 'Gullet Stuffer Twitch livestream',
  autoplay = false,
  muted = true,
  showChat = false,
}) {
  const parent = getTwitchParent();
  const playerParams = new URLSearchParams({
    channel,
    parent,
    autoplay: String(autoplay),
    muted: String(muted),
  });
  const chatParams = new URLSearchParams({ parent });

  return (
    <div className={showChat ? 'w-full lg:grid lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-4' : 'w-full'}>
      <div className="relative w-full aspect-video overflow-hidden rounded-md bg-black">
        <iframe
          title={title}
          src={`https://player.twitch.tv/?${playerParams.toString()}`}
          className="absolute inset-0 h-full w-full"
          allowFullScreen
        />
      </div>

      {showChat && (
        <div className="mt-4 h-[420px] overflow-hidden rounded-md bg-black lg:mt-0 lg:h-auto">
          <iframe
            title={`${channel} Twitch chat`}
            src={`https://www.twitch.tv/embed/${channel}/chat?${chatParams.toString()}`}
            className="h-full w-full"
          />
        </div>
      )}
    </div>
  );
}

export default TwitchLivestream;
