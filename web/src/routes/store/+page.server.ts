import { pb } from '$lib/pocketbase';
import type Category from '../../lib/CategoryType';
import type Item from '../../lib/ItemType';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const final_tree = await getCategoryTree();
    const items = await getAllItems();

    return {categories: final_tree, items};
}) satisfies PageServerLoad;


const getAllItems =async ():Promise<Item[]> => {
    const itemsRecords = await pb.collection('items').getFullList(100);

    const items: Item[] = itemsRecords.map(r => ({title: r.title, description: r.description, category_id: r.category_id, pictures: r.pictures}));
    
    return items;
}

const getCategoryTree = async ():Promise<Category[]> => {
    const categories = await pb.collection('categories').getFullList(100);

    let mappedCategories = categories
        .map(c => ({id: c.id, parent_id: c.parent_id, name: c.name} as Category));

    categories.forEach(c => {
        const mapped = mappedCategories.find(mc => mc.id == c.id);

        const parent_index = c.parent_id;
        const parent = mappedCategories.find(mc => mc.id == parent_index);
        if(parent !== undefined && mapped != undefined){
            if (!parent.children) parent.children = [];
            parent.children = parent.children?.concat([mapped]);
        }
    });

    const final_tree = mappedCategories.filter(c => c.parent_id == "");

    return final_tree;
}