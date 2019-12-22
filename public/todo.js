console

$(() => {
    const $addTodoButton = $('.addTodo');
    const $todoDiv = $('.todos');

    $addTodoButton.on('click', () =>{
        const $todo = $(`
            <form>
                <div>
                <input type="text" name="description" placeholder="Description">
                </div>
                <div>
                <input type="text name="date" placeholder = "Date">
                </div>
            </form>
        `)
        $todoDiv.append($todo);
    });;


});