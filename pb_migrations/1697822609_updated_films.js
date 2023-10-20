/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8u0dmz14em32r9z")

  // remove
  collection.schema.removeField("3i4piama")

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
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8u0dmz14em32r9z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3i4piama",
    "name": "Trailer",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // remove
  collection.schema.removeField("ttclfxpl")

  return dao.saveCollection(collection)
})
