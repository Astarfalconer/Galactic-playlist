# Galactic Playlist

## Overview
**Galactic Playlist** is a React-based web application that allows users to search for music using the Spotify Web API, curate a custom playlist, and save that playlist directly to their Spotify account.

The project demonstrates frontend application structure, state management, and real-world API integration, with a focus on clean user interaction and asynchronous data flow.

---

## Core Application Flow
The application is structured around a simple, two-panel interface:

- **Left panel:** Search results returned from the Spotify API  
- **Right panel:** The user’s active playlist  

Users search for tracks, add or remove them from their playlist, rename the playlist, and save it directly to their Spotify account.

---

## Features
- Search for tracks using the Spotify Web API
- View search results and playlist side-by-side
- Add tracks from search results to a playlist
- Remove tracks from the playlist
- Update playlist name
- Save playlists directly to the user’s Spotify account

---

## Tech Stack
- **React**
- **JavaScript (ES6+)**
- **Spotify Web API**
- Fetch-based API requests
- Client-side state management using React hooks

---

## Application Architecture (High-Level)
The app consists of a main application component responsible for rendering and coordinating a set of smaller, focused components, including:

- Search bar
- Search results list
- Playlist view
- Individual track components

State is managed at the application level and passed down via props. Callback functions are used to handle user actions such as searching, adding/removing tracks, updating playlist names, and saving playlists.

---

## Spotify API Integration
The application integrates with the **Spotify Web API** to authenticate users and manage playlists.

Key aspects include:
- OAuth-based authentication using a client ID and redirect URI
- Access token retrieval and renewal when tokens expire
- Track search using Spotify’s search endpoint
- Playlist creation and track saving using Spotify’s playlist endpoints

Tracks are managed using their unique Spotify URIs, ensuring playlists are saved accurately to the user’s account.

---

## What This Project Demonstrates
- Building a complete React application from scratch
- Managing application state across multiple components
- Working with third-party APIs and OAuth authentication
- Handling asynchronous requests and API responses
- Translating user actions into persistent changes on an external service

---

## Notes
This project was built as a focused demonstration of frontend fundamentals and API integration rather than advanced UI design or styling. The emphasis is on clarity, correctness, and functional completeness.
