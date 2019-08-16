const Post = require('./Post.model');

module.exports = {
    delete: async (id) => {
        const post = await Post.findByIdAndRemove(id)
        if (post) {
            return {
                sucess: true,
                msg: `post with id ${id} deleted successfully`,
                data: [post]
            };
        }

        return {
            sucess: false,
            msg: 'No post with that id found in the system',
            errors: [{
                msg: 'A search was made on database, but no post found with that id. Check for spaces or uppercase/lowercaser problems or reach Support.'
            }]
        };

    },
    all: async () => {
        let posts = await Post.find({});

        if (posts.length > 0) {
            return {
                sucess: true,
                msg: 'posts fetched successfully',
                data: posts
            };
        }

        return {
            sucess: false,
            msg: 'No posts found in the system',
            errors: [{
                msg: 'A search was made on database, but no posts found in the system'
            }]
        };
    },
    filter: async (query) => {
        let posts = await postModel.find(query);
        if (posts.length > 0) {
            return {
                sucess: true,
                msg: 'posts with given query fetched successfully',
                data: posts
            };
        }

        return {
            sucess: false,
            msg: 'No posts with given query found in the system',
            errors: [{
                msg: 'No posts with given query found in the system.  Check for mispelling or whitespaces in query.'
            }]
        };
    },
    find: async (id) => {
        let post = await postModel.findById(id);

        if (!post) {
            return {
                sucess: false,
                msg: 'No post found in the system',
                errors: [{
                    msg: 'No post found in the system'
                }]
            };
        }

        return {
            sucess: true,
            msg: `post wir id ${id} fetched successfully`,
            data: [post]
        };
    },
    update: async (id, data) => {

        let post = await Post.findByIdAndUpdate(id, data, { new: true });

        if (post) {
            return {
                sucess: true,
                msg: 'post updated successfully',
                data: [post]
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
        let post = await Post.create(data);

        if (!post) {
            return {
                sucess: false,
                msg: "there was a problem creating post in database.",
                errors: [{
                    "msg": "there was a problem creating post in database."
                }]
            };
        }
        return {
            sucess: true,
            msg: 'post created successfully',
            data: [post]
        };
    }
}