React Album Search & Playlist App


  This is a web application built with React that allows users to search for music albums by their favorite artists. Users can browse search results, view track listings
  for a specific album, and see details for individual songs, including embedded music videos. The application features a dynamic and interactive user interface with a
  robust theming system and custom components styled entirely with styled-components.

  Technologies Used


   * React: Core library for building the user interface, utilizing hooks like useState, useEffect, and useRef for state management and side effects.
   * React Router: For handling client-side routing and managing navigation state in the URL with useSearchParams.
   * Styled-Components: For all styling, enabling dynamic, themeable, and reusable components. The project features a central theme file (theme/index.js), global styles
     (theme/GlobalStyles.js), and a library of CSS mixins for consistent and maintainable styling across the application.
   * Axios: For making asynchronous HTTP requests to fetch music data from an external API.

  Key Features & Implementation Highlights

   * Artist-Based Album Search: The main feature allows users to fetch and display a list of albums by searching for an artist's name.


   * Dynamic Breadcrumb Navigation: A custom Breadcrumb component updates based on the user's navigation path (e.g., Search > Album > Track). It uses styled-components to
     conditionally apply styles, distinguishing between active (current page) and ancestor links.


   * Complex & Robust Album Hover Effect: A significant amount of effort went into creating a hover animation for the album grid:
       * When an album is hovered, it lifts up slightly (translateY).
       * All subsequent albums on the same visual row shift to the right (translateX) to create a "peek-a-boo" effect.
       * This was implemented using a robust useState and useEffect approach to reliably manage hover state and apply dynamic classes, with the styling logic cleanly
         handled by styled-components.


   * Responsive & Stylized Components:
       * Album Grid: Styled with a "stacked vinyl" effect using box-shadow and object-fit to ensure all album art is consistently sized and displayed without distortion.
       * Search Bar: A fully custom-styled search input, with focus effects and placeholder text styling managed through styled-components.
       * Song Details: Fetches and displays song-specific info, including an embedded iframe for music videos, which is dynamically centered and responsive.
       * Themed UI: The entire application is themed, with colors, fonts, and spacing defined in a central theme object, making the UI consistent and easy to modify.


   * Code Quality:
       * Refactored all components to use styled-components for styling, removing all .scss files.
       * Components are designed to be modular and reusable (e.g., Song, List, Header).
       * Includes logic to prevent search submissions with empty queries for a better user experience.

  Available Scripts

  In the project directory, you can run:

  npm install

  Installs all the required dependencies for the project.

  npm start


  Runs the app in development mode.
  Open http://localhost:3000 (http://localhost:3000) to view it in your browser

  npm start

  Runs the app in development mode.\
  Open http://localhost:3000 to view it in your browser.
