const questionData = {
  questions: [
    {
      question: "1. Create a PHP page for comparing three integers and print the largest number.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Find Largest Number&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Find the Largest of Three Numbers&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter First Number: &lt;input type="number" name="num1" required&gt;&lt;br&gt;&lt;br&gt;
        Enter Second Number: &lt;input type="number" name="num2" required&gt;&lt;br&gt;&lt;br&gt;
        Enter Third Number: &lt;input type="number" name="num3" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Find Largest"&gt;
    &lt;/form&gt;

    &lt;?php
    if(isset($_POST['submit'])) {
        // Get the three numbers from the form
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        $num3 = $_POST['num3'];
        
        // Find the largest number
        $largest = $num1;
        
        if($num2 > $largest) {
            $largest = $num2;
        }
        
        if($num3 > $largest) {
            $largest = $num3;
        }
        
        // Display the result
        echo "&lt;h3&gt;Result:&lt;/h3&gt;";
        echo "The largest number among $num1, $num2, and $num3 is: &lt;strong&gt;$largest&lt;/strong&gt;";
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter:
First Number: 25
Second Number: 45
Third Number: 15

Result:
The largest number among 25, 45, and 15 is: 45
            </pre>
        </div>
      `,
    },
    {
      question: "2. WAP to calculate the factorial of a number (non-negative integer).",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Factorial Calculator&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Factorial Calculator&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter a non-negative integer: &lt;input type="number" name="number" min="0" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Calculate Factorial"&gt;
    &lt;/form&gt;

    &lt;?php
    function factorial($n) {
        if ($n == 0 || $n == 1) {
            return 1;
        } else {
            return $n * factorial($n - 1);
        }
    }

    if(isset($_POST['submit'])) {
        $number = $_POST['number'];
        
        // Validate input
        if($number < 0) {
            echo "&lt;p&gt;Please enter a non-negative integer.&lt;/p&gt;";
        } else {
            $result = factorial($number);
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "Factorial of $number is: &lt;strong&gt;$result&lt;/strong&gt;";
        }
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: 5

Result:
Factorial of 5 is: 120
            </pre>
        </div>
      `,
    },
    {
      question: "3. WAP to check whether the given number is prime or not.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Prime Number Checker&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Prime Number Checker&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter a number: &lt;input type="number" name="number" min="1" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Check Prime"&gt;
    &lt;/form&gt;

    &lt;?php
    function isPrime($num) {
        // 1 is not a prime number
        if($num == 1) {
            return false;
        }
        
        // 2 and 3 are prime numbers
        if($num == 2 || $num == 3) {
            return true;
        }
        
        // Check if number is divisible by 2
        if($num % 2 == 0) {
            return false;
        }
        
        // Check divisibility from 3 to square root of number
        $sqrt = sqrt($num);
        for($i = 3; $i <= $sqrt; $i += 2) {
            if($num % $i == 0) {
                return false;
            }
        }
        
        return true;
    }

    if(isset($_POST['submit'])) {
        $number = $_POST['number'];
        
        if(isPrime($number)) {
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "$number is a prime number.";
        } else {
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "$number is not a prime number.";
        }
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: 17

Result:
17 is a prime number.

When you enter: 15

Result:
15 is not a prime number.
            </pre>
        </div>
      `,
    },
    {
      question: "4. Create a PHP page which accepts string from user. After submission that page displays the reverse of provided string.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;String Reversal&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;String Reversal Tool&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter a string: &lt;input type="text" name="input_string" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Reverse String"&gt;
    &lt;/form&gt;

    &lt;?php
    if(isset($_POST['submit'])) {
        $input_string = $_POST['input_string'];
        
        // Reverse the string
        $reversed_string = strrev($input_string);
        
        echo "&lt;h3&gt;Result:&lt;/h3&gt;";
        echo "Original string: &lt;strong&gt;$input_string&lt;/strong&gt;&lt;br&gt;";
        echo "Reversed string: &lt;strong&gt;$reversed_string&lt;/strong&gt;";
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: Hello World

Result:
Original string: Hello World
Reversed string: dlroW olleH
            </pre>
        </div>
      `,
    },
    {
      question: "5. Write a PHP function that checks if a string is all lower case.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Lowercase Checker&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Lowercase String Checker&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter a string: &lt;input type="text" name="input_string" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Check Lowercase"&gt;
    &lt;/form&gt;

    &lt;?php
    function isAllLowercase($str) {
        // Compare the original string with its lowercase version
        return $str === strtolower($str);
    }

    if(isset($_POST['submit'])) {
        $input_string = $_POST['input_string'];
        
        if(isAllLowercase($input_string)) {
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "The string \"$input_string\" is all lowercase.";
        } else {
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "The string \"$input_string\" is NOT all lowercase.";
        }
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: hello world

Result:
The string "hello world" is all lowercase.

When you enter: Hello World

Result:
The string "Hello World" is NOT all lowercase.
            </pre>
        </div>
      `,
    },
    {
      question: "6. Write a PHP script that checks whether a passed string is palindrome or not?",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Palindrome Checker&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Palindrome Checker&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter a string: &lt;input type="text" name="input_string" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Check Palindrome"&gt;
    &lt;/form&gt;

    &lt;?php
    function isPalindrome($str) {
        // Remove spaces and convert to lowercase
        $str = strtolower(str_replace(' ', '', $str));
        
        // Compare the string with its reverse
        return $str === strrev($str);
    }

    if(isset($_POST['submit'])) {
        $input_string = $_POST['input_string'];
        
        if(isPalindrome($input_string)) {
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "\"$input_string\" is a palindrome.";
        } else {
            echo "&lt;h3&gt;Result:&lt;/h3&gt;";
            echo "\"$input_string\" is NOT a palindrome.";
        }
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: radar

Result:
"radar" is a palindrome.

When you enter: A man a plan a canal Panama

Result:
"A man a plan a canal Panama" is a palindrome.

When you enter: hello

Result:
"hello" is NOT a palindrome.
            </pre>
        </div>
      `,
    },
    {
      question: "7. WAP to sort elements of an array in ascending order.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Array Sorting&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Sort Array in Ascending Order&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter numbers (comma separated): &lt;input type="text" name="numbers" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Sort Array"&gt;
    &lt;/form&gt;

    &lt;?php
    if(isset($_POST['submit'])) {
        // Get the input string and convert to array
        $input = $_POST['numbers'];
        $numbers = array_map('trim', explode(',', $input));
        
        // Convert string values to integers
        $numbers = array_map('intval', $numbers);
        
        // Original array
        echo "&lt;h3&gt;Result:&lt;/h3&gt;";
        echo "Original Array: ";
        echo implode(", ", $numbers);
        
        // Sort the array
        sort($numbers);
        
        // Display sorted array
        echo "&lt;br&gt;&lt;br&gt;Sorted Array (Ascending): ";
        echo implode(", ", $numbers);
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: 45, 12, 78, 23, 56, 9

Result:
Original Array: 45, 12, 78, 23, 56, 9

Sorted Array (Ascending): 9, 12, 23, 45, 56, 78
            </pre>
        </div>
      `,
    },
    {
      question: "8. Write a PHP script that finds out the sum of first n terms odd numbers.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Sum of Odd Numbers&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Sum of First n Odd Numbers&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter the value of n: &lt;input type="number" name="n" min="1" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Calculate Sum"&gt;
    &lt;/form&gt;

    &lt;?php
    function sumOfOddNumbers($n) {
        $sum = 0;
        $oddNumbers = [];
        
        for($i = 1, $count = 0; $count < $n; $i += 2, $count++) {
            $sum += $i;
            $oddNumbers[] = $i;
        }
        
        return ['sum' => $sum, 'numbers' => $oddNumbers];
    }

    if(isset($_POST['submit'])) {
        $n = $_POST['n'];
        
        $result = sumOfOddNumbers($n);
        
        echo "&lt;h3&gt;Result:&lt;/h3&gt;";
        echo "First $n odd numbers: " . implode(", ", $result['numbers']) . "&lt;br&gt;";
        echo "Sum of first $n odd numbers: &lt;strong&gt;" . $result['sum'] . "&lt;/strong&gt;";
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: 5

Result:
First 5 odd numbers: 1, 3, 5, 7, 9
Sum of first 5 odd numbers: 25
            </pre>
        </div>
      `,
    },
    {
      question: "9. WAP to print first n terms even numbers.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Even Numbers&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;First n Even Numbers&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter the value of n: &lt;input type="number" name="n" min="1" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Generate Even Numbers"&gt;
    &lt;/form&gt;

    &lt;?php
    function generateEvenNumbers($n) {
        $evenNumbers = [];
        
        for($i = 0, $count = 0; $count < $n; $i += 2, $count++) {
            $evenNumbers[] = $i;
        }
        
        return $evenNumbers;
    }

    if(isset($_POST['submit'])) {
        $n = $_POST['n'];
        
        $evenNumbers = generateEvenNumbers($n);
        
        echo "&lt;h3&gt;Result:&lt;/h3&gt;";
        echo "First $n even numbers: " . implode(", ", $evenNumbers);
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: 6

Result:
First 6 even numbers: 0, 2, 4, 6, 8, 10
            </pre>
        </div>
      `,
    },
    {
      question: "10. Write a simple PHP program to check that emails are valid.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Email Validator&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Email Validator&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Enter an email address: &lt;input type="text" name="email" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="submit" value="Validate Email"&gt;
    &lt;/form&gt;

    &lt;?php
    function validateEmail($email) {
        // Using filter_var with FILTER_VALIDATE_EMAIL
        if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return true;
        }
        return false;
    }

    if(isset($_POST['submit'])) {
        $email = $_POST['email'];
        
        echo "&lt;h3&gt;Result:&lt;/h3&gt;";
        
        if(validateEmail($email)) {
            echo "\"$email\" is a valid email address.";
        } else {
            echo "\"$email\" is NOT a valid email address.";
        }
    }
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter: user@example.com

Result:
"user@example.com" is a valid email address.

When you enter: invalid-email

Result:
"invalid-email" is NOT a valid email address.
            </pre>
        </div>
      `,
    },
    {
      question: "11. How to put Comments in PHP?",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;PHP Comments&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;PHP Comments Examples&lt;/h2&gt;

    &lt;?php
    // This is a single-line comment in PHP
    
    # This is also a single-line comment in PHP
    
    /*
     * This is a multi-line comment in PHP
     * You can write multiple lines of comments
     * within this block
     */
    
    // Comments are ignored by the PHP interpreter
    echo "This text will be displayed."; // This comment is after code
    
    # echo "This text will NOT be displayed because it's commented out.";
    
    /*
    echo "This multi-line code block";
    echo "will NOT be executed";
    echo "because it's inside a comment block";
    */
    
    // Comments are useful for:
    // 1. Explaining what your code does
    // 2. Temporarily disabling code for testing
    // 3. Adding reminders or notes for future reference
    
    echo "&lt;br&gt;&lt;br&gt;There are three types of comments in PHP:";
    echo "&lt;br&gt;1. Single-line comments using //";
    echo "&lt;br&gt;2. Single-line comments using #";
    echo "&lt;br&gt;3. Multi-line comments using /* */";
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
This text will be displayed.

There are three types of comments in PHP:
1. Single-line comments using //
2. Single-line comments using #
3. Multi-line comments using /* */
            </pre>
        </div>
      `,
    },
    {
      question: "12. How to declare String Variables in PHP?",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;PHP String Variables&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Declaring String Variables in PHP&lt;/h2&gt;

    &lt;?php
    // Method 1: Using single quotes
    $string1 = 'This is a string using single quotes';
    
    // Method 2: Using double quotes
    $string2 = "This is a string using double quotes";
    
    // Method 3: Using heredoc syntax
    $string3 = <<<EOT
This is a string using heredoc syntax.
It can span multiple lines.
Variables like $string1 are parsed.
EOT;
    
    // Method 4: Using nowdoc syntax (PHP 5.3.0+)
    $string4 = <<<'EOD'
This is a string using nowdoc syntax.
It can span multiple lines.
Variables like $string1 are NOT parsed.
EOD;
    
    // Displaying the strings
    echo "&lt;h3&gt;Different ways to declare strings:&lt;/h3&gt;";
    
    echo "&lt;strong&gt;1. Using single quotes:&lt;/strong&gt;&lt;br&gt;";
    echo $string1;
    echo "&lt;br&gt;&lt;br&gt;";
    
    echo "&lt;strong&gt;2. Using double quotes:&lt;/strong&gt;&lt;br&gt;";
    echo $string2;
    echo "&lt;br&gt;&lt;br&gt;";
    
    echo "&lt;strong&gt;3. Using heredoc syntax:&lt;/strong&gt;&lt;br&gt;";
    echo $string3;
    echo "&lt;br&gt;&lt;br&gt;";
    
    echo "&lt;strong&gt;4. Using nowdoc syntax:&lt;/strong&gt;&lt;br&gt;";
    echo $string4;
    echo "&lt;br&gt;&lt;br&gt;";
    
    // Differences between single and double quotes
    $name = "John";
    
    echo "&lt;h3&gt;Differences between single and double quotes:&lt;/h3&gt;";
    
    echo "&lt;strong&gt;Single quotes don't parse variables:&lt;/strong&gt;&lt;br&gt;";
    echo 'Hello $name'; // Outputs: Hello $name
    echo "&lt;br&gt;&lt;br&gt;";
    
    echo "&lt;strong&gt;Double quotes parse variables:&lt;/strong&gt;&lt;br&gt;";
    echo "Hello $name"; // Outputs: Hello John
    echo "&lt;br&gt;&lt;br&gt;";
    
    echo "&lt;strong&gt;Escaping characters in single quotes:&lt;/strong&gt;&lt;br&gt;";
    echo 'It\'s a beautiful day!'; // Only \ and ' need to be escaped
    echo "&lt;br&gt;&lt;br&gt;";
    
    echo "&lt;strong&gt;Escaping characters in double quotes:&lt;/strong&gt;&lt;br&gt;";
    echo "She said, \"Hello!\""; // More characters need to be escaped
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Different ways to declare strings:

1. Using single quotes:
This is a string using single quotes

2. Using double quotes:
This is a string using double quotes

3. Using heredoc syntax:
This is a string using heredoc syntax.
It can span multiple lines.
Variables like This is a string using single quotes are parsed.

4. Using nowdoc syntax:
This is a string using nowdoc syntax.
It can span multiple lines.
Variables like $string1 are NOT parsed.

Differences between single and double quotes:

Single quotes don't parse variables:
Hello $name

Double quotes parse variables:
Hello John

Escaping characters in single quotes:
It's a beautiful day!

Escaping characters in double quotes:
She said, "Hello!"
            </pre>
        </div>
      `,
    },
    {
      question: "13. Write use of the Concatenation Operator.",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;PHP Concatenation Operator&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;PHP Concatenation Operator Examples&lt;/h2&gt;

    &lt;?php
    // Basic string concatenation using the dot (.) operator
    $firstName = "John";
    $lastName = "Doe";
    
    // Concatenating two strings
    $fullName = $firstName . " " . $lastName;
    
    echo "&lt;h3&gt;Basic Concatenation:&lt;/h3&gt;";
    echo "First Name: $firstName&lt;br&gt;";
    echo "Last Name: $lastName&lt;br&gt;";
    echo "Full Name: $fullName&lt;br&gt;&lt;br&gt;";
    
    // Concatenation with different data types
    $age = 30;
    $height = 6.2;
    $isStudent = true;
    
    echo "&lt;h3&gt;Concatenating Different Data Types:&lt;/h3&gt;";
    echo "Name: " . $fullName . "&lt;br&gt;";
    echo "Age: " . $age . "&lt;br&gt;";
    echo "Height: " . $height . " feet&lt;br&gt;";
    echo "Is Student: " . ($isStudent ? "Yes" : "No") . "&lt;br&gt;&lt;br&gt;";
    
    // Concatenation assignment operator (.=)
    $message = "Hello";
    $message .= ", ";
    $message .= $firstName;
    $message .= "!";
    
    echo "&lt;h3&gt;Concatenation Assignment Operator (.=):&lt;/h3&gt;";
    echo "Message: $message&lt;br&gt;&lt;br&gt;";
    
    // Concatenation in a loop
    $fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
    $fruitList = "";
    
    foreach($fruits as $index => $fruit) {
        if($index > 0) {
            $fruitList .= ", ";
        }
        $fruitList .= $fruit;
    }
    
    echo "&lt;h3&gt;Concatenation in a Loop:&lt;/h3&gt;";
    echo "Fruit List: $fruitList&lt;br&gt;&lt;br&gt;";
    
    // Concatenation vs. Variable interpolation
    echo "&lt;h3&gt;Concatenation vs. Variable Interpolation:&lt;/h3&gt;";
    
    // Using concatenation
    echo "Hello, " . $firstName . "! You are " . $age . " years old.&lt;br&gt;";
    
    // Using variable interpolation (double quotes)
    echo "Hello, $firstName! You are $age years old.&lt;br&gt;";
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
Basic Concatenation:
First Name: John
Last Name: Doe
Full Name: John Doe

Concatenating Different Data Types:
Name: John Doe
Age: 30
Height: 6.2 feet
Is Student: Yes

Concatenation Assignment Operator (.=):
Message: Hello, John!

Concatenation in a Loop:
Fruit List: Apple, Banana, Orange, Mango, Grapes

Concatenation vs. Variable Interpolation:
Hello, John! You are 30 years old.
Hello, John! You are 30 years old.
            </pre>
        </div>
      `,
    },
    {
      question: "14. How to Create a Cookie?",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;PHP Cookies&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Creating Cookies in PHP&lt;/h2&gt;
    
    &lt;form method="post" action=""&gt;
        Cookie Name: &lt;input type="text" name="cookie_name" required&gt;&lt;br&gt;&lt;br&gt;
        Cookie Value: &lt;input type="text" name="cookie_value" required&gt;&lt;br&gt;&lt;br&gt;
        Expiry Time (in seconds): &lt;input type="number" name="expiry" value="3600"&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="create_cookie" value="Create Cookie"&gt;
    &lt;/form&gt;

    &lt;?php
    // Function to create a cookie
    function createCookie($name, $value, $expiry = 3600, $path = "/") {
        // Set the cookie
        $result = setcookie($name, $value, time() + $expiry, $path);
        
        return $result;
    }

    // Check if form is submitted
    if(isset($_POST['create_cookie'])) {
        $cookie_name = $_POST['cookie_name'];
        $cookie_value = $_POST['cookie_value'];
        $expiry = $_POST['expiry'];
        
        // Create the cookie
        if(createCookie($cookie_name, $cookie_value, $expiry)) {
            echo "&lt;h3&gt;Cookie Created Successfully!&lt;/h3&gt;";
            echo "Cookie Name: $cookie_name&lt;br&gt;";
            echo "Cookie Value: $cookie_value&lt;br&gt;";
            echo "Expiry Time: $expiry seconds&lt;br&gt;";
            echo "&lt;p&gt;Note: The cookie will be available on the next page load.&lt;/p&gt;";
        } else {
            echo "&lt;h3&gt;Failed to create cookie!&lt;/h3&gt;";
            echo "&lt;p&gt;Cookies must be set before any output is sent to the browser.&lt;/p&gt;";
        }
    }

    // Display all current cookies
    echo "&lt;h3&gt;Current Cookies:&lt;/h3&gt;";
    
    if(count($_COOKIE) > 0) {
        echo "&lt;ul&gt;";
        foreach($_COOKIE as $name => $value) {
            echo "&lt;li&gt;&lt;strong&gt;$name&lt;/strong&gt;: $value&lt;/li&gt;";
        }
        echo "&lt;/ul&gt;";
    } else {
        echo "&lt;p&gt;No cookies found.&lt;/p&gt;";
    }

    // Additional information about cookies
    echo "&lt;h3&gt;About Cookies in PHP:&lt;/h3&gt;";
    echo "&lt;ul&gt;";
    echo "&lt;li&gt;Cookies must be created before any output is sent to the browser.&lt;/li&gt;";
    echo "&lt;li&gt;The setcookie() function sets a cookie in the HTTP header.&lt;/li&gt;";
    echo "&lt;li&gt;Syntax: setcookie(name, value, expire, path, domain, secure, httponly)&lt;/li&gt;";
    echo "&lt;li&gt;Only the name parameter is required. All other parameters are optional.&lt;/li&gt;";
    echo "&lt;li&gt;Cookies are stored on the client's computer and can be accessed on subsequent visits.&lt;/li&gt;";
    echo "&lt;/ul&gt;";
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you enter:
Cookie Name: user_name
Cookie Value: John
Expiry Time: 3600

Cookie Created Successfully!
Cookie Name: user_name
Cookie Value: John
Expiry Time: 3600 seconds

Note: The cookie will be available on the next page load.

Current Cookies:
• user_name: John
(Note: This will only show after page reload)

About Cookies in PHP:
• Cookies must be created before any output is sent to the browser.
• The setcookie() function sets a cookie in the HTTP header.
• Syntax: setcookie(name, value, expire, path, domain, secure, httponly)
• Only the name parameter is required. All other parameters are optional.
• Cookies are stored on the client's computer and can be accessed on subsequent visits.
            </pre>
        </div>
      `,
    },
    {
      question: "15. How to Delete a Cookie?",
      solution: `
        <div class="code-container bg-gray-600 p-4 rounded-md shadow-md">
            <button class="copy-btn" onclick="copyCode(this)">Copy Code</button>
            <pre><code class="language-php">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Delete PHP Cookies&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Creating and Deleting Cookies in PHP&lt;/h2&gt;
    
    &lt;!-- Form to create a cookie --&gt;
    &lt;h3&gt;Create a Cookie&lt;/h3&gt;
    &lt;form method="post" action=""&gt;
        Cookie Name: &lt;input type="text" name="cookie_name" required&gt;&lt;br&gt;&lt;br&gt;
        Cookie Value: &lt;input type="text" name="cookie_value" required&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="create_cookie" value="Create Cookie"&gt;
    &lt;/form&gt;
    
    &lt;hr&gt;
    
    &lt;!-- Form to delete a cookie --&gt;
    &lt;h3&gt;Delete a Cookie&lt;/h3&gt;
    &lt;form method="post" action=""&gt;
        &lt;select name="cookie_to_delete"&gt;
            &lt;option value=""&gt;Select a cookie to delete&lt;/option&gt;
            &lt;?php
            // List all available cookies in the dropdown
            foreach($_COOKIE as $name => $value) {
                echo "&lt;option value=\"$name\"&gt;$name&lt;/option&gt;";
            }
            ?&gt;
        &lt;/select&gt;&lt;br&gt;&lt;br&gt;
        &lt;input type="submit" name="delete_cookie" value="Delete Cookie"&gt;
    &lt;/form&gt;

    &lt;?php
    // Function to create a cookie
    function createCookie($name, $value, $expiry = 3600, $path = "/") {
        return setcookie($name, $value, time() + $expiry, $path);
    }
    
    // Function to delete a cookie
    function deleteCookie($name, $path = "/") {
        // To delete a cookie, set its expiration time to a past time
        return setcookie($name, "", time() - 3600, $path);
    }

    // Check if create cookie form is submitted
    if(isset($_POST['create_cookie'])) {
        $cookie_name = $_POST['cookie_name'];
        $cookie_value = $_POST['cookie_value'];
        
        // Create the cookie
        if(createCookie($cookie_name, $cookie_value)) {
            echo "&lt;div style='color: green; margin-top: 10px;'&gt;";
            echo "Cookie '$cookie_name' created successfully! Refresh the page to see it in the list.";
            echo "&lt;/div&gt;";
        } else {
            echo "&lt;div style='color: red; margin-top: 10px;'&gt;";
            echo "Failed to create cookie!";
            echo "&lt;/div&gt;";
        }
    }
    
    // Check if delete cookie form is submitted
    if(isset($_POST['delete_cookie'])) {
        $cookie_to_delete = $_POST['cookie_to_delete'];
        
        if(!empty($cookie_to_delete)) {
            // Delete the cookie
            if(deleteCookie($cookie_to_delete)) {
                echo "&lt;div style='color: green; margin-top: 10px;'&gt;";
                echo "Cookie '$cookie_to_delete' deleted successfully! Refresh the page to see the updated list.";
                echo "&lt;/div&gt;";
            } else {
                echo "&lt;div style='color: red; margin-top: 10px;'&gt;";
                echo "Failed to delete cookie!";
                echo "&lt;/div&gt;";
            }
        } else {
            echo "&lt;div style='color: red; margin-top: 10px;'&gt;";
            echo "Please select a cookie to delete.";
            echo "&lt;/div&gt;";
        }
    }

    // Display all current cookies
    echo "&lt;h3&gt;Current Cookies:&lt;/h3&gt;";
    
    if(count($_COOKIE) > 0) {
        echo "&lt;ul&gt;";
        foreach($_COOKIE as $name => $value) {
            echo "&lt;li&gt;&lt;strong&gt;$name&lt;/strong&gt;: $value&lt;/li&gt;";
        }
        echo "&lt;/ul&gt;";
    } else {
        echo "&lt;p&gt;No cookies found.&lt;/p&gt;";
    }

    // Information about deleting cookies
    echo "&lt;h3&gt;How to Delete Cookies in PHP:&lt;/h3&gt;";
    echo "&lt;ol&gt;";
    echo "&lt;li&gt;To delete a cookie, use the setcookie() function with the same name and path parameters.&lt;/li&gt;";
    echo "&lt;li&gt;Set the expiration time to a time in the past (e.g., time() - 3600).&lt;/li&gt;";
    echo "&lt;li&gt;Set the cookie value to an empty string.&lt;/li&gt;";
    echo "&lt;li&gt;Example: setcookie('cookie_name', '', time() - 3600, '/');&lt;/li&gt;";
    echo "&lt;li&gt;The cookie will be deleted from the client's browser.&lt;/li&gt;";
    echo "&lt;li&gt;Note: The cookie will still be available in the $_COOKIE array for the current request.&lt;/li&gt;";
    echo "&lt;/ol&gt;";
    ?&gt;
&lt;/body&gt;
&lt;/html&gt;
            </code></pre>
        </div>
        <div class="output-container bg-orange-200 p-4 rounded-md shadow-md mt-1">
            <h3 class="text-lg font-semibold">Expected Output:</h3>
            <pre>
When you create a cookie:
Cookie 'user_name' created successfully! Refresh the page to see it in the list.

Current Cookies:
• user_name: John

When you delete a cookie:
Cookie 'user_name' deleted successfully! Refresh the page to see the updated list.

After refresh:
Current Cookies:
No cookies found.

How to Delete Cookies in PHP:
1. To delete a cookie, use the setcookie() function with the same name and path parameters.
2. Set the expiration time to a time in the past (e.g., time() - 3600).
3. Set the cookie value to an empty string.
4. Example: setcookie('cookie_name', '', time() - 3600, '/');
5. The cookie will be deleted from the client's browser.
6. Note: The cookie will still be available in the $_COOKIE array for the current request.
            </pre>
        </div>
      `,
    }
  ]
};

// Vanilla JS implementation with loader
function renderQuestions() {
  const container = document.getElementById("questions-container");
  if (!container) {
    console.error('Element with ID "questions-container" not found.');
    return;
  }

  // Hide loader after questions are rendered
  const loader = document.getElementById("loader");
  
  questionData.questions.forEach((q) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("mb-6");
    questionElement.innerHTML = `
      <h2 class="text-lg font-semibold mb-2">${q.question}</h2>
      ${q.solution}
    `;
    container.appendChild(questionElement);
  });
  
  // Apply syntax highlighting
  if (typeof Prism !== 'undefined') {
    Prism.highlightAll();
  }
  
  // Hide loader after questions are rendered
  if (loader) {
    loader.style.display = "none";
  }
}

function copyCode(button) {
  const code = button.nextElementSibling.querySelector("code").innerText;
  navigator.clipboard
    .writeText(code)
    .then(() => {
      button.innerText = "Copied!"; // Change button text
      setTimeout(() => {
        button.innerText = "Copy Code"; // Reset after 2 seconds
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy code: ", err);
    });
}

// Create and show loader when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questions-container");
  if (container) {
    // Create loader element
    const loader = document.createElement("div");
    loader.id = "loader";
    loader.className = "flex justify-center items-center py-20";
    loader.innerHTML = `
      <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-900"></div>
      <p class="ml-4 text-lg font-medium text-blue-900">Loading ...</p>
    `;
    container.appendChild(loader);
    
    // Render questions after a small delay to ensure loader is visible
    setTimeout(renderQuestions, 800);
  }
});
