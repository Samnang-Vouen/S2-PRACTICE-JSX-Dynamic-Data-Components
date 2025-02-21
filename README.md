# S2-PRACTICE-JSX-Dynamic-Data-Components

## Exercise 2 - Q1
## HTML vs JSX - Main Differences  

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but has some key differences. Below are the main differences between HTML and JSX:  

## 1️⃣ Tags Must Be Closed  
- **HTML**: Some tags do not require closing (e.g., `<br>`, `<img>`).  
- **JSX**: All tags must be **self-closing** if they don’t have content.  
  ```jsx
  // ❌ Incorrect in JSX
  <img src="logo.png">

  // ✅ Correct in JSX
  <img src="logo.png" />
  ```

## 2️⃣ class → className  
- **HTML** uses `class` for CSS.  
- **JSX** uses `className` because `class` is a reserved JavaScript keyword.  
  ```jsx
  // HTML
  <div class="container"></div>

  // JSX
  <div className="container"></div>
  ```

## 3️⃣ Attribute Naming Uses CamelCase  
- JSX follows **camelCase** for attributes instead of lowercase.  
  ```jsx
  // HTML
  <input type="text" onclick="handleClick()">

  // JSX
  <input type="text" onClick={handleClick} />
  ```

## 4️⃣ JavaScript Expressions Are Used Inside `{}`  
- **HTML**: Only supports static content.  
- **JSX**: Allows JavaScript expressions inside `{}`.  
  ```jsx
  // HTML
  <h1>Welcome, User!</h1>

  // JSX (Dynamic)
  const user = "Samnang";
  <h1>Welcome, {user}!</h1>
  ```

## 5️⃣ JSX Uses `htmlFor` Instead of `for`  
- **HTML**: Uses `for` in `<label>`.  
- **JSX**: Uses `htmlFor` because `for` is a JavaScript keyword.  
  ```jsx
  // HTML
  <label for="email">Email:</label>

  // JSX
  <label htmlFor="email">Email:</label>
  ```

## 6️⃣ Fragments Instead of `<div>`  
- JSX allows `<>...</>` (fragments) to avoid unnecessary `<div>` elements.  
  ```jsx
  // HTML
  <div>
    <h1>Title</h1>
    <p>Description</p>
  </div>

  // JSX
  <>
    <h1>Title</h1>
    <p>Description</p>
  </>
  ```
## Exercise 3 - Q1
### React Component Structure

Below is the component structure for the React JS code:

```
+-----------------+
|      App        |
+-----------------+
        |
        +--------------------+
        |                    |
  +-------------+        +----------+
  |   Header   |        |   Main   |
  +-------------+        +----------+
```