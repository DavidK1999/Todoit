


$(() => {
    const $addTodoButton = $('.addTodo');
    const $toggle = $('.toggle');
    const $description = $('.description');
    const text = $description.text();
    const $todoDiv = $('.todos');

    let path = window.location.pathname; 
    let user = path.slice(8, path.length);
    let date = new Date();

    $addTodoButton.on('click', (e) =>{
        
        const $todo = $(`
        <form action="" method="POST">
        <input type="text" name="description" placeholder="Description">
        <input type="text" name="dateCreated" value=${date}>
        <input class="hidden" type="text" name="user" value="${user}">
                <div class="todoHandler">
                    <button class="btn btn-primary btn-sm" type="submit">Add</button>
                    <a href="#">Cancel</a>
                </div>
            </form>
        `);
        $todoDiv.append($todo);
    });

    $toggle.on('click', (e) => {
        console.log($(e.target).parent());
        console.log($(e.target));
        $(e.target).parent().toggleClass('edit').toggleClass('save');
        if($(e.target).parent().hasClass('save')) {
            $(e.target).parent().parent().find('.hiddenForm').toggleClass('hiddenForm').toggleClass('shownForm');
            $(e.target).parent().parent().children('span').hide();
            $(e.target).parent().parent().children('div').toggleClass('hide');
        } else {
            $toggle.html(`<i class="fas fa-edit"></i>`);
        }
    });
});





