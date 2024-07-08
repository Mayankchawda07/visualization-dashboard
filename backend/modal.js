const mongoose = require('mongoose')

const VisualSchema = new mongoose.Schema({
    end_year: {
        type: Number
    },
    intensity: {
        type: Number
    },
    sector: {
        type: String
    },
    topic: {
        type: String
    },
    insight: {
        type: String
    },
    url: {
        type: String
    },
    region: {
        type: String
    },
    start_year: {
        type: Number
    },
    impact: {
        type: Number
    },
    added: {
        type: Date
    },
    published: {
        type: Date
    },
    country: {
        type: String
    },
    relevance: {
        type: String
    },
    pestle: {
        type: String
    },
    source: {
        type: String
    },
    title: {
        type: String
    },
    likelihood: {
        type: Number
    }
}, { timestamps: true })

const visuals = mongoose.model('visuals', VisualSchema)
module.exports = visuals;