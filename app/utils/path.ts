export const getBasePath = () => {
    return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

export const getImagePath = (path: string) => {
    return `${getBasePath()}${path}`;
};
