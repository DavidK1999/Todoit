


$(() => {
    const $addTodoButton = $('.addTodo');
    const $toggle = $('.toggle');
    const $description = $('.description');
    const text = $description.text();
    const $todoDiv = $('.todos');

    let path = window.location.pathname; 
    let user = path.slice(8, path.length);
    let date = new Date();

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    $addTodoButton.on('click', (e) =>{
        
        const $todo = $(`
        <form class ="todo-creator" action="" method="POST">
        <input type="text" name="description" placeholder="Description">
        <input type="text" name="dateCreated" value="${months[new Date().getMonth()]} ${new Date().getDay()}" readonly>
        <input class="hidden" type="text" name="user" value="${user}">
                <div class="todoHandler">
                    <button type="submit">Add</button>
                    <button type="button"><a href="#">Cancel</a></button>
                </div>
            </form>
        `);
        $todoDiv.append($todo);
    });

    // $toggle.on('click', (e) => {
    //     $(e.target).parent().toggleClass('edit').toggleClass('save');
    //     if($(e.target).parent().hasClass('save')) {
    //         $(e.target).parent().parent().find('.hiddenForm').toggleClass('hiddenForm').toggleClass('shownForm');
    //         $(e.target).parent().parent().children('span').hide();
    //         $(e.target).parent().parent().children('strong').hide();
    //     } else {
    //         $toggle.html(`<i class="fas fa-pencil-alt"></i>`);
    //     }
    // });

    $('.toggle').on('click', (e) => {
        if($(e.target).text() === "Save") {
            $(e.target).text('Edit');
        } else {
            $(e.target).text('Save');
            $(e.target).attr('type', 'submit');
            console.log($(e.target).parent().parent().find('.hiddenForm')[0]);
            $(e.target).parent().parent().find('.hiddenForm').toggleClass('hiddenForm').toggleClass('shownForm');
        }
    });
});





