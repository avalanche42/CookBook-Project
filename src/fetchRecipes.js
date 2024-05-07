const fetchRecipes = async () => {
    try {
        const response = await fetch('/api/recipes');
        if (!response.ok) {
            throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};