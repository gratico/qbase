/* eslint  no-var: "error" */

// @gratico/qbase
// =====
// Simple light and super-fast data store for browser with support for denormalization, MongoDB styled querying and watchable queries.

// Written to be an lightweight functional alternative to @apollo/client. PRs welcomed for adding support for JSONSchema

// Install and use
// ---------------
// To use run `npm install -g @gratico/qbase`
//
//     import {createStore, getSelect, getInsert, observe} from "@gratico/qbase"
//     const store = createStore()
//

// Schema Definition
// ---------------------------
// List of table describing their column and realtions
//
//     export const schema: ISchemaDefinition = {
//       name: "Kernel",
//       tables: [
//         {
//           name: "Masters",
//           primaryKey: ["id"],
//           relations: [
//             {
//               type: R.MTM,
//               name: "viewports",
//               opts: {
//                 tableName: "Viewports",
//                 remoteKey: "viewportId",
//                 localKey: "masterId",
//                 through: "MasterViewportJunction",
//               },
//             },
//           ],
//           columns: [
//             { name: "id", type: "STRING" },
//             { name: "createdAt", type: "DATE_TIME", nullable: true },
//           ],
//         } as ITableDefinition,
//       ],
//     };
//
// Querying
// ---------------------------
// List of table describing their column and realtions
//
//     const selectQuery = getSelect(db, [
//       Q.SELECT,
//       "Viewports",
//       { columns: ["id", "name"], includes: ["masters"] },
//     ]);
//     const preInsertSelectResults = selectQuery();
//     const insertMQuery = getInsert(db, [
//       Q.INSERT,
//       "Masters",
//       [{ id: "master1", "name": "Master Node" }],
//     ]);
//     const insertVQuery = getInsert(db, [
//       Q.INSERT,
//       "Viewports",
//       [{ id: "viewport1", "name": "viepwortNode" }],
//     ]);
//     const insertMVJunctionQuery = getInsert(db, [
//       Q.INSERT,
//       "MasterViewportJunction",
//       [{ id: "master1.viewport1", masterId: "", viewportId: "viewport1" }],
//     ]);
//

export * from "./queries";
export * from "./relational";
export * from "./schema";
export * from "./types";
export * from "./utils";
export * from "./watch";
export * from "./react_hooks";
