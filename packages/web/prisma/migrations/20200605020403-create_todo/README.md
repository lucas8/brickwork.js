# Migration `20200605020403-create_todo`

This migration has been generated by Lucas at 6/5/2020, 2:04:03 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."Item" (
"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"isChecked" BOOLEAN NOT NULL DEFAULT false ,"name" TEXT NOT NULL  )

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."User";;
PRAGMA foreign_keys=on

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."Post";;
PRAGMA foreign_keys=on

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200605020403-create_todo
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,14 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "sqlite"
+  url      = "file:./dev.db"
+}
+
+model Item {
+  id    Int     @default(autoincrement()) @id
+  name  String
+  isChecked Boolean @default(false)
+}
```


