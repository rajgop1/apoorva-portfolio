const posts = [
    {
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2020",
        category: "Figma, Icon Design",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        category: "Design Pattern",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat sunt nostrud amet."
    }
];

const container = document.getElementById("container");

// Apply container styles
container.style.cssText = `
    display: flex;
    flex-direction: row;
    background-color: rgb(99, 201, 229);
    justify-content: center;
    gap: 20px;
`;

posts.forEach(post => {
    let recentPostsBody = document.createElement("div");
    recentPostsBody.style.cssText = `
        background-color: white;
        width: 429px;
        margin: 20px 0;
        padding: 10px;
    `;

    // Title
    let title = document.createElement("p");
    title.textContent = post.title;
    recentPostsBody.appendChild(title);

    // Meta section (Date | Category)
    let metaSection = document.createElement("section");
    metaSection.style.cssText = `
        display: flex;
        gap: 10px;
    `;

    let date = document.createElement("p");
    let separator = document.createElement("p");
    let category = document.createElement("p");

    date.textContent = post.date;
    separator.textContent = "|";
    category.textContent = post.category;

    metaSection.append(date, separator, category);
    recentPostsBody.appendChild(metaSection);

    // Description
    let description = document.createElement("p");
    description.textContent = post.description;
    recentPostsBody.appendChild(description);

    container.appendChild(recentPostsBody);
});
