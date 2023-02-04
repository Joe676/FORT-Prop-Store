import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from './$types';

export const actions:Actions = {
    default:async ({locals, request}) => {
        const data = Object.fromEntries(await request.formData()) as {
            email: string;
            name: string;
            password: string;
            passwordConfirm: string;
        };
        
        try {
            await locals.pb.collection('users').create(data);
            await locals.pb.collection('users').authWithPassword(data.email, data.password);
        } catch (error) {
            console.error(error);
            throw error;
        }

        throw redirect(303, '/');
    }
}

// export const load = (async () => {
//     return {};
// }) satisfies PageServerLoad;