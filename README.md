<div id="readme-top" align="center">
  <h3 align="center">Hotel Management App</h3>
  <p align="center">
    <a href="https://the-wild-oasis-by-swapnil.netlify.app/dashboard">Demo</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#core-features">Core Features</a></li>
    <li><a href="#component-structure">Component Structure</a></li>
    <li><a href="#data-handling">Data Handling</a></li>
    <li><a href="#conclusion">Conclusion</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project
This is an internal-use hotel management dashboard that allows admins and staff to manage cabins, bookings, and hotel settings in a user-friendly interface. It features dashboard analytics, sorting/filtering/pagination of bookings, dark/light mode toggle, and admin-level controls.


<!-- Tech Stack -->
## Tech Stack
  * <b>Frontend</b>: React.js, React Router
  * <b>Styling</b>: styled-components
  * <b>Charts</b>: Recharts
  * <b>State Management</b>: React Query, Context API
  * <b>Forms</b>: react-hook-form
  * <b>Notifications</b>: react-hot-toast
  * <b>Icons</b>: react-icons
  * <b>Backend & Database</b>:  Supabase (PostgreSQL)
  * <b>Deployment</b>: Netlify
  * <b>Version Control</b>: Git and GitHub


<!-- Core Features -->
## Core Features
  * <b>Dashboard View</b>: Visual overview of hotel operations with interactive charts.
  * <b>Bookings Management</b>: Filter, sort, and paginate bookings from the Supabase database.
  * <b>Cabins Management</b>: Admins can add, edit, and delete cabin entries.
  * <b>Hotel Settings</b>: Update hotel-wide settings via a settings panel
  * <b>User Management</b>: Add and manage admin users securely.
  * <b>Dark/Light Mode</b>: Toggle between themes using CSS class switching.
  

<!-- Component Structure -->

## Component Structure
The app follows reusable component design. Components like `Button`, `Modal`, and `Form` are highly configurable and reused across different parts of the app using props. This reduces duplication and improves maintainability.


<!-- Data Handling -->

## Data Handling
* Booking data is fetched, filtered, and paginated directly using Supabase queries via the API.
* Form data is managed using react-hook-form for better performance in large forms.
* React-Query ensures consistent data syncing with the backend and caching for a better user experience.


<!-- Conclusion -->
## Conclusion
This hotel management app demonstrates strong component reuse, clean state handling with react-query, and advanced filtering/pagination on data. Combined with a clean UI and dark mode support, it’s optimized for usability and internal efficiency. Future features like real-time updates and user roles can extend the product further.


<!-- CONTACT -->
## Contact
Swapnil Ganvir  - [@LinkedIn](https://www.linkedin.com/in/swapnilganvir) - swapnilganvir54@gmail.com

Project Link: https://github.com/swapnilganvir/the-wild-oasis

Demo Link: [Demo](https://the-wild-oasis-by-swapnil.netlify.app/dashboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
