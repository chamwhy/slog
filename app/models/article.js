const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const getTags = tags => tags.join(',');
const setTags = tags => {
  if (!Array.isArray(tags)) return tags.split(',').slice(0, 10); // max tags
  return [];
};


const ArticleSchema = new Schema({
    title: {type: String, default: "", trim: true, maxlength: 400},
    body: {type: String, default: "", trim: true, maxlength: 1000},
    user: {type: Schema.ObjectId, ref: "User"},
    comments: [
        {
          body: { type: String, default: '', maxlength: 1000 },
          user: { type: Schema.ObjectId, ref: 'User' },
          createdAt: { type: Date, default: Date.now }
        }
      ],
    tags: { type: [], get: getTags, set: setTags },
    image: {
        cdnUri: String,
        files: []
    },
    createdAt: { type: Date, default: Date.now }
});

ArticleSchema.methods = {
    uploadAndSave: function(){
        const err = this.validateSync();
        if(err && err.toString()) throw new Error(err.toString());
        return this.save(); 
    },
    addComment: function(user, comment){
        this.comment.push({
            body: comment.body,
            user: user._id
        })
    },
    removeComment: function(commentId){
        const index = this.comments.map(comment => comment.id).indexOf(commentId);
    }
};