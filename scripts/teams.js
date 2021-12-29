db.getCollection('teams').insertMany([
    {
        'name': 'Sevilla Blanco Rojo',
        'since': new Date("1890-01-25"),
        'stadium': 'sánchez-pizjuán',
        createdAt : new Date("2021-01-01"),
        modifiedAt : new Date("2021-01-01")
    },
    {
        'name': 'Cadiz Amarillo',
        'since': new Date("1910-09-10"),
        'stadium': 'nuevo mirandilla',
        createdAt : new Date("2021-01-01"),
        modifiedAt : new Date("2021-01-01")
    },
    {
        'name': 'Valencia Azulgrana',
        'since': new Date("1909-09-09"),
        'stadium': 'valencia ciudad',
        createdAt : new Date("2021-01-01"),
        modifiedAt : new Date("2021-01-01")
    },
    {
        'name': 'Valencia Blanco',
        'since': new Date("1919-03-18"),
        'stadium': 'mestalla ciudad',
        createdAt : new Date("2021-01-01"),
        modifiedAt : new Date("2021-01-01")
    },
    {
        'name': 'Deportivo de Acoruña',
        'since': new Date("1906-03-02"),
        'stadium': 'riazor estadio',
        createdAt : new Date("2021-01-01"),
        modifiedAt : new Date("2021-01-01")}
])