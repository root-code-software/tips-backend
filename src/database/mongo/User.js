const User = require('./User.model');

module.exports = {
    delete: async (id) => {
        const user = await User.findByIdAndRemove(id)
        if (user) {
            return {
                sucess: true,
                msg: `user with id ${id} deleted successfully`,
                data: [user]
            };
        }

        return {
            sucess: false,
            msg: 'No user with that id found in the system',
            errors: [{
                msg: 'A search was made on database, but no user found with that id. Check for spaces or uppercase/lowercaser problems or reach Support.'
            }]
        };

    },
    all: async () => {
        let users = await User.find({});

        if (users.length > 0) {
            return {
                sucess: true,
                msg: 'users fetched successfully',
                data: users
            };
        }

        return {
            sucess: false,
            msg: 'No users found in the system',
            errors: [{
                msg: 'A search was made on database, but no users found in the system'
            }]
        };
    },
    filter: async (query) => {
        let users = await User.find(query);
        if (users.length > 0) {
            return {
                sucess: true,
                msg: 'users with given query fetched successfully',
                data: users
            };
        }

        return {
            sucess: false,
            msg: 'No users with given query found in the system',
            errors: [{
                msg: 'No users with given query found in the system.  Check for mispelling or whitespaces in query.'
            }]
        };
    },
    find: async (id) => {
        let user = await User.findById(id);

        if (!user) {
            return {
                sucess: false,
                msg: 'No user found in the system',
                errors: [{
                    msg: 'No user found in the system'
                }]
            };
        }

        return {
            sucess: true,
            msg: `user ${id} fetched successfully`,
            data: [user]
        };
    },
    update: async (id, data) => {

        let user = await User.findByIdAndUpdate(id, data, { new: true });

        if (user) {
            return {
                sucess: true,
                msg: 'user updated successfully',
                data: [user]
            };
        } else {
            return {
                sucess: false,
                msg: 'something went wrong with updating MongoDB',
                errors: [{
                    msg: 'something went wrong with updating MongoDB'
                }]
            };
        }
    },
    create: async (data) => {
        let user = await User.create(data);

        if (!user) {
            return {
                sucess: false,
                msg: "there was a problem creating user in database.",
                errors: [{
                    "msg": "there was a problem creating user in database."
                }]
            };
        }
        return {
            sucess: true,
            msg: 'user created successfully',
            data: [user]
        };
    }
}