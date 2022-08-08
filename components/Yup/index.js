import * as yup from "yup";
export const ShemaLogin = yup.object().shape({
    email: yup
        .string()
        .required("Campo obrigatorio")
        .email("Email invaldio"),
    password: yup
        .string()
        .required("Campo obrigatorio")
        .min(6, "Minimo 6 caracteres.")
})
export const ShemaRegister = yup.object().shape({
    name: yup
        .string()
        .required("Campo Obrigatorio"),
    lastName: yup
        .string()
        .required("Campo Obrigatorio"),
    tel: yup
        .string()
        .required("Campo Obrigatorio")
        .min(10, "numero de telefone invalido")
        .max(11, "numero de celular invalido."),
    email: yup
        .string()
        .required("Campo Obrigatorio")
        .email("Email invalido."),
    confirmEmail: yup
        .string()
        .required("Campo Obrigatorio")
        .oneOf([yup.ref("email"), "Email não coincidem"]),
    password: yup
        .string()
        .required("Campo Obrigatorio")
        .min(6, "No minimo 6 caracteres")
        .max(18, "No maximo 18 caracteres")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/,
            "A senha deve conter uma das, uma Letra maiuscula e minuscula e um Caracteres especial(@ , $, !, %, *, ?, &, -) "
        ),
    confirPassword: yup
        .string()
        .required("Campo Obrigatorio")
        .oneOf([yup.ref("password")], "Senha não coincidem"),
    isAdm: yup
        .string()
        .required("Campo Obrigatorio")
})
export const ShemaModal = yup.object().shape({
    name: yup
        .string()
        .required("Campo Obrigatorio")
        .max(19, "Maximo de 19 caracteres."),
    img: yup
        .string()
        .required("Campo Obrigatorio"),
    description: yup
        .string()
        .required("Campo Obrigatorio")
        .max(90, "Maximo de 90 caracteres."),
    price: yup
        .string()
        .required("Campo Obrigatorio"),

})