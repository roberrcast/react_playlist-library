React Album Search & Playlist App

  This is a web application built with React that allows users to search for music albums by their favorite artists. Users can browse search results, view track listings
  for a specific album, and see details for individual songs, including embedded music videos. The application features a dynamic and interactive user interface with
  several custom-styled components and animations.

  Technologies Used

   * React: Core library for building the user interface, utilizing hooks like useState, useEffect, and useRef for state management and side effects.
   * React Router: For handling client-side routing and managing navigation state in the URL with useSearchParams.
   * Sass (SCSS): For advanced, organized, and modular styling.
   * Axios: For making asynchronous HTTP requests to fetch music data from an external API.

  Key Features & Implementation Highlights

   * Artist-Based Album Search: The main feature allows users to fetch and display a list of albums by searching for an artist's name.

   * Dynamic Breadcrumb Navigation: A custom Breadcrumb component was built and refactored to be fully dynamic. It updates based on the user's navigation path (e.g., Search
     > Album > Track) and uses conditional styling to distinguish between active (current page) and ancestor links (bolded).

   * Complex & Robust Album Hover Effect: A significant amount of effort went into creating a hover animation for the album grid:
       * When an album is hovered, it lifts up slightly (translateY).
       * All subsequent albums on the same visual row shift to the right (translateX) to create a "peek-a-boo" effect.
       * This was implemented using a robust useState and useEffect approach to reliably manage hover state and avoid common browser rendering bugs related to CSS
         transitions, which were discovered and fixed during development.
       * Conflicting CSS transform properties were diagnosed and resolved by applying animations to separate nested elements.

   * Responsive & Stylized Components:
       * Album Grid: Styled with a "stacked vinyl" effect using object-fit to ensure all album art is consistently sized and displayed without distortion.
       * Search Bar: Custom-styled search input, including styling for the placeholder text using the ::placeholder pseudo-element.
       * Song Details: Fetches and displays song-specific info, including an embedded iframe for music videos, which is dynamically centered.

   * Bug Fixes & Code Quality:
       * Fixed bugs related to incorrect SCSS @use syntax.
       * Corrected multiple typos in React component class names and logic.
       * Refactored components to use more scalable and idiomatic React patterns (e.g., building UI from arrays of data).
       * Added logic to prevent search submissions with empty queries.

  Available Scripts

  In the project directory, you can run:

  npm install

  Installs all the required dependencies for the project.

  npm start

  Runs the app in development mode.\
  Open http://localhost:3000 (http://localhost:3000) to view it in your browser.
