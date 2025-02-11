export function formatName(fullName: string) {
    const nameParts = fullName.trim().split(' ');
    const firstName = nameParts[0];
    const formattedName =
        firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();

    return formattedName;
}
