JoyCamper Application 

This project is a web application for a company providing camper rental services in Ukraine. The application consists of three main pages and implements various features to enhance user experience. 

For Customers 

The JoyCamper Application allows users to browse, filter, and favorite different camper listings. The application includes the following pages: 

WelcomePage: Provides a general description of the services offered by the company. 

CatalogPage: Displays a catalog of campers with various configurations. Users can filter the listings by location, equipment, and type. 

FavoritePage: Shows a list of camper listings that the user has added to their favorites. Users can filter the listings by location, equipment, and type. 

When viewing the Catalog or Favorites pages, each camper card includes a "Show more" button that provides additional information about the current camper, such as: 

Name 

Rating 

Location 

Description 

Features (AC, TV, shower, kitchen, etc.) 

Users can also read reviews from other customers. 

Making a Reservation 

On the Catalog and Favorites pages, users can fill in a form with their name, email, desired rental date, and comments. This form allows users to send their order to the JoyCamper company, making it easy to reserve the perfect camper for their needs. 

For Developers 

Project Overview 

The JoyCamper Application is built using React and provides a seamless user experience through its component-based architecture. The application consists of three main pages and implements advanced features such as filtering, favoriting, and dynamic information display. 

Routing 

The application uses React Router for managing routes. The implemented routes include: 

/ - Home page with a general description of services. 

/catalog - Catalog page displaying a list of campers. 

/favorites - Favorites page showing user's favorite listings. 

Users are redirected to the home page if they navigate to a non-existent route. 

Filtering Options 

The application includes advanced filtering options: 

Text Input Filter: Filters listings by location based on user input. 

Checkbox Filters: Filters listings by available equipment. 

Radio Button Filters: Filters listings by camper type. 

Technical Features 

Advertisement Card: Each camper listing is displayed using a custom-designed advertisement card. 

Pagination: The catalog page initially renders 4 listings. More listings can be loaded by clicking the "Load more" button. 

Favorite Functionality: Users can add listings to their favorites by clicking a heart-shaped button on the advertisement card. The button color changes to indicate the favorite status. 

State Persistence: The favorite status of listings is preserved even after the page is refreshed. 

Modal Window: Clicking the "Show more" button on an advertisement card opens a modal window with detailed information about the camper. The modal window can be closed by clicking a close button, the backdrop, or pressing the Esc key. 

Form Validation: The modal window includes a booking form with fields for name, email, booking date, and comment. The form validates input and ensures mandatory fields are filled before submission. 

Pricing Display: Rental prices are displayed with a comma separator (e.g., 8000,00). 

 