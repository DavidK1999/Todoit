


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
        $toggle.toggleClass('edit').toggleClass('save');
        if($toggle.hasClass('save')) {
            $('.hiddenForm').toggleClass('hiddenForm').toggleClass('shownForm');
        } else {
            $toggle.html(`<i class="fas fa-edit"></i>`);
        }
    });






});





