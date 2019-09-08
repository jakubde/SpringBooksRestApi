<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html class="dark-grey-bckgrnd">
<head class="dark-grey-bckgrnd">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Books</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <link rel="stylesheet" href="static/css/style.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>
<body class="dark-grey-bckgrnd body-full">

<!--Header-->
<nav class="level dark-grey-bckgrnd upper-margin">
    <p class="level-item  has-text-info has-text-centered">
        <a class="blue-fnt has-text-primary link is-info" href="#second_anchor">Book list</a>
    </p>
    <p class="level-item has-text-centered">
        <a class="blue-fnt has-text-primary link is-info" href="#first_anchor">Add book</a>
    </p>
    <p class="level-item has-text-centered">
        <img src="static/images/logo_v2.png" style="height:90px;">
    </p>
    <p class="level-item has-text-centered">

        <!-- WARNING! HERE ARE THE INVISIBLE SIGNS -->
        <a class="blue-fnt link is-info">‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌ ‌‌‌ ‌‌‌ ‌ ‌‌‌ ‌ ‌‌ ‌‌</a>

    </p>
    <p class="level-item has-text-centered">
        <a class="blue-fnt has-text-primary link is-info" href="#third_anchor">Contact</a>
    </p>
</nav>

<!--Info-->
<section class="section ">
    <div class="margined ">
        <h1 class="title has-text-grey">
            Welcome!
        </h1>
        <p class="subtitle has-text-grey">
            Feel free to explore my first API project designed in accordance with REST principles that lets you perform
            main HTTP methods on books.
        </p>
    </div>
</section>

<!--Add book form-->
<div id="first_anchor" class=" margined">
    <div>
        <div class="box box-color has-background-dark ">
            <form action="http://localhost:8282/books/" method="POST" class="medium-table element-centered">
                <p class="big-title has-text-light">Add book</p>
                <div class="field">
                    <label class="label has-text-light">Title</label>
                    <div class="control ">
                        <input class="input has-text-light has-background-black-ter" type="text" value="Effective Java">
                    </div>
                </div>
                <div class="field">
                    <label class="label has-text-light">Author</label>
                    <div class="control ">
                        <input class="input has-text-light has-background-black-ter" type="text" value="Joshua Bloch">
                    </div>
                </div>

                <div class="field">
                    <label class="label has-text-light">Type</label>
                    <div class="control ">
                        <div class="select is-primary">
                            <select class="has-background-black-ter has-text-light">
                                <option>action and adventure</option>
                                <option>anthology</option>
                                <option>classic</option>
                                <option>comic and graphic novel</option>
                                <option>crime and detective</option>
                                <option>drama</option>
                                <option>fable</option>
                                <option>fairy tale</option>
                                <option>fan-fiction</option>
                                <option>fantasy</option>
                                <option>historical fiction</option>
                                <option>horror</option>
                                <option>humor</option>
                                <option>legend</option>
                                <option>magical realism</option>
                                <option>mystery</option>
                                <option>mythology</option>
                                <option selected="selected">programming</option>
                                <option>realistic fiction</option>
                                <option>romance</option>
                                <option>satire</option>
                                <option>science fiction (sci-fi)</option>
                                <option>short story</option>
                                <option>suspense/thriller</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label has-text-light">Publisher</label>
                    <div class="control ">
                        <input class="input has-text-light has-background-black-ter" type="text"
                               value="Pearson Education">
                    </div>
                </div>

                <div class="field">
                    <label class="label has-text-light">ISBN</label>
                    <div class="control ">
                        <input class="input has-text-light has-background-black-ter" type="text" value="9780134685991">
                    </div>
                </div>

                <br>
                <div class="field is-grouped">
                    <button class="button is-light has-background-black-ter has-text-light">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

<!--Books table-->
<div id="second_anchor" class="container margined">
    <div class=" element-centered">
        <div class="box box-color has-background-dark ">
            <p class="big-title has-text-light">Book list</p>
            <br>
            <table class="table element-centered medium-table has-background-black-ter">
                <thead>
                <tr id="thead">
                    <th class="legend-width has-text-light "><abbr title="Number">№</abbr></th>
                    <th class="has-text-light">Title</th>
                    <th class="legend-width has-text-light">Action</th>
                </tr>
                </thead>
                <tfoot>
                <tr id="tfoot">
                    <th class="has-text-light"><abbr title="Number">№</abbr></th>
                    <th class="has-text-light">Title</th>
                    <th class="has-text-light">Action</th>
                </tr>
                </tfoot>
                <tbody id="books-table">
                </tbody>
            </table>
        </div>
    </div>
</div>

<!--Github link-->
<div id="third_anchor" class="container margined">
    <div class=" element-centered ">
        <div class="box box-color has-background-dark">
            <div class="double-centered medium-table">
                <a class="big-title has-text-light" href="https://github.com/jakubde" title="Github">My github
                    account</a>
                <br>
                <a href="https://github.com/jakubde"><img src="static/images/GitHub-Mark-Light-64px.png" title="Github"
                                                          alt="Github logo"></a>
                <!--                <p class="has-text-light">My github account</p>-->

            </div>
        </div>
    </div>
</div>

<div class="dark-grey-bckgrnd double-centered">
    <a href="https://bulma.io">
        <img src="static/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">
    </a>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="static/js/app.js"></script>
</body>
</html>