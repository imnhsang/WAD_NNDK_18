const mongoose = require('mongoose');
const { CommentSchema } = require('./Comment')

const ArticleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }
    ],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    coverImage: {
        type: String,
        required: true
    },
    publishedAt: {
        type: Date,
        required: false
    },
    content: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    comments: [{
        type: CommentSchema
    }],
    isPremium: {
        type: Boolean,
        default: false
    },
    process: { // subcriber, editor, administrator
        type: String,
        required: true
    },
    reasonDenied: {
        type: String,
        required: false
    },
    writerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    editorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    administratorId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = {
    ArticleSchema, Article
}