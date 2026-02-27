React Album Search & Playlist App


  This is a web application built with React that allows users to search for music albums by their favorite artists. Users can browse search results, view track listings
  for a specific album, and see details for individual songs, including embedded music videos. The application features a dynamic and interactive user interface with a
  robust theming system and custom components styled entirely with styled-components.

  Technologies Used


   * React: Core library for building the user interface, utilizing hooks like useState, useEffect, and useRef for state management and side effects.
   * Redux (Classic): Used for global state management to handle the user's song library (playlist). The implementation follows the classic pattern using createStore,
     action constants, action creators, and a switch-case reducer to manage state transitions for adding and removing songs.
   * React Router: For handling client-side routing and managing navigation state in the URL with useSearchParams.
   * Styled-Components: For all styling, enabling dynamic, themeable, and reusable components. The project features a central theme file (theme/index.js), global styles
     (theme/GlobalStyles.js), and a library of CSS mixins.
   * Axios: For making asynchronous HTTP requests to fetch music data from an external API.

  Key Features & Implementation Highlights


   * Artist-Based Album Search: The main feature allows users to fetch and display a list of albums by searching for an artist's name.
   * Global Playlist Management: Integrated a Redux-powered library system that allows users to:
       * Add Songs: Dispatching ADD_SONG actions to save favorite tracks to the global state, with logic to prevent duplicates.
       * Remove Songs: Dispatching REMOVE_SONG actions to filter out tracks by ID.
       * State Persistence: The library state is maintained centrally in the Redux store, ensuring the playlist is accessible and consistent across all views.
   * Dynamic Breadcrumb Navigation: A custom Breadcrumb component updates based on the user's navigation path (e.g., Search > Album > Track).
   * Complex & Robust Album Hover Effect: A significant amount of effort went into creating a hover animation for the album grid:
       * When an album is hovered, it lifts up slightly (translateY).
       * All subsequent albums on the same visual row shift to the right (translateX) to create a "peek-a-boo" effect.
   * Responsive & Stylized Components:
       * Album Grid: Styled with a "stacked vinyl" effect using box-shadow and object-fit.
       * Song Details: Fetches and displays song-specific info, including an responsive embedded iframe for music videos.
       * Themed UI: The entire application is themed, with colors, fonts, and spacing defined in a central theme object.

  Available Scripts

  In the project directory, you can run:

  npm install
  Installs all the required dependencies for the project.


  npm start
  Runs the app in development mode. Open http://localhost:3000 (http://localhost:3000) to view it in your browser.
