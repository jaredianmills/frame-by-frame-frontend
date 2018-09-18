let initialState = {
  user: {
    id: 1,
    first_name: 'jared',
    last_name: 'mills',
    email: 'jaredianmills@gmail.com',
    projects: [
      {
        id: 1,
        title: 'Kyp Catches a Ball',
        video_url: "https://flatironmod5project.s3.amazonaws.com/IMG_4482.MOV",
        notes: [
          {
            id: 1,
            content: "good boy",
            timecode: 2.104,
            completed: false,
            comments: [
              {
                id: 1,
                content: "i agree"
              }
            ]
          }
        ]
      }
    ],
  }
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default userReducer
