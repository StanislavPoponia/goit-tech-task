Welcome to my repository, where I completed a custom test task from the GoIT company. In which I demonstrated my work skills and the skills I acquired during my studies. This is just the tip of the iceberg and I am ready to dive even deeper into the world of IT. After all, I understand that this is only a small % of what can be learned in this profession. Below you can see the technical task I performed

Goal: Create tweet cards and add interactivity at the click of a button.
The layout is fixed in rh, semantic and valid.
The work is done on native JS using assemblers or on React.
Interactivity works according to the terms of reference.

Technical task
According to the layout, you need to implement user cards.
When you click on the Follow button, the text changes to Following. The color of the button also changes. And yours is added to the number of followers. That is, the initial number is 100,500 followers. When you click on the button, it will be 100,501.
When the page is updated, the final result of the user's actions should be recorded. That is, if you click on the button and refresh the page, the button remains in the Following state with the appropriate color, and the number of followers does NOT decrease to the initial value.
Created my own personal backend for development using mockapi.io UI service. Created the users resource. Use the resource constructor and describe the user object as described below.

I created a user in Mockapi with the following fields: id, user, tweets, followers, avatar
Mark up the pages. One pagination page displays 3 tweets, the rest are loaded when you click Load More.

Additional task

1. Created routing using React Router. If the user entered by a non-existent route, he must be redirected to the home page. '/' – Home component, home page. Styling and design at your discretion '/tweets' - component tweets, page with display of tweets The tweets page should have a Back button that leads to the main page.
2. Added filtering. Dropdown with 3 options: show all, follow, followings show all - show all tweets. follow - show tweets with follow status. followings - show tweets with following status
