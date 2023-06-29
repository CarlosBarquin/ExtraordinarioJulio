export type editorial = {
  name : string
  web : string
  country : string
}

export type autor= {
  name : string
  lang : string
}

export type libro = {
  title : string
  autor : autor
  editorial : editorial
  year : number
}