## Variable Declaration / Deklarasi Variable

1. Deklarasi type dan value pada single statement  
    ```tsx
    // Syntax
    var [identifier] : [type-annotation] = value;

    // Contoh
    var age: number = 14;
    var name: string = "dimar";
    ```

2. Deklarasi type tanpa value
    ```tsx
    // Syntax
    var [identifier] : [type-annotation];

    // Contoh
    var name: string;
    ```

3. Deklarasi value tanpa type
    ```tsx
    // Syntax
    var [identifier] = value;

    // Contoh
    var name = "dimar"
    ```

4. Deklarasi tanpa value dan type, jadinya undefined
    ```tsx
    // Syntax
    var [identifier];

    // Contoh
    var name;
    ```