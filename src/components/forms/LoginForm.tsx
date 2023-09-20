export const LoginForm = () => {
  return (
    <div className="shadow-sm p-5" style={{width: "400px"}}>
      <form>
        <fieldset>
          <legend>Inicie sesión</legend>
          <div className="mt-3 mb-3">
            <label htmlFor="username" className="form-label">Email</label>
            <input type="text" className="form-control" name="username" id="username" placeholder="pedroperez@micompañia.com.ve" />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control"  name="password" id="password" />
          </div>  
          <div className="d-flex flex-row justify-content-end w-100">
            <input type="submit" className="btn btn-primary"  value="Entrar" />
          </div>
        </fieldset>
      </form>
    </div>
  )
}
