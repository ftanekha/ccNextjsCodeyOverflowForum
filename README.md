This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Intro to Next.js
## CodeyOverflow Forum
In this project, you’ll practice your knowledge of the App Router in Next.js. You will be building the CodeyOverflow Forum application, 
which users will use to view topics, questions, and user information. Currently, many paths aren’t working properly and the application itself does not start. 
To fix this, you will need to:

# enable the App Router
# define the /topics route
# define a dynamic nested segment in /topics
# optimize links
# use shared layouts
# handle errors
Before you start coding, take a look at the files currently present in the workspace. At the root level, you’ll notice a /components folder containing reusable React components, a /data folder containing the application data, and a /lib folder containing some utility functions. In the /app folder you’ll see:

# the root page.tsx file
# the route groups (account), (discussion), (info)
# a /about path defined
# a /questions path defined
# a /questions/[id] dynamic path defined.
# a /users path defined
# a /users/[userId] dynamic path defined
# Once you begin, you can use npm run dev in the workspace terminal to start the Next.js application.