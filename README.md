## Frame by Frame

Video Demo: https://www.youtube.com/watch?v=M1-EIX5DhBo

During television post production, each episode goes through a notes process, during which a number of producers give their feedback.

This feedback often comes in numerous emails and can sometimes be contradictory. Things get confused and lost in the mix.

I created Frame by Frame as a solution to that problem.

Frame by Frame uses a Ruby on Rails Backend and a React front end to allow users to upload their videos, add timecode-associated notes to the videos, and discuss those notes in comment chains.

Frame by Frame uses Rails Active Storage and an AWS S3 bucket to handle and store video uploads.

Users can add other users to the projects that they have created so that those users can collaborate.

But the real heart of the application is in its notes feature. Each note is associated with a timecode in the video, and each note can be viewed immediately by pressing the “go to note” button, which brings the user to the frame on which the note was made. Users can then converse about the note via the comments chain, so that the team can be in full communication about each change to be made to the project.

Simple, intuitive, collaborative - Frame by Frame is a useful tool for video editing professionals

The repo for the back end can be found here: https://github.com/jaredianmills/frame-by-frame-backend-api
