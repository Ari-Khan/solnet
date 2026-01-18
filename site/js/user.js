const params = new URLSearchParams(window.location.search);
const email = params.get("email");

if (!email) {
  document.body.textContent = "No user specified";
  throw new Error("Missing email");
}

(async () => {
  const res = await fetch(`/api/profile?email=${encodeURIComponent(email)}`);
  if (!res.ok) {
    document.body.textContent = "User not found";
    return;
  }

  const p = await res.json();

  document.getElementById("avatar").src =
    p.avatar || "assets/default-avatar.png";
  document.getElementById("name").textContent =
    `${p.firstName || ""} ${p.lastName || ""}`;
    document.getElementById("job").textContent =
    p.job || "No job set";
    document.getElementById("country").textContent =
    p.country ? `📍 ${p.country}` : "";
  document.getElementById("bio").textContent = p.bio || "";

  const skillsContainer = document.getElementById("skills");
  skillsContainer.innerHTML = "";

  if (Array.isArray(p.skills) && p.skills.length) {
    p.skills.forEach(skill => {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      skillsContainer.appendChild(tag);
    });
  }
})();
