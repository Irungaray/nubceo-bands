## Tech stack:
- React.js
- Material UI
- Axios

## Workflow:
In App.js we have a Switch/Router that handles Login and protected routes.

Landing on the page, we encounter the `<LoginForm />`. Since there is no backend from which we can receive a token, the form has pre-defined and hardcoded values for user and password. At the moment we try to login, it performs a simulated server request that compares the form values with the hardcoded user and password.

If the login is successfull, we get redirected to `<Dashboard />`. Here, a switch controlled by the breadcrumbs below the header decides which component to render.

`<BandsDashboard />` renders a series of cards with each band we get from the API. It displays band name, year, country and members. If a card is clicked on, it retrieves a modal with the band's albums.

`<GenresDashboard />` renders a list of genres. If we click on a particular genre, it retrieves a modal the bands that are into it.

`<AlbumDashboard />` renders a list of the album's endpoint. Not so interesting. It would be nice to have a search input, but there are so few albums that is not worth it.

## Potential improvements:
- Loaders on API requests.
- Better session management. Currently the session is stored on a state, so when the page is refreshed, the session is lost.
- A lot of UI improvement. It would have been nice to have images for each band.
- The codebase is entirely, although I decided to keep the UI in spanish. Turned out a bit weird.
## Run the project:
> git clone https://github.com/Irungaray/nubceo-bands

> cd nubceo-bands && npm start

## Conclusions:
Great real-world technical challenge. It was fun to build it. The API shows some great bands, but lacks certain information for the app to be a great UX. Probably I will keep iterating over it on my free time.

The requirements weren't so clear and, obviously, there's a lot to improve, but overall i'm happy with how it came out.

> “Without proper requirements or design, programming is the art of adding bugs to an empty text file.”
> -Louis Srygley