import React from 'react';

function ToggleSounds({ allowSound, setAllowSound }) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound(allow => !allow)}
    >
      {allowSound ? '🔈' : '🔇'}
    </button>
  );
}

export default React.memo(ToggleSounds);
