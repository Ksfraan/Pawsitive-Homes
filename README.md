# Pawsitive Homes

## [See the App!](https://main--pawsitivehomes.netlify.app/animal/10)

![App Logo](image.png)

## Description

**NOTE -** Pawsitive Homes is an online, searchable database of animals who need homes.We are a refuge of hope and joy for our furry friends. Our mission is to transform lives, one paw at a time.
While browsing through our application, you're not just searching for a new family best friend.You're embarking on a journey filled with barks, purrs, and unforgettable moments.

## User Stories

-   **homepage** -On our Homepage, you will find the list of animals available for adoption, a button if you want to add an animal and specific filters to help you search for your new best friend. The animal cards are clickable, and will take you to learn more details about the animal, where you can update an animal or show how interested you are in the animal, through the adoption form.

-   **Login/sign up** - You will also find a path where you can log in to your Pawsitive Homes account or, if you don't have an account yet, you will find the opportunity to create your account.

-   **footer** - At the footer of our page you have the opportunity to sign up to receive Pawsitive Homes news using the subscription form and you can take the opportunity to join us on social media, using the links available.

-   **404** - If you make a mistake while accessing our application, you will be notified by our 404Page, which will offer you a safe route back to our Homepage.

## Backlog Functionalities

## Feature Backlog

This section lists the planned features for future versions of the project.

### Planned Features

1. **Two-Factor Authentication:**

    - Implement two-factor authentication to enhance user account security.

2. **Social Media Integration:**
    - Add the option to do a real log in using popular social media accounts such as Google and Facebook.

### Future Enhancements

1. **User Interface Refinement:**

    - Refactor the user interface to provide a more intuitive and user-friendly experience.

2. **Notification System:**
    - Implement a real notification system to keep users informed about relevant activities.

### Planned Bug Fixes

1. **Compatibility Issue Resolution:**
    - Address compatibility issues in specific browsers.

### Other Tasks

1. **Documentation Update:**

    - Keep the project documentation updated with the latest changes and additions.

2. **Performance Testing:**
    - Conduct performance testing to optimize the application's performance.

## Technologies used

HTML, CSS, Javascript, ES6, Vite, React, json-server, C.R.U.D.

## Routes

-   `/`: Home page, displays the dashboard.
-   `/dogs`: Displays a list of dogs.
-   `/cats`: Displays a list of cats.
-   `/other-animals`: Displays a list of other animals.
-   `/animal/:id`: Displays detailed information about a specific animal, Allows updating an animal and show interest in adopting it.
-   `/add-animal`: Allows adding a new animal to the system.
-   `/about`: Displays information about the project and team members.
-   `/login`: Allows users to log in.
-   `/signup`: Allows users to sign up.
-   `*` (Wildcard): Displays a 404 error page for unknown routes.

## JSON Server Database

### Animals Endpoint

Represents animal data.

-   **Endpoint:** `/animals`
-   **Fields:**
    -   `id`: Number (unique identifier)
    -   `name`: String (name of the animal)
    -   `species`: String (species of the animal)
    -   `breed`: String (breed of the animal)
    -   `age`: Number (age of the animal)
    -   `gender`: String (gender of the animal)
    -   `description`: String (description of the animal)
    -   `image`: String (URL of the animal's image)
    -   `available_for_adoption`: Boolean (availability status for adoption)
    -   `city`: String (city where the animal is located)
    -   `health`: String (health information of the animal)
    -   `Good in a home with`: String (compatibility information)

## Links

## Collaborators

[Carina França](https://github.com/Ksfraan)

[Miguel Martins](https://github.com/chuinga)

### Project Links

-   **Back-end Deploy:** [Pawsitive Homes Back-end](https://pawsitive-homes-back-end.adaptable.app/animals)
-   **Front-end Deploy:** [Pawsitive Homes Front-end](https://main--pawsitivehomes.netlify.app/)

#### Repositories

-   **Front-end Repository:** [GitHub - Pawsitive Homes Front-end](https://github.com/Ksfraan/Pawsitive-Homes)
-   **Back-end Repository:** [GitHub - Pawsitive Homes Back-end](https://github.com/Ksfraan/Pawsitive-Homes-Back-end)

### Trello

[Link to your trello board](https://trello.com/b/Ppuc4GJe/pawsitive-homes)

### Slides

[Slides Link](https://docs.google.com/presentation/d/1-s4PXuME88oHg_FW6ha9PmRtcpGE1sGEb5hWTUZnYmI/edit#slide=id.g2ae2750990c_0_97)
