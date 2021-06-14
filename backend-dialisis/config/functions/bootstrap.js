'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {

    // update default public permissions
    const authenticated = await strapi.query('role', 'users-permissions').findOne({ type: 'public' });
    authenticated.permissions.forEach(permission => {

        if (permission.type === 'application') {
            // only update find and findone to be finded by noticias
            if(permission.action === "find" || permission.action === "findone") {
                let newPermission = permission;
                newPermission.enabled = true; 
                strapi.query('permission', 'users-permissions').update({ id: newPermission.id }, newPermission);
            }
        }
    });
    return;
};
