import { Technologie } from "./helpers.type";

export const listTechnologies = (list: Technologie[]) => {
    const element = `
        <ul>
            ${list.map(technologie => `
                <li>
                    ${technologie.name} - ${technologie.type} - ${technologie.poweredByNodejs}
                </li>
                `).join("")}
        </ul>
    `;
    return element;
};

