$(() => {


    let url = "/books";
    let data = "";
    let type = "GET";
    let dataType = "json";
    let contentType = "";
    let thisE = "";

    const useAjax = function (url, data, method, contentType, dataType, ajaxFunction, thisE) {
        $.ajax({
            url: url,
            dataType: dataType,
            'contentType': contentType,
            method: method,
            data: data
        })
            .done(result => ajaxFunction(result))
    };

    const getFunction = function (result) {

        result.forEach((e, i) => {

            //creating & inserting element containing book title to table
            const tableBody = document.getElementById("books-table");
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            th.classList.add("has-text-light");
            tr.classList.add("added");
            tr.classList.add("has-text-light");
            th.innerHTML = i + 1;
            const td = document.createElement("td");
            td.innerHTML = e.title;

            const td2 = document.createElement("td");
            const span1 = document.createElement("span");
            const span2 = document.createElement("span");

            const button1 = document.createElement("button");
            button1.classList.add("button");
            button1.classList.add("is-small");
            button1.classList.add("is-light");
            button1.classList.add("has-background-grey-darker");
            button1.classList.add("has-text-light");
            button1.setAttribute("title", "Delete " + td.innerHTML);
            button1.innerHTML = "Delete";

            span1.appendChild(button1);
            span2.appendChild(span1);
            td2.appendChild(span1);

            tr.appendChild(th);
            tr.appendChild(td);
            tr.appendChild(td2);
            tr.setAttribute("title", "Click for details");

            tableBody.appendChild(tr);

            //inserting hidden tr with book id
            const idTr = $("<tr>");
            idTr.html(e.id);
            idTr.hide();
            $(tableBody).append(idTr);
        })
    };

    const detailsFunction = function (result) {

        //creating keys array
        var keys = [];
        for (var k in result) keys.push(k);
        keys.shift();
        keys.splice(1, 1);
        //console.log(keys);

        //checking if book title has been selected
        if ($(thisE.target).parent().hasClass("opened")) {

            let temp = idTr;

            //creating & inserting book details elements after book title element
            keys.forEach(key => {

                const tr1 = $("<tr>");
                const th1 = $("<th>");
                const td1 = $("<td>");
                const td2 = $("<td>");

                //displaying the legend of book details from the capital letter
                capitalizedKey = capitalize(key);

                th1.html(capitalizedKey + ":");
                td1.html(result[key]);

                tr1.append(th1);
                tr1.append(td1);
                tr1.append(td2);
                tr1.addClass("slid-element");

                temp.after(tr1);
                temp = temp.next();

            });

            //displaying isbn in capital letters
            idTr.next().children().eq(0).html(idTr.next().children().eq(0).html().toUpperCase());
        } else {

            //removing book details elements after unselecting particular book title
            let temp2 = idTr;
            for (let i = 0; i < keys.length; i++) {
                temp2.next().remove();
            }
        }
    };

    const reloadFunction = function (data, textStatus, jQxhr) {
        location.reload();
    };


//BOOK DETAILS
    const tbody = $("tbody:not(.button)");
    tbody.on('click', function (e) {
        if ($(e.target).closest('tr').hasClass("added")) {

            $(e.target).closest('tr').children('td,th').toggleClass("selected");
            $(e.target).parent().toggleClass("opened");

            //element with book id (as reference)
            idTr = $(e.target).parent().next();

            url = `http://localhost:8282/books/${idTr.html()}`;
            data = "";
            type = "GET";
            contentType = "";
            dataType = "json";
            thisE = e;

            useAjax(url, data, method, contentType, dataType, detailsFunction, thisE);
        }
    });


    /*blocking showing details while clicking on delete button
    despite the fact that it lies on the tr element*/
    tbody.on('click', 'button:last-child', function (e) {
        e.stopPropagation();
    });

//Book list double flash after clicking "Book list" link in header
    $("nav").children().eq(0).find("a").on('click', function (e) {

        $("#second_anchor").find(".box").toggleClass("has-background-grey-dark");

        setTimeout(
            function () {
                $("#second_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 120);

        setTimeout(
            function () {
                $("#second_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 240);

        setTimeout(
            function () {
                $("#second_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 360);
    });

//Add book form double flash after clicking "Add book" link in header
    $("nav").children().eq(1).find("a").on('click', function (e) {

        $("#first_anchor").find(".box").toggleClass("has-background-grey-dark");

        setTimeout(
            function () {
                $("#first_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 120);

        setTimeout(
            function () {
                $("#first_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 240);

        setTimeout(
            function () {
                $("#first_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 360);
    });

//Github account link double flash after clicking "Contact" link in header
    $("nav").children().eq(4).find("a").on('click', function (e) {

        $("#third_anchor").find(".box").toggleClass("has-background-grey-dark");

        setTimeout(
            function () {
                $("#third_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 120);

        setTimeout(
            function () {
                $("#third_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 240);

        setTimeout(
            function () {
                $("#third_anchor").find(".box").toggleClass("has-background-grey-dark");
            }, 360);
    });


//POST
    $("#first_anchor").find("button").on("click", function (e) {

        e.preventDefault(); // avoid to execute the actual submit of the form.

        inputs = $("#first_anchor").find("input");
        select = $("#first_anchor").find("select");

        var title = inputs.eq(0).val();
        var author = inputs.eq(1).val();
        var publisher = inputs.eq(2).val();
        var isbn = inputs.eq(3).val();
        var bookType = select.val();

        url = '/books/add';
        dataType = "json";
        contentType = 'application/json';
        method = "POST";
        var bookId = +$("table").children().eq($("table").children().length - 1).children().eq($("table").children().eq($("table").children().length - 1).children().length - 1).html() + 1;
        data = JSON.stringify({id: bookId, isbn: isbn, title: title, author: author, publisher: publisher, type: type});

        useAjax(url, data, method, contentType, dataType, reloadFunction, "");

        location.reload();

    });

    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        }
        return s.charAt(0).toUpperCase() + s.slice(1)
    };

//DELETE
    tbody.on("click", 'button', function (e) {
        e.preventDefault();
        let deleteId = $(e.target).closest("tr").next().html();

        console.log(deleteId);

        url = `/books/delete/${deleteId}`;
        method = 'delete';

        useAjax(url, "", method, "", "", reloadFunction, "");

    });



    url = "/books";
    data = "";
    method = "GET";
    dataType = "json";
    contentType = "";
    thisE = "";


    useAjax(url, data, method, contentType, dataType, getFunction, thisE);
});
