
const users = async(parent, args, { getUsers }) => {
  const users = await getUsers()
  return users.json()
}

const user = async (parent, {id, firstName }, {getUsers}) => {
    const response = await getUsers("/" + id)
    const user = await response.json()
    return user 
}

export const useResolvers = {
    Query:{
      users,
      user
    }
}