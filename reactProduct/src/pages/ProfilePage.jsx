import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FormTextField from '../components/FormTextField.jsx'
import { orders } from '../data/orders.js'
import { updateProfile } from '../store/profileSlice.js'
import { formatPrice } from '../utils/formatPrice.js'

function ProfilePage() {
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile)
  const [isSaved, setIsSaved] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: profile })

  function onSubmit(data) {
    dispatch(updateProfile(data))
    setIsSaved(true)
  }

  const filledLabel = { inputLabel: { shrink: true } }

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AccountCircleIcon sx={{ fontSize: 80 }} color="action" />
        <Box>
          <Typography variant="h4" component="h1">
            {profile.fullName}
          </Typography>
          <Typography color="text.secondary">{profile.email}</Typography>
        </Box>
      </Box>

      <Box>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Account details
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <FormTextField
            name="fullName"
            label="Full name"
            register={register}
            rules={{ required: 'Enter your full name' }}
            errors={errors}
            slotProps={filledLabel}
          />
          <FormTextField
            name="email"
            label="Email"
            type="email"
            register={register}
            rules={{
              required: 'Enter your email',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
            }}
            errors={errors}
            slotProps={filledLabel}
          />
          <FormTextField
            name="phone"
            label="Phone number"
            type="tel"
            register={register}
            rules={{ required: 'Enter your phone number' }}
            errors={errors}
            slotProps={filledLabel}
          />
          <FormTextField
            name="address"
            label="Shipping address"
            multiline
            rows={3}
            register={register}
            rules={{ required: 'Enter your shipping address' }}
            errors={errors}
            slotProps={filledLabel}
          />
          <Button type="submit" variant="contained" sx={{ alignSelf: 'flex-start' }}>
            Save changes
          </Button>
          {isSaved && <Alert severity="success">Changes saved</Alert>}
        </Box>
      </Box>

      <Box>
        <Typography variant="h5" component="h2" sx={{ mb: 1 }}>
          Order history
        </Typography>
        <List>
          {orders.map((order, index) => (
            <Box key={order.id}>
              {index > 0 && <Divider component="li" />}
              <ListItem
                secondaryAction={<Chip label={order.status} size="small" variant="outlined" />}
              >
                <ListItemText primary={order.name} secondary={formatPrice(order.price)} />
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
    </Container>
  )
}

export default ProfilePage
