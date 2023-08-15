<div align="center">
  <h1>🏨 🚠 Das Hotel</h1>
  <h4>An Elegant Hotel Management App</h4>
</div>

## Description

Das Hotelier is a modern and sophisticated Hotel Management Application built using React for the frontend, Supabase for the backend, React Router DOM v6.4 for routing, React Query for remote state management, Styled Components for CSS, and Context API for local state management.

The application aims to streamline hotel operations, empowering hotel staff to efficiently handle reservations, manage rooms, access guest information, and perform other crucial tasks. With its intuitive and responsive interface, Das Hotelier provides a seamless experience for both administrators and guests.

## Features

-   **User Authentication:** Secure user authentication powered by Supabase, enabling administrators to access and manage the application with proper authorization.

-   **Cabin Management:** Easily manage cabin details, availability, and pricing to optimize the reservation process. Filter & sort based on various properties.

![Hotel -3](https://github.com/Tejaspatade/das-hotel/assets/70337689/24d91559-00a0-4607-8383-7f8ca2587d02)

-   **Reservation System:** Efficiently handle guest reservations, view booking details, and manage check-ins and check-outs.

![Hotel -2](https://github.com/Tejaspatade/das-hotel/assets/70337689/7d50aaca-135a-4b81-99c5-41185de43293)

-   **Guest Profiles:** Maintain a comprehensive database of guest information, including personal details and past stays.

-   **Dashboard & Analytics:** Visualize hotel performance, generate insightful reports, and track key metrics for better decision-making.

![Hotel -1](https://github.com/Tejaspatade/das-hotel/assets/70337689/9af818d4-d197-4241-b79d-ff6a552e99a7)

-   **User Profiles:** Update your user credentials & create new accounts from the app itself.

![Hotel -4](https://github.com/Tejaspatade/das-hotel/assets/70337689/056b3ed5-b10d-4960-bfca-57610850413a)

## Technologies Used

-   React
-   Supabase (PostgreSQL)
-   React Router DOM v6.4 (Routing)
-   React Query (Remote State Management)
-   Styled Components (CSS)
-   Context API (Local State Management)

## Installation and Usage

### Prerequisites

-   Node.js (Version 18.17.0)
-   npm (Version 7.0.0)

### Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/das-hotelier.git
    cd das-hotelier
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up the backend (Supabase):

    - Create an account on [Supabase](https://supabase.io/) if you don't have one.
    - Set up a new project and create a PostgreSQL database.
    - Copy the Supabase API URL and public key.

4. Configure the backend:

    - Create a `.env` file in the root directory.
    - Add the following environment variables to the `.env` file:

    ```env
    REACT_APP_SUPABASE_URL=your_supabase_api_url
    REACT_APP_SUPABASE_KEY=your_supabase_public_key
    ```

5. Run the development server:

    ```bash
    npm start
    ```

6. Open your browser and navigate to `http://localhost:3000` to access Das Hotelier.

## Contributing

We welcome contributions to enhance the features and usability of Das Hotelier. To contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:

    ```bash
    git commit -m "Add your commit message here"
    ```

4. Push to the branch:

    ```bash
    git push origin feature/your-feature-name
    ```

5. Open a pull request on GitHub, and we will review your changes.

## Contact

If you have any questions or suggestions, please feel free to contact us:

-   Email: tjspatade@gmail.com
-   Website: www.das-hotel.vercel.app
-   LinkedIn: linkedin.com/tejpatade

Thank you for using Das Hotelier! We hope it serves you well in efficiently managing your hotel. Happy hoteliering! 🏨
