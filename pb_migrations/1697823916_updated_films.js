/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8u0dmz14em32r9z")

  // remove
  collection.schema.removeField("ttclfxpl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "okhqy9u8",
    "name": "Trailer",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8u0dmz14em32r9z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ttclfxpl",
    "name": "Trailer",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5000000,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // remove
  collection.schema.removeField("okhqy9u8")

  return dao.saveCollection(collection)
})
