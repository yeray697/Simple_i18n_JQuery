# Simple i18n JQuery
### What is Simple i18n JQuery?
It is a JQuery library that get the user language and helps you to internationalizate your website just adding JSON files with translations and an attribute into HTML elements

### How do I use it?
You have to import JQuery (greater than v1.2.3) and Simple i18n JQuery library.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="js/internationalization.min.js"></script>
    
After that, you have to set an attribute to your HTML elements: data-translatekey="key".
"key" is an unique name to indicate what is the translation linked to that name
Example:

    <title data-translatekey="title">Title</title>
    ...
    <span data-translatekey="error"> error</span>
    
Now, you have to create translations files. Create a JSON file inside a directory, with the follow structure.

Example:
es.json (spanish)

    {
        "title":"Título",
        "error":"fallo"
    }
    
***Note: You have to name it with a two letters code for the country IN LOWER CASE. Find the country at https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
 
 Finally, you have to call translatePage(directory) when web loads
 
    <script type="text/javascript">
        $(document).ready(function () {
            translatePage("lang");
        });
    </script>
    
***Note: directory is the name of the folder where languages will be found.
If there is not a file from Italy, for example, text will not change, so the user will read the default text on the label

    <title data-translatekey="title">Title</title>
    <!-- This will output Title if the file does not exist -->
