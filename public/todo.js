$(() => {
    const $addTodoButton = $('.addTodo');
    const $todoDiv = $('.todos');

    $addTodoButton.on('click', (e) =>{
        let path = window.location.pathname; 
        let user = path.slice(8, path.length);
        let date = new Date();
        
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
});





