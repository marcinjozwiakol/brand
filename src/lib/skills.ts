export interface Skill {
  id: string;
  name: string;
  description: string;
  filename: string;
  version: string;
  icon: string; // Lucide icon name
}

export const skills: Skill[] = [
  {
    id: "onelayer-brand",
    name: "OneLayer Brand",
    description:
      "Apply OneLayer brand identity to any document, presentation, or web artifact you create.",
    filename: "onelayer-brand.skill",
    version: "1.0",
    icon: "Palette",
  },
  {
    id: "onelayer-doc-creation",
    name: "Document Creation",
    description:
      "Create branded PPTX, DOCX, and HTML documents with OneLayer styling baked in.",
    filename: "onelayer-doc-creation.skill",
    version: "1.0",
    icon: "FileText",
  },
  {
    id: "onelayer-doc-extraction",
    name: "Document Extraction",
    description:
      "Extract and parse content from documents into structured, usable data.",
    filename: "onelayer-doc-extraction.skill",
    version: "1.0",
    icon: "ScanSearch",
  },
];
