import React, { useEffect, useRef } from 'react';
import { Link } from '@inertiajs/react';

import Menu from './Menu';

function Sidebar({
  sidebarCollapsed,
  setsidebarCollapsed,
  playlistModal,
  setPlaylistModal,
  appName,
  trigger,
  setState,
  allPlaylist,
}) {
  const sidebar = useRef(null);

  let screenWidth = screen.width; // Screen width
  const fullScreenLogoRender =
    screenWidth >= 1024 ? !sidebarCollapsed : sidebarCollapsed;

  // Close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarCollapsed ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      if (screenWidth >= 1024) return;
      setsidebarCollapsed(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // Close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarCollapsed || keyCode !== 27) return;
      setsidebarCollapsed(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const renderLogo = () => (
    <Link href="#" target="_blank" className="block">
      <h1 className="text-gradientDown">M</h1>
    </Link>
  );

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-blackPrimary bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarCollapsed ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`text-body bg-black flex flex-col absolute z-40 h-screen w-64 lg:w-20 _2xl:!w-64 left-0 top-0 lg:static lg:left-auto lg:top-auto translate-x-0 lg:translate-x-0 no-scrollbar shrink-0 p-4 transition-all duration-200 ease-in-out ${
          sidebarCollapsed
            ? 'translate-x-0 overflox-y-hidden'
            : 'sidebar-expanded !-translate-x-64 lg:w-64 overflow-y-scroll lg:overflow-y-auto '
        }`}
      >
        {/* Sidebar header */}
        <div className="flex align-center pr-3 sm:px-2 h-16">
          {/* Close button (mobile only) */}
          <button
            ref={trigger}
            className="lg:hidden mr-2 text-slate-200"
            onClick={() => setsidebarCollapsed(!sidebarCollapsed)}
            aria-controls="sidebar"
            aria-expanded={sidebarCollapsed}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {fullScreenLogoRender ? (
            <h1 className="text-gradientDown mx-auto tracking-widest">
              {appName}
            </h1>
          ) : (
            renderLogo()
          )}
        </div>

        {/* Sidebar links */}
        <div
          onMouseEnter={() => {
            sidebarCollapsed &&
              screenWidth >= 1024 &&
              setsidebarCollapsed(!sidebarCollapsed);
          }}
          onMouseLeave={() => {
            screenWidth >= 1024 && setsidebarCollapsed(!sidebarCollapsed);
          }}
          className="flex flex-col align-center justify-between h-full pt-8"
        >
          <Menu
            setState={setState}
            playlistModal={playlistModal}
            setPlaylistModal={setPlaylistModal}
            sidebarCollapsed={sidebarCollapsed}
            setsidebarCollapsed={setsidebarCollapsed}
            allPlaylist={allPlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
