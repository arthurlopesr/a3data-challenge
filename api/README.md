### A3Data Surgical Orders - API

http://localhost:3001/

# Path - /surgical-orders

## Post
* Add a new surgical order: 
  * /surgical-orders
```sh
{
  "code": "550e8400-e29b-41d4-a716-446655440000",
  "surgicalRoom": "Sala 202",
  "medicalProcedure": "Cirurgia Plastica",
  "doctor": "Raissa Magalhaes",
  "patient": "Arthur Lopes",
  "hospital": "Mater Dei",
  "surgeryDate": "18/10/2023",
  "creationDate": "18/10/2023",
  "observations": "Correção de pequenas cicatrizes."
}
  ```

## Put
* pdate an existing pet
  * /surgical-orders/{code}
```sh
{
  "code": "550e8400-e29b-41d4-a716-446655440000",
  "surgicalRoom": "Sala 202",
  "medicalProcedure": "Cirurgia Plastica",
  "doctor": "Raissa Magalhaes",
  "patient": "Arthur Lopes",
  "hospital": "Mater Dei",
  "surgeryDate": "18/10/2023",
  "creationDate": "18/10/2023",
  "observations": "Correção de pequenas cicatrizes."
}
  ```

## Update
* Update an existing order
  * /surgical-orders/{code}
```sh
{
  "code": "550e8400-e29b-41d4-a716-446655440000",
  "surgicalRoom": "Sala 202",
  "medicalProcedure": "Cirurgia Plastica",
  "doctor": "Raissa Magalhaes",
  "patient": "Arthur Lopes",
  "hospital": "Mater Dei",
  "surgeryDate": "18/10/2023",
  "creationDate": "18/10/2023",
  "observations": "Correção de pequenas cicatrizes."
}
  ```

## Delete
* Delete an existing order
  * /surgical-orders/{code}
```sh
{
  "code": "550e8400-e29b-41d4-a716-446655440000",
  "surgicalRoom": "Sala 202",
  "medicalProcedure": "Cirurgia Plastica",
  "doctor": "Raissa Magalhaes",
  "patient": "Arthur Lopes",
  "hospital": "Mater Dei",
  "surgeryDate": "18/10/2023",
  "creationDate": "18/10/2023",
  "observations": "Correção de pequenas cicatrizes."
}
  ```
