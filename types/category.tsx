export interface Project {
  id: string;
  title: string;
  description: string;
  category: "All" | "Web" | "App" | "Design";
  imageUrl: string;
  link: string;
}

export interface Category {
  id: string;
  name: "All" | "Web" | "App" | "Design"| "Data";
}
