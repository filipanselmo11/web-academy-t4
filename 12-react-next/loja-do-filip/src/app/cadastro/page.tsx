"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface CadastroFormData {
  email: string;
  confirmarEmail: string;
  senha: string;
}

export default function Cadastro() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroFormData>();

  const onSubmit = (data: CadastroFormData) => {
    console.log(data);
    router.push('/login');
  };


  return (
    <main>
      <div className="container-fluid d-flex min-vh-100">
        <div className="row min-vw-100">
          <div className="col-12 col-md-4 bg-light d-flex justify-content-center align-items-center">
            <h2>Bem vindo à WA Loja!</h2>
          </div>
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <div className="form-group">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    {...register("email", { required: "O email é obrigatório" })}
                  />
                  {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmarEmail" className="form-label">
                    Confirmar email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="confirmarEmail"
                    aria-describedby="confirmarEmail"
                    {...register("confirmarEmail", { required: "O campo de confirmar email é obrigatório" })}
                  />
                  {errors.confirmarEmail && <span>{errors.confirmarEmail.message}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="senha">Senha</label>
                  <input
                    className="form-control"
                    id="senha"
                    type="password"
                    {...register("senha", {
                      required: "A senha é obrigatória",
                      minLength: {
                        value: 6,
                        message: "A senha deve ter pelo menos 6 caracteres",
                      },
                    })}
                  />
                  {errors.senha && <span>{errors.senha.message}</span>}
                </div>

                <div className="d-grid col-12">
                  <button type="submit" className="btn btn-success">
                    Confirmar cadastro
                  </button>
                </div>

                <div className="text-center mt-3">
                  <Link href="/login" className="btn btn-link">
                    já possuo cadastro
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}