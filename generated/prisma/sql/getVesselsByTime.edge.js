
/* !!! This is code generated by Prisma. Do not edit directly. !!!
/* eslint-disable */
"use strict"
const { makeTypedQueryFactory: $mkFactory } = require("../runtime/edge.js")
exports.getVesselsByTime = /*#__PURE__*/ $mkFactory("SELECT DISTINCT ON (\"mmsi\") mmsi,cog,sog,latitude,longitude,\"shipName\",\"trueHeading\"\nFROM public.\"AISData\"\nWHERE CAST(\"timeUtc\" AS TIMESTAMP) >= (CURRENT_TIMESTAMP AT TIME ZONE 'UTC') - INTERVAL '$1 MINUTE'\nORDER BY \"mmsi\", \"timeUtc\" DESC;")
