import TextField from '@mui/material/TextField'

// A MUI TextField that is already connected to react-hook-form.
// register() returns a "ref" that has to go on the real <input>, and MUI
// calls that prop "inputRef". Doing it here means we only write it once.
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
