# 🧪 MySQL Implementation Worksheet

**Mode:** Execute Instructions (No Hints, No Answers)

---

## 🟢 TASK 1 — Database Initialization

1. Log in to the MySQL server
2. Create a new database named `mysql_practice`
3. Switch to the newly created database
4. Confirm the database is active

---

## 🟢 TASK 2 — Core Table Creation

Create a table named `users` that stores:
- A unique auto-increment identifier
- A user name
- An email address that must be unique
- An age value
- A creation timestamp

**Verification:** Check the table structure after creation.

---

## 🟢 TASK 3 — Relational Table Creation

Create a table named `orders` that stores:
- A unique auto-increment identifier
- A reference to a user
- A product name
- A price value with decimals
- A date of order

**Requirements:**
- Enforce a relationship between `orders` and `users`

**Verification:** Check the table structure after creation.

---

## 🟢 TASK 4 — Initial Data Insertion

1. Insert at least three users into the `users` table
2. Insert at least four orders into the `orders` table
3. Ensure each order belongs to an existing user

**Verification:** Confirm all inserted data is present.

---

## 🟢 TASK 5 — Data Retrieval

Execute the following queries:
1. Retrieve all users
2. Retrieve only user names and ages
3. Retrieve all orders with a price greater than a defined threshold

---

## 🟡 TASK 6 — Sorting & Limiting

Execute the following queries:
1. Retrieve users ordered by age
2. Retrieve only the youngest user
3. Retrieve the top two most expensive orders

---

## 🟠 TASK 7 — Data Aggregation

Execute the following queries:
1. Count how many users exist
2. Calculate the average user age
3. Calculate the total value of all orders
4. Calculate total spending per user

---

## 🔵 TASK 8 — Join Operations

1. Retrieve user names together with their ordered products
2. Ensure the relationship between `users` and `orders` is correctly applied

---

## 🟣 TASK 9 — Subquery Execution

1. Identify users who have placed orders above a specific price
2. Retrieve only those users using a subquery

---

## 🔴 TASK 10 — Data Deletion (Row-Level)

1. Remove users that meet a specific condition
2. Remove orders below a specific price

**Verification:** Confirm remaining data is correct.

---

## 🔴 TASK 11 — Table Truncation

1. Remove all records from a chosen table
2. Confirm the table structure still exists

---

## ⚫ TASK 12 — Table Removal

1. Remove a table entirely
2. Ensure the operation does not fail if the table does not exist

---

## ⚫ TASK 13 — Schema Modification

1. Add a new column to the `users` table
2. Remove an existing column from the `users` table

**Verification:** Confirm the schema changes are applied.

---

## ⚫ TASK 14 — Backup Table Creation

1. Create a backup table containing all records from another table

**Verification:** Confirm backup accuracy by comparing record counts.

---

## ⚫ TASK 15 — Safe Operation Workflow

1. Create a backup of a production-like table
2. Begin a controlled operation (transaction)
3. Modify data based on a condition
4. Decide whether to finalize or revert the operation

**Verification:** Confirm the final state of the data.

---

## 🧠 RULES

- ✅ Execute tasks in order
- ✅ Do not skip verification steps
- ✅ One change per command
- ✅ Always confirm results before proceeding

---

## 🎯 END GOAL

By completing this worksheet, you should be able to:

- ✅ Build tables from scratch
- ✅ Insert, read, update, and delete data
- ✅ Modify schemas safely
- ✅ Handle real-world SQL workflows
- ✅ Implement proper database relationships
- ✅ Execute safe data operations with transactions

---

## 📝 Notes

- Use the accompanying SQL file to document your solutions
- Test each query before moving to the next task
- Keep track of your progress as you complete each task
- Review MySQL documentation when needed for syntax reference
