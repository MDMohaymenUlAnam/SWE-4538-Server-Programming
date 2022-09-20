const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));
  
languages = fs.readFileSync("data/language", { encoding: "utf-8" });
languages = JSON.parse(String(languages));

  edus = [];
  

  for (let key in educations) {
    edus.push(educations[key]);
  }



lang = [];


for (let key in languages) {
  lang.push(languages[key]);
}

res.render("cv", { name:"Mohaymen UL Anam",educations:edus,languages:lang});
};



module.exports = { getCV: getCV };
