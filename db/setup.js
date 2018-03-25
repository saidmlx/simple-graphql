const { Model } = require('objection')
const knexConfig = require('./knexfile.js')
const Knex = require('knex')

const knex = Knex(knexConfig.development)
Model.knex(knex)