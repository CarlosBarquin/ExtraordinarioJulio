import { ObjectId } from "https://deno.land/x/web_bson@v0.2.5/mod.ts";
import { autor, editorial, libro } from "../types.ts";

export type LibroSchema = Omit<libro, "editorial" | "autor" > & {
  _id : ObjectId
  autor : ObjectId
  editorial : ObjectId
}


export type EditorialSchema = editorial & {
  _id : ObjectId
}

export type AutorSchema = autor & {
  _id : ObjectId
}
