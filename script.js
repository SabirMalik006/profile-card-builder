const form = document.getElementById("profile-form");

const fullNameInput = document.getElementById("full-name");
const jobTitleInput = document.getElementById("job-title");
const bioInput = document.getElementById("bio");
const colorInput = document.getElementById("avatar-color");

const errorMessage = document.getElementById("error-message");

const avatar = document.getElementById("avatar");
const profileName = document.getElementById("profile-name");
const profileTitle = document.getElementById("profile-title");
const profileBio = document.getElementById("profile-bio");
const skillsContainer = document.getElementById("skills-container");

function getSelectedSkills() {
  const checkedSkills = document.querySelectorAll("input[name='skills']:checked");
  const skillsArray = [];

  checkedSkills.forEach((skill) => {
    skillsArray.push(skill.value);
  });

  return skillsArray;
}

function updateSkills(skills) {
  skillsContainer.innerHTML = "";

  skills.forEach((skill) => {
    const span = document.createElement("span");
    span.textContent = skill;
    skillsContainer.appendChild(span);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = fullNameInput.value.trim();
  const titleValue = jobTitleInput.value.trim();
  const bioValue = bioInput.value.trim();
  const colorValue = colorInput.value;

  if (nameValue === "" || titleValue === "") {
    errorMessage.textContent = "Please fill in Full Name and Job Title.";
    return;
  }

  errorMessage.textContent = "";

  profileName.textContent = nameValue;
  profileTitle.textContent = titleValue;
  profileBio.textContent = bioValue || "Bio will appear here...";
  avatar.style.backgroundColor = colorValue;

  const skills = getSelectedSkills();
  updateSkills(skills);
});

fullNameInput.addEventListener("input", function () {
  const nameValue = fullNameInput.value.trim();
  profileName.textContent = nameValue || "Your Name";
});

colorInput.addEventListener("input", function () {
  avatar.style.backgroundColor = colorInput.value;
});