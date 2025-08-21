import React from "react";
import type { IRoute } from "./types";

const Search = React.lazy(() => import("@/pages/SearchPage"));
const Home = React.lazy(() => import("@//pages/HomePage"));
const TVShows = React.lazy(() => import("@/pages/TVShowsPage"));
const Movies = React.lazy(() => import("@/pages/MoviesPage"));
const WatchLater = React.lazy(() => import("@/pages/WatchLaterPage"));
const NotFound = React.lazy(() => import("@/pages/NotFoundPage"));

//! Here can be added also type(private, public), roles base pages,disabled(coming soon), badges for news etc.
//! here can be added also bottom menu items if they should have own pages, with tag position
export const appRouts: Array<IRoute> = [
  {
    //!Most probable it is search input but i should not do any action with it
    path: "/search",
    label: "Search",
    element: <Search />,
    icon: "assets/icons/search.png",
    forSidebar: true,
  },
  {
    path: "/",
    label: "Home",
    element: <Home />,
    icon: "assets/icons/home.png",
    forSidebar: true,
  },
  {
    path: "/tv-shows",
    label: "TV Shows",
    element: <TVShows />,
    icon: "assets/icons/tv-shows.png",
    forSidebar: true,
  },
  {
    path: "/movies",
    label: "Movies",
    element: <Movies />,
    icon: "assets/icons/movies.png",
    forSidebar: true,
  },
  {
    path: "/watch-later",
    label: "Watch Later",
    element: <WatchLater />,
    icon: "assets/icons/watch-later.png",
    forSidebar: true,
  },
  {
    path: "/not-found",
    label: "Not Found Page",
    element: <NotFound />,
  },
];
