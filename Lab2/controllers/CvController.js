const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));
  
languages = fs.readFileSync("data/language", { encoding: "utf-8" });
languages = JSON.parse(String(languages));

skills = fs.readFileSync("data/skill", { encoding: "utf-8" });
skills = JSON.parse(String(skills));

experience = fs.readFileSync("data/experience", { encoding: "utf-8" });
experience = JSON.parse(String(experience));

  edus = [];
  

  for (let key in educations) {
    edus.push(educations[key]);
  }



lang = [];


for (let key in languages) {
  lang.push(languages[key]);
}

skl = [];

for (let key in skills) {
  skl.push(skills[key]);
}

ex = [];
for (let key in experience) {
  ex.push(experience[key]);
}


res.render("cv", { name:"Mohaymen UL Anam",educations:edus,languages:lang,skills:skl,experience:ex});
};



module.exports = { getCV: getCV };
