export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  scrollToSection(sectionId);
};
