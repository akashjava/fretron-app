var rp = require('request-promise');
var fs = require("fs")

var schema = {
    "namespace": "com.fretron.Model",
    "type": "record",
    "name": "AllInOne",
    "fields": [
    ]
}

var schemaTopicMaps = [
    { "name": "vehicle", "topic": "vehicle-value" },
    { "name": "device", "topic": "device-value" },
    { "name": "driver", "topic": "drivertopic-value" },
    { "name": "gpsState", "topic": "vehiclegpsstatetopic-value" },
    { "name": "trip", "topic": "tripTopic-value" },
    { "name": "vts", "topic": "tripGeneratedEventTopic-value" },
    { "name": "user", "topic": "user-value" },
    { "name": "org", "topic": "organisation-value" },
    { "name": "orguseracl", "topic": "orguseracl-value" }
]

var promiseArray = schemaTopicMaps.map((schemaTipic) => {

    var opt = {
        uri: 'http://35.192.227.82/subjects/' + schemaTipic["topic"] + '/versions/latest',
        json: true
    }
    return rp(opt).then((res) => {
        schema.fields.push({
            "name": schemaTipic["name"],
            "type": JSON.parse(res["schema"])
        });
    });
})


Promise.all(promiseArray).then((res) => {
    var contentStriong = avroToTypeScript(schema);
    fs.writeFile("src/app/shared/models.ts", contentStriong, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});

/** Convert a primitive type from avro to TypeScript */
function convertPrimitive(avroType) {
    switch (avroType) {
        case "long":
        case "int":
        case "double":
        case "float":
            return "number";
        case "bytes":
            return "Buffer";
        case "null":
            return "null | undefined";
        case "boolean":
            return "boolean";
        default:
            return null;
    }
}

/** Converts an Avro record type to a TypeScript file */
function avroToTypeScript(recordType) {
    var output = [];
    convertRecord(recordType, output);
    output=  output.filter(onlyUnique);
    return output.join("\n");
}
/** Convert an Avro Record type. Return the name, but add the definition to the file */
function convertRecord(recordType, fileBuffer) {
    var buffer = "export interface " + recordType.name + " {\n";
    for (var _i = 0, _a = recordType.fields; _i < _a.length; _i++) {
        var field = _a[_i];
        buffer += convertFieldDec(field, fileBuffer) + "\n";
    }
    buffer += "}\n";
    fileBuffer.push(buffer);
    return recordType.name;
}
/** Convert an Avro Enum type. Return the name, but add the definition to the file */
function convertEnum(enumType, fileBuffer) {
    var enumDef = "export enum " + enumType.name + " { " + enumType.symbols.join(", ") + " };\n";
    fileBuffer.push(enumDef);
    return enumType.name;
}

function convertType(type, buffer) {
    // if it's just a name, then use that
    if (typeof type === "string") {
        return convertPrimitive(type) || type;
    }
    else if (type instanceof Array) {
        // array means a Union. Use the names and call recursively
        return type.map(function (t) { return convertType(t, buffer); }).join(" | ");
    }
    else if (isRecordType(type)) {
        //} type)) {
        // record, use the name and add to the buffer
        return convertRecord(type, buffer);
    }
    else if (isArrayType(type)) {
        // array, call recursively for the array element type
        return convertType(type.items, buffer) + "[]";
    }
    else if (isMapType(type)) {
        // Dictionary of types, string as key
        return "{ [index:string]:" + convertType(type.values, buffer) + " }";
    }
    else if (isEnumType(type)) {
        // array, call recursively for the array element type
        return convertEnum(type, buffer);
    }
    else if (isStringType(type)) {
        return "string";
    }
    else {
        console.error("Cannot work out type", type);
        return "UNKNOWN";
    }
}
function convertFieldDec(field, buffer) {
    // Union Type
    return "\t" + field.name + (isOptional(field.type) ? "?" : "") + ": " + convertType(field.type, buffer) + ";";
}


function isRecordType(type) {
    return type.type === "record";
}

function isStringType(type) {
    return type.type === "string";
}
function isArrayType(type) {
    return type.type === "array";
}
function isMapType(type) {
    return type.type === "map";
}
function isEnumType(type) {
    return type.type === "enum";
}
function isUnion(type) {
    return type instanceof Array;
}
function isOptional(type) {
    if (isUnion(type)) {
        var t1 = type[0];
        if (typeof t1 === "string") {
            return t1 === "null";
        }
    }
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}
