import type Category from '$lib/models/CategoryType';
import type ItemField from '$lib/models/ItemField';
import type Item from '$lib/models/ItemType';
import { pb } from '$lib/pocketbase';
import type { PageServerLoad } from './$types';

export const load = (async ({params}) => {
    const itemRecord = await pb.collection('items').getOne(params.id); 
    const item: Item = {
        id: itemRecord.id,
        title: itemRecord.title,
        description: itemRecord.description,
        category_id: itemRecord.category_id,
        pictureUrls: itemRecord.pictures.map((p:string) => pb.getFileUrl(itemRecord, p))
    };
    const additionalFieldsRecords = await pb.collection('item_additional_fields')
        .getFullList(undefined, {filter:`item_id="${item.id}"`});
    const additionalFields: ItemField[] = additionalFieldsRecords.map(r => ({
        name: r.name,
        description: r.description 
    }));

    const allCategories = await pb.collection('categories').getFullList();

    const breadcrumb:Category[] = [];

    let currentCategory = allCategories.find(r => r.id === item.category_id);
    while(currentCategory){
        breadcrumb.push({
            id: currentCategory.id,
            name: currentCategory.name
        });
        currentCategory = allCategories.find(r => r.id === currentCategory?.parent_id);
    }
    
    return {item, additionalFields, breadcrumb: breadcrumb.reverse()};
}) satisfies PageServerLoad;
