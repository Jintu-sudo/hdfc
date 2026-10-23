import TextField from '@mui/material/TextField'

function FormTextField({ name, label, register, rules, errors, ...otherProps }) {
  const { ref, ...fieldProps } = register(name, rules)

  return (
    <TextField
      label={label}
      {...fieldProps}
      inputRef={ref}
      error={Boolean(errors[name])}
      helperText={errors[name]?.message}
      {...otherProps}
    />
  )
}

export default FormTextField
