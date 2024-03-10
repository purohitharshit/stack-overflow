import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodeData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodeData?.id;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];

//     let decodeData = jwt.verify(token, process.env.JWT_SECRET); // if this is true then only next() or AskQuestion() is called
//     req.userId = decodeData?.id;

//     next();
//     //next is the AskQuestion of routes>Questions.js --- router.post("/Ask", auth, AskQuestion);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default auth;
