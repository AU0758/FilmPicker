/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8u0dmz14em32r9z")

  // remove
  collection.schema.removeField("jgv4fic8")

  // remove
  collection.schema.removeField("1wrcvwrq")

  // remove
  collection.schema.removeField("gvbmdcce")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ea8pm4mh",
    "name": "BgColor1",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1i5pr2hr",
    "name": "BgColor2",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zzaqmjdl",
    "name": "BtnColor",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8u0dmz14em32r9z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jgv4fic8",
    "name": "BgColor1",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wrcvwrq",
    "name": "BgColor2",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gvbmdcce",
    "name": "BtnColor",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("ea8pm4mh")

  // remove
  collection.schema.removeField("1i5pr2hr")

  // remove
  collection.schema.removeField("zzaqmjdl")

  return dao.saveCollection(collection)
})
