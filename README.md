# Organizing-the-Day
Making a day planner in JavaScript

## Link
The link for this file can be found here https://kebiernat5.github.io/Organizing-the-Day/

## Objective
Sometimes, you need to be able to organize your day and see it all in one spot. Pen and paper works, but often times isn't big enough to add everything in and be detailed about what you're doing from moment to moment throughout the day. I created a application to combat disorganization and provide clarity for the people who hate scheduling chaos.

## Construction
I started with some code to display the current day and time. 

I hard coded in time blocks to display each hour from 9 AM till 5 PM but within those blocks, I classed each block in military time to make the moment function a little less confusing to work with later on.

After creating the time blocks, I activated the save button and toggled whatever was saved to save to local storage. I did this with each time block.

Then, to make it clear when each hour of the day had passed, I created a timeCheck function to apply color classes to denote each time block to set the color of that particular time block based on what time of the day it is. So if the time block is in the future, the color of that block is green. If the time block is currently happening, the color of that block is red. And if the time block has already happened, the color changes to grey as soon as that hour is over. This is noted using the currentHour variable defined through moment in the timeCheck function. 