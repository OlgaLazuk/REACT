export const Header = () => {
    return (
        <div className="mb-3 row">
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder=" ... "/>
            </div>
            <div class="btn-group col-2" role="group" aria-label="Third group">
                <button type="button" class="btn btn-primary"> + </button>
            </div>
        </div>
    )
}