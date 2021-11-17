export const Todoitem = () => {
    return(
<div class="card text-center">
    <div class="card-header">Личное дело
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <div class="card-body">
            <h5 class="card-title">Ф.И.О.</h5>
            <a href="#" class="btn btn-primary">Перейти в личное дело</a>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1"></label>
        </div>   
    </div>
</div>
    )
}