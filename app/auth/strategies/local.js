/**
 * Local class.
 */
class Local {
  /**
     * Check the given credentials.
     *
     * @param   {string}  data
     * @param   {string}  password
     *
     * @return  {string}
     */
  async checkCredentials(data, password) {
    const user = await container.userRepository.first({'email': data}) || await container.userRepository.first({user_number: data});
    if (user && user.password && await user.verifyPassword(password)) return user;

    return false;
  }
}

module.exports = Local;
