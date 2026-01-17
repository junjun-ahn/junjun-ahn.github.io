export interface Publication {
    title: string;
    authors: string[];
    date: Date;             // for sorting purposes
    venue: string;          // name of the journal/conference/workshop
    venue_type: "journal" | "conference" | "workshop" | "preprint"; // type of venue
    project_page?: string;  // optional link to project page
    code?: string;          // optional link to code repository
    pdf?: string;           // optional link to PDF
}

export const publications: Publication[] = [
    {
        title: "Publication Title 1",
        authors: ["Sejun Ahn", "Co-author 1", "Co-author 2"],
        date: new Date("2024-03-02"),
        venue: "Conference Name 2024",
        venue_type: "conference",
        project_page: "https://github.com/junjun-ahn",
        code: "https://github.com/junjun-ahn",
        pdf: "abc.pdf",
    },
    {
        title: "Publication Title 2",
        authors: ["Sejun Ahn", "Co-author 1", "Co-author 2"],
        date: new Date("2025-03-02"),
        venue: "Workshop Name 2025",
        venue_type: "workshop",
        project_page: "https://github.com/junjun-ahn",
        code: "https://github.com/junjun-ahn",
        pdf: "abc.pdf",
    },
]