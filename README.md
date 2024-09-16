# Discussion Board

Discussion Board is a simple Reddit-like platform where users can create discussion topics, post content, comment on posts, and search for posts by title or content. Built using **Next.js**, **Tailwind CSS**, **Prisma Client** with **SQLite**, and **NextUI**, this project demonstrates a full-stack implementation of a discussion board with a user-friendly interface.

## Features

- **Discussion Topics**: Users can explore different topics of discussion.
- **Posts**: Users can add posts under any topic.
- **Comments**: Users can comment on posts to foster discussion.
- **Search**: The search functionality allows users to search for posts by title or content.
- **Responsive UI**: Fully responsive and styled using Tailwind CSS and NextUI.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) and [NextUI](https://nextui.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [SQLite](https://www.sqlite.org/index.html) with [Prisma Client](https://www.prisma.io/)
- **Backend**: Prisma ORM for data modeling and query execution

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (v14.x or above)
- npm or yarn package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shriYalsangi/next-prisma-discussion-board.git
   ```

2. Navigate to the project directory:

  ```bash
  cd next-prisma-discussion-board
  ```

3. Install the dependencies:

  ```bash
  npm install
  ```

4. Set up the Prisma database:

  ```bash
  npx prisma migrate dev --name init
  ```

5. Run the development server:

  ```bash
  npm run dev
  ```
The app will be available at http://localhost:3000.

### Database
This project uses SQLite as the database. Prisma is used as the ORM to interact with the database. You can find the schema in the `prisma/schema.prisma` file.

### Search Functionality

The search bar allows users to search for posts by their title or content. The search results will display any post that contains the search term.

## Usage

- Explore different topics and view the posts under each topic.
- Create a new post by navigating to the desired topic.
- Comment on posts to engage in discussions.
- Use the search bar to quickly find posts related to specific keywords.

## Built With

- **[Next.js](https://nextjs.org/)** - React Framework for server-side rendering and static site generation
- **[NextUI](https://nextui.org/)** - UI components for React
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Prisma Client](https://www.prisma.io/)** - ORM for SQLite
- **[SQLite](https://www.sqlite.org/)** - Lightweight relational database
