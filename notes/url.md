# `url` (Uniform Resource Locator)

-   **Introduction to the `url` Module:**

    -   The `url` module in Node.js provides utilities for URL resolution and parsing.

        **Commonly Used Methods:**

        -   `url.parse(urlString, parseQueryString, slashesDenoteHost)`: Parses a URL string into components.

            -   **Definition:** Parses a URL string into components.
            -   **Syntax:**
                ```javascript
                const myUrl = url.parse(
                    'http://mywebsite.com/hello.html?id=100&status=active',
                    true,
                );
                ```
            -   **Output:**
                ```javascript
                // Parsed URL components with query string parsed
                ```

        -   `url.format(urlObject)`: Generates a URL string from an object.

            -   **Definition:** Generates a URL string from an object.
            -   **Syntax:**
                ```javascript
                const urlString = url.format(myUrl);
                ```
            -   **Output:**
                ```javascript
                // URL string generated from object
                ```

        -   `new URL(input[, base])`: Creates a new URL object.

            -   **Definition:** Creates a new URL object.
            -   **Syntax:**
                ```javascript
                const myUrl = new URL(
                    'http://mywebsite.com/hello.html?id=100&status=active',
                );
                ```
            -   **Output:**
                ```javascript
                // URL object created
                ```

        -   Accessing URL components:
            -   ```javascript
                console.log(myUrl.href); // Serialized URL
                console.log(myUrl.toString()); // Serialized URL
                console.log(myUrl.host); // Host (root domain)
                console.log(myUrl.hostname); // Hostname (does not get port)
                console.log(myUrl.pathname); // Pathname
                console.log(myUrl.search); // Serialized query
                console.log(myUrl.searchParams); // Params object
                ```
